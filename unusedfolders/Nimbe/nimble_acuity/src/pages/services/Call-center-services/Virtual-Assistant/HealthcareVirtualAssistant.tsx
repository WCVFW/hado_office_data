import React from "react";
import { UserCheck, Calendar, FileText, Activity, Shield, Globe, Heart } from "lucide-react";
import CCmainmenu from "../CCmainmenu";

const HealthcareVirtualAssistant: React.FC = () => {
  const services = [
    {
      title: "Remote Patient Monitoring",
      description: "Continuous monitoring, real-time alerts, wearable device coordination, and compliance tracking.",
      icon: <Activity className="text-blue-600" size={24} />,
    },
    {
      title: "Virtual Medical Scribe",
      description: "EHR documentation, clinical note taking, HIPAA compliance, workflow optimization.",
      icon: <FileText className="text-blue-600" size={24} />,
    },
    {
      title: "Virtual Medical Receptionist",
      description: "Appointments and calendar coordination, patient intake, insurance verification, call handling.",
      icon: <Calendar className="text-blue-600" size={24} />,
    },
    {
      title: "Physician Virtual Assistant",
      description: "Administrative support, clinical coordination, task prioritization, telemedicine facilitation.",
      icon: <UserCheck className="text-blue-600" size={24} />,
    },
    {
      title: "Virtual Assistant for Doctors",
      description: "Practice management, research assistance, patient follow-up, billing and coding, email management.",
      icon: <Shield className="text-blue-600" size={24} />,
    },
    {
      title: "Virtual Dental Receptionist",
      description: "Dental appointment scheduling, patient record keeping, insurance coordination, front desk operations.",
      icon: <Globe className="text-blue-600" size={24} />,
    },
    {
      title: "Dermatology Virtual Assistants",
      description: "Dermatology-specific knowledge, patient triage, cosmetic procedure coordination, patient education.",
      icon: <Heart className="text-blue-600" size={24} />,
    },
    {
      title: "Virtual Dental Administrative Assistant",
      description: "Administrative task management, billing & insurance claims, inventory management, dental software proficiency.",
      icon: <FileText className="text-blue-600" size={24} />,
    },
  ];

  const processFlow = [
    "Initial User Interaction: Engage patients via voice/text interfaces for symptom reporting, inquiries, or assistance.",
    "Input Interpretation: Accurately interpret patient inputs using NLP algorithms to understand context and demands.",
    "Information Retrieval: Retrieve required information from EHRs or schedule appointments.",
    "Personalized Response: Provide clear, concise medical advice or confirmation of requested actions.",
    "Continuous Feedback Loop: Collect patient feedback after each session to measure satisfaction and identify improvement areas.",
    "Adaptive Learning: Enhance assistant performance with machine learning for more intuitive interactions.",
  ];

  const benefits = [
    "Proactive Patient Monitoring: Track health metrics for timely interventions and personalized care.",
    "Intelligent Clinical Decision Support: Use ML and analytics to improve care with evidence-based suggestions.",
    "Comprehensive Patient Education: Deliver personalized educational materials for better treatment adherence.",
    "Efficient Administrative Task Management: Automate routine tasks and optimize staff productivity.",
    "Specialized Support for Chronic Conditions: Continuous monitoring to improve patient quality of life.",
    "Data-Driven Insights and Analytics: Generate insights for improved care planning and resource allocation.",
  ];

  const additionalServices = [
    "Inbound Call Center Services",
    "Telemarketing Services",
    "Outbound Call Center Services",
    "Cold Calling Services",
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
    <div className="max-w-7xl mx-auto px-6 py-12 text-gray-800">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
          Virtual Assistant for Healthcare
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg md:text-xl">
          Improve your healthcare practice’s efficiency with <span className="font-semibold text-blue-600">Nimble Acuity</span>. 
          Automate invoicing, predictive analytics, and secure HIPAA-compliant data handling.
        </p>
      </header>

      {/* Services Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Our Healthcare Virtual Assistant Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="ml-3 text-xl font-semibold text-gray-900">{service.title}</h3>
              </div>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="mb-12 bg-blue-50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Our Simplified Process Flow</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-3 max-w-3xl mx-auto">
          {processFlow.map((step, idx) => <li key={idx}>{step}</li>)}
        </ul>
      </section>

      {/* Benefits Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Benefits of Our Healthcare Virtual Assistants</h2>
        <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside text-gray-700">
          {benefits.map((item, idx) => <li key={idx}>{item}</li>)}
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
          Transform your healthcare operations with <span className="font-semibold text-blue-600">Nimble Acuity</span>. 
          Enhance patient care, streamline workflows, and leverage AI-driven insights for operational excellence.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl text-lg transition shadow-lg">
          Contact Us
        </button>
      </section>
    </div>
    </div>
  );
};

export default HealthcareVirtualAssistant;
