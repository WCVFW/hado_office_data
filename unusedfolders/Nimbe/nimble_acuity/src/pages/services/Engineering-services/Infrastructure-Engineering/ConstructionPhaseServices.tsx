import React from "react";
import ESmainmenu from "../ESmainmenu";

const ConstructionPhaseServices = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20 px-5 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Construction Phase Services
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Streamline your construction schedules, cut costs, and optimize outputs 
          to meet your project goals on time.
        </p>
      </section>

      {/* About Section */}
      <section className="py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-green-700 mb-6">About Our Services</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          At the pre-construction stage, tensions rise due to months of planning,
          coordination, and preparation. Nimble Acuity ensures proper execution
          by offering third-party support to manage coordination, documentation,
          and project execution for exemplary results.
        </p>
        <p className="text-gray-700 leading-relaxed">
          With years of experience handling complex projects, our skilled professionals 
          ensure work is done systematically and efficiently. Partner with Nimble 
          Acuity to guarantee your construction projects proceed seamlessly.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-green-700 mb-10 text-center">
          Our Construction Phase Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Estimation and Constructability Review",
              description:
                "We conduct full site reviews to test project factors and provide comprehensive reports for better planning.",
            },
            {
              title: "Preparation of Contract",
              description:
                "We assist in preparing contracts to ensure systematic construction without legal issues.",
            },
            {
              title: "Advertisement & Bidding",
              description:
                "We handle project bidding and advertisement to ensure delivery without compromising quality.",
            },
            {
              title: "Field Inspection and Close-out",
              description:
                "Our professionals perform field inspections and site reviews to determine the best course of action for your project.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow hover:shadow-lg transition duration-300 bg-gray-50"
            >
              <h3 className="text-xl font-semibold text-green-600 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-5 md:px-20 bg-gradient-to-r from-green-50 to-blue-50">
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
          Other Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            "Land Development Design Services",
            "Town Planning Services",
            "Laser Scan to BIM Services",
            "Revit Modeling Services",
          ].map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <p className="font-semibold text-gray-800">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
          Why Choose Nimble Construction Phase Services?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Great Pricing Model",
              description:
                "Cost-effective services with no hidden fees, helping you stay within budget.",
            },
            {
              title: "High-Quality Services",
              description:
                "Experienced engineers handle complications to ensure the best quality services.",
            },
            {
              title: "Certified Service Provider",
              description:
                "ISO-certified services adhering to international quality standards.",
            },
            {
              title: "Infrastructure",
              description:
                "Fully equipped with resources, tools, and technologies for any construction project.",
            },
            {
              title: "Experienced Team",
              description:
                "Our infrastructure engineering team has decades of experience in high-quality project delivery.",
            },
            {
              title: "Data Security",
              description:
                "Secure file transfers via FTP and VPN, fully GDPR compliant.",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow hover:shadow-lg transition duration-300 bg-gray-50"
            >
              <h3 className="text-xl font-semibold text-green-600 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="bg-white py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-green-700 mb-10 text-center">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Revit MEP Services Provided to UK-based Engineering Consultants",
              description:
                "Our team provided cost-effective Revit MEP services within a quick turnaround time.",
            },
            {
              title: "MEP Design and Drafting Services Provided to Australian Electric Service Company",
              description:
                "We delivered high-quality MEP design and drafting services, exceeding client expectations.",
            },
          ].map((story, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow hover:shadow-lg transition duration-300 bg-gray-50"
            >
              <h3 className="text-xl font-semibold text-green-600 mb-3">
                {story.title}
              </h3>
              <p className="text-gray-700">{story.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-green-600 text-white py-16 px-5 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Streamline Your Construction Projects?
        </h2>
        <p className="mb-8 max-w-xl mx-auto">
          Partner with Nimble Acuity for reliable, cost-effective construction 
          phase services. Join 18,000+ satisfied customers globally.
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-green-600 font-semibold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition duration-300"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default ConstructionPhaseServices;
