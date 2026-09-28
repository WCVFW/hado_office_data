import React from "react";
import CSmainmenu from "../CSmainmenu";

const ProductAnimationServices: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Product Animation Services
        </h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-6">
          Showcase your product or service in the best possible light with Nimble Auity's expert 2D and 3D product animation services starting at just $25/second.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-purple-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Request a Free Quote
        </a>
      </div>

      {/* Overview */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-6">
        <p>
          Nimble Auity provides product rendering and animation services to help explain new or existing products to customers or for internal communication. Our photo-realistic animations clearly communicate features and functionality, helping teams and clients visualize before production.
        </p>
        <p>
          Product animation is one of the most effective ways to showcase your product, refine designs, and ensure precision in communication with your audience.
        </p>
      </div>

      {/* Services Offered */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Product Animation Services We Offer
        </h2>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
          <div>
            <h3 className="font-semibold text-xl mb-2">2D Product Demos</h3>
            <p>
              We create compelling 2D product demos for presentations or internal communications using the latest tools and technologies.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">3D Product Demos</h3>
            <p>
              High-detail 3D demos to present your product’s features with photo-realistic accuracy for client presentations.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Machine Assembly Animations</h3>
            <p>
              Detailed animations for mechanical parts, prototypes, and assemblies for precise demonstration and understanding.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">3D How-to Animation Videos</h3>
            <p>
              Explain complex tasks or workflows with engaging and detailed 3D how-to videos that effectively communicate your ideas.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">3D Product Presentations</h3>
            <p>
              High-quality presentations to showcase products in the best light, highlighting features and benefits accurately.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Engineering-related Animations</h3>
            <p>
              Simulation of complex systems in their intended environment to help engineering teams identify flaws and convey designs effectively.
            </p>
          </div>
        </div>
      </div>

      {/* Other Services */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Other Services You Can Benefit From</h2>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-700">
          <div>Visual Effects Services</div>
          <div>Rotoscoping Services</div>
          <div>Animatics Services</div>
          <div>Flash Animation Services</div>
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Nimble for Product Animation Services?</h2>
        <ul className="max-w-4xl mx-auto list-disc list-inside space-y-4 text-gray-700">
          <li>Affordable hourly or FTE pricing options.</li>
          <li>High-quality, ISO-certified services using best practices.</li>
          <li>Superb infrastructure with latest tools and technologies.</li>
          <li>Streamlined and structured process for reliable delivery.</li>
          <li>Experienced animation team with 26+ years of industry expertise.</li>
          <li>Ensured data security for all projects.</li>
          <li>Fast turnaround to meet deadlines consistently.</li>
        </ul>
      </div>

      {/* Client Success Stories */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Client Success Stories</h2>
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="font-semibold text-xl mb-1">Hologram Animation Services for Swiss Natural Product Dealer</h3>
            <p>
              Four full-time animators created high-quality holograms using 3DS Max & Maya software within twelve business days.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-1">2D Animation Services for UK-based Children's Book Writer</h3>
            <p>
              A leading UK-based children’s writer received high-quality 2D animation services delivered promptly by Nimble Auity.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-6 text-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get Professional Product Animations</h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
          Partner with Nimble Auity’s expert team to create professional, engaging, and precise product animations that captivate your audience.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-purple-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default ProductAnimationServices;

