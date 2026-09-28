import React from "react";
import { CheckCircle, Users, BookOpen, Globe } from "lucide-react";
import DSmainmenu from "../DSmainmenu";

const ComprehensiveDigitalServices: React.FC = () => {
  const stats = [
    { value: "40%", label: "Cost Reduction", icon: <CheckCircle size={32} className="text-blue-500" /> },
    { value: "8-24 Hrs", label: "Faster Turnaround", icon: <BookOpen size={32} className="text-blue-500" /> },
    { value: "500+", label: "Satisfied Clients", icon: <Users size={32} className="text-blue-500" /> },
    { value: "350+", label: "Skilled Experts", icon: <Globe size={32} className="text-blue-500" /> },
    { value: "99%", label: "Accuracy", icon: <CheckCircle size={32} className="text-blue-500" /> },
    { value: "21", label: "Years Experience", icon: <BookOpen size={32} className="text-blue-500" /> },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Nimble Auity Comprehensive Digital Services</h1>
        <p className="max-w-3xl mx-auto text-lg sm:text-xl mb-8">
          High-quality, cost-effective digital conversion, e-book publishing, copy-editing, and proofreading solutions for authors, publishers, and universities.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-600 font-bold px-8 py-3 rounded-lg shadow-lg hover:scale-105 transform transition"
        >
          Contact Us
        </a>
      </section>

      {/* Stats Section */}
      <section className="py-16 max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition"
          >
            {stat.icon}
            <h3 className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</h3>
            <p className="text-gray-600 mt-1">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 space-y-12">
        {/* Comprehensive Digital Services */}
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Comprehensive Digital Services</h2>
          <p className="text-gray-700 mb-4">
            Nimble Auity has over a decade of experience providing tailor-made solutions for a variety of digital publishing needs. We serve authors, book & magazine publishers, and universities as a one-stop partner for converting books, journals, and magazines into digital formats, with copy-editing and proofreading support.
          </p>
        </div>

        {/* Publishers */}
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">eBook Conversion Services For Publishers</h2>
          <p className="text-gray-700 mb-4">
            Nimble offers expert conversion services from any input format to your desired digital formats. Convert books and magazines into multiple versions and reach customers across various platforms. Our digital conversion team consists of coders and CSS experts capable of producing error-free outputs at scale.
          </p>
        </div>

        {/* Universities */}
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">eBook Conversion Services For Universities</h2>
          <p className="text-gray-700 mb-4">
            Students now prefer accessing notes, research materials, and textbooks digitally. Nimble's digital conversion team can quickly convert all university materials, printed notes, and textbooks into ePUB or other digital formats for easy access anywhere.
          </p>
        </div>

        {/* Authors */}
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">eBook Conversion Services For Authors</h2>
          <p className="text-gray-700 mb-4">
            Authors can leverage Nimble's complete suite of services including copy-editing, proofreading, cover design, and conversion to ePUB or Kindle. Our team ensures error-free books, professional illustrations, and optimized digital publishing solutions.
          </p>
          <p className="text-gray-700">
            Nimble Auity has helped numerous authors and publishers successfully convert hard copy books into ePUB and MOBI formats with exceptional accuracy.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Start Your Digital Conversion Today</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Nimble Auity ensures professional, cost-effective, and high-quality e-book conversions for publishers, authors, and universities worldwide.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-600 font-bold px-8 py-4 rounded-lg shadow-lg hover:scale-105 transform transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default ComprehensiveDigitalServices;
