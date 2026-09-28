import React from "react";
import {
  Database,
  Settings,
  GitBranch,
  RefreshCw,
  Share2,
  Layers,
  BarChart3,
  Cpu,
  ShieldCheck,
  LineChart,
  Network, // ✅ safe replacement for API
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import DSMainMenu from "../mainmenu";

const services = [
  {
    title: "Data Warehousing & Data Lake Integration",
    description:
      "Enterprise-grade performance with Snowflake, Redshift, BigQuery, Azure Synapse, and Databricks Lakehouse. Support for structured, semi-structured, and unstructured data.",
    icon: Database,
  },
{
  title: "API Management",
  description:
    "Create, manage, and monitor APIs with gateway-based lifecycle management using Kong, Apigee, and AWS API Gateway.",
  icon: Network, // ✅ replaced Api with Network
},

  {
    title: "ETL (Extract, Transform, Load)",
    description:
      "Reliable ETL pipelines leveraging Airflow, Talend, AWS Glue with logging, validation, and reconciliation for strong observability.",
    icon: Settings,
  },
  {
    title: "Data Transformation",
    description:
      "High-fidelity data restructuring, normalization, and enrichment using DBT, Matillion, and Dataform for analytics-ready data.",
    icon: GitBranch,
  },
  {
    title: "Master Data Management",
    description:
      "Centralized MDM solutions using SAP MDG, Profisee, Informatica, and Reltio with scalable, multi-domain master data hubs.",
    icon: RefreshCw,
  },
  {
    title: "Real-Time Data Integration",
    description:
      "Low-latency streaming with Kafka, Spark, Flink, and schema registries to ensure transparency, fault tolerance, and scalability.",
    icon: Share2,
  },
];

const additionalServices = [
  {
    title: "Data Science Consulting",
    desc: "Leverage AI-powered consulting to enable predictive analytics and data-driven decision-making.",
    icon: LineChart,
  },
  {
    title: "Data Analytics Services",
    desc: "Turn raw data into strategic insights with personalized dashboards and improved planning.",
    icon: BarChart3,
  },
  {
    title: "Artificial Intelligence Services",
    desc: "Use ML models and advanced algorithms to automate processes and improve customer experiences.",
    icon: Cpu,
  },
  {
    title: "Data Engineering Services",
    desc: "Build high-performance data pipelines and architecture with our scalable engineering solutions.",
    icon: Layers,
  },
];

const whyChooseUs = [
  { title: "Enhanced Data Interoperability", desc: "Seamless flow across platforms, ensuring agility and reliable integration." },
  { title: "Customizable Integration Frameworks", desc: "Tailored frameworks to meet industry-specific and evolving needs." },
  { title: "Seamless Data Flow", desc: "Break data silos and improve operational efficiency with end-to-end flow." },
  { title: "Strategic Insight Generation", desc: "Turn unstructured data into insights for long-term planning." },
  { title: "Advanced Security Protocols", desc: "Protect sensitive data with strong compliance and security measures." },
  { title: "Comprehensive Support & Expertise", desc: "Dedicated assistance for effective implementation and maintenance." },
];

export default function EnterpriseDataIntegration() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="text-center py-16 bg-gradient-to-r from-indigo-600 to-blue-700 text-white">
        <h1 className="text-4xl font-bold mb-4">Nimble Enterprise Data Integration Services</h1>
        <p className="max-w-3xl mx-auto text-lg">
          Make data your company’s strongest suite and drive big returns with robust enterprise data integration.
        </p>
        <Button className="mt-6 bg-white text-indigo-600 hover:bg-gray-100">Get a Consultation</Button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our Range of Enterprise Data Integration Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Card key={idx} className="shadow-md hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <service.icon className="h-10 w-10 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 bg-gray-50 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Additional Services You Can Benefit From</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {additionalServices.map((srv, idx) => (
            <Card key={idx} className="shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <srv.icon className="h-10 w-10 text-blue-600 mb-4 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">{srv.title}</h3>
                <p className="text-gray-600 text-sm">{srv.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Our Enterprise Data Integration Company?</h2>
        <Accordion type="single" collapsible className="w-full">
          {whyChooseUs.map((reason, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger>{reason.title}</AccordionTrigger>
              <AccordionContent>{reason.desc}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 bg-indigo-600 text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Integrate Smarter?</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Empower your business with seamless, secure, and scalable enterprise data integration solutions.
        </p>
        <Button className="bg-white text-indigo-600 hover:bg-gray-100">Talk to Our Experts</Button>
      </section>
    </div>
  );
}
