import React from "react";
import { CheckCircle, Layers, Users, DollarSign, BarChart3, RefreshCw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CCmainmenu from "../CCmainmenu";

const BusinessProcessReengineering: React.FC = () => {
  const differentiators = [
    { icon: Layers, title: "Large Scale Commitment", desc: "Leadership alignment through CTQ-defined change charters and milestone tracking." },
    { icon: BarChart3, title: "Strong Business Case", desc: "Quantified baselines supported by VoC insights and BVA elimination targets." },
    { icon: RefreshCw, title: "Proven Methodologies", desc: "Rigorously documented DMAIC frameworks validated across industries." },
    { icon: Users, title: "Clear Communication", desc: "Daily standups and cross-functional huddles ensure process clarity." },
    { icon: CheckCircle, title: "All-round Perspective", desc: "Domain-specific VoC insights mapped to industry-tested redesign models." },
    { icon: DollarSign, title: "Flexible Pricing", desc: "Outcome-based pricing tied to CTQ deliverables and performance metrics." }
  ];

  const services = [
    {
      title: "HR and Talent Reengineering",
      desc: "Transform workforce efficiency with VoC-mapped engagement strategies and automation.",
      points: ["HR Transformation", "Talent Development", "Talent Acquisition", "Remote Workforce Management"]
    },
    {
      title: "Financial Reengineering",
      desc: "Redesign procure-to-pay and customer-to-cash cycles with automation, AI, and compliance dashboards.",
      points: ["Procure to Pay", "Financial Strategy & Consulting", "Customer-to-cash Cycle", "Risk & Compliance"]
    },
    {
      title: "Sourcing & Procurement",
      desc: "Digitize procurement after Lean stabilization, reducing turnaround time and eliminating BVA steps.",
      points: ["Procurement Advisory", "Procurement Analytics", "Source-to-Pay Automation"]
    },
    {
      title: "Risk Management",
      desc: "Strengthen compliance, governance, and fraud prevention using control-phase audit frameworks.",
      points: ["Fraud & Financial Crimes Oversight", "Enterprise Risk Management", "Risk Analytics", "Regulatory Compliance"]
    },
    {
      title: "Blockchain-based BPR",
      desc: "Deploy blockchain-enabled workflows with process immutability and traceability mechanisms.",
      points: ["Governance Design", "Business Value Mapping", "Digital Technology Integration"]
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Outsource Business Process Reengineering Services</h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl opacity-90">
          Deliver validated performance improvements and scale-ready outcomes with Critical to Quality (CTQ)-aligned Business Process Reengineering.
        </p>
        <Button className="mt-6 bg-white text-blue-700 hover:bg-gray-200">Contact Us</Button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Business Process Reengineering Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Card key={idx} className="shadow-lg rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="mb-4 text-gray-600">{service.desc}</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {service.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose O2I?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {differentiators.map((item, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <item.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Redefine Your Business Processes with O2I</h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-6">
          From cost optimizations to IT strategy and supply chain reorganization, we apply Lean Six Sigma frameworks to deliver validated outcomes, reduce waste, and scale customer value.
        </p>
        <Button className="bg-blue-600 text-white hover:bg-blue-700">Get Started Today</Button>
      </section>
    </div>
  );
};

export default BusinessProcessReengineering;
