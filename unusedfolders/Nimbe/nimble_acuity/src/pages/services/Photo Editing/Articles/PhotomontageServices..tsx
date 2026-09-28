import React from "react";
import PEMainMenu from "../PEmainmenu";

const PhotomontageServices: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Photomontage Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          High-quality photomontage services delivered by skilled professionals
          with 26+ years of expertise. Experience seamless image blending,
          creative visuals, and cost-effective solutions with Nimble Acuity.
        </p>
      </section>

      {/* About Section */}
      <section className="max-w-5xl mx-auto py-12 px-6 space-y-6">
        <p>
          Photomontage is a combination of photos or their fragments united
          artistically. It involves adding figures or objects, replacing or
          changing backgrounds, and manipulating lighting, color, and tone.
          Arranging all these elements can be a cumbersome task — that’s where
          outsourcing helps. At Nimble Acuity, we use cutting-edge software to
          deliver photomontage services for{" "}
          <b>portrait studios, publishing houses, online stores, and real estate firms</b>{" "}
          worldwide.
        </p>
        <p>
          Our team of experienced professionals has been serving international
          clients for over 26 years, offering cost-effective and fast turnaround
          photomontage solutions.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Our Distinct Photomontage Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Computer generated photomontage images",
            "3D photomontage services",
            "Architectural photomontage images",
            "Photomontage CAD images",
            "Photomontage CGI images",
            "Montage-de-photo",
            "Photo collages",
            "DVD photomontages",
            "Digital photo collage services",
            "Wedding photomontage",
            "Photomontage video",
            "Birthday photomontage",
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-white shadow rounded-lg hover:shadow-lg transition"
            >
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Verticals Section */}
      <section className="py-12 px-6">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Verticals / Industries We Cater To
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto text-center">
          {[
            "Online Apparels Shopping",
            "Online Electronic Store",
            "Online Automobile Store",
            "Online Sports Accessories",
            "Publishing Houses",
            "Portrait Studios",
            "Real Estate Companies",
          ].map((vertical, idx) => (
            <div
              key={idx}
              className="p-4 bg-gray-50 border rounded-lg hover:bg-gray-100"
            >
              {vertical}
            </div>
          ))}
        </div>
      </section>

      {/* Advantages Section */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Get the Nimble Acuity Advantage
        </h2>
        <ul className="max-w-4xl mx-auto list-disc list-inside space-y-2">
          <li>
            Combine 3D renderings and photographs to create realistic visuals
          </li>
          <li>Only the best pictures are selected for photomontage</li>
          <li>
            Team of experts with extensive experience in photomontage services
          </li>
          <li>
            Technical know-how to blend reality and 3D effects for quality
            output
          </li>
          <li>Ability to merge several pictures for the best results</li>
          <li>
            Specialized 3D rendering montage services for architectural projects
          </li>
        </ul>
      </section>

      {/* Technical Expertise */}
      <section className="py-12 px-6">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Our Technical Expertise
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
          {[
            "3D Rendering",
            "3D Architectural Illustration",
            "3D Interior Rendering",
            "3D Photorealistic Rendering",
            "3D Visualization",
            "3D Architectural Modeling",
            "3D Perspective Rendering",
            "3D Building Design",
            "3D Rendering Company",
          ].map((tech, idx) => (
            <div
              key={idx}
              className="p-4 bg-white shadow rounded-lg hover:shadow-md"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* Multimedia Montage */}
      <section className="bg-gray-50 py-12 px-6 max-w-5xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Customized Multimedia Montage Services
        </h2>
        <p>
          We digitally capture and arrange your photos into a multimedia
          presentation, adding music and storing it on a DVD. Our services
          include:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Animations</li>
          <li>Mixing of photo, video, and film elements</li>
          <li>Custom cropping</li>
          <li>Color correction</li>
          <li>Exposure adjustment</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 px-6 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <h2 className="text-2xl font-semibold mb-4">
          Sign up for a FREE Trial Today
        </h2>
        <p className="mb-6">
          Experience the quality of our photomontage services before you
          Nimble!
        </p>
        <button className="px-6 py-3 bg-white text-pink-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
          Try it now! Stop editing. Start clicking
        </button>
      </section>

      {/* Closing Section */}
      <section className="text-center py-12 px-6 bg-gray-100">
        <h2 className="text-xl font-semibold mb-2">
          Contact Us for Professional Photomontage Services
        </h2>
        <p>
          Nimble Acuity delivers high-quality photomontage services at
          cost-effective rates with quick turnaround time. Get in touch to take
          your visuals to the next level.
        </p>
      </section>
    </div>
  );
};

export default PhotomontageServices;
