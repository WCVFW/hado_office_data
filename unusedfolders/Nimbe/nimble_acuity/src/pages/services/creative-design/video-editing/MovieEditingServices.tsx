import React from "react";
import CSmainmenu from "../CSmainmenu";

const MovieEditingServices: React.FC = () => {
  return (
    <div className="w-full font-sans text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-indigo-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Movie Editing Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Professional movie editing services by Nimble Auity, delivering high-quality, impactful videos globally.
        </p>
      </section>

      {/* Services Overview */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-8">
        <div>
          <p>
            Nimble Auity specializes in high-quality movie editing services for short films, documentaries, and more. Our experienced editors provide color correction, subtitling, voiceovers, narration, effects, filters, enhancements, and more.
          </p>
        </div>

        {/* Service Offerings */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Professional, Cost-Effective Services</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Noise Removal:</strong> Correct shaky footage and eliminate background noises.</li>
            <li><strong>Element Removal:</strong> Cut out unwanted scenes, objects, or people.</li>
            <li><strong>Shot Sequence Arranging:</strong> Reorder shots for thematic and chronological consistency.</li>
            <li><strong>Stabilizing Footage:</strong> Remove camera disturbances for high-resolution videos.</li>
            <li><strong>Background Score:</strong> Add music, sound effects, and audio enhancements.</li>
            <li><strong>Color Correction:</strong> Improve contrast and fix color casts.</li>
            <li><strong>Subtitling:</strong> Add multilingual subtitles, annotations, and end credits.</li>
            <li><strong>Special Effects:</strong> Integrate transitions, animations, voiceovers, and creative effects.</li>
            <li><strong>Drone Video Editing:</strong> Standardize and enhance outdoor drone footage.</li>
          </ul>
        </div>

        {/* Process Flow */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Movie Editing Process Flow</h2>
          <ol className="list-decimal ml-6 space-y-2">
            <li><strong>Statement of Work:</strong> Discuss requirements and finalize scope, timeframe, and cost.</li>
            <li><strong>Input:</strong> Client uploads video footage via FTP or Dropbox.</li>
            <li><strong>Video Editing:</strong> Editors work with Adobe Premiere Pro, Edius Pro, and Final Cut Pro X.</li>
            <li><strong>Review and Edits:</strong> First draft reviewed and revised according to client feedback.</li>
            <li><strong>Approval:</strong> Final approved video delivered via FTP or Dropbox.</li>
          </ol>
        </div>

        {/* Software */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Movie Editing Software</h2>
          <p>
            Nimble Auity video editors use the latest software including Adobe After Effects CC, Adobe Premiere Pro CC, Autodesk 3ds Max, Autodesk Maya, and Final Cut Pro X.
          </p>
        </div>

        {/* Benefits */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Benefits of Outsourcing to Nimble Auity</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>ISO Standards:</strong> Adherence to high-quality movie editing processes.</li>
            <li><strong>Pricing:</strong> Hourly rates, customized pricing, and FTE options.</li>
            <li><strong>Skilled Editors:</strong> Trained on the latest tools and technologies.</li>
            <li><strong>Secure Data:</strong> GDPR-compliant and NDA-protected projects.</li>
            <li><strong>Fast Deliveries:</strong> Timely project completion as per client schedule.</li>
          </ul>
        </div>

        {/* Client Success Stories */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Client Success Stories</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Nimble aided NBA's global sports analytics provider with video tracking services for international basketball teams.</li>
            <li>Provided 3D modelling support for the world’s biggest hearing aid supplier, creating accurate product models with textures and colors.</li>
          </ul>
        </div>

        {/* Testimonials */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
          <p className="italic">
            "I am overwhelmed with the support & level of understanding of your team. The effort spent on my DTP project with a quick turnaround has helped my company reap immense profits."
          </p>
          <p className="font-semibold mt-2">Graphics Manager, Leading Electronics Company, South Korea</p>
        </div>

        {/* Call to Action */}
        <div className="text-center py-8">
          <h2 className="text-2xl font-semibold mb-4">Choose Nimble Auity for Movie Editing</h2>
          <p className="mb-4">
            With over two decades of video editing experience, we deliver impactful, well-edited movies that reduce in-house costs without compromising quality.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
            Contact Us for a Free Quote
          </button>
        </div>
      </section>
    </div>
  );
};

export default MovieEditingServices;
