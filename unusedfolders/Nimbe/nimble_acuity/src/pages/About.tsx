import React from "react";
import { Target, Award, Users2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: <Target className="h-8 w-8 text-white" />,
    title: "Precision",
    description: "Delivering accurate, reliable insights that drive meaningful business outcomes."
  },
  {
    icon: <Award className="h-8 w-8 text-white" />,
    title: "Excellence",
    description: "Our commitment to quality ensures every solution meets the highest standards."
  },
  {
    icon: <Users2 className="h-8 w-8 text-white" />,
    title: "Partnership",
    description: "Working closely with clients to understand their unique challenges and goals."
  }
];

const About: React.FC = () => {
  return (
    <div className="bg-white font-sans text-[#006A7C]">

      {/* Hero Section */}
      <section className="bg-white text-[#006A7C] py-24">
  <div className="max-w-4xl mx-auto px-6 text-center">
    {/* Text Content */}
    <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
      About Nimble Acuity
    </h1>
    <p className="text-lg md:text-xl mb-6 text-gray-700 leading-relaxed">
      We combine data, strategy, and technology to help organizations grow and adapt in an ever-changing world. 
      Our approach is collaborative, results-driven, and tailored to meet your unique business needs.
    </p>
    <Link
      to="/contact"
      className="inline-flex items-center px-6 py-3 rounded-full bg-[#006A7C] text-white font-medium hover:scale-105 transition-transform"
    >
      Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
    </Link>
  </div>
</section>


      {/* Mission & Approach Section */}
      <section className="py-20 bg-[#E6F3F5]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition hover:-translate-y-2 animate-fade-in">
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              We bridge the gap between complex data and strategic decision-making, enabling organizations to unlock their potential.
            </p>
            <p className="text-gray-700">
              Cutting-edge analytics paired with deep industry expertise ensures sustainable growth and actionable insights.
            </p>
          </div>
          <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition hover:-translate-y-2 animate-fade-in delay-200">
            <h2 className="text-3xl font-semibold mb-4">Our Approach</h2>
            <p className="text-gray-700 mb-4">
              Collaborative and results-driven, we act as an extension of your team, delivering solutions that align with your business goals.
            </p>
            <p className="text-gray-700">
              Agile methodologies and continuous feedback allow us to adapt and deliver value efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Zig-Zag Section */}
      <section className="py-20 bg-gradient-to-r from-[#006A7C] to-[#00A7BB]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white animate-fade-in">
            Our Core Values
          </h2>
          <div className="flex flex-col gap-12">
            {values.map((v, i) => (
              <div
                key={i}
                className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } animate-fade-in`}
              >
                <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center rounded-full bg-white/20 text-white">
                  {v.icon}
                </div>
                <div className="bg-white/10 p-6 rounded-xl shadow-lg hover:shadow-2xl transform transition hover:-translate-y-2">
                  <h3 className="text-xl font-semibold mb-2 text-white">{v.title}</h3>
                  <p className="text-white/80">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Experience Highlight */}
      <section className="py-20 bg-[#F0FAFC] text-center rounded-t-3xl">
        <div className="max-w-4xl mx-auto px-6 animate-fade-in">
          <h2 className="text-3xl font-semibold mb-4 text-[#006A7C]">
            Experience You Can Trust
          </h2>
          <p className="text-lg mb-6 text-gray-700">
            Decades of expertise in analytics, consulting, and technology. Helping organizations transform and achieve strategic goals.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center px-6 py-3 bg-[#006A7C] text-white font-medium rounded-full hover:scale-105 transition-transform"
          >
            Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>


      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn { from { opacity: 0; transform: translateY(20px);} to { opacity: 1; transform: translateY(0);} }
          .animate-fade-in { animation: fadeIn 1s ease forwards; }
          .animate-fade-in.delay-200 { animation-delay: 0.2s; }
        `}
      </style>
    </div>
  );
};

export default About;
