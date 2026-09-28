import React from "react";
import CSmainmenu from "../CSmainmenu";

const CampaignDesign: React.FC = () => {
  return (
    <div><CSmainmenu/>
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 space-y-8">

      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
        Nimble Campaign Design Services
      </h1>
      <p className="text-gray-700 text-lg">
        Rightly capture the essence and message of your ad campaign in a way that interests and appeals to people at prices starting at $10/hour.
      </p>

      {/* Introduction */}
      <p className="text-gray-700">
        Advertising is key to promoting your brand and creating a lasting impression. Nimble Auity has over 26+ years of experience providing campaign design services across multiple media. Work with experts, save costs, and get compelling ad campaigns that deliver results.
      </p>

      {/* Campaign Design Services */}
      <h2 className="text-2xl font-semibold text-gray-800">Campaign Design Services We Offer</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li><strong>Newspaper Campaign Design:</strong> Creative campaigns that stand out despite black-and-white print constraints.</li>
        <li><strong>Magazine Campaign Design:</strong> Catchy, competitive designs tailored for magazine layouts and ad ratios.</li>
        <li><strong>Web Campaign Design:</strong> Immersive ads optimized for clicks, conversions, and latest web trends.</li>
        <li><strong>Social Media Campaign Design:</strong> Trend-aware campaigns crafted to appeal to target audiences across platforms.</li>
        <li><strong>Billboard Campaign Design:</strong> Large-scale, precise designs for maximum visibility and impact.</li>
        <li><strong>Yellow Page Campaign Design:</strong> Strategically placed ads for optimal attention and outcomes.</li>
        <li><strong>Email Campaign Design:</strong> Engaging email campaigns that drive sales and conversions.</li>
      </ul>

      {/* Other Services */}
      <h2 className="text-2xl font-semibold text-gray-800">Other Services You Can Benefit From</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Creative Design Services</li>
        <li>Illustrator Services</li>
        <li>Video Editing Services</li>
        <li>Writing Services</li>
      </ul>

      {/* Why Choose Us */}
      <h2 className="text-2xl font-semibold text-gray-800">Why Choose Nimble For Campaign Design Services?</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li><strong>Flexible Pricing Options:</strong> Pay only for the services you opt for—cost-effective campaigns.</li>
        <li><strong>State-of-the-Art Infrastructure:</strong> Access to latest tools, systems, and professional workspaces.</li>
        <li><strong>Operational Transparency:</strong> All strategies and progress communicated clearly.</li>
        <li><strong>Scalability:</strong> Upscale campaigns with additional resources as needed without compromising quality.</li>
        <li><strong>Experienced Team:</strong> Skilled professionals delivering flawless, outcome-oriented campaigns.</li>
        <li><strong>24/7 Availability:</strong> Customer support available across time zones via call, email, or live chat.</li>
      </ul>

      {/* Client Case Studies */}
      <h2 className="text-2xl font-semibold text-gray-800">Client Case Studies</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li><strong>Nimble Edited 100,000 Drone Videos for a Premier Italian Firm:</strong> High-quality, accurate, and timely video editing services.</li>
        <li><strong>Nimble Provided Compelling and Creative Content Writing Services to a Software Provider:</strong> Engaging and creative written content delivered quickly.</li>
      </ul>

      {/* Testimonials */}
      <h2 className="text-2xl font-semibold text-gray-800">Testimonials</h2>
      <p className="text-gray-700 italic mb-4">
        "I want to thank you for the professional way in which you are managing the project and meeting our deadlines."
        <br />
        <span className="font-semibold">— CEO, Technology Company, UK</span>
      </p>

      {/* CTA */}
      <div className="text-center">
        <a
          href="/contact-us"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-semibold transition"
        >
          Get in Touch for Campaign Design Services
        </a>
      </div>

    </div>
    </div>
  );
};

export default CampaignDesign;
