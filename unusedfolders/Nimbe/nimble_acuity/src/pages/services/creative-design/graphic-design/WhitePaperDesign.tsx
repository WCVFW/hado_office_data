import React from "react";
import CSmainmenu from "../CSmainmenu";

const WhitePaperDesign: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 space-y-8">
      <CSmainmenu/>
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
        Nimble White Paper Design Services
      </h1>
      <p className="text-gray-700 text-lg">
        Get creative, aesthetic, and compelling white paper designs and improve customer engagement with your brand at prices starting at $10/hour.
      </p>

      {/* Introduction */}
      <p className="text-gray-700">
        In content marketing, white papers are one of the best ways to engage the target audience. Nimble Auity has a passionate team of designers who understand content marketing and design principles to create visually appealing white papers that improve engagement, shareability, and ROI.
      </p>

      {/* Services Offered */}
      <h2 className="text-2xl font-semibold text-gray-800">White Paper Design Services We Offer</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li><strong>Backgrounder White Paper Design:</strong> Technical assessments presented with color-coding, icons, and visuals.</li>
        <li><strong>Numbered List White Paper Design:</strong> Bite-sized pointers enhanced with infographics and icons for easy reading.</li>
        <li><strong>Problem/Solution White Paper Design:</strong> Persuasive B2B white papers visualized with complex data and graphics.</li>
        <li><strong>Customized Infographics, Charts, and More:</strong> Diagrams, tables, pie charts, and bar graphs reflecting brand identity.</li>
        <li><strong>Content Creation and Proofreading:</strong> Professional content writing and proofreading services for crisp, sales-driven white papers.</li>
        <li><strong>White Paper Distribution Services:</strong> Strategically distribute content to relevant channels for maximum traction and ROI.</li>
      </ul>

      {/* Design Process */}
      <h2 className="text-2xl font-semibold text-gray-800">Our White Paper Design Process</h2>
      <ol className="list-decimal list-inside text-gray-700 space-y-2">
        <li><strong>Requirements Analysis:</strong> Understanding your expectations and vision.</li>
        <li><strong>Creating a Broad Format:</strong> Designing customized layouts in line with brand guidelines.</li>
        <li><strong>Visualizing the Content:</strong> Adding images, illustrations, icons, pull quotes, and more.</li>
        <li><strong>Designing a Stunning Cover:</strong> Eye-catching cover reflecting brand identity.</li>
        <li><strong>Client Approval and Revision:</strong> Incorporating edits and finalizing the design.</li>
        <li><strong>Creating a Customizable Template:</strong> Providing reusable templates for future use.</li>
        <li><strong>Submission:</strong> Secure delivery in the format of your choice.</li>
      </ol>

      {/* Other Services */}
      <h2 className="text-2xl font-semibold text-gray-800">Other Services You Can Benefit From</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Creative Design Services</li>
        <li>Illustrator Services</li>
        <li>Artwork Services</li>
        <li>Writing Services</li>
      </ul>

      {/* Why Choose Us */}
      <h2 className="text-2xl font-semibold text-gray-800">Why Hire Nimble as Your White Paper Design Service Provider?</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li><strong>Competitive Prices:</strong> Affordable white paper designs for companies of all sizes.</li>
        <li><strong>Customized and Compelling Designs:</strong> Brand-integrated, persuasive designs to improve conversions.</li>
        <li><strong>Committed Graphic Designers:</strong> Experienced team skilled in advanced design software.</li>
        <li><strong>24/7 Customer Support:</strong> Round-the-clock support through globally-located offices.</li>
        <li><strong>Fastest TAT:</strong> First draft delivered within 72 hours of project initiation.</li>
        <li><strong>100% Data Safety:</strong> Secure handling of all information at all times.</li>
      </ul>

      {/* Client Case Studies */}
      <h2 className="text-2xl font-semibold text-gray-800">Client Case Studies</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li><strong>Nimble Clipped and Edited 100,000 Drone Videos for a Leading Italian Studio:</strong> High-quality video clipping and editing delivered quickly.</li>
        <li><strong>Nimble Provided Engaging Content Writing Services to a Top HR Management Software Provider:</strong> Creative, engaging, and professional content delivered promptly.</li>
      </ul>

      {/* Testimonials */}
      <h2 className="text-2xl font-semibold text-gray-800">Testimonials</h2>
      <p className="text-gray-700 italic mb-4">
        "Thanks for your fast turnaround time and attention to detail for our busy Australian ad agency, appreciate your hard work."
        <br />
        <span className="font-semibold">— CEO, Digital Marketing Agency, Australia</span>
      </p>

      {/* CTA */}
      <div className="text-center">
        <a
          href="/contact-us"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-semibold transition"
        >
          Get in Touch for White Paper Design Services
        </a>
      </div>
    </div>
  );
};

export default WhitePaperDesign;
