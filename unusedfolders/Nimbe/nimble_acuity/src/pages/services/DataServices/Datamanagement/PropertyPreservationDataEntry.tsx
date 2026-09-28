import React from "react";
import { motion } from "framer-motion";
import DSmainmenu from "../DSmainmenu";

const PropertyPreservationDataEntry = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-20 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Property Preservation Data Entry Services
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto">
          Efficient property data preservation services to help you make informed decisions. Prices start at just $6/hour
        </p>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 md:px-20">
        <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
          Property preservation data entry involves recording details about vacant properties, maintenance, cleaning, and preventive measures. Nimble Auity brings over 2 decades of experience assisting real estate companies in maintaining accurate property records efficiently.
        </p>
      </section>

      {/* Property Data Entry Services */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Property Data Entry Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Work Order Data Entry Services",
              description: "Manage high-volume preservation work orders efficiently to adapt to changing volumes."
            },
            {
              title: "Vendor Data Entry Services",
              description: "Consolidate all vendor information into a single console for quick access."
            },
            {
              title: "Invoice Data Entry Services",
              description: "Enter invoices into accounting systems to monitor payments on time."
            },
            {
              title: "Data Annotation Services",
              description: "Tag text, videos, and photos to make them searchable and SEO-friendly."
            },
            {
              title: "Cleanliness Data Entry",
              description: "Record all maintenance and cleanliness activities to track property upkeep."
            }
          ].map((service) => (
            <motion.div
              key={service.title}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6 text-center">Other Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            "Data Entry Services",
            "Data Conversion Services",
            "ePUB Solutions",
            "Data Processing Services"
          ].map((service) => (
            <div key={service} className="bg-blue-100 text-blue-800 py-6 rounded-lg font-medium shadow-md">
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-6 text-center">Benefits of Choosing Nimble for Property Preservation Data Entry</h2>
        <ul className="max-w-4xl mx-auto space-y-4 list-disc list-inside text-gray-700">
          <li><strong>Expert Professionals:</strong> Experienced team with at least 2 years in data entry.</li>
          <li><strong>Wide Experience:</strong> Extensive work with real estate companies and agents.</li>
          <li><strong>Cost-Effective Services:</strong> Competitive pricing with operations in low-cost countries like India and the Philippines.</li>
          <li><strong>Better Data Security:</strong> Guaranteed data protection with firewalls, restricted access, encrypted emails, and more.</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Efficient Data Entry Services for US-based Client",
              description: "Nimble provided high-quality online data entry resources that delivered services promptly and accurately."
            },
            {
              title: "Professional Data Extraction for Florida Legal Services",
              description: "Nimble delivered precise and reliable data extraction services at affordable rates."
            }
          ].map((story) => (
            <motion.div
              key={story.title}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
              <p className="text-gray-600">{story.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <motion.div className="bg-white p-6 rounded-xl shadow-md" whileHover={{ scale: 1.02 }}>
            <p className="italic text-gray-700">
              "Nimble Auity will have a positive effect on any business processes. I do not doubt that."
            </p>
            <p className="mt-4 font-semibold text-gray-900">
              Marketing Director, Insulation Company, UK
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-blue-600 to-teal-500 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Streamline Your Property Data with Nimble</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Keep property records accurate and up-to-date. Contact Nimble Auity for top-notch property preservation data entry services today!
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          Contact Us
        </button>
      </section>

    </div>
  );
};

export default PropertyPreservationDataEntry;
