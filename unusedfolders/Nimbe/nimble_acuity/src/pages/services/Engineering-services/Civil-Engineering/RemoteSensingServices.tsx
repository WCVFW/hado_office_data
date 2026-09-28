import React from "react";
import ESmainmenu from "../ESmainmenu";

const RemoteSensingServices: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-green-600 to-teal-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Remote Sensing Services by Nimble Acuity
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Derive actionable insights from weather and geospatial data. Nimble
          your remote sensing requirement to us at just{" "}
          <span className="font-semibold">$11/hour</span>!
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          Struggling with inaccessible terrains or analyzing environmental,
          weather, pollution, and geological data? Nimble Acuity offers
          exclusive remote sensing solutions for weather and environmental data
          to cover large areas for everyday applications such as forecasts,
          disaster management, or climatic reports.
        </p>
        <p className="mt-4 text-gray-600">
          We generate accurate spatial data and provide edge-cutting services
          like change detection, DEM creation, image processing, classification,
          and enhancement.
        </p>
      </section>

      {/* Services */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Remote Sensing Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "GIS and Remote Sensing Services",
              desc: "Analyze, collect, store, and visualize geospatial data from any location on earth.",
            },
            {
              title: "GIS Surveying Services",
              desc: "Accurate surveying of land, aerial, LiDAR, and 3D mapping data with optimal decision-making.",
            },
            {
              title: "Planimetric Mapping Services",
              desc: "High-quality planimetric maps created with precision and professional techniques.",
            },
            {
              title: "Photogrammetric Services",
              desc: "Comprehensive photogrammetry solutions for transportation, land administration, and orthophotography.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-green-700">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose Nimble Remote Sensing Services?
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 text-gray-700">
          <li className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <strong>Data Analysis:</strong> End-to-end GIS data analysis with
            highly accurate, realistic results.
          </li>
          <li className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <strong>Process Optimization:</strong> Leveraging workflows and
            systems to create robust decision support solutions.
          </li>
          <li className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <strong>Advanced Tools:</strong> Innovative infrastructure and
            software for accurate, cost-effective services.
          </li>
          <li className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <strong>Expert Team:</strong> Dedicated geospatial and technology
            specialists providing innovative solutions.
          </li>
          <li className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <strong>Quality Services:</strong> 2D/3D CAD modeling and geospatial
            management ensuring excellent ROI.
          </li>
        </ul>
      </section>

      {/* Success Stories */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Nimble Provided CAD Models for Architectural Firm
            </h3>
            <p>
              A leading US-based architectural firm needed cost-effective CAD
              modeling services. Nimble delivered precise solutions on time.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Nimble Provided Architectural Rendering
            </h3>
            <p>
              For a Wisconsin-based client, Nimble provided fast and accurate
              architectural rendering services.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <blockquote className="italic text-lg text-gray-700 bg-white rounded-xl shadow-md p-6 max-w-3xl mx-auto">
          “Nimble Acuity has been a tremendous resource for our engineering
          department. They are exact and attentive to all our needs.”
          <footer className="mt-4 font-semibold">
            — General Partner, Manufacturing Company, US
          </footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-700 to-green-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Remote Sensing Services at Your Fingertips
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Nimble Acuity has 26+ years of experience serving 18,000+ clients
          globally. Connect with our experts to leverage advanced GIS and
          remote sensing solutions for actionable insights.
        </p>
        <button className="px-6 py-3 bg-white text-green-700 font-semibold rounded-full shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default RemoteSensingServices;
