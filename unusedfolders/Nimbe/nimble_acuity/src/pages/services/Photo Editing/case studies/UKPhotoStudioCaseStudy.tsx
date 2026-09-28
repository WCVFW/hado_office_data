import React from "react";
import PEMainMenu from "../PEmainmenu";

const UKPhotoStudioCaseStudy: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-green-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Image Enhancement and Photo Editing Case Study for a UK Photo Studio
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Nimble Acuity helped a UK-based photo studio streamline its image enhancement and photo editing workflows while maintaining high quality and fast turnaround times.
        </p>
      </section>

      {/* Case Study Details */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid gap-12 md:grid-cols-2">
        {/* Customer Info */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">The Customer</h2>
          <p>
            A UK-based photo studio with a distinct style, specializing in family, children, and nature portrait photography, looking for reliable photo editing support.
          </p>
        </div>

        {/* Customer Requirement */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">The Requirement</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Share the growing workload of image enhancement and photo editing.</li>
            <li>Follow the studio’s specific style guide while maintaining quality and punctuality.</li>
          </ul>
        </div>

        {/* Solution */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Our Solution</h2>
          <p>
            Nimble Acuity offered a free trial to understand the client’s style. After the trial, we took on partial work and eventually handled the full workload. Our team uses high-end software like Adobe Photoshop CS6 and follows strict quality control measures.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>Dedicated team processes 200–400 high-end images per week.</li>
            <li>Quick turnaround: every set of images is returned within 3 working days.</li>
            <li>Maintaining the client’s style while ensuring high-quality output.</li>
          </ul>
        </div>

        {/* Customer Benefits */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Customer Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Highly competitive rates and cost-effective service.</li>
            <li>High-quality image enhancement and editing.</li>
            <li>Quick and reliable turnaround times compared to competitors.</li>
            <li>Experienced team with prior exposure to similar projects.</li>
            <li>Ongoing collaboration ensuring consistent satisfaction.</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Sign up for a FREE Trial</h2>
        <p className="max-w-3xl mx-auto mb-6">
          Experience the quality of our work before outsourcing. Let Nimble Acuity help you achieve cost-effective and timely image enhancement and photo editing solutions.
        </p>
        <button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Get a Free Quote
        </button>
      </section>
    </div>
  );
};

export default UKPhotoStudioCaseStudy;
