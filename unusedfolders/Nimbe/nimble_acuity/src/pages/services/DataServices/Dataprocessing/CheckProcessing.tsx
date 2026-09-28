import React from "react";
import { FileText, CheckCircle, DollarSign, Activity } from "lucide-react";
import DSmainmenu from "../DSmainmenu";

const services = [
  {
    title: "Check Data Entry",
    description:
      "Accept checks via internet, phone, fax, scanned formats, or hardcopies. Extract and organize information into editable digital formats.",
    icon: <FileText className="text-blue-600" size={32} />,
  },
  {
    title: "Check Scanning",
    description:
      "Scan all received checks for key data such as bank account number, check number, and routing number, ensuring digital backups and security.",
    icon: <CheckCircle className="text-blue-600" size={32} />,
  },
  {
    title: "Check Verification",
    description:
      "Verify check validity, account holder history, routing info, and coordinate with issuing banks to confirm authenticity.",
    icon: <Activity className="text-blue-600" size={32} />,
  },
  {
    title: "Transaction & Recurring Payment Verification",
    description:
      "Ensure accuracy of transactions with internet-based security measures, handle recurring check deposits, and redeposit bounced checks safely.",
    icon: <DollarSign className="text-blue-600" size={32} />,
  },
];

const CheckProcessing: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-blue-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Nimble Check Processing Services
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Streamline your check processing with Nimble Auity. Reduce errors, save time, and maintain stakeholder trust with accurate and timely check management services.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
          Our Check Processing Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center text-center"
            >
              {service.icon}
              <h3 className="font-semibold text-xl mt-4 mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Benefits */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-blue-700 mb-6">Why Choose Nimble Auity?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Cost Reduction",
              "Faster Turnaround",
              "Skilled Data Management Experts",
              "99% Accuracy",
              "21 Years Experience",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition flex items-center justify-center font-semibold text-gray-800"
              >
                <CheckCircle className="text-blue-600 mr-2" size={24} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 text-white">
          <h3 className="text-3xl font-bold mb-4">Get Your Checks Processed Efficiently</h3>
          <p className="text-white mb-6">
            Partner with Nimble Auity for accurate, secure, and timely check processing. Focus on your core business while we handle the tedious work.
          </p>
          <a
            id="contact"
            href="#"
            className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default CheckProcessing;
