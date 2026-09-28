import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const PrimaveraConsulting: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Primavera Consulting Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            With decades of experience in advising, planning, and managing projects, Nimble Acuity delivers efficient services while staying on budget.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Primavera scheduling is a vital component of a successful project, providing a clear view of upcoming activities for proper planning. As a leading Primavera consulting service provider, Nimble Acuity uses Oracle Primavera software to ensure that a project, portfolio, or program is properly planned, managed, and executed. We can implement advanced Project Management Information Systems using the Oracle Primavera suite.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            We leverage over 26 years of experience and technical expertise to implement enterprise-wide project management software. Nimble Acuity also offers Primavera consulting and training services that cover all aspects of a successful implementation. We provide experienced Primavera P6 EPPM administrators, project planners, report developers, P6 instructors, and other P6-related support staff to move your project forward. We ensure that all Primavera P6 implementations are integrated with your existing project management processes, controls, management structures, and lifecycle models.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Primavera Consulting Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our system is designed to maximize the visibility of your organization by giving more access to the user. We implement the tools to streamline processes, sustain changes, and ensure success. Our services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Pre-Implementation Planning</h4>
                                <p className="leading-relaxed">
                                    Our Primavera consultants have implemented Oracle Primavera in varied enterprise environments to ensure the smooth functioning of your business processes.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Business Case Development</h4>
                                <p className="leading-relaxed">
                                    Our advisors use their industry experience to work with Primavera management and portfolio managers to highlight the tool's strategic advantages and, most importantly, future benefits.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Roadmap Design</h4>
                                <p className="leading-relaxed">
                                    Based on your unique business requirements, we help you set the right direction for Oracle Primavera implementation and develop an application roadmap with goals, risks, and crucial dates.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Upgrades and New Builds</h4>
                                <p className="leading-relaxed">
                                    Oracle Primavera is constantly evolving, and our consultants have performed upgrades and new builds in some of the most challenging environments in the industry. We can design and develop custom test plans using Oracle Primavera.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Performance Reviews</h4>
                                <p className="leading-relaxed">
                                    If not properly maintained, Oracle Primavera can become slow and unwieldy. Our advisors can not only diagnose performance issues but also implement solutions to improve performance.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Integrations & Interfaces</h4>
                                <p className="leading-relaxed">
                                    Our experts customize each interface, allowing business rules to be applied to the data before it is loaded into the target system.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Outsource to Nimble Acuity */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Outsource Primavera Consulting Services to Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Here are some of the reasons why you should consider outsourcing Primavera consulting services to Nimble Acuity:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Affordable Pricing Options:</strong> We offer affordable and flexible pricing to all our clients.</li>
                            <li><strong>Information Security:</strong> As an ISMS-certified firm, we ensure that the data you share with us is kept safe and secure.</li>
                            <li><strong>High-quality Services:</strong> As an ISO-certified company, Nimble Acuity ensures that all our software services are error-free and of the best quality.</li>
                            <li><strong>Experienced Team:</strong> Our team comprises some of the most experienced and certified experts who can cater to all your needs.</li>
                            <li><strong>Operational Efficiency:</strong> We have competent planning consultants who analyze and implement the project structure and work across different projects seamlessly.</li>
                            <li><strong>Certified Oracle Implementation Team:</strong> Our team includes certified Oracle implementers and highly-qualified project managers who come together to offer cutting-edge services to our global clients.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Primavera Consulting Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Our Primavera scheduling consultants work closely with you to define and meet expectations throughout all phases of your project. Our implementation consulting team has a thorough knowledge of best practices, and we implement large-scale tools and processes holistically and efficiently.
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

export default PrimaveraConsulting;