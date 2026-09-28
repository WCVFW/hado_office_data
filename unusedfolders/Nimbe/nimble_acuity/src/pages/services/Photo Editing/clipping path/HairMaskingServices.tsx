import React from "react";
import PEMainMenu from "../PEmainmenu";

const HairMaskingServices: React.FC = () => {
  return (
    <section className="bg-white text-gray-800">
      {/* Hero Section */}
      <PEMainMenu/>
      <div className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Nimble Hair Masking Services
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Deliver to your clients on time, every time with our 100% accurate hair
          masking services. We ensure a 24–48-hour turnaround time!
        </p>
      </div>

      {/* Intro */}
      <div className="max-w-5xl mx-auto px-6 space-y-4 text-gray-700 leading-relaxed">
        <p>
          As a high-volume photo studio, you’ve already invested in skilled
          photographers and top-notch gear. Do you also need to spend more on
          assembling a full-fledged photo editing team?
        </p>
        <p>
          Outsourcing hair masking services lets you focus on your core while
          experts handle the intricate edits. With our dusk-to-dawn approach,
          24–48-hour TATs, and ISO-certified processes, you get rapid scalability
          and cost-effective solutions—without compromising quality.
        </p>
      </div>

      {/* Services */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Hair Masking Services We Offer
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
          {[
            "Airbrushing Services",
            "Layer Masking Services",
            "Alpha Masking Services",
            "Refine Edge Masking Services",
            "Color Masking Services",
          ].map((service, idx) => (
            <li
              key={idx}
              className="p-4 border rounded-xl shadow-sm hover:shadow-md transition"
            >
              {service}
            </li>
          ))}
        </ul>

        {/* CTA Free Trial */}
        <div className="mt-8 text-center">
          <p className="text-lg font-semibold">
            Sign up for a <span className="text-blue-600">FREE trial</span> today
          </p>
          <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-blue-700 transition">
            Try it Now
          </button>
        </div>
      </div>

      {/* Process */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Our Hair Masking Process
          </h2>
          <ol className="space-y-4 text-gray-700">
            <li>
              <strong>01. Input:</strong> Client uploads images via secure FTP,
              Dropbox, or email.
            </li>
            <li>
              <strong>02. Design Allocation:</strong> Editors start using Adobe
              Photoshop & Lightroom.
            </li>
            <li>
              <strong>03. Quality Check:</strong> QC specialists perform
              validation.
            </li>
            <li>
              <strong>04. Approval & Edits:</strong> Client reviews results; edits
              applied if needed.
            </li>
            <li>
              <strong>05. Final Upload:</strong> Images delivered in JPEG, TIFF,
              PNG, or preferred formats.
            </li>
          </ol>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Why Choose Us as Your Hair Masking Partner?
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
          <li>
            <strong>ISO-Certified Services</strong> – 100% precision with
            multi-level QC.
          </li>
          <li>
            <strong>Data Security</strong> – Secure FTP, VPN, NDA, GDPR
            compliance.
          </li>
          <li>
            <strong>High Quality</strong> – 99% SLA adherence with global
            standards.
          </li>
          <li>
            <strong>Faster Turnaround</strong> – 24–36 hours depending on
            complexity.
          </li>
          <li>
            <strong>Expert Team</strong> – 30+ skilled designers with years of
            experience.
          </li>
          <li>
            <strong>100% Accuracy</strong> – Pixel-perfect masking using advanced
            Adobe tools.
          </li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 py-12 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">
          Nimble Hair Masking Services to Nimble Acuity
        </h2>
        <p className="mb-6 max-w-3xl mx-auto">
          Retain the finest details in hair, fur, and fabric. Save up to 60% in
          costs, scale quickly, and deliver unmatched results with our expert
          hair masking team.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold shadow hover:bg-gray-100 transition">
          Get a Free Quote
        </button>
      </div>
    </section>
  );
};

export default HairMaskingServices;
