import React from "react";
import Imainmenu from "../Imainmenu";

const TexasInsuranceCaseStudy: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="bg-green-50 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Nimble Acuity Provided Back-office Support to a Texas-based Insurance Agency
          </h1>
          <p className="text-lg text-gray-700">
            Case study showcasing how Nimble Acuity delivered efficient and scalable insurance back-office services for a Texas-based insurance agency.
          </p>
        </div>
      </section>

      {/* The Client */}
      <section className="py-12 max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
        <h2 className="text-3xl font-bold mb-4">The Client</h2>
        <p>
          The client is a reputed insurance agency from Pampa, Texas, providing financial support to policyholders during crises or disasters. They approached Nimble Acuity for specialized insurance back-office services.
        </p>
      </section>

      {/* The Requirement */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
          <h2 className="text-3xl font-bold mb-4">The Requirement</h2>
          <p>
            As an existing client, the agency required Nimble Acuity to manage a new insurance back-office project. Though familiar with the client's AMS, our team had to undergo training for the new tasks. The client trusted Nimble Acuity to deliver efficiently and on time.
          </p>
        </div>
      </section>

      {/* The Challenges */}
      <section className="py-12 max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
        <h2 className="text-3xl font-bold mb-4">The Challenges</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Tasks were completely new for the team.</li>
          <li>Building a capable team from scratch under tight deadlines.</li>
          <li>Designing and executing a comprehensive training program quickly.</li>
        </ul>
        <p>
          The main concern was meeting the client’s expectations while adhering to the strict timeline.
        </p>
      </section>

      {/* The Solution */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
          <h2 className="text-3xl font-bold mb-4">Our Solution</h2>
          <p>
            Nimble Acuity’s insurance back-office team tackled the challenge by assembling a skilled and experienced team. Key steps included:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Shortlisting insurance experts and managers with global experience.</li>
            <li>Collecting and internalizing client training materials (videos and documents).</li>
            <li>Training the team within 30 days to meet the new project requirements.</li>
          </ul>
        </div>
      </section>

      {/* The Results */}
      <section className="py-12 max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
        <h2 className="text-3xl font-bold mb-4">The Results</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Delivered exceptional back-office services tailored to client needs.</li>
          <li>Client satisfaction led to project extension and increased reliance on Nimble Acuity.</li>
          <li>Client became a promising reference for potential outsourcing customers.</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-green-600 py-16 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Insurance Back-office Management Services to Nimble Acuity
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          With 26+ years of experience, Nimble Acuity provides global clients with efficient, scalable, and cost-effective insurance back-office support. Request a free quote today to explore how outsourcing can work for you.
        </p>
        <a
          href="/contact"
          className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default TexasInsuranceCaseStudy;
