import React from "react";
import DSmainmenu from "../DSmainmenu";

const DTBookConversion: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble DTBook Conversion Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Help people with disabilities experience digital content in audio and
          text format with our professional DTBook conversion services starting
          at just $6/hour.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-indigo-700 font-semibold rounded-2xl shadow hover:bg-gray-100">
          Get Free Quote
        </button>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">Why DTBook Conversion?</h2>
          <p>
            Nimble Acuity (Nimble Acuity) converts texts into rich XML documents that
            support synchronized speech and text, enhancing accessibility for
            visually impaired users and making content enjoyable for children.
            With 26+ years of expertise, we serve publishers, distribution
            houses, and authors globally.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-3">Key Highlights</h3>
          <ul className="space-y-2">
            <li>✅ 40% Cost Reduction</li>
            <li>✅ 8–24 Hrs Faster Turnaround</li>
            <li>✅ 500+ Satisfied Clients</li>
            <li>✅ 350+ Skilled Experts</li>
            <li>✅ 99% Accuracy</li>
            <li>✅ 21 Years Experience</li>
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">
          DTBook Conversion Services We Offer
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "DTBook XML Conversion",
              desc: "Transform text files into XML-NIMAS format with synced audio, compliant with ANSI NISO standards.",
            },
            {
              title: "Compliance with Daisy Consortium",
              desc: "We strictly adhere to Daisy Consortium compliance policies ensuring 100% compliance.",
            },
            {
              title: "Syncing Text and Visuals",
              desc: "Accurate synchronization of audio with text and visuals using timeline tools.",
            },
            {
              title: "Lossless Conversion",
              desc: "We ensure no data loss during conversion with thorough QA checks.",
            },
            {
              title: "Testing Readability",
              desc: "Converted DTBooks are tested across multiple devices and OS for compatibility.",
            },
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">
          DTBook Conversion Process We Follow
        </h2>
        <ol className="space-y-6 max-w-3xl mx-auto text-lg">
          <li><strong>01. Scan and Upload:</strong> Client provides raw content for conversion.</li>
          <li><strong>02. File Evaluation:</strong> We check data completeness and readiness.</li>
          <li><strong>03. Conversion:</strong> Experts sign NDA and perform DTBook conversion.</li>
          <li><strong>04. Quality Check:</strong> QA team ensures accuracy before final delivery.</li>
        </ol>
      </section>

      {/* Why Choose */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">
          Why Choose Nimble Acuity for DTBook Conversion?
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 list-disc list-inside text-lg max-w-5xl mx-auto">
          <li>Friendly and customized pricing</li>
          <li>ISO/IEC 27001:2022 Data Security compliance</li>
          <li>Support for multiple data formats</li>
          <li>High-quality, lossless conversion with QA checks</li>
          <li>Quick turnaround with SLA-backed delivery</li>
          <li>ISO 9001:2015 certified provider</li>
          <li>Scalable services for large projects</li>
          <li>24/7 client support via phone, email, and chat</li>
        </ul>
      </section>

      {/* Case Studies & Testimonials */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">Client Success Stories</h2>
          <p className="mb-4">
            <strong>UK Software Firm:</strong> Nimble Acuity provided scanning & data entry with a customized solution.
          </p>
          <p>
            <strong>Polish Bike Accessories Seller:</strong> Delivered affordable eCommerce data entry solutions.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
          <p className="italic">
            "We were very satisfied with the quality of service Nimble Acuity
            provided. They met our requests with great professionalism and
            flexibility."
          </p>
          <p className="mt-4 font-semibold">– Spokesperson, Online Health Lessons Company (Canada)</p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
        <h2 className="text-3xl font-bold mb-6">
          Nimble DTBook Conversion Services to Nimble Acuity
        </h2>
        <p className="max-w-2xl mx-auto mb-8">
          Partner with us to make your digital content accessible to everyone.
          Get a free quote within 24 hours and let us walk you through the
          process.
        </p>
        <button className="px-8 py-4 bg-white text-indigo-700 font-semibold rounded-2xl shadow hover:bg-gray-100">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default DTBookConversion;
