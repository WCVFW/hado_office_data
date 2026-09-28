import React from "react";
import CSmainmenu from "../CSmainmenu";

const LabelDesign: React.FC = () => {
  return (
    <div> <CSmainmenu/>
    <section className="w-full min-h-screen bg-gray-50 text-gray-800 px-6 md:px-16 py-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Title */}
        <header className="text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold text-green-700">
            Outsource Label Design Services
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
            Label Design Services
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            If you have a dated label that isn't connecting with your target
            market, or if you're launching a new product,{" "}
            <span className="font-semibold">Nimble Auity</span> can assist. We
            work closely with manufacturers, distributors, and importers to
            create appealing product labels, and have extensive experience in
            creating leading designs for FMCG brands. We help your product
            achieve maximum shelf appeal with unique labels that highlight
            quality and uniqueness.
          </p>
        </header>

        {/* Intro */}
        <div className="space-y-4">
          <p>
            If you are looking for commercially appropriate label designs for
            any package material including cardboard, blow mold, thermoformed,
            foam, glass, and more, choose{" "}
            <span className="font-semibold">Nimble</span>. Our designers are
            well versed in label specifications, print technology, product life
            extension, label economics, sustainable label design, flexible
            labels, bioplastics, modified atmosphere labels, barrier materials,
            food safety standards, and labeling compliance regulations.
          </p>
        </div>

        {/* Services */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold text-green-700">
            Nimble’s Label Design Services
          </h3>
          <p>
            We produce basic, 2D and 3D label designs considering label
            economics, specifications, print technology, materials, colors,
            shapes, storage, disposal, and environmental matters. Our designs
            cover multiple product categories:
          </p>

          {/* Categories */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Food Products",
              "Beverage Products",
              "Health, Beauty & Wellness Products",
              "Domestic & Household Products",
              "Apparel & Fashion Products",
              "Electronic Products"
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition text-center"
              >
                <p className="font-semibold text-green-600">{item}</p>
              </div>
            ))}
          </div>

          <p>
            Our experience with different label types means we understand
            manufacturing processes and use them to your advantage. We design
            labels for bags, boxes, blister packs, clamshells, bottles, bakery
            bags, cartons, retail bags, thermo-formed plastics, die-cut options,
            and more.
          </p>
        </section>

        {/* Special Services */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-green-700">
            Specialized Label Design Services
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <span className="font-semibold">Sustainable Label Design:</span>{" "}
              We create eco-friendly, durable labels balancing environmental,
              social, and economic needs.
            </li>
            <li>
              <span className="font-semibold">Label Re-branding:</span> We
              review your current labels, suggest new ideas, and design
              impactful solutions to influence buyers.
            </li>
            <li>
              <span className="font-semibold">Label Samples & Mock-Ups:</span>{" "}
              Concept stage mockups for investors, trade shows, presentations,
              and design validation.
            </li>
          </ul>
        </section>

        {/* Tools */}
        <section className="space-y-4">
          <h3 className="text-2xl font-bold text-green-700">Label Design Tools</h3>
          <p>
            Our designers, trained at top institutes, adhere to ISO processes to
            deliver world-class labels. We use:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>3ds Max</li>
            <li>Adobe Illustrator</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Lightroom</li>
            <li>Maya</li>
          </ul>
        </section>

        {/* Process */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-green-700">
            Nimble’s Label Design Process
          </h3>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>
              <span className="font-semibold">Client Briefing:</span> We gather
              requirements from the client.
            </li>
            <li>
              <span className="font-semibold">Input:</span> Clients transfer
              samples (JPEG, via Dropbox/FTP).
            </li>
            <li>
              <span className="font-semibold">Label Creation:</span> Designers
              use Photoshop, Illustrator, Animate, After Effects.
            </li>
            <li>
              <span className="font-semibold">Edits:</span> First draft reviewed
              and refined per client feedback.
            </li>
            <li>
              <span className="font-semibold">Final Output:</span> Delivered in
              formats (JPEG, TIFF, PSD, PDF, etc.) via Dropbox/FTP.
            </li>
          </ol>
        </section>

        {/* Why Choose Us */}
        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-green-700">
            Why Choose Nimble for Custom Label Design Services?
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Full ownership & copyrights remain with clients.</li>
            <li>
              In-depth expertise: We analyze product features, storage, target
              market, and competition.
            </li>
            <li>
              Increased marketing budget efficiency by reducing costly
              revisions.
            </li>
            <li>
              Complete solution from concept to product launch.
            </li>
            <li>Fast turnaround to meet production deadlines.</li>
            <li>
              Experience designing labels for renowned global brands.
            </li>
            <li>Dedicated project manager as single point of contact.</li>
            <li>
              Pocket-friendly pricing models: FTEs or hourly rates to suit your
              budget.
            </li>
            <li>
              Experienced designers & tools to create brilliant, unique labels.
            </li>
            <li>
              Rigorous multi-level quality checks for error-free results.
            </li>
            <li>Multiple output formats delivered as per client needs.</li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="bg-green-100 p-8 rounded-2xl text-center space-y-4">
          <h3 className="text-2xl font-bold text-green-700">
            Outsource Label Design Services to Nimble
          </h3>
          <p>
            Nimble Auity’s professional label design services help clients create
            distinct brand identities, strong visual impact, and capture their
            target customers. If you’re looking to outsource label design
            offshore and reduce in-house costs,{" "}
            <span className="font-semibold">choose Nimble today</span>. Call or
            email us for a free quote within one business day.
          </p>
          <button className="px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition">
            Contact Us
          </button>
        </section>
      </div>
    </section>
    </div>
  );
};

export default LabelDesign;
