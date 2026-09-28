import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Cpu,
  Eye,
  Boxes,
  Barcode,
  CheckCircle,
  Clock,
  Globe,
  ShieldCheck,
  Building2,
} from "lucide-react";
import DSMainMenu from "../mainmenu";

const MachineVisionServices: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero */}
      <DSMainMenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Machine Vision Services
        </h1>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          Improve your manufacturing process with AI-driven machine vision.
          Eliminate defects, automate inspections, and optimize workflows at
          cost-effective rates.
        </p>
        <Button size="lg" variant="secondary">
          Get Started
        </Button>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <p className="text-lg mb-4">
          Machine vision services make factory automation, inspection, barcode
          reading, and packaging workflows seamless. Instead of investing in
          costly infrastructure, Nimble to Nimble Acuity and reduce costs while gaining
          access to certified professionals.
        </p>
        <p className="text-lg">
          With 26+ years of experience and 18,000+ happy clients, we deliver
          reliable, scalable, and cost-efficient computer vision solutions
          across industries.
        </p>
      </section>

      {/* Services We Offer */}
      <section className="bg-gray-50 py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Computer Vision Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Eye,
              title: "Defect Correction Services",
              desc: "Leverage 2D/3D vision technologies to identify and correct production line defects.",
            },
            {
              icon: Barcode,
              title: "Inventory Management Services",
              desc: "Use machine vision for barcode/label reading to ensure accurate inventory control.",
            },
            {
              icon: Boxes,
              title: "Product Tracking Services",
              desc: "Track products in regulated industries with expiry monitoring and serial verification.",
            },
          ].map((item, idx) => (
            <Card key={idx}>
              <CardHeader>
                <item.icon className="w-10 h-10 text-indigo-600 mb-2" />
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Additional Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {[
            "Measurements & Calibration",
            "Support during development cycle",
            "Camera vision system selection",
            "Lighting & lensing selection",
            "Turnkey solutions",
            "Vision system training",
          ].map((service, idx) => (
            <Card key={idx}>
              <CardContent className="p-4">{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-gray-50 py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Other Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            "Natural Language Processing (NLP)",
            "Cognitive Process Automation",
            "Machine Learning",
            "Computer Vision",
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
          Why Nimble Machine Vision Services to Nimble Acuity?
        </h2>
        <ul className="space-y-4">
          {[
            "ISO-certified service provider (9001:2015) with global compliance",
            "AI-powered solutions customized to client needs",
            "Affordable and flexible pricing models",
            "24/7 availability with dedicated project managers",
            "World-class infrastructure and resources",
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
                Nimble Acuity developed a big data platform for a leading bank, enabling
                faster and more accurate document processing.
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
                We created an analytics workbench for a bank using structured
                and unstructured data, delivering 100% accuracy.
              </p>
              <Button variant="link" className="mt-3">
                Read the Case Study
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-purple-700 text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Computer Vision Services to Nimble Acuity
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          Save costs, improve efficiency, and reduce risks with our AI-driven
          machine vision solutions. Let us help you automate tasks and optimize
          production.
        </p>
        <Button size="lg" variant="secondary">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
};

export default MachineVisionServices;
