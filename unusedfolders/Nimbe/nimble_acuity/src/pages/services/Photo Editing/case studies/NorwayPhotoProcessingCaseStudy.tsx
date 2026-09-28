import React from "react";
import PEMainMenu from "../PEmainmenu";

const NorwayPhotoProcessingCaseStudy: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Image Processing Case Study for a Norwegian Photography Company
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Nimble Acuity helped a Norway-based photography company enhance images efficiently across its 13 studios while achieving cost savings and faster turnaround times.
        </p>
      </section>

      {/* Customer Info */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid gap-12 md:grid-cols-2">
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">The Customer</h2>
          <p>
            A photography company with 13 studios across Norway and plans to expand to 21 studios by entering Sweden and Denmark. By 2030, they aim to open 200 studios across Europe.
          </p>
        </div>

        {/* The Process */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">The Process</h2>
          <p>
            The customer uploaded 100–120 folders daily, each containing 35–40 images. Despite the 4-hour time difference, Nimble Acuity consistently delivered enhanced images 48 hours ahead of the deadline.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>Image editing & enhancement</li>
            <li>Panorama stitching</li>
            <li>Color correction & path-fixing</li>
            <li>Background editing & re-creation</li>
            <li>Black & white to color conversion</li>
            <li>Clipping path, layer mask, sharpening, and cleanup</li>
          </ul>
        </div>

        {/* Team */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p>
            A highly skilled team of certified animators and designers using Adobe Photoshop CS6, Illustrator, InDesign, QuarkXPress, and dual monitors to ensure high-quality results.
          </p>
        </div>

        {/* Results */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Results</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Delivery cycle reduced by 40%</li>
            <li>60–70% savings on human resources and real estate costs</li>
            <li>Strict security and confidentiality maintained</li>
            <li>Quick turnaround: images delivered 48 hours ahead of schedule</li>
            <li>60% increase in sales for the customer</li>
            <li>Management able to focus on core business activities</li>
            <li>Successful collaboration with onsite visit by Nimble Acuity team</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Get Started Today</h2>
        <p className="max-w-3xl mx-auto mb-6">
          Want your photography studio to gain a competitive edge? Contact Nimble Acuity to experience cost-effective, high-quality image processing services.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Contact Us Now
        </button>
      </section>
    </div>
  );
};

export default NorwayPhotoProcessingCaseStudy;
