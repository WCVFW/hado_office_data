import React from "react";
import DSmainmenu from "../DSmainmenu";

const ArchitecturalDataEntry = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Architectural Data Entry Services
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto">
          Nimble Auity's Architectural Data Entry services help your company manage critical data efficiently and stay competitive in a dynamic market.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 md:px-20">
        <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
          The architecture industry faces increasing regulations, global competition, and complex data needs. Nimble Auity’s data entry services let you outsource non-core work, saving time and reducing costs, so your company can focus on strategic growth.
        </p>
      </section>

      {/* Services List */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">Architecture Data Entry Services We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-gray-700">
          <div>Document data entry services</div>
          <div>Online data entry</div>
          <div>Offline data entry services</div>
          <div>Image data entry services</div>
          <div>Data capture services</div>
          <div>Data enrichment services</div>
          <div>Database development & migration services</div>
          <div>Copy-paste services</div>
          <div>Document management systems</div>
          <div>Data extraction services</div>
          <div>Book data entry services</div>
          <div>Directory services</div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 md:px-20 flex flex-wrap justify-around text-center bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="mb-6 md:mb-0">
          <h3 className="text-4xl font-bold text-indigo-600">40%</h3>
          <p className="text-gray-700">Cost Reduction</p>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-4xl font-bold text-indigo-600">8-24 Hrs</h3>
          <p className="text-gray-700">Faster Turnaround</p>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-4xl font-bold text-indigo-600">500+</h3>
          <p className="text-gray-700">Satisfied Clients</p>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-4xl font-bold text-indigo-600">350+</h3>
          <p className="text-gray-700">Skilled Data Management Experts</p>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-4xl font-bold text-indigo-600">99%</h3>
          <p className="text-gray-700">Accuracy</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-indigo-600">21</h3>
          <p className="text-gray-700">Years Experience</p>
        </div>
      </section>

      {/* Focus Section */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-6 text-center">Focus Your Resources on What Matters Most</h2>
        <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed mb-6">
          Architecture companies face challenges such as rising costs, economic fluctuations, and competitive pressures. Nimble Auity lets you focus on strategic priorities while our experts handle your data entry needs.
        </p>
        <ul className="max-w-4xl mx-auto space-y-4 text-gray-700 text-lg list-disc list-inside">
          <li><strong>Enhanced focus on core areas:</strong> Free your resources from mundane data entry and concentrate on key business functions.</li>
          <li><strong>Access to trained personnel and technology:</strong> Leverage expert professionals and cutting-edge tools for timely and high-quality results.</li>
          <li><strong>Quality assurance:</strong> Rigorous QC processes ensure error-free architectural data entry every time.</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Make Nimble's Architectural Data Entry Services Your Solution</h2>
        <p className="max-w-4xl mx-auto mb-6 text-gray-700 text-lg">
          Nimble Auity goes above and beyond to understand your unique challenges and develop customized solutions. Let us take care of your architectural data entry needs so your company can thrive.
        </p>
        <button className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          Contact Us
        </button>
      </section>

    </div>
  );
};

export default ArchitecturalDataEntry;
