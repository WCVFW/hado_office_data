import React from "react";
import PEMainMenu from "../PEmainmenu";

const InsanePhotographyTrends: React.FC = () => {
  const trends = [
    {
      title: "Candid Photography",
      desc: "Capturing natural, in-the-moment shots is replacing traditional posed photos. Candid photography delivers authentic emotions and real-life expressions."
    },
    {
      title: "Black and White Photography",
      desc: "Once limited to artistic work, black and white photos are trending again across genres, offering timeless, elegant compositions."
    },
    {
      title: "Film Photography",
      desc: "Despite digital dominance, film photography is making a comeback. It brings a unique charm and depth that digital often cannot replicate."
    },
    {
      title: "Patterns",
      desc: "Minimalistic designs and layered patterns are being embraced in photography to create striking visuals, often used in marketing and advertising."
    },
    {
      title: "Flash Photography",
      desc: "Bold use of flash and shadows is gaining popularity among event photographers experimenting with new light setups for dramatic results."
    },
  ];

  return (
    <div><PEMainMenu/>
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <h1 className="text-3xl font-bold mb-4">
        5 Insane Trends Which Promise to Reshape Photography
      </h1>
      <p className="text-gray-700 mb-8">
        Photography is constantly evolving with technology and creativity. Staying updated 
        with these latest trends ensures photographers remain relevant and deliver 
        exceptional work to clients.
      </p>

      {/* Trends Section */}
      <div className="grid gap-6 md:grid-cols-2 mb-12">
        {trends.map((trend, idx) => (
          <div key={idx} className="p-5 border rounded-lg bg-white shadow-sm">
            <h2 className="text-xl font-semibold mb-2">{trend.title}</h2>
            <p className="text-gray-600">{trend.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-blue-50 p-6 rounded-lg shadow text-center mb-12">
        <h2 className="text-2xl font-semibold mb-3">
          Sign up for a FREE Trial Today
        </h2>
        <p className="text-gray-700 mb-4">
          Experience the quality of our photo editing services before you Nimble. 
          Stop editing, start clicking – we’ll handle the rest.
        </p>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow">
          Try it Now
        </button>
      </div>

      {/* Services Section */}
      <div className="p-6 border rounded-lg bg-white shadow-sm">
        <h2 className="text-xl font-semibold mb-4">
          Choose Nimble Acuity for the Best Photo Editing Services
        </h2>
        <p className="text-gray-700 mb-2">
          Nimble Acuity has been delivering professional photo editing services 
          worldwide for over 26+ years. Our skilled team is equipped with the latest 
          tools and trends to provide high-quality, cost-effective results.
        </p>
        <p className="text-gray-700">
          With strict confidentiality agreements and efficient processes, we ensure 
          your images are safe, secure, and delivered on time. Reach out today and 
          our team will get back to you within 24 hours.
        </p>
      </div>
    </div>
    </div>
  );
};

export default InsanePhotographyTrends;
