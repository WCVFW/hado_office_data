import React from "react";
import ESmainmenu from "../ESmainmenu";

const DroneSurveyServices: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Drone Survey Services by Nimble Acuity
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Offshore aerial drone surveying services to Nimble. Save time, costs, and resources with advanced flatland survey methods starting at{" "}
          <span className="font-semibold">$11/hour</span>.
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          Drone surveying revolutionizes flatland survey methods, capturing vast amounts of data quickly, safely, and efficiently. Nimble Acuity’s aerial drone survey services reduce costs and legal concerns while enhancing data accuracy for mapping, surveying, and inspection projects.
        </p>
      </section>

      {/* Services */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Drone Survey Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Bridge Inspection",
              desc: "Monitor structural and functional performance of complex bridges safely and efficiently.",
            },
            {
              title: "Grid and Line Maintenance",
              desc: "Continuous aerial surveys to identify and mitigate faults in power distribution.",
            },
            {
              title: "River Mapping Services",
              desc: "Unbiased inspection and detailed data collection of river areas and water landscapes.",
            },
            {
              title: "Agricultural Survey",
              desc: "Evaluate land size and water requirements with efficient drone land surveys.",
            },
            {
              title: "Road Inspection",
              desc: "Drone mapping surveys for highway and local road construction and maintenance.",
            },
            {
              title: "Monitoring Wildlife",
              desc: "High-resolution aerial surveys for wildlife tracking and habitat assessment.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-700">
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
          Why Choose Nimble Drone Survey Services?
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 text-gray-700">
          <li className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <strong>Affordable Pricing:</strong> Start at $11/hour without compromising quality.
          </li>
          <li className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <strong>State-of-the-Art Infrastructure:</strong> Cutting-edge drones and tools for precise aerial surveys.
          </li>
          <li className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <strong>ISO-Certified Quality:</strong> Legal and technical compliance ensured for hassle-free surveying.
          </li>
          <li className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <strong>24/7 Availability:</strong> Support via phone, SMS, or email anytime, including emergencies.
          </li>
          <li className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <strong>Scalable Services:</strong> Flexible project scope to meet deadlines efficiently.
          </li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Nimble Provided Radius Mapping Services
            </h3>
            <p>
              A New York-based land expedition firm received accurate radius mapping services with a quick turnaround time.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Nimble Provided UAV LiDAR Mapping
            </h3>
            <p>
              Conducted UAV LiDAR Mapping for over 600 km of Canadian railroads accurately and cost-effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <blockquote className="italic text-lg text-gray-700 bg-white rounded-xl shadow-md p-6 max-w-3xl mx-auto">
          “Nimble Acuity has been a tremendous resource for our engineering department. They are exact and attentive to all our needs.”
          <footer className="mt-4 font-semibold">
            — General Partner, Manufacturing Company, US
          </footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Drone Survey Services at Your Fingertips
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          With 26+ years of experience serving 18,000+ clients globally, Nimble Acuity offers advanced drone surveying solutions for accurate mapping, inspection, and analysis.
        </p>
        <button className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-full shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default DroneSurveyServices;
