import { fetchMediumArticles } from '@/lib/medium'

export const revalidate = 3600;

export async function GET() {
  const articles = await fetchMediumArticles();

  const siteUrl = 'https://widle.ai'; // Or appropriate domain

  const feedContent = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Widle.ai Blog</title>
    <link>${siteUrl}/blog</link>
    <description>Latest insights, tutorials, and case studies on AI, workflow automation, and custom software development from Widle.ai</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${articles.map(article => `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${siteUrl}/blog/${article.slug}</link>
      <guid isPermaLink="true">${siteUrl}/blog/${article.slug}</guid>
      <pubDate>${new Date(article.pubDate).toUTCString()}</pubDate>
      <author><![CDATA[${article.author}]]></author>
      <category><![CDATA[${article.industry}]]></category>
      ${article.categories.map(cat => `<category><![CDATA[${cat}]]></category>`).join('')}
      <description><![CDATA[An article by ${article.author} about ${article.industry}]]></description>
      <content:encoded><![CDATA[${article.content}]]></content:encoded>
    </item>
    `).join('')}
  </channel>
</rss>`;

  return new Response(feedContent, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
