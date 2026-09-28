import React from "react";
import DSmainmenu from "../DSmainmenu";

const GamingDataEntry = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20 px-6 md:px-20 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Gaming Industry Data Entry Services
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto">
          Nimble Auity's Gaming Industry Data Entry services take the burden off your shoulders, letting your company focus on innovation and growth.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 md:px-20">
        <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
          The gaming industry is rapidly evolving, with new technologies and platforms emerging constantly. Nimble Auity provides expert data entry services tailored to help your gaming company manage vast volumes of data efficiently, cost-effectively, and accurately.
        </p>
      </section>

      {/* Services List */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">Gaming Data Entry Services We Offer</h2>
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
      <section className="py-16 px-6 md:px-20 flex flex-wrap justify-around text-center bg-gradient-to-r from-green-50 to-teal-50">
        <div className="mb-6 md:mb-0">
          <h3 className="text-4xl font-bold text-green-600">40%</h3>
          <p className="text-gray-700">Cost Reduction</p>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-4xl font-bold text-green-600">8-24 Hrs</h3>
          <p className="text-gray-700">Faster Turnaround</p>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-4xl font-bold text-green-600">500+</h3>
          <p className="text-gray-700">Satisfied Clients</p>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-4xl font-bold text-green-600">350+</h3>
          <p className="text-gray-700">Skilled Data Management Experts</p>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-4xl font-bold text-green-600">99%</h3>
          <p className="text-gray-700">Accuracy</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-green-600">21</h3>
          <p className="text-gray-700">Years Experience</p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-6 text-center">Helping Your Gaming Company Play Its A-Game</h2>
        <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed mb-6">
          Gaming companies face unique challenges from rapidly-changing technology and new markets. Nimble Auity is more than a data entry provider — we are your teammate, helping you optimize data entry results so your company can focus on innovation and growth.
        </p>
        <ul className="max-w-4xl mx-auto space-y-4 text-gray-700 text-lg list-disc list-inside">
          <li><strong>More time to focus on key areas:</strong> Free up resources to strengthen core competencies and brand value.</li>
          <li><strong>Trained personnel and technology:</strong> Access skilled staff and advanced software to handle high-volume work efficiently.</li>
          <li><strong>Assurance of quality:</strong> Rigorous Quality Control (QC) ensures error-free output every time.</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Make Nimble Auity Your Gaming Industry Data Entry Solution</h2>
        <p className="max-w-4xl mx-auto mb-6 text-gray-700 text-lg">
          Nimble Auity delivers top-quality data entry services for the gaming industry efficiently and cost-effectively. Contact us today and let us help your company stay competitive.
        </p>
        <button className="bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          Contact Us
        </button>
      </section>

    </div>
  );
};

export default GamingDataEntry;
