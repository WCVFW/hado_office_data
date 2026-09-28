import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const SAPProductLifecycleServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            SAP Product Lifecycle Management Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Have access to quality SAP Product Management from Nimble Acuity and keep up with the changing trends of product lifecycle management easily.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Are you constantly struggling to stay updated about new changes in the markets and comply with strict regulations for different tools and technologies? Do you need some help to focus more on the growth and innovative success of your organization? The best way to do so is to outsource SAP Product Lifecycle Management services to a reliable company. We are a reliable service provider who can cater to your SAP Product Management requirements.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is one of the leading providers of SAP Product Management Services. We can be your one-stop solution for all your customization and PLM management requirements. We have a team of qualified and talented engineers and managers who are adept at handling global clients and providing scalable services within a quick period of time.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            SAP Product Lifecycle Management Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our SAP PLM product lifecycle management services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Quality Management</h4>
                                <p>
                                    Quality can determine the success or failure of any company. As a leading provider of SAP product management services, we take pride in offering services that help maintain the product and service quality you have for your company.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">PLM Strategy Services</h4>
                                <p>
                                    Our company will help you properly analyze any complexities and complications related to your products while providing you with reliable strategies that can help in overcoming all challenges and improving the ROI of the business.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">PLM Customization</h4>
                                <p>
                                    As a trustworthy SAP partner, we have a team of talented and qualified engineers who will help you customize your products in the best way. We will cater to all your needs for scoping and assessment and provide insightful information about the PLM scenario today.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">PLM Data Migration Services</h4>
                                <p>
                                    When you rely on SAP PLM consulting services provided by Nimble Acuity, you will find that we have all the skills and expertise required to help clients in cleaning and migrating their data from one system to another.
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
                            When it comes to outsourcing SAP product lifecycle management services, you can fully rely on the expertise and experience of Nimble Acuity.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Affordable Rates:</strong> Choosing our SAP product management services will enable your company to save a lot of money due to our cost-effective pricing packages.</li>
                            <li><strong>Information Security:</strong> Nimble Acuity is an ISO-Certified company that adheres to all security standards and practices.</li>
                            <li><strong>Quick Turnaround Time:</strong> Choose our services, and we will offer timely results without compromising on quality.</li>
                            <li><strong>High-Quality Services:</strong> We will deliver the best quality results that are error-free.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Get Your SAP PLM Solutions Today
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity has been a pioneer in offering the best SAP services for a long time. With a dedicated team and a whole lot of resources, we are one of the leading companies to go to. If you want SAP PLM consulting services, get in touch with us, and we will devise a proper strategy that can suit your needs and requirements easily.
                        </p>
                        <Link to="/contact">
                            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                                Get a Free Quote
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SAPProductLifecycleServices;