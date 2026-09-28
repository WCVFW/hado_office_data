import React from "react";
import ESmainmenu from "../ESmainmenu";

const QuantityTakeoffServices: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Hero */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-emerald-700 to-green-800 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Nimble Auity Construction Quantity Takeoff Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Our takeoff quantity surveying services help busy contractors by
          providing estimating services at just{" "}
          <strong>$12/hour</strong>.
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-12 space-y-6">
        <p className="text-lg leading-relaxed">
          Are you a contractor, developer, owner, lender or architect? Do you
          not have the time to make your estimates? If so, our quantity takeoff
          services are designed just for you.
        </p>
        <p className="text-lg leading-relaxed">
          We are a leading construction quantity takeoff company and can help
          you concentrate on your business. Our team of experts has vast
          experience to take the burden off you for both commercial as well as
          residential quantity takeoff.
        </p>
      </section>

      {/* Services */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-emerald-700 mb-8 text-center">
          Construction Quantity Takeoff Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Takeoff for Contractors",
              desc: "Our experienced estimators perform residential and commercial takeoff and estimating services. We help you win more leads, bids, consultations, and contracts."
            },
            {
              title: "Takeoff for Developers",
              desc: "For developers, our team prepares estimates and takeoffs for ongoing projects, enabling accurate negotiation and budgeting."
            },
            {
              title: "Preliminary Takeoffs",
              desc: "Nimble is a construction quantity takeoff provider that also offers preliminary takeoffs, critical before investing time and money."
            },
            {
              title: "Pre-Construction Takeoffs and Estimates",
              desc: "We help validate bids for residential projects and finalize accurate numbers before project execution."
            },
            {
              title: "Investment Analysis",
              desc: "We review projects, estimate costs, obtain vendor quotations, suggest finance options, and verify budgets."
            },
            {
              title: "Estimate as per Local Pricing",
              desc: "Our experts deliver cost estimates tailored to your locality and zip code using our cost database."
            },
          ].map((service, i) => (
            <div
              key={i}
              className="p-6 bg-gray-50 rounded-2xl border shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-emerald-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-emerald-700 mb-6">
          Other Services You Can Benefit From
        </h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-lg">
          <li>Mechanical Engineering Services</li>
          <li>Architectural Design Services</li>
          <li>Civil Engineering Services</li>
          <li>Structural Engineering Services</li>
        </ul>
      </section>

      {/* Why Choose Nimble */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-emerald-700 mb-8 text-center">
          Why Choose Nimble for Quantity Takeoff Services?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Experienced Team in all types of takeoff services",
            "Competitive Pricing & discounts for regular clients",
            "Simple Client Process – just send drawings & specs",
            "Latest Software Tools & cost databases",
            "Round the Clock Global Support",
          ].map((reason, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl border shadow hover:shadow-md transition"
            >
              <h3 className="font-semibold text-emerald-700">{reason}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-emerald-700 mb-6">
          Client Success Stories
        </h2>
        <div className="space-y-6">
          <div className="p-6 bg-white rounded-xl shadow border">
            <h3 className="text-xl font-semibold text-emerald-700 mb-2">
              Nimble Provided HVAC Modeling of 19-Story Commercial Building
            </h3>
            <p>
              During the global pandemic, ten of our MEP engineers used
              Navisworks to perform HVAC modeling of a 19-story commercial
              building for an American client.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow border">
            <h3 className="text-xl font-semibold text-emerald-700 mb-2">
              Nimble Performed UAV LiDAR Mapping of Canadian Railroad
            </h3>
            <p>
              Nimble mapped over 600 km of Canadian railroads with high accuracy
              and cost-effectiveness.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-emerald-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-emerald-700 mb-4">
          What Our Clients Say
        </h2>
        <blockquote className="max-w-3xl mx-auto text-lg italic text-gray-700">
          “They have been able to learn our procedures quicker than I ever
          thought possible.” <br />
          <span className="font-semibold">
            – General Partner, US Manufacturing Company
          </span>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-800 to-emerald-700 text-white text-center py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Nimble Quantity Takeoff Services
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-6">
          Don’t miss out on projects due to lack of time. Nimble Auity’s
          experienced team supports contractors and developers with accurate
          takeoffs and estimates. Let us help you win more bids today.
        </p>
        <button className="bg-white text-emerald-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-200 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default QuantityTakeoffServices;
