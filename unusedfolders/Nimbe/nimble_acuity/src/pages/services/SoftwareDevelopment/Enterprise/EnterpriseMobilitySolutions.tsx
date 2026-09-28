import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const EnterpriseMobilitySolutions: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Enterprise Mobility Solutions
                        </h2>
                        <p className="text-lg text-gray-600">
                            Give your mobile workforce on-the-go access to the apps and services they need to improve productivity and free your business processes from fixed locations.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Enterprise Mobility Services offer innovative business solutions by providing a consistent and easy-to-use package. At Nimble Acuity, we are knowledgeable and experienced in Enterprise Mobility Management and know how to use mobile technology to improve productivity and streamline operations.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Our Enterprise Mobile Apps are designed and deployed based on the specific needs of an enterprise. The final solution is tailored to your existing processes and systems, ensuring a seamless and effective integration.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Enterprise Mobility Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our comprehensive suite of enterprise mobile solutions includes:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Mobile App Development</h4>
                                <p>
                                    We develop and organize high-quality mobile apps and integrate them with your various enterprise systems. We have vast experience across iOS, Android, and Windows platforms.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Enterprise Intranet Integration</h4>
                                <p>
                                    We effectively enable CRM, SCM, and ERP on mobile platforms, providing an intuitive, user-centered experience by integrating with systems like MS SharePoint, Active Directory, One Login, and SAP.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Mobile Data Synchronization</h4>
                                <p>
                                    We maintain transaction and data reliability in a dispersed environment, optimizing information exchange based on connection reliability and bandwidth. We enable data synchronization from various database systems, including mobile devices and web services.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Mobile Technology Migration</h4>
                                <p>
                                    We perform seamless migration from older legacy and proprietary systems to modern mobile versions. Our customized tools automatically restructure your applications for the web while targeting your specific architecture and code standards.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Mobile Device Management</h4>
                                <p>
                                    We implement mobile device management solutions that support various devices and operating systems. Our simple, agent-based enrollment process ensures a consistent flow, and we can send on-demand commands to a multitude of devices to perform actions like remote lock or turn-off.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Mobile Strategy & Infrastructure</h4>
                                <p>
                                    We help you formulate the best mobile strategy for your organization and design efficient wireless network solutions using technologies like Wi-Fi, GPRS, and CDMA. Our solutions ensure performance, availability, and round-the-clock security.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Benefits of Outsourcing to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our comprehensive suite of enterprise mobility solutions is technologically superior, providing a viable, cost-effective solution for global enterprises and small businesses.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Dedicated Team:</strong> We offer a dedicated mobility solutions team coupled with best-in-class technologies for mobile app delivery and assurance.</li>
                            <li><strong>IP-Driven Solutions:</strong> Our services are IP-driven, ensuring bespoke process frameworks and ready-to-use applications tailored to your business needs.</li>
                            <li><strong>Ready-to-Deploy:</strong> Most of our solutions are ready-to-deploy, ensuring a swifter time-to-market for various business verticals.</li>
                            <li><strong>Scalable Architecture:</strong> Our highly scalable architecture ensures flexibility of deployment as per your requirements.</li>
                            <li><strong>24/7 Support:</strong> We provide round-the-clock technical assistance upon request.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Choose Nimble Acuity for Enterprise Mobility Management
                        </h3>
                        <p className="text-gray-700 mb-6">
                            For over 26 years, Nimble Acuity has been a leading enterprise mobility solutions provider, specializing in delivering integrated results that improve your ROI. Our enterprise solutions have a profound focus on UI and the overall user experience, ensuring they are easy to use while providing superior data and information security.
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

export default EnterpriseMobilitySolutions;