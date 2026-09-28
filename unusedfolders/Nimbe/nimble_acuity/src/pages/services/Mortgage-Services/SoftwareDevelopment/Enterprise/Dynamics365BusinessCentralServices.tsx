import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const Dynamics365BusinessCentralServices: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Dynamics 365 Business Central Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Streamline your finance, service, sales, and operation functions with Dynamics 365 Business Central and ensure business continuity at prices starting at $20/hour.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Are you looking for help to better manage your business by streamlining and automating a range of business processes? Do you want to leverage the full power of Microsoft Dynamics 365 Business Central to enhance the effectiveness of your business functions? Do you want to partner with an experienced provider that can help you make smarter decisions? If so, you can benefit significantly from our Dynamics Business Central services.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a leading Dynamics 365 company with over 26 years of experience in providing a full spectrum of software development, implementation, and maintenance services to clients worldwide. We can help you implement and use Dynamics, assist in business collaborations, and help you make smarter business decisions. We can also help you extend Business Central with other Microsoft cloud services like Office 365, Power BI, and Power Apps.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Dynamics 365 Business Central Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a leading Dynamics 365 Business Central service provider and offers a comprehensive range of solutions, including:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Project Management Services</h4>
                                <p>
                                    Our team can unlock the full power of Dynamics 365 to help you monitor and manage resource levels by organizing and tracking sales and capacity. We will provide a real-time understanding of your entire project status.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Financial Management Services</h4>
                                <p>
                                    Our team has expertise in organizing purchasing, accounting, sales, and customer service data to give you a high-level view of your business. We can also use Power BI to provide you with advanced dashboards to track performance.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Supply Chain Management Services</h4>
                                <p>
                                    We can help you use Business Central's built-in intelligence to identify what to replenish and when. Our team will provide you with visibility into what you need to buy at the right time to maintain a healthy inventory.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Reporting and Analytics Services</h4>
                                <p>
                                    We have significant experience in helping clients make and refine financial predictions by evaluating and modeling data across multiple fields. We can also integrate Microsoft Excel to help you create and modify accurate reports.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Operations Management Services</h4>
                                <p>
                                    We can help you use Business Central to track each item's movement through the entire supply chain. You can maintain optimum output levels and gain a complete and holistic view of your portfolio to ensure superior order fulfillment.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Sales and Service Management</h4>
                                <p>
                                    If you are finding it hard to manage service requests, we can help. We can use Business Central to do all this within Microsoft Outlook, providing you with a summary of all your tasks and workloads so you can better assign resources.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Outsource to Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Outsourcing Dynamics 365 Business Central services to Nimble Acuity provides you with a complete range of advantages. We are a highly reliable provider with over 26 years of experience.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Affordable Pricing:</strong> Our solutions are priced affordably with both hourly and FTE (full-time equivalent) pricing options.</li>
                            <li><strong>High-quality Services:</strong> We are an ISO-certified outsourcing service provider and ensure you receive highly effective and customized services.</li>
                            <li><strong>Experienced Team:</strong> Our team has decades of experience in designing, assessing, and implementing a wide variety of software solutions.</li>
                            <li><strong>Short Turnaround:</strong> Our experts will always provide their services quickly since we are very particular about meeting all our deadlines.</li>
                            <li><strong>Enhanced Profitability:</strong> We help our clients leverage the full power of their Business Central investment at cost-effective prices.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Dynamics 365 Business Central Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a leading provider of Business Central services. Our team of highly qualified, experienced, and certified engineers is ready to tackle any business challenge with the utmost attention to detail and professionalism. Our experts will implement the latest best practices to ensure that you receive the highest quality services at cost-effective prices.
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

export default Dynamics365BusinessCentralServices;
