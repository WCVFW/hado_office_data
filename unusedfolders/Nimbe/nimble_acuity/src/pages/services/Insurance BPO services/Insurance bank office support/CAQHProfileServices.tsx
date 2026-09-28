import React from "react";
import Imainmenu from "../Imainmenu";

const CAQHProfileServices: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Nimble CAQH Profile Services for Insurance Credentialing
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Create detailed and comprehensive CAQH profiles for your business by
          choosing our team’s superior quality services at prices starting at
          just <span className="font-semibold">$8 an hour</span>.
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <p className="mb-6">
          Are you looking to create comprehensive and detailed CAQH profiles for
          your business? Are you on the lookout for skilled and experienced
          resources who can cater to all your needs? Then, the best option for
          you would be to Nimble CAQH profile services for insurance
          credentialing to an experienced and skilled CAQH profile service
          provider.
        </p>
        <p>
          Nimble Acuity is one such CAQH profile service providing company
          that can cater to all your requirements with ease. We have some of the
          most experienced and skilled experts who leverage the latest tools and
          technologies to deliver{" "}
          <span className="font-semibold">top-notch services</span>.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">
          CAQH Profile Services We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "CAQH Profile Development",
              desc: "Best quality and error-free CAQH profile development using the latest tools.",
            },
            {
              title: "Document Updating Services",
              desc: "Experienced experts handling all your document updates with precision.",
            },
            {
              title: "Insurance Panel Creation",
              desc: "Reliable and accurate insurance panel creation services with advanced tools.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">
          Other Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            "Insurance Appointment Setting Services",
            "Insurance Reporting Services",
            "Insurance Data Entry",
            "Insurance Analytics Services",
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">
          Why Choose Nimble Acuity?
        </h2>
        <ul className="max-w-4xl mx-auto space-y-4 list-disc list-inside text-gray-700">
          <li>Flexible Pricing Packages</li>
          <li>Experienced Insurance Experts</li>
          <li>State-of-the-art Infrastructure</li>
          <li>Dedicated Project Manager (SPOC)</li>
          <li>Superior Quality Services (ISO Certified)</li>
          <li>Highly Scalable Solutions</li>
          <li>Information Security (ISO/IEC 27001:2022 Certified)</li>
          <li>24/7 Customer Support</li>
          <li>Short Turnaround Time</li>
        </ul>
      </section>

      {/* Case Studies */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Maintaining Insurance Accounts",
              desc: "We enhanced back-office functions for a Miami-based insurance agency to improve productivity and timeliness.",
            },
            {
              title: "Complete Insurance Back-Office Solutions",
              desc: "We assisted a national healthcare insurance company by enhancing efficiency of their back-office tasks.",
            },
          ].map((story, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-3">{story.title}</h3>
              <p className="text-gray-600">{story.desc}</p>
              <button className="mt-4 text-blue-600 font-medium hover:underline">
                Read more
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white text-center py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Nimble CAQH Profile Services for Insurance Credentialing to Nimble Acuity
        </h2>
        <p className="mb-6 max-w-3xl mx-auto">
          If you are looking for a reliable and efficient CAQH profile service
          provider, then you have come to the right place. Get in touch with us
          today!
        </p>
        <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-2xl shadow hover:bg-gray-100">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default CAQHProfileServices;
