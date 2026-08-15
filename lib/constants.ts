import { Activity, Landmark, ShoppingCart, Building2, Truck, Plane, Laptop, GraduationCap, Scale, Megaphone, Users, Film, Wifi, Zap } from "lucide-react"

export const INDUSTRIES_DATA = [
  { name: "Healthcare & Life Sciences", slug: "healthcare-and-life-sciences", icon: Activity, description: "Enhance diagnostic accuracy, accelerate drug discovery, and streamline patient data management." },
  { name: "Financial Services & Banking", slug: "financial-services-and-banking", icon: Landmark, description: "Automate fraud detection, optimize algorithmic trading, and personalize customer banking experiences." },
  { name: "E-commerce & Retail", slug: "e-commerce-and-retail", icon: ShoppingCart, description: "Boost sales with intelligent recommendation engines, optimize pricing dynamically, and forecast inventory." },
  { name: "Software as a Service (SaaS)", slug: "software-as-a-service-saas", icon: Laptop, description: "Build scalable cloud infrastructure, internal tooling, and integrate custom AI features into your SaaS." },
  { name: "Manufacturing & Supply Chain", slug: "manufacturing-and-supply-chain", icon: Building2, description: "Implement predictive maintenance, optimize logistics, and ensure rigorous quality control with AI." },
  { name: "Real Estate & Property Management", slug: "real-estate-and-property-management", icon: Building2, description: "Automate lease generation, tenant support, and property valuation forecasting." },
  { name: "Education & EdTech", slug: "education-and-edtech", icon: GraduationCap, description: "Deploy personalized tutoring agents, automate grading, and analyze student retention trends." },
  { name: "Legal & Compliance", slug: "legal-and-compliance", icon: Scale, description: "Streamline contract review, automate document discovery, and deploy secure on-premise AI solutions." },
  { name: "Marketing & Advertising", slug: "marketing-and-advertising", icon: Megaphone, description: "Optimize ad bidding dynamically and generate highly targeted content using advanced LLMs." },
  { name: "Human Resources & Recruiting", slug: "human-resources-and-recruiting", icon: Users, description: "Automate resume screening, streamline interview scheduling, and analyze employee retention." },
  { name: "Logistics & Transportation", slug: "logistics-and-transportation", icon: Truck, description: "Optimize fleet routing in real-time and predict supply chain disruptions before they happen." },
  { name: "Media & Entertainment", slug: "media-and-entertainment", icon: Film, description: "Analyze audience viewership trends and automate content tagging and curation at scale." },
  { name: "Telecommunications", slug: "telecommunications", icon: Wifi, description: "Automate network provisioning, predict outages, and deliver intelligent customer support." },
  { name: "Energy & Utilities", slug: "energy-and-utilities", icon: Zap, description: "Balance smart grid data, forecast energy demand, and automate regulatory reporting." },
  { name: "Hospitality & Tourism", slug: "hospitality-and-tourism", icon: Plane, description: "Deliver personalized booking experiences, dynamic pricing strategies, and intelligent concierge agents." }
] as const;

export const INDUSTRIES = INDUSTRIES_DATA.map(i => i.name);
export type Industry = typeof INDUSTRIES[number];
