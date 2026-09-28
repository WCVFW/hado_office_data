import React from "react";
import { FileText, ClipboardList, CheckCircle, Clock } from "lucide-react";
import DSmainmenu from "../DSmainmenu";

const transactionServices = [
  {
    title: "Claims Processing Services",
    description:
      "Capture electronic information, verify eligibility, and generate reports. Includes data mining and analysis for faster and accurate claims handling.",
    icon: <ClipboardList className="text-blue-600" size={32} />,
  },
  {
    title: "Order Processing Services",
    description:
      "Process application forms (paper or electronic) including credit/debit card processing, merchant verification, authorization, and confirmation.",
    icon: <FileText className="text-blue-600" size={32} />,
  },
];

const metrics = [
  "40% Cost Reduction",
  "8-24 Hrs Faster Turnaround",
  "500+ Satisfied Clients",
  "350+ Skilled Data Management Experts",
  "99% Accuracy",
  "21 Years Experience",
];

const TransactionProcessing: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-blue-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Nimble Transaction Processing Services
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Maximize efficiency and accuracy with Nimble Auity. Our experts handle all your transaction processing needs, letting you focus on your core business functions.
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
          Our Transaction Processing Solutions
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {transactionServices.map((service, idx) => (
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

      {/* Key Metrics Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-blue-700 mb-6">Why Choose Nimble Auity?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {metrics.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow flex items-center justify-center font-semibold text-gray-800"
              >
                <CheckCircle className="text-blue-600 mr-2" size={24} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h3 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Quality Outsourcing Services at Bargain Rates
        </h3>
        <ul className="list-disc list-inside space-y-3 text-gray-700 max-w-3xl mx-auto">
          <li>Increase focus on core competencies by letting Nimble handle your transaction processing.</li>
          <li>Trained personnel with sophisticated technology ensure accuracy and efficiency.</li>
          <li>Dedicated Project Managers provide superior project management and open communication.</li>
          <li>Stringent Quality Control ensures high-quality results for every transaction.</li>
          <li>Save time and reduce costs while improving customer satisfaction.</li>
        </ul>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 text-white">
          <h3 className="text-3xl font-bold mb-4">Make Nimble Auity Your Transaction Processing Solution</h3>
          <p className="text-white mb-6">
            Partner with us to streamline your business operations, reduce costs, and deliver better customer experiences.
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

export default TransactionProcessing;
