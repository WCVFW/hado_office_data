import React from "react";
import CSmainmenu from "../CSmainmenu";

const DroneVideoEditingTips: React.FC = () => {
  const tips = [
    {
      title: "Time Adjustments",
      description:
        "Use speed ramping and slow-motion to control pacing and highlight key moments, creating dynamic rhythms that engage viewers."
    },
    {
      title: "Layering Audio to Add Depth",
      description:
        "Combine ambient sounds, background music, and effects to create a rich and immersive soundscape that complements visuals."
    },
    {
      title: "Use of Text and Graphics",
      description:
        "Add titles, subtitles, and graphic overlays like icons or maps for context, ensuring font style, size, and color maintain readability."
    },
    {
      title: "Look-up Tables (LUTs) for Consistent Color",
      description:
        "Apply LUTs for cohesive color grading and cinematic palettes, enhancing the mood and polish of your drone footage."
    },
    {
      title: "Optimize for Multiple Platforms",
      description:
        "Adjust aspect ratios, video lengths, and content styles for each platform (Instagram, YouTube, TikTok) to maximize engagement and reach."
    }
  ];

  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Tips to Edit Drone Videos Flawlessly
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Nimble Auity provides professional guidance on transforming raw drone footage into cinematic masterpieces with precision and creativity.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <p className="mb-4">
          Drones allow you to capture stunning aerial perspectives, but true artistry comes in post-production. Mastering video editing transforms raw footage into compelling visual narratives.
        </p>
        <p>
          From adjusting pacing and layering audio to color grading and platform optimization, these techniques ensure your drone videos are engaging and professional.
        </p>
      </section>

      {/* Tips Section */}
      <section className="py-16 px-6 bg-gray-50 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Drone Video Editing Tips for Flawless Visuals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tips.map((tip, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-2">{tip.title}</h3>
              <p className="text-gray-700">{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Transform Your Drone Videos with Nimble Auity</h2>
        <p className="mb-4">
          No matter how extraordinary your footage, editing is the key to crafting compelling stories. Nimble Auity’s experts apply advanced techniques to create polished, engaging drone videos that leave lasting impressions.
        </p>
        <p className="mb-6">
          Every edit—color grading, pacing, or audio layering—enhances your narrative, giving your audience an immersive experience.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Contact Us for Professional Drone Video Editing
        </button>
      </section>
    </div>
  );
};

export default DroneVideoEditingTips;
