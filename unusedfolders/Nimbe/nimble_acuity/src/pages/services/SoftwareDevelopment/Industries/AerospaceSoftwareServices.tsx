import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const AerospaceSoftwareServices: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Aerospace Software Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Optimize your workload with aerospace software development solutions that ensure operations comply with all regulatory standards.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Are you looking to outsource aerospace software development to build high-end software for the aerospace industry? If so, you are in the right place. Our expertise in the aerospace domain allows us to provide aviation software solutions in compliance with regulatory standards, offering complete life-cycle maintenance and support.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity, a prominent provider of aerospace software development services, has the domain expertise to develop products for the avionics sector. Our aviation software solutions can help secure your market presence and lead you through establishing IT solutions for defense.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Aerospace Software Development Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our offshore aerospace software development services can support you with aircraft design, prototyping, testing, and maintenance. We also create ticketing systems, CRM & ERP software to optimize business activities, and solutions to streamline flight planning.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Aviation Software</h4>
                                <ul className="list-disc list-inside">
                                    <li>Custom CRM and ERP systems</li>
                                    <li>Automated supply chain solutions</li>
                                    <li>Flight testing software</li>
                                    <li>Real-time embedded systems</li>
                                    <li>Aircraft prototyping environments</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Engineering Software</h4>
                                <ul className="list-disc list-inside">
                                    <li>Manufacturing and flight modeling software</li>
                                    <li>Flight simulation test environments</li>
                                    <li>3D model prototype tools</li>
                                    <li>Embedded real-time control systems</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Mobility Solutions</h4>
                                <ul className="list-disc list-inside">
                                    <li>IoT applications for flight systems and sensors</li>
                                    <li>Flight simulators and unmanned flight software</li>
                                    <li>Automated IT solutions for defense</li>
                                    <li>Military flight applications</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Maintenance, Repair, and Support</h4>
                                <ul className="list-disc list-inside">
                                    <li>Customized MRO software</li>
                                    <li>Maintenance tracking applications</li>
                                    <li>Documentation management systems</li>
                                    <li>Automated tools for monitoring operations</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Flight Operation and Schedule Solutions</h4>
                                <ul className="list-disc list-inside">
                                    <li>Flight scheduling software</li>
                                    <li>Cloud support</li>
                                    <li>Ticket management and booking systems</li>
                                    <li>Cargo and crew management systems</li>
                                    <li>Journey log applications</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Our Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Aerospace Software Development Process
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We follow a streamlined, proven process to successfully meet deliverables within the stipulated time and budget.
                        </p>
                        <ul className="list-decimal list-inside space-y-2 text-gray-700">
                            <li><strong>Requirement Analysis:</strong> We analyze your specific needs and plan the project in detail with your input.</li>
                            <li><strong>Application Development:</strong> We create the software architecture, design, and then implement the code to develop the final software.</li>
                            <li><strong>System Testing:</strong> We rigorously assess the software for errors, bugs, and inconsistencies, then fix them.</li>
                            <li><strong>Deploy & Monitor:</strong> We synchronize the code, create the software package, and deploy it to the required platform.</li>
                            <li><strong>Application Release:</strong> We release the application into the production environment and hand over ownership to you.</li>
                            <li><strong>Maintenance & Support:</strong> We provide ongoing support and maintenance to ensure your system remains up-to-date and operates efficiently.</li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity for Aerospace Software?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            With over a decade of experience in the aerospace software domain, we have built and hosted multiple high-performance software solutions.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Flexible Pricing:</strong> We offer flexible pricing options based on your budget and project size.</li>
                            <li><strong>100% Data Security:</strong> Our ISO/IEC 27001:2022 certification ensures all your sensitive data and applications are protected from undesirable interruptions.</li>
                            <li><strong>State-of-the-Art Infrastructure:</strong> Our team works with sophisticated infrastructure, tools, and technologies, including advanced VPNs and uninterrupted network connectivity.</li>
                            <li><strong>Global Delivery Centers:</strong> We operate out of multiple global centers, allowing us to serve clients efficiently and gather requirements in their local time zones.</li>
                            <li><strong>High Quality:</strong> We provide comprehensive solutions that facilitate interoperability, giving you improved visibility and control across your aviation departments.</li>
                            <li><strong>Ease of Scalability:</strong> Our development process is well-tuned to easily scale up or down based on your evolving needs, so you only pay for the services you receive.</li>
                            <li><strong>Experienced Team:</strong> We have a highly qualified team of experienced developers, programmers, and testers ready to start your project without delay.</li>
                            <li><strong>24/7 Availability:</strong> Our support team is available around the clock to assist you and instantly resolve your queries.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Partner with Nimble Acuity for Your Aerospace Software Solutions
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity, a leading software development provider, has a skilled and experienced team committed to delivering high-performing aerospace software solutions at competitive rates. With our exceptional programming ability and result-oriented approach, we can provide you with unparalleled maintenance and support.
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

export default AerospaceSoftwareServices;