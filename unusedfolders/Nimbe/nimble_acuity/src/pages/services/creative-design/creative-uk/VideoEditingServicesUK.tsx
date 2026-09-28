import React from "react";
import CSmainmenu from "../CSmainmenu";

const VideoEditingServicesUK: React.FC = () => {
  const services = [
    "Social Media Video Editing",
    "Wedding Video Editing",
    "Real Estate Video Editing",
    "Corporate Video Editing",
    "Educational Video Editing",
    "Sports Highlight Video Editing",
    "Travel Vlog Video Editing",
    "Podcast Video Editing",
    "Talking Head Video Editing",
    "Motion Graphics Design",
    "GoPro Video Editing",
    "Testimonials Video Editing",
    "E-Commerce Product Video Editing",
    "Video Retouching",
    "Rotoscoping",
    "Video Montage",
    "Video Post Processing",
    "Video Post-Production",
  ];

  const additionalServices = [
    "Graphic Design Services",
    "Illustration Services",
    "Animation Services",
    "DTP Services",
  ];

  const benefits = [
    "Years of Expertise: Two decades of industry experience with creative finesse and market insight.",
    "Rapid Turnaround Times (TATs): Content ready in 24-48 hours, keeping schedules on track.",
    "High-Volume Capabilities: Manage over 1000 videos daily without quality compromise.",
    "ISO-Certified Excellence: Guaranteed error-free, high-quality output adhering to international standards.",
    "Cutting-Edge Approach: Utilizing latest technology and best practices in video editing.",
    "Global Trust: 18,000+ clients worldwide trust Nimble Auity for exceptional results.",
    "Dedicated Support: Transparent communication and unwavering support throughout your project.",
    "Scalable Solutions: Ramp up or down as per your project requirements efficiently.",
    "Tailored Pricing: Flexible, transparent pricing models for maximum ROI.",
  ];

  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Auity Video Editing Services - UK
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Supercharge your creative workflow with expert video editing services. Overcome resource constraints, save time, and amplify your creative potential.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <p className="mb-4">
          The relentless clock of deadlines often hinders creativity and attention to detail, threatening the timely execution of marketing campaigns and product launches. Managing video production costs while ensuring professionalism can be daunting for businesses of all sizes.
        </p>
        <p>
          Nimble Auity offers tailored video editing solutions to save time, reduce resource constraints, and amplify your creative potential. Collaborate with our skilled professionals using cutting-edge technology to ensure your video content exceeds industry standards.
        </p>
      </section>

      {/* Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Our Video Editing Solutions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-bold text-xl mb-2">{service}</h3>
              <p className="text-gray-700">
                Expert editing, enhancement, and polishing of {service.toLowerCase()} tailored for your business needs.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 px-6 bg-gray-50 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Process We Follow</h2>
        <ol className="list-decimal list-inside space-y-4 max-w-3xl mx-auto">
          <li><strong>Defining the Scope:</strong> Understand brand identity and customer base.</li>
          <li><strong>Project Setup:</strong> Establish environment and communication channels.</li>
          <li><strong>Video Snipping:</strong> Trim and select relevant content for impactful video.</li>
          <li><strong>Review and Edits:</strong> Ensure quality and alignment with brand.</li>
          <li><strong>Approval:</strong> Feedback incorporated, final version approved.</li>
          <li><strong>Delivery:</strong> Securely deliver video in desired format and timeline.</li>
        </ol>
      </section>

      {/* Software */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">Software We Leverage</h2>
        <p className="text-center">Adobe Premiere Pro, Adobe After Effects, Final Cut Pro, DaVinci Resolve, Silhouette</p>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-6 bg-blue-50 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Additional Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {additionalServices.map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">{service}</div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Why Choose Nimble Auity</h2>
        <ul className="list-disc list-inside space-y-4 max-w-4xl mx-auto">
          {benefits.map((benefit, idx) => (
            <li key={idx}>{benefit}</li>
          ))}
        </ul>
      </section>

      {/* Client Case Studies */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Client Case Studies</h2>
        <div className="space-y-6 text-center">
          <p>
            <strong>Nimble Provided 2D Animation to UK Children's Book Author:</strong> Delivered imaginative animations efficiently, meeting tight deadlines.
          </p>
          <p>
            <strong>Nimble Delivered Rotoscoping Services for UK Production House:</strong> Provided cinematic-quality results with fast turnaround.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10">Testimonials</h2>
        <p>
          "Nimble Auity provided fast, efficient, and high-quality video editing services. Their team was cooperative and professional throughout the project." <br />
          <strong>Owner, Portrait and Background Editing Company</strong>
        </p>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16 px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Partner with Nimble Auity for Expert Video Editing
        </h2>
        <p className="mb-6">
          Focus on creating content while we handle post-production. Professional, scalable, and cost-effective solutions for your business.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default VideoEditingServicesUK;
