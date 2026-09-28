import React from "react";
import CSmainmenu from "../CSmainmenu";

const InvitationDesignServices: React.FC = () => {
  const services = [
    "Wedding Card Design Services",
    "Business Event Invite Design Services",
    "Event Invite Design Services",
    "Digital Invitation Design Services",
    "Theme-based Invitation Card Design Services",
    "Festival Invite Design Services",
    "Personalized Invites for Special Occasions",
    "Reminder/Save the Date Cards",
  ];

  const processSteps = [
    "Brainstorming with the Client: Interactive sessions to understand ideas, concepts, and imagination.",
    "Drafting Rough Templates: Customized template options are developed and sent for feedback.",
    "Revisions: Designers refine and revise based on client feedback.",
    "Designing: Finalized artwork is created.",
    "Multi-level QC: Design and language errors are checked; actual size printing & color check performed.",
    "Delivery: Final design delivered in chosen format; printing assistance provided.",
  ];

  const benefits = [
    "Saves Money and Time",
    "Unique, Stunning, and Attention-grabbing Designs",
    "Exceptional Team Support",
    "Assured Data Privacy",
    "Quick Turnaround Times",
    "Multiple Revision Provision",
  ];

  const caseStudies = [
    "Nimble Provided Prepress and Vector Artwork to a Dublin-based Client: High-quality prepress and vector artwork delivered within quick TAT.",
    "Nimble Provided Vector Artwork to US-based Label Designer: Stunning vector artwork services delivered to a US-based client.",
  ];

  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-purple-600 text-white py-16 px-6 md:px-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Invitation Design Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Get unique invitation designs created by professional designers for any type of event at rates starting at $10/hour. Nimble Auity ensures creativity and precision for every invite.
        </p>
      </div>

      {/* Introduction */}
      <div className="max-w-5xl mx-auto py-12 px-6 md:px-16 space-y-4 text-gray-800">
        <p>
          Invitations are celebratory and need to reflect your event's style and brand values. Nimble Auity’s team of expert designers has experience designing wedding invites, business event invitations, gala cards, and more, delivering personalized and creative designs at affordable rates.
        </p>
      </div>

      {/* Services Offered */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-purple-600 mb-8 text-center">
          Our Invitation Design Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-gray-800">{service}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Design Process */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-6 md:px-16">
          <h2 className="text-3xl font-bold text-purple-600 mb-8 text-center">
            Our Invitation Card Design Process
          </h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-800">
            {processSteps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-purple-600 mb-8 text-center">
          Why Choose Nimble for Invitation Design
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-800">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* Client Case Studies */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-6 md:px-16">
          <h2 className="text-3xl font-bold text-purple-600 mb-8 text-center">
            Client Case Studies
          </h2>
          <ul className="space-y-4 text-gray-800">
            {caseStudies.map((caseStudy, index) => (
              <li key={index}>{caseStudy}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-purple-600 text-white py-16 text-center px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Delight Your Guests with Stunning Invitation Designs
        </h2>
        <p className="mb-6 max-w-3xl mx-auto">
          Nimble Auity’s team of 200+ designers ensures creative and innovative invitations for weddings, business events, festivals, holidays, and all special occasions. Contact us today for customized invitation designs.
        </p>
        <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default InvitationDesignServices;
