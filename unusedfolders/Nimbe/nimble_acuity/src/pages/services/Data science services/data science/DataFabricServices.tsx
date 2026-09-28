import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  ShieldCheck,
  GitMerge,
  Boxes,
  ClipboardCheck,
  Users,
  Lock,
  Award,
  DollarSign,
  TrendingUp,
  UserCheck,
  Globe,
  Clock,
} from "lucide-react";
import DSMainMenu from "../mainmenu";

const DataFabricServices: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto space-y-12">
      {/* Hero */}
      <DSMainMenu/>
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Nimble Data Fabric Services
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Get access to a unified, simplified data fabric solution for
          integration, management, and governance at highly affordable prices.
        </p>
      </section>

      {/* Intro */}
      <section className="space-y-6">
        <p className="text-gray-600 leading-relaxed">
          Is your business struggling to manage data across different systems?
          Do you want to unleash the power of Data Fabric for integration,
          governance, and streamlined management? If yes, Nimble Acuity should
          be your choice.
        </p>
        <p className="text-gray-600 leading-relaxed">
          We are a leading provider of data fabric solutions, offering
          data-driven services worldwide. Our expertise ensures enterprises can
          put massive amounts of data to work through simplified, secure, and
          scalable solutions.
        </p>
      </section>

      {/* Services */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          Data Fabric Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: ShieldCheck,
              title: "Data Governance & Privacy",
              desc: "Create trusted, business-ready data foundations with built-in protection and compliance.",
            },
            {
              icon: GitMerge,
              title: "Data Integration",
              desc: "Integrate data seamlessly across multi-cloud environments for universal access.",
            },
            {
              icon: Boxes,
              title: "Data Fabric Architecture",
              desc: "Design robust data accumulation and management systems powered by data fabric.",
            },
            {
              icon: ClipboardCheck,
              title: "Data Fabric Consulting",
              desc: "Get expert guidance to understand tools, technologies, and strategies for adoption.",
            },
          ].map((service, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md">
              <CardContent className="p-6 space-y-3">
                <service.icon className="w-10 h-10 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-700">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Other Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Data Analytics Services" },
            { title: "Data Engineering Services" },
            { title: "Artificial Intelligence Services" },
            { title: "Business Intelligence & Analytics" },
          ].map((other, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md hover:shadow-lg transition">
              <CardContent className="p-6 text-center">
                <p className="text-gray-700 font-medium">{other.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          Why Nimble Data Fabric Services to Nimble Acuity?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Users,
              title: "Certified Professionals",
              desc: "Leverage skilled experts to integrate and manage data fabric solutions seamlessly.",
            },
            {
              icon: Lock,
              title: "Data Security",
              desc: "ISO-certified practices with robust protocols to ensure complete data protection.",
            },
            {
              icon: Award,
              title: "Quality Service",
              desc: "100% accurate and reliable services to enhance profitability and trust.",
            },
            {
              icon: DollarSign,
              title: "Affordable Rates",
              desc: "Cost-effective pricing models designed for businesses of all sizes.",
            },
            {
              icon: TrendingUp,
              title: "Scalability",
              desc: "Easily scale services to meet evolving business needs with agility.",
            },
            {
              icon: UserCheck,
              title: "Single-point Contact",
              desc: "Dedicated professionals assigned to handle your service-related concerns.",
            },
            {
              icon: Globe,
              title: "Experienced Team",
              desc: "Global data scientists and engineers providing advanced, cutting-edge solutions.",
            },
            {
              icon: Clock,
              title: "24/7 Availability",
              desc: "Round-the-clock support via email, chat, and calls for continuous assistance.",
            },
          ].map((benefit, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md">
              <CardContent className="p-6 space-y-3 flex flex-col items-center text-center">
                <benefit.icon className="w-10 h-10 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-700">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 space-y-2">
              <h3 className="text-lg font-semibold text-gray-700">
                Big Data Platform for Document Processing
              </h3>
              <p className="text-gray-600">
                Developed a data-driven platform for a banking organization to
                automate document workflows.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 space-y-2">
              <h3 className="text-lg font-semibold text-gray-700">
                Centralized Data Infrastructure for Banking Group
              </h3>
              <p className="text-gray-600">
                Built a storage and processing infrastructure to centralize data
                management for a leading Indian bank.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-blue-50 py-10 rounded-2xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Choose Nimble Acuity for Seamless Data Fabric Solutions
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Our world-class data fabric services empower SMEs and multinational
          corporations with scalable, secure, and cost-effective solutions.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
          Get in Touch
        </button>
      </section>
    </div>
  );
};

export default DataFabricServices;
