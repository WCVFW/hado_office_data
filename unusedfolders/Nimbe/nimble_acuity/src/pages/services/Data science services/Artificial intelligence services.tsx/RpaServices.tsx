import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Building2, Globe2, ShieldCheck, Zap } from "lucide-react";
import DSMainMenu from "../mainmenu";

const RpaServices: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Customized Robotic Process Automation (RPA) Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-8">
          Maximize efficiency, delegate repetitive tasks, and focus on your strategic goals.
          Let’s automate your path to success with intelligent RPA solutions.
        </p>
        <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
          Get Started
        </Button>
      </section>

      {/* Intro Section */}
      <section className="py-16 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Why RPA Matters</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Outdated and redundant tasks can obstruct progress in today’s digital era. 
          Our RPA services streamline workflows, reduce human error, and ensure seamless integration with your systems — 
          delivering precision, cost savings, and superior customer experience.
        </p>
      </section>

      {/* Features / Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Key Benefits of Our RPA Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Enhanced Cybersecurity",
                desc: "Advanced encryption, SSL, and 24/7 surveillance ensure maximum security.",
              },
              {
                title: "Strategic RPA Consulting",
                desc: "We identify, design, and deploy automation strategies aligned with your goals.",
              },
              {
                title: "Adaptive Intelligent Automation",
                desc: "AI + ML powered bots for complex knowledge-based task automation.",
              },
              {
                title: "Agile Cloud & DevOps",
                desc: "Cloud-native RPA with CI/CD pipelines for scalability and reliability.",
              },
              {
                title: "Comprehensive IoT Solutions",
                desc: "Enable connected devices and real-time automation insights.",
              },
              {
                title: "Governed & Secure",
                desc: "Built-in governance and compliance with industry regulations.",
              },
            ].map((item, i) => (
              <Card key={i} className="shadow-md hover:shadow-lg transition">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">
                US Mortgage Company Automates LQI Process
              </h3>
              <p className="text-gray-600 mb-4">
                Automated Loan Quality Investment (LQI) process reduced FTE by 50%, 
                cut processing time by 98%, and improved accuracy by 100%.
              </p>
              <Button variant="link">Read More</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">
                California Healthcare Provider Doubles Client Base
              </h3>
              <p className="text-gray-600 mb-4">
                Implemented UiPath RPA system extracting 1.2M+ entries, doubling customer base and improving cost efficiency.
              </p>
              <Button variant="link">Read More</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              "Finance & Banking",
              "Healthcare",
              "Manufacturing",
              "Retail",
              "Insurance",
              "Telecom",
              "Logistics",
              "Human Resources",
            ].map((industry, i) => (
              <div key={i} className="p-4 bg-white shadow rounded-xl hover:shadow-md">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: ShieldCheck, title: "Security & Compliance", desc: "End-to-end security with regulatory compliance." },
            { icon: Zap, title: "Scalable Solutions", desc: "Instant scalability to meet changing business needs." },
            { icon: Globe2, title: "Global Reach", desc: "Offshore, nearshore, and cloud RPA solutions." },
            { icon: Building2, title: "End-to-End Support", desc: "From strategy to deployment and beyond." },
            { icon: CheckCircle2, title: "Proven Expertise", desc: "Delivered success across industries worldwide." },
          ].map((item, i) => (
            <Card key={i} className="shadow hover:shadow-lg transition">
              <CardContent className="p-6">
                <item.icon className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-700 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Embrace the Future with RPA Consulting Services
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Experience the revolution in operational efficiency through our robotic process automation outsourcing solutions.
        </p>
        <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
};

export default RpaServices;
