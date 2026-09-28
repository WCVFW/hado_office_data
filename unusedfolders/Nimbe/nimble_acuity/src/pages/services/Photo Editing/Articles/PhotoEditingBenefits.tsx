import React from "react";
import PEMainMenu from "../PEmainmenu";

const PhotoEditingBenefits: React.FC = () => {
  const benefits = [
    {
      title: "High Quality Images",
      description:
        "Get flawless, high-definition images with expert editing, advanced tools, and industry-leading techniques without bearing in-house infrastructure costs.",
    },
    {
      title: "Profitability & Enhanced ROI",
      description:
        "Outsourcing reduces capital investments, frees time for core business functions, and allows more budget allocation to marketing and growth strategies.",
    },
    {
      title: "Customized Editing Services",
      description:
        "Experts deliver tailored edits for web, social media, newsletters, blogs, and print. They optimize saturation, tone, color, cropping, and more.",
    },
    {
      title: "Reliable & Secure",
      description:
        "Professional providers follow strict security standards, NDA policies, and ensure safe file transfers through secure channels, keeping your data safe.",
    },
    {
      title: "Competitive Survival",
      description:
        "Stand out in a crowded market with professional visuals that enhance brand reputation and customer engagement.",
    },
    {
      title: "Excellency in Latest Technology",
      description:
        "Leverage cutting-edge tools like image blending, panorama stitching, sky replacement, and 360° virtual tours for modern editing solutions.",
    },
    {
      title: "Boosts Brand Image",
      description:
        "High-quality visuals build trust, increase awareness, and shape positive customer perceptions that drive purchases.",
    },
    {
      title: "Faster Turnaround",
      description:
        "Scale seamlessly with quick delivery of large volumes of edited images—ideal for e-commerce, real estate, and dynamic businesses.",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Major Benefits of Outsourcing to a Professional Photo Editing Service Provider
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          High-quality, customized, and cost-effective photo editing services that boost ROI, 
          scalability, and brand awareness—delivered by trusted professionals.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-12">
          Why Nimble Photo Editing?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold text-indigo-600 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-600 text-white py-16 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Nimble Photo Editing to Nimble Acuity
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Irrespective of your business niche, if you need vibrant and flawless 
          images to build brand awareness and drive profits, we are your reliable partner.
        </p>
        <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default PhotoEditingBenefits;
