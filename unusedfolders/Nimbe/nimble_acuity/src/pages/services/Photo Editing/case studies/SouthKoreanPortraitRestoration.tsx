import React from "react";
import PEMainMenu from "../PEmainmenu";

const SouthKoreanPortraitRestoration: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Portrait Restoration Services for South Korean Client
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          How Nimble Acuity helped a South Korean photo restoration company manage increased orders and reduce costs with expert image editing.
        </p>
      </section>

      {/* Case Study Details */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid gap-12 md:grid-cols-2">
        {/* Client Info */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">The Client</h2>
          <p>
            A South Korean photo restoration company, reputed for serving photo restoration orders to customers. The client preferred outsourcing due to increasing workload and limited in-house bandwidth.
          </p>
        </div>

        {/* Client Requirements */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Client Requirements</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Portrait restoration using Adobe Photoshop</li>
            <li>Trial service of 15 images</li>
            <li>Nimble full project of $8,000 if trial successful</li>
          </ul>
        </div>

        {/* Challenges */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Project Challenges</h2>
          <p>
            The client required a fast turnaround time for image restoration, irrespective of complexity, while maintaining high-quality results.
          </p>
        </div>

        {/* Solution */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Solution</h2>
          <p>
            Completed the trial of 15 images using a single resource via Adobe Photoshop. Images were received via email and delivered through Dropbox. After trial approval, 1400 images were Nimbled with a TAT of one week. Nimble Acuity successfully delivered 200 images daily without compromising quality.
          </p>
        </div>

        {/* Results */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Results</h2>
          <p>
            The client achieved a 50% cost saving and improved delivery speed. With consistent quality and timely output, the client was able to serve more customers efficiently and scale their business.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Nimble Portrait Restoration Services</h2>
        <p className="max-w-3xl mx-auto mb-6">
          Nimble Acuity is ISO 9001:2015 certified with 26+ years of experience in image enhancement. Our expert restoration team ensures top-notch quality, faster turnaround, and cost-effective solutions.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default SouthKoreanPortraitRestoration;
