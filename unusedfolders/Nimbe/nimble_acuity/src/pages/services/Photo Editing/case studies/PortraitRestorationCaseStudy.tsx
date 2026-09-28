import React from "react";
import PEMainMenu from "../PEmainmenu";

const PortraitRestorationCaseStudy: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-green-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Portrait Restoration Services for Australian Client
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Nimble Acuity helped an Australian retail merchandising company restore 10,000 images, removing dust, scratches, and imperfections efficiently.
        </p>
      </section>

      {/* Case Study Details */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid gap-12 md:grid-cols-2">
        {/* Client Info */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">The Client</h2>
          <p>
            A leading Australian retail company specializing in sales and merchandising, helping clients maximize profits with neatly displayed products.
          </p>
        </div>

        {/* Client Requirement */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Client Requirement</h2>
          <p>
            High-quality portrait restoration. The client would scan and send old portraits, and our team had to remove scratches, dust, and other imperfections.
          </p>
        </div>

        {/* Project Challenges */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Project Challenges</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Removing all dust and scratches from old portraits</li>
            <li>Delivering about 400 images per week</li>
          </ul>
        </div>

        {/* Trial Project */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Trial Run</h2>
          <p>
            One resource worked on restoring 5 frames with 4 images each. The trial ensured quality and efficiency before outsourcing the full project.
          </p>
        </div>

        {/* Full-Term Contract */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Full-Term Contract</h2>
          <p>
            Two resources were assigned to restore 10,000 images at 400 images per week. Each image required about 12 minutes for dust and scratch removal. Final PSD files were delivered via Dropbox.
          </p>
        </div>

        {/* Client Benefits */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Client Benefits</h2>
          <p>
            The client achieved 60% cost savings and received high-quality images with quick turnaround times, boosting operational efficiency.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Nimble Image Restoration Services</h2>
        <p className="max-w-3xl mx-auto mb-6">
          Nimble Acuity delivers cost-effective and high-quality portrait restoration services globally using expert editors and the latest Adobe Photoshop tools.
        </p>
        <button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default PortraitRestorationCaseStudy;
