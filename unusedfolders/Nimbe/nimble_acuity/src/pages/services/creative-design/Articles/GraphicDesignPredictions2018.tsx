import React from "react";
import CSmainmenu from "../CSmainmenu";

const GraphicDesignPredictions2018: React.FC = () => {
  const predictions = [
    {
      title: "Minimalistic Designs Will Be Prevalent",
      description:
        "Minimalistic designs convey a lot through simplicity. This trend will gain popularity as companies adopt it to deliver clean, impactful visuals."
    },
    {
      title: "Modular Layout Usage Will Increase",
      description:
        "Breaking content into smaller chunks improves readability and organization. Modular designs offer a professional look and efficient content management."
    },
    {
      title: "Hand Drawn Images Will Gain Popularity",
      description:
        "Hand-drawn illustrations add a human touch and nostalgia. They simplify complex ideas and enhance engagement with viewers."
    },
    {
      title: "Responsive Logos are Here to Stay",
      description:
        "With multiple devices in use, responsive logos adapt seamlessly to different formats, ensuring consistent brand identity."
    },
    {
      title: "Modern Retro Designs Will Make a Comeback",
      description:
        "Combining vintage aesthetics with modern elements, modern-retro designs attract attention and evoke a sense of familiarity with innovation."
    },
    {
      title: "Moving Images or Cinemagraphs Will Become Daily",
      description:
        "Cinemagraphs combine still images with subtle motion to convey messages quickly and effectively, enhancing digital storytelling."
    },
    {
      title: "Sleek Text and Bold Images Will Gain Momentum",
      description:
        "Using sleek typography with bold visuals engages audiences, emphasizes key content, and creates captivating designs."
    }
  ];

  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-yellow-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Popular Graphic Designing Predictions for 2018
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Stay ahead of the curve with Nimble Auity’s insights on innovative design trends shaping the industry and captivating audiences.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <p className="mb-4">
          Graphic design has rapidly evolved, playing a crucial role in advertising, communication, and print. Companies must understand and implement the latest trends to remain competitive.
        </p>
        <p>
          Predicting and adapting to emerging design trends ensures your visuals remain fresh, impactful, and engaging for your audience.
        </p>
      </section>

      {/* Predictions Section */}
      <section className="py-16 px-6 bg-gray-50 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          7 Graphic Design Predictions for 2018 and Beyond
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {predictions.map((prediction, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-2">{prediction.title}</h3>
              <p className="text-gray-700">{prediction.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Stay Updated with Trendy Designs with Nimble Auity
        </h2>
        <p className="mb-4">
          Nimble Auity provides high-quality, innovative graphic design services using the latest tools and techniques. Our expert team ensures timely delivery of designs aligned with current trends.
        </p>
        <p className="mb-6">
          Whether you need minimalistic visuals, responsive logos, or modern-retro designs, Nimble Auity helps your brand stand out creatively and professionally.
        </p>
        <button className="bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition">
          Contact Us for Trendy Graphic Design Services
        </button>
      </section>
    </div>
  );
};

export default GraphicDesignPredictions2018;
