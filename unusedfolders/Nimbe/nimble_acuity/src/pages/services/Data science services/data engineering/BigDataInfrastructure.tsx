import React from "react";
import {
  Server,
  Database,
  Cpu,
  ShieldCheck,
  Settings,
  BarChart3,
  GitBranch,
  RefreshCw,
  Lock,
  LineChart,
  Cloud,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import DSMainMenu from "../mainmenu";

const BigDataInfrastructure: React.FC = () => {
  const services = [
    {
      title: "Big Data Analytics Infrastructure",
      description:
        "Scalability with elastic architecture, high-performance parallel processing, and cost-optimized resource allocation.",
      icon: BarChart3,
    },
    {
      title: "Real-time Data Processing",
      description:
        "Event-driven pipelines with Apache Kafka, supporting dynamic flows and real-time insights.",
      icon: RefreshCw,
    },
    {
      title: "Big Data Management",
      description:
        "Strong governance, automated workflows, and metadata management for reliable data discovery.",
      icon: Settings,
    },
    {
      title: "Big Data Integration",
      description:
        "Seamless ETL pipelines, real-time synchronization, and cross-platform interoperability.",
      icon: GitBranch,
    },
    {
      title: "Data Security & Compliance",
      description:
        "Robust encryption, access control, and adherence to GDPR and HIPAA standards.",
      icon: ShieldCheck,
    },
    {
      title: "Big Data Infrastructure Consulting",
      description:
        "Strategic planning, custom roadmaps, and risk assessments tailored to your business.",
      icon: Cpu,
    },
  ];

  const benefits = [
    {
      value: "35%",
      text: "Decrease in Downtime with Proactive Monitoring",
    },
    {
      value: "60%",
      text: "Enhancement in Data Security with Advanced Encryption Techniques",
    },
    {
      value: "70%",
      text: "Improvement in System Scalability Using Cloud Technologies",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <DSMainMenu/>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Nimble Big Data Infrastructure Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Enhance your IT systems with our expert big data infrastructure
            management — from dynamic resource provisioning and efficient data
            pipelines to advanced security protocols.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md text-center">
              <CardContent className="p-6">
                <p className="text-4xl font-bold text-blue-600">
                  {benefit.value}
                </p>
                <p className="mt-2 text-gray-700">{benefit.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, idx) => (
            <Card
              key={idx}
              className="rounded-2xl shadow-md hover:shadow-lg transition"
            >
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

        {/* Why Choose Us */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Why Choose Us as Your Big Data Infrastructure Partner?
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our tailored big data infrastructure solution provides flexibility,
            security, and AI-ready capabilities to help you innovate, collaborate,
            and scale with confidence.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default BigDataInfrastructure;
