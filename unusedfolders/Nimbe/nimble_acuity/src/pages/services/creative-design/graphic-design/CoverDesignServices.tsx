import React from "react";
import CSmainmenu from "../CSmainmenu";


const CoverDesignServices: React.FC = () => {
  const coverServices = [
    "Wrapper Design",
    "CD/DVD Design",
    "Book Cover Design",
    "eBook Cover Design",
    "Book Jacket Design",
    "Journal Cover Design",
    "Magazine Cover Design",
    "Business Cover Design",
    "Cover Letter Design",
  ];

  const benefits = [
    "Creative covers designed in multiple design variations for you to choose from.",
    "Dedicated book cover designers working with you one-to-one.",
    "eBook cover design optimized for the device or platform of your choice.",
    "Book cover/book jacket designs formatted to printer-specific requirements.",
    "Bonus graphic design files that can be customized for promotional activities.",
    "All-inclusive services handling file formatting, image scrutiny, color consistency, and banding correction.",
  ];

  return (
    <section className="bg-gray-50 px-6 py-12 md:px-16 lg:px-32 text-gray-800">
      {/* Main Menu */}
      <CSmainmenu/>

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700">
          Nimble Cover Design Services
        </h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Are you an independent author or organization looking for innovative and professional cover designs for books, eBooks, DVDs, CDs, magazines, or journals? Nimble Auity provides artistic, ingenious, and inspired cover designs tailored to your requirements.
        </p>
      </div>

      {/* Introduction */}
      <div className="max-w-5xl mx-auto mb-12 space-y-4 text-justify leading-relaxed">
        <p>
          Our expert designers use software like Photoshop and Illustrator to translate your ideas into stunningly creative covers. We have created custom cover designs for publishing companies, music corporations, newspapers, magazine syndicates, independent authors, and business corporations worldwide.
        </p>
        <p>
          Whether it's a novel, textbook, children's storybook, DVD, or magazine, our professional cover design services help your work stand out, attract readers, and influence purchasing decisions.
        </p>
      </div>

      {/* Services Offered */}
      <h2 className="text-2xl font-semibold text-green-700 mb-6">
        Cover Designing Services We Offer
      </h2>
      <ul className="list-disc list-inside space-y-2 mb-12 max-w-3xl mx-auto text-gray-700">
        {coverServices.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>

      {/* Additional Creative Services */}
      <div className="max-w-5xl mx-auto mb-12 text-gray-700 space-y-2">
        <p>
          In addition to cover design, we also offer other creative services including:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Graphic Design Services</li>
          <li>Artwork Services</li>
          <li>Book Layout Services</li>
          <li>Logo Design Services</li>
        </ul>
      </div>

      {/* Why Choose Nimble */}
      <h2 className="text-2xl font-semibold text-green-700 mb-6">
        Why Nimble Auity for Creative Cover Design Services?
      </h2>
      <ul className="list-disc list-inside space-y-2 mb-12 max-w-4xl mx-auto text-gray-700">
        {benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>

      {/* Closing CTA */}
      <div className="mt-12 text-center">
        <p className="max-w-3xl mx-auto text-gray-600 mb-6 text-justify">
          A compelling cover can make all the difference. Nimble Auity’s creative designers have experience across industries and can deliver remarkable cover designs for your customized needs. Contact us today—we will be glad to assist you!
        </p>
        <button className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default CoverDesignServices;
