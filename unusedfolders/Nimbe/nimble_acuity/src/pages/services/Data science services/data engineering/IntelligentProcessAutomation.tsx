import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Cpu,
  Bot,
  LineChart,
  Users,
  Workflow,
  Settings,
  Smile,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import DSMainMenu from "../mainmenu";

const IPAServicePage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Intelligent Process Automation Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Leverage Nimble Acuity's IPA services to reduce process time, improve customer
          satisfaction, enhance cost efficiency, and ensure continuous employee
          engagement at affordable rates.
        </p>
      </section>

      {/* What is IPA */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">
          What is Intelligent Process Automation?
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          IPA is a combination of emerging technologies that blend process
          redesign, robotic process automation, and machine learning. These
          tools assist employees by removing repetitive, routine, and easily
          replicable tasks—improving customer journeys and speeding up
          operations.
        </p>
        <p className="text-gray-600 leading-relaxed">
          At its core, IPA mimics human activities and learns to do them more
          efficiently. Advances in deep learning and cognitive technology
          improve decision-making capabilities, making processes faster and more
          intelligent.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50 px-6">
        <h2 className="text-3xl font-semibold mb-10 text-center text-gray-800">
          Our Intelligent Process Automation Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Business Process Automation",
              desc: "Automating repetitive business processes to improve efficiency and reduce human error.",
              items: [
                "ERP",
                "Payroll Systems",
                "CRM",
                "CMS",
              ],
            },
            {
              title: "Financial Process Automation",
              desc: "Streamlined finance operations ensuring compliance and efficiency.",
              items: [
                "KYC/AML Compliance",
                "Customer Onboarding",
                "Mortgage/Loan Origination",
                "Financial Document Analysis",
              ],
            },
            {
              title: "Digital Employee Operations",
              desc: "Enhancing employee experiences through digital workers and workforce automation.",
              items: [
                "Talent Management",
                "Task Automation",
                "Workforce Support",
              ],
            },
            {
              title: "Digital Supply Chain Automation",
              desc: "Standardizing supply chain data for improved planning and execution.",
              items: [
                "Collaborative Networks",
                "Inventory Optimization",
                "Procurement Management",
              ],
            },
            {
              title: "Intelligent Contact Center",
              desc: "Comprehensive automation solutions for modern contact centers.",
              items: [
                "Workflow Automation",
                "Agent Guidance",
                "Sales Automation",
                "Scheduling",
              ],
            },
          ].map((service, i) => (
            <Card
              key={i}
              className="shadow-lg rounded-2xl hover:shadow-xl transition"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-3">{service.desc}</p>
                <ul className="list-disc list-inside text-gray-500 space-y-1">
                  {service.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Core Technologies */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center text-gray-800">
          Core Technologies We Leverage
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Bot,
              title: "Robotic Process Automation",
              desc: "Automating routine tasks like data extraction, cleaning, and reporting.",
            },
            {
              icon: Workflow,
              title: "Intelligent Workflow",
              desc: "Managing end-to-end processes with human and machine collaboration.",
            },
            {
              icon: LineChart,
              title: "Machine Learning & Analytics",
              desc: "Identifying patterns, making predictions, and offering real-time insights.",
            },
            {
              icon: Cpu,
              title: "Natural Language Generation",
              desc: "Automating content creation and real-time reporting.",
            },
            {
              icon: Users,
              title: "Cognitive Agents",
              desc: "Virtual agents that learn, analyze, and communicate effectively.",
            },
          ].map((tech, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white shadow rounded-2xl text-center"
            >
              <tech.icon className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
              <p className="text-gray-600">{tech.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50 px-6">
        <h2 className="text-3xl font-semibold mb-10 text-center text-gray-800">
          Benefits of IPA Implementation
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { icon: Smile, title: "Improved Quality" },
            { icon: Users, title: "Increased Workforce Productivity" },
            { icon: Settings, title: "Enhanced Operational Efficiency" },
            { icon: Smile, title: "Improved Customer Satisfaction" },
            { icon: TrendingUp, title: "Enhanced Revenue" },
            { icon: Workflow, title: "Enhanced Agility" },
          ].map((benefit, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow hover:shadow-lg transition"
            >
              <benefit.icon className="w-10 h-10 text-indigo-600" />
              <h3 className="text-lg font-semibold">{benefit.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center text-gray-800">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-lg hover:shadow-xl transition">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">
                Big Data Platform Development
              </h3>
              <p className="text-gray-600 mb-3">
                Helped a leading client develop a Big Data platform for document
                processing automation with top-quality results.
              </p>
              <Button variant="link">Read the Case Study</Button>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">
                Route Optimization Services
              </h3>
              <p className="text-gray-600 mb-3">
                Provided cost-effective route optimization services to a leading
                dairy supplier in the Middle East.
              </p>
              <Button variant="link">Read the Case Study</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-700 text-white py-20 text-center px-6">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Transform Your Business with IPA?
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Embrace next-generation automation capabilities to create value on all
          fronts. Get in touch with us today.
        </p>
        <Button size="lg" className="bg-white text-indigo-700 hover:bg-gray-100">
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default IPAServicePage;
