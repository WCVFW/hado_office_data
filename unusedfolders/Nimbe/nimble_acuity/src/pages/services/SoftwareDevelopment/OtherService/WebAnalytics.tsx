import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const WebAnalytics: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Web Analytics Reporting Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Get accurate and insightful web analytics reports to make informed, data-driven decisions for your online business.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            If you market products or services through a website, you likely have a web analytics tool. But are you getting all the data you need in a way that makes sense for you? Our reporting and analytics services at nimble acuity can provide you with a clear, accurate understanding of your online campaigns.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            We can set up and deliver specific metrics and reports quickly and accurately. Whether you're an online marketing manager seeking deeper insights or a digital agency that needs to provide clients with compelling data, we can help. We provide the data you need, on time and at a cost-effective price.
                        </p>
                    </div>

                    {/* Types of Reports */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            nimble acuity's Web Analytics Reports
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We provide reports based on your specific website statistics and analysis requirements. We can develop your entire analytical framework or follow your exact instructions for data presentation. Our web analytics team is dedicated to meeting your needs.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
                            <ul className="list-disc list-inside space-y-2">
                                <li>Data Visualization</li>
                                <li>Predictive Analytics</li>
                                <li>Prescriptive Analytics</li>
                                <li>Video and Image Analytics</li>
                                <li>E-commerce Reports</li>
                            </ul>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Web Traffic Analysis Reports</li>
                                <li>Navigation Analysis Reports</li>
                                <li>KPI Reports</li>
                                <li>Funnel Analysis Reports</li>
                                <li>Internal Search Analysis Reports</li>
                            </ul>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Search Engine Analytics</li>
                                <li>SEO Reports</li>
                                <li>Campaign Reports</li>
                                <li>Path Analysis Reports</li>
                                <li>Content Analytics</li>
                                <li>Regular/Ad-hoc Web Analytics Reports</li>
                            </ul>
                        </div>
                    </div>

                    {/* Our Tools & Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Reporting & Analytics Process
                        </h3>
                        <div className="space-y-4 text-gray-700">
                            <h4 className="text-xl font-bold text-[#006A7C]">Tools We Use</h4>
                            <p className="leading-relaxed">
                                Our team has expertise in most web analytics applications, including Google Analytics, Sawmill, Yahoo Analytics, SiteCatalyst, ClickTracks, WebTrends, and Net Insight. If you use a tool we haven't worked with, we will learn it quickly to meet your needs.
                            </p>
                            <h4 className="text-xl font-bold text-[#006A7C]">How We Work</h4>
                            <p className="leading-relaxed">
                                We use effective **data visualization** techniques to make your data stand out. We can access your web analytics data using a username/password, or you can send us your data in CSV/Excel files. We can also write queries to pull data directly from your database. Once we have all the required data, we integrate it and present it to you in a clear, comprehensible format.
                            </p>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Choose nimble acuity for Web Analytics Reports
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Partnering with nimble acuity for your web analytics reporting offers significant benefits:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Save Time and Money:</strong> Avoid the investment in expensive web analytics tools and the cost of hiring additional resources to use them.</li>
                            <li><strong>Informed Decisions:</strong> Our reports help you quickly analyze data and make confident business decisions, saving you time and energy.</li>
                            <li><strong>Accuracy and Reliability:</strong> We audit our reports to ensure the data is accurate and reliable, so you can trust the information you're using.</li>
                            <li><strong>Explicit Information:</strong> Our reports are designed to provide clear, explicit information tailored to your specific requirements.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Contact Us for Reporting & Analytics Services
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Ready to get a clearer picture of your online performance? Get in touch with us to outsource your reporting and analytics services and make smarter business decisions.
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

export default WebAnalytics;