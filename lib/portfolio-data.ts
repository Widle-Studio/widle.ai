export const PORTFOLIO_DATA = [
  {
    title: "Xaver Sports",
    category: "Retool SaaS Platform",
    industry: "Media & Entertainment",
    image: "/images/portfolio/Xaver-Sport.png",
    description: "A high-performance sports management platform built for scalability and real-time data tracking.",
    slug: "xaver-sport-retool"
  },
  {
    title: "Scalers",
    category: "Internal Tooling & Automation",
    industry: "Software as a Service (SaaS)",
    image: "/images/portfolio/Scalers-Case.png",
    description: "Cloud-native architecture optimization allowing for elastic scaling during peak user loads.",
    slug: "scaler-retool"
  },
  {
    title: "Instacoach Platform",
    category: "Web Application",
    industry: "Education & EdTech",
    image: "/images/portfolio/InstaCoach.png",
    description: "Connecting athletes with world-class coaches through an intuitive booking and video-review interface.",
    slug: "instacoach-retool"
  },
  {
    title: "Dexter Angels",
    category: "Financial Dashboard",
    industry: "Financial Services & Banking",
    image: "/images/portfolio/Dexter-Angels.png",
    description: "Comprehensive financial analytics dashboard empowering angel investors with real-time portfolio tracking.",
    slug: "dexter-angels"
  },
  {
    title: "Yoy PR",
    category: "Content Management",
    industry: "Marketing & Advertising",
    image: "/images/portfolio/Yoy-pr.png",
    description: "Automated PR distribution network streamlining press release submissions and tracking engagement metrics.",
    slug: "yoypr"
  },
  {
    title: "UXDX",
    category: "Event Management",
    industry: "Media & Entertainment",
    image: "/images/portfolio/UXDX.png",
    description: "A robust event platform facilitating seamless ticketing, scheduling, and attendee networking for large-scale tech conferences.",
    slug: "uxdx"
  }
];

export function getPortfolioByIndustry(industryName: string) {
  return PORTFOLIO_DATA.filter(item => item.industry === industryName);
}
