import React from "react";
import {
  Stethoscope,
  FileText,
  ShieldCheck,
  Bot,
  Database,
  ShieldAlert,
  HeartPulse,
  Syringe,
  Cpu,
  Target,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DSMainMenu from "../mainmenu";

const healthcareServices = [
  {
    title: "AI Clinical Documentation",
    icon: <FileText className="w-6 h-6 text-blue-600" />,
    desc: "Make documentation less time-consuming, more intuitive, and highly productive with ML and NLP.",
  },
  {
    title: "AI Medical Records Management",
    icon: <Database className="w-6 h-6 text-green-600" />,
    desc: "Identify and categorize reports and extract data from multiple sources for faster decisions.",
  },
  {
    title: "Healthcare Fraud Detection",
    icon: <ShieldAlert className="w-6 h-6 text-red-600" />,
    desc: "Parse through data to detect patterns and flag suspicious activities that may cost heavily.",
  },
  {
    title: "Virtual Health Assistants",
    icon: <Bot className="w-6 h-6 text-purple-600" />,
    desc: "Reduce manual tasks and simplify information access with AI-powered voice assistants.",
  },
  {
    title: "AI in Clinical Trials",
    icon: <Target className="w-6 h-6 text-indigo-600" />,
    desc: "Accelerate trials by developing patient-centered endpoints and analyzing data in real time.",
  },
  {
    title: "Healthcare Cybersecurity",
    icon: <ShieldCheck className="w-6 h-6 text-orange-600" />,
    desc: "Detect new malware, generate alerts, and secure sensitive data with AI-powered solutions.",
  },
  {
    title: "AI in Healthcare Diagnosis",
    icon: <Stethoscope className="w-6 h-6 text-teal-600" />,
    desc: "Evaluate massive amounts of patient data and provide relevant diagnostic assistance.",
  },
  {
    title: "Dosage Error Detection",
    icon: <Syringe className="w-6 h-6 text-pink-600" />,
    desc: "Spot and correct prescription errors to eliminate potential risks and lawsuits.",
  },
  {
    title: "Connected Medical Devices",
    icon: <Cpu className="w-6 h-6 text-cyan-600" />,
    desc: "Enable data collection, remote troubleshooting, and predictive maintenance.",
  },
];

const processSteps = [
  "Identify Business Goals",
  "Set Performance Metrics",
  "Technology Implementation",
  "Product Integration",
  "Testing and Evaluation",
];

const benefits = [
  "26+ years of experience building healthcare AI solutions",
  "Expert team of AI professionals with deep domain knowledge",
  "40% lesser costs & 30% faster turnaround times",
  "ISO-certified, secure handling of sensitive data",
];

const HealthcareAI: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <DSMainMenu/>
      <section className="text-center max-w-4xl mx-auto space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Nimble AI Services in Healthcare
        </h1>
        <p className="text-lg text-gray-600">
          Bank on advanced AI services in healthcare to develop tailored medical AI technology
          solutions that enhance preventive care, diagnosis, and patient outcomes.
        </p>
      </section>

      {/* Services Grid */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-10">
          Healthcare AI Services We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {healthcareServices.map((service, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md hover:shadow-lg transition">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  {service.icon}
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Our Approach</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {processSteps.map((step, i) => (
            <Card
              key={i}
              className="p-6 text-center rounded-2xl shadow-md hover:shadow-lg transition flex-1"
            >
              <h3 className="text-xl font-bold text-blue-600">0{i + 1}</h3>
              <p className="text-gray-700 mt-2">{step}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Us as Your AI Healthcare Partner?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((item, i) => (
            <Card key={i} className="p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <p className="text-gray-700">{item}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-4 bg-blue-50 py-12 rounded-2xl">
        <h2 className="text-2xl font-bold">
          Transform Healthcare with Smarter AI Solutions
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Whether it’s automating workflows, detecting fraud, or improving patient outcomes —
          our AI services in healthcare deliver measurable results.
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg">
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default HealthcareAI;
