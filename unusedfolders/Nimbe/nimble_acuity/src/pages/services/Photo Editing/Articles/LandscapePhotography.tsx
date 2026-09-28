import React from "react";
import PEMainMenu from "../PEmainmenu";

const LandscapePhotography: React.FC = () => {
  const tips = [
    {
      title: "Finding the Best Point",
      text: "Once you mark your location for the shot, do not just click it from a conventional angle. Walk around and go for unusual and least-tried angles to capture that unique shot.",
    },
    {
      title: "Perfect Time of the Day",
      text: "Most photographers prefer clicking during golden time (dusk or dawn) where the light is at its intoxicating best. Always be ready though, as nature can surprise you.",
    },
    {
      title: "Have a Focal Point",
      text: "Ensure a primary focal point or foreground so viewers know where to look. Background should complement the foreground for a smooth viewing experience.",
    },
    {
      title: "Maximize the Depth Of Field",
      text: "Landscapes demand greater depth. Use a smaller aperture for more depth of field, balancing with longer shutter speed or higher ISO.",
    },
    {
      title: "Use a Tripod",
      text: "A tripod is essential for long exposures required by small apertures. Use a cable or wireless shutter release for maximum stillness.",
    },
    {
      title: "Get Creative",
      text: "Experiment with lenses like fisheye, use rule of thirds, and explore unconventional landscape techniques for unique captures.",
    },
    {
      title: "Photo Editing",
      text: "Use post-production software and editing services to remove glitches, sharpen photos, and enhance images as per your vision.",
    },
    {
      title: "Breaking Conventions and Rules",
      text: "Photography thrives on creativity, not strict rules. Explore and break conventions when needed to create breathtaking images.",
    },
  ];

  return (
    <div>      {/* Navigation Wrapper */}
      <PEMainMenu/>
    <div className="max-w-6xl mx-auto px-6 py-10">

      <div id="navigation" className="mb-8">
        {/* Add your navigation component here, e.g., <PEMainMenu /> */}
      </div>

      {/* Header */}
      <h1 className="text-3xl font-bold mb-4">
        8 Landscape Photography Tips and Techniques
      </h1>
      <p className="text-gray-700 mb-6">
        Perfect landscape photography is not a cake walk; it takes adjusting
        aperture, shutter speed, and ISO for that perfect shot. These tips will
        help you capture more stunning and captivating landscapes.
      </p>

      {/* Tips Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {tips.map((tip, idx) => (
          <div key={idx} className="bg-gray-50 p-5 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
            <p className="text-gray-700">{tip.text}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-blue-50 p-6 rounded-lg shadow text-center">
        <h2 className="text-xl font-semibold mb-3">
          Sign up for a FREE trial with us today
        </h2>
        <p className="text-gray-700 mb-4">
          Experience the quality of our work before you Nimble! Hope these
          landscape photography techniques gave you insights into capturing
          breathtaking landscapes.
        </p>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow">
          Try it now!
        </button>
      </div>

      {/* Contact */}
      <p className="text-gray-700 text-center mt-6">
        Contact us for any photo editing requirements.
      </p>
    </div>
    </div>
  );
};

export default LandscapePhotography;
