import React from "react";
import CSmainmenu from "../CSmainmenu";

const MagazineDesign: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Nimble Auity - Creative Magazine Layout and Design Services
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            Enhance Your Magazine's Impact! Our professional magazine design
            services merge creativity and strategic thinking to craft enticing
            layouts, capturing your readers' attention and fostering deep
            engagement.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto py-12 px-6 md:px-12 space-y-6">
        <p>
          Harness the power of our comprehensive Magazine Layout and Design
          Services, custom-made to meet the unique needs of publishers
          worldwide. As a leading magazine design company, we specialize in
          creating compelling designs that resonate with your audience and
          enhance their reading experience.
        </p>
        <p>
          Our team, proficient in Adobe InDesign, Adobe Illustrator, Adobe
          Photoshop Creative Suite, Adobe Photoshop CC, CorelDRAW, and
          QuarkXPress, meticulously inspects every digital image for optimal
          details and color, enhancing as necessary.
        </p>
        <p>
          We understand the challenges faced by businesses—standing out in a
          saturated market, maintaining a consistent brand image, reaching a
          diverse audience, and operating within a strict budget. Our solution?
          Tailor-made magazine design services for small business to large
          enterprises, leveraging advanced magazine layout design software.
        </p>
      </section>

      {/* Services Overview */}
      <section className="bg-white py-12 px-6 md:px-12 max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Exceptional Magazine Design Services We Provide
        </h2>
        <p className="text-center mb-6">
          We leverage industry-standard tools and years of expertise to create
          designs that are both aesthetically pleasing and technically sound.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-xl">Cover Design Service</h3>
            <p>
              Your magazine's cover is its first impression, and we make it
              count. Backed by expertise in color theory, image resolution, and
              professional tools, we ensure optimum print quality.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl">Layout Design Service</h3>
            <p>
              Our layouts use grid-system principles, advanced typography, and
              Adobe Illustrator for custom fonts and styles to enhance
              readability and appeal.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl">Page Design Service</h3>
            <p>
              We implement strategic font pairing, margin settings, and column
              layouts, balancing text hierarchy and whitespace for maximum
              engagement.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl">Typography Service</h3>
            <p>
              Typography sets your magazine's tone. Our kerning, leading, and
              tracking expertise makes your text both readable and visually
              engaging.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl">
              Professional Photo Editing Service
            </h3>
            <p>
              Using Photoshop CC and Lightroom, we provide non-destructive
              editing, enhancing images while maintaining their original
              integrity.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl">
              Strategic Ad Placement Design
            </h3>
            <p>
              We optimize ad visibility with heat map analysis and eye-tracking
              studies, ensuring balance between advertisers and readers.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-100 py-12 px-6 md:px-12 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Customer Success Stories
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-xl">
              Nimble Provided Magazine Layout Services
            </h3>
            <p>
              A US-based entrepreneur launching a golf magazine for children
              partnered with Nimble for end-to-end design support. Within a
              month, the magazine was launched to international standards.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl">
              Nimble Delivers Audio Speaker Catalog Design
            </h3>
            <p>
              For a Hong Kong client, we designed an audio speaker catalog
              within 24 hours, achieving 96% accuracy and full client
              satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-12 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Testimonials</h2>
        <blockquote className="italic text-lg">
          “Nimble Auity delivered an outstanding and professional service. Even
          though my order was a small & first order, they showed professionalism
          and completed the service quickly and to my utmost satisfaction. I
          strongly recommend Nimble service.”
        </blockquote>
        <p className="mt-4 font-medium">— Photographer, USA</p>
      </section>

      {/* Tools */}
      <section className="bg-gray-100 py-12 px-6 md:px-12 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Digital Tools We Use
        </h2>
        <p className="text-center">
          Adobe Illustrator, Adobe InDesign, Adobe Photoshop, CorelDraw,
          QuarkXPress, Canva, Affinity Publisher, Microsoft Publisher
        </p>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Elevate Your Magazine Design?
          </h2>
          <p className="mb-6 text-lg">
            Contact Nimble Auity to outsource your magazine layout and artwork
            services. Let us craft compelling designs while you focus on
            creating great content.
          </p>
          <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default MagazineDesign;
