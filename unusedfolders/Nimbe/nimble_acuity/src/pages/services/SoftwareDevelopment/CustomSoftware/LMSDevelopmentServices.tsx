import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const LMSDevelopmentServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              LMS Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Transform your online learning business with a custom Learning Management System (LMS) designed to meet your unique educational needs.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              In the rapidly growing e-learning market, a robust Learning Management System (LMS) is a foundational building block for your business. An LMS helps you develop, track, and deliver training and educational courses effectively. At **Nimble Acuity**, we provide custom LMS development services that are completely tailored to your specific business plan and educational goals.
            </p>
            <p className="text-gray-700 leading-relaxed">
              When you partner with us, our talented team of LMS developers gains a deep understanding of your vision, ensuring that the development process is outcome-oriented and perfectly aligned with your needs. We are committed to helping you turn your e-learning dreams into a tangible, successful reality.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our LMS Development Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">LMS Software Development</h4>
                <p>We create custom LMS software with features like adaptive learning via AI, game-based interaction, and a mix of texts, videos, and surveys to make your courses stand out. We also provide brand-specific design customization.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">LMS Cloud Solutions</h4>
                <p>We help you manage vast e-learning resources by leveraging cloud-based LMS solutions. Our team exports your presentations, videos, and graphics to the cloud, ensuring seamless storage and accessibility.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Responsive LMS Design</h4>
                <p>We ensure your e-learning course is just as interactive and easy to navigate on mobile phones as it is on larger screens, helping you reach a broader target market with a flawless user experience.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Live Chat Integration</h4>
                <p>We can integrate a live chat option into your LMS so you can easily handle queries from learners in real time, setting your course apart from the competition with superior support.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">API & Third-Party Integration</h4>
                <p>We provide customized integrations with third-party APIs and systems to build more responsive e-learning solutions, including features like geolocation, native support, and multi-screen viewing.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Training Solutions</h4>
                <p>We help you make learning programs accessible to your external ecosystem, providing learners with access to courses and offering autonomy to both internal and external customers via a custom LMS.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Solutions:</strong> We offer highly customizable LMS development services with a thorough assessment of your needs, so you only pay for what you require.</li>
              <li><strong>ISO-Certified Quality:</strong> As an ISO-certified company, we follow industry best practices and methodologies to ensure our solutions meet the highest quality standards.</li>
              <li><strong>Experienced Team:</strong> Our in-house team of LMS developers is handpicked for their experience and expertise, and they stay up-to-date with the latest industry trends through regular training.</li>
              <li><strong>Dedicated Project Manager:</strong> We assign a dedicated project manager to your project, serving as a single point of contact for all your queries and ensuring timely updates on progress.</li>
              <li><strong>Quick Turnaround Times:</strong> Our large team and efficient processes ensure that your LMS development is completed within the stipulated timeframe without any delays.</li>
              <li><strong>Latest Technology:</strong> We leverage the latest tools, software, and agile systems to meet your custom LMS development needs, giving our services a competitive edge.</li>
              <li><strong>Round-the-clock Support:</strong> Our customer service team is available 24/7 via calls, emails, or web chat to provide you with the information and support you need.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Build Your E-Learning Platform?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a professional company with vast experience in providing LMS development services. We utilize our deep insights to create customizable solutions that yield top-notch outcomes, helping your business create the best e-learning courses that perfectly represent your brand. If you value quality, affordability, and transparency, we are the right choice.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get a Free Quote
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default LMSDevelopmentServices;