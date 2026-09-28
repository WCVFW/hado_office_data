import React from "react";
import {
  Database,
  Settings,
  Code,
  Layers,
  Network,
  Cpu,
  BarChart3,
  ShieldCheck,
  Globe,
  Users,
  Clock,
  Zap,
  Server,
  LineChart,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import DSMainMenu from "../mainmenu";

const services = [
  {
    title: "Hadoop Development",
    description:
      "Expertise in MapReduce, Pig, Hive, Spark, Kafka, Flink, and NoSQL DB for large-scale data solutions.",
    icon: Code,
  },
  {
    title: "Hadoop Implementation",
    description:
      "On-premise or cloud implementation with experience in Vanilla Hadoop and Hadoop distributions.",
    icon: Settings,
  },
  {
    title: "Hadoop Integration",
    description:
      "Seamless integration with enterprise IT architecture for real-time streaming data analysis.",
    icon: Network,
  },
  {
    title: "Hadoop Consulting",
    description:
      "Consulting across industries with expertise in Hive, Spark, Cassandra, and MapReduce.",
    icon: Layers,
  },
  {
    title: "Architecture Design & Strategy",
    description:
      "Custom Hadoop architecture for modern data systems, including ingestion and cluster setup.",
    icon: Globe,
  },
  {
    title: "Configuration & Optimization",
    description:
      "Cluster setup, performance tuning, and memory/disk optimization for efficient deployment.",
    icon: Cpu,
  },
  {
    title: "Data Mining & Aggregation",
    description:
      "Predictive analytics and data aggregation services to streamline operations and decision-making.",
    icon: BarChart3,
  },
  {
    title: "Big Data Solutions",
    description:
      "Custom big data frameworks to maximize operational efficiency and transform businesses.",
    icon: Server,
  },
  {
    title: "Business Intelligence & Analytics",
    description:
      "Integrated BI solutions with data discovery, visualization, and advanced analytics.",
    icon: LineChart,
  },
];

const tools = [
  "Ambari", "Avro", "Cloudera Impala", "Flume", "HDFS", "HBase", "Hive",
  "Mahout", "MapReduce", "MongoDB", "NoSQL", "Oozie", "Pig", "Scala",
  "Apache Spark", "Sqoop", "ZooKeeper", "Java", "C/C++", "Ruby", "JavaScript", "Solr"
];

const reasons = [
  { title: "Cost Effective", desc: "Competitive rates with optimized development strategies." },
  { title: "Information Security", desc: "ISO/IEC 27001:2022 certified with strict ISMS practices." },
  { title: "Modern Infrastructure", desc: "Redundant power, IT systems, and cutting-edge tools." },
  { title: "Expert Team", desc: "Hand-picked Hadoop developers and consultants." },
  { title: "Quality Standards", desc: "International coding standards with rigorous testing." },
  { title: "Global Delivery Centers", desc: "5 centers worldwide for fast project initiation." },
  { title: "24/7 Support", desc: "Dedicated project managers and always-available support." },
  { title: "Faster TAT", desc: "Agile processes for minimized inefficiencies and fast delivery." },
  { title: "Scalability", desc: "Solutions that scale without extra infra or admin overhead." },
];

export default function HadoopDevelopment() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <h1 className="text-4xl font-bold mb-4">Nimble Hadoop Development Services</h1>
        <p className="max-w-3xl mx-auto text-lg">
          Harness, store & process large-scale data with Hadoop to optimize decision-making, improve insights, and ensure scalability.
        </p>
        <Button className="mt-6 bg-white text-blue-600 hover:bg-gray-100">Get Started</Button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Hadoop Development Services We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Card key={idx} className="shadow-md hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <service.icon className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 bg-gray-50 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Hadoop Tools & Technologies We Leverage</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {tools.map((tool, idx) => (
            <span key={idx} className="px-4 py-2 bg-white border rounded-full shadow-sm text-sm">
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Nimble Acuity for Hadoop Development?</h2>
        <Accordion type="single" collapsible className="w-full">
          {reasons.map((reason, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger>{reason.title}</AccordionTrigger>
              <AccordionContent>{reason.desc}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA */}
      <section className="text-center py-16 bg-blue-600 text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Scale with Hadoop?</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Partner with our expert Hadoop developers, analysts, and consultants for robust big data solutions tailored to your needs.
        </p>
        <Button className="bg-white text-blue-600 hover:bg-gray-100">Talk to Our Experts</Button>
      </section>
    </div>
  );
}
