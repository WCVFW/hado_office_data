import React from "react";
import CSmainmenu from "../CSmainmenu";

const AnimatedLogoDesignServices: React.FC = () => {
  return (
    <div><CSmainmenu/>
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 space-y-10">

      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
        Nimble Animated Logo Design Services
      </h1>
      <p className="text-gray-700 text-lg">
        Boost your brand identity and recognition with a professional-looking animated logo designed by our expert team at highly affordable prices.
      </p>

      {/* Introduction */}
      <p className="text-gray-700">
        A company logo is the face of your business, and working with a reputable logo designer is highly essential. At Nimble Auity we offer animated logo design services to enhance existing logos, transform them into a virtual identity, increase brand recognition, or extend brand identity.
      </p>

      {/* Target Audience */}
      <h2 className="text-2xl font-semibold text-gray-800">Who We Cater To</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Animation companies offloading 3D logo creation</li>
        <li>Web marketers, event planners, entertainment industry professionals, and other businesses looking to create or upgrade logos</li>
      </ul>

      {/* Services Offered */}
      <h2 className="text-2xl font-semibold text-gray-800">High-Quality Animated Logo Design Services</h2>
      <p className="text-gray-700">
        Over the past two decades, our creative team has assisted 19,000+ clients with 1.2 million designs. Our animated custom logo services include:
      </p>

      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li><strong>2D Animated Logo Design:</strong> Eye-catching, aesthetic logos with animation effects for websites, ads, and communication materials.</li>
        <li><strong>3D Animated Logo Design:</strong> Convert vector logos into 3D animations for TV, film, web, and multimedia channels using the latest software.</li>
        <li><strong>Flash Animated Logo Design:</strong> Animated Flash logos independent of operating systems and browsers for higher CTRs (SWF, MOV, MP4).</li>
      </ul>

      {/* Process */}
      <h2 className="text-2xl font-semibold text-gray-800">Animated Logo Design Process</h2>
      <ol className="list-decimal list-inside text-gray-700 space-y-2">
        <li>Concept Briefing</li>
        <li>Brainstorming</li>
        <li>Storyboard Creation</li>
        <li>2D/3D Animation</li>
        <li>Revisions</li>
        <li>Final Delivery</li>
      </ol>

      {/* Benefits */}
      <h2 className="text-2xl font-semibold text-gray-800">Benefits of Nimble Animated Logo Design Services</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Skilled professionals: 30+ visualizers, designers, graphic artists, illustrators</li>
        <li>ISO quality design processes</li>
        <li>Expertise in 3ds Maya, Max, Photoshop, Illustrator, Flash</li>
        <li>99% SLA adherence and high quality standards</li>
        <li>Up to 3 design revisions, FREE quality testing</li>
        <li>24-48 hour turnaround time</li>
        <li>Dedicated account manager and work in your time zone</li>
        <li>Fluent English-speaking team</li>
        <li>Up to 60% cost savings</li>
        <li>24/6 support</li>
        <li>Original, customizable logos ready for print, signage, and electronic media</li>
        <li>High-resolution files and full logo ownership rights</li>
        <li>No premade, off-the-shelf logos, clip-art, or clichés</li>
        <li>Finished animated logos in your choice of format</li>
      </ul>

      {/* Case Studies */}
      <h2 className="text-2xl font-semibold text-gray-800">Case Studies</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>
          <strong>Logo Vectorization for an Australian Company:</strong> Nimble helped a startup in Australia specializing in marketing and web development with logo design and vectorization in a timely, cost-efficient manner.
        </li>
        <li>
          <strong>Sticker Design Services for an Advertising Firm:</strong> Nimble delivered 753 sticker designs in 7 sizes for every Rugby Club in Australia for a Melbourne advertising firm.
        </li>
      </ul>

      {/* Testimonials */}
      <h2 className="text-2xl font-semibold text-gray-800">Testimonials</h2>
      <p className="text-gray-700 italic">
        "The quality of artwork delivered during the trial period was exceptional and helped us decide on our new Nimble partner."
        <br />
        <span className="font-semibold">— Director, Operations, Leading Pharmaceutical Company, Netherlands</span>
      </p>

      {/* CTA */}
      <div className="text-center mt-8">
        <a
          href="/contact-us"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-semibold transition"
        >
          Contact Us for Animated Logo Design
        </a>
      </div>
    </div>
    </div>
  );
};

export default AnimatedLogoDesignServices;
