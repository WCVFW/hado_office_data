import React from "react";
import PEMainMenu from "../PEmainmenu";

const WisconsinInsuranceClipping: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-green-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Image Clipping Services for Wisconsin Insurance Firm
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Discover how Nimble Acuity helped a Wisconsin-based insurance firm with expert image clipping, color correction, and manipulation.
        </p>
      </section>

      {/* Case Study Details */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid gap-12 md:grid-cols-2">
        {/* Client Info */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">The Client</h2>
          <p>
            A risk management and insurance firm based in Wisconsin, US, serving over 10,000 customers worldwide with a wide range of insurance products and services.
          </p>
        </div>

        {/* Client Requirement */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Client Requirement</h2>
          <p>
            Initially, the client requested clipping of 25 images. They needed two experts to handle cutting, manipulating, and color changing of the images. Each color change was expected to take 30-35 minutes per image.
          </p>
        </div>

        {/* Project Challenges */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Project Challenges</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Removal of overlapping trees from houses was time-consuming</li>
            <li>Quick turnaround time required structuring of processes</li>
          </ul>
        </div>

        {/* Trial Project */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Trial Project</h2>
          <p>
            The client tested our capabilities by sending 25 images. Two full-time resources completed clipping within a quick turnaround time. The successful trial led to outsourcing the full project.
          </p>
        </div>

        {/* Full-time Contract */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Full-time Contract</h2>
          <p>
            The client now sends around 30 images per day, which may increase to 100. Our team performs image clipping, manipulation, and color changing. Each color change takes ~35 minutes and manipulation ~1 hour. Images are shared securely via FTP.
          </p>
        </div>

        {/* Results */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Results</h2>
          <p>
            The client achieved 100% image editing quality, which other providers could not match. They were impressed by the quality, cost-effectiveness, and fast turnaround, promising to Nimble all future projects to Nimble Acuity.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Nimble Image Clipping Services</h2>
        <p className="max-w-3xl mx-auto mb-6">
          Nimble Acuity is a leading provider of image clipping and other editing services. Our expert editors and advanced tools ensure the highest quality results with quick turnaround times across multiple time zones.
        </p>
        <button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default WisconsinInsuranceClipping;
