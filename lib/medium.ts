import Parser from 'rss-parser';
import * as cheerio from 'cheerio';

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export interface MediumArticle {
  id: string;
  title: string;
  link: string;
  pubDate: string;
  author: string;
  content: string;
  thumbnail: string;
  categories: string[];
  industry: string;
  slug: string;
  toc: TocItem[];
}

const parser = new Parser({
  customFields: {
    item: [
      ['content:encoded', 'contentEncoded'],
      ['dc:creator', 'creator']
    ],
  },
});

// Helper to extract image from HTML content
function extractThumbnail(htmlContent: string): string {
  const match = htmlContent.match(/<img[^>]+src="([^">]+)"/);
  return match ? match[1] : 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop';
}

function determineIndustry(categories: string[] = []): string {
  const lowerCategories = categories.map(c => c.toLowerCase());

  if (lowerCategories.some(c => c.includes('health') || c.includes('medical') || c.includes('clinic'))) return "Healthcare & Life Sciences";
  if (lowerCategories.some(c => c.includes('finance') || c.includes('bank') || c.includes('money') || c.includes('fintech'))) return "Financial Services & Banking";
  if (lowerCategories.some(c => c.includes('retail') || c.includes('commerce') || c.includes('shop'))) return "E-commerce & Retail";
  if (lowerCategories.some(c => c.includes('saas') || c.includes('software') || c.includes('tech'))) return "Software as a Service (SaaS)";
  if (lowerCategories.some(c => c.includes('manufactur') || c.includes('supply') || c.includes('factory'))) return "Manufacturing & Supply Chain";
  if (lowerCategories.some(c => c.includes('real estate') || c.includes('property'))) return "Real Estate & Property Management";
  if (lowerCategories.some(c => c.includes('educat') || c.includes('school') || c.includes('learn'))) return "Education & EdTech";
  if (lowerCategories.some(c => c.includes('legal') || c.includes('law') || c.includes('compliance'))) return "Legal & Compliance";
  if (lowerCategories.some(c => c.includes('marketing') || c.includes('advertis') || c.includes('seo'))) return "Marketing & Advertising";
  if (lowerCategories.some(c => c.includes('hr') || c.includes('human resource') || c.includes('recruit'))) return "Human Resources & Recruiting";
  if (lowerCategories.some(c => c.includes('logistic') || c.includes('transport') || c.includes('shipping'))) return "Logistics & Transportation";
  if (lowerCategories.some(c => c.includes('media') || c.includes('entertainment') || c.includes('video'))) return "Media & Entertainment";
  if (lowerCategories.some(c => c.includes('telecom') || c.includes('network'))) return "Telecommunications";
  if (lowerCategories.some(c => c.includes('energy') || c.includes('utilit') || c.includes('power'))) return "Energy & Utilities";
  if (lowerCategories.some(c => c.includes('hospitality') || c.includes('hotel') || c.includes('tourism') || c.includes('travel'))) return "Hospitality & Tourism";

  return "Software as a Service (SaaS)"; // Default fallback
}

// Helper to clean up medium html and generate table of contents
function processMediumHtml(rawHtml: string): { cleanHtml: string, toc: TocItem[] } {
  if (!rawHtml) return { cleanHtml: '', toc: [] };

  const $ = cheerio.load(rawHtml);

  // Medium often includes the hero image inside a <figure> tag right at the top.
  // We want to remove the very first image because we use it as the main thumbnail on our own layout.
  $('img').first().closest('figure').remove();

  // Sometimes the first img isn't in a figure. Let's ensure the first img is gone if it's identical to the thumbnail.
  // A simpler approach: just remove the first <img> tag overall to avoid duplication with the hero banner.
  $('img').first().remove();

  // Clean up medium specific classes/styles that might break our layout
  $('img').removeAttr('width').removeAttr('height').addClass('w-full h-auto rounded-xl shadow-md my-8 object-cover');
  $('figure').addClass('my-8 flex flex-col items-center justify-center');
  $('figcaption').addClass('text-center text-sm text-muted-foreground mt-2 italic');

  // Enhance headings with IDs for the table of contents
  const toc: TocItem[] = [];
  $('h1, h2, h3').each((index, element) => {
    const el = $(element);
    const text = el.text().trim();
    if (!text) return;

    // Create an ID from the text (slugify)
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    el.attr('id', id);
    el.addClass('scroll-mt-24'); // Add scroll margin for sticky header offset

    // Determine level based on tag name
    let level = 2;
    if (element.tagName === 'h1') level = 1;
    if (element.tagName === 'h3') level = 3;

    // Only track h2 and h3 for ToC to keep it clean (Medium usually uses h1 for title which we don't need in ToC)
    if (level > 1) {
      toc.push({ id, text, level });
    }
  });

  return {
    cleanHtml: $.html(),
    toc
  };
}

export async function fetchMediumArticles(): Promise<MediumArticle[]> {
  try {
    const feed = await parser.parseURL('https://medium.com/feed/widle-studio');

    return feed.items.map(item => {
      // Extract slug from link
      let slug = '';
      if (item.link) {
        const url = new URL(item.link);
        const pathParts = url.pathname.split('/');
        slug = pathParts[pathParts.length - 1] || '';
      }

      const rawContent = item.contentEncoded || item.content || '';
      const thumbnail = extractThumbnail(rawContent);
      const categories = item.categories || [];

      const { cleanHtml, toc } = processMediumHtml(rawContent);

      return {
        id: item.guid || slug,
        title: item.title || '',
        link: item.link || '',
        pubDate: item.pubDate || new Date().toISOString(),
        author: item.creator || 'Widle Studio',
        content: cleanHtml,
        thumbnail,
        categories,
        industry: determineIndustry(categories),
        slug,
        toc
      };
    });
  } catch (error) {
    console.error("Error fetching Medium articles:", error);
    return [];
  }
}
