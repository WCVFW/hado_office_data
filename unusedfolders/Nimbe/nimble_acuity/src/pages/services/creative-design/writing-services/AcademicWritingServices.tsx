import React from "react";
import { FaBook, FaFileAlt, FaGraduationCap, FaUserGraduate, FaClipboardList } from "react-icons/fa";
import CSmainmenu from "../CSmainmenu";

const AcademicWritingServices: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Nimble Academic Writing Services</h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto">
          Nimble Auity offers reliable academic writing services to help students complete assignments, theses, dissertations, and research articles on time, with high quality and originality.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-white text-green-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Contact Us
        </a>
      </div>

      {/* Academic Writing Services Offered */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Academic Writing Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-800">
          {[
            { icon: <FaGraduationCap />, title: "Thesis & Dissertations" },
            { icon: <FaBook />, title: "Book Reviews & Reports" },
            { icon: <FaFileAlt />, title: "Abstracts & Conference Papers" },
            { icon: <FaClipboardList />, title: "Research Articles & Papers" },
            { icon: <FaUserGraduate />, title: "Essays & Term Papers" },
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center">
              <div className="text-green-600 text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* How We Make a Difference */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-6 text-gray-800">
          <h2 className="text-3xl font-bold mb-6 text-center">How Nimble Makes a Difference</h2>
          <p className="mb-4">
            Students face challenges finding reliable academic writing services. Many companies offer low-cost solutions but deliver poor-quality or plagiarized content. Since 2002, Nimble Auity has helped students worldwide with well-researched, original, and high-quality academic writing assignments.
          </p>
          <p className="mb-4">
            Our team includes native English speakers, subject matter experts, quality analysts, and project managers who ensure accurate and thoroughly researched write-ups, helping students achieve academic success.
          </p>
        </div>
      </div>

      {/* The Writing Team */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">The Writing Team at Nimble</h2>
        <p className="text-gray-800 max-w-4xl mx-auto text-center mb-6">
          Nimble's team comprises expert academic writers across various domains. We handpick writers based on the assignment’s requirements to ensure accuracy, depth, and quality. Whether it's research papers on history or science, our experts deliver high-quality content consistently.
        </p>
      </div>

      {/* Why Choose Nimble Section */}
      <div className="bg-green-600 text-white py-16 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Why Choose Nimble for Academic Writing?</h2>
        <ul className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-8 list-disc list-inside text-white">
          {[
            "Structured, thoroughly researched process ensures original content.",
            "Multiple levels of quality checks for accuracy and clarity.",
            "Native English speakers and subject matter experts.",
            "Over 26+ years of experience in academic writing services.",
            "Full control over project and quality standards.",
            "Qualified team of writers, proofreaders, and quality analysts.",
            "Timely delivery with high reliability and confidentiality.",
          ].map((point, idx) => (
            <li key={idx} className="hover:text-gray-200 transition">{point}</li>
          ))}
        </ul>
      </div>

      {/* Call to Action */}
      <div className="py-16 px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get Started with Nimble Academic Writing</h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
          Partner with Nimble Auity to ensure timely, original, and high-quality academic writing assistance for all your assignments, theses, and research projects.
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

export default AcademicWritingServices;
