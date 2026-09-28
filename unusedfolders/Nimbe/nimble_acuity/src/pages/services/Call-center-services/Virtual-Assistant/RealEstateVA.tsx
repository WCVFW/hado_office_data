import React from "react";
import { Users, PhoneCall, Calendar, FileText, Mail, BarChart2 } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const RealEstateVA: React.FC = () => {
  const services = [
    {
      title: "Commercial Real Estate Virtual Assistant",
      desc: "Connect with our remote assistants to extract statistical info, update property costs, and evaluate renovations.",
      icon: Users,
    },
    {
      title: "Real Estate Virtual Assistant for Cold Calling",
      desc: "Reach out to potential customers, improve engagement, and share updates on property information.",
      icon: PhoneCall,
    },
    {
      title: "Virtual Assistant for Real Estate Investors",
      desc: "Research and identify properties worth developing, renovating, and improving, and set up meetings with stakeholders.",
      icon: Users,
    },
    {
      title: "Real Estate Virtual Assistant for Marketing",
      desc: "Email campaigns, virtual staging, brand-building, and lead generation across multiple platforms.",
      icon: BarChart2,
    },
    {
      title: "Virtual Assistant for Property Management",
      desc: "Manage rent collection, maintenance requests, documents, and renter/buyer communication.",
      icon: Calendar,
    },
    {
      title: "Real Estate Virtual Assistant for Lead Generation",
      desc: "Implement lead generation strategies, identify high-quality leads, and provide follow-ups.",
      icon: BarChart2,
    },
    {
      title: "Real Estate Virtual Assistant for Social Media",
      desc: "Post updates, maintain company websites, and improve engagement on social media platforms.",
      icon: Mail,
    },
    {
      title: "Virtual Assistant for Real Estate Agents",
      desc: "Support agents with paperwork, calendars, and maintaining customer databases.",
      icon: Users,
    },
    {
      title: "Calendar Management",
      desc: "Accurate and timely calendar management to avoid overbooking and streamline business operations.",
      icon: Calendar,
    },
    {
      title: "List Building Services",
      desc: "Create accurate lists of probates, foreclosures, FSBOs, and more.",
      icon: BarChart2,
    },
    {
      title: "Paperwork Management Services",
      desc: "Organize and manage real estate paperwork remotely for on-the-go access.",
      icon: FileText,
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/> 
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Real Estate Virtual Assistant Services
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          Connect with qualified virtual assistants to offload administrative tasks and focus on growing your real estate business.
        </p>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Our Virtual Assistant Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
              >
                <Icon className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Approach Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Our Approach to Deliver Real Estate Virtual Assistance
          </h2>
          <ol className="list-decimal list-inside space-y-4 text-lg text-white">
            <li>
              <strong>Defining Project Scope:</strong> Analyze client's exact requirements and define the project's scope.
            </li>
            <li>
              <strong>Assigning Suitable Remote Assistants:</strong> Delegate tasks to a VA specialized for cold calling or administrative tasks.
            </li>
            <li>
              <strong>Constant Review:</strong> Project managers review VA support to ensure alignment with client requirements.
            </li>
            <li>
              <strong>Timely Reporting:</strong> Compile reports and dashboards to track VA performance and progress.
            </li>
          </ol>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Why Choose Nimble Auity for Real Estate Virtual Assistants
        </h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>✅ Superior Quality Services aligned with CTQ metrics</li>
          <li>✅ ISO 27001:2022 Data Security & Lean DMAIC Standards</li>
          <li>✅ State-of-the-art Infrastructure with virtual dashboards</li>
          <li>✅ Skilled, trained, and Lean Yellow Belt certified virtual assistants</li>
          <li>✅ Easy Scalability to ramp up or down</li>
          <li>✅ 24/7 Support across multiple time zones</li>
          <li>✅ Flexible Pricing linked to CTQ complexity and effort type</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Streamline Your Real Estate Operations Today
        </h2>
        <p className="text-gray-600 mb-8">
          Hire our professional real estate virtual assistants to eliminate NVA tasks, standardize workflows, and optimize your back-office operations.
        </p>
        <a
          href="#contact"
          className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default RealEstateVA;
