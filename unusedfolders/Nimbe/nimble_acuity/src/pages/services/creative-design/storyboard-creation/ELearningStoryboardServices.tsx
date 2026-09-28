import React from "react";
import CSmainmenu from "../CSmainmenu";

const ELearningStoryboardServices: React.FC = () => {
  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble eLearning Storyboard Services
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Organize your course content and interactive elements like audio, video, and graphics efficiently starting at $10/hour.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <p className="mb-4">
          Nimble Auity provides professional eLearning storyboard services to enhance education and learning outcomes. We help improve retention in your audience and create interactive storyboard solutions for presentations, lectures, and classroom content.
        </p>
        <p>
          Our experienced team uses the latest animation software and rendering tools to generate exceptional eLearning storyboards that meet all your requirements.
        </p>
      </section>

      {/* eLearning Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our eLearning Storyboard Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Traditional eLearning Storyboard Creation",
              desc: "Create storyboards with key points, content sequences, and high-quality graphics or animations.",
            },
            {
              title: "eLearning Storyboard Conceptualization",
              desc: "Draft storyboards that layout your content effectively, allowing modifications to maximize learning impact.",
            },
            {
              title: "eLearning Film Storyboard Creation",
              desc: "Generate high-quality storyboards for educational films and commercials to convey messages engagingly.",
            },
            {
              title: "eLearning Storyboards for Promotional Content",
              desc: "Design storyboards to make your marketing and educational content stand out.",
            },
            {
              title: "eLearning Infographics Creation",
              desc: "Create detailed infographics tailored to convey intent, dialogue, audio, and visual cues.",
            },
            {
              title: "eLearning Storyboard Animation Creation",
              desc: "Develop animated storyboards incorporating scenarios, audio/video cues, and interactive elements.",
            },
            {
              title: "eLearning Storyboard Interactive Elements Creation",
              desc: "Add interactive elements like quizzes that reinforce learning without distraction.",
            },
            {
              title: "Graphics/Images Creation",
              desc: "Design visuals and graphics to enhance content engagement and audience attention.",
            },
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-bold text-xl mb-2">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Other Services You Can Benefit From
        </h2>
        <ul className="list-disc list-inside space-y-4 max-w-4xl mx-auto text-center">
          {[
            "Character Design Services",
            "Video Game Storyboard Services",
            "Cartoon Storyboard Services",
            "Storyboard Animatic Services",
          ].map((service, idx) => (
            <li key={idx}>{service}</li>
          ))}
        </ul>
      </section>

      {/* Why Choose Nimble */}
      <section className="bg-blue-50 py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Why Choose Nimble eLearning Storyboard Services?
        </h2>
        <ul className="list-disc list-inside space-y-4 max-w-4xl mx-auto">
          {[
            "Affordable Pricing Options: Cost-effective solutions starting at $10/hour.",
            "High-quality Services: ISO-certified firm providing best-in-class eLearning storyboards.",
            "Superb Infrastructure: World-class offices to ensure quality delivery.",
            "Tools and Technologies: Latest storyboard software and technologies for cutting-edge services.",
            "Structured Process: Streamlined approach for consistent, high-quality delivery.",
            "Experienced Team: 26+ years of experience creating various eLearning content.",
            "Data Security: Compliance with international data security laws.",
            "Short Turnaround: Timely delivery on every project.",
          ].map((benefit, idx) => (
            <li key={idx}>{benefit}</li>
          ))}
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Client Success Stories
        </h2>
        <div className="space-y-6 text-center">
          <p>
            <strong>Nimble Auity Provided 2D Animation Services to UK-based Children's Book Writer:</strong> Delivered high-quality, timely, and cost-effective 2D animation solutions.
          </p>
          <p>
            <strong>Nimble Auity Provided High-quality Animation Services for Social Awareness Campaign:</strong> End-to-end animation services to educate youth on the dangers of drugs and alcohol.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-10">Testimonials</h2>
        <p>
          "Thanks for your fast turnaround time, efficiency, professionalism, high-quality output, and attention to detail. We greatly appreciate all your effort." <br />
          <strong>CEO, Digital Marketing Agency, Australia</strong>
        </p>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Choose Nimble Auity for eLearning Storyboard Services
        </h2>
        <p className="mb-6">
          Professional, reliable, and cost-effective eLearning storyboards tailored to your project. Partner with us today!
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default ELearningStoryboardServices;
