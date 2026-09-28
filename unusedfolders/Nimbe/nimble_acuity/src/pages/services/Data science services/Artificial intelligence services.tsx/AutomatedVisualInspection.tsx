import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Eye,
  Cpu,
  Settings,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";
import DSMainMenu from "../mainmenu";

const AutomatedVisualInspection: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero */}
      <DSMainMenu/>
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Automated Visual Inspection Services
        </h1>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          Optimize your production line with AI-powered automated visual
          inspection. Get real-time data, precise defect detection, and quality
          assurance at scale.
        </p>
        <Button size="lg" variant="secondary">
          Get Started
        </Button>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <p className="text-lg mb-4">
          Using AI, deep learning, and computer vision, Nimble Acuity delivers visual
          inspection systems that detect even the smallest defects with
          unmatched speed and accuracy. From defect detection to predictive
          maintenance, our solutions integrate seamlessly with your production
          line and drive operational excellence.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Improve Your Quality Assurance with Our AVI Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Cpu,
              title: "Quality Control Automation",
              desc: "Algorithms spot anomalies swiftly in production. Enhance efficiency, minimize waste, and adapt to diverse demands.",
            },
            {
              icon: Eye,
              title: "AI-Powered Inspection",
              desc: "Deep learning boosts defect recognition accuracy with continuous learning and predictive maintenance capabilities.",
            },
            {
              icon: ShieldCheck,
              title: "AVI in Healthcare",
              desc: "Automated checks on X-rays, MRIs, and CT scans ensuring compliance, patient safety, and regulatory standards.",
            },
            {
              icon: Settings,
              title: "AVI in Automotive",
              desc: "Critical component inspections, alignment checks, and compliance with automotive safety standards.",
            },
            {
              icon: Eye,
              title: "AVI in Aerospace",
              desc: "Non-destructive inspections to evaluate material integrity and ensure compliance with aviation regulations.",
            },
          ].map((item, idx) => (
            <Card key={idx}>
              <CardHeader>
                <item.icon className="w-10 h-10 text-blue-600 mb-2" />
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* More Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          More AVI Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            "Optical Character Recognition (OCR)",
            "Robotic Vision Integration",
            "Defect Detection",
            "Surface Inspection",
            "Dimensional Measurement",
            "Pattern Recognition",
            "3D Inspection",
            "Fully Automated Part Inspection",
          ].map((service, idx) => (
            <Card key={idx}>
              <CardContent className="p-4">{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-50 py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Additional Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            "Data Engineering Services",
            "Data Science Services",
            "Artificial Intelligence Services",
            "Computer Vision Services",
          ].map((service, idx) => (
            <Card key={idx}>
              <CardContent className="p-4">{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Nimble Acuity for Automated Visual Inspection?
        </h2>
        <ul className="space-y-4">
          {[
            "Unmatched precision and accuracy using high-resolution imaging",
            "Enhanced process efficiency with automated inspections",
            "Reduction in operational costs by minimizing errors and waste",
            "Real-time monitoring with immediate feedback loops",
            "Seamless integration with existing manufacturing systems",
            "Data-driven insights for continuous process improvements",
          ].map((point, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Success Stories */}
      <section className="bg-gray-50 py-16 px-6 max-w-6xl mx-auto">
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
                Developed a big data platform for automated document processing,
                significantly reducing turnaround times.
              </p>
              <Button variant="link" className="mt-3">
                Read the Case Study
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Open Source Analytics Workbench</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Architected an open-source analytics workbench for a leading
                bank, enabling real-time insights from structured and
                unstructured data.
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
          Explore Automated Visual Inspection with Nimble Acuity
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          Reduce inspection time and costs with intelligent AVI systems.
          Leverage high-speed cameras, deep learning, and real-time analytics to
          ensure the highest quality standards.
        </p>
        <Button size="lg" variant="secondary">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
};

export default AutomatedVisualInspection;
