import React from "react";
import CSmainmenu from "../CSmainmenu";

const AbstractWritingServices: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Nimble Abstract Writing Services</h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto">
          Expert abstract writing solutions by Nimble Auity. Compile, organize, write, edit, and produce high-quality abstracts for any industry.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-white text-indigo-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Contact Us
        </a>
      </div>

      {/* Key Benefits */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Key Benefits of Working with Nimble</h2>
        <p className="text-gray-700 text-lg mb-6">
          Nimble ensures that your abstract ranks among top search results by crafting effective, relevant descriptions. Our centrally managed, diverse writing teams span multiple sectors and are equipped to handle projects for multinational companies as well as single-country businesses. We provide personal and direct service to every client, regardless of size or location.
        </p>
        <p className="text-gray-700 text-lg mb-6">
          Quick turnaround times and a process-oriented approach translate into real benefits for our clients, helping you reach your goals efficiently.
        </p>
      </div>

      {/* Team Section */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Adept Team of Writers and Project Managers</h2>
        <p className="text-gray-700 text-lg mb-4">
          Nimble offers a large team of highly-qualified abstract writing experts. Our writers are experienced professionals with strong academic credentials. Our project managers have the requisite skills to handle any project across any industry domain.
        </p>
        <p className="text-gray-700 text-lg">
          We provide cross-functional teams to assist your success, with access to experts in every area of product development, crafting abstracts tailored to your company’s unique requirements.
        </p>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Abstract Writing Services for Diverse Fields</h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700 text-lg">
          <li>
            <strong>Scientific Abstract Writing:</strong> R&D institutions, Manufacturers, Laboratories
          </li>
          <li>
            <strong>Technical Abstract Writing:</strong> Software companies, Manufacturers, Research institutions
          </li>
          <li>
            <strong>Medical Abstract Writing:</strong> Health publications, Research institutions, Pharmaceutical companies, NGOs, Universities, Biotechnology firms, Clinical research organizations, Insurance companies
          </li>
          <li>
            <strong>Legal Abstract Writing:</strong> Law firms, Attorneys, SMEs
          </li>
        </ul>
      </div>

      {/* Global Market Section */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">We Understand Global Market Dynamics</h2>
        <p className="text-gray-700 text-lg mb-6">
          Nimble's expert writing team understands the nuances of catering to a multinational audience. We can effectively translate your abstracts into non-English languages while preserving industry-specific terminology and context.
        </p>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-6 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Partner with Nimble for Expert Abstract Writing</h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
          Access reliable, high-quality abstract writing services to enhance your publications, research, and professional documents.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-indigo-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default AbstractWritingServices;
