import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, PhoneCall, BarChart3, Clock, Users, ClipboardList } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const CallAuditingServices: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Call Auditing Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Utilize <span className="font-semibold">(Voice of the Customer) VoC</span>-aligned
          analysis and standardized auditing workflows to manage high call volumes while
          gaining statistically validated insights into caller behavior.
        </p>
        <Button className="mt-6 bg-white text-blue-900 hover:bg-gray-100">
          Contact Us
        </Button>
      </section>

      {/* Intro Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Why Choose Nimble Call Auditing?</h2>
        <p className="text-gray-700 leading-relaxed">
          Have you ever wondered how effective your call center strategy is? Are you worried about
          efficiency, compliance, and customer satisfaction? Our call auditing services help you
          strategically answer these questions while ensuring maximum compliance and satisfaction.
          At <strong>Nimble</strong>, we provide valuable insights into caller relations while helping you
          manage high call volumes with efficiency and professionalism.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-gray-50 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Call Auditing Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Call Quantity Auditing",
              desc: "We use standardized checklists to audit the volume of end-to-end calls and Value Stream Mapping (VSM) to find throughput bottlenecks.",
              icon: BarChart3,
            },
            {
              title: "Performance Auditing",
              desc: "We measure metrics like Calls per Agent, Cost per Call, Service Quality, Average Speed of Answering, and Forecast Accuracy.",
              icon: ClipboardList,
            },
            {
              title: "Call Handling Time Auditing",
              desc: "We identify high-variance segments that increase dissatisfaction, auditing handling times under DMAIC management.",
              icon: Clock,
            },
            {
              title: "Agent Efficiency Auditing",
              desc: "Metrics include Adherence to Schedule, Occupancy Rate, and Quality Assurance Scoring.",
              icon: Users,
            },
            {
              title: "Customer Resolution Auditing",
              desc: "We validate resolution accuracy using CTQs to ensure first-call resolution aligned with VoC feedback loops.",
              icon: CheckCircle,
            },
            {
              title: "Script & Call Drop Auditing",
              desc: "We review scripts for accuracy, clarity, and relevance, and analyze dropped calls to improve infrastructure reliability.",
              icon: PhoneCall,
            },
          ].map((service, i) => (
            <Card key={i} className="shadow-md hover:shadow-lg transition rounded-2xl">
              <CardContent className="p-6">
                <service.icon className="w-10 h-10 text-blue-700 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Call Auditing Process</h2>
        <ol className="space-y-6 text-gray-700">
          {[
            "Requirement Briefing – Understand requirements and finalize SLAs.",
            "Transfer of Recorded Calls – Securely receive recorded call files.",
            "Resource Allocation – Assign the right experts and software.",
            "Call Auditing – Audit calls using structured checklists.",
            "Quality Check – Ensure 100% factual compliance before delivery.",
            "Final Delivery – Provide comprehensive reports securely.",
          ].map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="bg-blue-700 text-white w-8 h-8 flex items-center justify-center rounded-full font-semibold">
                {i + 1}
              </span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Why Choose Section */}
      <section className="py-12 bg-gray-100 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Why Nimble?</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            "ISO Certified Processes with global standards.",
            "Strict Quality Measures using Lean Six Sigma.",
            "Affordable Pricing with zero hidden charges.",
            "State-of-art Infrastructure for reliability.",
            "International-level Data Security (ISO/IEC 27001:2022).",
            "Scalable Modular Services for growing needs.",
            "Fast TATs using DMAIC frameworks.",
            "Dedicated Project Managers as SPOCs.",
          ].map((point, i) => (
            <Card key={i} className="shadow rounded-2xl">
              <CardContent className="p-6 flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                <p>{point}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-blue-900 text-white">
        <h2 className="text-3xl font-bold mb-4">Choose Nimble for Call Auditing Excellence</h2>
        <p className="max-w-3xl mx-auto mb-6">
          With 26+ years of expertise, we ensure your operations are optimized, compliant, and customer-focused.
          Let Nimble evaluate, optimize, and transform your call center strategy.
        </p>
        <Button className="bg-white text-blue-900 hover:bg-gray-100">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
};

export default CallAuditingServices;
