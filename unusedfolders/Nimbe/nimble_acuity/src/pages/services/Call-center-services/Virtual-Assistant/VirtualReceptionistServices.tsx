import React from "react";
import { Phone, Calendar, Globe, CheckCircle } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const VirtualReceptionistServices: React.FC = () => {
  const services = [
    {
      title: "Virtual Medical Assistant Services",
      points: [
        "HIPAA-compliant live support optimized via DMAIC cycles.",
        "24/7 patient call handling for appointments, refills, emergencies.",
        "Intelligent appointment triage using AI-driven routing and EHR integration.",
      ],
      icon: <CheckCircle className="text-blue-600" size={24} />,
    },
    {
      title: "Phone Answering Services",
      points: [
        "Real-time analytics for process optimization.",
        "Smart call routing and message management.",
        "Unified experience across communication channels.",
      ],
      icon: <Phone className="text-blue-600" size={24} />,
    },
    {
      title: "Virtual Receptionist for Small Business",
      points: [
        "Custom call handling workflows.",
        "Lead capture and qualification integrated with CRM.",
        "On-demand availability without full-time overhead.",
      ],
      icon: <Calendar className="text-blue-600" size={24} />,
    },
    {
      title: "Personalized Virtual Front Desk Receptionist",
      points: [
        "Brand-centric call handling.",
        "Customized greeting and routing protocols.",
        "Visitor scheduling and calendar syncing.",
      ],
      icon: <Globe className="text-blue-600" size={24} />,
    },
    {
      title: "Virtual Receptionist Appointment Booking",
      points: [
        "Cross-platform appointment management.",
        "Automated reminders and follow-ups.",
        "Industry-specific scheduling protocols.",
      ],
      icon: <Calendar className="text-blue-600" size={24} />,
    },
    {
      title: "Multilingual Virtual Receptionist Services",
      points: [
        "Culturally aligned interactions.",
        "Language-specific call routing.",
        "Global-ready call handling for international clients.",
      ],
      icon: <Globe className="text-blue-600" size={24} />,
    },
  ];

  const whyChoose = [
    "DMAIC-driven Process Optimization",
    "Live Global Coverage",
    "HIPAA-compliant Communication Framework",
    "Fully Customizable Call Scripts",
    "KPI-driven Service Agreements",
    "Flexible Scalability During Peak Call Volumes",
  ];

  const additionalServices = [
    "Virtual Assistant Services",
    "Phone Answering Services",
    "Medical Answering Services",
    "B2B Lead Generation Services",
    "Order Taking Services",
    "Virtual Healthcare BPO Services",
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
    <div className="max-w-7xl mx-auto px-6 py-12 text-gray-800">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
          Virtual Receptionist Services
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg md:text-xl">
          Drive customer experience excellence with AI-human-enabled virtual receptionist services from <span className="font-semibold text-blue-600">Nimble Acuity</span> for high-compliance, fast-scaling global businesses.
        </p>
      </header>

      {/* Services Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Proficient Virtual Receptionist Services We Provide</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center mb-4">{service.icon}<h3 className="ml-3 text-xl font-semibold text-gray-900">{service.title}</h3></div>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {service.points.map((point, i) => <li key={i}>{point}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="mb-12 bg-blue-50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Why Choose Nimble Acuity?</h2>
        <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside text-gray-700">
          {whyChoose.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      </section>

      {/* Additional Services Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Additional Services You Can Benefit From</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {additionalServices.map((service, idx) => (
            <span key={idx} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium shadow-sm">
              {service}
            </span>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto text-lg">
          Outsourced virtual receptionist services from <span className="font-semibold text-blue-600">Nimble Acuity</span> provide scalable call handling, appointment booking, and multilingual support tailored to enterprises. Optimize customer experience, streamline operations, and ensure compliance with expert assistance.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl text-lg transition shadow-lg">
          Contact Us
        </button>
      </section>
    </div>
    </div>
  );
};

export default VirtualReceptionistServices;
