import React from "react";
import { PawPrint, Dog, Cat, Rabbit, CheckCircle2, Star } from "lucide-react";
import CSmainmenu from "../CSmainmenu";

const PetIllustrationServices: React.FC = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-green-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Nimble Auity – Pet Illustration Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Receive artistic and relevant pet illustration services that will wow
          your target audience. Our expert illustrators bring your pet stories
          to life with creativity and precision.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Custom Pet Illustration Services We Offer
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <div className="p-6 border rounded-2xl shadow-sm hover:shadow-lg transition">
            <Dog className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Dog Illustrations</h3>
            <p className="text-gray-600">
              We leverage cutting-edge illustration tools to capture the unique
              features of any type of dog with precision.
            </p>
          </div>
          <div className="p-6 border rounded-2xl shadow-sm hover:shadow-lg transition">
            <Cat className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cat Illustrations</h3>
            <p className="text-gray-600">
              Our seasoned illustrators expertly capture subtle feline nuances
              to deliver illustrations that perfectly match your requirements.
            </p>
          </div>
          <div className="p-6 border rounded-2xl shadow-sm hover:shadow-lg transition">
            <Rabbit className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Animal Illustrations</h3>
            <p className="text-gray-600">
              We also create artistic illustrations of unconventional pets,
              delivering unique and delightful visuals every time.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-green-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Are We The Preferred Pet Illustration Services Provider?
        </h2>
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
          {[
            "Expert Team with tremendous experience in pet illustrations.",
            "ISO-certified firm delivering international quality.",
            "100% original and creative pet illustrations.",
            "Use of latest software tools and technology.",
            "Clear communication to exceed expectations.",
            "Cost-effective services with global delivery."
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 mt-1" />
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Additional Services You Can Benefit From
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            "Graphic Design Services – brochures, flyers, logos, and more.",
            "Animation Services – 2D and 3D animations for all needs.",
            "Audio Editing Services – professional quality sound.",
            "Video Editing Services – color correction, effects, and more.",
            "Artwork Services – creative and original artwork delivery.",
            "Storyboard Services – immersive and engaging storyboards."
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-5 border rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <p className="text-gray-700">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-green-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Customer Success Stories
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="p-6 border rounded-2xl shadow-sm bg-white">
            <h3 className="text-xl font-semibold mb-2">
              Case Study on Prepress and Vector Artwork for Printing Company
            </h3>
            <p className="text-gray-700">
              Nimble Auity provided accurate and high-quality prepress and
              vector artwork services to a Dublin-based creative firm at
              cost-effective rates with a quick turnaround.
            </p>
          </div>
          <div className="p-6 border rounded-2xl shadow-sm bg-white">
            <h3 className="text-xl font-semibold mb-2">
              Case Study on Vector Artwork for US-based Label Designer
            </h3>
            <p className="text-gray-700">
              A leading US label designer required flawless artwork, which we
              delivered successfully, much to the client’s delight.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Testimonials</h2>
        <div className="max-w-3xl mx-auto">
          <Star className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
          <p className="text-lg italic text-gray-700 mb-4">
            “The quality of Artwork delivered during the trial period was
            exceptional and that helped us to decide on our new Outsourced
            Partner from a couple of quotes from companies across the globe.”
          </p>
          <p className="font-semibold text-gray-900">
            Director - Operations, Leading Pharmaceutical Company in Netherlands
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Pet Illustration Services
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          If you are looking to ensure that your pet illustrations are aligned
          with your vision and requirements, we are here to help. Get accurate,
          creative, and cost-effective illustrations delivered on time.
        </p>
        <button className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default PetIllustrationServices;
