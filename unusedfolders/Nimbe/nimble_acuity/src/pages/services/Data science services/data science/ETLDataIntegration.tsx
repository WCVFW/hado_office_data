import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import DSMainMenu from "../mainmenu";

const ETLDataIntegration: React.FC = () => {
  return (
    <div className="w-full px-6 py-12 bg-gray-50">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Nimble ETL Data Integration Services
        </h1>
        <p className="text-lg text-gray-600">
          Let us offer our ETL assistance to create records for consistent accuracy via 
          replication-ready data management to flush obsolete and corrupt data at affordable rates.
        </p>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          ETL Data Integration Services We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Extraction of Data",
              desc: "Efficiently extract data from multiple sources to enable fast accessibility for analytics.",
            },
            {
              title: "Data Cleansing",
              desc: "Spot and fix data errors, inconsistencies, and redundancies to ensure accuracy.",
            },
            {
              title: "Transformation of Data",
              desc: "Convert units and dimensions into target formats to improve analytics performance.",
            },
            {
              title: "Loading of Data",
              desc: "Load cleansed and transformed data into target databases with efficiency.",
            },
            {
              title: "ETL Process Management",
              desc: "Design and manage strong ETL architecture with fail-safe recovery settings.",
            },
            {
              title: "Data Staging",
              desc: "Systematically stage data for seamless processing between ETL steps.",
            },
          ].map((item, idx) => (
            <Card key={idx} className="shadow rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ETL Process */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Our ETL Data Integration Process
        </h2>
        <ol className="space-y-4">
          {[
            "Extract – Access data from disparate sources with efficient identification.",
            "Load – Insert data into target databases with optimized methods.",
            "Transform – Convert data into required formats for streamlined analysis.",
            "Analysis – Use analytics tools to extract meaningful insights.",
          ].map((step, idx) => (
            <li key={idx} className="flex items-start space-x-3">
              <CheckCircle className="text-green-600 w-5 h-5 mt-1" />
              <span className="text-gray-700">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Other Services */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Other Services You Can Benefit From
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Data Science Consulting",
            "Data Science Training for Corporates",
            "Cloudera Support Services",
            "Business Intelligence & Business Analytics",
          ].map((service, idx) => (
            <Card key={idx} className="shadow rounded-2xl">
              <CardContent className="p-6 text-center">
                <p className="text-gray-700 font-medium">{service}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Why Nimble ETL Services to Nimble Acuity?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Cost-effective & customizable services",
            "ISO-certified with 26+ years of experience",
            "Strong data security (ISO/IEC 27001:2022)",
            "Quality-tested implementations",
            "Scalable and flexible resources",
            "Quick turnaround time",
            "Skilled professional staff",
            "24/7 customer support",
          ].map((point, idx) => (
            <div
              key={idx}
              className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow"
            >
              <CheckCircle className="text-blue-600 w-5 h-5 mt-1" />
              <p className="text-gray-700">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Client Success Stories
        </h2>
        <div className="space-y-6">
          {[
            {
              title: "Streamlined Inventory Management",
              desc: "Helped a top-tier electronics firm improve inventory management with cost-effective RPA solutions.",
            },
            {
              title: "Chart Extraction for Healthcare",
              desc: "Delivered accurate chart extraction services for a healthcare provider using advanced RPA.",
            },
          ].map((caseStudy, idx) => (
            <Card key={idx} className="shadow rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">{caseStudy.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{caseStudy.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto text-center bg-blue-600 text-white p-10 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-4">
          Nimble ETL Data Integration Services Today
        </h2>
        <p className="mb-6">
          Get robust ETL solutions that ensure quality, timeliness, and efficiency. 
          Partner with Nimble Acuity for scalable, secure, and cost-effective ETL integration.
        </p>
        <a
          href="/contact"
          className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default ETLDataIntegration;
