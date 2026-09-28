import React from "react";
import { ClipboardList, BarChart2, CheckCircle } from "lucide-react";
import DSmainmenu from "../DSmainmenu";

const surveyServices = [
  {
    title: "Survey Scanning",
    description:
      "Leverage OCR and ICR expertise to quickly convert data captured in various formats. Fast and accurate data capture with minimal errors.",
    icon: <ClipboardList className="text-blue-600" size={32} />,
  },
  {
    title: "Survey Data Entry",
    description:
      "Enter captured survey data into Excel spreadsheets or databases for easy analysis and extraction of actionable insights.",
    icon: <BarChart2 className="text-blue-600" size={32} />,
  },
  {
    title: "Survey Data Analysis & Reporting",
    description:
      "Perform statistical tests, cross-table analysis, and query databases to generate insights. Present information in graphical and tabular formats.",
    icon: <CheckCircle className="text-blue-600" size={32} />,
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

const SurveyProcessing: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-blue-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Nimble Survey Processing Services
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Capture, process, and analyze survey data efficiently with Nimble Auity. Reduce costs, improve accuracy, and extract actionable insights.
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
          Our Survey Processing Solutions
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {surveyServices.map((service, idx) => (
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

      {/* Contact CTA */}
      <section className="py-12 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 text-white">
          <h3 className="text-3xl font-bold mb-4">Partner with Nimble Auity</h3>
          <p className="text-white mb-6">
            We assign a dedicated team for your survey project and provide constant updates. Reduce errors, save time, and gain deep insights with our survey processing services.
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

export default SurveyProcessing;
