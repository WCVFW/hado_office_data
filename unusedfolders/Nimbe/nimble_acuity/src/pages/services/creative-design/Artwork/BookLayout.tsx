import React from "react";
import CSmainmenu from "../CSmainmenu";

const BookLayout: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-gradient-to-r from-green-600 to-green-400 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Auity Book Layout Design Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          The design and layout of a book significantly impacts its readability,
          look and feel, imagery, sequencing of information, and defines how
          engaging it is for the readers. A neat, innovative book cover design
          can prompt a reader to look inside — and that’s where professional
          design services gain importance.
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <p className="mb-6">
          If you are looking to get that professional touch to your book layout
          design, or if you are dealing with multiple releases under strict
          deadlines and looking to partner with experts, then Nimble’s
          professional book layout service is the perfect solution for you.
        </p>
      </section>

      {/* Service Spectrum */}
      <section className="py-12 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">
          Nimble’s Spectrum of Book Layout Design Services
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-8">
          We understand that depending on the genre, every book naturally
          follows a specific page layout that makes it more appealing. That’s
          why we offer specialized layout services for different genres:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto text-center">
          {[
            "Children's books",
            "Portfolios",
            "Comics",
            "Story books",
            "Coffee table books",
            "Novels",
            "Magazines",
            "Biographies",
            "Photo magazines",
            "Year books",
            "Cook books",
            "Custom layouts",
            "Book cover design",
            "Scrap Book layout",
            "Art Book layout",
            "Guest Book layout",
            "Poetry Book layout",
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-green-50 p-4 rounded-lg shadow hover:shadow-md"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Process - Book Layout
        </h2>
        <p className="max-w-4xl mx-auto text-center mb-8">
          At Nimble Auity, we have over 26+ years of experience in book layout
          and cover design services. We leverage popular DTP and book layout
          software (such as Adobe InDesign) to transform your ideas into a
          well-designed book you can be proud of. Our process ensures
          time-bound, error-free delivery:
        </p>
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">STEP 1</h3>
            <p>
              We begin with a discussion to understand the book page layout you
              have in mind. Our typesetting experts suggest the best ways to
              present the book — from fonts to paragraph styles, highlighting,
              and readability techniques. Once you approve the layout, you
              provide the final proofread manuscript.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">STEP 2</h3>
            <p>
              Upon receiving your manuscript, our experts typeset the content in
              the final template, placing images where required. All pages are
              laid out with ISO quality standards, including title page,
              copyright, and content table. You then receive the draft for
              review in your preferred format.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">STEP 3</h3>
            <p>
              After proofreading, you can suggest minor corrections. We finalize
              the typeset manuscript and, if required, provide your publisher or
              printer with the correct technical specifications and upload
              guidelines — avoiding last-minute errors.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose Nimble’s Book Layout Design Service?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Expert Team",
              desc: "Our team includes designers, illustrators, DTP experts, and editors with 2+ years of experience each, excelling in digital and print works.",
            },
            {
              title: "Quality of Service",
              desc: "We follow ISO quality adherence and strict processes, ensuring 100% accuracy while meeting client objectives.",
            },
            {
              title: "Cost Effective",
              desc: "Through efficient workflows, design templates, and skilled resources, we deliver high-quality typesetting at affordable costs.",
            },
            {
              title: "Low Turnaround Times",
              desc: "Meeting deadlines is a core priority — we not only meet but exceed client expectations for timely delivery.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-green-50 rounded-lg shadow hover:shadow-md"
            >
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-green-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Book Layout & Cover Design Services
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          Whether you’re an individual seeking professional typesetting at a
          reduced cost, or a publisher looking for a reliable partner to handle
          heavy workloads — Nimble Auity is your one-stop destination for book
          design services. With proven expertise and clients across the US,
          Canada, Europe, and Australia, we deliver cost-effective, standout
          book layout solutions.
        </p>
        <button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default BookLayout;
