import React from "react";
import CSmainmenu from "../CSmainmenu";

const TestimonialVideoEditing: React.FC = () => {
  return (
    <div className="w-full font-sans text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Testimonial Video Editing Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Showcase your business’ best side with high-quality testimonial video editing starting at $10/hour.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <p>
          Looking to present your business through compelling video testimonials? Our team of experts ensures your clients’ voices shine while creating immersive, smooth, and engaging videos that drive business growth.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Testimonial Video Editing Services We Offer</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Storyline Creation Services:</strong> Craft seamless storylines from multiple testimonials to enhance client engagement.
          </li>
          <li>
            <strong>Video Promotion Services:</strong> Optimize videos for maximum reach and visibility across platforms.
          </li>
          <li>
            <strong>Post-production Services:</strong> Add text, graphics, and animation to boost engagement and ROI.
          </li>
          <li>
            <strong>Messaging Support Services:</strong> Highlight your unique selling points and service offerings effectively.
          </li>
          <li>
            <strong>Marketing Services:</strong> Create impactful landing pages and marketing collateral to strengthen your brand.
          </li>
        </ul>
      </section>

      {/* Other Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Other Services You Can Benefit From</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Real Estate Video Editing</li>
          <li>Film & Storyboarding Services</li>
          <li>Corporate Video Editing</li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6 bg-blue-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Our Testimonial Video Editing Services</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Affordable pricing with hourly, FTE, and bulk options.</li>
          <li>ISO/IEC 27001:2022 certified for secure data handling.</li>
          <li>Experienced team with years of specialized expertise.</li>
          <li>Cross-platform video compatibility.</li>
          <li>Scalable services to meet any project size.</li>
          <li>Contextual editing to better showcase your product.</li>
          <li>Professional editing free of transitions and graphic errors.</li>
          <li>Diverse industry experience from healthcare to agriculture and automotive.</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6 bg-blue-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Client Success Stories</h2>
        <ul className="space-y-4">
          <li>
            <p>
              "A leading Swedish film production company relied on our live video editing services for reliable and affordable results."
            </p>
          </li>
          <li>
            <p>
              "A London-based skincare products supplier leveraged our video retouching services effectively and cost-efficiently."
            </p>
          </li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-6 text-center max-w-6xl mx-auto bg-blue-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Get Started with Testimonial Video Editing</h2>
        <p className="mb-6">
          If you want professional, reliable, efficient, and cost-effective testimonial video editing, we’ve got you covered. Elevate your client testimonials today!
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Get a Free Quote
        </button>
      </section>
    </div>
  );
};

export default TestimonialVideoEditing;
