import React from "react";
import {
  Server,
  Database,
  Cloud,
  RefreshCcw,
  Settings,
  ShieldCheck,
  Clock,
  Users,
  Headphones,
  BarChart3,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import DSMainMenu from "../mainmenu";

const ClouderaSupport: React.FC = () => {
  const services = [
    {
      title: "Cluster Design & Setup",
      description:
        "Designing and setting up Cloudera clusters tailored to business requirements.",
      icon: Server,
    },
    {
      title: "Shift-to-Cloud",
      description:
        "Support for shift-to-cloud and burst-to-cloud adoption scenarios.",
      icon: Cloud,
    },
    {
      title: "Architecture Optimization",
      description:
        "Assessment and planning to optimize existing systems to hybrid architecture.",
      icon: Settings,
    },
    {
      title: "Hadoop Administration",
      description:
        "Support for CDH, Impala, Hive, Spark, HUE, Kafka, and Cloudera Manager.",
      icon: Database,
    },
    {
      title: "Upgrades & Migration",
      description:
        "Upgrade legacy Cloudera CDH/HDP to CDP with minimal disruption.",
      icon: RefreshCcw,
    },
    {
      title: "Health Checks & Troubleshooting",
      description:
        "Comprehensive platform health check, use case analysis, and troubleshooting.",
      icon: BarChart3,
    },
  ];

  const benefits = [
    {
      title: "Data Security",
      description:
        "ISO/IEC 27001:2022 certified to ensure complete protection of client data.",
      icon: ShieldCheck,
    },
    {
      title: "Affordable Pricing",
      description:
        "Flexible and cost-effective plans tailored to your business needs.",
      icon: BarChart3,
    },
    {
      title: "Expert Team",
      description:
        "Highly skilled Cloudera support specialists with years of experience.",
      icon: Users,
    },
    {
      title: "24/7 Support",
      description:
        "Round-the-clock assistance across time zones for uninterrupted service.",
      icon: Headphones,
    },
    {
      title: "Fast Turnaround",
      description:
        "Global delivery centers enabling quick project execution.",
      icon: Clock,
    },
  ];

  const otherServices = [
    "Data Science as a Service",
    "Lead Scoring Services",
    "Route Optimization Services",
    "Recommender System Development",
  ];

  const successStories = [
    {
      title: "Big Data Platform for Document Processing",
      description:
        "Developed a big data-based platform for a leading bank to automate document processing.",
    },
    {
      title: "Open Source Analytics Workbench",
      description:
        "Architected an open-source analytics workbench for a bank using structured and unstructured data.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <DSMainMenu/>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Nimble Cloudera Support Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Get access to the latest big data technologies and build real-world
            solutions with our Cloudera support services at highly affordable
            prices.
          </p>
        </div>

        {/* Services */}
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Cloudera Support Services We Offer
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md hover:shadow-lg">
              <CardContent className="p-6">
                <service.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h4 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h4>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits */}
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Why Choose Nimble Acuity for Cloudera Support?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <benefit.icon className="w-10 h-10 text-blue-600 mb-4 mx-auto" />
                <h4 className="text-lg font-semibold text-gray-800">
                  {benefit.title}
                </h4>
                <p className="mt-2 text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Services */}
        <div className="mb-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Other Services You Can Benefit From
          </h3>
          <ul className="flex flex-wrap justify-center gap-4 text-gray-700">
            {otherServices.map((service, idx) => (
              <li
                key={idx}
                className="px-4 py-2 bg-white rounded-xl shadow-sm border"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Client Success Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {successStories.map((story, idx) => (
              <Card key={idx} className="rounded-2xl shadow-md">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {story.title}
                  </h4>
                  <p className="text-gray-600">{story.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
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

export default ClouderaSupport;
