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
  $('img').first().closest('figure').remove();
  $('img').first().remove();

  // Clean up medium specific classes/styles that might break our layout
  $('img').removeAttr('width').removeAttr('height').addClass('w-full h-auto rounded-xl shadow-md my-8 object-cover');
  $('figure').addClass('my-8 flex flex-col items-center justify-center');
  $('figcaption').addClass('text-center text-sm text-muted-foreground mt-2 italic');
  $('img').first().closest('figure').remove();
  $('img').first().remove();

  // Clean up medium specific classes/styles that might break our layout
  $('img').removeAttr('width').removeAttr('height').addClass('w-full h-auto rounded-2xl shadow-xl my-12 object-cover');
  $('figure').addClass('my-12 flex flex-col items-center justify-center');
  $('figcaption').addClass('text-center text-sm text-muted-foreground mt-4 italic');

  // Inject Unsplash placeholder images if the article lacks images (less than 1 image remaining after first removal)
  // Or inject before some major H2s to break up text visually.
  const allImages = $('img');

  const h2s = $('h2');
  if (h2s.length > 2 && allImages.length < 2) {
      // Add an image before the second H2 to break up text
      const imgUrl = 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop';
      $(h2s[1]).before(`<figure class="my-12 flex flex-col items-center justify-center"><img src="${imgUrl}" alt="Article Section Banner" class="w-full h-auto rounded-2xl shadow-xl my-12 object-cover" /></figure>`);
  }

  // Inject Icons next to specific tech keywords in text (basic implementation)
  const techIcons = {
    'React': '<svg class="inline-block w-5 h-5 ml-1 text-[#61DAFB] align-text-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118 35.8"><path fill="currentColor" d="M14.6 20c-.8-1.5-2.1-2.7-3.6-3.6 1.5-.9 2.8-2.1 3.6-3.6.9 1.5 2.1 2.7 3.6 3.6-1.5.9-2.8 2.1-3.6 3.6z"/><path fill="currentColor" d="M37.8 19c-2.3-3.6-6.4-5.6-10.8-5.6-4.4 0-8.5 2-10.8 5.6-2.3-3.6-6.4-5.6-10.8-5.6C2.3 13.4.1 16.4.1 19.9c0 3.5 2.2 6.5 5.3 6.5 4.4 0 8.5-2 10.8-5.6 2.3 3.6 6.4 5.6 10.8 5.6 4.4 0 8.5-2 10.8-5.6 2.3-3.6 6.4-5.6 10.8-5.6 3.1 0 5.3-3 5.3-6.5 0-3.5-2.2-6.5-5.3-6.5-4.4 0-8.5 2-10.8 5.6zm-10.8 4.2c-2.8 0-5.1-1.4-6.4-3.5 1.3-2.1 3.6-3.5 6.4-3.5 2.8 0 5.1 1.4 6.4 3.5-1.3 2.1-3.6 3.5-6.4 3.5z"/></svg>',
    'AWS': '<svg class="inline-block w-6 h-6 ml-1 text-[#FF9900] align-text-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12.01 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm2.75 16.5c-1.3 0-2.43-.87-2.73-2.13h-2.58v-.03c.15-.36.33-.7.54-1.03l1.13 1.13c.48.48 1.14.75 1.83.75h2.15v2.29h-2.15zm2.71-3.41l-2.02-2.02c.4-.64.63-1.4.63-2.2 0-2.31-1.89-4.2-4.2-4.2s-4.2 1.89-4.2 4.2c0 .8.23 1.56.63 2.2l-2.02 2.02a7.1 7.1 0 01-1.34-4.22c0-3.95 3.22-7.17 7.17-7.17s7.17 3.22 7.17 7.17a7.1 7.1 0 01-1.34 4.22z"/></svg>',
    'Next.js': '<svg class="inline-block w-5 h-5 ml-1 align-text-bottom text-black dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-8l-37.1-53.5L42.5 86.8h-11L51.3 54 36.1 32h11.7l10 15 25.1 36.3c8.9-10.2 14.5-23.7 14.5-38.6 0-35.3-28.7-64-64-64zm35 94.7c-9 6.8-20.2 10.8-32.2 11.2l39-56.1c1.8 4.5 2.7 9.4 2.7 14.4 0 12.3-4 23.7-11 33l1.5 2.5z"/></svg>',
    'Retool': '<svg class="inline-block w-5 h-5 ml-1 text-[#3C92DC] align-text-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M2.25 12a9.75 9.75 0 1119.5 0 9.75 9.75 0 01-19.5 0zm9.75-8.25a8.25 8.25 0 100 16.5 8.25 8.25 0 000-16.5zM12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9z"/></svg>',
    'Node.js': '<svg class="inline-block w-5 h-5 ml-1 text-[#339933] align-text-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11.83 22.844c-.217.002-.437-.034-.644-.11-1.378-.456-11.186-6.452-11.186-10.734V7.5c0-1.258.825-2.392 2-2.8l9.167-3.235a2.533 2.533 0 0 1 1.666 0l9.167 3.235c1.175.408 2 1.542 2 2.8v4.5c0 4.282-9.808 10.278-11.186 10.734a1.862 1.862 0 0 1-.984.11zm.17-21.377a1.036 1.036 0 0 0-.684 0l-9.167 3.236c-.477.165-.816.634-.816 1.13v4.5c0 2.213 5.433 6.474 10.667 8.89 5.234-2.416 10.667-6.677 10.667-8.89V7.832c0-.496-.339-.965-.816-1.13L12 1.467z"/></svg>'
  };

  $('p, li').each((_, el) => {
      let html = $(el).html();
      if (typeof html !== 'string') return;

      let modified = false;
      Object.entries(techIcons).forEach(([tech, iconHtml]) => {
          // Look for exact word boundary matches, avoiding replacing inside existing tags
          const regex = new RegExp(`\\b(${tech})\\b(?![^<]*>|[^<>]*</)`, 'g');
          if (regex.test(html as string)) {
              html = (html as string).replace(regex, `$1 ${iconHtml}`);
              modified = true;
          }
      });
      if (modified) {
          $(el).html(html);
      }
  });

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
    el.addClass('scroll-mt-32 relative group'); // Add scroll margin for sticky header offset

    // Add a hoverable anchor link for headers
    el.append(`
      <a href="#${id}" class="absolute -left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-primary" aria-label="Link to this section">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
      </a>
    `);

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
    const feed1 = await parser.parseURL('https://medium.com/feed/widle-studio');
    const feed2 = await parser.parseURL('https://medium.com/feed/@suranisaunak');

    // Combine items and remove duplicates based on link or title
    const allItems = [...feed1.items, ...feed2.items];
    const uniqueItemsMap = new Map();
    allItems.forEach(item => {
      const key = item.link || item.title;
      if (key && !uniqueItemsMap.has(key)) {
        uniqueItemsMap.set(key, item);
      }
    });

    const uniqueItems = Array.from(uniqueItemsMap.values());

    // Sort items by pubDate descending (newest first)
    uniqueItems.sort((a, b) => {
      const dateA = new Date(a.pubDate || 0).getTime();
      const dateB = new Date(b.pubDate || 0).getTime();
      return dateB - dateA;
    });

    return uniqueItems.map(item => {
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
