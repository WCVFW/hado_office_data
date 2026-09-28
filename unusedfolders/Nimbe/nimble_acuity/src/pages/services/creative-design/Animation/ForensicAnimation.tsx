import React from "react";
import CSmainmenu from "../CSmainmenu";

const ForensicAnimation: React.FC = () => {
  const services = [
    "Forensic Animations for Courtroom Demonstrations",
    "Forensic Animations for Crime Scene Exploration",
    "Forensic Animations for Insurance Claims",
    "Forensic Video Analysis",
    "Photogrammetry Services",
    "Forensic Animations for Eminent Domain",
    "Forensic Animations to Display Patent and Intellectual Property",
    "Accident Reconstruction Animations",
    "Medical Animations",
  ];

  const benefits = [
    "Affordable Pricing Options",
    "High-quality Services",
    "Superb Infrastructure",
    "Tools and Technologies",
    "Structured Process",
    "Experienced Team",
    "Data Security",
    "Short Turnaround",
  ];

  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Forensic Animation Services
        </h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-6">
          Get access to authentic, clear, and precise forensic animations at prices starting at just $10/hour.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-teal-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Get a Free Quote
        </a>
      </div>

      {/* Overview */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-6">
        <p>
          Nimble Auity is a leading provider of forensic animation services in India and abroad, offering realistic 3D animations for courtrooms, insurance claims, accident reconstructions, patent displays, and more.
        </p>
        <p>
          We use the latest forensic animation tools and technologies to deliver clear, precise, and accurate visualizations of scenarios and incidents for legal, medical, and technical applications.
        </p>
      </div>

      {/* Services Offered */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Forensic Animation Services We Offer
        </h2>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
          {services.map((service) => (
            <div key={service} className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">{service}</h3>
              <p>
                {service === "Forensic Animations for Courtroom Demonstrations" &&
                  "Present evidence and facts clearly in courtrooms using realistic 3D forensic animations."}
                {service === "Forensic Animations for Crime Scene Exploration" &&
                  "Visualize crime scenes and sequences of events for investigative and legal purposes."}
                {service === "Forensic Animations for Insurance Claims" &&
                  "Recreate accidents or property damage scenarios to support insurance claims effectively."}
                {service === "Forensic Video Analysis" &&
                  "Combine computer modeling and 4K video to create precise and detailed forensic videos."}
                {service === "Photogrammetry Services" &&
                  "Recreate 3D scenes from 2D photographs using laser-based measurements for accuracy."}
                {service === "Forensic Animations for Eminent Domain" &&
                  "Educate juries on property disputes using clear and precise forensic animations."}
                {service === "Forensic Animations to Display Patent and Intellectual Property" &&
                  "Graphically represent complex patent or IP issues to courts or juries."}
                {service === "Accident Reconstruction Animations" &&
                  "Perform precise traffic accident recreations for insurance, defense, and legal purposes."}
                {service === "Medical Animations" &&
                  "Create accurate medical visualizations, MRI-assisted virtual autopsies, and crime scene reconstructions."}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Other Services */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Other Services You Can Benefit From</h2>
        <ul className="max-w-4xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4 list-disc list-inside text-gray-700">
          <li>Animated Feature Films Services</li>
          <li>Architectural Animation Services</li>
          <li>Titling Animation Services</li>
          <li>Product Animation Services</li>
        </ul>
      </div>

      {/* Benefits */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Nimble Forensic Animation Services?</h2>
        <ul className="max-w-4xl mx-auto list-disc list-inside space-y-4 text-gray-700">
          {benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* Client Success Stories */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Client Success Stories</h2>
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="font-semibold text-xl mb-1">
              3D Animation and 3D Modeling for Scandinavian Medical Research Company
            </h3>
            <p>
              Nimble's 20-member team worked over 3000 man-hours to deliver fully-functional 3D animation and modeling videos with utmost precision.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-1">
              End-to-end Animation Services for Social Awareness Campaign
            </h3>
            <p>
              Nimble provided complete animation services for a French organization to raise awareness about the dangers of drugs and alcohol.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-6 text-center bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get Your Forensic Animation Today</h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
          Partner with Nimble Auity to create realistic, precise, and visually engaging forensic animations that communicate your scenario effectively.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-teal-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default ForensicAnimation;
