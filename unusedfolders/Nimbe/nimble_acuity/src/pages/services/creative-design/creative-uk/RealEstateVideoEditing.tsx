import React from "react";
import CSmainmenu from "../CSmainmenu";

const RealEstateVideoEditing: React.FC = () => {
  const services = [
    "Cinematic Real Estate Video Editing",
    "Real Estate Video Highlight Reel",
    "Property Tour Video Editing Services",
    "Luxury Property Video Editing Services",
    "Real Estate Promotional Video Editing",
    "Virtual Property Tour Editing",
    "Real Estate 360 Video Editing",
    "Short Reel Video Editing Services",
    "Drone Video Editing Services",
    "Commercial Drone Video Editing",
    "GoPro Real Estate Video Editing",
    "Cine whoop Real Estate Video Editing",
    "Video Editing for Property Showcasing Across the UK",
    "Personal Branding Video Editing",
  ];

  const clients = [
    "Real Estate Agencies and Brokers",
    "Real Estate Consultants and Advisors",
    "Property Management Companies",
    "Builders and Developers",
    "Architects and Design Firms",
    "Homeowners and Sellers",
    "Commercial Real Estate Brokers",
    "Investment Firms",
    "Hospitality and Tourism Industry",
    "Residential and Commercial Property Owners",
  ];

  const benefits = [
    "ISO 9001:2015 certified with highest quality standards",
    "Skilled team of over 30 globally qualified designers",
    "Advanced tools: Adobe CC, Premiere, Final Cut Pro, After Effects",
    "Swift project turnaround: up to 3 videos per resource/day",
    "Easy scalability for high-priority projects or large workloads",
    "Competitive and customizable pricing packages",
  ];

  const additionalServices = [
    "Real Estate Drone Video Editing",
    "Video Editing Services",
    "Graphic Design Services",
    "Animation Services",
    "Storyboard Services",
    "Artwork Services",
  ];

  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Auity Real Estate Video Editing Services - UK
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Blend storytelling with our premium video editing services to create immersive property showreels. Captivate audiences, attract buyers, and close deals faster.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <p className="mb-4">
          In a competitive real estate market, making your properties stand out is essential. Nimble Auity helps translate your property listings into high-quality videos that highlight unique features, engage potential buyers, and increase conversion rates.
        </p>
        <p>
          We provide optimized videos for multiple platforms—websites, social media, and mobile—ensuring your properties look stunning everywhere.
        </p>
      </section>

      {/* Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Real Estate Video Editing Solutions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-bold text-xl mb-2">{service}</h3>
              <p className="text-gray-700">
                Professional {service.toLowerCase()} tailored to UK real estate market, designed to enhance your property's appeal and engage potential buyers.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-6 bg-gray-50 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Our Proven Pathway to Powerful Real Estate Videos</h2>
        <ol className="list-decimal list-inside space-y-4 max-w-3xl mx-auto">
          <li><strong>Collecting the Footage:</strong> Upload footage and specify editing needs.</li>
          <li><strong>Project Setup:</strong> Organize and prepare editing environment.</li>
          <li><strong>Video Snipping:</strong> Select and trim engaging, relevant sections.</li>
          <li><strong>Review and Edits:</strong> Make necessary adjustments to meet expectations.</li>
          <li><strong>Approval:</strong> Submit for client feedback and finalize edits.</li>
          <li><strong>Delivery:</strong> Deliver in the preferred format after approval.</li>
        </ol>
      </section>

      {/* Clients */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Clients We Serve</h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 list-disc list-inside">
          {clients.map((client, idx) => (
            <li key={idx}>{client}</li>
          ))}
        </ul>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Why Choose Nimble Auity</h2>
        <ul className="list-disc list-inside space-y-4 max-w-4xl mx-auto">
          {benefits.map((benefit, idx) => (
            <li key={idx}>{benefit}</li>
          ))}
        </ul>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-6 bg-blue-50 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Additional Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {additionalServices.map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">{service}</div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Client Case Studies</h2>
        <div className="space-y-6 text-center">
          <p>
            <strong>Real Estate Video Creation for Upmarket Realtor:</strong> Created promotional videos for multiple media channels.
          </p>
          <p>
            <strong>Video Editing for Netherlands-based Real Estate Giant:</strong> Edited 15 videos with issues like shaky camera and lighting problems, achieving 90% accuracy with fast turnaround.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10">Testimonials</h2>
        <p>
          "I would recommend Nimble Auity to anybody looking for professional video editing services. The team is fast, efficient, and cooperative, delivering excellent results at an affordable price." <br />
          <strong>Owner, Portrait and Background Editing Company</strong>
        </p>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16 px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Elevate Your Real Estate Marketing with Nimble Auity
        </h2>
        <p className="mb-6">
          Transform your property listings into captivating videos that attract buyers and close deals faster. Contact us today for a free quote!
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default RealEstateVideoEditing;
