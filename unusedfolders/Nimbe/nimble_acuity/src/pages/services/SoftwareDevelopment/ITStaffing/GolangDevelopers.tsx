import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const GolangDevelopers: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Hire Golang Developers
            </h2>
            <p className="text-lg text-gray-600">
              Our Golang designers and developers have the skill and experience to meet all your Golang project needs at prices starting at $2200/160 hours.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Golang, an open-source programming language from Google, is one of the most popular platforms used to build cloud infrastructure applications. Its growing popularity has triggered a shortage of skilled Golang developers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** has a team of highly skilled developers with wide exposure in the use of the Golang programming language. We provide a one-stop solution to meet all your in-house Golang development needs. Our clients come to us to hire Golang developers for both short and long durations, and our experts keep themselves updated with the latest trends and frameworks to help you meet project timelines.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Golang Development Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We provide a range of Golang development services, and our clients hire Golang developers from us for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Golang Consulting and Strategy:</strong> You can hire developers from us to create a Golang application development roadmap and handle other consultation requirements.</li>
              <li><strong>Multi-faceted Cloud App Development:</strong> We provide you with Golang development experts to build diverse applications in the Cloud.</li>
              <li><strong>Golang Microservices Development:</strong> Our Golang development services also include assisting you with experts who can help with building microservice architecture.</li>
              <li><strong>Golang Support and Maintenance:</strong> Our IT staffing for Golang developers also includes providing support staff for all your Golang application maintenance needs.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you choose **Nimble Acuity**, you benefit from a range of advantages:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Experience:</strong> Our team of Golang development experts has extensive experience in leveraging the platform, allowing them to quickly grasp your requirements.</li>
              <li><strong>Expertise:</strong> Our developers are experienced in handling various development tools, giving you a distinct advantage in executing your project.</li>
              <li><strong>Competitive Pricing:</strong> Hiring developers from an offshore partner like us offers you the benefit of lower costs.</li>
              <li><strong>Onsite Availability:</strong> We have a steady stream of developers who can relocate to work onsite to meet your immediate requirements.</li>
              <li><strong>Excellent Communication:</strong> We evaluate our developers on their written and oral communication skills to ensure you receive timely and proper updates on all project-related aspects.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Choose Nimble Acuity for Golang Development
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has wide experience in Golang development. We assist companies in developing and managing distributed web applications with the best Golang development experts. Our ability to pick the right Golang expert has given our clients an edge in application development using Golang.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Get in touch with us now to hire dedicated Golang developers. Our experts are not only great at coding but also incorporate the best programming practices.
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

export default GolangDevelopers;