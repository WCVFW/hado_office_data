import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const OpenSourceELearning: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Open Source e-Learning Development
                        </h2>
                        <p className="text-lg text-gray-600">
                            Harness the power of free, customizable open-source platforms to create enhanced and tailored e-Learning experiences for your users.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            The benefits of open-source software have touched almost every application, and e-Learning is no exception. At Nimble Acuity, we have a team of expert programmers with hands-on experience in various open-source technologies. We can help you transform these free platforms into customized e-Learning solutions that perfectly suit your needs.
                        </p>
                    </div>

                    {/* Advantages of Open Source */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Advantages of Open Source e-Learning Solutions
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Ready-Made Solutions</h4>
                                <p className="leading-relaxed">
                                    You can choose from a wide variety of ready-to-use open-source e-Learning solutions. A key benefit is that they are free, eliminating any licensing costs.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Fully Customizable</h4>
                                <p className="leading-relaxed">
                                    Since the source code is free and open, the e-Learning software is fully customizable. Our team has the competency to offer advanced customization and development services for any open-source platform.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Faster Updates</h4>
                                <p className="leading-relaxed">
                                    With a large community of global contributors, open-source software receives regular and quick updates. This makes it easy to add new features without additional costs.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            How Nimble Acuity Meets Your e-Learning Needs
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We offer a complete range of open-source e-Learning solutions, from consultation and tool selection to implementation, customization, hosting, and maintenance. Our capabilities include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Customization:</strong> We can fully customize different open-source learning solutions to meet your specific organizational objectives.</li>
                            <li><strong>Integration:</strong> We can integrate various open-source learning applications and third-party tools to create a seamless, customized solution.</li>
                            <li><strong>Maintenance and Upgrades:</strong> We stay up-to-date with the latest open-source applications and can help you upgrade to the newest versions. We also offer ongoing maintenance to ensure sustained performance.</li>
                            <li><strong>Moodle LMS Development:</strong> We provide a wide range of Moodle e-Learning services to help you create a comprehensive learning management system.</li>
                            <li><strong>Other Open Source LMS Services:</strong> We can set up and customize other open-source systems like Dokeos, Open IMS, eFront, and Sakai.</li>
                            <li><strong>Compliance with Open Standards:</strong> Our e-LMS solutions comply with key e-Learning standards like Common Cartridge, SCORM, and QTI.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Open Source e-Learning Development to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Customizing open-source learning software requires expertise across multiple programming languages and skills. Our team has extensive domain experience to deliver the best, most cost-effective e-Learning solutions for your business.
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

export default OpenSourceELearning;