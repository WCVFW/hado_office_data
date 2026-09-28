import React from "react";
import CSmainmenu from "../CSmainmenu";

const AdobeSuiteFAQs: React.FC = () => {
  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-indigo-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Adobe Creative Suite FAQs – InDesign & Illustrator
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          All your questions about outsourcing Adobe graphic design services to Nimble Auity answered.
        </p>
      </section>

      {/* FAQs Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-8">
        {/* FAQ Item */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            What type of Adobe graphic services can be outsourced to Nimble?
          </h2>
          <p>
            Indian companies have honed their expertise in design and graphic services, performing everything from magazine, book, and newspaper layouts, cover design, graphics development, image enhancement, illustrations, web design, and more—all at par with international standards.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            What is different about your Adobe Creative Suite services?
          </h2>
          <p>
            Nimble focuses on international clients and specializes in Adobe Creative Suite CS6, including InDesign, Photoshop, Illustrator, GoLive, and Acrobat. Our team’s deep knowledge ensures smooth transitions of ongoing projects, with insights, tips, and tricks to enhance workflow.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">What other software do you use?</h2>
          <p>
            We also use Adobe Plug-ins, Extensis Font Suitcase, Maxon Cinema 4D, SketchUp, and Intellicad to complement our Adobe services.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            What countries outsource graphic design work to India?
          </h2>
          <p>
            Projects come from all over the world, predominantly from the USA, followed by Denmark and the UK. Publishers, real estate companies, and numerous other organizations outsource design and typesetting to Nimble Auity, and the list is growing rapidly.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            What services can you provide that enhance your Adobe service?
          </h2>
          <p>
            Larger teams at Nimble Auity provide integrated solutions, including content writing, editing, and proofing, in addition to graphic design, giving a complete end-to-end service.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            What is the level of expertise of your Adobe InDesign department?
          </h2>
          <p>
            Our focus on Adobe software ensures that InDesign CS5.5 (and newer versions) is mastered. We keep pace with software and printing technology advances to provide world-class desktop publishing services.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Who will do my work?</h2>
          <p>
            Work is handled by Indian designers with college degrees and over 1 year of professional experience, fluent in English and proficient with the internet.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Why outsource creative design to India?</h2>
          <p>
            Many companies lack in-house expertise or resources. Outsourcing non-core activities like graphic design to Nimble allows businesses to leverage updated technology, trained staff, and cost efficiency.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Describe your infrastructure.</h2>
          <p>
            Nimble Auity is equipped with computers featuring graphic accelerator cards, flat-screen monitors, extra RAM, PCs, Macs for projects, networked systems, wireless connectivity, backup power, and a professional office setup with a scenic view.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">What is a typical outsourcing scenario?</h2>
          <p>
            Clients submit inquiries via email. A sample or proof-of-concept is completed for approval. Once approved, pricing is set, payment is made online or via bank transfer, and work begins using templates, content, and images provided via FTP. Completed work undergoes quality checks and is returned for final approval before final payment.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">How and when do I pay?</h2>
          <p>
            Payments are typically made online or via wire transfer. Payment terms are flexible but generally require an advance to start the project. Instructions are provided once terms are agreed upon.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">How do I get started?</h2>
          <p>
            Nimble Auity offers a simple free trial sample so you can evaluate our quality and estimate costs. Complete the form on our site to get started.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AdobeSuiteFAQs;
