import React from "react";
import CSmainmenu from "../CSmainmenu";

const BusinessCardDesignServices: React.FC = () => {
  return (
    <div> <CSmainmenu/>
    <section className="min-h-screen bg-gray-50 text-gray-800 px-6 py-12 md:px-16 lg:px-32">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700">
          Nimble Business Card Design Services
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Even in today’s digital-first world, business cards remain the most
          effective direct marketing tools, helping you make genuine connections
          that last.
        </p>
      </div>

      {/* Intro */}
      <div className="max-w-5xl mx-auto mb-12 text-justify leading-relaxed">
        <p>
          Our businesses have completely turned digital, right from sending
          emails, sharing information, attending meetings, and networking, to
          signing contracts. However, a business card is one thing which can
          never be replaced anytime soon. Exchanging contact information
          digitally sounds impersonal, while exchanging cards marks the
          beginning of real relationships. Business cards are widely used and
          considered the most effective direct marketing tools.
        </p>
        <p className="mt-4">
          Since business cards are often your first impression, they must stand
          out and speak for themselves. A premium, well-designed card can open
          doors to new jobs, partnerships, or business opportunities. That’s why
          Nimble Auity is your trusted partner for professional business card
          design.
        </p>
      </div>

      {/* Services We Offer */}
      <h2 className="text-2xl font-semibold text-green-700 mb-6">
        Services We Offer
      </h2>
      <p className="mb-6 max-w-5xl">
        At Nimble Auity, our experienced designers create innovative designs that
        elevate your business cards and leave a lasting impression. We provide a
        range of business card design options, including:
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Classic/Premium Business Card",
            desc: "Standard cards with essential contact and website details. Clean, professional, and quick turnaround.",
          },
          {
            title: "Wild-format Business Card",
            desc: "Unique foldable, brochure-style, or creatively cut cards tailored to your imagination.",
          },
          {
            title: "Social Networker’s Card",
            desc: "Cards designed around your social media presence, featuring Twitter, Facebook, or IM handles.",
          },
          {
            title: "Typographic Business Card",
            desc: "Trendy typography-based cards for a modern, stylish look that stands out.",
          },
          {
            title: "Gadget Business Card",
            desc: "Innovative cards themed around your profession, tools, or gadgets to market yourself creatively.",
          },
          {
            title: "Other Styles",
            desc: "Embossed, glossy, matte, appointment cards, and more tailored to your needs.",
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

      {/* Industries Section */}
      <h2 className="text-2xl font-semibold text-green-700 mt-12 mb-6">
        Industries & Sectors We Serve
      </h2>
      <p className="mb-4 max-w-5xl">
        With nearly two decades of creative design experience, Nimble Auity has
        served global clients across multiple industries:
      </p>
      <div className="flex flex-wrap gap-3 text-sm text-gray-700">
        {[
          "Arts & Entertainment",
          "Food & Beverages",
          "Business Services",
          "Construction & Repair",
          "Beauty & Spa",
          "Healthcare",
          "Education",
          "Social Services",
          "Childcare",
          "Real Estate",
        ].map((industry, i) => (
          <span
            key={i}
            className="px-4 py-2 bg-green-100 text-green-700 rounded-lg"
          >
            {industry}
          </span>
        ))}
      </div>

      {/* Why Choose Us */}
      <h2 className="text-2xl font-semibold text-green-700 mt-12 mb-6">
        Why Choose Nimble for Premium Business Card Design?
      </h2>
      <ul className="list-disc list-inside space-y-3 max-w-4xl text-gray-700">
        <li>
          <strong>Highly Affordable:</strong> Customized pricing with efficient
          processes for maximum value.
        </li>
        <li>
          <strong>Innovative Designs:</strong> Creative and impressive cards,
          tailored to your unique needs.
        </li>
        <li>
          <strong>Latest Tools:</strong> Expertise in Adobe Photoshop,
          Lightroom, CorelDraw, and more.
        </li>
        <li>
          <strong>ISO Standards:</strong> Processes aligned with ISO quality
          guidelines.
        </li>
        <li>
          <strong>Quick Services:</strong> Fast turnaround without compromising
          quality.
        </li>
        <li>
          <strong>Talented Designers:</strong> A team of experts delivering
          designs that truly impress.
        </li>
      </ul>

      {/* Closing Section */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold text-green-700 mb-4">
          Partner with Nimble Auity
        </h3>
        <p className="max-w-3xl mx-auto text-gray-600">
          Nimble Auity has been a trusted design partner for over 26 years,
          delivering business card and creative design services worldwide. From
          brochures to banners and flyers, we stay ahead of design trends while
          ensuring accuracy, creativity, and affordability. If you need business
          card designs that leave a lasting impression, get in touch with us
          today.
        </p>
      </div>

      {/* Contact Us */}
      <div className="mt-12 text-center">
        <button className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition">
          Contact Us
        </button>
      </div>
    </section>
    </div>
  );
};

export default BusinessCardDesignServices;

