import React from 'react';
import DSmainmenu from '../DSmainmenu';

const ImageAnnotationServices = () => {
  const services = [
    'Semantic Image Segmentation Services',
    'Bounding Box Annotation',
    'Rapid Annotation',
    '3D Cuboid Annotation',
    'Landmark Annotation',
    'Polygon Annotation'
  ];

  const tools = ['Labelbox', 'CVAT', 'Supervisely'];

  return (
    <div><DSmainmenu/>
    <div className="px-6 md:px-16 py-12 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-6">Nimble Auity Image Annotation Services</h1>
      <p className="text-center text-gray-700 mb-12">
        Achieve clarity and precision in visual data processing with our reliable image annotation expertise. Our expert annotators use advanced tools to deliver precise labeling across various industries.
      </p>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {services.map((service, idx) => (
          <div key={idx} className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition">
            <h3 className="font-semibold text-xl mb-2">{service}</h3>
            <p className="text-gray-600 text-sm">
              {/* Add short descriptions if needed */}
            </p>
          </div>
        ))}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Tools We Use</h2>
        <ul className="flex gap-6">
          {tools.map((tool, idx) => (
            <li key={idx} className="bg-white shadow-md p-4 rounded-lg flex-1 text-center hover:scale-105 transition">
              {tool}
            </li>
          ))}
        </ul>
        <p className="text-gray-500 text-xs mt-2">Disclaimer: The use of the abovementioned tools is subject to Nimble Auity's present practices.</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Why Choose Our Image Annotation Services?</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Improved Object Detection Algorithms</li>
          <li>Improved Computer Vision Accuracy</li>
          <li>Scalable Annotation Solutions</li>
          <li>Customizable Annotations for Specific Needs</li>
          <li>Seamless Integration with Existing Workflows</li>
          <li>Strong Data Security Protocols</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Additional Services</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>eBook Conversion Services</li>
          <li>Data Conversion Services</li>
          <li>Data Processing Services</li>
          <li>Optical Character Recognition (OCR) Services</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Customer Success Stories</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Nimble Provided Bounding Box Services to Singapore Client - Delivered 250,000 images accurately.</li>
          <li>Nimble Provided Data Entry and Image Tagging for Irish Firm - Successfully tagged and archived rugby match footage.</li>
        </ul>
      </section>

      <section className="text-center">
        <p className="mb-4">Unlock the full potential of your data today—contact us to start your image annotation project and achieve unparalleled precision and efficiency.</p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Contact Us</button>
      </section>
    </div>
    </div>
  );
};

export default ImageAnnotationServices;
