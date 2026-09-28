import React from "react";
import { UserCheck, Calendar, FileText, Activity, Shield, Globe } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const VirtualMedicalAssistant: React.FC = () => {
  const services = [
    {
      title: "Dental Virtual Assistant",
      description: "Boost the productivity and efficiency of your medical practice, ensuring focus on top-quality patient care.",
      icon: <UserCheck className="text-blue-600" size={24} />
    },
    {
      title: "Veterinary Virtual Assistant",
      description: "Provide appointment reminders and personalized support for a positive client experience.",
      icon: <UserCheck className="text-blue-600" size={24} />
    },
    {
      title: "Virtual Medical Scribe",
      description: "Leverage skilled medical scribers to maximize productivity and focus on patient care.",
      icon: <FileText className="text-blue-600" size={24} />
    },
    {
      title: "Remote Patient Monitoring",
      description: "Offer continuous monitoring to prevent complications and promote optimum quality patient care.",
      icon: <Activity className="text-blue-600" size={24} />
    },
    {
      title: "Medical Billing Virtual Assistant",
      description: "Increase first-pass resolution by reducing rework incidents by 31.7% using DMAIC-optimized workflows.",
      icon: <FileText className="text-blue-600" size={24} />
    },
    {
      title: "Insurance Verification Virtual Assistant",
      description: "Boost patient satisfaction while minimizing claim rejections with expert insurance verification.",
      icon: <Shield className="text-blue-600" size={24} />
    },
    {
      title: "Prior Authorization",
      description: "Reduce approval delays through CVA-BVA-NVA mapping, prioritizing patient-impact tasks.",
      icon: <Shield className="text-blue-600" size={24} />
    }
  ];

  const processSteps = [
    "Initial Consultation: Understand the specific requirements of your healthcare practice.",
    "Virtual Assistant Selection: Select top medical virtual assistants fitting your project requirements.",
    "Meet Your Dedicated Team: Assign a dedicated manager to ensure smooth onboarding.",
    "Begin Working with Our Experts: Delegate tasks to virtual assistants to focus on core practice competencies."
  ];

  const whyChoose = [
    "Efficient Services: ISO-certified, HIPAA-compliant assistants following quality protocols.",
    "Data Security: 360-degree protection of all critical healthcare data.",
    "Easy Scalability: Support validated improvement during seasonal or unplanned surges.",
    "World-Class Infrastructure: Equipped with latest tools and platforms.",
    "Consistent Remote Assistance: Time-zone leveraged coverage for uninterrupted support.",
    "Reasonable Pricing: Cost-efficient structure for leveraging skilled professionals."
  ];

  const additionalServices = [
    "Virtual Appointment Scheduling Assistant",
    "Telemedicine Appointment Services",
    "Virtual Receptionist Services"
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
    <div className="max-w-7xl mx-auto px-6 py-12 text-gray-800">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
          Virtual Medical Assistant Services
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg md:text-xl">
          Unleash the potential of your healthcare delivery with <span className="font-semibold text-blue-600">Nimble Acuity</span>. Standardized workflows mapping VoC-to-CTQ metrics deliver validated improvement in patient coordination.
        </p>
      </header>

      {/* Services */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Virtual Medical Assistant Solutions We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center mb-4">{service.icon}<h3 className="ml-3 text-xl font-semibold text-gray-900">{service.title}</h3></div>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mb-12 bg-blue-50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Process We Follow</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-3 max-w-3xl mx-auto">
          {processSteps.map((step, idx) => <li key={idx}>{step}</li>)}
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Why Choose Nimble Acuity?</h2>
        <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside text-gray-700">
          {whyChoose.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      </section>

      {/* Additional Services */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Additional Services You Can Benefit From</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {additionalServices.map((service, idx) => (
            <span key={idx} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium shadow-sm">{service}</span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto text-lg">
          Transform your healthcare practice with <span className="font-semibold text-blue-600">Nimble Acuity</span>. Ensure seamless patient communication, efficient medical record management, and enhanced productivity.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl text-lg transition shadow-lg">
          Contact Us
        </button>
      </section>
    </div>
    </div>
  );
};

export default VirtualMedicalAssistant;
