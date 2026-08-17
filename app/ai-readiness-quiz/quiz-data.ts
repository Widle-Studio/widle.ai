import { INDUSTRIES } from '@/lib/constants';

export const industries = INDUSTRIES;
export const industries = [
  "Healthcare & Life Sciences",
  "Financial Services & Banking",
  "E-commerce & Retail",
  "Software as a Service (SaaS)",
  "Manufacturing & Supply Chain",
  "Real Estate & Property Management",
  "Education & EdTech",
  "Legal & Compliance",
  "Marketing & Advertising",
  "Human Resources & Recruiting",
  "Logistics & Transportation",
  "Media & Entertainment",
  "Telecommunications",
  "Energy & Utilities",
  "Hospitality & Tourism"
] as const;

export type Industry = typeof industries[number];

export interface QuizOption {
  text: string;
  score: number;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

// Function to generate 10 specialized questions per industry based on widle.ai expertise
export const getQuestionsForIndustry = (industry: Industry): QuizQuestion[] => {
  const baseQuestions = (industryName: string, examples: { data: string, workflow: string, agent: string, llm: string, analytics: string }) => [
    {
      id: 1,
      question: `How is your ${industryName} data currently structured for AI adoption?`,
      options: [
        { text: `Data is siloed in legacy systems and hard to access.`, score: 1 },
        { text: `We have some centralized data, but it needs significant cleaning.`, score: 2 },
        { text: `We have a unified, AI-ready data pipeline (e.g., modern data warehouse).`, score: 3 },
      ]
    },
    {
      id: 2,
      question: `What is the primary goal for implementing AI in your ${industryName} workflows?`,
      options: [
        { text: `Basic exploration and understanding of what AI can do for us.`, score: 1 },
        { text: `Automating repetitive internal tasks like ${examples.workflow}.`, score: 2 },
        { text: `Deploying core AI features directly to our clients or deeply integrating into our product.`, score: 3 },
      ]
    },
    {
      id: 3,
      question: `How ready are you to implement LLM (Large Language Model) integrations?`,
      options: [
        { text: `We haven't looked into LLMs beyond using ChatGPT individually.`, score: 1 },
        { text: `We are experimenting with basic prompt engineering for internal use.`, score: 2 },
        { text: `We want to build custom LLM wrappers or RAG (Retrieval-Augmented Generation) applications like ${examples.llm}.`, score: 3 },
      ]
    },
    {
      id: 4,
      question: `Are you currently using or planning to build Autonomous AI Agents?`,
      options: [
        { text: `We don't know enough about AI agents yet.`, score: 1 },
        { text: `We are planning to use agents for basic internal task routing.`, score: 2 },
        { text: `We want to deploy multi-agent systems for complex tasks like ${examples.agent}.`, score: 3 },
      ]
    },
    {
      id: 5,
      question: `How do you handle data governance, privacy, and compliance?`,
      options: [
        { text: `We don't have a formal AI data governance policy yet.`, score: 1 },
        { text: `We rely on third-party SaaS vendors to handle compliance.`, score: 2 },
        { text: `We require strict, on-premise or highly secure cloud deployments with custom compliance rails.`, score: 3 },
      ]
    },
    {
      id: 6,
      question: `What is your approach to predictive analytics and dashboards?`,
      options: [
        { text: `We rely on basic spreadsheets or static reports.`, score: 1 },
        { text: `We use standard BI tools (Tableau, PowerBI) but want to add AI predictions.`, score: 2 },
        { text: `We want custom, real-time AI dashboards forecasting ${examples.analytics}.`, score: 3 },
      ]
    },
    {
      id: 7,
      question: `What level of technical expertise exists within your organization?`,
      options: [
        { text: `No dedicated engineering or data science team.`, score: 1 },
        { text: `We have software engineers, but limited AI/Machine Learning expertise.`, score: 2 },
        { text: `We have an internal AI/Data team but need experts to help scale and architect solutions.`, score: 3 },
      ]
    },
    {
      id: 8,
      question: `How are your current software systems integrated?`,
      options: [
        { text: `Mostly manual data entry between disconnected tools.`, score: 1 },
        { text: `We use basic APIs and Zapier/Make for integrations.`, score: 2 },
        { text: `We have a highly connected, API-first architecture ready for AI microservices.`, score: 3 },
      ]
    },
    {
      id: 9,
      question: `What is your expected timeline for a functional AI implementation?`,
      options: [
        { text: `12+ months (Still researching and securing budget).`, score: 1 },
        { text: `3-6 months (Planning phase, ready to start a pilot).`, score: 2 },
        { text: `Immediate (Ready to build and deploy within weeks).`, score: 3 },
      ]
    },
    {
      id: 10,
      question: `What is the biggest bottleneck preventing you from adopting AI today?`,
      options: [
        { text: `Lack of understanding of ROI and use cases.`, score: 1 },
        { text: `Concerns about data privacy, security, and hallucinations.`, score: 2 },
        { text: `Lack of specialized engineering talent to build reliable, production-grade systems.`, score: 3 },
      ]
    }
  ];

  switch(industry) {
    case "Healthcare & Life Sciences":
      return baseQuestions("Healthcare", { data: "EHRs and clinical trials", workflow: "patient onboarding", agent: "triage and appointment scheduling", llm: "medical documentation summarization", analytics: "patient outcomes and readmission risks" });
    case "Financial Services & Banking":
      return baseQuestions("Financial", { data: "transaction logs", workflow: "KYC and compliance checks", agent: "fraud detection and resolution", llm: "financial report analysis", analytics: "market trends and risk modeling" });
    case "E-commerce & Retail":
      return baseQuestions("E-commerce", { data: "customer purchase history", workflow: "inventory management", agent: "customer support and returns", llm: "personalized product recommendations", analytics: "demand forecasting and pricing" });
    case "Software as a Service (SaaS)":
      return baseQuestions("SaaS", { data: "user telemetry", workflow: "customer success outreach", agent: "automated code review or QA", llm: "natural language to SQL querying", analytics: "churn prediction and user engagement" });
    case "Manufacturing & Supply Chain":
      return baseQuestions("Manufacturing", { data: "IoT sensor data", workflow: "quality control", agent: "supply chain routing", llm: "maintenance manual querying", analytics: "predictive maintenance and downtime" });
    case "Real Estate & Property Management":
      return baseQuestions("Real Estate", { data: "property listings", workflow: "lease generation", agent: "tenant maintenance requests", llm: "automated listing descriptions", analytics: "property valuation forecasting" });
    case "Education & EdTech":
      return baseQuestions("Education", { data: "student performance records", workflow: "grading and feedback", agent: "personalized tutoring", llm: "curriculum generation", analytics: "student retention and success rates" });
    case "Legal & Compliance":
      return baseQuestions("Legal", { data: "case files and contracts", workflow: "document discovery", agent: "contract review automation", llm: "legal precedent search", analytics: "litigation risk assessment" });
    case "Marketing & Advertising":
      return baseQuestions("Marketing", { data: "campaign metrics", workflow: "content distribution", agent: "dynamic ad bidding", llm: "copywriting and content generation", analytics: "campaign ROI and audience segmentation" });
    case "Human Resources & Recruiting":
      return baseQuestions("HR", { data: "employee records", workflow: "resume screening", agent: "interview scheduling", llm: "job description generation", analytics: "employee retention and performance" });
    case "Logistics & Transportation":
      return baseQuestions("Logistics", { data: "fleet tracking", workflow: "route optimization", agent: "dispatch management", llm: "customs documentation parsing", analytics: "fuel consumption and delivery times" });
    case "Media & Entertainment":
      return baseQuestions("Media", { data: "viewer engagement", workflow: "content tagging", agent: "content curation", llm: "script analysis", analytics: "audience viewership trends" });
    case "Telecommunications":
      return baseQuestions("Telecom", { data: "network logs", workflow: "network provisioning", agent: "network outage resolution", llm: "customer support transcripts", analytics: "network traffic and churn" });
    case "Energy & Utilities":
      return baseQuestions("Energy", { data: "smart grid data", workflow: "grid balancing", agent: "outage dispatch", llm: "regulatory reporting", analytics: "energy demand forecasting" });
    case "Hospitality & Tourism":
      return baseQuestions("Hospitality", { data: "booking history", workflow: "reservation management", agent: "concierge requests", llm: "guest review analysis", analytics: "occupancy rate forecasting" });
    default:
      return baseQuestions("Business", { data: "internal data", workflow: "administrative tasks", agent: "customer support", llm: "document summarization", analytics: "business growth" });
  }
}

export const getSummaryByScore = (score: number) => {
  if (score <= 16) {
    return {
      title: "Foundation Phase",
      description: "Your organization is at the beginning of its AI journey. The immediate focus should be on digital transformation, data centralization, and identifying high-value, low-risk use cases. Before building complex LLMs or agents, we need to ensure your data infrastructure is AI-ready.",
      recommendation: "We recommend starting with an AI Strategy Consulting session. Widle.ai can help audit your existing infrastructure and create a step-by-step roadmap."
    }
  } else if (score <= 24) {
    return {
      title: "Pilot & Integration Phase",
      description: "Your data infrastructure is maturing, and you have clear goals. You are perfectly positioned to build and deploy your first major AI implementation. Whether it is automating workflows, integrating LLMs into internal tools, or building predictive dashboards, you are ready to prove ROI.",
      recommendation: "We recommend focusing on high-ROI automation or Internal Tooling. Widle.ai can help you deploy custom LLM wrappers, Retool dashboards, or workflow automations."
    }
  } else {
    return {
      title: "Enterprise Scaling Phase",
      description: "You have strong technical foundations and immediate, complex needs. Your challenge isn't 'if' AI works, but how to deploy it reliably, securely, and at scale. You are ready for advanced AI Agent ecosystems, custom model training, and robust MLOps.",
      recommendation: "You are ready for advanced Cloud-Native AI Architectures. Widle.ai can partner with your engineering team to build fault-tolerant inference pipelines, custom Agents, or Agentic RAG systems."
    }
  }
}
