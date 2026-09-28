import React from "react";
import {
  Users,
  Target,
  Zap,
  Database,
  BarChart3,
  Settings,
  CheckCircle,
  Brain,
  Cloud,
  PieChart,
  Mail,
  TrendingUp,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import DSMainMenu from "../mainmenu";

const LeadScoringServices: React.FC = () => {
  const services = [
    {
      title: "Lead Nurturing",
      description:
        "AI-driven nurturing with sales cycle analytics, strategy testing, and automated email scheduling to re-engage dormant leads.",
      icon: Users,
    },
    {
      title: "Lead Qualification",
      description:
        "Identify and prioritize the hottest leads with objective grading and CRM integration (Salesforce, Dynamics, etc.).",
      icon: Target,
    },
    {
      title: "Lead Automation & Segmentation",
      description:
        "Automate repetitive tasks like assignments, and manage scoring rules per customer segment for optimized workflows.",
      icon: Zap,
    },
    {
      title: "Data-Driven Interaction",
      description:
        "Personalize offers and email paths using customer behavior insights, turning raw data into actionable strategies.",
      icon: Database,
    },
    {
      title: "Sales Cycle Analytics",
      description:
        "Measure funnel attributes, identify revenue-driving campaigns, and optimize performance through ROI-based analytics.",
      icon: BarChart3,
    },
    {
      title: "Customer Analytics",
      description:
        "Track customer journeys, identify key metrics, and re-target lost clients while attracting new ones effectively.",
      icon: PieChart,
    },
  ];

  const process = [
    "Defining the Scope of the Project",
    "Data Analysis",
    "Model Configuration",
    "Quality Analysis",
    "Solution Deployment",
  ];

  const features = [
    "Advanced Report Generation",
    "Campaign & Program Analysis",
    "Anonymous Buyer Retargeting",
    "Influence Modeling",
    "Custom API & Integrations",
    "In-depth Dashboards",
    "Marketing Calendar Integration",
    "Customer Engagement Engine",
    "A/B Testing",
    "Revenue Modeling",
    "CRM Integration",
  ];

  const tools = [
    "Django",
    "Hadoop",
    "Luigi",
    "MongoDB",
    "AmCharts",
    "Python",
  ];

  const expertise = [
    "Expert Big Data Solutions",
    "Cloud-hosted SaaS services",
    "Text & image mining",
    "Machine learning workflows",
    "Deep learning & cognitive computing",
    "Predictive analytics",
  ];

  const benefits = [
    "Automate routine communications",
    "Ensure pipeline accuracy with clean data",
    "Visualize trends with real-time dashboards",
    "Real-time feedback on lead quality & ROI sources",
    "Improve team performance & customer approach",
    "Boost efficiency with prioritized leads",
    "Forecast conversions with accurate scoring",
    "Optimize contact strategy across the sales cycle",
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <DSMainMenu/>
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">
            Nimble Lead Scoring Services
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Attract, nurture, and close deals faster with AI-powered lead scoring
            and analytics solutions. Drive revenue with smarter sales strategies.
          </p>
        </div>

        {/* Services */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Our Lead Scoring Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((s, idx) => (
            <Card key={idx} className="rounded-2xl shadow hover:shadow-lg">
              <CardContent className="p-6">
                <s.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800">
                  {s.title}
                </h3>
                <p className="mt-2 text-gray-600">{s.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          The Lead Scoring Process
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
          {process.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold mb-2">
                {idx + 1}
              </div>
              <p className="text-gray-700">{step}</p>
              {idx < process.length - 1 && (
                <div className="hidden md:block w-16 h-0.5 bg-blue-400 mt-2"></div>
              )}
            </div>
          ))}
        </div>

        {/* Features */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Key Features
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {features.map((f, idx) => (
            <li
              key={idx}
              className="flex items-center gap-2 text-gray-700 bg-white p-3 rounded-lg shadow"
            >
              <CheckCircle className="w-5 h-5 text-green-600" />
              {f}
            </li>
          ))}
        </ul>

        {/* Tools */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Lead Scoring Tools We Use
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tools.map((tool, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-blue-100 text-blue-700 font-medium rounded-lg shadow"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Expertise */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Our Technology Expertise
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {expertise.map((e, idx) => (
            <li
              key={idx}
              className="flex items-center gap-2 text-gray-700 bg-white p-3 rounded-lg shadow"
            >
              <Brain className="w-5 h-5 text-purple-600" />
              {e}
            </li>
          ))}
        </ul>

        {/* Benefits */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Benefits of Outsourcing Lead Scoring
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-16">
          {benefits.map((b, idx) => (
            <li
              key={idx}
              className="flex items-center gap-2 text-gray-700 bg-white p-3 rounded-lg shadow"
            >
              <TrendingUp className="w-5 h-5 text-blue-600" />
              {b}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="text-center">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
            Get in Touch with Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default LeadScoringServices;
