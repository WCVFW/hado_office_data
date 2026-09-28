import React from "react";
import CSmainmenu from "../CSmainmenu";

const VideoSummaryServices: React.FC = () => {
  return (
    <div className="w-full font-sans text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Auity Video Summary Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Ensure your video content is well-documented, searchable, and easy to comprehend with professional video summaries.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <p>
          Video summaries help viewers grasp the essence and purpose of a video at a glance. Nimble Auity offers expert video summary services, helping producers of documentaries, educational content, technical and mechanical videos, and more, communicate effectively with their audiences.
        </p>
        <p>
          Leveraging over 26 years of video editing experience, our team uses the latest software and infrastructure to deliver detailed, accurate, and engaging video summaries.
        </p>
      </section>

      {/* Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Services We Offer</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Video Perspective:</strong> Editorial direction summarizing the core message conveyed by the video.
          </li>
          <li>
            <strong>Background Perspective:</strong> Information on shoot location and video purpose.
          </li>
          <li>
            <strong>Video Categorization:</strong> Proper categorization of videos, including multi-category adjustments.
          </li>
          <li>
            <strong>Time Stamp:</strong> Specific call-outs or highlights with exact timing in the video.
          </li>
          <li>
            <strong>Time Duration:</strong> Display of total video length and duration details.
          </li>
          <li>
            <strong>Video Credits:</strong> Listing of the crew and team involved in production and their roles.
          </li>
        </ul>
      </section>

      {/* Process Flow */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6 bg-blue-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Process Flow for Video Summary Services</h2>
        <ol className="list-decimal ml-6 space-y-4">
          <li>
            <strong>Confirm Project Scope:</strong> Define timelines, pricing, and SLA for the project.
          </li>
          <li>
            <strong>Sample Process:</strong> Provide sample videos, upload to Nimble Auity secure servers, receive feedback, and approve sample edits.
          </li>
          <li>
            <strong>Commence Project:</strong> Client provides all video files, team initiates full project workflow.
          </li>
          <li>
            <strong>Project Completion:</strong> Deliver video summaries per SLA, with regular updates and multiple summaries if required.
          </li>
        </ol>
      </section>

      {/* Benefits */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Benefits of Outsourcing Video Summary Services to Nimble Auity</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Access a team of experienced experts in transcription, translation, and video services.</li>
          <li>Highly skilled writers with extensive knowledge across topics.</li>
          <li>Quick turnaround times with robust quality control processes.</li>
          <li>State-of-the-art infrastructure and manpower for projects of any scale.</li>
          <li>Cost-effective pricing for industry-leading video summary services.</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 text-center bg-blue-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Partner with Nimble Auity for Video Summary Services</h2>
        <p className="mb-6">
          Designed for video editing companies, broadcasters, educational institutions, law firms, conference organizers, and more, our services help communicate your video content efficiently.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default VideoSummaryServices;
