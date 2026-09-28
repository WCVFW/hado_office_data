import React from "react";
import ESmainmenu from "../ESmainmenu";

const GeotechnicalEngineering = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-5 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Geotechnical Engineering Services
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Professional geotechnical services for public, private, and commercial
          sectors starting at just <span className="font-semibold">$14/hour</span>!
        </p>
      </section>

      {/* About Section */}
      <section className="py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">
          About Our Services
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Whether you want to analyze the land for construction and land
          development purposes or identify complex foundation issues, efficient
          geotechnical project investigation is important. Applications of
          geotechnical services go beyond basic construction engineering aspects
          and are critical for mining, deep excavations, tunnels, dams, and
          other environmental and mining projects.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Nimble Acuity is a professional geotechnical engineering services
          company offering project support for different kinds of projects
          including routine classifications, soil strength analysis, and
          various other subsurface explorations. By partnering with us, you
          can rely on our team of qualified senior engineers, laboratory
          technicians, and personnel for all your geotechnical requirements.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 px-5 md:px-20">
        <h2 className="text-3xl font-bold text-blue-700 mb-10 text-center">
          Geotechnical Engineering Services We Offer
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card */}
          {[
            {
              title: "Pile Foundation Test",
              description:
                "For large-scale construction projects we carry out pile load testing to determine load-bearing capability and estimate settlements.",
            },
            {
              title: "Construction Support",
              description:
                "From inspecting foundation excavation to soil, concrete, and asphalt sampling, we assist with all geotechnical testing requirements.",
            },
            {
              title: "Geosynthetics",
              description:
                "Our engineers analyze soil strength and recommend suitable geotextile materials to reinforce soil and improve drainage.",
            },
            {
              title: "Deep Foundation Inspection",
              description:
                "We conduct field reviews to check subsurface conditions and ensure construction follows proper engineering practices.",
            },
            {
              title: "Geotechnical Investigation",
              description:
                "We carry out soil sample testing and recommend foundation options such as pile foundation or strip footing.",
            },
            {
              title: "Tunnel Design Analysis",
              description:
                "Our specialists conduct subsurface investigation, analyze stress deformation, assess Q value, and more.",
            },
            {
              title: "Geological Mapping Services",
              description:
                "Our skilled geologists handle subsurface conditioning, stratigraphy, seismicity, and hazard identification.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow hover:shadow-lg transition duration-300 bg-gray-50"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-5 md:px-20 bg-gradient-to-r from-indigo-50 to-blue-50">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
          Other Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            "Land Development Design Services",
            "Underground Utility Mapping Services",
            "Highway Engineering Services",
            "Public Health Engineering Services",
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
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
          How Can Our Geotechnical Services Add Value to Your Project?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Rapid Turnaround Time",
              description:
                "Our engineers work closely with you to understand project needs and complete it quickly.",
            },
            {
              title: "Experienced Geotechnical Experts",
              description:
                "Carrying decades of experience, our team provides highly accurate testing and sampling services.",
            },
            {
              title: "Advanced Tools and Testing Methods",
              description:
                "We leverage sophisticated tools and methods to provide reliable testing and sampling reports.",
            },
            {
              title: "Data Confidentiality & Security",
              description:
                "We securely transfer reports using VPN and FTP servers and comply with all data protection regulations.",
            },
            {
              title: "Flexible Pricing Options",
              description:
                "We offer flexible pricing to cater precisely to your project requirements.",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow hover:shadow-lg transition duration-300 bg-gray-50"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-600 text-white py-16 px-5 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Elevate Your Project?
        </h2>
        <p className="mb-8 max-w-xl mx-auto">
          Partner with Nimble Acuity and leverage our professional geotechnical
          services to fortify your construction projects. Get in touch with us
          now!
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition duration-300"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default GeotechnicalEngineering;
