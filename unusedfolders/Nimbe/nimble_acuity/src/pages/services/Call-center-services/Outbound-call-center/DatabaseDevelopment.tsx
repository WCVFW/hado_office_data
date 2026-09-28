import React from "react";
import CCmainmenu from "../CCmainmenu";

const DatabaseDevelopment: React.FC = () => {
  return (
    <section className="bg-white text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold">
          Nimble Acuity – Call Center Database Development and Management Services
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl">
          Enhance your marketing database by updating, validating, and verifying existing email contact lists, 
          or by building a custom database to manage your data.
        </p>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Call Center Database Development and Management Services We Offer
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Custom List Building",
              desc: "We use CTQ metrics and standardized field-matching algorithms to customize lists with specific fields as per your business requirements.",
            },
            {
              title: "Appending Emails",
              desc: "We append emails to your existing client list or create new lists with required client details quickly and accurately.",
            },
            {
              title: "Appending Data",
              desc: "We fill missing information such as phone numbers or emails to improve your marketing campaigns.",
            },
            {
              title: "Data Validation",
              desc: "Reliable validation services combining manual and automated checks to maintain CTQ thresholds.",
            },
            {
              title: "Data Cleansing",
              desc: "We standardize and clean your database, removing spelling errors and inconsistencies.",
            },
            {
              title: "De-duplication of Entries",
              desc: "Our team removes duplicate entries to create efficient and accurate marketing databases.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gray-100 py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Our Call Center Database Development and Management Process
        </h2>
        <div className="grid gap-6 md:grid-cols-5 text-center">
          {[
            "Contact the Client",
            "Data Validation",
            "De-duplication",
            "Database Cleansing",
            "Final Delivery",
          ].map((step, idx) => (
            <div
              key={idx}
              className="p-4 bg-white rounded-xl shadow hover:shadow-md transition"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <p className="font-medium">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Why Call Centers Choose Nimble Acuity?
        </h2>
        <ul className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "High Accuracy",
              desc: "ISO-certified processes with multiple checks to ensure accuracy in client information.",
            },
            {
              title: "Data Security",
              desc: "Secure cloud infrastructure and FTP encryption to safeguard your data.",
            },
            {
              title: "Infrastructure",
              desc: "Global delivery centers with high-speed connectivity and 100% redundancy.",
            },
            {
              title: "Affordable Pricing",
              desc: "Flexible pricing models based on call volume, complexity, and agent skills.",
            },
            {
              title: "Enhanced Brand Reputation",
              desc: "Error-free databases enhance your credibility and trust in the market.",
            },
            {
              title: "Streamlined Management",
              desc: "We follow Lean Six Sigma DMAIC processes for accuracy and consistency.",
            },
          ].map((item, idx) => (
            <li
              key={idx}
              className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Client Success Stories */}
      <div className="bg-blue-50 py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold mb-2">
              Nimble Created Contact Database for a Top Recruitment Firm
            </h3>
            <p className="text-gray-600">
              Our team created an up-to-date and accurate contact database of Healthcare IT companies tailored to client requirements.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold mb-2">
              Nimble Provided Data Management to a Leading Recruitment Company
            </h3>
            <p className="text-gray-600">
              A UK-based recruitment company achieved cost-effective, high-quality data management solutions within a short turnaround time.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Testimonials</h2>
        <blockquote className="italic text-lg text-gray-700">
          “We were very satisfied with the quality of service Nimble Acuity provided. 
          They met our requests with great professionalism and flexibility.”
        </blockquote>
        <p className="mt-4 font-semibold text-gray-600">
          – Spokesperson, Online Health Lessons Company in Canada
        </p>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white text-center py-12 px-6">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Outsource Call Center Database Development and Management Services to Nimble Acuity
        </h2>
        <p className="max-w-3xl mx-auto text-lg">
          If you are looking for a reliable, accurate, efficient, and cost-effective outbound call center 
          for database development and management – Nimble Acuity is your partner.
        </p>
        <button className="mt-6 px-8 py-3 bg-white text-blue-700 font-semibold rounded-xl shadow hover:bg-gray-100 transition">
          Get in Touch with Us
        </button>
      </div>
    </section>
  );
};

export default DatabaseDevelopment;
