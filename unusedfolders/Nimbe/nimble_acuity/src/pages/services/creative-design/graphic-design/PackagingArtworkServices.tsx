import React from "react";
import CSmainmenu from "../CSmainmenu";

const PackagingArtworkServices: React.FC = () => {
  const services = [
    {
      title: "Food and Beverage Packaging Artwork Design",
      desc: "Popular category for global food brands. Attractive designs for confectionery, juices, soft drinks, water, wine, liquor, beer, fresh food, packaged food, health food, snacks, health drinks, cereal, and more.",
    },
    {
      title: "Electronics Packaging Artwork Design",
      desc: "Functional and aesthetically pleasing designs for electronics, entertainment products, and home appliances with clear, innovative packaging.",
    },
    {
      title: "Health and Beauty Packaging Artwork Design",
      desc: "Attractive designs for skincare, haircare, makeup, cosmetics, medical products, and luxury items, keeping brand values intact.",
    },
    {
      title: "FMCG Packaging Artwork Design",
      desc: "Research-driven designs for FMCG products to stand out in crowded markets and increase shelf appeal.",
    },
    {
      title: "Kids' Products Packaging Artwork Design",
      desc: "Creative designs for baby products, toys, fashion accessories, clothing, and sporting goods with unique and trendy concepts.",
    },
    {
      title: "Industrial Packaging Artwork Design",
      desc: "Clean, practical, and attractive designs that clearly reflect your brand image and proposition.",
    },
  ];

  const processSteps = [
    "Team Selection: Project scope defined by creative, design, and production team.",
    "Requirement Discovery: Collect creative briefs, logos, images, copy, nutritional info, layout, and product specifications.",
    "Approval of a Free Trial: Free trial to experience previous work and service levels.",
    "Market Analysis: Competitor study and product packaging evaluation for accuracy and innovation.",
    "Design Creation: Brainstorming, sample creation, copy checking, color correction, size, cut marks, and barcodes verification.",
    "Client Review: 3D models and digital versions shared for feedback; revisions done quickly.",
    "Final Output: Approved design delivered in client's preferred format.",
  ];

  const benefits = [
    "ISO Certified Packaging Artwork and Product Label Design Services Provider",
    "100% Data Security (ISO/IEC 27001:2022 compliant)",
    "High-quality Packaging Artwork Services with SLA adherence",
    "Scalable Services with royalty-free images and multiple revisions",
    "Quick Turnaround Time (TAT) for all projects",
    "Cost-efficient Services and free trial options",
    "Dedicated SPOC for communication and project updates",
    "Expert in-house designers and visualizers using professional tools (Photoshop, Illustrator, Corel Draw, InDesign, 3Ds Max, Maya 3D)",
    "Excellent Infrastructure with high-speed internet, licensed software, Apple desktops, and professional printers",
    "Multi-format File Export: EPS, Ai, PDF, JPG, FBX, OBJ",
    "Round-the-clock Support across time zones",
  ];

  return (
    <div><CSmainmenu/>
    <section className="bg-gray-50 px-6 py-12 md:px-16 lg:px-32 text-gray-800">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700">
          Nimble Packaging Artwork & Product Label Design Services
        </h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Gain better visibility with artistically designed packaging and product labels by Nimble. We help your brand makeover with rich packaging artwork and labeling services.
        </p>
      </div>

      {/* Introduction */}
      <div className="max-w-5xl mx-auto mb-12 space-y-4 text-justify leading-relaxed">
        <p>
          Are you contemplating ways to make your packaging artwork stand apart? Struggling with in-house designs? Fret not! Packaging artwork and product label design services from Nimble will help you get noticed where competition is rife. Be it colors, highlights, features, shapes, textures, or other design elements, we help you make the best first impression while keeping in line with your brand image and proposition.
        </p>
        <p>
          At Nimble, we think creatively, understand your brand identity, study your market, and create unique designs that attract customer attention. Our services have been offered to manufacturers, marketing agencies, FMCG companies, retailers, media agencies, designers, small and medium-sized firms, and individuals across industries at affordable rates.
        </p>
      </div>

      {/* Services */}
      <h2 className="text-2xl font-semibold text-green-700 mb-6">
        Packaging Artwork and Product Label Design Services We Offer
      </h2>
      <div className="grid gap-6 md:grid-cols-2 mb-12">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="font-semibold text-green-600 mb-2">{service.title}</h3>
            <p className="text-gray-700">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* Process */}
      <h2 className="text-2xl font-semibold text-green-700 mb-6">
        Packaging Artwork & Product Labeling Process
      </h2>
      <ol className="list-decimal list-inside space-y-4 text-gray-700 mb-12">
        {processSteps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

      {/* Benefits */}
      <h2 className="text-2xl font-semibold text-green-700 mb-6">
        Why Choose Nimble for Packaging Artwork & Label Design?
      </h2>
      <ul className="list-disc list-inside space-y-3 text-gray-700 mb-12">
        {benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>

      {/* Client Case Studies */}
      <h2 className="text-2xl font-semibold text-green-700 mb-6">
        Client Case Studies
      </h2>
      <div className="grid gap-6 md:grid-cols-2 mb-12">
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h3 className="font-semibold text-green-600 mb-2">
            Prepress and Vector Artwork Provided to a Dublin-based Client
          </h3>
          <p className="text-gray-700">
            Nimble provided prepress and vector artwork services to a Dublin-based client, understanding concerns and realizing goals with quick TAT.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h3 className="font-semibold text-green-600 mb-2">
            Vector Artwork Provided to US-based Label Designer
          </h3>
          <p className="text-gray-700">
            Nimble created vector artwork for a US-based label and sticker designer, customized to budget and assured TAT.
          </p>
        </div>
      </div>

      {/* Closing CTA */}
      <div className="mt-12 text-center">
        <p className="max-w-3xl mx-auto text-gray-600 mb-6 text-justify">
          Get attractive, innovative, and 100% original product label or package artwork designs quickly and cost-effectively by partnering with Nimble. We are an ISO-certified design services company with international quality standards and a global clientele. Each artwork is thoroughly checked to ensure perfect design every time.
        </p>
        <button className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition">
          Contact Us
        </button>
      </div>
    </section>
    </div>
  );
};

export default PackagingArtworkServices;
