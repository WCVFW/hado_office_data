import React from "react";
import { FaGavel, FaFileContract, FaBook, FaClock } from "react-icons/fa";
import CSmainmenu from "../CSmainmenu";

const LegalWritingServices: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Nimble Legal Writing Services</h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto">
          Professional, accurate, and cost-effective legal writing solutions by Nimble Auity to help law firms and legal professionals meet deadlines and maintain quality.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-white text-indigo-700 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Contact Us
        </a>
      </div>

      {/* Services Offered */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Legal Writing Services</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: <FaGavel />, title: "Legal Pleadings & Litigation Documents" },
            { icon: <FaFileContract />, title: "Contract Drafting, Monitoring & Management" },
            { icon: <FaBook />, title: "Research & Drafting of Memoranda" },
            { icon: <FaBook />, title: "Bankruptcy Filing & Simple Legal Filings" },
            { icon: <FaBook />, title: "Medico-legal Support" },
            { icon: <FaBook />, title: "Discovery & Patent Services Writing" },
            { icon: <FaBook />, title: "Review of Existing Legal Documents" },
            { icon: <FaBook />, title: "Research for Statute of Limitations Issues" },
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 flex items-start gap-4">
              <div className="text-indigo-600 text-3xl mt-1">{service.icon}</div>
              <p className="text-gray-700 font-semibold">{service.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Legal Writing Team</h2>
        <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed mb-6">
          Our team at Nimble is composed of experienced legal writers who understand the consequences of errors in legal documents. They ensure that every document is thoroughly researched, well-written, proofread, and checked multiple times for accuracy.
        </p>
        <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
          Legal writing requires more than just good writing skills; it demands understanding of unique cases, their audience, in-depth research, analysis, and practical legal expertise. Our team ensures timely, high-quality, and cost-effective delivery of all legal documents.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Benefits of Our Legal Writing Services</h2>
        <ul className="max-w-3xl mx-auto space-y-4 list-disc list-inside text-gray-700 text-lg">
          <li>Quick turnaround time for all legal documents</li>
          <li>Accurate and professional legal writing by experienced experts</li>
          <li>Cost-effective services tailored to your requirements</li>
          <li>Stringent quality checks to ensure error-free output</li>
        </ul>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-6 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get Professional Legal Writing Assistance</h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
          Save time, reduce overhead, and ensure high-quality legal documentation by partnering with Nimble Auity for all your legal writing requirements.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-indigo-700 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default LegalWritingServices;
