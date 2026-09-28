import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const ELearningSolutions: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            e-Learning Solutions Implementation
                        </h2>
                        <p className="text-lg text-gray-600">
                            At Nimble Acuity, we implement a custom e-Learning solution to suit your organizational training needs, ensuring that your employees are trained with the latest techniques and implementations in your domain.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            When implementing e-Learning solutions, we consider various factors like a client's specific e-Learning objectives, learning patterns, preferences, and the ease and likelihood of online learning. This helps us define a clear and enticing e-Learning implementation that is specifically tailored to their needs.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            We provide end-to-end e-Learning solution implementation services, whether it's our ready-to-use solutions, developing e-Learning modules from scratch, or custom modifications. Our goal is to deliver the best for your organizational training needs.
                        </p>
                    </div>

                    {/* Our Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our e-Learning Solutions Implementation Process at Nimble Acuity
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            After a rigorous requirement analysis, we move on to a meticulous design and development process to build successful e-Learning solutions. Our team of e-Learning experts ensures a streamlined workflow.
                        </p>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Participate and Build Model</h4>
                                <p className="leading-relaxed text-gray-700">
                                    Our team interacts with clients regularly throughout the development phase. This ensures that your feedback and suggestions are incorporated into the entire implementation process, leading to the best possible solutions.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Solution Prototyping</h4>
                                <p className="leading-relaxed text-gray-700">
                                    Before full implementation, we deploy a solution prototype. This helps clients make well-informed decisions regarding the training flow, usability, GUI, features, and reporting, making the entire development process more workable and successful.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Testing and Customizing</h4>
                                <p className="leading-relaxed text-gray-700">
                                    We conduct test runs with sample participants to gather valuable feedback on their learning experience, usability, modularity, and effectiveness. These insights allow us to redesign or customize the e-Learning solution for improved efficiency.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">On-Run Customization Compatible</h4>
                                <p className="leading-relaxed text-gray-700">
                                    The e-Learning solutions we implement are based on a robust design that allows for easy and less time-consuming post-build customizations. This gives clients the added advantage of making quick changes to their solutions while in use.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Our Team */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Nimble Acuity's Expert Professionals
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our e-Learning solution implementations are handled by a dedicated team of experts.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Highly skilled instructional systems designers (ISD)</li>
                            <li>Experienced web and application developers</li>
                            <li>Training and content experts</li>
                            <li>Creative artists and testers</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Your e-Learning Solutions Implementation to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity promises you the best-in-class, modular, and end-to-end custom e-Learning solutions. Outsourcing your e-Learning solutions to us can help you train your professionals with the latest techniques and implementations in your domain, in less time and cost, with increased productivity. Our solutions don't just educate; they inform about the latest trends, effectively communicate knowledge, train readers, and improve their overall performance.
                        </p>
                        <Link to="/contact">
                            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ELearningSolutions;