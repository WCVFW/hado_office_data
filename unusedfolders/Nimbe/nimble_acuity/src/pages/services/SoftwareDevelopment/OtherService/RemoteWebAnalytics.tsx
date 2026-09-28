import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const RemoteWebAnalytics: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Remote Web Analytics Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Nimble Acuity provides web analytics solutions to top global brands and digital marketing agencies, helping you get the maximum ROI on your online initiatives.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Whether you have a corporate or an e-commerce website, having insight into its performance is imperative to maximize its potential. Web analytics helps you determine how you get visitors, who they are, and what your conversion rate is. Even with this data, you need a competent web analyst to provide key indicators that your regular website statistics software can't.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity can provide you with a dedicated team of web analysts or a single resource for a few hours a month. Our office has world-class infrastructure, industry-standard security, and robust processes to ensure high-quality service delivery.
                        </p>
                    </div>

                    {/* Why Hire Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Hire a Remote Web Analyst from Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our remote web analysts have expertise in popular analytics tools and offer a number of benefits:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>**Expertise in Analytics Tools:** Our analysts are experts in popular tools like Google Analytics, Omniture/Adobe, WebTrends, ClickTracks, CoreMetrics, and more.</li>
                            <li>**Dedicated Resources:** You get a dedicated web analyst working on your projects full-time.</li>
                            <li>**Scalability:** Easily scale your team up or down without worrying about training, infrastructure, and costs.</li>
                            <li>**Dedicated Project Manager:** A dedicated project manager is appointed at no extra cost to monitor your remote web analysts and ensure all your needs are handled proficiently.</li>
                            <li>**Flexible Engagement:** Take advantage of our pay-as-you-go model. You don't have to sign any long-term contracts.</li>
                        </ul>
                    </div>
                    
                    {/* Why Outsource */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Benefits of Outsourcing Your Web Analytics to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Outsourcing your web analytics and reporting requirements to our remote web analysts offers significant advantages:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Deeper Data Understanding</h4>
                                <p className="leading-relaxed">
                                    Our expert remote web analysts can analyze reports and provide actionable insights that are often missed with standard reporting software. We help you act on this data to improve performance.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Improved Focus</h4>
                                <p className="leading-relaxed">
                                    Web analytics requires specific expertise. By outsourcing to us, you get skilled resources to handle labor-intensive activities, allowing your in-house team to focus on core services.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Increased Quality</h4>
                                <p className="leading-relaxed">
                                    Our analysts have a variety of skills and can customize queries for specific requirements. They are up-to-date with the latest trends and follow industry best practices.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Reduced Costs</h4>
                                <p className="leading-relaxed">
                                    Get cost benefits by hiring a remote web analyst from Nimble Acuity. You avoid the hiring, training, and infrastructure costs of a full-time in-house employee.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Flexibility</h4>
                                <p className="leading-relaxed">
                                    Scale your operations up or down as needed. We can handle ad-hoc work along with your regular requirements without you needing to add resources to your in-house team.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Nimble Acuity's Remote Web Analytics Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our expert team offers a complete package of solutions, including:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Dashboard creation and reporting & analytics</li>
                            <li>Configuring and customizing web analytics tools</li>
                            <li>Campaign analytics and social media analytics</li>
                            <li>Business analysis</li>
                            <li>A/B and multivariate testing</li>
                            <li>Software programming to build customized dashboards and analytical tools</li>
                            <li>Integrating clickstream data with other data points like campaigns, CRM, etc.</li>
                            <li>Data auditing</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Hire a Remote Web Analyst from Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity has been a pioneer in providing top-quality web analytics services. We have the most experienced and skilled experts on board who can cater to all your requirements. We leverage the latest tools and technologies to deliver the best services to clients around the world.
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

export default RemoteWebAnalytics;