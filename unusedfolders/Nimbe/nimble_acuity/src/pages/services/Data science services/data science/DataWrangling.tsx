import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Database,
  Search,
  Sliders,
  Download,
  RefreshCcw,
  Shield,
  Settings,
  DollarSign,
  Building,
  CheckCircle,
} from "lucide-react";
import DSMainMenu from "../mainmenu";

const DataWrangling: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto space-y-12">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Nimble Data Wrangling Services
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Get access to industry-leading data cleaning and wrangling solutions
          provided by seasoned data scientists at cost-effective rates.
        </p>
      </section>

      {/* Intro */}
      <section className="space-y-6">
        <p className="text-gray-600 leading-relaxed">
          The growth and success of a company depend on the quality and
          preparation of data it uses for making business decisions. This need
          to ensure perfection in data presentation drives the demand for data
          wrangling solutions.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Nimble Acuity has over 26+ years of experience in data preparation
          and wrangling. We understand that insufficient data preparation is a
          key reason why projects fail. Our professionals work with clients
          across the globe to deliver premium data wrangling services.
        </p>
      </section>

      {/* Services */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          Data Wrangling Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Database,
              title: "Data Enrichment & Cleansing",
              desc: "Redesign and clean your data by removing or correcting errors, ensuring it's usable and reliable.",
            },
            {
              icon: Search,
              title: "Data Discovery",
              desc: "Browse and assess the structure, content, and quality of your data for better usability.",
            },
            {
              icon: Sliders,
              title: "Standardizing Data",
              desc: "Modify and standardize data to align with your specific business needs and processes.",
            },
            {
              icon: Download,
              title: "Data Acquisition",
              desc: "Identify and obtain the most valuable pieces of information from your available resources.",
            },
            {
              icon: RefreshCcw,
              title: "Data Transformation",
              desc: "Convert data from one format to another based on its structure, ensuring compatibility.",
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

      {/* Why Choose Us */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          Why Choose Nimble Acuity for Data Cleaning & Wrangling?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Settings,
              title: "Customized Options",
              desc: "Tailored solutions for every business need with a client-first approach.",
            },
            {
              icon: DollarSign,
              title: "Affordable Pricing",
              desc: "Pocket-friendly rates designed for SMEs and enterprises alike.",
            },
            {
              icon: Shield,
              title: "Data Security",
              desc: "ISO-certified with strict data protection policies to keep your information safe.",
            },
            {
              icon: Building,
              title: "Superior Infrastructure",
              desc: "Equipped with advanced tools and technologies for top-notch services.",
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

      {/* Client Success Stories */}
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
                Helped a banking firm automate its document processing workflow
                by implementing a big data-based platform.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 space-y-2">
              <h3 className="text-lg font-semibold text-gray-700">
                Analytics Platform for a Finance Provider
              </h3>
              <p className="text-gray-600">
                Designed and implemented an open-source analytics platform for
                structured and unstructured data with quick turnaround time.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-blue-50 py-10 rounded-2xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Nimble Data Cleaning & Wrangling Services to Nimble Acuity
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Get superior-quality data wrangling solutions to prepare and unify
          your data for business intelligence and decision-making.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default DataWrangling;
