import React from "react";
import PEMainMenu from "../PEmainmenu";

const HairMaskingCaseStudy: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Hair Masking Services for Netherlands-based Photographer
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          How Nimble Acuity helped a renowned photojournalist with hair masking and background change services on a tight deadline.
        </p>
      </section>

      {/* Client Section */}
      <section className="max-w-5xl mx-auto py-12 px-6 space-y-4">
        <h2 className="text-2xl font-semibold mb-2">The Client</h2>
        <p>
          A top Netherlands-based photographer and full-time photojournalist whose work has appeared in Haarlems Dagblad and IJmuider Courant. The client specializes in news, portrait, sports, and festive event photography.
        </p>
      </section>

      {/* Requirement Section */}
      <section className="bg-gray-50 py-12 px-6 space-y-4">
        <h2 className="text-2xl font-semibold mb-2">Client's Requirement</h2>
        <p>
          The client needed hair masking and background changing services—from dark background to grey—on 700 images within 2 days and a budget of $800. Input was JPEG, and the output was required in JPEG and PSD format.
        </p>
      </section>

      {/* Challenges Section */}
      <section className="max-w-5xl mx-auto py-12 px-6 space-y-4">
        <h2 className="text-2xl font-semibold mb-2">Challenges</h2>
        <p>
          Deliver high-quality hair masking and background change services on 700 images under a tight 2-day deadline while adhering to the client's specifications and budget.
        </p>
      </section>

      {/* Solution Section */}
      <section className="bg-gray-50 py-12 px-6 space-y-4">
        <h2 className="text-2xl font-semibold mb-2">Nimble Acuity's Solution</h2>
        <p>
          We assigned 4 expert image editors using Adobe Photoshop. Due to the tight deadline, the editors worked extra hours to complete the project on time. Key steps included:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Clipping path creation</li>
          <li>Hair masking</li>
          <li>Background change</li>
          <li>Saving files as PSD and JPEG and delivering to client</li>
        </ul>
      </section>

      {/* Results Section */}
      <section className="max-w-5xl mx-auto py-12 px-6 space-y-4">
        <h2 className="text-2xl font-semibold mb-2">Results</h2>
        <p>
          We successfully completed hair masking and background changes per client specifications, on time and within budget, delighting the client with our quality and efficiency.
        </p>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 px-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <h2 className="text-2xl font-semibold mb-4">Nimble Hair Masking Services</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Nimble Acuity offers a complete range of image editing services, including hair masking. We process over 200,000 images per month, follow ISO 9001 standards, and maintain 98% accuracy with almost 100% on-time delivery.
        </p>
        <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default HairMaskingCaseStudy;
