import React from "react";
import CSmainmenu from "../CSmainmenu";

const ScientificIllustrationServices: React.FC = () => {
  return (
    <section className="bg-white text-gray-800">
      {/* Hero */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-green-100 to-teal-100 py-16 px-6 lg:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
          Nimble Scientific Illustration Services
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Our scientific illustration services start at $10/hour and are apt for
          scientists, researchers, and academicians who need high-quality
          illustrations for visualizing concepts.
        </p>
      </div>

      {/* Introduction */}
      <div className="max-w-6xl mx-auto px-6 lg:px-20 py-12 space-y-6 leading-relaxed">
        <p>
          Are you in search of a scientific illustration service provider who
          can create high-quality scientific illustrations for visualizing
          concepts of chemistry, microbiology, anatomy, natural sciences, and
          more? If you don't prefer owning expensive illustration software we
          can help you realize your goals without denting your wallet. Our
          scientific illustration services take care of recreating designs and
          prototype concepts to close the gap in learning.
        </p>
        <p>
          Nimble Auity is a top-tier scientific illustration services provider
          with presence in over 150 countries. Our high-quality scientific
          illustration services are designed with your needs in focus. Our
          illustration experts are professionals with deep experience in the
          scientific illustration process. They can interpret your requirement
          with precision to make learning exercise more engaging. We typically
          deliver illustrations in 3 to 4 days and if necessary on the same day
          if you have a tight deadline.
        </p>
      </div>

      {/* Services */}
      <div className="bg-green-50 py-12 px-6 lg:px-20">
        <h2 className="text-3xl font-semibold text-green-800 mb-8">
          Scientific Illustration Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Illustration of Wildlife",
              desc: "Visualize animals and their unique anatomy with high-quality wildlife illustrations, analyzed from hundreds of images for accuracy.",
            },
            {
              title: "Illustration of Marine Life",
              desc: "Accurate marine life illustrations that capture anatomy with precision, aiding underwater research without misleading outcomes.",
            },
            {
              title: "Illustration of Medicinal Herb",
              desc: "100% accurate herbal artwork for research, advertising, labeling, and medical magazines.",
            },
            {
              title: "Illustration of Molecular & Cellular Behavior",
              desc: "Realistic molecular and cellular biology illustrations to simplify complex themes and assist researchers with clear visuals.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div className="max-w-6xl mx-auto px-6 lg:px-20 py-12">
        <h2 className="text-3xl font-semibold text-green-800 mb-6">
          Scientific Illustration Process We Follow
        </h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>
            <strong>Gathering Client Needs</strong> – Meeting to capture
            requirements and deadlines.
          </li>
          <li>
            <strong>Requirement Assessment</strong> – Evaluating complexity,
            challenges, and providing a quotation.
          </li>
          <li>
            <strong>Scientific Illustration</strong> – Task allocation to
            illustration experts under SLA.
          </li>
          <li>
            <strong>Quality Checks</strong> – Thorough assessment to ensure
            accuracy.
          </li>
          <li>
            <strong>Delivery of Scientific Illustrations</strong> – Verified
            illustrations delivered via secure FTP or VPN.
          </li>
        </ol>
      </div>

      {/* Why Choose */}
      <div className="bg-green-100 py-12 px-6 lg:px-20">
        <h2 className="text-3xl font-semibold text-green-800 mb-6">
          Why Choose Nimble for Scientific Illustration Services?
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-700 list-disc list-inside">
          <li>Professional services at flexible, customizable prices.</li>
          <li>Swift delivery of projects (3–5 days or same-day delivery).</li>
          <li>Strict adherence to stringent ISO 9001:2015 standards.</li>
          <li>
            Information security compliant with ISO/IEC 27001:2022 regulations.
          </li>
          <li>World-class infrastructure with advanced tools and technology.</li>
          <li>24/7 customer support with trained contact center agents.</li>
          <li>
            Single point of contact with dedicated managers for quick
            resolutions.
          </li>
          <li>Ease of scaling services based on project demands.</li>
          <li>Dedicated expert teams with a decade of experience.</li>
        </ul>
      </div>

      {/* Case Studies */}
      <div className="max-w-6xl mx-auto px-6 lg:px-20 py-12">
        <h2 className="text-3xl font-semibold text-green-800 mb-6">
          Client Case Studies
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-green-700 mb-2">
              Provided Illustrations for a Denmark-based Writer
            </h3>
            <p>
              A Denmark client successfully published a children's book thanks
              to our high-quality creative services, saving time and effort.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-green-700 mb-2">
              Provided 50 Illustrations a Day to a US-based Client
            </h3>
            <p>
              Nimble delivered top-notch illustrations inspired by the Simpsons
              cartoon, providing high satisfaction to the client.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-green-50 py-12 px-6 lg:px-20">
        <h2 className="text-3xl font-semibold text-green-800 mb-6">
          Testimonials
        </h2>
        <blockquote className="italic text-gray-700 border-l-4 border-green-500 pl-4">
          "I am overwhelmed with the support & level of understanding of your
          team. The effort you spent in working out my DTP project diligently
          with a very quick turn around time has helped my company reap immense
          profits. Looking forward to a very successful business relationship in
          the coming years."
          <footer className="mt-2 font-semibold text-green-700">
            Graphics Manager, Leading Electronics Company, South Korea
          </footer>
        </blockquote>
      </div>

      {/* Contact */}
      <div className="text-center py-16 px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-green-800 mb-4">
          Nimble Scientific Illustration Services
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
          Nimble’s scientific illustration services save you time, effort, and
          money while delivering accurate and engaging visuals. With delivery
          centers across 4 continents, our expert illustrators always meet
          deadlines with precision and professionalism.
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-xl shadow hover:bg-green-700 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default ScientificIllustrationServices;
