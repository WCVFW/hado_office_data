import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const Windows365: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Windows 365 License Management and Optimization
                        </h2>
                        <p className="text-lg text-gray-600">
                            Manage and optimize your Windows 365 licenses, allocate licenses, and keep tabs on unused licenses to maximize efficiency.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            The integration of Windows 365 in an overall IT infrastructure fabric is something we are all familiar with. However, there are many complicated licensing terms involved in implementing the Windows 365 tech solutions and deployments. If you're looking for a company to assist you in managing the correct requirements for your Windows 365 licensing, Nimble Acuity is your definitive choice for proper optimization and securing the full benefits of your licenses.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Optimization Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity has been serving the industry for years, providing essential services in Windows 365 license management and optimization. Our talented professionals have the expertise needed to navigate complex licensing terms. Our services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">SQL Server Optimization</h4>
                                <p>
                                    Our professionals help in solving different challenges you may be facing in terms of optimizing your SQL Server, ensuring it runs efficiently with your Windows 365 environment.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Enterprise Contract Help</h4>
                                <p>
                                    We provide top-notch assistance to streamline your Enterprise Contracts, helping you adjust to technological changes and ensure you have the right terms in place.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Managed Services</h4>
                                <p>
                                    We are a leading provider of managed services, delivering essential controls and features for customers while providing critical licensing protections and consumable services.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Cloud Solutions</h4>
                                <p>
                                    We will assist with integrating the licensing delivery and other benefits of the right cloud solutions, including seamless integration and accurate billing.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Contract Negotiations</h4>
                                <p>
                                    Our experts will motivate and advise you on specific contractual agreements and proposals, making sure you enter into an appropriate and true contract that meets your needs.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Windows 365 License Reporting</h4>
                                <p>
                                    Our detailed license reports detect unused and incorrectly assigned licenses, allowing you to optimize your spending and identify areas where a downgrade is required.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Partner with Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            For years, we have helped countless enterprises with proper management of their Windows 365 licensing. Partnering with us provides these key benefits:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Expert Optimization Services:</strong> When you partner with Nimble Acuity, you get the familiarity and technical experience of a professional team that optimizes all your services.</li>
                            <li><strong>Cost-Saving Benefits:</strong> We tailor our services to your specific requirements, ensuring you only pay for what you need, leading to significant cost savings.</li>
                            <li><strong>Quick Turnaround:</strong> Our deep knowledge and proficiency with Windows 365 services mean we can get you through the entire process quickly and without difficulty.</li>
                            <li><strong>Certified Quality:</strong> As an ISO certified provider with years of industry experience, you can be assured your business is receiving top-notch services.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Optimize Your Windows 365 Licenses?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            When it comes to managing Windows 365 and optimizing benefits, Nimble Acuity is a leader in this space. We offer a range of customized solutions to global clients. Once you hand over your requirements to us, we will cater to them professionally and effectively.
                        </p>
                        <Link to="/contact">
                            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                                Get a Free Consultation
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Windows365;