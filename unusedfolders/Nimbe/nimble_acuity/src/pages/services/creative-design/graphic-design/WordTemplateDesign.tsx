import React from "react";
import CSmainmenu from "../CSmainmenu";

const WordTemplateDesign: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 space-y-8">
      {/* Header */}
      <CSmainmenu/>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
        Nimble Word Template Design Services
      </h1>
      <p className="text-gray-700 text-lg">
        Get access to creative and high-quality Word template designs that fit your message perfectly by choosing our services at prices starting at just $10 an hour.
      </p>
      
      {/* Introduction */}
      <p className="text-gray-700">
        Are you looking for eye-catching Word template designs that communicate your message effectively? Nimble Auity is a leading Word template design service provider with skilled designers who can cater to all your requirements using the latest tools and technologies.
      </p>

      {/* Services Offered */}
      <h2 className="text-2xl font-semibold text-gray-800">Word Template Design Services We Offer</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Business Proposal Template Design</li>
        <li>Certificate Template Design</li>
        <li>Corporate Letterhead Template Design</li>
        <li>Brochure Template Design</li>
        <li>Business Invoice Template Design</li>
        <li>Corporate Flyer Template Design</li>
        <li>CV and Resume Template Design</li>
        <li>Wedding Card Template Design</li>
        <li>Destination Guide Template Design</li>
        <li>Promotional Leaflets Template Design</li>
        <li>Support Manual Template Design</li>
        <li>Conference Registration Form Template Design</li>
        <li>Invitation Template Design</li>
        <li>Advertising Material Template Design</li>
        <li>Display Material Template Design</li>
        <li>Word Templates for Reports</li>
      </ul>

      {/* Other Services */}
      <h2 className="text-2xl font-semibold text-gray-800">Other Services You Can Benefit From</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Brochure Design Services</li>
        <li>Banner Design Services</li>
        <li>Hoarding Design Services</li>
        <li>Flyer Design Services</li>
      </ul>

      {/* Why Choose Nimble */}
      <h2 className="text-2xl font-semibold text-gray-800">Why Choose Nimble for Custom Word Template Design Services?</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li><strong>Affordable Pricing Plans:</strong> Flexible and budget-friendly pricing options.</li>
        <li><strong>Data Security:</strong> ISO/IEC 27001:2022 certified firm ensuring complete safety of your data.</li>
        <li><strong>Skilled Designers:</strong> Experienced and talented Word template designers.</li>
        <li><strong>Error-free Services:</strong> ISO-certified organization delivering high-quality work.</li>
        <li><strong>Best Infrastructure:</strong> Access to latest tools and world-class workspaces.</li>
        <li><strong>Quick Turnaround Time:</strong> Multiple delivery centers ensure fast delivery.</li>
        <li><strong>Scalable Services:</strong> Expand or reduce team/resources as per your requirements.</li>
        <li><strong>24/7 Support:</strong> Always available via phone or email.</li>
        <li><strong>Dedicated Manager:</strong> Single point of contact for all your queries.</li>
      </ul>

      {/* Client Case Studies */}
      <h2 className="text-2xl font-semibold text-gray-800">Client Case Studies</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li><strong>Nimble Provided Prepress and Vector Artwork to a Dublin-based Client:</strong> Delivered reliable prepress and artwork services quickly.</li>
        <li><strong>Nimble Provided Vector Artwork to a US-based Label Designer:</strong> Cost-effective vector artwork services tailored to client requirements.</li>
      </ul>

      {/* Testimonials */}
      <h2 className="text-2xl font-semibold text-gray-800">Testimonials</h2>
      <p className="text-gray-700 italic mb-4">
        "The quality of artwork delivered during the trial period was exceptional and helped us decide on our new Outsourced Partner from a couple of quotes from companies across the globe."
        <br />
        <span className="font-semibold">— Director, Operations, Leading pharmaceutical company, Netherlands</span>
      </p>

      {/* CTA */}
      <div className="text-center">
        <a
          href="/contact-us"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-semibold transition"
        >
          Get in Touch for Word Template Design Services
        </a>
      </div>
    </div>
  );
};

export default WordTemplateDesign;
