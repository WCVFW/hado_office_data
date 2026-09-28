import React from "react";
import DSmainmenu from "../DSmainmenu";

const EmailAppendingServices: React.FC = () => {
  const services = [
    {
      title: "Business Email Appending Services",
      description:
        "We provide top-quality business email appending services. Get data such as business emails, company names, postal addresses of key business decision-makers quickly and accurately.",
    },
    {
      title: "Reverse Email Append Services",
      description:
        "Using the email address of potential clients, we can source vital information like name, address, company details, and more with our reverse email append services.",
    },
    {
      title: "Consumer Email Appending Services",
      description:
        "Our experts deliver error-free consumer email appending services, matching consumer data and obtaining opt-in email addresses efficiently.",
    },
  ];

  const additionalServices = [
    "Big Data Analytics Services",
    "Data Entry Services",
    "Data Conversion Services",
    "Data Processing Services",
  ];

  const advantages = [
    "Affordable Pricing Options",
    "Information Security (ISO/IEC 27001:2022 Certified)",
    "Experienced Email Appending Experts",
    "Short Turnaround Times",
    "Error-free Services",
    "Dedicated Manager",
    "Best Infrastructure",
    "Highly Scalable Services",
    "Round the Clock Support",
  ];

  const successStories = [
    {
      title: "Data Entry and Image Tagging Services for an Irish Sports Analytics Firm",
      description:
        "A well-known sports analytics company needed a reliable data entry provider. Our team delivered cost-effective services efficiently.",
    },
    {
      title: "Data Entry for Analytics and Optimization Services Provider",
      description:
        "A leading analytics firm required fast and accurate data entry services. We provided top-quality solutions within a quick turnaround.",
    },
  ];

  const testimonials = [
    {
      quote:
        "I am more than pleased with the way the project has turned out, and with the overall experience itself. I have been raving about your company to everyone I know, and I will be sending you more projects in the future.",
      author: "CEO, Top Logistics Company in the US",
    },
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Email Appending Services
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Amplify your business returns and revamp your email database with our experienced team, starting at just $6 an hour.
        </p>
        <p className="text-gray-600">
          Nimble Acuity leverages the latest tools and technologies to provide top-notch email appending services for businesses around the globe.
        </p>
      </section>

      {/* Core Services Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Email Appending Services We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-6 shadow hover:shadow-lg transition bg-white hover:scale-105"
            >
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="mb-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Other Services You Can Benefit From
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {additionalServices.map((service, idx) => (
            <span
              key={idx}
              className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-medium hover:bg-blue-100 transition"
            >
              {service}
            </span>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Why Choose Nimble Acuity for Email Appending Services?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {advantages.map((adv, idx) => (
            <div
              key={idx}
              className="border-l-4 border-blue-600 pl-4 py-3 bg-gray-50 rounded hover:bg-gray-100 transition"
            >
              {adv}
            </div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {successStories.map((story, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-6 shadow hover:shadow-lg transition bg-white"
            >
              <h3 className="text-xl font-bold mb-2">{story.title}</h3>
              <p className="text-gray-700">{story.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Customer Testimonials
        </h2>
        {testimonials.map((t, idx) => (
          <blockquote
            key={idx}
            className="border-l-4 border-blue-500 pl-4 italic text-gray-700 mb-4 bg-gray-50 p-4 rounded shadow"
          >
            "{t.quote}"
            <span className="block mt-2 font-bold">{t.author}</span>
          </blockquote>
        ))}
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105">
          Get Started Today
        </button>
      </section>
    </div>
  );
};

export default EmailAppendingServices;
