import React from "react";
import { FileText, Users, CheckCircle, Layers, Calendar } from "lucide-react";
import DSmainmenu from "./DSmainmenu";

const backOfficeServices = [
  "Real Estate Back Office Support",
  "Tenant Assistance and Customer Services",
  "Vendor Coordination",
  "Managing Back Office Documentation",
  "Administrative Support Services",
  "Marketing Support Services",
];

const benefits = [
  "International Quality Standards",
  "Swift Turnaround",
  "Client Privacy and Confidentiality",
  "Multi-lingual Back Office Support",
  "Dynamic Pricing",
];

const additionalServices = [
  { title: "Data Entry Services", icon: <FileText size={36} className="mx-auto text-blue-600" /> },
  { title: "Data Processing Services", icon: <Layers size={36} className="mx-auto text-blue-600" /> },
  { title: "OCR Services", icon: <FileText size={36} className="mx-auto text-blue-600" /> },
  { title: "eBook Conversion Services", icon: <FileText size={36} className="mx-auto text-blue-600" /> },
  { title: "Catalog Processing Service", icon: <FileText size={36} className="mx-auto text-blue-600" /> },
  { title: "Data Conversion Services", icon: <FileText size={36} className="mx-auto text-blue-600" /> },
];

const testimonials = [
  {
    quote:
      "Working with Nimble Auity has been a great experience. They quickly learned our line of business, adapted to our requirements, and consistently performed well.",
    author: "Spokesperson, A Recruitment firm in the US",
  },
];

const PropertyManagementPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-blue-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Nimble Property Management Back Office Services
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Streamline your property management operations and reduce administrative burden with Nimble's back office support.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-gray-700 text-lg">
        <p className="mb-6">
          Nimble Auity provides professional property management back office services, helping you convert paper-laden processes into efficient web-based systems. Our experienced team handles everything from tenant support and lease management to vendor coordination and accurate financial tracking, improving efficiency and maximizing profitability.
        </p>
      </section>

      {/* Back Office Services */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
            Property Management Back Office Services We Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {backOfficeServices.map((service, i) => (
              <div key={i} className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg shadow hover:shadow-lg transition">
                <CheckCircle size={24} className="text-blue-600 mt-1" />
                <p>{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">Why Choose Nimble Back Office Support?</h2>
          <ul className="grid md:grid-cols-2 gap-6 text-gray-700 list-disc list-inside">
            {benefits.map((benefit, i) => (
              <li key={i} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">{benefit}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-blue-700 mb-8">Additional Services You Can Benefit From</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {additionalServices.map((service, i) => (
              <div key={i} className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
                {service.icon}
                <h4 className="mt-4 font-semibold text-lg">{service.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-blue-700 mb-8">Client Testimonials</h3>
          {testimonials.map((t, i) => (
            <blockquote key={i} className="mb-6 text-gray-700 italic">
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
            Streamline Your Property Management Today
          </h3>
          <p className="text-white mb-6">
            Delegate your back office tasks to Nimble and focus on growing your property portfolio.
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

export default PropertyManagementPage;
