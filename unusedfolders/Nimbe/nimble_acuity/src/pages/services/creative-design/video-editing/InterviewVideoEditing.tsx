import React from "react";
import CSmainmenu from "../CSmainmenu";

const InterviewVideoEditing: React.FC = () => {
  return (
    <div className="w-full font-sans text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Interview Video Editing Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          If you are looking for someone to professionally edit interviews for
          your video, outsource interview video editing services to Nimble Auity
          starting at just $10/hour for unmatched results.
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <p>
          These days, interviews are a part of documentaries, autobiographical
          films, promotional videos, and even educational content. Raw interview
          footage can often be crude and mismatched, requiring professional
          editing to align everything to a consistent theme. Nimble Auity brings
          26+ years of expertise to ensure that your interviews look polished,
          credible, and engaging.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">
          Interview Video Editing Services We Offer
        </h2>
        <ul className="list-disc ml-6 space-y-3">
          <li>
            Edit interviews in a variety of formats depending on client needs.
          </li>
          <li>
            Edit interviews for promotional videos as part of corporate
            expansion or new market positioning.
          </li>
          <li>
            Edit countless interviews for documentaries and agencies to follow a
            unified style or format.
          </li>
          <li>
            Edit interviews for wedding, holiday, or personal videos to make
            them special and memorable.
          </li>
          <li>
            Provide additional video editing services to further polish your
            interview-based videos.
          </li>
        </ul>
      </section>

      {/* Process */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-blue-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">
          Our Interview Video Editing Process
        </h2>
        <ol className="list-decimal ml-6 space-y-4">
          <li>
            <strong>Requirement Analysis:</strong> Understand requirements,
            define project scope, timelines, resources, and costs.
          </li>
          <li>
            <strong>Receiving Order:</strong> Collect raw interview files via a
            secure FTP channel after client approval.
          </li>
          <li>
            <strong>Video Editing:</strong> Edit raw interviews to match the
            chosen theme and ensure consistency using advanced tools.
          </li>
          <li>
            <strong>Quality Check:</strong> Conduct multi-level quality
            assessments to eliminate inconsistencies and errors.
          </li>
          <li>
            <strong>Approval & Delivery:</strong> Share final edited videos for
            client review, implement feedback, and deliver via secure FTP.
          </li>
        </ol>
      </section>

      {/* Other Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">
          Other Services You Can Benefit From
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-disc ml-6">
          <li>Creative Design Services</li>
          <li>Illustrator Services</li>
          <li>Animation Services</li>
          <li>Logo Design Services</li>
        </ul>
      </section>

      {/* Why Choose Nimble */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-blue-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">
          Why Choose Nimble Auity for Interview Video Editing Services?
        </h2>
        <ul className="list-disc ml-6 space-y-3">
          <li>
            <strong>Flexible Pricing:</strong> Custom solutions to suit your
            budget without compromising on quality.
          </li>
          <li>
            <strong>ISO Certification:</strong> Certified processes ensuring
            strict adherence to quality standards.
          </li>
          <li>
            <strong>Well-established Infrastructure:</strong> Advanced tools and
            systems to efficiently handle complex projects.
          </li>
          <li>
            <strong>Transparency:</strong> Open communication and progress
            updates at every step.
          </li>
          <li>
            <strong>24/7 Support:</strong> Round-the-clock assistance for all
            client needs.
          </li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-blue-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">Client Success Stories</h2>
        <ul className="list-disc ml-6 space-y-4">
          <li>
            Nimble Auity provided live video editing to a Swedish film
            production house, delivering cost-effective services quickly.
          </li>
          <li>
            Nimble Auity offered highly accurate video editing and walkthrough
            creation using Maya for a leading American car dealer.
          </li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 text-center max-w-6xl mx-auto">
        <blockquote className="italic text-lg max-w-3xl mx-auto">
          “Thanks for your fast turnaround time and attention to detail for our
          busy Australian ad agency, appreciate your hard work.”
        </blockquote>
        <p className="mt-2 font-semibold">— CEO, Digital Marketing Agency, Australia</p>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-6 text-center max-w-6xl mx-auto bg-blue-200 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">
          Outsource Interview Video Editing Services to Nimble Auity
        </h2>
        <p className="mb-6 max-w-3xl mx-auto">
          Save time and effort by trusting Nimble Auity’s expert editors to
          deliver interview videos that meet superior quality standards. With
          26+ years of experience, we ensure your interviews are engaging,
          professional, and impactful.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default InterviewVideoEditing;
