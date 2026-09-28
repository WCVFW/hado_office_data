import React from "react";
import { FaUserMd, FaFileMedical, FaClipboardCheck, FaFlask, FaShieldAlt } from "react-icons/fa";
import CSmainmenu from "../CSmainmenu";

const MedicalWritingService: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-green-600 to-teal-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Nimble Medical Writing Services</h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto">
          Disseminate research findings, ensure compliance, and enhance healthcare communications with Nimble Auity’s expert medical writing services.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-white text-green-700 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Contact Us
        </a>
      </div>

      {/* Client Success Stories */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="font-semibold text-xl mb-2">
              Multi-level Pharmaceutical Research Helped A UK-Based Biotech Firm Launch A Successful Drug Campaign
            </h3>
            <p className="text-gray-700">
              Provided qualitative and quantitative study assistance for a leading Cambridge-based pharma company to help them launch a drug campaign across the top 50 global airports.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="font-semibold text-xl mb-2">
              Hong Kong-based Therapeutics Company Develops Detailed Patient Data Dossiers
            </h3>
            <p className="text-gray-700">
              Created detailed reports on crucial patient treatment information by gathering, filtering, and validating large volumes of healthcare data to improve clinical management outcomes.
            </p>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">All-inclusive Medical Writing Solutions</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            { icon: <FaClipboardCheck />, title: "Regulatory Medical Writing Services", desc: "Compliance-focused document preparation and streamlined submission processes." },
            { icon: <FaFileMedical />, title: "Clinical Study Reports (CSRs)", desc: "Detailed trial data presentation adhering to ICH guidelines." },
            { icon: <FaShieldAlt />, title: "Pharmacovigilance Safety Reports", desc: "DSUR and PSUR documentation ensuring international safety compliance." },
            { icon: <FaUserMd />, title: "Patient Safety Narratives", desc: "Clear, detailed patient event summaries adhering to regulatory standards." },
            { icon: <FaFileMedical />, title: "Informed Consent Documents", desc: "Full disclosure to trial participants with legal and ethical compliance." },
            { icon: <FaFlask />, title: "Investigator Brochures & Scientific Journals", desc: "Comprehensive trial insights, peer-reviewed publication support and research visibility." },
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="text-green-600 text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Approach / Workflow */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Meticulous Medical Writing Approach</h2>
        <ol className="space-y-6 list-decimal list-inside text-gray-800 max-w-3xl mx-auto">
          <li><strong>Stakeholder Consultation and Project Initiation:</strong> Outline objectives and regulatory expectations.</li>
          <li><strong>Research and Document Synthesis:</strong> Extensive research and document preparation using analytical tools.</li>
          <li><strong>Document Drafting and Structuring:</strong> Clarity and logical structure using content management templates.</li>
          <li><strong>Compliance Check and Quality Control:</strong> Adherence to EMA/FDA guidelines and global compliance frameworks.</li>
          <li><strong>Review and Client Feedback:</strong> Interactive reviews for alignment with project needs.</li>
          <li><strong>Finalization and Document Archiving:</strong> Finalization, publication-ready quality, and secure archiving.</li>
        </ol>
      </div>

      {/* Tools & Industries */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Tools & Industries We Serve</h2>
        <p className="text-center text-gray-700 mb-6">We leverage advanced tools and serve multiple healthcare sectors.</p>
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {["EndNote", "Adobe Acrobat", "GraphPad Prism", "LaTeX", "Mendeley", "MDCalc", "PlagScan"].map((tool, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow">{tool}</div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Transform Your Medical Write-ups</h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
          Turn your research and clinical data into strategic assets. Nimble Auity’s expert medical writing services ensure clarity, compliance, and impactful scientific communication.
        </p>
        <a
          href="/contact"
          className="inline-block bg-green-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default MedicalWritingService;
