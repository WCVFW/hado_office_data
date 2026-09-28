import React from "react";
import { Database, FileText, CheckCircle, Activity } from "lucide-react";
import DSmainmenu from "../DSmainmenu";

const features = [
  {
    title: "High-Speed Form Processing",
    description: "Scans up to 2,500 words per minute with 99% accuracy using advanced form-reader tools.",
    icon: <Database className="text-blue-600" size={32} />,
  },
  {
    title: "Automatic Form Input System",
    description: "Collect and analyze data from electronic forms with customized input systems for faster results.",
    icon: <FileText className="text-blue-600" size={32} />,
  },
  {
    title: "Structured & Unstructured Form Expertise",
    description: "Experience with diverse business processes and multiple data formats including HTML, CGI, ASP, JSP, and PHP.",
    icon: <CheckCircle className="text-blue-600" size={32} />,
  },
  {
    title: "End-to-End Process Management",
    description: "From understanding your business workflow to database customization, quality checks ensure clean, accurate data.",
    icon: <Activity className="text-blue-600" size={32} />,
  },
];

const successStories = [
  {
    title: "Data Management Services on Zoho for a US Client",
    description: "Nimble delivered optimized data management solutions that enhanced operational efficiency.",
  },
  {
    title: "Purchase Order Processing for IT Solutions Provider",
    description: "Nimble optimized purchase order workflows, improving productivity and reducing errors.",
  },
  {
    title: "PDF to Excel Data Conversion for Florida-based Professor",
    description: "Nimble converted extensive PDFs to Excel, ensuring data accuracy and timely delivery.",
  },
];

const MarketResearchFormsProcessing: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-blue-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Nimble Market Research Forms Processing
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Convert your crucial market research data into actionable insights with minimal errors and optimized turnaround times. Nimble Auity ensures cost-effective and accurate processing of your forms.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
          Why Choose Nimble Auity for Market Research Forms Processing?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center text-center"
            >
              {feature.icon}
              <h3 className="font-semibold text-xl mt-4 mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Benefits */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-blue-700 mb-6">Key Differentiators</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {["Cost Reduction", "Faster Turnaround", "Skilled Data Experts", "99% Accuracy", "21 Years Experience"].map((item, idx) => (
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

      {/* Success Stories */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h3 className="text-3xl font-bold text-blue-700 mb-6 text-center">Success Stories</h3>
        <div className="space-y-6">
          {successStories.map((story, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h4 className="font-semibold text-xl mb-2">{story.title}</h4>
              <p className="text-gray-700">{story.description}</p>
              <a href="#" className="text-blue-600 hover:underline mt-2 inline-block">
                Read more
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 text-white">
          <h3 className="text-3xl font-bold mb-4">Get Started with Nimble Auity</h3>
          <p className="text-white mb-6">
            Process your market research forms efficiently, reduce errors, and gain valuable insights. Contact our team today.
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

export default MarketResearchFormsProcessing;
