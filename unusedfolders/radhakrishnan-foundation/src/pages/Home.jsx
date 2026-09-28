import React from "react";
import { Link } from "react-router-dom";

// --- Inline SVG Icons ---
const HeartHandshake = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path d="M11 15v-5a2 2 0 0 1 4 0v5" />
    <path d="M12 15h1" />
    <path d="M17 19h2c.7 0 1.5-.7 1.5-1.5v-1c0-.7-.8-1.5-1.5-1.5h-1c-.7 0-1.5.8-1.5 1.5v1c0 .7.8 1.5 1.5 1.5Z" />
    <path d="M6 19h2c.7 0 1.5-.7 1.5-1.5v-1c0-.7-.8-1.5-1.5-1.5H6c-.7 0-1.5.8-1.5 1.5v1c0 .7.8 1.5 1.5 1.5Z" />
    <path d="M22 12c0 2.4-1.8 3.5-5.2 4-2.8.4-5.6 0-8.4-1.3-4.5-2-5.7-5.5-3.3-8.8 2.6-3.7 6.6-4.9 10.5-2.2 2.6 1.8 4.4 4.8 4.4 8.3Z" />
  </svg>
);

const Utensils = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
    <path d="M7 2v20" />
    <path d="M21 15V2.3c0-.6-.4-1.1-1-1.1H16c-.6 0-1 .5-1 1.1V15" />
    <path d="M15 15v7" />
  </svg>
);

const BookOpen = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path d="M2 17a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V9a5 5 0 0 0-5-5H7a5 5 0 0 0-5 5Z" />
    <path d="M12 9v11" />
    <path d="M12 4v.5" />
  </svg>
);

const BrainCircuit = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path d="M12 6a7 7 0 0 0 0 12c2.8 0 5-2.2 5-5s-2.2-5-5-5Z" />
    <path d="M8 12h1" />
    <path d="M15 12h1" />
    <path d="M12 8v1" />
    <path d="M12 15v1" />
    <path d="M3.5 8.5l1.5 1.5" />
    <path d="M19 14l1.5 1.5" />
  </svg>
);

const ArrowRight = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

// --- AboutUs Component ---
const AboutUs = () => {
  const accentColor = "text-amber-500";
  const hoverBg = "hover:bg-amber-500";
  const hoverText = "hover:text-white";

  const services = [
    { title: "Healthcare Access", description: "Providing essential medical services and community health initiatives.", icon: HeartHandshake, link: "/health" },
    { title: "Nutrition Programs", description: "Supplying vital food resources and sustainable feeding projects.", icon: Utensils, link: "/food" },
    { title: "Empowering Education", description: "Building schools and funding scholarships for future generations.", icon: BookOpen, link: "/education" },
    { title: "Mental Wellness", description: "Offering dedicated support and resources for mental health and stability.", icon: BrainCircuit, link: "/mental-health" },
  ];

  const ServiceCard = ({ title, description, icon: Icon }) => (
    <div className="flex flex-col items-center p-8 bg-white border border-gray-100 rounded-xl shadow-md transition duration-300 ease-in-out transform hover:scale-[1.03] hover:shadow-2xl text-center">
      <Icon className={`w-12 h-12 mb-4 ${accentColor}`} />
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-500 mt-2 text-sm">{description}</p>
    </div>
  );

  return (
    <section className="w-full font-sans bg-gray-50 overflow-x-hidden">
      {/* Hero Header */}
      <div className="relative w-full h-[450px] bg-blue-900 flex flex-col items-center justify-center pt-24 pb-48">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: "url('https://placehold.co/1920x450/1e3a8a/ffffff?text=+Compassion+and+Action')" }}
        />
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight">
            Our Mission in <span className={accentColor}>Action</span>
          </h1>
          <p className="mt-4 text-xl text-blue-200 max-w-2xl mx-auto">
            Dedicated to improving lives through focused outreach, sustainable development, and unwavering commitment.
          </p>
        </div>
      </div>

      {/* Service Cards 2x2 Grid */}
      <div className="relative max-w-4xl mx-auto px-4 -mt-32 z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <Link key={idx} to={service.link}>
              <ServiceCard {...service} />
            </Link>
          ))}
        </div>
      </div>

      {/* Mission / Vision Section */}
      <div className="max-w-7xl mx-auto mt-24 sm:mt-32 px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8 p-6 lg:p-0">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 border-l-4 border-amber-500 pl-4">
              Our Core Mission
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              At <strong>Radhakrishnan Foundation</strong>, we believe that true change starts with empowering individuals and communities. Our core mission is to bridge the gap between need and opportunity by providing crucial resources where they are needed most.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              We focus on building resilient societies through sustainable programs in health, education, and equality, ensuring every contribution leads to a tangible, long-term impact on global well-being.
            </p>
            <Link
              to="/impact"
              className={`inline-flex items-center mt-6 px-6 py-3 font-semibold rounded-full transition duration-300 border-2 border-amber-500 ${accentColor} ${hoverBg} ${hoverText}`}
            >
              See Our Impact <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col justify-between h-full">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              A Vision for Tomorrow
            </h3>
            <blockquote className="text-xl text-gray-600 italic border-l-4 border-blue-500 pl-4">
              "We envision a world where every person has the foundation for a healthy, educated, and equitable life, free from the constraints of poverty and inequality."
            </blockquote>
            <div className="mt-6">
              <span className="text-sm font-medium text-gray-400">Foundation Leadership</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
