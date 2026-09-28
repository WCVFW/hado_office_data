import React from "react";
import CSmainmenu from "../CSmainmenu";

const Logo2DDesignServices: React.FC = () => {
  return (
    <div><CSmainmenu/>
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 space-y-10">

      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
        Nimble 2D Logo Design Services
      </h1>
      <p className="text-gray-700 text-lg">
        Get professional 2D logo designs customized to suit your business requirements at highly cost-effective rates from Nimble Auity.
      </p>

      {/* Introduction */}
      <p className="text-gray-700">
        At Nimble Auity, we create professional, customized 2D logos that put your brand in the spotlight. Our logos communicate positive first impressions, define business objectives, attract new clientele, and create lasting visual impressions.
      </p>
      <p className="text-gray-700">
        Our skilled designers create 2D logos that serve as the face of your business and can be showcased across stationery, brochures, websites, exhibition stands, and more. We cater to a wide range of industries, including corporate, finance, government, fashion, retail, and food.
      </p>

      {/* Services Offered */}
      <h2 className="text-2xl font-semibold text-gray-800">2D Logo Design Services We Offer</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li><strong>Basic 2D Logos:</strong> Stylish typographic logos to kick-start your business.</li>
        <li><strong>Complex 2D Logos:</strong> Includes graphics, icons, or symbols for a more advanced design.</li>
      </ul>

      {/* Process */}
      <h2 className="text-2xl font-semibold text-gray-800">2D Logo Design Process</h2>
      <ol className="list-decimal list-inside text-gray-700 space-y-2">
        <li><strong>Client Briefing:</strong> Nimble creative team receives a briefing on the logo requirements.</li>
        <li><strong>Input:</strong> Client transfers samples via JPEG, Dropbox, or FTP.</li>
        <li><strong>Logo Creation:</strong> Designers use Photoshop and After Effects to create the logo.</li>
        <li><strong>Edits:</strong> First draft sent to client; revisions made based on feedback.</li>
        <li><strong>Final Output:</strong> Final logo delivered via Dropbox or FTP in preferred format.</li>
      </ol>

      {/* Benefits */}
      <h2 className="text-2xl font-semibold text-gray-800">Benefits of Nimble 2D Logo Design Services</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>ISO quality and 99% SLA adherence, with 24/6 support</li>
        <li>Experienced designers skilled in Illustrator, Photoshop, After Effects, Premiere Pro, Animate CC</li>
        <li>100% original logos – no duplication</li>
        <li>Enhanced branding tailored for future use</li>
        <li>Custom, captivating logos showing personality</li>
        <li>Complete copyright ownership of final logo</li>
        <li>Full guidance from brainstorming to final delivery</li>
        <li>Ability to convert 2D logos to 3D using CorelDraw, Illustrator, Photoshop, After Effects, Maya, 3DS MAX</li>
      </ul>

      {/* Case Studies */}
      <h2 className="text-2xl font-semibold text-gray-800">Client Success Stories</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>
          <strong>Sticker Design Services for an Advertising Firm:</strong> Nimble Auity provided a Scandinavian medical research company with 3200 resource hours to deliver a fully functional 3D animation and 3D modeled video.
        </li>
        <li>
          <strong>Logo Vectorization for an Australian Company:</strong> Nimble Auity helped an Australian startup specializing in marketing and web development with logo design and vectorization in a timely and cost-efficient manner.
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
          Contact Us for 2D Logo Design
        </a>
      </div>
    </div>
    </div>
  );
};

export default Logo2DDesignServices;
