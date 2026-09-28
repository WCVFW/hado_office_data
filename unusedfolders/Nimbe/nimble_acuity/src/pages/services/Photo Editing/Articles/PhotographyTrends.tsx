import React from "react";
import PEMainMenu from "../PEmainmenu";

const PhotographyTrends: React.FC = () => {
  const trends = [
    {
      title: "Complicated Patterns",
      content:
        "Use of new and interesting patterns will be in vogue in 2018 and beyond. Interesting patterns and backgrounds help attract attention and should be considered while conceptualizing and composing shots.",
    },
    {
      title: "Flash Photography",
      content:
        "Though rarely used recently, flash photography is set to make a comeback. Subtle flash adds glow and brightness to photos.",
    },
    {
      title: "Mobile Photography",
      content:
        "With smartphones equipped with high-quality cameras, many prefer shooting with mobiles for flexibility and convenience. This trend is here to stay.",
    },
    {
      title: "Astrophotography",
      content:
        "Capturing celestial bodies has growing popularity. 2018 is key as more experiment with astrophotography of the vast universe.",
    },
    {
      title: "Drone Photography",
      content:
        "Drone-assisted photography revolutionizes aerial shots, offering new perspectives and gaining strong popularity.",
    },
    {
      title: "Film Photography",
      content:
        "Despite digital dominance, film photography is predicted to return, offering a classic touch and timeless feel.",
    },
    {
      title: "Neon Landscapes",
      content:
        "Landscapes will see experimentation with colors, light leaks, and exaggerated tones for bold, vibrant imagery.",
    },
    {
      title: "Tattoo Photography",
      content:
        "Tattoos are now mainstream and vibrant subjects for photography, making this trend increasingly popular.",
    },
  ];

  const verticals = [
    "Online Apparels Shopping",
    "Online Electronic Store",
    "Online Automobile Store",
    "Online Sports Accessories",
    "Publishing Houses",
    "Portrait Studios",
    "Real Estate Companies",
  ];

  const services = [
    "Photo Retouching Services",
    "Photo Restoration Services",
    "Real Estate Post Processing Services",
  ];

  return (
    <div> <PEMainMenu/>
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">
        8 Photography Trends to Watch Out for in 2018 and Beyond
      </h1>
      <p className="text-gray-700 mb-6">
        Photography has evolved drastically with better tools and technologies.
        Photographers need to stay updated with the latest trends and
        incorporate them to remain relevant. Here are 8 key trends shaping 2018
        and beyond.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Key Photography Trends</h2>
      <div className="space-y-6">
        {trends.map((trend, index) => (
          <div key={index} className="border-b pb-4">
            <h3 className="text-xl font-semibold mb-2">{trend.title}</h3>
            <p className="text-gray-700">{trend.content}</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-100 p-6 rounded-lg mt-10">
        <h3 className="text-lg font-semibold mb-2">
          Verticals / Industries We Cater To
        </h3>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          {verticals.map((v, idx) => (
            <li key={idx}>{v}</li>
          ))}
        </ul>

        <h3 className="text-lg font-semibold mb-2">Our Related Services</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          {services.map((s, idx) => (
            <li key={idx}>{s}</li>
          ))}
        </ul>
      </div>

      <div className="mt-8 p-6 bg-blue-50 rounded-lg text-center shadow">
        <h3 className="text-xl font-semibold mb-2">
          Nimble Photo Editing to Us
        </h3>
        <p className="text-gray-700 mb-4">
          With 26+ years of experience, Nimble Acuity provides reliable and
          cost-effective photo editing services. Our expert editors stay updated
          with industry trends to deliver high-quality results.
        </p>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
          Contact Us
        </button>
      </div>
    </div>
    </div>
  );
};

export default PhotographyTrends;
