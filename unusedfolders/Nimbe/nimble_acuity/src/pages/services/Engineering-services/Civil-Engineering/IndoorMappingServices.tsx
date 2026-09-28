import React from "react";
import ESmainmenu from "../ESmainmenu";

const IndoorMappingServices: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Indoor Mapping Services by Nimble Acuity
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Get smart with Nimble! Offshore your indoor mapping requirement to us;
          streamline space visualization, resource planning, team productivity,
          and building maintenance with smart management systems at just{" "}
          <span className="font-semibold">$11/hour</span>!
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          The global market value of smart offices is expected to go up to{" "}
          <strong>$46.11 Billion by 2023</strong>. Indoor mapping combines GIS
          data with 3D visualization to offer the best occupant experience to
          customers, employees, and visitors. With Nimble Acuity’s tech-savvy
          services, you can get the best solutions at up to{" "}
          <span className="font-semibold">40% lesser costs</span>.
        </p>
        <p className="mt-4 text-gray-600">
          Our civil engineers enable you to achieve interactive indoor maps that
          facilitate easy navigation within your premises. We help you boost
          operational efficiency and improve customer experience.
        </p>
      </section>

      {/* Services */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">
          Indoor Mapping Services We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Indoor Alignment",
              desc: "Merging advanced sensors with your technology ecosystem to make spaces easy to navigate.",
            },
            {
              title: "Indoor Maps for Logistics Facilities",
              desc: "Location analytics and navigation services to streamline operations.",
            },
            {
              title: "Indoor Analytics",
              desc: "AI-powered analytics that convert existing data into actionable insights.",
            },
            {
              title: "Corporate and Campus Support",
              desc: "Integrating departments and floors into a single map for asset tracking.",
            },
            {
              title: "Indoor Security",
              desc: "Make informed security decisions with device detection and positioning services.",
            },
            {
              title: "Indoor Maps for Airports",
              desc: "Smart indoor navigation maps for safe, secure, and convenient travel experiences.",
            },
            {
              title: "Indoor Maps for Healthcare",
              desc: "Efficient hospital navigation, asset tracking, and resource management.",
            },
            {
              title: "Indoor Maps for Retail",
              desc: "Accurate maps for retail outlets to help customers navigate conveniently.",
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
          Why Choose Nimble Indoor Mapping Services?
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 text-gray-700">
          <li className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <strong>Scalable & Future-proof:</strong> Flexible solutions for
            one-time or ongoing requirements.
          </li>
          <li className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <strong>Advanced Tools:</strong> Smart and centralized indoor maps
            supporting multiple use cases.
          </li>
          <li className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <strong>Impeccable Quality:</strong> High-quality outputs with
            cutting-edge tools and workflows.
          </li>
          <li className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <strong>Flexible Pricing:</strong> Project-based and hourly pricing
            models tailored to your needs.
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
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Nimble Provided Radius Mapping Services
            </h3>
            <p>
              A New York-based land expedition services firm approached us for
              radius mapping services. Our civil engineers delivered
              high-quality solutions quickly.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Nimble Provided UAV LiDAR Mapping
            </h3>
            <p>
              Nimble performed UAV LiDAR Mapping of over 600 km of Canadian
              railroads with high accuracy and affordability.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <blockquote className="italic text-lg text-gray-700 bg-white rounded-xl shadow-md p-6 max-w-3xl mx-auto">
          “We have outsourced important engineering work to Nimble and have seen
          excellent results, specifically in transcription of civil and
          structural engineering calculations using Mathcad.”
          <footer className="mt-4 font-semibold">
            — SVP & Co-Founder, Engineering Resource Company
          </footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-indigo-700 to-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Outsource Indoor Mapping Services to Nimble Acuity
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Nimble Acuity is a leading indoor mapping company with 26+ years of
          experience. Serving 18,000+ clients across 160+ countries, we deliver
          accurate and efficient solutions.
        </p>
        <button className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-full shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default IndoorMappingServices;
