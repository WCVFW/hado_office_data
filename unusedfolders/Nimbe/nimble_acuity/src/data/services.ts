export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  featured?: boolean;
}

// You can easily add/modify services here
export const services: Service[] = [
  {
    id: "data-analytics",
    title: "Data Analytics & Visualization",
    description: "Transform raw data into clear, actionable insights with advanced analytics and intuitive visualizations.",
    icon: "BarChart3",
    category: "Analytics",
    featured: true
  },
  {
    id: "business-intelligence",
    title: "Business Intelligence",
    description: "Comprehensive BI solutions that provide deep insights into your business operations and market opportunities.",
    icon: "TrendingUp",
    category: "Intelligence",
    featured: true
  },
  {
    id: "strategic-consulting",
    title: "Strategic Consulting",
    description: "Expert guidance to help your organization navigate complex challenges and identify growth opportunities.",
    icon: "Users",
    category: "Consulting",
    featured: true
  },
  {
    id: "process-optimization",
    title: "Process Optimization",
    description: "Streamline operations and improve efficiency through data-driven process analysis and optimization.",
    icon: "Settings",
    category: "Operations"
  },
  // Add your 8 additional services here following the same structure
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    description: "Guide your organization through comprehensive digital transformation initiatives.",
    icon: "Zap",
    category: "Technology"
  },
  {
    id: "risk-management",
    title: "Risk Management",
    description: "Identify, assess, and mitigate business risks through comprehensive analysis and strategic planning.",
    icon: "Shield",
    category: "Risk"
  },
  {
    id: "financial-modeling",
    title: "Financial Modeling",
    description: "Build robust financial models for forecasting, valuation, and strategic decision-making.",
    icon: "Calculator",
    category: "Finance"
  },
  {
    id: "market-research",
    title: "Market Research",
    description: "Conduct comprehensive market analysis to identify opportunities and competitive advantages.",
    icon: "Search",
    category: "Research"
  },
  {
    id: "performance-management",
    title: "Performance Management",
    description: "Implement systems and processes to measure, monitor, and improve organizational performance.",
    icon: "Target",
    category: "Management"
  },
  {
    id: "technology-consulting",
    title: "Technology Consulting",
    description: "Leverage technology solutions to drive innovation and competitive advantage.",
    icon: "Monitor",
    category: "Technology"
  },
  {
    id: "change-management",
    title: "Change Management",
    description: "Support organizational change initiatives through structured planning and implementation.",
    icon: "ArrowRight",
    category: "Management"
  },
  {
    id: "training-development",
    title: "Training & Development",
    description: "Build internal capabilities through customized training programs and knowledge transfer.",
    icon: "BookOpen",
    category: "Education"
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export const getServicesByCategory = (category: string): Service[] => {
  return services.filter(service => service.category === category);
};

export const getFeaturedServices = (): Service[] => {
  return services.filter(service => service.featured);
};