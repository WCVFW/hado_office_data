import React from "react";
import CSmainmenu from "../CSmainmenu";

const DigitalArtworkFormat: React.FC = () => {
  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          How to Select Correct File Format for Your Digital Artwork
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Choosing the right file format is as crucial as creating the artwork itself. Ensure your images are sharp, editable, and suited to their purpose.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-5xl mx-auto space-y-4">
        <p>
          Providing customers, users, or designers with the correct digital file format is as important as the artwork itself. The purpose of developing artwork may be defeated if it isn't delivered in the right format. Understanding where the artwork will be used—whether for a large hoarding or a digital platform—is key to selecting the correct format.
        </p>
        <p>
          Maintaining correct file formats ensures clearer, sharper, and easily editable images. It also enables ease of editing and compatibility with professional software.
        </p>
      </section>

      {/* File Format Guidelines */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-8">
        {/* Bitmap vs Vector */}
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Bitmap Images vs Vector Images</h2>
          <p>
            If magnifying an image reveals tiny blurry dots, it is a bitmap image. Vector images are made of lines and remain sharp even when enlarged. Delivering the correct type ensures high-quality images for your clients and project needs.
          </p>
        </div>

        {/* DPI of Bitmap Images */}
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">DPI of Bitmap Images</h2>
          <p>
            For certain digital fine art or bitmap needs, ensure that images are delivered at high resolution (300-600 dpi) or per the client’s specifications to maintain visual fidelity.
          </p>
        </div>

        {/* Commonly Used Formats */}
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Commonly Used Formats</h2>
          <p>
            Preferred digital artwork formats include <strong>.eps</strong> (Encapsulated PostScript), <strong>.ai</strong> (Adobe Illustrator), and <strong>.cdr</strong> (Corel Draw). These allow rich editing options before printing. PDFs are ideal for approvals or printing exact outputs but are not always editable in bitmap software like Photoshop.
          </p>
        </div>

        {/* Photo Formats */}
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Photo Images</h2>
          <p>
            Photo formats such as <strong>.jpg</strong>, <strong>.tif</strong>, <strong>.png</strong>, and <strong>.gif</strong> should be chosen based on editing needs. JPG allows compression at the expense of quality, while PNG or TIF is ideal for master copies requiring clarity and depth.
          </p>
        </div>

        {/* Nimble Auity Services */}
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Avail High-Quality Digital Artwork Services from Nimble</h2>
          <p>
            Not all clients have the technical knowledge to choose the right file format. At Nimble Auity, we educate clients about file formats and provide digital photo management tips. You can focus on your core business while we handle artwork creation and format selection.
          </p>
          <p>
            Our expert developers coordinate with designers to deliver high-quality printed artwork in the correct format. Contact Nimble Auity today and give your images the edge they deserve!
          </p>
        </div>
      </section>
    </div>
  );
};

export default DigitalArtworkFormat;
