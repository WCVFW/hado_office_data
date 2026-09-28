import React from "react";
import DSmainmenu from "../DSmainmenu";

const ManufacturingDataEntry = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20 px-6 md:px-20 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Data Entry Services for the Manufacturing Industry
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto">
          Focus on strategic tasks while Nimble Auity handles your manufacturing data entry efficiently and accurately.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 md:px-20">
        <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
          Changing market conditions put pressure on manufacturing companies to stay competitive. Nimble Auity leverages extensive experience to provide a wide range of data entry services to global clients. Outsourcing your manufacturing data entry projects to us ensures superior service at minimized costs, allowing you to focus on strategic areas that create value.
        </p>
      </section>

      {/* Why Manufacturing Needs Data Entry Services */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">The Need for Manufacturing Data Entry Services</h2>
        <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed mb-6">
          Nimble uses an optimal mix of trained personnel and advanced technology to provide reliable manufacturing data entry services. Whether moving up the value chain, relocating operations, or handling global supply chains, outsourcing non-core activities like data entry frees your resources for strategic execution.
        </p>

        <ul className="max-w-4xl mx-auto space-y-2 text-gray-700 text-lg list-disc list-inside">
          <li>Document data entry services</li>
          <li>Online data entry</li>
          <li>Offline data entry services</li>
          <li>Image data entry services</li>
          <li>Data capture services</li>
          <li>Data enrichment services</li>
          <li>Database development & migration services</li>
          <li>Copy paste services</li>
          <li>Document management systems</li>
          <li>Data extraction services</li>
          <li>Book data entry services</li>
          <li>Directory services</li>
        </ul>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 md:px-20 text-center">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto text-gray-700">
          <div>
            <h3 className="text-3xl font-bold text-green-600">40%</h3>
            <p>Cost Reduction</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-green-600">8-24 Hrs</h3>
            <p>Faster Turnaround</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-green-600">500+</h3>
            <p>Satisfied Clients</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-green-600">350+</h3>
            <p>Skilled Data Experts</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-green-600">99%</h3>
            <p>Accuracy</p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Outsource Manufacturing Data Entry Projects to Nimble?</h2>
        <ul className="max-w-4xl mx-auto space-y-4 text-gray-700 text-lg list-disc list-inside">
          <li><strong>Increased focus on core areas:</strong> We handle data entry efficiently so you can focus on strategic strengths and maximize customer satisfaction.</li>
          <li><strong>Access to trained personnel and advanced technology:</strong> Leverage skilled experts and state-of-the-art tools to complete high-volume work within deadlines.</li>
          <li><strong>Assurance of quality:</strong> Rigorous Quality Control ensures error-free data entry every time.</li>
        </ul>
      </section>

      {/* Why Nimble Auity */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">Nimble Auity – Your Ideal Data Entry Partner</h2>
        <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed mb-6">
          Nimble Auity believes superior services are key to long-lasting partnerships. We develop tailor-made solutions to fit your unique requirements while providing insights to improve your business processes. Our focus is on delivering top-quality services that take your business to the next level.
        </p>
        <div className="text-center">
          <button className="bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            Contact Us
          </button>
        </div>
      </section>

    </div>
  );
};

export default ManufacturingDataEntry;
