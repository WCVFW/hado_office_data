import React from "react";
import CSmainmenu from "../CSmainmenu";

const VirtualReality: React.FC = () => {
  const vrApplications = {
    Military: [
      "Virtual reality simulator to train soldiers in safe combat situations",
      "Flight simulation for Air Force pilots",
      "Battlefield training for medics",
      "Vehicle simulation",
      "Treatment for PTSD (Post-traumatic Stress Disorder)"
    ],
    Education: [
      "Presenting complex data to students in an easy and engaging manner",
      "Allowing children to interact with unknown objects and learn",
      "Developing practical simulations for astronomy, surgery, etc."
    ],
    Entertainment: [
      "Creating virtual museums and exhibitions",
      "Making interactive movies and theatre plays",
      "Creating virtual theme parks"
    ],
    Business: [
      "Virtual tours of product facilities",
      "New Product Development simulations for 360° product view",
      "Testing prototypes in virtual environments to reduce costs"
    ],
    Sports: [
      "Virtual training aids for sportsmen",
      "Disabled-friendly simulations",
      "Equipment design, including safer apparel for motorsports",
      "VR games for audiences to interact with sports stars"
    ]
  };

  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Is Virtual Reality the Reality of the Future?
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Explore the evolution, applications, and future potential of Virtual Reality across industries.
        </p>
      </section>

      {/* VR Introduction */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">What is Virtual Reality?</h2>
        <p className="mb-4">
          Virtual Reality (VR) describes a computer-generated 3D environment with which a person can interact. VR experiences allow manipulation of surrounding objects and, in some systems, simulate sensory inputs like sound and smell for a fully immersive experience.
        </p>
        <p>
          VR promises an augmented experience of the world, impacts gaming, healthcare, education, fashion, and aims to usher in a new era of innovation.
        </p>
      </section>

      {/* History */}
      <section className="py-16 px-6 bg-blue-50 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Virtual Reality - A Brief History</h2>
        <h3 className="text-xl font-semibold mt-4">The 60s</h3>
        <p className="mb-2">
          Morton Heilig, father of Virtual Reality, developed the Sensorama, a 3D film simulator with vibrating seats, scent, and wind effects.
        </p>

        <h3 className="text-xl font-semibold mt-4">The 80s</h3>
        <p className="mb-2">
          Atari founded the Sunnyvale Research Lab, leading to Tom Zimmerman creating VPL, developing the Dataglove, DataSuit, and EyePhone head-mounted display.
        </p>

        <h3 className="text-xl font-semibold mt-4">The New Millennium</h3>
        <p>
          VR progressed slowly until 2012 when Palmer Luckey launched Oculus Rift, sparking global interest. Companies like Microsoft and Sony now produce their own VR systems.
        </p>
      </section>

      {/* VR Applications */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Applications of Virtual Reality Across Diverse Fields</h2>
        {Object.entries(vrApplications).map(([field, uses], idx) => (
          <div key={idx} className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">{field} Applications</h3>
            <ul className="list-disc list-inside">
              {uses.map((use, i) => (
                <li key={i}>{use}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Future of VR */}
      <section className="py-16 px-6 bg-blue-50 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">The Future of Virtual Reality</h2>
        <p className="mb-4">
          Facebook's 2012 acquisition of Oculus Rift for $2B marked the rise of VR as a mainstream technology. Market forecasts estimated VR software and hardware could generate nearly $150B in revenues by 2020.
        </p>
        <p className="mb-4">
          Microsoft Hololens aims to aid architects and designers via holograms, while Sony's Project Morpheus brings VR to PlayStation users. VR is poised to deliver unique gaming, communication, and visualization experiences worldwide.
        </p>
      </section>

      {/* Nimble Auity Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Nimble Auity - Virtual Reality Services</h2>
        <p className="mb-6">
          At Nimble, our services span multiple industries including Marketing, Healthcare, Insurance, and Imaging. We stay updated with technological innovations to provide timely and highly relevant VR solutions. 
        </p>
        <p className="mb-6">
          If you have an idea for leveraging VR in your business, our team of professionals can help you get started.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Contact Nimble Auity
        </button>
      </section>
    </div>
  );
};

export default VirtualReality;
