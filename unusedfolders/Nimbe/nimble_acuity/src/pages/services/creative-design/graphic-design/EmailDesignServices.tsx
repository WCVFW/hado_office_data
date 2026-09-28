import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import CSmainmenu from "../CSmainmenu";

const EmailDesignServices: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-indigo-50 to-white px-6 md:px-16 py-16">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-4">
          Nimble E-mail Design Services
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Attractive, responsive, and high-impact e-mail templates to engage your audience and boost conversions.
        </p>
        <button className="mt-6 bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-800 transition">
          Get a Free Quote
        </button>
      </div>

      {/* Introduction */}
      <div className="max-w-5xl mx-auto space-y-6 text-gray-700 mb-16">
        <p>
          With over half the world's population using e-mails daily, it's crucial to have visually appealing templates that capture attention. Nimble Audity offers creative and innovative e-mail design services to help your marketing campaigns stand out.
        </p>
        <p>
          Our team of skilled designers delivers impactful, eye-catching templates tailored to your brand and audience, saving you time and reducing overall expenses.
        </p>
      </div>

      {/* Services Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
        {[
          {
            title: "E-mail Template Design",
            desc: "Custom templates using innovative processes to create attractive designs that leave a lasting impression.",
          },
          {
            title: "HTML E-mail Design",
            desc: "Convert your images into functional HTML e-mails with all links and elements working perfectly.",
          },
          {
            title: "Responsive E-mail Templates",
            desc: "Designs optimized for mobile, tablet, and desktop, ensuring your message is seen correctly on any device.",
          },
          {
            title: "E-mail HTML Validation",
            desc: "Validation and optimization of existing templates to improve design, functionality, and deliverability.",
          },
          {
            title: "Animated E-mail Designs",
            desc: "Creative animated e-mails to capture reader attention and increase engagement during marketing campaigns.",
          },
        ].map((service, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all"
          >
            <h3 className="text-xl font-bold text-indigo-700 mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* Tools We Leverage */}
      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold text-indigo-700 mb-6 text-center">
          E-mail Design Tools We Leverage
        </h2>
        <p className="text-gray-700 mb-4 text-center">
          We use the latest and best tools to ensure industry-standard, high-quality e-mail templates delivered on time.
        </p>
        <ul className="grid md:grid-cols-3 gap-4 text-gray-700 list-disc list-inside">
          {[
            "CorelDRAW",
            "Adobe Illustrator",
            "Adobe Photoshop",
            "COOLORS",
            "FLAT UI COLOR",
            "FLINTO",
            "inVISION",
            "Noun Project",
            "ORIGAMI",
            "Skala Preview",
          ].map((tool, idx) => (
            <li key={idx}>{tool}</li>
          ))}
        </ul>
      </div>

      {/* Benefits Section */}
      <div className="bg-indigo-50 py-16">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-semibold text-indigo-700">Why Choose Nimble?</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Over 26+ years of experience delivering affordable, customized, and ISO-compliant e-mail designs for clients across industries including banking, healthcare, e-commerce, IT services, and more.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {[
              "Affordable E-mail Designs",
              "Skilled & Experienced Designers",
              "Best Infrastructure",
              "Latest Design Tools",
              "Data Security",
              "Customized Designs",
              "Quick Turnaround Time",
              "ISO Compliant Processes",
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-2xl transition flex items-start space-x-3">
                <FaCheckCircle className="text-indigo-600 mt-1" />
                <span className="text-gray-700 font-semibold">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-semibold text-indigo-700 mb-4">
          Ready to Transform Your E-mail Marketing?
        </h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Partner with Nimble Audity for reliable, innovative, and high-quality e-mail design services. Get your free quote today!
        </p>
        <button className="bg-indigo-700 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-indigo-800 transition">
          Contact Nimble Now
        </button>
      </div>
    </section>
  );
};

export default EmailDesignServices;
