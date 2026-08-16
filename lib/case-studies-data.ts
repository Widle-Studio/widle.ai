export const CASE_STUDIES_DATA = [
  {
    id: "1",
    title: "MedTech AI Diagnostics",
    industry: "Healthcare & Life Sciences",
    metric_highlight: "Reduced diagnostic time by 40% using custom Computer Vision models.",
    slug: "medtech-ai-diagnostics",
    image_url: "/images/Widle-Logo.jpg"
  },
  {
    id: "2",
    title: "FinTech Fraud Detection",
    industry: "Financial Services & Banking",
    metric_highlight: "Identified anomalous transactions in real-time, saving $2M annually.",
    slug: "fintech-fraud-detection",
    image_url: "/images/Widle-Logo.jpg"
  },
  {
    id: "3",
    title: "Retail Demand Forecasting",
    industry: "E-commerce & Retail",
    metric_highlight: "Improved inventory turnover by 25% with predictive analytics.",
    slug: "retail-demand-forecasting",
    image_url: "/images/Widle-Logo.jpg"
  },
  {
    id: "4",
    title: "Automated Compliance Auditing",
    industry: "Legal & Compliance",
    metric_highlight: "Processed 10,000+ contracts in 24 hours using advanced LLMs.",
    slug: "legal-compliance-automation",
    image_url: "/images/Widle-Logo.jpg"
  },
  {
    id: "5",
    title: "Predictive Maintenance for IoT",
    industry: "Manufacturing & Supply Chain",
    metric_highlight: "Decreased factory downtime by 18% with predictive anomaly detection.",
    slug: "manufacturing-predictive-maintenance",
    image_url: "/images/Widle-Logo.jpg"
  },
  {
    id: "6",
    title: "Dynamic Supply Chain Routing",
    industry: "Logistics & Transportation",
    metric_highlight: "Cut fuel costs by 12% and improved delivery times with AI routing.",
    slug: "logistics-dynamic-routing",
    image_url: "/images/Widle-Logo.jpg"
  }
];

export function getCaseStudiesByIndustry(industryName: string) {
  return CASE_STUDIES_DATA.filter(item => item.industry === industryName);
}
