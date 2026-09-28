import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Package,
  PhoneCall,
  FileBarChart,
  ClipboardCheck,
  Database,
  Headphones,
  CheckCircle2,
  Clock,
} from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const services = [
  {
    title: "Order Tracking System Services",
    description:
      "Customized online tracking systems aligned with VoC requirements, embedded with Poka-Yoke mechanisms for accurate data capture and streamlined handoffs.",
    icon: Package,
  },
  {
    title: "Status Enquiry Customer Support Services",
    description:
      "Real-time order visibility and faster response times through standardized protocols aligned with customer expectations.",
    icon: ClipboardCheck,
  },
  {
    title: "Call Center Services",
    description:
      "Inbound & Outbound call support, helpdesk, and enquiry handling to improve first-contact resolution and reduce handoffs.",
    icon: PhoneCall,
  },
  {
    title: "Freight Management Reporting",
    description:
      "Transparent freight performance reporting using CVA, BVA, and NVA analysis to reduce inefficiencies and enhance delivery outcomes.",
    icon: FileBarChart,
  },
  {
    title: "Order Processing Services",
    description:
      "Comprehensive order authentication, payment processing, customer data updates, and inventory management with Lean Six Sigma optimization.",
    icon: ClipboardCheck,
  },
  {
    title: "Back Office Data Management",
    description:
      "Data entry, order processing, billing, invoicing, and structured management to enable statistical root cause analysis and continuous improvement.",
    icon: Database,
  },
];

const benefits = [
  "Reduced Order Cancellation Rates",
  "ISO-Certified Quality Assurance",
  "Enhanced Client Satisfaction",
  "Deployment of Latest Technology",
  "Prompt Query Resolution",
  "24/7 Global Assistance",
];

const OrderTrackingSupport: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Outsource Order Tracking & Status Enquiry Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl mb-6">
          Ensure efficient order tracking and status enquiry support at cost-effective rates 
          starting at just <span className="font-semibold">$8/hour</span>.
        </p>
        <Button size="lg" variant="secondary" className="rounded-2xl">
          Get Started
        </Button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          Order Tracking & Status Enquiry Services We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <Card
              key={idx}
              className="shadow-lg hover:shadow-2xl transition rounded-2xl"
            >
              <CardContent className="p-6 text-center">
                <service.icon className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose O2I for Order Tracking Services?
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl shadow-sm"
            >
              <CheckCircle2 className="w-6 h-6 text-green-600 mt-1" />
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Appointment Setting for US Client
              </h3>
              <p className="text-gray-600">
                Delivered quick appointment-setting services for a leading
                US-based business, enabling smooth workflows.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Telemarketing for Insurance Firm
              </h3>
              <p className="text-gray-600">
                Provided cost-effective telemarketing services to a leading
                insurance firm, driving measurable ROI improvements.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
        <blockquote className="max-w-2xl mx-auto italic text-gray-700 text-lg">
          “Outsource2india will have a positive effect on any company's turnover I do not doubt that.”
        </blockquote>
        <p className="mt-4 font-semibold">Marketing Director, UK</p>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Deliver Premium Order Tracking Support
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Partner with Outsource2india for professional-grade order tracking and 
          status enquiry services to boost customer trust and retention.
        </p>
        <Button size="lg" variant="secondary" className="rounded-2xl">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
};

export default OrderTrackingSupport;
