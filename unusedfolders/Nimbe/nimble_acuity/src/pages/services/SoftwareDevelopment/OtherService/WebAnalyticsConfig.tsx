import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const WebAnalyticsConfig: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Web Analytics Software Configuration
                        </h2>
                        <p className="text-lg text-gray-600">
                            Unlock the true power of your web analytics tools by moving beyond standard reports and implementing a custom configuration tailored to your business goals.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            A wide variety of web analytics tools, both free and licensed, are available on the market, including popular options like Google Analytics, Adobe Analytics, and more. However, simply having a tool isn't enough. If it's not implemented and customized specifically for your business, you won't get the actionable results you need.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            The implementation and configuration of a web analytics tool is more than just a simple setup. While some tools offer a set of standard reports out-of-the-box, these reports only provide a brief overview of your website's activities and cannot deliver the in-depth, actionable insights required for business growth.
                        </p>
                    </div>

                    {/* Our Service Approach */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Custom Configuration for Your Business
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            A one-size-fits-all approach to web analytics doesn't work. Your tool must be specifically configured for your site, taking into account your type of business, website structure, and unique objectives. Our services ensure your tool is set up correctly to get the data you need.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>We configure your web analytics tool based on your specific business objectives.</li>
                            <li>We define clear and correct filters, set the necessary templates, and establish parameters relevant to your website.</li>
                            <li>We make advanced settings to help you understand detailed visitor behavior.</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-6">
                            Once your tool has been implemented and configured specifically for your site, you can start getting the actionable results that drive business decisions.
                        </p>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity for Your Web Analytics Configuration?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We have extensive experience and expertise in implementing and configuring web analytics tools for numerous global customers. Here’s why you should partner with us:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Once we configure your tool, you can start getting the precise data you require.</li>
                            <li>We can perform advanced customizations like path analysis, scenario analysis, content groups, and custom reports.</li>
                            <li>We help you further leverage your tool's usability by defining advanced analysis parameters and custom dimensions.</li>
                            <li>We have specialized expertise in Google Analytics setup and configuration.</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-6">
                            Instead of your marketing team struggling to set up and maintain a web analytics tool, outsource the configuration to an expert like Nimble Acuity.
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Your Web Analytics Setup to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            With the correct setup, you will get accurate data that can significantly impact your business. Contact us today for a professional web analytics implementation that delivers the insights you need.
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

export default WebAnalyticsConfig;