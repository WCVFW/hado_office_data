import React from "react";
import PEMainMenu from "../PEmainmenu";

const EcommerceImageClipping: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-green-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          E-commerce Image Clipping Services for American Client
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          See how Nimble Acuity helped a Southern California-based food packaging company with high-quality e-commerce image clipping services.
        </p>
      </section>

      {/* Case Study Details */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid gap-12 md:grid-cols-2">
        {/* Client Info */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">The Client</h2>
          <p>
            A leading American packaging and food specialist in Southern California, known for reliable food packaging solutions.
          </p>
        </div>

        {/* Client Requirement */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Client Requirement</h2>
          <p>
            Accurate e-commerce image clipping services for a large number of images with a quick turnaround time.
          </p>
        </div>

        {/* Project Challenges */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Client sent images only on Fridays</li>
            <li>Additional steps added to the clipping process without increasing cost</li>
          </ul>
        </div>

        {/* Trial Project */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Trial Run</h2>
          <p>
            A one-day trial was conducted with 5 images. One full-time resource delivered the edited images quickly, impressing the client and leading to the full contract.
          </p>
        </div>

        {/* Full-Term Contract */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Full-Term Contract</h2>
          <p>
            One full-time resource was assigned to provide clipping for 100-150 images daily. Images were received via secure FTP in JPEG format, processed in Adobe Photoshop, and delivered in JPEG and PSD formats promptly.
          </p>
        </div>

        {/* Client Benefits */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Client Benefits</h2>
          <p>
            Over 16,000 images were successfully processed. The client appreciated the quick turnaround, consistent quality, and cost-effectiveness of the project.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Nimble E-commerce Image Clipping Services</h2>
        <p className="max-w-3xl mx-auto mb-6">
          Nimble Acuity offers professional, accurate e-commerce image clipping and other photo editing services globally using skilled editors and the latest tools.
        </p>
        <button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default EcommerceImageClipping;
