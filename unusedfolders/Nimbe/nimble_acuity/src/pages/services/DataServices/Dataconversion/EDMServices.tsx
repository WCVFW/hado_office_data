import React from "react";
import DSmainmenu from "../DSmainmenu";

const EDMServices: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Electronic Document Management Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Improve security, enable remote access, and reduce filing costs with
          Nimble Acuity’s electronic document management services.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-blue-700 font-semibold rounded-2xl shadow hover:bg-gray-100">
          Get Started
        </button>
      </section>

      {/* About EDM */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">What is EDM?</h2>
          <p>
            Electronic Document Management (EDM) provides a centralized archive
            to manage your paper-based records like delivery slips, W2s, and
            legal briefs. These are converted into electronic formats (TIFF)
            and can be retrieved easily through a web browser.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">Quick Facts</h3>
          <ul className="space-y-2">
            <li>✅ 40% Cost Reduction</li>
            <li>✅ 8–24 Hours Faster Turnaround</li>
            <li>✅ 500+ Satisfied Clients</li>
            <li>✅ 350+ Skilled Experts</li>
            <li>✅ 99% Accuracy</li>
            <li>✅ 21 Years of Experience</li>
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">
          Our Electronic Document Management Services
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3">Effective Data Capture</h3>
            <p>
              We capture and store information from paper, online forms,
              barcodes, emails, faxes, signatures, and more in a unified format.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3">Effective Indexing</h3>
            <p>
              Information is indexed by categories (departments, users, document
              types) making retrieval fast and efficient.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3">Effective Security</h3>
            <p>
              Our EDM ensures compliance with regulations, role-based access,
              and user authentication down to the page level.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Nimble Acuity */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">Why Choose Nimble Acuity?</h2>
        <ul className="grid md:grid-cols-2 gap-6 list-disc list-inside text-lg">
          <li>Clear communication of expectations reduces risks</li>
          <li>Experienced professionals delivering accurate solutions</li>
          <li>Secure infrastructure with restricted access</li>
          <li>Robust quality management ensures accuracy & speed</li>
          <li>Planned status reports delivered on time</li>
          <li>Post-deployment technology upgrades & maintenance</li>
        </ul>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">
          Benefits of EDM Services
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 text-lg">
          <ul className="space-y-3">
            <li>📄 Improved document management efficiency</li>
            <li>🔒 Restricted disclosure of confidential information</li>
            <li>⚡ Quick updates to the latest document versions</li>
          </ul>
          <ul className="space-y-3">
            <li>⏪ Easy retrieval of earlier versions</li>
            <li>🔄 Seamless conversion across formats</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 bg-gradient-to-r from-indigo-700 to-blue-600 text-white">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Nimble EDM to Nimble Acuity?
        </h2>
        <p className="max-w-2xl mx-auto mb-8">
          Streamline your document management and boost productivity with
          Nimble Acuity’s proven EDM solutions. Fill out the inquiry form and
          our team will connect with you shortly.
        </p>
        <button className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-2xl shadow hover:bg-gray-100">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default EDMServices;
