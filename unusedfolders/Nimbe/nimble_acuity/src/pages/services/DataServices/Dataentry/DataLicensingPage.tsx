import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DSmainmenu from "../DSmainmenu";

const DataLicensingPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nimble Data Licensing Services
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Improve governance of your data with structured policies, protocols,
            and practices – starting at just{" "}
            <span className="font-semibold">$6/hour</span>.
          </p>
          <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500">
            Get a Free Quote
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Data Licensing Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Identifying the Right License",
              desc: "We determine the most suitable license for your business based on data type and usage, ensuring compliance and authorization.",
            },
            {
              title: "Providing Right Data Ownership",
              desc: "We draft agreements to ensure ownership is clearly defined, protecting licensors’ exclusive rights to their datasets.",
            },
            {
              title: "Data Maintenance Services",
              desc: "Our experts maintain databases using technologies like SQL, MySQL, MongoDB, and Oracle to safeguard and manage assets.",
            },
            {
              title: "Data Control Services",
              desc: "We help licensors manage and control both open and closed-source databases with customized solutions.",
            },
            {
              title: "Data Security Services",
              desc: "Our policies cover both people and technology security, ensuring safe handling of PII, IP, and other sensitive data.",
            },
            {
              title: "Data Protocol Services",
              desc: "We implement robust access protocols to protect information from unauthorized access, misuse, or modification.",
            },
            {
              title: "Safe Data Usage Practices",
              desc: "We help establish research ethics, IP rights awareness, and consent-based usage for long-term data reliability.",
            },
            {
              title: "Data Cleansing Services",
              desc: "Our cleansing process ensures data is up-to-date by validating, enriching, correcting, and formatting datasets.",
            },
            {
              title: "Data Licensing Consultation",
              desc: "We provide end-to-end consulting, including upgrades, renewals, compliance, and governance improvements.",
            },
          ].map((service, idx) => (
            <Card key={idx} className="shadow-lg rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Our Data Licensing Process
          </h2>
          <ol className="space-y-6 md:space-y-0 md:grid md:grid-cols-4 md:gap-6">
            {[
              "Identifying Proprietary Data",
              "Determine if Data is IP Protected",
              "Address Data Ownership",
              "Establish Right to Data Usage",
            ].map((step, idx) => (
              <li
                key={idx}
                className="bg-white shadow-md rounded-2xl p-6 text-center"
              >
                <div className="text-3xl font-bold text-blue-700 mb-3">
                  {idx + 1}
                </div>
                <p className="font-medium">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Nimble Acuity?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Secured Data with Foolproof Policies",
            "Timely Licensing Services",
            "Cost-Effective Solutions",
            "Consistent and Reliable Data",
            "Flexible Update Cycles (Weekly, Monthly, Quarterly)",
            "Experienced Global Team",
          ].map((point, idx) => (
            <Card key={idx} className="rounded-2xl shadow">
              <CardContent className="p-4 text-center font-medium">
                {point}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
          <blockquote className="italic text-lg text-gray-700">
            “We were very satisfied with the quality of service Nimble Acuity
            provided. They met our requests with great professionalism and
            flexibility. We look forward to future projects with them.”
          </blockquote>
          <p className="mt-4 font-semibold text-gray-800">
            – Spokesperson, Online Health Lessons Company (Canada)
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-700 to-blue-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Protect and Optimize Your Data Licensing
        </h2>
        <p className="text-lg mb-8">
          Contact us today to Nimble Data Licensing Services and get a free
          quote within 24 hours.
        </p>
        <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500">
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default DataLicensingPage;
