import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Map,
  MapPin,
  BarChart3,
  Database,
  CheckCircle2,
  Headphones,
  Shield,
  Users,
  Zap,
  Cpu,
} from "lucide-react";
import DSMainMenu from "../mainmenu";

const services = [
  {
    title: "Location Intelligence for Mapping",
    description:
      "Create detailed maps that enable smarter decisions and seamless business growth across industries.",
    icon: Map,
  },
  {
    title: "Location Intelligence for Geocoding",
    description:
      "Enhance geographic accuracy with geocoding and reverse geocoding to improve targeting and immediacy.",
    icon: MapPin,
  },
  {
    title: "Location-based Business Intelligence",
    description:
      "Turn raw spatial data into actionable insights using BI tools to address complex business problems.",
    icon: BarChart3,
  },
  {
    title: "Location Intelligence in CRM",
    description:
      "Integrate location data into CRM with custom APIs to coordinate interactions across geographies.",
    icon: Database,
  },
];

const processSteps = [
  "The client approaches us with a business need",
  "We evaluate requirements and advise the right solutions",
  "Select the best location intelligence tools",
  "Perform multi-tier quality checks",
  "Scale QC-approved results for future needs",
  "Consolidate reports into easy-to-read insights",
];

const benefits = [
  {
    title: "Affordable Support Services",
    description: "Flexible pricing with no hidden fees or long-term contracts.",
    icon: Zap,
  },
  {
    title: "ISO Compliant",
    description:
      "We follow the strictest international quality standards for reliable delivery.",
    icon: Shield,
  },
  {
    title: "Secure Data Management",
    description: "24/7/365 protection for your business-critical data assets.",
    icon: Database,
  },
  {
    title: "Quick Turnaround Time",
    description: "Faster delivery with optimized workflows and proven expertise.",
    icon: Cpu,
  },
  {
    title: "Scalable Solutions",
    description:
      "Robust, future-ready solutions designed to grow alongside your business.",
    icon: Users,
  },
  {
    title: "24/7 Support",
    description:
      "Always available via phone, email, or chat to support global clients.",
    icon: Headphones,
  },
];

const LocationIntelligence: React.FC = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Intro */}
      <DSMainMenu/>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Location Intelligence Services
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          From the start, we have helped clients develop robust geospatial
          applications. Today, we lead the industry with GIS and location
          intelligence solutions, starting at{" "}
          <span className="font-semibold">$15 per hour</span>.
        </p>
      </section>

      {/* Services */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Location Intelligence Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <Card
              key={i}
              className="shadow-md hover:shadow-xl transition-all border border-gray-100"
            >
              <CardContent className="p-6 text-center">
                <service.icon className="w-10 h-10 text-blue-600 mb-4 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          The Location Intelligence Process
        </h2>
        <ol className="max-w-2xl mx-auto space-y-4">
          {processSteps.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 className="text-green-600 w-6 h-6 mt-1" />
              <span className="text-gray-700">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Benefits */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Why Choose Nimble Acuity?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <Card
              key={i}
              className="shadow-md hover:shadow-xl transition-all border border-gray-100"
            >
              <CardContent className="p-6 text-center">
                <b.icon className="w-10 h-10 text-blue-600 mb-4 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm">{b.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Switch to High-Performance Location Intelligence
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Transform your data into actionable insights with our GIS and location
          intelligence expertise. Nimble Acuity is your trusted partner for
          cost-effective, secure, and scalable location-based solutions.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition-all">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default LocationIntelligence;
