import React from "react";
import CSmainmenu from "../CSmainmenu";

const VideoEditingTips: React.FC = () => {
  const tips = [
    {
      title: "Pick the Right Hardware",
      description:
        "A fast computer with reliable graphics card, high RAM, and fast storage allows you to focus on storytelling instead of software delays, providing a smoother editing experience.",
    },
    {
      title: "Pick the Right Video Editing Software",
      description:
        "Select software that complements your style. Popular options include Adobe Premiere Pro, Avid Media Composer, Final Cut Pro, and DaVinci Resolve.",
    },
    {
      title: "Learn Keyboard Shortcuts",
      description:
        "Professional editors maximize efficiency by using keyboard shortcuts to perform most operations. This saves time for creativity and improves workflow.",
    },
    {
      title: "Concentrate on Your Story",
      description:
        "Every cut, transition, sound, and graphic should serve the story. Think like a storyteller and ensure your edits convey the intended message effectively.",
    },
    {
      title: "Learn Video Editing Terminology",
      description:
        "Knowing terms like J-cut, L-cut, jump cut, match action, montage, and cutting on action helps you communicate effectively with clients and other professionals.",
    },
    {
      title: "Good Music Heals Everything (Almost)",
      description:
        "Background music sets the tone and mood. Invest in quality tracks or royalty-free music to enhance engagement and make your video feel alive.",
    },
    {
      title: "Export in the Right Format",
      description:
        "Consider codec, resolution, frame rate, and bit rate based on target devices. Most viewers watch on mobile, so optimize accordingly for the best experience.",
    },
  ];

  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          7 Video Editing Tips and Tricks to Make Your Videos Enjoyable
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Nimble Auity provides professional insights to help you create engaging and enjoyable videos that captivate your audience.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <p className="mb-4">
          Video marketing is transforming how businesses connect with audiences. Relevant, engaging, and concise videos can dramatically increase click rates and viewer retention. Effective video editing ensures your message is conveyed clearly and enjoyably.
        </p>
        <p>
          Nimble Auity offers tips and tricks to help video editors enhance their craft, ensuring high-quality results for any project or platform.
        </p>
      </section>

      {/* Tips Section */}
      <section className="py-16 px-6 bg-gray-50 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Top 7 Professional Video Editing Tips & Tricks
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

      {/* Conclusion Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Create Engrossing & Enjoyable Videos with Nimble</h2>
        <p className="mb-4">
          Nimble Auity delivers high-quality video editing and creative services globally. Our expert team, state-of-the-art tools, and multiple delivery centers ensure professional results with quick turnaround times.
        </p>
        <p className="mb-6">
          Whether you need full project handling or specific editing tasks, Nimble provides flexible solutions tailored to your needs.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Contact Us for Video Editing Solutions
        </button>
      </section>
    </div>
  );
};

export default VideoEditingTips;
