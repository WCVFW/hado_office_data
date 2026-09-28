import React from "react";
import CSmainmenu from "../CSmainmenu";

const VisualDesignServices: React.FC = () => {
  return (
    <div> <CSmainmenu/>
    <section className="min-h-screen bg-gray-50 text-gray-800 px-6 py-12 md:px-16 lg:px-32">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700">
          Nimble Visual Design Services
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Visual design makes the first impression of your product or service. 
          Companies have just a fraction of a second to attract attention, and 
          impressive designs ensure you make the most out of it.
        </p>
      </div>

      {/* Intro */}
      <div className="max-w-5xl mx-auto mb-12 text-justify leading-relaxed">
        <p>
          Visual design makes the first impression of your product or service when
          a customer views it for the first time. Companies usually have just a
          fraction of a second to attract a customer's attention and impressive
          visual designs help in making the most out of it. So, it is important
          that you have a very attractive and eye-catching design which makes a
          lasting impression on the customer.
        </p>
      </div>

      {/* Services Section */}
      <h2 className="text-2xl font-semibold text-green-700 mb-6">
        Visual Design Services We Offer
      </h2>
      <p className="mb-6 max-w-5xl">
        Nimble Auity has been providing best-quality design services to businesses 
        across the globe for over 26+ years. Our experience with clients from 
        different domains enables us to handle any kind of visual design requests. 
        Some of our key services include:
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Business Card Design",
            desc: "We create professional, lasting business card designs that leave a strong impression on clients, stakeholders, and potential customers.",
          },
          {
            title: "Illustration Services",
            desc: "From book illustrations to children’s books and photographic artwork, our skilled illustrators bring creativity to life.",
          },
          {
            title: "Logo Design",
            desc: "Our innovative logo designs attract customers and help build a distinct brand identity for your business.",
          },
          {
            title: "Artwork Services",
            desc: "We deliver fresh and creative magazine layouts, book designs, and DTP services tailored to your needs.",
          },
          {
            title: "Editorial Design",
            desc: "Our team handles layout, identity, and print design projects with a focus on quality and consistency.",
          },
          {
            title: "Email Design",
            desc: "We craft engaging email templates that connect with your audience and drive better engagement.",
          },
          {
            title: "Web Design",
            desc: "Our visual designers ensure your website is modern, responsive, and aligned with your brand identity.",
          },
        ].map((service, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-green-600 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* Tools Section */}
      <h2 className="text-2xl font-semibold text-green-700 mt-12 mb-6">
        Tools We Leverage
      </h2>
      <p className="mb-4 max-w-5xl">
        We use the latest tools to create innovative, cost-effective designs that 
        help brands stand out. Our toolkit includes:
      </p>
      <div className="flex flex-wrap gap-3 text-sm text-gray-700">
        {[
          "CorelDRAW",
          "Adobe Illustrator",
          "Adobe InDesign",
          "Adobe Photoshop",
          "Draw Plus",
          "GIMP",
          "Inkscape",
          "PaintShop Pro",
          "PhotoDirector",
          "Pixlr Editor",
          "Vectr",
          "Xara",
        ].map((tool, i) => (
          <span
            key={i}
            className="px-4 py-2 bg-green-100 text-green-700 rounded-lg"
          >
            {tool}
          </span>
        ))}
      </div>

      {/* Why Choose Us */}
      <h2 className="text-2xl font-semibold text-green-700 mt-12 mb-6">
        Why Choose Nimble for Visual Design?
      </h2>
      <ul className="list-disc list-inside space-y-3 max-w-4xl text-gray-700">
        <li>Affordable designs tailored to your budget</li>
        <li>Use of the latest design tools and technology</li>
        <li>Skilled and experienced designers</li>
        <li>Strong infrastructure for fast delivery</li>
        <li>Quick turnaround time with global delivery centers</li>
        <li>Designs available in multiple formats (PDF, JPEG, PNG, TIFF, EPS, etc.)</li>
        <li>Customized solutions for unique client needs</li>
      </ul>

      {/* Closing Section */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold text-green-700 mb-4">
          Partner with Nimble Auity
        </h3>
        <p className="max-w-3xl mx-auto text-gray-600">
          Nimble Auity is a leading provider of visual design services and creative 
          solutions for 26+ years. From cover design to brochures, we ensure ISO-standard 
          compliance and top-quality results. If you’re looking for reliable and affordable 
          design services in India, Nimble is your trusted partner.
        </p>
      </div>
    </section>
    </div>
  );
};

export default VisualDesignServices;
