import React from "react";
import CSmainmenu from "../CSmainmenu";

const CreativeDesignSteps: React.FC = () => {
  const steps = [
    {
      title: "Understanding Your Target Audience",
      description:
        "Use social media analytics and focus groups to gather data. Develop customer personas to tailor aesthetics and functionality. Empathy mapping helps gain insights into users' psychological and emotional responses."
    },
    {
      title: "Brainstorming for Limitless Creativity",
      description:
        "Foster open collaboration to exchange ideas and challenge assumptions. Use sketching, mind mapping, and divergent thinking to expand concepts. Collaborative sessions spark innovation and unique design solutions."
    },
    {
      title: "Prototyping Your Design Ideas",
      description:
        "Develop interactive prototypes using tools like Figma or Adobe XD. Test elements, iterate rapidly, and refine based on feedback to ensure the final design aligns with user expectations and creative vision."
    },
    {
      title: "Feedback Integration",
      description:
        "Collect input from users and stakeholders via surveys, focus groups, and usability tests. Heuristic evaluation helps assess usability and improve aesthetics, allowing data-driven design decisions."
    },
    {
      title: "Optimize and Sharpen Your Design Concepts",
      description:
        "Refine typography, imagery, color schemes, spacing, and alignment. Collaborate with experts in accessibility and inclusiveness. Grit systems enhance balance and precision, converting ideas into professional-grade creatives."
    },
    {
      title: "Design Launch and Impact Evaluation",
      description:
        "Deploy the design to intended platforms, rigorously testing for flaws. Collect post-launch responses and use A/B testing to enhance performance. Analyze impact systematically to stay relevant with evolving technologies and user needs."
    }
  ];

  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-indigo-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Six Essential Steps to Develop Impactful Creative Designs
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Nimble Auity guides you through a structured approach to transform ideas into compelling visuals that resonate and leave a lasting impact.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <p className="mb-4">
          The difference between a good design and a great creative lies in the process. Blending creativity with strategy, intuition with precision, leads to visuals that are both innovative and impactful.
        </p>
        <p>
          From iconic logos to user-centric design solutions, a structured approach ensures that every design element serves a purpose and maximizes its impact.
        </p>
      </section>

      {/* Steps Section */}
      <section className="py-16 px-6 bg-gray-50 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Six Steps to Achieve Design Excellence
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Transforming Your Ideas into Design Excellence
        </h2>
        <p className="mb-4">
          Nimble Auity ensures your creative process is structured and impactful. By following these six steps, you can turn ideas into powerful, enduring designs that resonate with your audience.
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
          Contact Us for Creative Design Services
        </button>
      </section>
    </div>
  );
};

export default CreativeDesignSteps;
