import React from "react";
import CSmainmenu from "../CSmainmenu";

const OnlineVideoEditingServices: React.FC = () => {
  return (
    <div className="w-full font-sans text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-purple-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Auity Online Video Editing Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Enhance your video clips and raw footage into captivating visuals with our professional online video editing services.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <p>
          Are you battling skill gaps, understaffed, or using free software for creating high-quality promotional videos? Nimble Auity delivers professional online video editing services for businesses of all sizes, helping you save time, reduce overhead, and scale quickly while creating exceptional visuals.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Online Video Editing Services We Offer</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Wedding Video:</strong> Quick, creative, and enticing edits for blissful nuptials.</li>
          <li><strong>Real Estate Video Editing:</strong> Immersive videos to create strong impact.</li>
          <li><strong>360 Degree Video Editing:</strong> Advanced tools to enhance panoramic visuals.</li>
          <li><strong>Product Video Editing:</strong> Showcase products and features clearly and engagingly.</li>
          <li><strong>Corporate Video Editing:</strong> Enhance crucial corporate videos professionally.</li>
          <li><strong>GoPro Video Editing:</strong> Add subtitles, sound effects, and custom elements to GoPro videos.</li>
          <li><strong>Online YouTube Video Editing:</strong> Highlight creative elements and unleash video potential.</li>
          <li><strong>Online Music Video Editing:</strong> Restore, edit, and enhance music videos with color grading and transitions.</li>
        </ul>
        <p className="mt-4">
          Other services: Holiday videos, Event videos, Family videos, Home videos, Short video clippings, Video brochures, Movie videos, Video interviews.
        </p>
      </section>

      {/* Process */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6 bg-purple-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Our Approach to Edit Videos Online</h2>
        <ol className="list-decimal ml-6 space-y-4">
          <li>Upload raw footage, soundtrack, and brief to our secure server.</li>
          <li>Editing is carried out strictly according to the client brief.</li>
          <li>If no soundtrack is provided, we use copyright-free music.</li>
          <li>Add titles, captions, transitions; stabilize and normalize the video.</li>
          <li>Upload final video on secure server for review.</li>
          <li>Project completes once client signs off on final delivery.</li>
        </ol>
      </section>

      {/* Tools */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Online Video Editing Software We Leverage</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Adobe After Effects CC</li>
          <li>Adobe Premiere Pro CC</li>
          <li>Camtasia Studio</li>
          <li>Edius Pro</li>
          <li>Final Cut Pro X</li>
          <li>Pinnacle Studio 20 Ultimate</li>
          <li>Sony Vegas Pro</li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6 bg-purple-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Nimble Auity Online Video Editing Company?</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Skilled Team:</strong> Professional editors with extensive experience across industries.</li>
          <li><strong>Personalized Services:</strong> Customized video editing delivered with quick turnaround.</li>
          <li><strong>Data Security:</strong> Secure server ensures all footage is confidential and safe.</li>
          <li><strong>Multiple Video Formats:</strong> Stop motion, time-lapse, 2D/3D animation, 360-degree panorama, and more.</li>
          <li><strong>Quality Standards:</strong> Adherence to SLA, ISO-compliant, 24/7 support.</li>
          <li><strong>Advanced Technology:</strong> Latest editing tools and system integrators ensure superior outputs.</li>
          <li><strong>Competitive Pricing:</strong> Pay only for resources and project complexity.</li>
        </ul>
      </section>

      {/* Additional Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Additional Services You Can Benefit From</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Artwork Services</li>
          <li>Graphic Design Services</li>
          <li>Illustration Services</li>
          <li>Animation Services</li>
          <li>Video Editing Services</li>
          <li>Audio Editing Services</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 text-center bg-purple-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Transform Your Videos into Cinematic Visuals</h2>
        <p className="mb-6">
          Leverage Nimble Auity’s expertise to create captivating videos that scale quickly, minimize overheads, and leave a lasting impression on your audience.
        </p>
        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
          Contact Us Today
        </button>
      </section>

      {/* Customer Success */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Customer Success Stories</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Video Clipping Services:</strong> Italian client created a unique stock library with Nimble Auity’s help.
          </li>
          <li>
            <strong>Live Video Editing:</strong> Swedish film production house received fast and cost-effective services.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default OnlineVideoEditingServices;
