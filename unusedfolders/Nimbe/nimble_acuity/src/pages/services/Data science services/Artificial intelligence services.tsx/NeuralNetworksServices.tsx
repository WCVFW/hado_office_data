import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Activity,
  Workflow,
  BarChart,
  CheckCircle,
} from "lucide-react";
import DSMainMenu from "../mainmenu";

const NeuralNetworksServices: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero */}
      <DSMainMenu/>
      <section className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Artificial Neural Networks Services
        </h1>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          Get access to industry-leading neural network solutions provided by
          seasoned data scientists at cost-effective rates.
        </p>
        <Button size="lg" variant="secondary">
          Get Started
        </Button>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <p className="text-lg mb-4">
          With 26+ years of expertise, Nimble Acuity delivers high-quality neural network
          solutions for industries worldwide, from medicine to business. Our
          experts specialize in artificial and biological neural networks to
          help your organization make faster, smarter decisions.
        </p>
      </section>

      {/* Services We Offer */}
      <section className="bg-gray-50 py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Artificial Neural Networks Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Brain,
              title: "ANN Visualization",
              desc: "Roadmaps and visual models to help you understand and deploy AI neural networks effectively.",
            },
            {
              icon: BarChart,
              title: "ANN Analysis",
              desc: "Data analysis and insights post-deployment by expert data scientists for better outcomes.",
            },
            {
              icon: Workflow,
              title: "Neural Networks Development",
              desc: "Custom development for testing, forecasting, and implementation of ANN solutions.",
            },
          ].map((item, idx) => (
            <Card key={idx}>
              <CardHeader>
                <item.icon className="w-10 h-10 text-purple-600 mb-2" />
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Other Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            "Artificial Intelligence Services",
            "AI-Driven Digital Transformation",
            "Computer Vision Services",
            "Cognitive Process Automation",
          ].map((service, idx) => (
            <Card key={idx}>
              <CardContent className="p-4">{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Nimble Artificial Neural Network Services to Nimble Acuity?
        </h2>
        <ul className="space-y-4">
          {[
            "Flexible and cost-effective pricing models",
            "Customized ANN solutions tailored to business needs",
            "ISO-accredited service provider with proven expertise",
            "High-quality management and deliverables",
            "Strict data security and confidentiality protocols",
            "24/7 customer support for global clients",
          ].map((point, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Document Processing Automation</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Designed and implemented a big data platform to automate
                document workflows for a leading bank, reducing processing time
                drastically.
              </p>
              <Button variant="link" className="mt-3">
                Read the Case Study
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Open-Source Analytics Workbench</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Developed an analytics platform for structured and unstructured
                data for a financial services provider, ensuring quick and
                accurate insights.
              </p>
              <Button variant="link" className="mt-3">
                Read the Case Study
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-indigo-700 text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Artificial Neural Networks Services to Nimble Acuity
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          With years of experience in ANN, we deliver scalable, secure, and
          high-quality solutions. Partner with us for cost-effective and
          professional neural network services.
        </p>
        <Button size="lg" variant="secondary">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
};

export default NeuralNetworksServices;
