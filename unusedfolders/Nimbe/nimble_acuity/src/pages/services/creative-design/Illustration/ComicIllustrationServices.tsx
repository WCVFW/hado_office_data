import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CSmainmenu from "../CSmainmenu";

const ComicIllustrationServices: React.FC = () => {
  return (
    <section className="w-full bg-white text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="relative bg-gradient-to-r from-purple-600 to-pink-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Comic Book Illustration Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Get the finest touch of professional graphics to create fascinating
          visuals with our comic book illustration services.
        </p>
      </div>

      {/* Intro */}
      <div className="max-w-6xl mx-auto py-12 px-6 space-y-6 text-lg">
        <p>
          Struggling to make your comic books alluring and depict your storyline
          creatively? Are you unable to find qualified illustrators with the
          right skill sets to create enticing visuals that clock in sales? Then
          we suggest you leverage our professional comic book illustration
          services.
        </p>
        <p>
          Most authors and publishing houses lack skilled illustrators, modern
          tools, and other vital resources needed to create remarkable
          illustrations for comic books. As a professional comic book
          illustration services company with 26+ years of experience, Nimble
          Auity caters to the complex illustration needs of global clients. Our
          experts design illustrations by considering your target persona (kids,
          students, youth, and adults, among others) to create appealing
          illustrations that enhance the reading experience and compel sharing.
        </p>
      </div>

      {/* Services Offered */}
      <div className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Comic Book Illustration Services We Offer
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              title: "Style Development",
              desc: "We provide multiple style options and visual access for clients to choose the desired style.",
            },
            {
              title: "Comic Book Art",
              desc: "Globally recognized design experts create detailed artistic illustrations for comic books.",
            },
            {
              title: "Textbook Art",
              desc: "Immersive and instructional imagery in books to increase interest and relatability.",
            },
            {
              title: "Character Development",
              desc: "We design unforgettable characters focusing on complexion, posture, expressions, costumes, and movements.",
            },
            {
              title: "Cover Art",
              desc: "Highly attractive cover designs that depict your script without sidelining artistic properties.",
            },
          ].map((item, idx) => (
            <Card key={idx} className="shadow-md rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Process Flow */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Comic Book Illustration Services Process Flow
        </h2>
        <ol className="space-y-6 md:space-y-8">
          {[
            {
              step: "01. Comprehension",
              desc: "We connect with clients to understand their needs and the illustrations they want.",
            },
            {
              step: "02. Illustration",
              desc: "We develop sketches, styles, and storyboards tailored to client needs.",
            },
            {
              step: "03. Authorization",
              desc: "Sketches are presented to clients for review and feedback.",
            },
            {
              step: "04. Execution",
              desc: "Based on feedback, we finalize and create artwork for comic usage.",
            },
            {
              step: "05. Project Completion",
              desc: "Final illustrations are securely delivered to the client.",
            },
          ].map((item, idx) => (
            <li
              key={idx}
              className="bg-gray-100 p-6 rounded-2xl shadow-md border"
            >
              <h3 className="font-semibold text-lg">{item.step}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Why Choose */}
      <div className="bg-gradient-to-r from-pink-50 to-purple-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Makes Us the Preferred Comic Book Illustration Service Provider?
        </h2>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            "High-quality Services – ISO 9001:2000 certified, delivering international standards.",
            "Short Project Turnaround – Powered by world-class infrastructure and latest tools.",
            "Data Security – Secure servers, VPNs, and FTPs safeguard client data.",
            "Skilled and Experienced Team – Worked with numerous publishers and authors.",
            "24/7 Customer Support – Global support centers always available.",
            "Flexible Pricing – Custom options based on budgets and needs.",
          ].map((point, idx) => (
            <li
              key={idx}
              className="bg-white shadow-md border rounded-2xl p-6 text-gray-700"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>

      {/* Additional Services */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Additional Services You Can Benefit From
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Graphic Design Services",
            "Animation Services",
            "Audio Editing Services",
            "Video Editing Services",
            "Artwork Services",
            "Storyboard Services",
          ].map((service, idx) => (
            <Card key={idx} className="shadow-md rounded-2xl">
              <CardContent className="p-6 text-center font-medium text-gray-800">
                {service}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Case Studies */}
      <div className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Customer Success Stories
        </h2>
        <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
          {[
            {
              title:
                "Nimble Auity Provided Magazine Layout Services to a US Entrepreneur",
              desc: "We designed a children's magazine following international design standards within a month.",
            },
            {
              title:
                "Nimble Auity Provided Prepress Services for a US Enterprise",
              desc: "We handled large-scale prepress requirements using PrintShopMail and PlanetPress, saving client costs.",
            },
          ].map((cs, idx) => (
            <Card key={idx} className="shadow-md rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{cs.title}</h3>
                <p className="text-gray-700">{cs.desc}</p>
                <Button variant="link" className="mt-2 p-0">
                  Read more
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-4xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
        <blockquote className="bg-white border rounded-2xl shadow-md p-8 text-gray-700 italic">
          “The quality of Artwork delivered during the trial period was
          exceptional and that helped us to decide on our new Partner from a
          couple of quotes from companies across the globe.”
          <br />
          <span className="block mt-4 font-semibold">
            Director - Operations, Leading pharmaceutical company in Netherlands
          </span>
        </blockquote>
        <Button variant="link" className="mt-6">
          More Testimonials »
        </Button>
      </div>

      {/* Call to Action */}
      <div className="bg-purple-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Outsource Comic Book Illustration Services to Embark on Your Art
          Venture
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          We are a leading comic book illustration service provider with over
          two decades of experience. Leverage our highly skilled illustrators
          and the latest design software to create enticing visuals that
          captivate your target audience.
        </p>
        <Button size="lg" variant="secondary">
          Contact Us Today
        </Button>
      </div>
    </section>
  );
};

export default ComicIllustrationServices;
