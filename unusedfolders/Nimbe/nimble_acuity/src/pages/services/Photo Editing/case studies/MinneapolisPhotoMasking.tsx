import React from "react";
import PEMainMenu from "../PEmainmenu";

const MinneapolisPhotoMasking: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Photo Masking Services for Minneapolis-based Photographer
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Discover how Nimble Acuity helped a Minneapolis photography studio with expert photo masking services for 1000+ images.
        </p>
      </section>

      {/* Case Study Details */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid gap-12 md:grid-cols-2">
        {/* Client Info */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">The Client</h2>
          <p>
            A leading photography studio in Minneapolis, Minnesota, USA, specializing in portrait and indoor photography.
          </p>
        </div>

        {/* Client Requirement */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Client Requirement</h2>
          <p>
            The client needed reliable, cost-effective photo masking services for over 1000 images within a short period.
          </p>
        </div>

        {/* Project Challenges */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Project Challenges</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Deliver image masking for 1000+ images within 2 months</li>
            <li>Maintain flawless quality for every image</li>
          </ul>
        </div>

        {/* Trial Project */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Trial Project</h2>
          <p>
            The client tested our services with 15 images. A single full-time resource completed the trial quickly and accurately, leading to approval of the full contract.
          </p>
        </div>

        {/* Full-Term Contract */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Full-Term Contract</h2>
          <p>
            Two full-time resources were assigned to process 70-80 images per week via Dropbox using Adobe Photoshop CC. The team completed all 1000 images within 2 months while maintaining high-quality standards.
          </p>
        </div>

        {/* Results */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Results</h2>
          <p>
            The client was extremely satisfied with the quality, cost-effectiveness, and quick turnaround. The project was successfully completed within the deadline, strengthening the client’s trust in Nimble Acuity’s photo masking services.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Nimble Photo Masking Services</h2>
        <p className="max-w-3xl mx-auto mb-6">
          Nimble Acuity offers quality image masking and other editing services using skilled editors and the latest technologies. We deliver accurate results with quick turnaround times globally.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default MinneapolisPhotoMasking;
