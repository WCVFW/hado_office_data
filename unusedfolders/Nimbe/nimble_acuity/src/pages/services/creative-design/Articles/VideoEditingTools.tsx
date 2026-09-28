import React from "react";
import CSmainmenu from "../CSmainmenu";

const VideoEditingTools: React.FC = () => {
  const tools = [
    {
      title: "Adobe Premiere Pro",
      description:
        "Industry-standard tool with a comprehensive suite of features. Integrated with Adobe Creative Cloud, it offers advanced trimming, multi-cam editing, and dynamic video content creation."
    },
    {
      title: "Final Cut Pro X",
      description:
        "MacOS-exclusive software known for its magnetic timeline and immersive 360-degree editing. Advanced color grading and background rendering help prioritize storytelling."
    },
    {
      title: "DaVinci Resolve",
      description:
        "All-in-one platform for color grading, motion graphics, VFX, audio post-production, and editing. Collaborative features enable technically polished and visually stunning videos."
    },
    {
      title: "Avid Media Composer",
      description:
        "Preferred in television and filmmaking for large-scale productions. Offers collaborative editing, media management, and precision editing for high-quality output."
    },
    {
      title: "Sony Vegas Pro",
      description:
        "Professional software with motion tracking, video stabilization, and nested timelines. Supports multiple file formats and real-time editing preferences."
    },
    {
      title: "HitFilm Pro",
      description:
        "Combines video editing and visual effects, including 3D compositing, particle simulation, and customizable effects. Perfect for cinematic storytelling."
    },
    {
      title: "Lightworks",
      description:
        "Non-linear editing system known for precision trimming. Features multi-cam editing, real-time effects, and efficient rendering for versatile video production."
    },
    {
      title: "Shotcut",
      description:
        "Open-source tool supporting Mac OS, Linux, and Windows. Offers multitrack timeline compatibility, video filters, and advanced audio editing for both beginners and pros."
    },
    {
      title: "CyberLink PowerDirector",
      description:
        "Comprehensive tool with dynamic keyframing, motion tracking, 360-degree editing, and fast rendering. Ideal for producing engaging and interactive videos."
    },
    {
      title: "Filmora",
      description:
        "User-friendly editing suite combining audio ducking, split screen, transitions, and effects. Drag-and-drop functionality makes it accessible for all skill levels."
    }
  ];

  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-purple-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          10 Powerful Video Editing Tools
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Discover Nimble Auity’s top video editing tools that empower professionals to create cinematic, engaging, and high-quality videos.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <p className="mb-4">
          The demand for professional-grade video content is growing rapidly. High-quality post-production transforms raw footage into impactful narratives that engage audiences.
        </p>
        <p>
          Leveraging the right video editing tools enhances storytelling, streamlines workflows, and ensures that your content stands out in a crowded digital landscape.
        </p>
      </section>

      {/* Tools Section */}
      <section className="py-16 px-6 bg-gray-50 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Top 10 Video Editing Software
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-2">{tool.title}</h3>
              <p className="text-gray-700">{tool.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Modernize Your Video Editing with Nimble Auity
        </h2>
        <p className="mb-4">
          Nimble Auity offers professional video editing services using industry-standard tools. From corporate presentations to cinematic content, we bring your vision to life.
        </p>
        <p className="mb-6">
          Our team ensures high-quality post-production, precise color grading, and immersive storytelling, helping your videos achieve maximum engagement.
        </p>
        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
          Contact Us for Video Editing Services
        </button>
      </section>
    </div>
  );
};

export default VideoEditingTools;
