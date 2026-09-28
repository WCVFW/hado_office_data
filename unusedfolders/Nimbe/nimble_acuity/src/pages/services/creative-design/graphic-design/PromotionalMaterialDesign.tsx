import React from "react";
import CSmainmenu from "../CSmainmenu";

const PromotionalMaterialDesign: React.FC = () => {
  return (
    <section className="w-full bg-white text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Auity – Promotional Material Design Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Build your brand identity with impactful promotional designs that captivate audiences and
          strengthen market presence.
        </p>
      </div>

      {/* Intro */}
      <div className="max-w-6xl mx-auto py-12 px-6 grid gap-8">
        <h2 className="text-2xl font-bold mb-4">Promotional Material Design Services</h2>
        <p>
          From travel mugs and tote bags to polo shirts and tech accessories, promotional material
          designs play a vital role in strengthening your brand identity and increasing market
          visibility. Businesses across the globe are now choosing <b>Nimble Auity</b> for
          promotional design services to achieve impactful branding while keeping costs under
          control.
        </p>
        <p>
          Whether you’re creating premium employee gifts or giveaways for conferences and tradeshows,
          <b> Nimble</b> offers customized promotional material designs that capture your brand
          essence and connect with your target audience.
        </p>
      </div>

      {/* Services Offered */}
      <div className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Promotional Material Designs We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Brochures & Postcards",
                desc: "Engage customers with brochures and postcards featuring a compelling mix of images and text.",
              },
              {
                title: "Flyers & Posters",
                desc: "Perfect for events, launches, and promotions with impactful layouts in all sizes.",
              },
              {
                title: "Company Apparel",
                desc: "Stylish apparel designs for events, tradeshows, or as employee uniforms.",
              },
              {
                title: "Multifunctional Items",
                desc: "Creative designs for USBs, pens, water bottles, and giveaways.",
              },
              {
                title: "Games, Puzzles & Toys",
                desc: "Fun, innovative designs that make your brand memorable.",
              },
              {
                title: "Tech Accessories",
                desc: "Trendy designs for headphones, mobile cases, speakers, and power banks.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industries Section */}
      <div className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Industries We Cater To</h2>
        <p className="text-center max-w-3xl mx-auto mb-8">
          We deliver promotional material designs to diverse industries, including:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-medium text-gray-700 text-center">
          {[
            "Automotive",
            "Beauty & Cosmetics",
            "Real Estate",
            "Corporate & Education",
            "Fashion & Apparel",
            "Finance & Banking",
            "Food & Beverage",
            "Healthcare & Pharma",
            "Hospitality & Travel",
            "Retail & E-Commerce",
            "Sports & Entertainment",
            "Public & Professional Associations",
          ].map((industry, idx) => (
            <div
              key={idx}
              className="bg-gray-100 p-4 rounded-lg hover:bg-indigo-50 transition"
            >
              {industry}
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-indigo-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Why Choose Nimble Auity for Promotional Material Design?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Affordable Rates", desc: "High-quality designs at competitive prices." },
              { title: "Thoughtful Design Process", desc: "Creative strategies to boost sales and loyalty." },
              { title: "Skilled Designers", desc: "Experienced professionals across industries." },
              { title: "Quick Turnaround", desc: "On-time delivery for tight deadlines." },
              { title: "Uncompromised Quality", desc: "Rigorous multi-stage review process." },
              { title: "Dedicated Support", desc: "A project manager ensures smooth communication." },
            ].map((benefit, i) => (
              <div key={i} className="bg-white shadow rounded-xl p-6">
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study */}
      <div className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Case Study</h2>
        <p className="text-center max-w-3xl mx-auto">
          <b>Top US PR Firm Boosts Branding with Nimble’s Promotional Design Services:</b>  
          A leading PR firm in the US partnered with Nimble for high-quality promotional material
          designs. Our expert team delivered captivating and effective designs within a short
          timeframe, strengthening their campaigns.
        </p>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Outsource Promotional Material Design Services to Nimble Auity
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          With over 26 years of experience, Nimble Auity delivers creative, impactful, and
          cost-effective promotional designs across industries. From labels and covers to banners and
          3D packaging, we make your brand unforgettable.
        </p>
        <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition">
          Contact Us Today
        </button>
      </div>
    </section>
  );
};

export default PromotionalMaterialDesign;
