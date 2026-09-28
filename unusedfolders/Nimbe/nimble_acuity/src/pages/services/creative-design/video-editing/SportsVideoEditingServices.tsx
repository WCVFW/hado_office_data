import React from "react";
import CSmainmenu from "../CSmainmenu";

const SportsVideoEditingServices: React.FC = () => {
  return (
    <div className="w-full font-sans text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-green-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Auity Sports Video Editing Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Transform your raw sports footage into high-definition, professional videos. Perfect for players, coaches, and sports enthusiasts alike.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <p>
          With 26+ years of experience, Nimble Auity turns shaky sports footage into stable, high-quality videos. Whether for training, coaching, injury prevention, profiling, or sports highlights, our editors ensure your content is engaging and professional.
        </p>
      </section>

      {/* Services Overview */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Sports Video Editing Services We Offer</h2>
        <p>
          From basic clipping and soundtrack addition to advanced features like Chroma keying, color grading, and motion tracking, our editors handle it all with tools like Adobe Premiere Pro CC, After Effects, and Final Cut Pro X.
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Adding Text, Captions & Subtitles</li>
          <li>Flip, Rotate & Reverse Time Effects</li>
          <li>Color Correction & Advanced Filters</li>
          <li>Audio Editing & Environmental Effects</li>
          <li>Motion Tracking & Animated Transitions</li>
          <li>Picture-in-Picture (PiP) & Chroma Key Compositing</li>
          <li>Slo-mo, Speedup, Slowdown & Video Acceleration</li>
          <li>3D Animated Effects & Titles</li>
          <li>Background Music & Music Score Integration</li>
          <li>Stabilization & Video Sequencing</li>
        </ul>
      </section>

      {/* Why Choose Nimble Auity */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6 bg-green-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Nimble Auity for Sports Video Editing?</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Hundreds of creative filters and video effects</li>
          <li>Accepts any video file format</li>
          <li>Consistent turnaround times</li>
          <li>Dedicated editors ensure timely delivery</li>
          <li>Global services with top-notch editors</li>
          <li>Latest Adobe Premiere Pro, After Effects, Final Cut Pro X</li>
          <li>ISO quality standards and multi-tier checks</li>
          <li>Save up to 60% on operational costs</li>
          <li>Affordable and professional video editing services</li>
        </ul>
      </section>

      {/* Process Flow */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Sports Video Editing Process</h2>
        <ol className="list-decimal ml-6 space-y-4">
          <li><strong>Upload:</strong> Footage uploaded via FTP or Dropbox</li>
          <li><strong>Selection:</strong> Best clips selected</li>
          <li><strong>Timeline:</strong> Timeline creation and sequencing</li>
          <li><strong>Stabilization:</strong> Shaky content stabilized</li>
          <li><strong>Grading:</strong> Color grading applied</li>
          <li><strong>Audio Syncing:</strong> Audio synced accurately</li>
          <li><strong>Music:</strong> Background music checked & adjusted</li>
          <li><strong>Template:</strong> Applied or created as needed</li>
          <li><strong>Output:</strong> Rendered in client’s preferred format</li>
        </ol>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6 bg-green-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Client Testimonials</h2>
        <ul className="space-y-4">
          <li>
            <p>"This is a very customer-friendly video editing company that's great for beginners!"</p>
            <p className="font-semibold">– Amateur Underwater Sports Photographer, New Zealand</p>
          </li>
          <li>
            <p>"One of the best video editing companies out there."</p>
            <p className="font-semibold">– Soccer Player, South Australia</p>
          </li>
          <li>
            <p>"Great work. I can now create very nice video clips from my basketball games."</p>
            <p className="font-semibold">– Basketball Player, Kentucky</p>
          </li>
          <li>
            <p>"Best video editing service for the budget. Nimble Auity has allowed me to edit my video footage and share it with my team."</p>
            <p className="font-semibold">– Swimming Coach, China</p>
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 text-center bg-green-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Outsource Sports Video Editing to Nimble Auity</h2>
        <p className="mb-6">
          Nimble Auity has nearly two decades of unmatched experience in video editing. Share your requirements and get a FREE quote within 24 hours.
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
          Get a Free Quote
        </button>
      </section>
    </div>
  );
};

export default SportsVideoEditingServices;
