import React from "react";
import CSmainmenu from "../CSmainmenu";

const PackagingDesignServices: React.FC = () => {
  return (
    <div><CSmainmenu/>
    <section className="min-h-screen bg-gray-50 text-gray-800 px-6 py-12 md:px-16 lg:px-32">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700">
          Nimble Packaging Design Services
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Enhance your brand appeal. Outshine your competition. Increase sales
          via visually appealing designs.
        </p>
      </div>

      {/* Introduction */}
      <div className="max-w-5xl mx-auto mb-12 space-y-4 text-justify leading-relaxed">
        <p>
          Enterprises require expert packaging design in today's cutthroat
          business environment to stand out from the crowd and enhance their
          brand appeal. Are you looking for innovative packaging and design
          solutions that best communicate your benefits to customers and
          persuade them to buy your goods or services? If so, you are in the
          right place.
        </p>
        <p>
          We are a reputable packaging design firm providing world-class
          designs to help our clients enhance their brand appeal. With 26+ years
          of experience, Nimble has consistently ensured that clients outperform
          rivals through engaging and visually appealing designs. Choose our
          online packaging design services to access practical designs that
          excite customers, offer novel experiences, and increase sales.
        </p>
      </div>

      {/* Packaging Solutions */}
      <h2 className="text-2xl font-semibold text-green-700 mb-6">
        Packaging Design Solutions We Offer
      </h2>
      <div className="grid gap-6 md:grid-cols-2 mb-12">
        {[
          {
            title: "2D/3D Product Packaging Design",
            desc: "We create attractive, innovative 2D or 3D product package designs that help your brand gain visibility.",
          },
          {
            title: "Packaging Artwork and Label Design",
            desc: "Exquisite packaging art accurately representing your business, enhancing sales and brand reputation.",
          },
          {
            title: "Food Packaging Designs",
            desc: "Designs for fresh food, fast food, confectionery, snacks, health foods, and more.",
          },
          {
            title: "Industrial Packaging Design",
            desc: "Innovative designs for industrial products to give you a competitive edge and boost sales.",
          },
          {
            title: "Health and Beauty Packaging Design",
            desc: "Designs for skincare, haircare, makeup, cosmetics, and medical products.",
          },
          {
            title: "Beverage Packaging Design",
            desc: "Package designs for wines, beer, spirits, tea, juice, water, and more.",
          },
          {
            title: "General Product Packaging Design",
            desc: "Creative packaging for baby products, toys, fashion accessories, electronics, homeware, and more.",
          },
          {
            title: "Dieline Design",
            desc: "Ensures your physical packaging designs are properly set before production.",
          },
          {
            title: "Structural Design",
            desc: "Top-notch structural designs emphasizing user experience.",
          },
          {
            title: "Business Packaging Design",
            desc: "Enticing designs for a variety of business packaging needs.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-green-600 mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Process */}
      <h2 className="text-2xl font-semibold text-green-700 mb-6">
        Our Product Packaging Design Process
      </h2>
      <ol className="list-decimal list-inside space-y-6 text-gray-700 mb-12">
        <li>
          <strong>Briefing:</strong> Receive client requirements including logo,
          images, copy, nutritional info, product size and layout.
        </li>
        <li>
          <strong>Target Audience:</strong> Acquire target customer information
          and data.
        </li>
        <li>
          <strong>Project Managers:</strong> Assign resources and appoint a
          Project Manager.
        </li>
        <li>
          <strong>Design Creation:</strong> Designers execute designs within
          stipulated TAT.
        </li>
        <li>
          <strong>Review:</strong> Multi-stage internal review with
          zero-tolerance for errors.
        </li>
        <li>
          <strong>Output:</strong> Deliver final output in client-preferred
          format.
        </li>
      </ol>

      {/* Why Choose Us */}
      <h2 className="text-2xl font-semibold text-green-700 mb-6">
        Why Are We The Preferred Package Design Company?
      </h2>
      <ul className="list-disc list-inside space-y-3 text-gray-700 mb-12">
        <li>
          <strong>High-quality:</strong> ISO-certified designers who exceed
          expectations.
        </li>
        <li>
          <strong>Expert Team:</strong> Experienced packaging designers serving
          a global clientele.
        </li>
        <li>
          <strong>Data Security:</strong> ISO/IEC 27001:2022 compliant with
          international data security norms.
        </li>
        <li>
          <strong>Transparency:</strong> Clients are updated on project progress
          and consultants are available for queries.
        </li>
        <li>
          <strong>Cost-effective Services:</strong> Competitive pricing without
          compromising quality.
        </li>
      </ul>

      {/* Additional Services */}
      <h2 className="text-2xl font-semibold text-green-700 mb-6">
        Additional Services You Can Benefit From
      </h2>
      <ul className="list-disc list-inside space-y-3 text-gray-700 mb-12">
        <li>Graphic Design Services</li>
        <li>Artwork Services</li>
        <li>Advertising Services</li>
        <li>Animation Services</li>
      </ul>

      {/* Client Success Stories */}
      <h2 className="text-2xl font-semibold text-green-700 mb-6">
        Client Success Stories
      </h2>
      <div className="grid gap-6 md:grid-cols-2 mb-12">
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h3 className="font-semibold text-green-600 mb-2">
            Creative Artwork Services Provided to Investment Firm
          </h3>
          <p className="text-gray-700">
            Nimble provided artwork for brochures, financial reports, and
            corporate presentations to an Ireland-based finance and investment
            firm.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h3 className="font-semibold text-green-600 mb-2">
            Sticker Design Services Provided to Advertising Firm
          </h3>
          <p className="text-gray-700">
            Nimble created 753 sticker designs of seven sizes for every Rugby
            Club in Australia for a Melbourne advertising firm.
          </p>
        </div>
      </div>

      {/* Closing CTA */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold text-green-700 mb-4">
          Nimble Packaging Design Services
        </h3>
        <p className="max-w-3xl mx-auto text-gray-600 mb-6 text-justify">
          When you require professional and reasonably priced assistance with
          product packaging design, we are your best bet. Rethink your packaging
          design to better engage your customers. Stand out from the crowd and
          delight your consumers.
        </p>
        <button className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition">
          Contact Us
        </button>
      </div>
    </section>
    </div>
  );
};

export default PackagingDesignServices;
