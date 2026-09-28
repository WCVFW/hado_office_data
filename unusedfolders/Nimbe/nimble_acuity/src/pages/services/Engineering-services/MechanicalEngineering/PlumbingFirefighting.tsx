import React from 'react';
import { Link } from "react-router-dom";
import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

const PlumbingFirefighting: React.FC = () => {
    return (
        <>
            <ESmainmenu />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Plumbing and Firefighting Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Our MEP services include specific expertise on plumbing and firefighting system design that serves the purpose without digging a hole in your pocket.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            At Nimble Acuity, our top-notch plumbing and firefighting design services cater to a wide range of industry verticals, including residential, corporate, hospitality, healthcare, and industrial facilities. We provide customized designs within a stipulated time period, with great caution, since even the minutest details can cause the entire system to be faulty or act erratically.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Detailed Design Services that Meet Global Standards
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our CAD drawings and designs not only reduce turnaround time for safety systems but also come at a relatively cheaper price. Our designers and modelers provide preliminary designs as well as innovative concepts with precision and detail. We follow various region- and country-specific standards and codes such as the National Fire Protection Association (NFPA), Uniform Plumbing Code India (UPCI), and International Plumbing Code (IPC).
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            {/* Plumbing Services */}
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Plumbing Design Services</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    <li>Plumbing systems drawings</li>
                                    <li>Plumbing construction details (cost and material)</li>
                                    <li>Pipe modeling and drawing services</li>
                                    <li>Water services schematics & supply layouts</li>
                                    <li>Sewerage & rainwater layouts</li>
                                    <li>Plumbing fixture detail drawings & schedule</li>
                                    <li>Paper to CAD conversion</li>
                                    <li>Record (as installed or as-built) drawing</li>
                                </ul>
                            </div>
                            {/* Firefighting Services */}
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Firefighting Services</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    <li>Firefighting layouts and details (cost and material)</li>
                                    <li>Hydrant & sprinkler systems</li>
                                    <li>Fire detection systems & alarms</li>
                                    <li>Fire protection fabrications</li>
                                    <li>Wet & dry risers</li>
                                    <li>Fire suppression systems</li>
                                    <li>CCTV access control</li>
                                    <li>Paper to CAD conversion</li>
                                    <li>Record (as installed or as-built) drawing</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Our Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Plumbing & Firefighting Process Flow
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Outsourcing plumbing and firefighting services to a reliable partner will assure increased productivity and reduced costs. We follow a streamlined process to provide the best possible services:
                        </p>
                        <ul className="list-decimal list-inside space-y-2 text-gray-700">
                            <li><strong>Project Scoping:</strong> We document requirements, propose a design strategy, and check relevant standards.</li>
                            <li><strong>Design & Development:</strong> We develop designs, optimize them, gain final approval, and list out materials.</li>
                            <li><strong>Execution of Work:</strong> We implement designs, monitor progress, and perform site checks.</li>
                            <li><strong>Quality Assurance:</strong> We conduct rigorous testing and inspection to ensure compliance with standards and provide certification upon delivery.</li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Our Firefighting and Plumbing Services?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We are passionate about sustainable designs and help clients achieve higher productivity while aiding innovation in public health and safety. We not only fathom complex requirements but are also able to deliver on time, every time. When you outsource plumbing and firefighting services to us, you can be sure of getting more than you bargained for, including:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Increased productivity with assured cost and time savings.</li>
                            <li>Designs that meet global standards and compliances.</li>
                            <li>Access to the best resources in the industry for all design-related work.</li>
                            <li>Timely delivery of designs that are quality certified.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Nimble Acuity - Your Trusted MEP Design Partner
                        </h3>
                        <p className="text-gray-700 mb-6">
                            If you are looking for an outsourcing partner for all your plumbing and firefighting system-related design or modeling work, then Nimble Acuity, with over 26 years of deep industry expertise, is the right choice. We offer extended BIM services that fit all aspects of construction and sustainability projects.
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

export default PlumbingFirefighting;