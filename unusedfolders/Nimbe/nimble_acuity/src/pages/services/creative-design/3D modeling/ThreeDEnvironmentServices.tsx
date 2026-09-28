import React from "react";
import CSmainmenu from "../CSmainmenu";

const ThreeDEnvironmentServices: React.FC = () => {
  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble 3D Environment Design Services
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Transform concepts into immersive 3D environments that engage and inspire. Access consolidated technical expertise and artistic flair with our 3D Environment Design Services.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <p className="mb-4">
          Struggling to find reliable resources for your 3D environment design requirements? Nimble Auity delivers high-quality 3D environments for video games, movies, and architectural visualizations, ensuring adherence to timelines and budgets.
        </p>
        <p>
          Our talented professionals leverage cutting-edge software and world-class infrastructure to deliver captivating results while ensuring business continuity, data confidentiality, and consistent communication.
        </p>
      </section>

      {/* 3D Environment Design Solutions */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">3D Environment Design Solutions We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "3D Stylized Environment Services",
              desc: "Create desired stylizations, moods, or atmospheres across multiple themes such as futuristic, fantasy, and more.",
            },
            {
              title: "3D Cartoon Environment Services",
              desc: "Vibrant cartoon environments with theme-based locations, colorful backgrounds, conceptual scenery, and more.",
            },
            {
              title: "3D Environment Props Services",
              desc: "Intricately designed props such as foliage, vehicles, and architectural elements that enhance the overall environment.",
            },
            {
              title: "3D Photorealistic Environment Services",
              desc: "Realistic virtual environments with detailed textures, lighting, and atmospheric effects for maximum immersion.",
            },
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-bold text-xl mb-2">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Our 3D Environment Modeling Process</h2>
        <ol className="list-decimal list-inside space-y-4 max-w-3xl mx-auto">
          <li><strong>Planning:</strong> Gather all necessary project information to understand goals and requirements.</li>
          <li><strong>Prototyping:</strong> Create rough drafts of the 3D environment for client approval.</li>
          <li><strong>Modeling & Texturing:</strong> Build detailed 3D environments based on approved prototypes.</li>
          <li><strong>QA & Optimization:</strong> Conduct rigorous quality checks and optimize for high performance.</li>
          <li><strong>Delivery of Project:</strong> Provide the final project in required formats.</li>
        </ol>
      </section>

      {/* Software */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-6">3D Environment Creation Software We Leverage</h2>
        <p className="max-w-4xl mx-auto mb-4">
          Blender, Fusion Software, Marmoset, Maya, Nuke, Rizomuv, Substance 3D Painter, Unity, Unreal Engine, ZBrush
        </p>
      </section>

      {/* Industries */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Industries We Serve</h2>
        <div className="grid md:grid-cols-2 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">3D Environment Modeling for Games</div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">3D Environment for Architectural Visualization</div>
        </div>
      </section>

      {/* Why Choose Nimble */}
      <section className="py-16 px-6 bg-blue-50 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Why Choose Nimble Auity?</h2>
        <ul className="list-disc list-inside space-y-4 max-w-4xl mx-auto">
          {[
            "Business continuity through robust infrastructure and global delivery centers.",
            "Creative process control with collaborative approach and multiple delivery locations.",
            "Trust and compliance with NDAs and GDPR adherence for clients in Europe.",
            "Dedicated team of highly skilled 3D artists, animators, and creative directors.",
            "Scalable solutions to ramp up or down resources as needed.",
            "Quick turnaround times via streamlined workflows and experienced teams.",
            "Round-the-clock support across multiple channels.",
            "Cost-effective services with flexible pricing structures and up to 60% savings.",
          ].map((reason, idx) => (
            <li key={idx}>{reason}</li>
          ))}
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Client Success Stories</h2>
        <div className="space-y-6 text-center">
          <p>
            <strong>Nimble Provided 3D Modeling Services for European Sports Accessory Manufacturer:</strong> Delivered 3D models for their catalog with fast turnaround times.
          </p>
          <p>
            <strong>Nimble Delivered 3D Animation & Modeling for Scandinavian Medical Research Company:</strong> 20-member team of artists and animators created fully functional videos with exceptional accuracy.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10">Testimonials</h2>
        <p>
          "The quality of artwork delivered during the trial period was exceptional and helped us decide on our new partner." <br />
          <strong>Director - Operations, Leading pharmaceutical company, Netherlands</strong>
        </p>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Partner with Nimble Auity for 3D Environment Design
        </h2>
        <p className="mb-6">
          Delivering high-quality, cohesive, and captivating virtual environments. Fast, reliable, and cost-effective solutions.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default ThreeDEnvironmentServices;
