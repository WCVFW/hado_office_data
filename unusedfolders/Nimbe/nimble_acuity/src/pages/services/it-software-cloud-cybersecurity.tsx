import React from "react";
import DSmainmenu from "./DataServices/DSmainmenu";

const ITSoftwareCloudCybersecurity: React.FC = () => {
  const services = [
    { title: "Data Entry Services", description: "We have been in the data entry business for over 24 years and our services are backed by this solid experience in handling diverse requirements." },
    { title: "Data Annotation Services", description: "Accurate data annotation is crucial for AI/ML systems to continuously assimilate and integrate all the data points. With our precision tagging, your systems can achieve just that." },
    { title: "Image Annotation Services", description: "Enhance your AI and machine learning projects with our precise Image Annotation Services." },
    { title: "eBooks Conversion Services", description: "Unlock new audiences and formats while maintaining the integrity of your original material with our versatile eBooks Conversion Services." },
    { title: "Document Digitization Services", description: "Embrace the digital era to preserve important records with our comprehensive Document Digitization Services." },
    { title: "Data Processing Services", description: "Data processing is critical if you want to get the most out of your data. We make data processing easy so you can focus on higher-value tasks." },
    { title: "Data Conversion Services", description: "Our team of data experts have been handling data conversion requirements for a diverse clientele from across the world." },
    { title: "OCR Services", description: "Our optical character recognition services are provided by a seasoned team of data processing specialists. Easily convert your data into digital formats." },
    { title: "Data Extraction Services", description: "Leverage the power of data to drive informed decisions and business growth with our precise Data Extraction Services." },
    { title: "Offline Data Entry Services", description: "Maintain data accuracy and organization even without an internet connection with our reliable Offline Data Entry Services." },
  ];

  const stats = [
    { value: "40%", label: "Cost Reduction" },
    { value: "8-24 Hrs", label: "Faster Turnaround" },
    { value: "500+", label: "Satisfied Clients" },
    { value: "350+", label: "Skilled Data Management Experts" },
    { value: "99%", label: "Accuracy" },
    { value: "21", label: "Years Experience" },
  ];

  return (
    <div className="w-full bg-white text-gray-800">
      {/* Navbar */}
      <DSmainmenu />

      {/* Hero Section */}
      <section className="bg-[#F0FAFB] py-24 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#006A7C] mb-6">
          Data Support Services We Offer
        </h1>
        {/* Hero Image */}
        <div className="mb-8 flex justify-center">
          <img
            src="/images/img15.jpeg" // replace with your image
            alt="Data Support Services"
            className="rounded-lg shadow-lg max-h-80 w-full max-w-4xl object-cover"
          />
        </div>
        
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700">
          Delivering world-class data support services and solutions to a global clientele for over 23 years.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-[#006A7C]">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-[#006A7C] mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#F0FAFB] py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow flex flex-col items-center">
              <p className="text-2xl md:text-3xl font-bold text-[#006A7C]">{stat.value}</p>
              <p className="mt-1 text-gray-700 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Philippines Delivery Center */}
      <section className="py-16 px-6 md:px-20 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">Data Support Services in the Philippines</h2>
        <p className="text-gray-700 text-lg md:text-xl">
          Our global delivery center in the Philippines employs highly experienced professionals and offers the infrastructure and systems to provide world-class data support services within extremely quick turnaround times.
        </p>
      </section>

      {/* Key Differentiators */}
      <section className="bg-[#F0FAFB] py-16 px-6 md:px-20 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#006A7C]">Key Differentiators</h2>
        <ul className="list-disc ml-5 text-gray-700 space-y-3 text-base md:text-lg">
          <li>Over 26+ years of experience in delivering comprehensive data support solutions.</li>
          <li>Ensured high project visibility, guaranteed quality, and faster turnaround.</li>
          <li>Substantial cost savings for clients across industries.</li>
          <li>Expertise in handling complex data entry, conversion, and processing requirements.</li>
        </ul>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-6 md:px-20 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#006A7C]">Industries We Serve</h2>
        <p className="text-gray-700 text-lg md:text-xl">
          Our data support company caters to multiple industries including logistics, customs brokerage, finance, legal, e-commerce, healthcare, and more. We help clients manage, digitize, and process crucial business data efficiently.
        </p>
      </section>

      {/* Case Studies & Articles */}
      <section className="bg-[#006A7C] py-16 px-6 md:px-20 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Studies & Articles</h2>
        <p className="mb-6 max-w-2xl mx-auto text-lg md:text-xl">
          Explore how Nimble Acuity has helped companies manage important business data, and read our insights on data entry, processing, conversion, analytics, and more.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-4 bg-white text-[#006A7C] font-semibold rounded-xl hover:bg-[#E0F7F9] transition-colors"
        >
          Contact Us
        </a>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#006A7C]">What Our Clients Say</h2>
        <div className="bg-white shadow-lg rounded-xl p-8 text-center max-w-3xl mx-auto">
          <p className="text-gray-700 mb-4 italic text-lg md:text-xl">
            "Working with Nimble Acuity has been a great experience. They quickly learned our line of business, adapted to our requirements and have consistently performed well."
          </p>
          <p className="font-semibold text-lg md:text-xl">Spokesperson, Executive recruitment firm in US</p>
        </div>
      </section>
    </div>
  );
};

export default ITSoftwareCloudCybersecurity;
