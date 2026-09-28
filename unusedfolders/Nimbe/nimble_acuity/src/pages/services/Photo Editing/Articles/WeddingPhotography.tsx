import React from "react";
import PEMainMenu from "../PEmainmenu";

const WeddingPhotography: React.FC = () => {
  return (
    <div><PEMainMenu/>
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Hero Section */}
      
      <h1 className="text-3xl font-bold mb-6">Wedding Photography Tips & Techniques</h1>
      <p className="text-gray-700 mb-6">
        As a wedding photographer, you are tasked with capturing the most important
        moments of your clients' most important day. Wedding photos will be displayed
        for decades to come, so investing time, money, and the right techniques is
        critical. Here are essential tips to ensure your photographs perfectly capture
        those cherished memories.
      </p>

      {/* Intro */}
      <p className="text-gray-700 mb-6">
        With most photographers now using digital equipment, techniques have changed
        substantially. From camera resolution to lighting, everything matters. You may
        shoot over 1,000 photos, so flexibility and preparation are key. Most
        importantly, keep the couple’s wishes at the center of your approach.
      </p>

      {/* Preparation */}
      <h2 className="text-2xl font-semibold mb-4">Preparation Before the Big Day</h2>
      <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-8">
        <li>
          <strong>Know Your Equipment:</strong> Test every camera, lens, and memory
          card. Learn every mode, setting, and limit of your gear. Practice with
          friends or stage a mock wedding to prepare.
        </li>
        <li>
          <strong>Plan Your Shots:</strong> Work with the couple to create a detailed
          shot list. Include family, friends, and must-have moments so you won’t miss
          key memories.
        </li>
        <li>
          <strong>Communicate with the Couple:</strong> Share your style (natural
          light, staged shots, indoor/outdoor). Visit the venue beforehand so you know
          the best spots for photos.
        </li>
      </ul>

      {/* Shot Ideas */}
      <h2 className="text-2xl font-semibold mb-4">Sample Shot Ideas</h2>
      <div className="space-y-6 mb-8">
        <div>
          <h3 className="text-lg font-semibold">Groom Coverage</h3>
          <p className="text-gray-700">
            Capture details like the tie, rings, cufflinks, and cologne. Take fun
            group shots with groomsmen – laughing, posing, or sharing a moment.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Bride Coverage</h3>
          <p className="text-gray-700">
            Shots may include the back of the dress, bouquet, candid smiles, and
            photos with bridesmaids or the maid of honor.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Bride & Groom Together</h3>
          <p className="text-gray-700">
            Depending on whether they meet before the ceremony, capture intimate
            moments like a kiss, hug, or playful poses that will stand the test of
            time.
          </p>
        </div>
      </div>

      {/* Flash & Lighting */}
      <h2 className="text-2xl font-semibold mb-4">Using Flash in Wedding Photography</h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
        <li>Rely on natural light whenever possible to create authentic images.</li>
        <li>
          Use fill-flash to balance shadows without overwhelming the composition.
        </li>
        <li>
          Apply diffusers and reflectors to avoid harsh blowouts from direct flash.
        </li>
        <li>
          Stick with your primary lens to ensure consistency and sharp results.
        </li>
      </ul>
      <p className="text-gray-700 mb-8">
        While technical details are important, stay flexible. Unexpected events,
        surprises, and candid moments often make the most memorable wedding photos.
      </p>

      {/* CTA */}
      <div className="bg-blue-50 p-6 rounded-lg shadow text-center">
        <h3 className="text-xl font-semibold mb-2">
          Choosing the Right Partner for Wedding Photo Editing
        </h3>
        <p className="text-gray-700 mb-4">
          A wedding is one of the most important days of a couple’s life, and their
          photos deserve expert editing. Partner with Nimble Acuity for professional
          wedding photo post-processing to enhance your images beautifully.
        </p>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow">
          Contact Us Today
        </button>
      </div>
    </div>
    </div>
  );
};

export default WeddingPhotography;
