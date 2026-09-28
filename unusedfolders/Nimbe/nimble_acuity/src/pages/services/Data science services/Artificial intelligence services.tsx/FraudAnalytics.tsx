import React from "react";
import { ShieldAlert, Activity, CreditCard, HeartPulse, LineChart, Database, FileSearch, Bell } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DSMainMenu from "../mainmenu";

const fraudServices = [
  {
    title: "Fraud Predictive Analytics",
    icon: <LineChart className="w-6 h-6 text-blue-600" />,
    points: [
      "Anticipate potential fraud scenarios",
      "Optimize resource allocation strategies",
      "Enhance proactive threat measures",
    ],
  },
  {
    title: "Fraud Prevention Analytics",
    icon: <ShieldAlert className="w-6 h-6 text-red-600" />,
    points: [
      "Monitor for real-time anomalies",
      "Strengthen defenses against breaches",
      "Provide immediate alert notifications",
    ],
  },
  {
    title: "Fraud Risk Management",
    icon: <Activity className="w-6 h-6 text-green-600" />,
    points: [
      "Evaluate and rank fraud risks",
      "Enhance strategic decision-making",
      "Boost organizational fraud resilience",
    ],
  },
  {
    title: "Fraud Detection Services",
    icon: <FileSearch className="w-6 h-6 text-purple-600" />,
    points: [
      "Identify fraudulent behavior instantly",
      "Reduce false positive alerts",
      "Ensure rapid, precise intervention",
    ],
  },
  {
    title: "Insurance Fraud Analytics",
    icon: <Database className="w-6 h-6 text-orange-600" />,
    points: [
      "Scrutinize claims for anomalies",
      "Distinguish genuine vs fraudulent claims",
      "Optimize claim processing efficiency",
    ],
  },
  {
    title: "Payment Fraud Analytics",
    icon: <CreditCard className="w-6 h-6 text-pink-600" />,
    points: [
      "Analyze transactions in real time",
      "Detect payment-related irregularities",
      "Protect revenue and transaction integrity",
    ],
  },
  {
    title: "Healthcare Fraud Analytics",
    icon: <HeartPulse className="w-6 h-6 text-teal-600" />,
    points: [
      "Scrutinize claims and patient billing",
      "Identify fraudulent provider patterns",
      "Focus on cost and compliance",
    ],
  },
  {
    title: "Credit Card Fraud Analytics",
    icon: <Bell className="w-6 h-6 text-indigo-600" />,
    points: [
      "Detect real-time transaction anomalies",
      "Implement adaptive fraud prevention algorithms",
      "Gain customer trust effectively",
    ],
  },
];

const uniqueBenefits = [
  "Anomaly Scoring System for quantifying threats",
  "Multi-Layered Defense Mechanisms across touchpoints",
  "Predictive Behavior Modeling with transaction insights",
  "Collaboration Platforms for secure fraud intelligence sharing",
  "Continuous Threat Intelligence to counter emerging tactics",
  "Customizable Reporting Features for compliance and KPIs",
];

const FraudAnalytics: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="text-center max-w-4xl mx-auto space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Nimble Fraud Analytics Services
        </h1>
        <p className="text-lg text-gray-600">
          Use AI-driven fraud analytics to adapt and protect your business from sophisticated threats continuously.
        </p>
      </section>

      {/* Services Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fraudServices.map((service, idx) => (
          <Card key={idx} className="rounded-2xl shadow-md hover:shadow-lg transition">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                {service.icon}
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Why Choose Us */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">What Sets Us Apart</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {uniqueBenefits.map((item, i) => (
            <Card key={i} className="p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <p className="text-gray-700">{item}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-4 bg-blue-50 py-12 rounded-2xl">
        <h2 className="text-2xl font-bold">
          Protect your enterprise from sophisticated threats with scalable fraud analytics solutions.
        </h2>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg">
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default FraudAnalytics;
