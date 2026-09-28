import React from "react";
import CSmainmenu from "../CSmainmenu";

const FilmReeditingServices: React.FC = () => {
  return (
    <div className="w-full font-sans text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-purple-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Auity Film Re-editing Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Affordable and professional film re-editing services for businesses and individuals starting at just $12/hour.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <p>
          Not everyone has time or budget to perform film re-editing with professional tools. Nimble Auity delivers high-quality film re-editing services that are cost-effective and handled by professionals with decades of experience.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Film Re-editing Services We Offer</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Airlines:</strong> Remove objectionable content for in-flight entertainment.</li>
          <li><strong>Movie Rental Agencies:</strong> Adapt films to changing demands and client expectations.</li>
          <li><strong>Private Clubs:</strong> Screen approved films by eliminating camera shake, blemishes, and flaws.</li>
          <li><strong>Individuals:</strong> Improve family videos at affordable rates for preservation of memories.</li>
        </ul>
      </section>

      {/* Film Re-editing Process */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6 bg-purple-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Film Re-editing Process</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li>Collaborate with client to understand requirements.</li>
          <li>Receive the film via secure channel or direct dispatch.</li>
          <li>Verify film quality for safe editing.</li>
          <li>Assign qualified editors with industry experience.</li>
          <li>Perform editing using advanced film editing tools.</li>
          <li>Quality control assessment for 100% commitment.</li>
          <li>Send the edited film back via secure FTP.</li>
        </ol>
      </section>

      {/* Other Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Other Services You Can Benefit From</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>360° Wedding Videos</li>
          <li>Corporate Video Editing</li>
          <li>Holiday Video Editing</li>
          <li>Motion Graphics Services</li>
        </ul>
      </section>

      {/* Why Choose Nimble */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Why Outsource Film Re-editing Services to Nimble Auity?</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Cost-effective editing services for small and mid-sized clients.</li>
          <li>ISO 9001:2015 certified post-processing support.</li>
          <li>Experienced film re-editing professionals.</li>
          <li>Best-in-class data security with monitored IT systems.</li>
          <li>Round-the-clock support from global delivery centers.</li>
          <li>Scalable services to handle any project size.</li>
          <li>Quick turnaround time (TAT) to meet deadlines.</li>
          <li>Superb infrastructure with state-of-the-art video editing tools.</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6 bg-purple-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Client Success Stories</h2>
        <ul className="space-y-4">
          <li>
            <p>"Color correction services were provided by Nimble Auity to a leading movie restoration company, ensuring quick TAT and reliable solutions."</p>
          </li>
          <li>
            <p>"Ontario Wedding Film Company leveraged Nimble Auity’s video editing services for cost and time-efficient results."</p>
          </li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-6 text-center max-w-6xl mx-auto bg-purple-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Outsource Film Re-editing to Nimble Auity</h2>
        <p className="mb-6">
          Get high-quality film re-editing services that are professional, affordable, and secure. Let Nimble Auity handle your projects with precision.
        </p>
        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
          Get a Free Quote
        </button>
      </section>
    </div>
  );
};

export default FilmReeditingServices;
