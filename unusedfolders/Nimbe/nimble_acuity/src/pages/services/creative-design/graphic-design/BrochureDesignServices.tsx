import React from "react";
import CSmainmenu from "../CSmainmenu";

const BrochureDesignServices: React.FC = () => {
  const brochureTypes = [
    "Custom Brochure Design",
    "Brochure Design PDF",
    "Creative Brochure Design",
    "Presentation Folders",
    "Travel Brochures",
    "Hotel Brochure Design",
    "Corporate Brochures",
    "Product Brochures",
    "Business Brochure Design",
    "Interior Design Brochure",
    "Illustration Brochure Design",
    "Event Brochure Design",
  ];

  const processFlow = [
    "Briefing: Receive client brief, previous samples, and copy via email, FTP, or Dropbox.",
    "Work Allocation: Assign designers, illustrators, account managers, etc., to the project.",
    "Design: Graphic designers create brochures using Adobe Photoshop CC, Illustrator, and other software.",
    "Quality Check: QA team performs multiple checks to meet ISO and SLA standards.",
    "Output: Final designs uploaded via FTP or Dropbox in the client's preferred format.",
  ];

  const benefits = [
    "Technique and Creativity: Designs that communicate your message effectively.",
    "Talented Team: Designers ensure the brochure reflects your brand identity.",
    "Quick Turnaround: Designs delivered in 24-48 hours (depending on project).",
    "Experienced Resources: Skilled designers, illustrators, and content specialists.",
    "SLA Adherence: 99% adherence to service level agreements.",
    "Progress Updates: Regular updates from account managers.",
    "Secure Data: GDPR-compliant secure FTP transfers.",
    "Quality Checks: Multiple checks ensure the highest quality output.",
  ];

  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-blue-700 text-white py-16 px-6 md:px-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nimble Brochure Design Services</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Expand your market reach and create a strong perception of your brand with Nimble Auity’s professional brochure design services.
        </p>
      </div>

      {/* Introduction */}
      <div className="max-w-5xl mx-auto py-12 px-6 md:px-16 space-y-4 text-gray-800">
        <p>
          Brochures serve as the first point of contact with customers and can influence how your brand is perceived. Nimble Auity provides expert brochure design services for businesses and individuals, delivering high-quality, attention-grabbing brochures in both print and digital formats.
        </p>
        <p>
          With over 20 years of experience and more than 2 million designs created, our creative team ensures your brochures are visually appealing and informative.
        </p>
      </div>

      {/* Brochure Types */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Our Brochure Design Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brochureTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-gray-800">{type}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Process Flow */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-6 md:px-16">
          <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Our Brochure Design Process</h2>
          <div className="space-y-6">
            {processFlow.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-blue-700 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center">
                  {index + 1}
                </div>
                <p className="text-gray-800">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">Why Choose Nimble Auity?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <p className="text-gray-800">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call To Action */}
      <div className="bg-blue-700 text-white py-16 text-center px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Started Today</h2>
        <p className="mb-6 max-w-3xl mx-auto">
          Partner with Nimble Auity to create visually appealing and effective brochures. Contact us for a free quote or trial today.
        </p>
        <button className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default BrochureDesignServices;
