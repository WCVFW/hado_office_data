import React from "react";
import CSmainmenu from "../CSmainmenu";

const FlashAnimationServices: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Flash Animation Services</h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-6">
          Capture attention instantly with Nimble’s Flash animation services, making complex concepts simple, interactive, and engaging for your audience.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-purple-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Get Started
        </a>
      </div>

      {/* Overview */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-6">
        <p>
          With billions of websites online, competition is fierce. Nimble’s Flash animations grab attention quickly and explain even complex ideas with simplicity, making your web pages memorable.
        </p>
        <p>
          Best-in-class graphics, smooth motion, and creative storytelling are at the heart of our services, ensuring your visitors are engaged and converted efficiently.
        </p>
      </div>

      {/* Services Offered */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Flash Animation Services</h2>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
          <div>
            <h3 className="font-semibold text-xl mb-2">Flash Logo Designing</h3>
            <p>Animate your logos to increase brand recall and create a lasting impression.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Flash Website Designing</h3>
            <p>Create data-driven, fast-loading websites or partial Flash elements like banners and menus.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Flash Introduction for Websites</h3>
            <p>Develop an introductory Flash animation to impress visitors instantly without redesigning the entire site.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Designing Corporate Presentations</h3>
            <p>Spice up presentations with animations that engage viewers and make content memorable.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Custom Flash Animation</h3>
            <p>Create animations from scratch or customize templates to meet your unique requirements.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Animated Flash Banners</h3>
            <p>Seamless banners for websites and presentations that capture attention effectively.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Product Demos</h3>
            <p>Interactive and engaging demos that make complex product features easier to understand.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Flash Animation with Sounds & Special Effects</h3>
            <p>Handle voiceovers, music, and special effects to ensure smooth, high-quality animations.</p>
          </div>
        </div>
      </div>

      {/* How We Make It Click */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">How Nimble Makes Your Animations Click</h2>
        <p>
          At Nimble, we simplify complex concepts with creativity and clarity. Our Adobe Flash animators focus on engaging storytelling, humor, and interactive content to grab attention and convert viewers into customers.
        </p>
        <p>
          Attention to detail, high-quality graphics, and optimized animation ensure your content is not only visually appealing but also fast-loading and impactful.
        </p>
      </div>

      {/* Why Choose Nimble */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Nimble for Flash Animations</h2>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
          <div>
            <h3 className="font-semibold mb-2">Experienced Staff</h3>
            <p>
              Our Flash animators constantly learn new technologies and software to deliver cutting-edge animations for your business.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Quality</h3>
            <p>
              Original interfaces, attention to detail, and strict quality processes ensure dynamic, multimedia-rich animations delivered securely.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Technique</h3>
            <p>
              Optimized Flash animations reduce file sizes for faster loading without compromising visual appeal.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Engaging Solutions</h3>
            <p>
              High-quality, interactive animations that present your services professionally and attractively.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-6 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get Professional Flash Animations</h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
          Move to a more interactive and creative website with Nimble’s Flash animation services. Make your services professional, engaging, and memorable.
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

export default FlashAnimationServices;
