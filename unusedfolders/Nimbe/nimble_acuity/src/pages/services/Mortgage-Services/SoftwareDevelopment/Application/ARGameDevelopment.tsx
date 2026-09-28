import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const ARGameDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              AR Game Development Services
            </h2>
            <p className="text-lg text-gray-600">
              We provide out-of-the-box solutions and offer the most effective AR game design and development services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Augmented reality game development combines live video with computer images, sound, video, or GPS data during game development to provide the most advanced games with enhanced visuals and sound effects.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** uses an industry-leading team and gaming technology to create the highest quality mobile gaming solutions with stunning features, exceptional design, and an intuitive interface for a fun game experience. Our team of game developers has achieved success in conceptualizing games, storyboarding, 3D designs, implementing, testing, and even marketing augmented reality games.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              AR Game Development Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are a specialized AR game development service provider. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Geo-Location Games:</strong> We develop treasure hunts and quests that allow players to move through locations and search for virtual clues and objects.</li>
              <li><strong>AR FPS Games:</strong> We create first-person shooter games where the thrill is enhanced with AR features like virtual obstacles and enemies.</li>
              <li><strong>AR-Based RPGs:</strong> Users can experience a whole new level of role-playing games, going on quests to fight monsters and find hidden treasures.</li>
              <li><strong>AR Sport Games:</strong> Our team of experts creates fun and exciting AR sports games like soccer, basketball, golf, and more.</li>
              <li><strong>AR Table Games:</strong> We develop AR table games including roulette, poker, chess, Ludo, Snakes and Ladders, and carrom.</li>
              <li><strong>AR Card Games:</strong> We develop augmented reality card games like rummy, teen Patti, and solitaire for users to kill time.</li>
              <li><strong>AR Turn-Based Games:</strong> We also create two-player games, giving users an overall experience with turn-based AR games.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for AR Game Development?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Outsourcing AR game development services to us provides you with these advantages:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Cost-Effective Services:</strong> We provide our services with a varied range of plans and pricing as per your requirement.</li>
              <li><strong>Quick Turnaround Time:</strong> With us, you will always get your game developed on time without any delay.</li>
              <li><strong>24/7 Availability:</strong> Our support team works throughout the year to support clients from different time zones.</li>
              <li><strong>State-of-the-art Hardware:</strong> Our dedicated AR development studios utilize an excellent portfolio of state-of-the-art hardware and equipment.</li>
              <li><strong>Access to Skilled Professionals:</strong> Our team of augmented reality game developers and designers has impeccable control over the necessary tools and SDKs.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Develop Your AR Game?
            </h3>
            <p className="text-gray-700 mb-6">
              To be successful in the gaming industry you need professionals who are truly passionate about game development projects and have all the skills you need to bring your ideas to life. **Nimble Acuity** is a leading provider of AR game development services with unique and personalized services that best match your real business needs.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you are looking for a cross-platform game development company that develops games according to global standards and has years of experience, then your search ends here. Get in touch with us to learn more.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Contact Us Today
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ARGameDevelopment;