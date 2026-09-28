import React from "react";
import PEMainMenu from "../PEmainmenu";

const VirtualRealityRealEstate: React.FC = () => {
  const trends = [
    {
      title: "Photorealistic Virtual Tours will Become the New Normal",
      description:
        "360-degree renderings let buyers explore properties virtually. Agents save time and buyers make faster, more emotional connections with spaces.",
    },
    {
      title: "Traditional Staging to Be Replaced",
      description:
        "VR enables digital staging, saving time and money while allowing unlimited design customization.",
    },
    {
      title: "v-Commerce is the Next Big Thing",
      description:
        "Buyers can shop for home décor while virtually staging a property, merging real estate with v-commerce.",
    },
    {
      title: "Bottlenecks in Communication to Diminish",
      description:
        "Agents can create VR tours with embedded instructions, ensuring transparency and reducing misunderstandings.",
    },
    {
      title: "Quick and Cost-effective Prototyping",
      description:
        "Architects can tweak VR prototypes without costly physical revisions, saving both time and money.",
    },
    {
      title: "Will Bring Agents and Buyers Closer",
      description:
        "Long-distance buyers can explore properties without physical proximity, expanding market reach for agents.",
    },
    {
      title: "Sight-unseen is Getting Increasingly Popular",
      description:
        "VR builds buyer confidence, making it easier to invest in properties without an in-person visit.",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Virtual Reality – The Game-changing Ways to Sell Real Estate
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Discover how VR and AR are transforming the real estate industry with
          immersive experiences, virtual staging, and innovative selling
          strategies.
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-center">
        <p className="text-lg text-gray-700 mb-6">
          VR allows buyers to explore properties without being physically
          present. Real estate agents and developers worldwide are leveraging
          VR/AR technologies to streamline sales, boost engagement, and
          revolutionize property marketing.
        </p>
      </section>

      {/* Trends Section */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Virtual Reality Trends in Real Estate
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {trends.map((trend, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold text-indigo-600 mb-2">
                {trend.title}
              </h3>
              <p className="text-gray-700">{trend.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
        <p className="text-lg text-gray-700 mb-6">
          VR and AR are revolutionizing real estate, from immersive tours to
          digital staging and beyond. Early adopters are already reaping the
          benefits, while future innovations promise even greater
          transformations in the property market.
        </p>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-16 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Leverage VR with Nimble Acuity's Virtual Staging Services
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Nimble Acuity helps you create immersive 3D property designs, virtual staging,
          and photorealistic renderings. Enhance buyer experience, reduce costs,
          and sell faster with our world-class VR solutions.
        </p>
        <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default VirtualRealityRealEstate;
