import React from "react";
import DSmainmenu from "../DSmainmenu";

const XBRLConversionServices: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble XBRL Conversion Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Expert tagging, mapping, and conversion of financial reports into XBRL
          format at affordable rates starting from just $0.15 per page.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-blue-700 font-semibold rounded-2xl shadow hover:bg-gray-100">
          Get a Free Quote
        </button>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Professional XBRL Conversion
          </h2>
          <p>
            Importing financial data and making quick decisions are easier with
            XBRL. As an ISO-certified provider, Nimble Acuity offers reliable
            XBRL conversion services, handling documents in multiple formats and
            delivering with accuracy, speed, and affordability.
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
          Our XBRL Conversion Services
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Tagging of XBRL",
              desc: "Customized XBRL tagging for SEC filing, compliant with US financial regulations.",
            },
            {
              title: "Creation of XBRL Instance Report",
              desc: "Convert tagged reports into XBRL instances for seamless eFiling submissions.",
            },
            {
              title: "XBRL eFiling Support",
              desc: "Hassle-free online submission of XBRL reports to regulatory authorities.",
            },
            {
              title: "XBRL Mapping",
              desc: "Accurate mapping of financial statements using the latest XBRL techniques.",
            },
            {
              title: "Creation of Taxonomies",
              desc: "Build taxonomies to make XBRL data easier to interpret and analyze.",
            },
            {
              title: "Validation & Calculation",
              desc: "Validate XBRL datasets and tags to ensure accuracy and reliability.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Specialization */}
      <section className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">Our Specialization</h2>
        <p className="max-w-2xl mx-auto">
          We specialize in converting financial documents including:
        </p>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-6 text-lg font-medium">
          <span>📄 Accounts Notes</span>
          <span>📊 Balance Sheets</span>
          <span>📝 Auditors’ Reports</span>
          <span>💰 Cash Flow Statements</span>
          <span>📑 Directors’ Reports</span>
          <span>📈 Income Statements</span>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">
          XBRL Conversion Process We Follow
        </h2>
        <ol className="max-w-4xl mx-auto space-y-4 text-lg">
          <li>01 – Requirement gathering & financial reports collection</li>
          <li>02 – Data format assessment & conversion to XBRL format</li>
          <li>03 – Mapping & tagging performed by experts</li>
          <li>04 – Tags applied by accounting professionals</li>
          <li>05 – Review & correction of tag selection</li>
          <li>06 – Delivery of XBRL-ready and Excel files for review</li>
        </ol>
      </section>

      {/* Why Choose */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">
          Why Nimble XBRL Conversion to Nimble Acuity?
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 list-disc list-inside text-lg">
          <li>Friendly, customizable pricing</li>
          <li>100% data security (NDA, ISO/IEC 27001:2022)</li>
          <li>Support for multiple data formats</li>
          <li>ISO 9001:2015 certified provider</li>
          <li>Quick turnaround with zero compromise on quality</li>
          <li>Scalable solutions to fit your needs</li>
          <li>Experienced XBRL professionals providing insights</li>
          <li>24/7 global support in multiple languages</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="bg-indigo-50 py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-8">What Our Clients Say</h2>
        <blockquote className="max-w-3xl mx-auto text-lg italic">
          “Working with Nimble Acuity has been a great experience. They quickly learned our
          business, adapted to our requirements, and consistently performed
          well. They’re reliable and go above and beyond — a wonderful partner.”
        </blockquote>
        <p className="mt-4 font-semibold">
          – Spokesperson, Executive Recruitment Firm (US)
        </p>
      </section>

      {/* CTA */}
      <section className="text-center py-20 bg-gradient-to-r from-indigo-800 to-blue-700 text-white">
        <h2 className="text-3xl font-bold mb-6">
          Nimble XBRL Conversion Services to Nimble Acuity
        </h2>
        <p className="max-w-2xl mx-auto mb-8">
          Get customized XBRL conversion services tailored to your business
          needs. Contact us today and receive a free quote within 24 hours.
        </p>
        <button className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-2xl shadow hover:bg-gray-100">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default XBRLConversionServices;
