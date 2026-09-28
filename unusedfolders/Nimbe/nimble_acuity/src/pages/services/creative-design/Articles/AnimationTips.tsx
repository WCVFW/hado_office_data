import React from "react";
import CSmainmenu from "../CSmainmenu";

const AnimationTips: React.FC = () => {
  const tips = [
    {
      title: "Planning is the Key",
      description:
        "A successful animator sticks to the simple rules. Designing a workflow and creating an outline ensures on-time delivery and clarity throughout the project. Proper planning charts the timeline and prevents loss of creative ideas.",
    },
    {
      title: "Grab the Attention",
      description:
        "The first few seconds are crucial. Use visual cues, motion, and simplicity to captivate viewers immediately. Especially for short videos, these moments decide whether the audience continues watching.",
    },
    {
      title: "Don't Over Animate",
      description:
        "Animating constantly is not always effective. Simple scenes can communicate mood and emotion effectively. Over-animating can ruin the viewer experience.",
    },
    {
      title: "When Things Complicate, Start Again!",
      description:
        "Complicated scenes can confuse. Save your work, start over, and simplify. This ensures clarity and better results.",
    },
    {
      title: "Timing is the Key",
      description:
        "Timing governs the speed of action and the audience's perception. Perfectly timed actions make animations realistic. Too fast or too slow can confuse or disengage viewers.",
    },
    {
      title: "Ask for Feedback",
      description:
        "Even skilled animators benefit from external feedback. It helps refine creativity and ensures animations resonate with viewers.",
    },
    {
      title: "Silence is Important",
      description:
        "Quiet moments can amplify immersion. Properly used, silence conveys thought, emotion, and narrative pacing.",
    },
    {
      title: "Decide the Ending First",
      description:
        "Craft the ending before plotting the mid-story. A strong conclusion keeps viewers engaged and ensures a satisfying narrative arc.",
    },
  ];

  const tools = [
    "3DS MAX",
    "Adobe After Effects",
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Anim8or",
    "Anime Studio",
    "Autodesk Maya",
    "DrawPlus",
    "Flash MX",
    "LightWave 3D",
  ];

  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Make Your Animation Realistic with 8 Indigenous Animation Tips
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Nimble Auity provides top-tier animation services that combine creative storytelling with cutting-edge technology. Follow our tips to elevate your animation projects.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <p className="mb-4">
          The animation industry has grown rapidly thanks to digital technology. Both traditional and computer-generated animation are now widely accepted across industries. High-resolution, realistic animation is expected by audiences, creating pressure on animators to deliver exceptional work.
        </p>
        <p>
          To help animators succeed, Nimble Auity shares eight key tips and tricks for crafting realistic, engaging animations.
        </p>
      </section>

      {/* Tips Section */}
      <section className="py-16 px-6 bg-gray-50 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          8 Tips for Realistic Animation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tips.map((tip, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-3">{tip.title}</h3>
              <p className="text-gray-700">{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">Popular Animation Tools</h2>
        <p className="mb-6 text-center">
          Our animators leverage the latest tools to deliver high-quality, realistic animations.
        </p>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
          {tools.map((tool, idx) => (
            <li key={idx} className="bg-blue-100 py-3 rounded font-medium">{tool}</li>
          ))}
        </ul>
      </section>

      {/* Nimble Auity Services Section */}
      <section className="py-16 px-6 bg-blue-50 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Choose Nimble Auity for Realistic Animation Services</h2>
        <p className="mb-6">
          Nimble Auity delivers high-quality animation services including 2D, 3D, Animatics, Flash, and Whiteboard animation. Our skilled animators use state-of-the-art tools and workflows to provide fast turnaround, realistic results, and high-resolution outputs.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Get a Free Consultation
        </button>
      </section>
    </div>
  );
};

export default AnimationTips;
