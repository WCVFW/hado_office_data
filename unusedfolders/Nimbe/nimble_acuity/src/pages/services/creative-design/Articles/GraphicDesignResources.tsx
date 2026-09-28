import React from "react";
import CSmainmenu from "../CSmainmenu";

const GraphicDesignResources: React.FC = () => {
  const resources = [
    { name: "Power to the Poster", description: "A popular resource center offering well-designed posters in PDF format." },
    { name: "Looks Like Good Design", description: "Displays high-quality works from motion designers, graphic designers, architects, and more." },
    { name: "Graphic-Exchange", description: "Showcases designs from various designers, product designers, and architects." },
    { name: "GigPosters", description: "Specializes in gig posters, flyers, handbills, and rock music posters." },
    { name: "Fubiz", description: "Focuses on urban culture, numerical arts, and graphic trends in multiple galleries." },
    { name: "The Design Inspiration", description: "Features illustrations, logos, photos, websites, patterns, and other inspiring visuals." },
    { name: "1X", description: "A photo community showcasing the best works of photographers globally." },
    { name: "Emptees", description: "Designed for designers and t-shirt enthusiasts to showcase creative works." },
    { name: "CreativeDepart", description: "Showcases beautiful designs by artists, designers, photographers, and fashion enthusiasts." },
    { name: "Stationery Style", description: "Curates content based on designer interests and profiles, avoiding unnecessary designs." },
    { name: "MOJIZU", description: "Ideal for cartoon and animation character designers to share and get feedback." },
    { name: "FreshBump", description: "Inspires designers mainly in product design, illustration, architecture, and photography." },
    { name: "Hardformat", description: "Showcases music-related designs, vinyl covers, and original artwork." },
    { name: "TAXI Creatives", description: "A networking platform for designers to connect, learn, and showcase talent." },
    { name: "Design Shack", description: "Provides unique designs and articles for learning new design techniques." },
    { name: "Creative Bloq", description: "Covers illustrations, web design, 3D, digital art, and graphic design trends." },
    { name: "Boxes and Arrows", description: "Helps designers innovate in interaction, business, and information design." },
    { name: "InspirationFeed", description: "A design magazine featuring case studies, resources, tips, and articles." },
    { name: "Awwwards", description: "An online network for professional designers to share work and receive feedback." },
    { name: "Type Detail", description: "Displays unique web fonts daily, highlighting intricate typographic details." },
  ];

  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-green-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Top 20 Resources to Help You Develop a Great Graphic Design
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Nimble Auity provides curated resources to inspire graphic designers and elevate creative work.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <p className="mb-4">
          Great graphic design conveys ideas visually and inspires viewers. Designers must stay updated with trends and seek inspiration from trusted resources to create innovative and high-quality work.
        </p>
        <p>
          Nimble Auity presents a comprehensive list of top resources to spark creativity, refine skills, and discover fresh design ideas.
        </p>
      </section>

      {/* Resources Section */}
      <section className="py-16 px-6 bg-gray-50 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          20 Beneficial Graphic Design Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((resource, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-2">{resource.name}</h3>
              <p className="text-gray-700">{resource.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Get Creative with Nimble Auity</h2>
        <p className="mb-4">
          Nimble Auity provides top-quality graphic design services globally. Our team of expert designers leverages the best tools and technologies to create innovative, trendy, and high-quality designs.
        </p>
        <p className="mb-6">
          Whether you need design inspiration or a complete project handled, Nimble offers customized solutions to bring your vision to life.
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
          Contact Us for Graphic Design Services
        </button>
      </section>
    </div>
  );
};

export default GraphicDesignResources;
