import React from "react";
import CSmainmenu from "../CSmainmenu";

const ArchitecturalIllustration: React.FC = () => {
  return (
    <div><CSmainmenu/>
    <section className="min-h-screen bg-gray-50 px-6 py-12 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Nimble Architectural Illustration Services
          </h1>
          <p className="text-lg text-gray-700">
            We will help your partners, potential buyers, and stakeholders
            visualize your envisioned project through architectural illustration
            services starting at just{" "}
            <span className="font-semibold text-green-600">$10/hour</span>
          </p>
        </header>

        {/* Intro */}
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Do you have a unique architectural concept that you prefer to share
            with stakeholders, financing partners, and municipalities for their
            approval? Are you looking for ways to avoid hiring a dedicated
            architectural illustration professional for a short-term project?
            Whatever the reason, we, at Nimble, have experience in architectural
            illustration and the bandwidth to help you convey your vision to the
            right people using high-quality architectural illustrations.
          </p>

          <p>
            Nimble has 26+ years of experience in architectural illustration and
            has helped thousands of builders, architects, realtors, and other
            professionals from the construction sector. Being a top provider of
            architectural illustration services in India, we design
            architectural renders on envisioned models, project concepts, and
            animations. We deliver accurate illustrations whether it is urban
            homes or highrise real estate.
          </p>
        </div>

        {/* Services Section */}
        <section className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Architectural Illustration Services We Offer
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Project Illustration",
                desc: "We can create illustrations based on your envisioned project by incorporating every detail in the scope of work. The project illustrations can be used to demonstrate the completed project in its grandeur.",
              },
              {
                title: "Illustration of Financing",
                desc: "We have professionals from architectural background to create illustrations for project financing and approvals. Illustrations of the project will be designed to represent the progress of the work and the different phases involved.",
              },
              {
                title: "Schematic Design Illustrations",
                desc: "We will design illustrations based on the envisioned abstract, capturing relevant details in a simplified form without visual clutter.",
              },
              {
                title: "Illustration of the Project Development",
                desc: "We will update the original architectural illustration on an on-going basis so that it represents the current progress of development.",
              },
              {
                title: "Design Review Illustration",
                desc: "We will design illustrations to help you review layouts and determine flaws and possible triggers for project delays.",
              },
              {
                title: "Illustration for Marketing Collateral",
                desc: "Our illustrations can help you create highly engaging sales and marketing collateral for stakeholders and potential buyers.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Our Architectural Illustration Process
          </h2>
          <ol className="space-y-4 list-decimal list-inside text-gray-700">
            <li>
              <strong>Gathering Client Needs:</strong> We will get in touch with
              you to collect project details and requirements.
            </li>
            <li>
              <strong>Requirement Assessment:</strong> We assess the provided
              information to design illustrations that align with your
              expectations.
            </li>
            <li>
              <strong>Architectural Illustration:</strong> Our experts will
              create customized illustrations based on your inputs.
            </li>
            <li>
              <strong>Quality Checks:</strong> QC specialists will thoroughly
              evaluate each illustration for accuracy and compliance.
            </li>
            <li>
              <strong>Delivery:</strong> Final illustrations are delivered via
              secure SFTP or VPN.
            </li>
          </ol>
        </section>

        {/* Why Choose Us */}
        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Why Choose Nimble for Architectural Illustration?
          </h2>
          <ul className="space-y-4 text-gray-700 list-disc list-inside">
            <li>
              <strong>Professional Services at Flexible Prices:</strong> Our
              services are priced competitively with custom solutions.
            </li>
            <li>
              <strong>Swift Delivery:</strong> Same-week delivery or priority
              same-day options.
            </li>
            <li>
              <strong>Quality Standards:</strong> ISO 9001:2015 compliant
              quality checks.
            </li>
            <li>
              <strong>Data Security:</strong> ISO/IEC 27001:2022 certified data
              handling.
            </li>
            <li>
              <strong>Infrastructure:</strong> Equipped with world-class tools
              and technology.
            </li>
            <li>
              <strong>24/7 Customer Support:</strong> Always available to assist
              you via chat, email, or call.
            </li>
            <li>
              <strong>Single Point of Contact:</strong> Dedicated SPOC for each
              project.
            </li>
            <li>
              <strong>Scalable Services:</strong> Scale up easily without
              overheads.
            </li>
            <li>
              <strong>Dedicated Teams:</strong> Experts with 10+ years of
              experience in architectural illustration.
            </li>
          </ul>
        </section>

        {/* Testimonials & CTA */}
        <section className="mt-16 text-center">
          <blockquote className="italic text-gray-600 max-w-3xl mx-auto mb-8">
            “I am overwhelmed with the support & level of understanding of your
            team. The effort you spent in working out my DTP project diligently
            with a very quick turn around time has helped my company reap
            immense profits.”
          </blockquote>
          <p className="font-semibold text-gray-900">
            — Graphics Manager, Leading electronics company from South Korea
          </p>

          <div className="mt-10">
            <button className="px-6 py-3 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition">
              Contact Us Today
            </button>
          </div>
        </section>
      </div>
    </section>
    </div>
  );
};

export default ArchitecturalIllustration;
