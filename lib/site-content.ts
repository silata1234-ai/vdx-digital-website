export type NavLink = {
  label: string;
  href: string;
};

export type HeroBadge = {
  label: string;
};

export type ProblemCard = {
  title: string;
  description: string;
  icon: "messages" | "alert" | "layout" | "notebook" | "clock" | "leads";
};

export type ServiceCard = {
  title: string;
  description: string;
  icon: "website" | "automation" | "assistant" | "capture";
  accent: string;
};

export type PortfolioItem = {
  name: string;
  type: string;
  description: string;
  category: "Real Website Project" | "Demo Automation" | "Demo AI Assistant";
  href?: string;
  ctaLabel?: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type Benefit = {
  title: string;
  description: string;
};

export type AssistantBusiness = {
  key: "beauty-salon" | "restaurant" | "auto-service" | "medical-clinic" | "other";
  label: string;
};

export type AssistantProblem = {
  key:
    | "repetitive-questions"
    | "missed-inquiries"
    | "no-website"
    | "manual-tracking"
    | "more-clients";
  label: string;
};

export const navLinks: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const heroBadges: HeroBadge[] = [
  { label: "Websites" },
  { label: "Automation" },
  { label: "AI Assistants" },
  { label: "Lead Systems" },
];

export const problemCards: ProblemCard[] = [
  {
    title: "Too many repetitive messages",
    description:
      "Visitors keep asking the same questions about services, prices, bookings, and availability.",
    icon: "messages",
  },
  {
    title: "Missed customer inquiries",
    description:
      "Leads slip through because there is no clear system for capturing, tracking, and replying.",
    icon: "alert",
  },
  {
    title: "No professional website",
    description:
      "An outdated or missing website makes the business feel harder to trust and easier to ignore.",
    icon: "layout",
  },
  {
    title: "Manual tracking in notebooks or chats",
    description:
      "Customer requests are scattered across messages, screenshots, notes, and memory.",
    icon: "notebook",
  },
  {
    title: "Slow response time",
    description:
      "Late replies create friction and cost momentum when potential customers are ready to buy.",
    icon: "clock",
  },
  {
    title: "No clear system for leads",
    description:
      "Without forms, CRM sheets, and notifications, every new inquiry depends on manual follow-up.",
    icon: "leads",
  },
];

export const services: ServiceCard[] = [
  {
    title: "Business Websites",
    description:
      "Modern, fast and mobile-friendly websites built to make your business look professional and convert visitors into customers.",
    icon: "website",
    accent: "Professional online presence",
  },
  {
    title: "Business Automation",
    description:
      "Automated workflows that reduce manual tasks, organize customer requests, and notify you instantly when a new lead arrives.",
    icon: "automation",
    accent: "Less admin, more focus",
  },
  {
    title: "AI Chatbot Assistants",
    description:
      "Smart website or social media assistants that answer common questions, guide customers, and collect contact details.",
    icon: "assistant",
    accent: "Always-on first response",
  },
  {
    title: "Lead Capture Systems",
    description:
      "Forms, CRM sheets, notifications and follow-up systems that make sure every inquiry is saved and handled properly.",
    icon: "capture",
    accent: "Every inquiry accounted for",
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    name: "NUVE Beauty Salon",
    type: "Premium website with service pages and mobile-first UX",
    description:
      "Premium website for a beauty salon with service pages, gallery, contact section, Google Maps integration and mobile-first design.",
    category: "Real Website Project",
    href: "https://nuve-website-rouge.vercel.app",
    ctaLabel: "View Project",
  },
  {
    name: "HVAC Lead System",
    type: "Lead form to Google Sheets workflow",
    description:
      "Demo lead capture system for air conditioning companies. Customer fills a form, the request is saved in Google Sheets and the business receives an instant notification.",
    category: "Demo Automation",
  },
  {
    name: "Restaurant Assistant",
    type: "Conversational FAQ and booking concept",
    description:
      "AI assistant concept for restaurants that answers questions about working hours, menu, reservations and collects booking requests.",
    category: "Demo AI Assistant",
  },
  {
    name: "Salon Booking Flow",
    type: "Appointment request automation concept",
    description:
      "Automation concept for beauty salons that helps manage appointment requests and reduce repetitive messages.",
    category: "Demo Automation",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Free consultation",
    description: "We talk through your business, current setup, and where time or leads are being lost.",
  },
  {
    step: "02",
    title: "Business problem analysis",
    description: "We identify the bottlenecks first so the solution is built around outcomes, not jargon.",
  },
  {
    step: "03",
    title: "Website or automation setup",
    description: "The right tools are connected into one practical system that suits how you already work.",
  },
  {
    step: "04",
    title: "Testing and launch",
    description: "Everything is checked across devices and workflows so your setup feels clear from day one.",
  },
  {
    step: "05",
    title: "Support and improvements",
    description: "After launch, we keep refining what saves time, improves lead handling, and supports growth.",
  },
];

export const benefits: Benefit[] = [
  {
    title: "Practical business-focused solutions",
    description: "Everything is designed to reduce friction, save time, and make daily operations smoother.",
  },
  {
    title: "Clean modern design",
    description: "A polished visual presence that makes small businesses look established and trustworthy.",
  },
  {
    title: "Mobile-first websites",
    description: "Built to feel sharp and responsive on the devices most customers actually use.",
  },
  {
    title: "Time-saving automation",
    description: "Lead handling, notifications, and follow-up tasks become more reliable with less manual work.",
  },
  {
    title: "Clear communication",
    description: "No vague handoff. The process stays understandable, collaborative, and easy to track.",
  },
  {
    title: "Built for small and local businesses",
    description: "The work is shaped around practical growth, not enterprise complexity for its own sake.",
  },
];

export const assistantBusinesses: AssistantBusiness[] = [
  { key: "beauty-salon", label: "Beauty salon" },
  { key: "restaurant", label: "Restaurant" },
  { key: "auto-service", label: "Auto service" },
  { key: "medical-clinic", label: "Medical / clinic" },
  { key: "other", label: "Other" },
];

export const assistantProblems: AssistantProblem[] = [
  { key: "repetitive-questions", label: "I receive too many repetitive questions" },
  { key: "missed-inquiries", label: "I miss customer inquiries" },
  { key: "no-website", label: "I do not have a professional website" },
  { key: "manual-tracking", label: "I track everything manually" },
  { key: "more-clients", label: "I want more clients" },
];

const recommendationMap: Record<string, string> = {
  "beauty-salon:repetitive-questions":
    "Your business could benefit from a website with service information, booking buttons and an AI assistant that answers common questions automatically.",
  "restaurant:missed-inquiries":
    "Your business could benefit from a reservation assistant that answers questions about working hours, menu and booking availability.",
  "auto-service:manual-tracking":
    "Your business could benefit from a lead form connected to a Google Sheet or CRM, so every request is saved and organized.",
};

export function getAssistantRecommendation(
  business: AssistantBusiness["key"],
  problem: AssistantProblem["key"],
) {
  const directMatch = recommendationMap[`${business}:${problem}`];

  if (directMatch) {
    return directMatch;
  }

  if (problem === "repetitive-questions") {
    return "A website assistant could answer common questions automatically, guide visitors, and reduce the amount of repetitive replies you handle manually.";
  }

  if (problem === "missed-inquiries") {
    return "A lead capture system with instant notifications would help you catch every inquiry earlier and reply with more consistency.";
  }

  if (problem === "no-website") {
    return "A modern website would give your business a stronger online presence, clearer service information, and a better path for new customers to contact you.";
  }

  if (problem === "manual-tracking") {
    return "A simple automation flow connected to Google Sheets or a CRM could keep every request organized without relying on notebooks or scattered chats.";
  }

  return "A combination of a conversion-focused website, lead capture flow, and practical automation could help your business attract more clients and respond faster.";
}
