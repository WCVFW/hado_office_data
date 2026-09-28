import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Cpu,
  Activity,
  Workflow,
  Search,
  Brain,
  BarChart3,
  DollarSign,
  Award,
  Users,
  Building,
} from "lucide-react";
import DSMainMenu from "../mainmenu";

const HyperautomationServices: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto space-y-16">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Nimble Hyperautomation Services
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Automate processes and foster team collaboration with our innovative
          hyperautomation software solutions!
        </p>
      </section>

      {/* Intro */}
      <section className="space-y-5 text-gray-600 leading-relaxed max-w-4xl mx-auto">
        <p>
          Do you want some help in leveraging the power of Artificial
          Intelligence, Natural Language Processing, Machine Vision, Machine
          Learning, and Business Intelligence to automate the complex processes
          in your organization? Are you looking for a reliable company that
          provides customized hyperautomation services that boost the speed and
          enhance the scalability of your workflows?
        </p>
        <p>
          Nimble Acuity is one of the leading providers of Hyperautomation
          solutions with years of industry experience. We leverage highly
          advanced tools and have a team of skilled data scientists and expert
          developers who ensure flexible, scalable, and easy-to-implement
          automation solutions.
        </p>
      </section>

      {/* Services */}
      <section className="space-y-10">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">
          Hyperautomation Solutions We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Cpu,
              title: "RPA for Process Efficiency",
              desc: "Automate workflows, applications, and interfaces instantly with Robotic Process Automation.",
            },
            {
              icon: Activity,
              title: "Defect Detection",
              desc: "AI-based visual inspection to identify and assess system defects, improving efficiency.",
            },
            {
              icon: Workflow,
              title: "Process Management",
              desc: "Expand your architecture toolbox and redesign processes to meet evolving business goals.",
            },
            {
              icon: Search,
              title: "Process Mining",
              desc: "Analyze automation opportunities with process discovery and mining solutions.",
            },
            {
              icon: Brain,
              title: "Decision Modeling",
              desc: "Leverage AI to organize, manage, and analyze decision-making logic across workflows.",
            },
            {
              icon: BarChart3,
              title: "Analytics",
              desc: "Evaluate the impact of hyperautomation with data-driven insights and reporting.",
            },
          ].map((service, idx) => (
            <Card
              key={idx}
              className="rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <CardContent className="p-6 space-y-4">
                <service.icon className="w-12 h-12 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">
          Other Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Data Engineering Services",
            "Artificial Intelligence Services",
            "Data Analytics Services",
            "Business Intelligence & Analytics",
          ].map((srv, idx) => (
            <Card
              key={idx}
              className="rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <CardContent className="p-6 text-center">
                <p className="text-gray-700 font-medium">{srv}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="space-y-10">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">
          Why Choose Nimble Acuity for Hyperautomation?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: DollarSign,
              title: "Affordable Rates",
              desc: "Flexible pricing packages suitable for businesses of all sizes.",
            },
            {
              icon: Users,
              title: "Experienced Professionals",
              desc: "Get access to skilled automation experts who deliver outstanding results.",
            },
            {
              icon: Award,
              title: "High-Quality Services",
              desc: "We provide reliable hyperautomation solutions backed by cutting-edge tools.",
            },
            {
              icon: Building,
              title: "Best Infrastructure",
              desc: "World-class infrastructure and advanced tools for seamless automation.",
            },
          ].map((benefit, idx) => (
            <Card
              key={idx}
              className="rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <CardContent className="p-6 text-center space-y-3 flex flex-col items-center">
                <benefit.icon className="w-12 h-12 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="rounded-2xl shadow-md hover:shadow-lg transition">
            <CardContent className="p-6 space-y-3">
              <h3 className="text-lg font-semibold text-gray-800">
                Big Data Platform for Document Processing
              </h3>
              <p className="text-gray-600">
                Developed an advanced big data-based automation platform for a
                leading banking organization to optimize document workflows.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-md hover:shadow-lg transition">
            <CardContent className="p-6 space-y-3">
              <h3 className="text-lg font-semibold text-gray-800">
                Open-Source Analytics Workbench
              </h3>
              <p className="text-gray-600">
                Designed an open-source analytics workbench for a leading bank,
                integrating structured and unstructured data for rapid insights.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 py-12 rounded-2xl text-white space-y-6">
        <h2 className="text-3xl font-bold">Boost Your Process Efficiency</h2>
        <p className="max-w-2xl mx-auto text-lg">
          Harness multiple technologies to achieve end-to-end automation. Automate processes beyond point solutions and build robust enterprise automation strategies with Nimble Acuity.
        </p>
        <button className="px-8 py-4 bg-white text-blue-700 rounded-xl font-semibold shadow-md hover:bg-gray-100 transition">
          Get Started Today
        </button>
      </section>
    </div>
  );
};

export default HyperautomationServices;
