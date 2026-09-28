import React from "react";
import PEMainMenu from "../PEmainmenu";

const BabySwimmingDesignCaseStudy: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Baby & Toddler Swimming Coaching Company Nimbles Design Manipulation Services to Nimble Acuity
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Nimble Acuity provided high-quality image manipulation services for underwater baby photography, backgrounds, and limb corrections to a global swimming coaching company.
        </p>
      </section>

      {/* Case Study Details */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid gap-12 md:grid-cols-2">
        {/* Client Info */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">The Client</h2>
          <p>
            A leading baby and toddler swimming coaching company with branches in the Netherlands, New Zealand, Canada, and Ireland. Their swimming coaches are internationally certified, and they capture extensive underwater baby photography.
          </p>
        </div>

        {/* Client Requirement */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Client Requirement</h2>
          <p>
            The client needed manipulation of underwater baby images (background, water, baby limbs, etc.) for websites and parent keepsakes. The images required precise design detailing to showcase expertise and coaching methods.
          </p>
        </div>

        {/* Challenges Faced */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Challenges Faced by Nimble Acuity</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>High-level design detailing required for background water creation.</li>
            <li>Limb manipulation needed precise edits for each image.</li>
          </ul>
        </div>

        {/* Nimble Acuity Solution */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Nimble Acuity's Solution</h2>
          <p>
            Nimble Acuity conducted a free quality trial. Four folders with nine images each were sent via Dropbox, and two resources worked for a week to complete the trial. Backgrounds were recreated, and elements like baby limbs were manipulated (light, medium, heavy edits). Quality checks were done over two days, and the trial was approved.
          </p>
          <p className="mt-4">
            After the successful trial, the client visited Nimble Acuity's delivery center in India and signed a full-time contract for manipulating 45,000 images per month.
          </p>
        </div>

        {/* Results */}
        <div className="bg-white p-8 shadow-lg rounded-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Results</h2>
          <p>
            The client appreciated Nimble Acuity's cost-effective services, precision manipulation, and quick turnaround time. They also praised the robust infrastructure and professional facilities at Nimble Acuity.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Sign up for a FREE Trial</h2>
        <p className="max-w-3xl mx-auto mb-6">
          Experience our high-quality image manipulation services before outsourcing. Nimble Acuity offers cost-effective and efficient solutions for image editing, creative services, transcription, and more.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Get a Free Quote
        </button>
      </section>
    </div>
  );
};

export default BabySwimmingDesignCaseStudy;
