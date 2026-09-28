import React from "react";
import CSmainmenu from "../CSmainmenu";

const ProductVideoEditing: React.FC = () => {
  return (
    <div className="w-full font-sans text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Product Video Editing Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Get access to high-quality product video editing services starting at just $10/hour.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <p>
          Present your product in the best possible light. Outsource2india (O2I) provides professional product video editing services using the latest software and techniques, transforming raw footage into compelling, high-quality product videos.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Product Video Editing Services We Offer</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Product Demo Video Creation:</strong> Engaging demo videos for customers and investors.</li>
          <li><strong>Product Promotion Video Creation:</strong> High-impact promotional videos for marketing campaigns.</li>
          <li><strong>Product Life-cycle Video Creation:</strong> Showcase your product’s journey from inception to market.</li>
          <li><strong>Color Grading:</strong> Enhance your video’s tone, contrast, saturation, and more.</li>
          <li><strong>Special Effects:</strong> Add creative effects, overlays, and transitions for impact.</li>
          <li><strong>Soundtrack Editing:</strong> Edit and enhance audio tracks for professional-quality sound.</li>
          <li><strong>Aspect Ratio Modification:</strong> Optimize for multiple platforms (4:3, 16:9, etc.).</li>
          <li><strong>Video Compositing:</strong> Merge multiple clips into a seamless final video.</li>
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
        <h2 className="text-2xl font-semibold mb-4">Why Outsource Product Video Editing to O2I</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Affordable pricing options with hourly, FTE, and bulk discounts.</li>
          <li>Contextual editing to highlight product features and brand value.</li>
          <li>Professional editing free from faulty transitions and errors.</li>
          <li>Diverse video editing expertise across industries like medical, automotive, and agriculture.</li>
          <li>Incorporation of latest video editing techniques for contemporary results.</li>
          <li>High-performing videos optimized for multiple devices and platforms.</li>
          <li>Raw footage transformed into polished, high-quality videos.</li>
          <li>Quick turnaround times with guaranteed quality.</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6 bg-blue-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Client Success Stories</h2>
        <ul className="space-y-4">
          <li>
            <p>
              "O2I provided fast and high-quality live video editing services to a Swedish film production house."
            </p>
          </li>
          <li>
            <p>
              "A major London-based skincare product distributor leveraged our video retouching services at affordable rates."
            </p>
          </li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-6 text-center max-w-6xl mx-auto bg-blue-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Get Started with Product Video Editing</h2>
        <p className="mb-6">
          Transform your product videos into powerful marketing assets. Professional, efficient, and cost-effective services are just a click away!
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Get a Free Quote
        </button>
      </section>
    </div>
  );
};

export default ProductVideoEditing;
