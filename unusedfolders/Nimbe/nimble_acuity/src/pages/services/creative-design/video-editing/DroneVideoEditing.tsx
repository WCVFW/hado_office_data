import React from "react";
import CSmainmenu from "../CSmainmenu";

const DroneVideoEditing: React.FC = () => {
  return (
    <div className="w-full font-sans text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-purple-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Drone Video Editing Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Get professionally edited drone videos starting at just $12/hour, perfect for social media and other media channels.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <p>
          Drone videos elevate video production to new heights. Outsource2india (O2I) provides professional drone video editing services using advanced tools and creative expertise, delivering high-quality, cinematic footage without breaking your budget.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Drone Video Editing Services We Offer</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Color Correction:</strong> Adjust colors to make footage rich, natural, and visually appealing.</li>
          <li><strong>Video Effects:</strong> Add cinematic effects like time-lapse, blur, and special effects.</li>
          <li><strong>Video Stabilization:</strong> Remove shakes caused by wind or drone movement for smooth videos.</li>
          <li><strong>Caption & Music Addition:</strong> Enhance storytelling and audience engagement.</li>
        </ul>
      </section>

      {/* Editing Process */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6 bg-purple-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Drone Video Editing Process</h2>
        <ul className="list-decimal ml-6 space-y-2">
          <li>Upload your drone footage via secure channel.</li>
          <li>Assessment of shaky movements, color inaccuracies, and unwanted details.</li>
          <li>Selection and integration of suitable audio to maintain storytelling.</li>
          <li>Editing using versatile tools to remove unwanted segments.</li>
          <li>Maintaining 4K video quality while trimming and enhancing footage.</li>
          <li>Add cinematic effects as needed.</li>
          <li>Expert review to ensure flawless output.</li>
          <li>Drafts sent for client review and finalization.</li>
          <li>Exporting in preferred format and delivery via secure channel.</li>
        </ul>
      </section>

      {/* Other Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Other Services You Can Benefit From</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>360° Wedding Videos</li>
          <li>Corporate Video Editing</li>
          <li>Real Estate Drone Video Editing</li>
          <li>Holiday Video Editing</li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6 bg-purple-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Why Outsource Drone Video Editing to O2I</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Cost-effective, customizable services for any project size.</li>
          <li>ISO 9001:2015 certified drone video editing services provider.</li>
          <li>High-quality editing for professional and personal footage.</li>
          <li>Quick turnaround time ensuring deadlines are met.</li>
          <li>Scalable services for larger or ongoing projects.</li>
          <li>100% data security and strict handling protocols.</li>
          <li>Experienced in-house and contract editors with 10+ years of expertise.</li>
          <li>State-of-the-art infrastructure and 4K editing capabilities.</li>
          <li>Round-the-clock support for clients worldwide.</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6 bg-purple-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Client Success Stories</h2>
        <ul className="space-y-4">
          <li>
            <p>"O2I delivered live video editing services quickly for a Swedish film production house."</p>
          </li>
          <li>
            <p>"An Italian wedding photographer outsourced 70 wedding video edits at 70% lower cost with high-quality output."</p>
          </li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-6 text-center max-w-6xl mx-auto bg-purple-200 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Get Started with Drone Video Editing</h2>
        <p className="mb-6">
          Outsource your drone video editing to professionals and get stunning, high-quality videos for marketing and personal use.
        </p>
        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
          Get a Free Quote
        </button>
      </section>
    </div>
  );
};

export default DroneVideoEditing;
