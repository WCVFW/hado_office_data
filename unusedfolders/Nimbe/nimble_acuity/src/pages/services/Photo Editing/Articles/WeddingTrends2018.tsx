import React from "react";
import PEMainMenu from "../PEmainmenu";

const WeddingTrends2018: React.FC = () => {
  const trends = [
    {
      title: "Authentic Candid Shots",
      desc: "Digital photography allows limitless captures, letting photographers focus on emotions and expressions without the pressure of a single perfect shot."
    },
    {
      title: "Black and White Photography",
      desc: "Once reserved for artistic shots, black and white photos are trending again, helping viewers focus on emotions and timeless moments."
    },
    {
      title: "Drone Footages",
      desc: "Affordable drones are revolutionizing wedding photography with stunning aerial perspectives and cinematic results."
    },
    {
      title: "Unconventional Location Shoots",
      desc: "Couples are traveling to exotic destinations for pre- and post-wedding shoots, adding uniqueness and flair to their wedding albums."
    },
    {
      title: "Smoke Bombs",
      desc: "Colorful smoke bombs create dramatic backdrops and are especially popular for exit photos and staged shots."
    },
    {
      title: "Wedding Hashtags",
      desc: "Social media hashtags allow easy photo sharing and help couples see their wedding through the eyes of their guests."
    },
    {
      title: "Social Media-integrated Photo Booths",
      desc: "Modern booths allow instant uploads to social media, making them a fun and interactive wedding highlight."
    },
    {
      title: "Underwater Shots",
      desc: "With waterproof cameras and GoPros, adventurous couples are opting for creative underwater wedding photos."
    },
    {
      title: "Selfie Shots",
      desc: "Selfie stations with stylish backdrops give guests the chance to capture fun, candid moments themselves."
    },
    {
      title: "Stop Motion Wedding Films",
      desc: "Short animations made from still photos set to music act as unique wedding trailers, perfect for social sharing."
    },
  ];

  return (
    <div> <PEMainMenu/>
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Hero */}
     
      <h1 className="text-3xl font-bold mb-6">
        10 Most Popular Wedding Photography Trends in 2018
      </h1>
      <p className="text-gray-700 mb-6">
        Weddings are one of the most important occasions in life and must be well-covered
        to be cherished forever. With technology and creativity shaping photography,
        here are the top wedding photography trends to watch out for in 2018 and beyond.
      </p>

      {/* Trends Section */}
      <div className="grid gap-6 md:grid-cols-2 mb-12">
        {trends.map((trend, idx) => (
          <div key={idx} className="p-5 border rounded-lg shadow-sm bg-white">
            <h2 className="text-xl font-semibold mb-2">{trend.title}</h2>
            <p className="text-gray-600">{trend.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-blue-50 p-6 rounded-lg shadow text-center mb-12">
        <h2 className="text-2xl font-semibold mb-3">
          Get Your Wedding Photos Professionally Edited
        </h2>
        <p className="text-gray-700 mb-4">
          Nimble Acuity has over 26+ years of experience in wedding photo editing.
          Our expert team uses the latest tools to deliver high-quality, cost-effective
          services tailored to your needs.
        </p>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow">
          Get a Free Quote
        </button>
      </div>

      {/* Services Section */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="p-4 border rounded-lg bg-white shadow-sm">
          <h3 className="font-semibold mb-2">Wedding Video Editing</h3>
          <p className="text-gray-600 text-sm">
            Enhance your wedding videos with seamless editing and storytelling.
          </p>
        </div>
        <div className="p-4 border rounded-lg bg-white shadow-sm">
          <h3 className="font-semibold mb-2">Wedding Photo Post-Processing</h3>
          <p className="text-gray-600 text-sm">
            Professional touch-ups and enhancements for timeless wedding photos.
          </p>
        </div>
        <div className="p-4 border rounded-lg bg-white shadow-sm">
          <h3 className="font-semibold mb-2">Photo Retouching Services</h3>
          <p className="text-gray-600 text-sm">
            Correct imperfections, balance lighting, and highlight natural beauty.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default WeddingTrends2018;
