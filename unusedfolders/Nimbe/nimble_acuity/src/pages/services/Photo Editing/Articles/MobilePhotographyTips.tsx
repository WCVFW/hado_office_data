import React from "react";
import PEMainMenu from "../PEmainmenu";

const MobilePhotographyTips: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Mind-blowing Mobile Photography Tips
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Learn essential tips to take your mobile photography skills to the next level.
        </p>
      </section>

      {/* Introduction */}
      <section className="max-w-5xl mx-auto py-12 px-6 space-y-4">
        <p>
          Love capturing Instagram-worthy photos? You don’t need a DSLR. With the right tips and techniques, even a smartphone can produce stunning images.
        </p>
        <p>
          These mobile photography tips will help you drastically improve your shots, no matter your skill level.
        </p>
      </section>

      {/* Essential Tips */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-semibold text-center mb-6">Essential Mobile Photography Tips</h2>
        <ul className="list-disc list-inside space-y-4 max-w-4xl mx-auto">
          <li>
            <strong>Crystal Clear Lens:</strong> Always clean your camera lens to avoid blurs and smudges.
          </li>
          <li>
            <strong>Pay Attention to Light:</strong> Adjust exposure and ensure ample lighting for bright and sharp photos.
          </li>
          <li>
            <strong>Set Focus Manually:</strong> Keep your subject sharp by manually setting the focus instead of relying on autofocus.
          </li>
          <li>
            <strong>Shoot in Portrait Mode:</strong> Achieve dreamy backgrounds with depth-effect software.
          </li>
          <li>
            <strong>Use the Rule of Thirds:</strong> Compose your shot by aligning key elements along the grid lines.
          </li>
          <li>
            <strong>Find the Right Angle:</strong> Move around your subject to discover the perfect perspective.
          </li>
          <li>
            <strong>Zoom with Your Feet:</strong> Avoid digital zoom to maintain image quality.
          </li>
          <li>
            <strong>Search for Leading Lines:</strong> Use natural or structural lines to guide the viewer's eye through your photo.
          </li>
          <li>
            <strong>Use HDR:</strong> Capture high-contrast scenes perfectly with High Dynamic Range mode.
          </li>
          <li>
            <strong>Play with Filters:</strong> Enhance your photos quickly by experimenting with camera filters.
          </li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 px-6 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <h2 className="text-2xl font-semibold mb-4">
          Enhance Your Photos Professionally
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Nimble Acuity offers professional image enhancement services to elevate your photos with perfect composition, color, and clarity.
        </p>
        <button className="px-6 py-3 bg-white text-red-500 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
          Get a Free Consultation
        </button>
      </section>
    </div>
  );
};

export default MobilePhotographyTips;
