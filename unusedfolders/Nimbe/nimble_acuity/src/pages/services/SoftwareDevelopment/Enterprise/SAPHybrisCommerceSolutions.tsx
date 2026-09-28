import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const SAPHybrisCommerceSolutions: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            SAP Hybris Commerce Solutions
                        </h2>
                        <p className="text-lg text-gray-600">
                            Scale your business needs to drive efficiency and performance and improve your global presence.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Designed to scale with your business needs, SAP Hybris E-commerce solutions work in tandem with the rest of your business architecture to drive efficiency and performance. In the past few years, SAP Hybris has evolved dramatically to a truly global presence, positioning it as an omnichannel commerce solution that helps drive differentiated customer engagement.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Formerly known as Hybris Commerce, SAP Commerce Cloud is an omnichannel commerce solution that helps in targeting and engaging better with customers, no matter where they are. It has focused on building omnichannel technologies for every kind of e-commerce enterprise, transforming how companies connect with customers and interact digitally. As an SAP Hybris solution partner, Nimble Acuity can enable your company to use SAP Commerce Cloud to interact with customers and meet their needs.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            SAP Hybris Commerce Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            By including the customer experience suite specific to SAP CX within a cloud-like environment, SAP clients now have a full technology platform for building custom, end-to-end, omnichannel business experiences for their prospects. Here are the SAP commerce cloud implementation services offered by Nimble Acuity:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Consulting Support</h4>
                                <p>
                                    We provide our SAP Hybris Commerce services by designing a roadmap that meets your specific business requirements and develops a strategy that defines your customers' journey.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Development & Deployment</h4>
                                <p>
                                    We design and develop your web store and mobile application and customize the UI/UX and storefront design. We fine-tune solutions that help optimize internal processes, improve customer cooperation, drive sales, and facilitate content management.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">SAP Commerce Cloud Development</h4>
                                <p>
                                    We help create a fully customized online store as per your requirements that boost sales in both B2B and B2C sectors and also increases conversion.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Integration Support</h4>
                                <p>
                                    As an SAP Hybris Commerce Provider, we integrate SAP Commerce Cloud with other SAP Enterprise Systems and third-party systems to develop a seamless landscape.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Migration Support</h4>
                                <p>
                                    We carefully transfer your entire e-commerce platform to the SAP Commerce Cloud to add value to your e-commerce. This also helps in content management and resource planning.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Maintenance</h4>
                                <p>
                                    We upgrade your SAP Commerce Cloud to the latest version and fix any issues that affect performance. We also provide timely maintenance of your software to ensure a safe and robust platform.
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
                            Choosing Nimble Acuity for your SAP Hybris solutions will provide you with several key advantages:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Minimize Costs:</strong> Outsourcing SAP Hybris Commerce Solutions to us is cost-effective. We provide you with different packages to choose from as well as customized services.</li>
                            <li><strong>Industry Experience:</strong> We have extensive experience in developing SAP Hybris solutions that are at par with industry standards for retail as well as multi-industry businesses.</li>
                            <li><strong>Experienced Team:</strong> Our team consists of Hybris experts, e-commerce developers, quality experts, and solution experts, all of whom are capable of delivering high-quality SAP Hybris Commerce solutions.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Elevate Your E-commerce Experience?
                        </h3>
                        <p className="text-700 mb-6">
                            SAP Commerce Cloud is unique in the market because it is designed to scale out large, complex applications yet leverages a cloud architecture. We provide highly relevant and cutting-edge SAP Hybris Commerce solutions for every type of requirement. Get in touch with us to know more about our SAP Hybris Commerce Cloud solutions.
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

export default SAPHybrisCommerceSolutions;