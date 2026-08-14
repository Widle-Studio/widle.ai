import Parser from 'rss-parser';

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

export async function fetchMediumArticles(): Promise<MediumArticle[]> {
  try {
    const feed = await parser.parseURL('https://medium.com/feed/widle-studio');

    return feed.items.map(item => {
      // Extract slug from link
      // Medium links are like https://medium.com/widle-studio/title-hash?source=rss
      let slug = '';
      if (item.link) {
        const url = new URL(item.link);
        const pathParts = url.pathname.split('/');
        slug = pathParts[pathParts.length - 1] || '';
      }

      const content = item.contentEncoded || item.content || '';
      const thumbnail = extractThumbnail(content);
      const categories = item.categories || [];

      return {
        id: item.guid || slug,
        title: item.title || '',
        link: item.link || '',
        pubDate: item.pubDate || new Date().toISOString(),
        author: item.creator || 'Widle Studio',
        content,
        thumbnail,
        categories,
        industry: determineIndustry(categories),
        slug
      };
    });
  } catch (error) {
    console.error("Error fetching Medium articles:", error);
    return [];
  }
}
