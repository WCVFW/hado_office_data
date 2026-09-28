import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const ElixirDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Elixir Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Build a wide range of scalable and robust solutions—from web apps to flight simulators—using a powerful functional programming language.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Elixir is a functional programming language built on top of the Erlang VM. Elixir software development can be used to build a wide range of scalable and robust solutions for diverse purposes, and its application is only growing with time.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity is a leading Elixir development company with considerable expertise in leveraging the Elixir platform to build innovative solutions for various industries. Driven by a team of experienced software engineers, we guarantee top-class Elixir design and development services. Their extensive knowledge of tools, libraries, and widgets will enable you to create winning solutions faster.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Elixir Development Services
            </h3>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Elixir Web Development:</strong>
                <p className="mt-2">Elixir is commonly used to develop innovative, flexible, and scalable web applications. A key reason for its popularity is its ability to handle huge traffic without a performance hit. We have developed diverse web apps with Elixir, including IoT solutions, chat solutions, and event-driven web apps.</p>
              </li>
              <li>
                <strong>Elixir Consulting:</strong>
                <p className="mt-2">Our consulting services are designed to guide you on all aspects of Elixir software design and development, including Elixir game development, Elixir Docker development, and general Elixir application development.</p>
              </li>
              <li>
                <strong>Elixir Maintenance & Support:</strong>
                <p className="mt-2">We offer complete, round-the-clock maintenance and support services for all your Elixir-based solutions. From usability enhancements to server monitoring, we oversee every aspect to ensure optimal performance.</p>
              </li>
              <li>
                <strong>Elixir Testing Services:</strong>
                <p className="mt-2">Our testing services are designed to thoroughly test your Elixir solutions for smooth performance and load-bearing capacity. We test the solution at each stage of the development process and again after completion.</p>
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>
                <strong>Agile Development:</strong> To ensure productive development, we follow the agile methodology, which helps us better fulfill our clients' needs.
              </li>
              <li>
                <strong>Cost-Effective Services:</strong> Our services are available at competitive rates, allowing you to get high-quality solutions without breaking your budget.
              </li>
              <li>
                <strong>Quick Turnaround:</strong> Our commitment and round-the-clock operations across time zones allow us to complete projects and meet deadlines efficiently.
              </li>
              <li>
                <strong>Diverse Engagement Models:</strong> We offer a variety of hiring models to suit different project requirements and budgets, including full-time, part-time, and direct hiring.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Looking for Robust Elixir Development?
            </h3>
            <p className="text-gray-700 mb-6">
              Elixir development is a challenge, and Nimble Acuity has the experience and expertise to meet it with success. Our process is driven by experts, including developers, designers, and testers, whose deep understanding of the language ensures we deliver the best possible solutions.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you are looking for a reliable Elixir development service provider, get in touch with us now.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get in Touch Today
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ElixirDevelopment;