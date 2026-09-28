import React from "react";
import { Users, Calendar, FileText, Activity, Headphones, ShoppingCart, CheckCircle, BarChart2 } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const SmallBusinessVA: React.FC = () => {
  const services = [
    {
      title: "Data Entry and Management",
      description: "Streamlined ETL processes, workflow optimization using data pipelines, end-to-end data entry automation.",
      icon: <FileText className="text-blue-600" size={24} />,
    },
    {
      title: "Appointment Setting",
      description: "Modern scheduling platforms, calendar sync, email reminders and follow-ups.",
      icon: <Calendar className="text-blue-600" size={24} />,
    },
    {
      title: "Order Taking and Processing",
      description: "ERP solutions, invoicing automation, agile inventory tracking.",
      icon: <ShoppingCart className="text-blue-600" size={24} />,
    },
    {
      title: "Customer Support",
      description: "Ticket management, advanced CRM, fast query resolution.",
      icon: <Headphones className="text-blue-600" size={24} />,
    },
    {
      title: "Technical Support",
      description: "Remote diagnostics, instant issue resolution, troubleshooting expertise.",
      icon: <Activity className="text-blue-600" size={24} />,
    },
    {
      title: "After-hours Support",
      description: "24/7 coverage, cloud-based systems, SLA adherence outside business hours.",
      icon: <Users className="text-blue-600" size={24} />,
    },
    {
      title: "Follow-up Calls",
      description: "CRM-tracked calls, personalized scripts, scheduled follow-ups with automated reminders.",
      icon: <CheckCircle className="text-blue-600" size={24} />,
    },
    {
      title: "Lead Generation Services",
      description: "Drip campaigns, BANT qualification, tools to find and engage leads.",
      icon: <BarChart2 className="text-blue-600" size={24} />,
    },
    {
      title: "Survey and Market Research",
      description: "Professional survey tools, data analysis, audience segmentation for insights.",
      icon: <Activity className="text-blue-600" size={24} />,
    },
    {
      title: "Debt Collection",
      description: "Monitor accounts, dunning letters, skip tracing, settlement negotiation.",
      icon: <FileText className="text-blue-600" size={24} />,
    },
  ];

  const processFlow = [
    "Discovery Call to Discuss Needs: Evaluate scope and business objectives.",
    "Task Analysis and Resource Mapping: CVA-BVA-NVA-mapped analysis to eliminate low-ROI activities.",
    "Selecting the Candidate Profile: Curated list of candidates aligned with project needs.",
    "Technical Assessment and Skill Validation: Interview-based evaluation of skills and collaboration.",
    "Digital Onboarding: Explain project expectations and protocols via digital platforms.",
    "Feedback and Task Improvisation: Cloud-based collaboration for continuous improvement.",
  ];

  const sectors = [
    "E-commerce",
    "Real Estate",
    "Information Technology",
    "Healthcare",
    "Marketing and Advertising",
    "Accounting and Finance",
    "Legal Services",
    "Education and Training",
    "Hospitality and Tourism",
  ];

  const advantages = [
    "Data-powered Performance Updates: Track KPIs of remote resources with analytics.",
    "Adaptive Remote Efficiency Plans: Personalized performance improvement recommendations.",
    "Progressive Troubleshooting Techniques: Lean control-phase implementation reducing errors by 30%.",
    "Proficiency in Project Collaboration Tools: Real-time updates and smooth collaboration.",
    "Continuous Competency Development: Regular training on latest tools and best practices.",
    "Alignment with Your Operating Schedule: Flexible remote resources that prioritize business hours.",
  ];

  const additionalServices = [
    "Inbound Call Center",
    "Telemarketing Services",
    "Outbound Call Center",
    "Cold Calling Services",
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
    <div className="max-w-7xl mx-auto px-6 py-12 text-gray-800">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
          Virtual Assistant for Small Business
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg md:text-xl">
          Overcome task overload, prioritize growth, and expand your capabilities with <span className="font-semibold text-blue-600">Nimble</span> virtual assistants at a fraction of your staffing expenses.
        </p>
      </header>

      {/* Services Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Our Virtual Executive Assistant Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center mb-4">{service.icon}<h3 className="ml-3 text-xl font-semibold text-gray-900">{service.title}</h3></div>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="mb-12 bg-blue-50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Multi-step Approach to Hire Virtual Assistants</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-3 max-w-3xl mx-auto">
          {processFlow.map((step, idx) => <li key={idx}>{step}</li>)}
        </ul>
      </section>

      {/* Sectors Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Sectors We Cater To</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {sectors.map((sector, idx) => (
            <span key={idx} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium shadow-sm">{sector}</span>
          ))}
        </div>
      </section>

      {/* Advantages Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Why Choose Nimble Virtual Assistants?</h2>
        <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside text-gray-700">
          {advantages.map((adv, idx) => <li key={idx}>{adv}</li>)}
        </ul>
      </section>

      {/* Additional Services Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Additional Services You Can Benefit From</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {additionalServices.map((service, idx) => (
            <span key={idx} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium shadow-sm">{service}</span>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto text-lg">
          Achieve operational excellence, streamline workflows, and scale your small business with <span className="font-semibold text-blue-600">Nimble</span> virtual assistants.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl text-lg transition shadow-lg">
          Contact Us
        </button>
      </section>
    </div>
    </div>
  );
};

export default SmallBusinessVA;
