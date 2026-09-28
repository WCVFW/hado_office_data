import React from "react";
import CSmainmenu from "../CSmainmenu";

const GraphicDesignTrends: React.FC = () => {
  const trends = [
    {
      title: "Immersive 3D Designs",
      description:
        "Advances in 3D design, AR, and VR allow designers to create highly immersive experiences, transforming static visuals into interactive environments that strengthen storytelling and user engagement.",
    },
    {
      title: "Design Sustainability",
      description:
        "Eco-friendly materials, digital-first approaches, and themes of nature and conservation are trending. Sustainable design minimizes environmental impact while appealing to eco-conscious consumers.",
    },
    {
      title: "Kinetic Typography",
      description:
        "Animated text brings static fonts to life, creating dynamic visuals that capture attention. Kinetic typography enhances storytelling in digital media, guiding viewers through narratives and emphasizing key messages.",
    },
    {
      title: "Abstract Elements that Intrigue",
      description:
        "Fluid shapes, whimsical illustrations, and surreal elements challenge traditional design standards. Abstract visuals evoke emotions and foster deeper connections with audiences.",
    },
    {
      title: "Nostalgia-invoking Retrofuturism",
      description:
        "Combining retro text styles, vintage colors, and sci-fi elements, retrofuturism merges past and future aesthetics to create visually distinctive and nostalgic experiences.",
    },
    {
      title: "Infographics and Data Visualization",
      description:
        "Complex data is converted into visually appealing and easy-to-read infographics. Interactive layouts and color-coded systems help audiences understand information quickly, supporting data-driven decision making.",
    },
  ];

  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-green-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Top Graphic Design Trends Shaping the Industry
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Nimble Auity helps you stay ahead with the latest graphic design trends. From immersive 3D visuals to sustainable and abstract designs, we provide cutting-edge creative solutions.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <p className="mb-4">
          Graphic design services combine creativity and technology to communicate ideas visually. Services include brochures, websites, social media graphics, logos, and more. Staying updated with trends ensures relevance, emotional engagement, and impactful storytelling for your brand.
        </p>
        <p>
          Using modern design trends allows brands to connect emotionally with consumers while keeping brand personality intact. Nimble Auity leverages these trends to create memorable and innovative designs.
        </p>
      </section>

      {/* Trends Section */}
      <section className="py-16 px-6 bg-gray-50 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Innovative Trends Transforming Graphic Design
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trends.map((trend, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-3">{trend.title}</h3>
              <p className="text-gray-700">{trend.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">The Conclusion</h2>
        <p className="mb-4">
          Current graphic design trends highlight the fusion of technology, sustainability, and creativity. Staying updated empowers designers to explore new possibilities, challenge conventions, and deliver sophisticated, emotionally engaging designs.
        </p>
        <p className="mb-6">
          Nimble Auity helps brands implement these trends, ensuring designs remain relevant, innovative, and compelling.
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
          Contact Us for Design Solutions
        </button>
      </section>
    </div>
  );
};

export default GraphicDesignTrends;
