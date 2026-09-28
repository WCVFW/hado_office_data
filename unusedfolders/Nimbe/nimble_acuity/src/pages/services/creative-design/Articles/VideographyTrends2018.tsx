import React from "react";
import CSmainmenu from "../CSmainmenu";

const VideographyTrends2018: React.FC = () => {
  const trends = [
    {
      title: "4K Videos",
      description:
        "With 4K resolution, devices like smartphones, DSLRs, and GoPros allow videographers to capture stunningly detailed visuals. The H.265 codec facilitates easier storage and editing."
    },
    {
      title: "Drone Videos",
      description:
        "Remote-controlled drones make aerial shots accessible to amateurs and professionals alike, providing perspectives previously only possible with helicopters or planes."
    },
    {
      title: "Short Videos",
      description:
        "Audience attention is shorter, making concise videos more effective. Platforms like Vine, Instagram, and YouTube reinforce the trend for one-minute impactful content."
    },
    {
      title: "Wi-Fi Enabled Cameras",
      description:
        "Cameras with built-in Wi-Fi and Bluetooth allow seamless file transfer and connectivity with apps, simplifying the workflow for modern videographers."
    },
    {
      title: "Use of Steadicams",
      description:
        "Affordable and innovative gimbals allow stable footage while walking or running, making cinematic shots achievable for amateurs."
    },
    {
      title: "Shallow Depth of Field",
      description:
        "This technique emphasizes the subject by keeping it in sharp focus while softly blurring the background, creating professional-looking videos effortlessly."
    },
    {
      title: "Time Lapse",
      description:
        "Stationary and hyper-lapse techniques allow capturing motion over time, enabling creative storytelling with dynamic visuals."
    },
    {
      title: "Entry of New Brands/Cameras",
      description:
        "The growing amateur market opens opportunities for new camera brands, offering competitive and innovative products to videographers."
    },
    {
      title: "Advanced Software",
      description:
        "Powerful and accessible video editing tools, like Adobe Premiere, Final Cut Pro, and free alternatives like Lightworks, allow professionals and beginners to edit with ease."
    },
    {
      title: "Post Production Services",
      description:
        "Businesses increasingly rely on post-production services to ensure high-quality output, refining raw footage into polished final videos."
    }
  ];

  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          10 Emerging Videography Trends 2018
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Explore Nimble Auity’s insights into the latest videography trends, empowering professionals and enthusiasts to create captivating videos.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <p className="mb-4">
          Technological advancements have democratized videography. From handheld devices to drones, accessible tools now allow both amateurs and professionals to capture cinematic footage.
        </p>
        <p>
          Staying updated with emerging trends is crucial to producing impactful, engaging, and high-quality video content.
        </p>
      </section>

      {/* Trends Section */}
      <section className="py-16 px-6 bg-gray-50 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Top 10 Videography Trends for 2018
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trends.map((trend, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-2">{trend.title}</h3>
              <p className="text-gray-700">{trend.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Get Professional Videography Services with Nimble Auity
        </h2>
        <p className="mb-4">
          Nimble Auity provides top-notch videography and video editing services. Our experienced team leverages the latest tools and techniques to deliver high-quality, engaging videos.
        </p>
        <p className="mb-6">
          From aerial drone footage to advanced post-production, we ensure your videos make a lasting impact. Let Nimble Auity bring your vision to life.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Contact Us for Videography Services
        </button>
      </section>
    </div>
  );
};

export default VideographyTrends2018;
