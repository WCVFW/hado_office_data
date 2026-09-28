import React from "react";
import CCmainmenu from "../CCmainmenu";

const TravelHospitalityLeadGen: React.FC = () => {
  const services = [
    "B2B Lead Generation for Travel and Hospitality Clients",
    "Cold Calling Service for Travel and Hospitality Clients",
    "Appointment Setting for Travel & Hospitality Clients",
    "Campaign Management Services",
  ];

  const benefits = [
    "Affordable Pricing Options",
    "Data Security (ISO/IEC 27001:2022 Certified)",
    "State-of-the-art Infrastructure",
    "Superior Quality Services",
    "Skilled Team of Experts",
    "24/7 Round the Clock Support",
    "Dedicated Single Point of Contact (SPOC)",
    "Quick Turnaround",
    "Easily Scalable Services",
  ];

  const otherServices = [
    "Lead Generation for IT Companies",
    "Lead Generation for Startups",
    "Lead Generation for BFSI Industry",
    "Lead Generation for Education Sector",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="text-center py-12 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Travel & Hospitality Lead Generation Services
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          Boost your hotel leads, sales, and revenue by outsourcing lead generation for your travel and hospitality business.
        </p>
        <a
          href="#contact"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition"
        >
          Get Started Today
        </a>
      </section>

      {/* Services Offered */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Lead Generation Services
        </h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, idx) => (
            <li
              key={idx}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition text-gray-700"
            >
              {service}
            </li>
          ))}
        </ul>
      </section>

      {/* Benefits */}
      <section className="mb-16 bg-gray-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-start">
              <div className="flex-shrink-0 mr-4 text-green-600 font-bold text-xl">✓</div>
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-6">
          Other Services You May Benefit From
        </h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center text-gray-700">
          {otherServices.map((service, idx) => (
            <li
              key={idx}
              className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition"
            >
              {service}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="text-center py-16 bg-pink-500 text-white rounded-lg"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to Boost Your Travel & Hospitality Leads?
        </h2>
        <p className="text-lg sm:text-xl mb-6">
          Partner with our lead generation experts to streamline your campaigns and generate high-quality leads efficiently.
        </p>
        <a
          href="mailto:info@nimbleauity.com"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition"
        >
          Contact Us Now
        </a>
      </section>
    </div>
  );
};

export default TravelHospitalityLeadGen;
