import React from "react";
import { motion } from "framer-motion";
import DSmainmenu from "../DSmainmenu";

const DataProtectionConsulting = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Data Protection Consulting Services
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto">
          Integrate advanced threat intelligence and intrusion detection systems to safeguard your organization from data breaches. Nimble helps you establish reliable data operations.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 md:px-20">
        <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
          Data protection is no longer just regulatory—it's strategic. Nimble Auity provides customized consulting services globally, including data classification, governance frameworks, and advanced threat intelligence to secure sensitive company and client information. We also offer training programs to increase workforce awareness of data protection practices, reducing risks and ensuring business continuity.
        </p>
      </section>

      {/* Services */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Our Comprehensive Range of Data Privacy Solutions
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Data Governance Services",
              description:
                "Develop data management frameworks, create policies on data quality and access, and implement structured data to improve decision-making.",
            },
            {
              title: "Lifecycle Management Services",
              description:
                "Manage data from creation to disposal, optimize storage using automated tools, and ensure efficient retention and compliance.",
            },
            {
              title: "Data Monitoring Services",
              description:
                "Track data activities in real time, identify abnormalities with automated alerts, and improve productivity and confidence in data handling.",
            },
            {
              title: "Data Virtualization Services",
              description:
                "Combine data sources without migration, create a unified data view, and enable faster, better-informed decisions.",
            },
            {
              title: "Data Verification Services",
              description:
                "Maintain data accuracy, validate integrity with automated tools, and eliminate errors and inconsistencies quickly.",
            },
            {
              title: "Metadata Management Services",
              description:
                "Organize and improve data assets efficiently, enhance data discovery and governance, and extract insights for innovation.",
            },
          ].map((service) => (
            <motion.div
              key={service.title}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Tools We Use</h2>
        <p className="text-gray-700 mb-4">
          Digital Guardian, Varonis
        </p>
        <p className="text-gray-500 text-sm">
          (Disclaimer: The use of these tools is subject to Nimble Auity's current practices. We do not endorse or affiliate with these tools in any capacity.)
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Why Choose Nimble for Data Privacy Consultancy?
        </h2>
        <ul className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 text-gray-700 list-disc list-inside">
          {[
            "Tailored Compliance Solutions: Custom frameworks for GDPR, CCPA, and industry regulations.",
            "Incident Response Planning: Contain breaches, minimize downtime, and safeguard assets.",
            "Robust Data Encryption Techniques: Protect sensitive data, maintain confidentiality and integrity.",
            "Advanced Threat Intelligence: Real-time insights to mitigate potential cyber threats.",
            "Comprehensive Risk Assessments: Identify vulnerabilities and implement action plans.",
            "Data Privacy Training Programs: Educate employees to reduce human errors and improve compliance.",
          ].map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Additional Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            "Data Conversion Services",
            "Data Entry Services",
            "Property Management Back Office Services",
            "Online Catalog Management Services",
          ].map((service) => (
            <div key={service} className="bg-blue-100 text-blue-800 py-6 rounded-lg font-medium shadow-md">
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Online Data Entry for Kansas-based Online Store",
              description:
                "A renowned American client required highly professional and reliable online data entry activities. Nimble provided the highest quality services promptly.",
            },
            {
              title: "Data Research and Extraction for Legal Consultants",
              description:
                "A Florida-based legal services provider required precise and professional data extraction services. Nimble delivered exceptional services at affordable prices.",
            },
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
              "Working with Nimble has been a great experience. They quickly learned our line of business, adapted to our requirements, and consistently performed well. They're reliable and a wonderful partner."
            </p>
            <p className="mt-4 font-semibold text-gray-900">
              Spokesperson, Executive Recruitment Firm, US
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Secure Your Data Operations with Nimble Auity
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Our expert data protection consulting services safeguard your critical assets from evolving threats. Contact us today to know more.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default DataProtectionConsulting;
