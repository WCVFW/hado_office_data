import React from "react";
import ESmainmenu from "../ESmainmenu";

const StormwaterManagement: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Hero */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-800 to-cyan-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Nimble Auity Stormwater Management Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          We offer strategic stormwater management solutions best suited to your
          needs. Leverage our global expertise and world-class infrastructure.
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-12 space-y-6">
        <p className="text-lg leading-relaxed">
          Are you a contractor, developer, owner, lender, or architect? Do you
          not have the time to make your estimates? If so, our quantity takeoff
          services are designed just for you.
        </p>
        <p className="text-lg leading-relaxed">
          Are you on the lookout for experienced and qualified professionals for
          stormwater management for your civil engineering projects? Do you want
          a reliable company that can provide you with well-designed systems to
          create a successful, healthy, and sustainable environment for the
          people? If yes, you are in the right place.
        </p>
        <p className="text-lg leading-relaxed">
          Nimble Auity is a leading global partner with over two decades of
          expertise. From sustainable management of stormwater to design and
          disposal, our engineers provide integrated services tailored to
          clients’ needs. Reach out today to discuss your project.
        </p>
      </section>

      {/* Services */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
          Stormwater Management Solutions We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Construction Stormwater Permitting",
              desc: "Our professionals help you obtain permits and allowances for the sustainable delivery of stormwater systems."
            },
            {
              title: "NPDES",
              desc: "We provide National Pollutant Discharge Elimination System permitting and active facility management services."
            },
            {
              title: "Restoration of Streams, Wetlands, and Estuary",
              desc: "Nimble Auity assists in obtaining permits for streams, wetlands, and estuaries to ensure proper stormwater management."
            },
            {
              title: "Flood Control",
              desc: "Our experts plan and execute flood control projects with proven strategies and reliable resources."
            },
            {
              title: "Consulting",
              desc: "We deliver high-grade consulting and guidance for stormwater management across industries and time zones."
            }
          ].map((service, i) => (
            <div
              key={i}
              className="p-6 bg-gray-50 rounded-2xl border shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">
          Other Services You Can Benefit From
        </h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-lg">
          <li>Land Development Design Services</li>
          <li>Building Information Model</li>
          <li>Laser Scan to BIM Services</li>
          <li>Revit Modeling Services</li>
        </ul>
      </section>

      {/* Why Choose Nimble */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
          Why Choose Nimble for Stormwater Management?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Affordable Rates with no hidden fees",
            "Superb Infrastructure & cutting-edge tools",
            "Certified Service Provider (ISO standards)",
            "Data Security with FTP/VPN & GDPR compliance",
            "Error-free Services with 99% accuracy",
            "Multiple Delivery Locations across the globe",
            "24/7 Customer Support worldwide"
          ].map((reason, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl border shadow hover:shadow-md transition"
            >
              <h3 className="font-semibold text-blue-800">{reason}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">
          Client Success Stories
        </h2>
        <div className="space-y-6">
          <div className="p-6 bg-white rounded-xl shadow border">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Nimble Provided HVAC Modeling of 19-Story Commercial Building
            </h3>
            <p>
              During the global pandemic, ten of our MEP engineers used
              Navisworks to perform HVAC modeling of a 19-story commercial
              building for an American client.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow border">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Nimble Performed UAV LiDAR Mapping of Canadian Railroad
            </h3>
            <p>
              Nimble Auity mapped over 600 km of Canadian railroads with high
              accuracy and cost-effectiveness.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">
          What Our Clients Say
        </h2>
        <blockquote className="max-w-3xl mx-auto text-lg italic text-gray-700">
          “The focus and commitment of Nimble Auity's engineers and managers
          were first-rate and surpassed our expectations.” <br />
          <span className="font-semibold">
            – SVP & Co-Founder, Engineering Resource Company
          </span>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-cyan-700 to-blue-800 text-white text-center py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Nimble Stormwater Management Services
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-6">
          Nimble Auity is one of the leading providers of civil engineering
          services worldwide. With 10+ global delivery centers and 160+ client
          countries, we deliver on time with the best turnaround times in the
          industry.
        </p>
        <button className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-200 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default StormwaterManagement;
