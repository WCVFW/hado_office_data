import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Database,
  Layers,
  Settings,
  BarChart2,
  Grid,
  Brain,
  DollarSign,
  Lock,
  Award,
  Headphones,
} from "lucide-react";
import DSMainMenu from "../mainmenu";

const DataStackModernization: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto space-y-12">
      {/* Hero */}
      <DSMainMenu/>
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Nimble Data Stack Modernization Services
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Retain and extend the value of your legacy data to unleash hidden
          insights with our customized data stack modernization solutions.
        </p>
      </section>

      {/* Intro */}
      <section className="space-y-6">
        <p className="text-gray-600 leading-relaxed">
          Are you struggling to modernize your data platforms and extract value
          from siloed legacy systems? Traditional storage systems often fall
          short in delivering deep, connected insights.
        </p>
        <p className="text-gray-600 leading-relaxed">
          At Nimble Acuity, we help global clients migrate legacy data to
          modern platforms, optimize data warehouses, and adopt advanced
          modernization solutions. Our seasoned experts ensure you maximize the
          value of your data assets.
        </p>
      </section>

      {/* Services */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          Data Stack Modernization Solutions We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Database,
              title: "Data Platform Development",
              desc: "Custom solutions to build modern, cost-effective, and scalable data platforms.",
            },
            {
              icon: Layers,
              title: "Data Warehouse Migration",
              desc: "Reliable migration services ensuring zero data loss and smooth platform transfer.",
            },
            {
              icon: Settings,
              title: "Data Platform Management",
              desc: "Cloud infrastructure, reporting, analysis, and data lifecycle management.",
            },
            {
              icon: BarChart2,
              title: "Simplifying BI",
              desc: "Advanced BI strategies like data modeling, logical warehousing, and self-service prep.",
            },
            {
              icon: Grid,
              title: "Centralized Data Modelling",
              desc: "Unified access to datasets across BI tools for faster and more reliable analysis.",
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
            { title: "Business Intelligence & Analytics" },
            { title: "Data Science Consulting" },
            { title: "Data Analytics Services" },
            { title: "Artificial Intelligence Services" },
          ].map((other, idx) => (
            <Card
              key={idx}
              className="rounded-2xl shadow-md hover:shadow-lg transition"
            >
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
          Why Choose Nimble Acuity for Data Stack Modernization?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: DollarSign,
              title: "Affordable Pricing",
              desc: "Flexible pricing options tailored to your business needs and budget.",
            },
            {
              icon: Lock,
              title: "Information Security",
              desc: "ISO-certified standards ensure complete safety and restricted data access.",
            },
            {
              icon: Award,
              title: "High-quality Services",
              desc: "Error-free modernization backed by the latest tools and stringent quality checks.",
            },
            {
              icon: Headphones,
              title: "24/7 Support",
              desc: "Round-the-clock assistance to quickly resolve client queries and issues.",
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
                Digital Transformation for Automotive Firm
              </h3>
              <p className="text-gray-600">
                Delivered RPA-based transformation for a leading African
                automotive firm at cost-effective rates.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 space-y-2">
              <h3 className="text-lg font-semibold text-gray-700">
                Chart Extraction for Healthcare Provider
              </h3>
              <p className="text-gray-600">
                Provided efficient RPA-powered chart extraction for a healthcare
                service provider to reduce manual workload.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-blue-50 py-10 rounded-2xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Get Scalable Data Stack Modernization Support
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Modernize your data stack to uncover insights, integrate multiple
          sources, enable real-time analytics, and democratize access for
          employees across your organization.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
          Get in Touch
        </button>
      </section>
    </div>
  );
};

export default DataStackModernization;
