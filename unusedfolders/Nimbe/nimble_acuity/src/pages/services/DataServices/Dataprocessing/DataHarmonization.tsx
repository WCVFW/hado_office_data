import React from "react";
import { Layers, CheckCircle, Users, Cpu, Database } from "lucide-react";
import DSmainmenu from "../DSmainmenu";

const harmonizationServices = [
  {
    title: "Multi-domain Modeling Services",
    description:
      "We provide best-in-class multi-domain modeling services for all your data sources. Leveraging the latest tools and technologies, we deliver tailor-made, high-quality services.",
  },
  {
    title: "Identifier Management",
    description:
      "Our experienced data management experts handle all identifier management requirements, using advanced methodologies to deliver superior quality services.",
  },
  {
    title: "Robust Matching Services",
    description:
      "Customized robust matching services tailored to your business requirements. Our team ensures accuracy and quality with a quick turnaround.",
  },
];

const otherServices = [
  "Data Cleansing Services",
  "Order Processing Services",
  "Transaction Processing Services",
  "Credit Card Processing Services",
];

const benefits = [
  "Affordable Pricing Options",
  "Information Security",
  "Dedicated Manager",
  "Experienced Team",
  "World-class Infrastructure",
  "Error-free Services",
  "Highly Scalable Services",
  "Round the Clock Support",
  "Short Turnaround Time",
];

const testimonials = [
  {
    quote:
      "We were very satisfied with the quality of service Nimble Auity provided. They were able to meet our requests with great professionalism and flexibility.",
    author: "Spokesperson, Online Health Lessons Company in Canada",
  },
];

const DataHarmonization: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <DSmainmenu/>
      
      <section className="bg-blue-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Nimble Data Harmonization Services
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Combine multiple data sources into an integrated entity with our superior quality services at just $6/hour.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
          Data Harmonization Services We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {harmonizationServices.map((service, idx) => (
            <div
              key={idx}
              className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="flex items-center mb-3">
                <Layers className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">
            Other Services You Can Benefit From
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {otherServices.map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
              >
                <Database className="text-blue-600 mb-2" size={32} />
                <p className="font-semibold">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">
          Why Choose Nimble for Data Harmonization?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <CheckCircle className="mx-auto text-blue-600 mb-2" size={36} />
              <p className="font-semibold">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-blue-700 mb-8">Client Testimonials</h3>
          {testimonials.map((t, idx) => (
            <blockquote key={idx} className="mb-6 text-gray-700 italic">
              “{t.quote}”
              <footer className="mt-2 font-semibold">{t.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-3xl font-bold text-white mb-4">
            Get Started with Nimble Auity Today
          </h3>
          <p className="text-white mb-6">
            Partner with us to get accurate, scalable, and cost-effective data harmonization services.
          </p>
          <a
            id="contact"
            href="#"
            className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
};

export default DataHarmonization;
