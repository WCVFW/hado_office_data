import React from "react";
import CSmainmenu from "../CSmainmenu";

const VideoTaggingServices: React.FC = () => {
  return (
    <div className="w-full font-sans text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-green-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Auity Video Tagging Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Embed precise keywords into your videos and make them discoverable to a wider audience. Professional video tagging services starting at $10/hour.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <p>
          Want to boost your video visibility and reach your target audience more effectively? Nimble Auity provides meticulous and efficient video tagging services to ensure your content is found via search engines and internal search on your website.
        </p>
      </section>

      {/* Video Tagging Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Video Tagging Services We Offer</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Video Classification Services:</strong> Train apps or systems to detect specific video categories, making your videos more searchable and trendy.</li>
          <li><strong>Emotion Detection:</strong> Detect emotions of people in videos using AI-powered tagging and labeling.</li>
          <li><strong>Video Annotation:</strong> Professionally annotate videos for better content organization without wasting your time.</li>
          <li><strong>Visual Search Services:</strong> Tag objects, faces, and scenes to enhance search relevance across platforms.</li>
          <li><strong>Precise Keyword Tagging:</strong> Assign accurate keywords to every object in your videos for maximum discoverability.</li>
        </ul>
      </section>

      {/* Other Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Other Services You Can Benefit From</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Corporate Video Editing</li>
          <li>Film & Storyboarding Services</li>
          <li>Motion Graphics Services</li>
        </ul>
      </section>

      {/* Why Choose Nimble */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6 bg-green-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Nimble Auity for Video Tagging?</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Affordable pricing options for all budgets.</li>
          <li>Better visibility to your target audience.</li>
          <li>Enhanced search engine ranking on Google and other search engines.</li>
          <li>Flexibility to scale resources according to your project needs.</li>
          <li>Improved media management for faster access to videos.</li>
          <li>Better user profiling for targeted engagement on your platform.</li>
          <li>Use of latest video tagging tools and technologies.</li>
          <li>High-end data security to protect your files.</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6 bg-green-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Client Success Stories</h2>
        <ul className="space-y-4">
          <li>
            <p>"Italian Wedding Photographer outsourced editing of 70 weddings to Nimble Auity, achieving 70% cost savings."</p>
          </li>
          <li>
            <p>"A major skincare products distributor in London leveraged Nimble Auity’s video retouching services efficiently and cost-effectively."</p>
          </li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-6 text-center max-w-6xl mx-auto bg-green-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Outsource Video Tagging to Nimble Auity</h2>
        <p className="mb-6">
          Get professional, reliable, efficient, and cost-effective video tagging services with Nimble Auity. Enhance discoverability, SEO, and engagement for your videos today.
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
          Get a Free Quote
        </button>
      </section>
    </div>
  );
};

export default VideoTaggingServices;
