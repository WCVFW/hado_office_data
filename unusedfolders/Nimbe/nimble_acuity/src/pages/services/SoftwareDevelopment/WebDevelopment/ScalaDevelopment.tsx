import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const ScalaDevelopment: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl px-6 md:px-12 lg:px-24">
                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Scala Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            We are experts in using the Scala programming language to deliver robust web-based projects and applications.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Scala is an open-source, object-functional programming language developed to overcome the limitations of Java. It allows developers to combine the benefits of PHP and Java, resulting in a more concise and efficient development process. Since it runs on a free, open-source platform, the development cycle is both fast and affordable.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            At **Nimble Acuity**, our team has consistently used Scala for a wide range of web development projects, building a strong reputation for expertise and successful implementations.
                        </p>
                    </div>

                    {/* Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Scala Development Expertise
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Our experienced team of software developers can assist you with customized web-based applications with a quick turnaround. We provide cost-effective **Scala web development solutions** that are reliable, robust, and scalable. Our expertise includes developing:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
                            <li>Web Applications</li>
                            <li>Platform as a Service (PaaS)</li>
                            <li>Software as a Service (SaaS)</li>
                            <li>Scala Development IDE</li>
                            <li>Scala Mobile Development</li>
                            <li>Server-side Software</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-8 mb-4">
                            Additionally, our developers are experts at using the following Scala technologies:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
                            <li>Activator</li>
                            <li>Akka</li>
                            <li>Lift</li>
                            <li>Play</li>
                            <li>Scalatra</li>
                            <li>Slick</li>
                            <li>Spray</li>
                            <li>Spark</li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Advantages of Scala Web Development
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Scala makes web applications work efficiently, which is why it has been adopted by web giants like LinkedIn and Twitter. Here are a few reasons your organization should consider it:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
                            <li><strong>Cost-Effective:</strong> Being open source and free, Scala significantly reduces development costs as there are no upfront or royalty fees.</li>
                            <li><strong>Concise Code:</strong> Scala is concise and requires minimal development time, speeding up your project timeline.</li>
                            <li><strong>Robust and Dependable:</strong> Scala is a robust static system with an established Play framework, making it ideal for building high-traffic websites that are both dependable and reliable.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Develop with Scala?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            We have a team of highly skilled and experienced **Scala developers** proficient in building robust and innovative web applications. As regular contributors to the open-source framework, our developers consistently provide our clients with customized, cost-effective solutions and intellectual property rights.
                        </p>
                        <p className="text-gray-700 mb-8 font-medium">
                            **Nimble Acuity** is equipped to handle all your Scala programming needs at unbeatable rates. Outsourcing your **Scala web development** to us guarantees affordability and timely solutions.
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

export default ScalaDevelopment;