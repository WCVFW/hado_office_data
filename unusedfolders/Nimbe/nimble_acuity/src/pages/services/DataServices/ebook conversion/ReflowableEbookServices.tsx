import React from "react";
import { BookOpen, Smartphone, FileText, Users, CheckCircle } from "lucide-react";
import DSmainmenu from "../DSmainmenu";

const reflowableServices = [
  {
    title: "Ensuring Flexibility",
    description:
      "All content adjusts its orientation and fits into any screen size. Flexible and easily adaptable to different mobile devices.",
  },
  {
    title: "Comfortable Reading Experience",
    description:
      "Content always fits the screen perfectly, providing users a comfortable reading experience without manual adjustments.",
  },
  {
    title: "Font Changes",
    description:
      "Users can change font size and style; line breaks and text alignment adjust automatically.",
  },
  {
    title: "Device Support",
    description:
      "Accepted by most eBook readers including Kindle, Nook, Kobo, and iBooks in ePUB format.",
  },
  {
    title: "Image Optimization",
    description:
      "Images are optimized for clarity and legibility across devices.",
  },
  {
    title: "Interactive Features",
    description:
      "Standard interactive features like zoom, search, and highlighting capability.",
  },
];

const testimonials = [
  {
    quote:
      "Working with Nimble has been a wonderful experience. They quickly learned our business processes, adapted to all our requirements, and consistently performed well.",
    author: "Spokesperson, Executive recruitment firm in the US",
  },
];

const ReflowableEbookServices: React.FC = () => {
  
  return (
    <>
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-blue-50 py-12">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">
            Nimble Reflowable eBook Conversion Services
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Get device-optimized reflowable eBook conversions to ensure a consistent reading experience for your audience at prices starting at $0.25/page
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Description */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <p className="text-gray-700 text-lg mb-6">
          Are you looking to publish your book electronically in the digital format to enable you to reach the highest number of readers? Nimble Auity is a leading provider of eBook conversion services, including reflowable eBook conversion services. The ePUB format is standard and works with most eReaders and devices.
        </p>
      </section>

      {/* Service Cards */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-blue-700 mb-8 text-center">
            Our Reflowable eBook Conversion Services
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {reflowableServices.map((service, i) => (
              <div key={i} className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
                <CheckCircle size={36} className="text-blue-600 mb-4" />
                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-blue-700 mb-8 text-center">
            Other Services You Can Benefit From
          </h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { title: "ePUB Conversions", icon: <BookOpen size={36} className="mx-auto text-blue-600" /> },
              { title: "Kindle Conversions", icon: <Smartphone size={36} className="mx-auto text-blue-600" /> },
              { title: "Comprehensive Digital Services", icon: <FileText size={36} className="mx-auto text-blue-600" /> },
              { title: "eBook Conversion Services", icon: <Users size={36} className="mx-auto text-blue-600" /> },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                {item.icon}
                <h4 className="mt-4 font-semibold text-lg">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-blue-700 mb-8">
            Client Testimonials
          </h3>
          {testimonials.map((t, i) => (
            <blockquote key={i} className="mb-6 text-gray-700 italic">
              “{t.quote}”
              <footer className="mt-2 font-semibold">{t.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-3xl font-bold text-white mb-4">
            Get Professional Reflowable eBook Conversions
          </h3>
          <p className="text-white mb-6">
            If you are looking for professional and cost-effective reflowable eBook conversion services, get in touch with us today!
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

export default ReflowableEbookServices;
