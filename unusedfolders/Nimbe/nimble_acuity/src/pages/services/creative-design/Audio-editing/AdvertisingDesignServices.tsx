import React from "react";
import CSmainmenu from "../CSmainmenu";

const AdvertisingDesignServices: React.FC = () => {
  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-yellow-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Advertising Design Services
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Expand your market, educate your customers, increase sales, and enhance your brand value with our advertising design support.
        </p>
        <button className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition">
          Contact Us
        </button>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <p className="mb-4">
          Need ad design services to breathe life into your campaigns? Our global community of animators and graphic designers has you covered. Nimble Auity is an ISO-certified advertising design company with vast industry experience.
        </p>
        <p>
          Our designers not only increase brand awareness but also improve your brand positioning using powerful visuals. We help you achieve business goals and leverage campaign performance data to generate more revenue and ROI.
        </p>
      </section>

      {/* Advertising Design Services */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Advertising Design Service Solution
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Strategic Consulting",
              desc: "We provide strategic ad campaign consultation covering brand management, research-based strategies, product time-to-market, brand integration, and PR campaigns.",
            },
            {
              title: "Ad Campaign Design Services",
              desc: "Our designs start with target market analysis, planning, optimizing creative strategies, producing materials, testing, and refining campaigns.",
            },
            {
              title: "Ad Campaign Execution",
              desc: "We implement ad campaigns efficiently from start to end to connect with your target audience, regardless of business profile.",
            },
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-bold text-xl mb-2">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Why Choose Nimble for Advertising Design?
        </h2>
        <ul className="list-disc list-inside space-y-4 max-w-3xl mx-auto">
          {[
            "End-to-end solutions for lead generation and ROI maximization.",
            "Leverage advertising analytics to improve campaign effectiveness.",
            "High-quality services across multiple industries.",
            "Fastest turnaround times for innovative campaigns.",
          ].map((benefit, idx) => (
            <li key={idx}>{benefit}</li>
          ))}
        </ul>
      </section>

      {/* Additional Creative Services */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Additional Creative Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
          {[
            "Graphic Design Services",
            "Animation Services",
            "Audio Editing Services",
            "Artwork Design Services",
            "Video Editing Services",
            "Illustration Services",
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-bold text-lg">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Client Case Studies */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Customer Success Stories
        </h2>
        <div className="space-y-6">
          {[
            {
              title: "Sticker Design Services for Advertising Firm",
              desc: "Nimble provided high-quality rotoscoping solutions at a cost-effective rate, saving 50% cost for the client.",
            },
            {
              title: "Logo Vectorization for an Australian Company",
              desc: "Delivered comprehensive creative artwork services and became the customer's virtual studio with high trust.",
            },
          ].map((caseStudy, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-bold text-xl mb-2">{caseStudy.title}</h3>
              <p>{caseStudy.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-yellow-50 py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Testimonials</h2>
        <blockquote className="bg-white p-8 rounded-lg italic shadow">
          "The quality of artwork delivered during the trial period was exceptional and helped us decide on our new outsourced partner."
          <cite className="block mt-4 font-bold">Director - Operations, Leading pharmaceutical company, Netherlands</cite>
        </blockquote>
      </section>

      {/* Final CTA */}
      <section className="bg-yellow-600 py-16 px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Partner with Nimble Auity Today
        </h2>
        <p className="mb-6">
          Reach out for cost-effective advertising design services that increase your market reach, brand loyalty, and revenue.
        </p>
        <button className="bg-white text-yellow-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default AdvertisingDesignServices;
