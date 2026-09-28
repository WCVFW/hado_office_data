import React from "react";
import CSmainmenu from "../CSmainmenu";

const WeddingVideoEditing: React.FC = () => {
  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-pink-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Wedding Video Editing Services - UK
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Delight your clients with customized wedding video editing services. Manage editing volumes, scale based on seasonal requirements, and create exceptional wedding video edits.
        </p>
        <button className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition">
          Contact Us
        </button>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <p className="mb-4">
          Planning every shot and capturing every detail of a wedding can be a mammoth task. Nimble Auity helps wedding filmmakers, videographers, bridal show organizers, and luxury hotels in the UK manage post-production efficiently.
        </p>
        <p>
          With 26+ years of video editing experience, our team enables you to focus on capturing more weddings while we handle raw footage, soundtracks, stabilization, and more, ensuring 98% accuracy and quick turnaround.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Professional Wedding Video Editing Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Wedding Highlight Editing",
              desc: "Compact, impactful summaries of the day’s events by meticulously choosing the most memorable moments.",
            },
            {
              title: "Documentary Wedding Video Editing",
              desc: "Comprehensive chronicle of the entire day, capturing every emotion, speech, and dance in storytelling format.",
            },
            {
              title: "Wedding Feature Editing",
              desc: "Shorter than documentaries but longer than highlights, providing a concise yet detailed memory of the wedding.",
            },
            {
              title: "Cinematic Wedding Video Editing",
              desc: "Visually stunning, movie-like versions with advanced editing techniques, special effects, and sound design.",
            },
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-bold text-xl mb-2">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Services / Tools */}
      <section className="py-16 px-6 bg-gray-50 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Services We Cater</h2>
        <p className="mb-6 text-center">
          Video Enhancement, Audio Editing, Color Correction, Adding Text & Titles, Format Conversion, Green Screen Removal, Video File Compression, Music Selection & Audio Sync, Trimming, Video Optimization, Video Stabilization, Video Stitching, Custom Video Effects, Subtitles & Captions, Adding Sound Effects & Music, Color Grading, Culling, Storyboarding, Video Transitions & Effects, Video Compression & Export, Visual Effects (VFX), Voiceover & Dubbing, Montage & Highlight Reels, Archiving & Backup, Reformatting, DVD/Blu-ray Authoring
        </p>
        <h2 className="text-2xl font-semibold text-center mb-4">Tools We Use</h2>
        <p className="text-center">Adobe Premiere Pro, Adobe After Effects, Final Cut Pro, DaVinci Resolve, Silhouette</p>
      </section>

      {/* Workflow */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Our Approach to Wedding Video Postproduction</h2>
        <ol className="list-decimal list-inside space-y-4 max-w-3xl mx-auto">
          <li><strong>Upload Your Footage:</strong> Submit project requirements and raw footage.</li>
          <li><strong>Project Setup:</strong> Organize footage and set up editing project per requirements.</li>
          <li><strong>Video Editing:</strong> Expert editors transform raw footage into a captivating film.</li>
          <li><strong>Review and Edits:</strong> We send the edit for review and make adjustments as needed.</li>
          <li><strong>Approval:</strong> Once satisfied, we finalize the edit.</li>
          <li><strong>Delivery:</strong> Receive the final wedding video in your preferred format.</li>
        </ol>
      </section>

      {/* Why Choose Nimble */}
      <section className="py-16 px-6 bg-pink-50 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Why Choose Nimble Auity for Wedding Video Editing</h2>
        <ul className="list-disc list-inside space-y-4 max-w-4xl mx-auto">
          {[
            "Expert video editors with deep insight into wedding videography.",
            "Scalable services to handle single events or multiple weddings.",
            "Secure and simple portal for easy, safe file transfer.",
            "Collaborative approach ensuring your creative vision is honored.",
            "Robust data security, GDPR and ISO 9001:2015 compliant.",
            "Prompt delivery for faster turnaround times.",
            "Dynamic pricing for cost-effective editing solutions.",
          ].map((reason, idx) => (
            <li key={idx}>{reason}</li>
          ))}
        </ul>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Additional Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">YouTube Video Editing</div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">Family Video Editing</div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">Online Video Editing</div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">360 Video Editing</div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Client Case Studies</h2>
        <div className="space-y-6 text-center">
          <p>
            <strong>Nimble Provided Wedding Video Editing to Dublin-based Client:</strong> Client was thrilled with quality and timeliness, with 90% alignment to requirements.
          </p>
          <p>
            <strong>Nimble Delivered Wedding Video Editing to Ontario-based Client:</strong> Handled multiple wedding video projects with swift delivery and cinematic quality.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-pink-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10">Testimonials</h2>
        <p>
          "Nimble Auity has become a great partner for our business. Their team is professional, prompt, and highly skilled. We look forward to continuing this relationship for years." <br />
          <strong>Vice President, Technology & Services, Asheville, North Carolina</strong>
        </p>
      </section>

      {/* CTA Section */}
      <section className="bg-pink-600 py-16 px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Partner with Nimble Auity for Wedding Video Editing
        </h2>
        <p className="mb-6">
          Focus on capturing timeless moments while we handle the post-production. Fast, reliable, and cost-effective editing solutions.
        </p>
        <button className="bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default WeddingVideoEditing;
