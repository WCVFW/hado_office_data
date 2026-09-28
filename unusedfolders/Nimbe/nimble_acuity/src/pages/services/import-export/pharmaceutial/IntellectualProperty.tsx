import React from "react";
import { CheckCircle, FileText, Shield, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import NavigationMenu from "../MegaMenu";

const IntellectualProperty: React.FC = () => {
  return (
    <div className="px-6 md:px-12 lg:px-24 py-12 space-y-12">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800">
          Nimble Intellectual Property & Open Innovation Services
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Secure your Intellectual Property while leveraging open innovation to
          accelerate pharmaceutical research and gain a competitive edge.
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-5xl mx-auto text-gray-700 space-y-4 text-lg">
        <p>
          The pharmaceutical industry is evolving rapidly, making it essential
          for companies to adopt{" "}
          <span className="font-semibold">intellectual property</span> and{" "}
          <span className="font-semibold">open innovation services</span> to
          reduce in-house R&D efforts, save costs, and stay competitive. At
          Nimble Acuity (Nimble Acuity), our team of{" "}
          <span className="font-semibold">
            data scientists, subject matter experts, legal analysts, and
            industry specialists
          </span>{" "}
          provides comprehensive IP and innovation services tailored to your
          needs.
        </p>
      </section>

      {/* Services */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-blue-700 text-center">
          Intellectual Property & Open Innovation Services We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Technology Landscape Analysis",
              desc: "Identify innovative trends for new or existing technologies with thorough analysis.",
            },
            {
              title: "Patent & Technology Benchmarking",
              desc: "Evaluate quality and breadth of patents to gauge competitors and market scenario.",
            },
            {
              title: "Open Innovation Analysis",
              desc: "Recommendations and solutions based on current research to stay ahead in the market.",
            },
          ].map((service, idx) => (
            <Card
              key={idx}
              className="rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-blue-800">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Flow */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-blue-700 text-center">
          Our Proven Process Flow
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Collate Information",
            "Discuss Project",
            "Identify Resources",
            "Define Scope & Objectives",
            "Determine Methodology",
            "Execute Research",
            "Collect & Analyze Data",
            "Create & Deliver Reports",
          ].map((step, idx) => (
            <Card
              key={idx}
              className="rounded-xl shadow hover:shadow-lg transition bg-blue-50"
            >
              <CardContent className="p-4 flex items-center space-x-3">
                <CheckCircle className="text-blue-600 w-5 h-5" />
                <span className="text-gray-700">{step}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-blue-700 text-center">
          Why Choose Nimble Acuity?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Shield className="w-6 h-6 text-blue-600" />,
              title: "Assurance of Confidentiality",
              desc: "We guarantee secure file transfers and strict data protection for all client information.",
            },
            {
              icon: <Zap className="w-6 h-6 text-blue-600" />,
              title: "Economical Solutions",
              desc: "World-class services at cost-effective prices, maximizing value for your enterprise.",
            },
            {
              icon: <Users className="w-6 h-6 text-blue-600" />,
              title: "Skilled Manpower",
              desc: "Experts from top institutes with deep industry experience ensure high-quality outcomes.",
            },
            {
              icon: <FileText className="w-6 h-6 text-blue-600" />,
              title: "Quick Turnaround",
              desc: "We execute and deliver reports on time without compromising quality standards.",
            },
          ].map((benefit, idx) => (
            <Card
              key={idx}
              className="rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <CardContent className="p-6 space-y-3">
                <div>{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-blue-800">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center space-y-6 bg-blue-50 p-10 rounded-2xl shadow-inner">
        <h2 className="text-3xl font-bold text-blue-800">
          Choose Nimble Acuity for Intellectual Property & Open Innovation Services
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          We provide specialized intellectual property and open innovation
          research services to help pharmaceutical companies make
          data-driven decisions. Partner with us for reliable, secure, and
          cost-effective solutions.
        </p>
        <button className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-xl shadow hover:bg-blue-800 transition">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default IntellectualProperty;
