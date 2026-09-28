import React from "react";
import NavigationMenu from "../MegaMenu";

const LifeScienceInformatics: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Life Science Informatics Services
        </h1>
        <p className="text-lg max-w-3xl mx-auto mb-4">
          Leverage the power of life science informatics to unlock new actionable
          insights to drive business growth at prices starting from only <span className="font-semibold">$14/hour</span>.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-lg leading-relaxed">
        <p className="mb-6">
          Are you looking for advanced technologies offered by computer science
          that can allow you to identify core components in ecosystems and
          organisms? Are you looking for technological ways to better understand
          how organic compounds interact with each other? Are you looking for
          computer models that show how life unfolds in the real world? If so,
          you have come to the right place.
        </p>
        <p>
          Nimble Acuity is a life science informatics service provider and can
          help you successfully address all your life science informatics needs.
          We use the power of computers and cutting-edge technology to enable
          you to easily test your hypothesis in a digital setting.
        </p>
      </section>

      {/* Services We Offer */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Life Science Informatics Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Leverage New Technology",
              desc: "Create and manage a digital lab with AI, automation, IoT, and cloud computing.",
            },
            {
              title: "Identify New Innovative Opportunities",
              desc: "Redefine how your research teams and labs operate with advanced transformation services.",
            },
            {
              title: "Transform Culture",
              desc: "Accelerate adoption of new working methods and break down silos across business functions.",
            },
            {
              title: "Operate with Greater Flexibility",
              desc: "Increase efficiency with new workflows that enhance collaboration across teams and partners.",
            },
            {
              title: "Ensure Regulatory Compliance",
              desc: "Generate risk profiles and meet global regulatory standards effectively.",
            },
            {
              title: "Gain Actionable Insights",
              desc: "Leverage predictive analytics to unlock new insights and fuel innovation.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Nimble Life Science Informatics Services to Nimble Acuity?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "High-quality Services leveraging modern tools and technologies.",
            "World-class Infrastructure with access to international-standard labs and equipment.",
            "Affordable Pricing Options with competitive rates and cost advantages.",
            "Quick Turnaround Time with streamlined processes.",
            "Experienced Team of highly skilled professionals.",
            "Use of the latest Software tools and technologies.",
            "Data Security with ISO/IEC 27001:2022 certification.",
            "Capability to Scale up or down as per your needs.",
          ].map((reason, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-2xl border hover:shadow-md transition"
            >
              <p>{reason}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Customer Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">
              Case Study on Patient Dashboard Creation
            </h3>
            <p className="text-gray-600 mb-2">
              Developed a patient data dashboard for a leading pharmaceutical
              company by analyzing treatment periods, hospitals, and locations.
            </p>
            <a href="#" className="text-blue-600 font-medium">
              Read more →
            </a>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">
              Case Study on Market Research Survey
            </h3>
            <p className="text-gray-600 mb-2">
              Assisted a UK-based pharmaceutical company in conducting targeted
              campaigns across the 50 busiest airports globally.
            </p>
            <a href="#" className="text-blue-600 font-medium">
              Read more →
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
        <blockquote className="italic text-lg text-gray-700">
          “Let me thank you for the professional way in which you are managing
          the project and meeting our deadlines. Unfortunately, our second
          supplier - I cannot say the same for and have let us down
          considerably.”
        </blockquote>
        <p className="mt-4 font-semibold">CEO, Technology Company, UK</p>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Life Science Informatics Services to Nimble Acuity
        </h2>
        <p className="max-w-3xl mx-auto mb-6 text-lg">
          Our experienced team of life science informatics researchers can help
          you unlock insights, ensure compliance, and fuel innovation. Get in
          touch with us today!
        </p>
        <a
          href="#contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default LifeScienceInformatics;
