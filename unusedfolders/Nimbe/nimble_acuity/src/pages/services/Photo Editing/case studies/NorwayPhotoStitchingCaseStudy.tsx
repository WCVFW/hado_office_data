import React from "react";
import PEMainMenu from "../PEmainmenu";

const NorwayPhotoStitchingCaseStudy: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          0.31 KM Long Photo Stitching for Norway-based Photography Company
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Discover how Nimble Acuity helped a Norwegian photography company stitch over 300 high-resolution images into a flawless 0.31 KM long panoramic image.
        </p>
      </section>

      {/* Client Info */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid gap-12 md:grid-cols-2">
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">The Customer</h2>
          <p>
            A well-known Norway-based Photography and Design Company renowned for its exceptional photographers and designers, producing high-quality images for global agencies.
          </p>
        </div>

        {/* Requirement */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">The Requirement</h2>
          <p>
            The client required professional stitching of 0.31 KM long images, involving over 300 high-resolution images that needed to be seamlessly combined.
          </p>
        </div>

        {/* Challenges */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>310 images needed to be processed in 45–60 days.</li>
            <li>Each image was about 10 meters long, creating a total length of 310 meters.</li>
            <li>Each image size was around 1.3 GB, leading to high processing time and resource requirements.</li>
          </ul>
        </div>

        {/* Solution */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Solution</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Started with a trial to ensure the client’s expectations were met.</li>
            <li>Formed a dedicated photo editing team for the project.</li>
            <li>Used professional photo editing software like PTGui and Photoshop.</li>
            <li>Two dedicated editors handled the project, processing 10 images per day.</li>
            <li>FTP server set up for faster image upload and download due to large file sizes.</li>
          </ul>
        </div>

        {/* Results */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Results</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Delivered a flawless 0.31 KM long panoramic image within the promised timeframe.</li>
            <li>Client praised the precision, quality, and professionalism of the final output.</li>
            <li>Trial and full project both met the client’s expectations successfully.</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Nimble Your Photo Stitching Today</h2>
        <p className="max-w-3xl mx-auto mb-6">
          Complex photo stitching requires expertise, resources, and precision. Contact Nimble Acuity to get high-quality, seamless panoramic images for your projects.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Contact Us Now
        </button>
      </section>
    </div>
  );
};

export default NorwayPhotoStitchingCaseStudy;
