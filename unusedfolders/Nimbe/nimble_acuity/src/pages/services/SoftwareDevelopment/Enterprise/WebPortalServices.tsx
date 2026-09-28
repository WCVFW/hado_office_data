import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const WebPortalServices: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Web Portal Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Nimble Acuity offers skilled web portal development solutions, enabling organizations to use the immense potential of the internet for business growth.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            We provide portal design, development, and maintenance services that result in the creation of feature-rich web portals and industry-specific vertical portals (vortals). We plan, design, and develop high-quality web portals that stand apart by being current, feature-rich, scalable, and easy to maintain.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Web portals serve as a single point of access to a variety of information, acting as a virtual one-stop-shop for users. They are a cost-effective, quick, and secure channel for companies to share information with customers, partners, and employees. Vertical portals, or vortals, are ideal for professionals or persons with focused interests, providing news and resources specific to their industry.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Nimble Acuity's Vortal and Portal Solutions
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We have developed customized portal solutions for a variety of e-commerce, enterprise, and content management needs. Our expertise includes:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Intranet Portals</h4>
                                <p>
                                    Our intranets and corporate portals facilitate strong internal communication among employees, allowing for centralized storage and access of databases, memos, and internal communications.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">B2C Portals</h4>
                                <p>
                                    Our B2C portals effectively showcase a company's products and services, offering features like online shopping, billing, and credit card processing to facilitate e-commerce.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">B2B Portals</h4>
                                <p>
                                    We develop applications for B2B portals that serve as a customized, on-demand platform for sharing proprietary and critical business information among partners or across supply chains.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Comprehensive Feature Set</h4>
                                <p>
                                    We build portals with a complete feature list including online browsing, billing, credit card processing, search functionality, discussion forums, live chat, and online polls to enhance the user experience.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity for Portal Development?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Portal development is a multi-dimensional activity that demands expertise in various domains. With years of experience, Nimble Acuity has a dedicated team skilled in these areas to provide you with specialized services and substantial savings.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Expertise in Platforms:</strong> We use industry-standard platforms like DotNetNuke and PHPNuke for small and medium businesses, and proprietary enterprise platforms for large corporations, focusing on open-source solutions where appropriate.</li>
                            <li><strong>Multi-skilled Team:</strong> Our technical team has expertise in ASP, ASP.net, ORACLE, MS SQL Server, and MySQL, complemented by a superior design team to give you well-designed, fully featured portals.</li>
                            <li><strong>Focus on 3 Cs:</strong> We focus on the three key pillars of a quality portal: Content, Community, and Commerce.</li>
                            <li><strong>Maintenance and Optimization:</strong> We provide ongoing portal maintenance and updating, as well as online marketing and Search Engine Optimization (SEO) to ensure high traffic and a good search engine ranking.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Vortal and Web Portal Development to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity offers highly skilled portal, vortal, and community website development services. We design and develop intelligent portals that make the browsing experience simpler and more effective for the user. We work closely with you through a consultative process to ensure your new portal perfectly matches your company's vision and goals.
                        </p>
                        <Link to="/contact">
                            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                                Get in touch
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WebPortalServices;