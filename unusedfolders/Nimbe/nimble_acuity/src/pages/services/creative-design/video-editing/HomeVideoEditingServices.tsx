import React from "react";
import CSmainmenu from "../CSmainmenu";

const HomeVideoEditingServices: React.FC = () => {
  return (
    <div className="w-full font-sans text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-yellow-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Auity Home Video Editing Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Preserve your precious home videos, convert old formats, and transform raw footage into movies you can cherish forever.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <p>
          From weddings and birthdays to anniversaries and your baby's first steps, Nimble Auity's skilled video editors create perfect, captivating videos. We add color, visual enhancements, narration, fix resolution issues, and more. Simply record every little moment and send it to Nimble Auity for professional editing.
        </p>
      </section>

      {/* Services Overview */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Nimble Auity's Home Video Editing Services</h2>
        <p>
          Our editors are proficient in all leading video editing software including Adobe Premiere Pro, Final Cut, and Avid. We offer services including:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Video Editing</li>
          <li>Audio Synchronizing</li>
          <li>Motion Graphics and Visual Effects</li>
          <li>Opening Titles and Animated Sequences</li>
          <li>Audio Editing and Syncing</li>
          <li>Format Conversion and Standardization</li>
        </ul>
      </section>

      {/* Specialized Home Video Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6 bg-yellow-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Specialized Home Video Editing Services</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Home Video Clipping:</strong> Extract and organize special moments, convert VHS or film formats to digital with chapter menus.
          </li>
          <li>
            <strong>Home Video Re-editing:</strong> Shorten existing videos, remove unwanted content, and prepare ready-to-use clips.
          </li>
          <li>
            <strong>Home Video Stabilizing:</strong> Correct imperfections like shaky footage, chroma instability, or underexposed film for smooth results.
          </li>
        </ul>
      </section>

      {/* Process */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Our Home Video Editing Process</h2>
        <ol className="list-decimal ml-6 space-y-4">
          <li>
            <strong>Statement of Work:</strong> Discuss requirements, finalize timeline, cost, and resources.
          </li>
          <li>
            <strong>Input:</strong> Client uploads video footage via FTP or Dropbox.
          </li>
          <li>
            <strong>Video Editing:</strong> Editors work using professional tools to enhance footage.
          </li>
          <li>
            <strong>Review and Edits:</strong> Client reviews first draft, revisions are applied, final design submitted.
          </li>
          <li>
            <strong>Approval:</strong> Final approval obtained and delivered via secure server.
          </li>
        </ol>
      </section>

      {/* Benefits */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6 bg-yellow-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Benefits of Nimble Auity Home Video Editing Services</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Hassle-free Outsourcing:</strong> Work in your preferred time zone with 24/6 support.</li>
          <li><strong>Preserve Memories:</strong> Convert old formats into digital files for long-term storage.</li>
          <li><strong>Experienced Editors:</strong> Thousands of projects delivered with tailored attention.</li>
          <li><strong>Cost-effective Services:</strong> Flexible pricing options including hourly rates and FTEs.</li>
          <li><strong>ISO Processes:</strong> Services compliant with international standards.</li>
          <li><strong>Data Security:</strong> GDPR, NDAs, and secure file handling ensure confidentiality.</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 text-center bg-yellow-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Choose Nimble Auity for Perfectly Edited Home Videos</h2>
        <p className="mb-6">
          Contact Nimble Auity today for professional home video editing services. Share your requirements and get a free quote within one business day.
        </p>
        <button className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition">
          Get a Free Quote
        </button>
      </section>
    </div>
  );
};

export default HomeVideoEditingServices;
