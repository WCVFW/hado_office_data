import React from "react";
import {
  Brain,
  BarChart3,
  Layers,
  TrendingUp,
  Users,
  LineChart,
  Database,
  ShieldCheck,
  DollarSign,
  Building,
  Award,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import DSMainMenu from "../mainmenu";

const DataScienceService: React.FC = () => {
  const services = [
    {
      title: "Business Intelligence & Analytics",
      description:
        "Make data-driven predictions, improve performance, reduce waste, and analyze ROI with expert BI consulting.",
      icon: BarChart3,
    },
    {
      title: "Recommender System Development",
      description:
        "Boost sales with intelligent recommendations based on customer history and preferences.",
      icon: Layers,
    },
    {
      title: "Classification System Development",
      description:
        "Leverage big data statistics and advanced monitoring to build actionable classification systems.",
      icon: Brain,
    },
    {
      title: "Forecasting System Development",
      description:
        "Predict customer behavior and purchase patterns using advanced forecasting models.",
      icon: TrendingUp,
    },
    {
      title: "Cognitive Customer Analytics",
      description:
        "Gain deeper insights into customer behavior with campaign, churn, clickstream, and targeting analytics.",
      icon: Users,
    },
    {
      title: "Enterprise Operations Analytics",
      description:
        "End-to-end analytics for demand, sales, finance, HR, and security risk across your organization.",
      icon: LineChart,
    },
  ];

  const processSteps = [
    "Data Collection & Preparation",
    "Exploratory Data Analysis",
    "Model Development",
    "Model Validation",
    "Deployment & Monitoring",
  ];

  const benefits = [
    {
      title: "Affordable Solutions",
      description:
        "Pay only for the DSaaS model you use with flexible pricing options.",
      icon: DollarSign,
    },
    {
      title: "Data Security",
      description:
        "ISO/IEC 27001:2022 certified – ensuring complete data confidentiality.",
      icon: ShieldCheck,
    },
    {
      title: "Experienced Data Scientists",
      description:
        "A talented and highly skilled team of Data Science consulting experts.",
      icon: Award,
    },
    {
      title: "World-Class Infrastructure",
      description:
        "Access to cutting-edge tools and office spaces for best-in-class service delivery.",
      icon: Building,
    },
    {
      title: "Quality Services",
      description:
        "Reliable, accurate, and efficient Data Science as a Service for SMEs and enterprises.",
      icon: Database,
    },
  ];

  const successStories = [
    {
      title: "Big Data Platform for Document Processing",
      description:
        "Helped a leading bank automate document processing with a robust big data platform.",
    },
    {
      title: "Open Source Analytics Workbench",
      description:
        "Built a scalable analytics workbench for a bank using structured & unstructured data.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <DSMainMenu/>
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">
            Nimble Data Science as a Service
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Reduce operational costs, improve targeting, and unlock business
            insights with our scalable Data Science as a Service (DSaaS)
            solutions.
          </p>
        </div>

        {/* Services */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          DSaaS - Services We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md hover:shadow-lg">
              <CardContent className="p-6">
                <service.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Our Data Science Process
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center relative"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold mb-2">
                {idx + 1}
              </div>
              <p className="text-gray-700 font-medium">{step}</p>
              {idx < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-full w-16 h-0.5 bg-blue-400"></div>
              )}
            </div>
          ))}
        </div>

        {/* Benefits */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <benefit.icon className="w-10 h-10 text-blue-600 mb-4 mx-auto" />
                <h3 className="text-lg font-semibold text-gray-800">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stories */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Client Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {successStories.map((story, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {story.title}
                </h3>
                <p className="text-gray-600">{story.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

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

export default DataScienceService;
