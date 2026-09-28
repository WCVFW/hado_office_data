import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const RealEstateDashboard: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Real Estate Financial Dashboard Solutions
                        </h2>
                        <p className="text-lg text-gray-600">
                            Boost your business performance and decode critical financial information with our expert real estate dashboard solutions.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Are you looking for an intuitive way to understand your real estate business's visual information? Is your organization searching for skilled and experienced financial dashboard developers? Then, the best step for your firm is to partner with a seasoned real estate financial dashboard solutions provider.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            nimble acuity is a one-stop-shop for all your needs. We have some of the most skilled and experienced real estate financial dashboard developers on board who can handle all your requirements with ease. We leverage the latest tools and technologies to deliver top-notch services that empower your business.
                        </p>
                    </div>

                    {/* Dashboard Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Real Estate Financial Dashboard Solutions We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            nimble acuity has been a leader in providing real estate financial dashboard solutions for over two decades. We understand each client's specific requirements and provide services best suited for their business. Some of the key services we provide include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Real Estate Data Visualization</h4>
                                <p className="leading-relaxed">
                                    Our data visualization services go beyond traditional dashboards, uncovering trends and patterns to empower your real estate business. We provide advanced solutions that showcase your data in captivating formats like infographics, charts, and heat maps.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Vacancy Section Dashboard Creation</h4>
                                <p className="leading-relaxed">
                                    We have the skills and expertise to provide high-quality vacancy section dashboard creation services. We can design dashboards to display key parameters including occupancy percentage, vacancy distribution, and move-out numbers.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Rental Income Dashboard Creation</h4>
                                <p className="leading-relaxed">
                                    We can help you develop a comprehensive dashboard to manage all your rental incomes in one place. We create dashboards that display parameters such as income charts, gross rent, monthly rental trends, and collection data.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Property Performance Dashboard Creation</h4>
                                <p className="leading-relaxed">
                                    We provide the best possible property performance dashboards that offer a summary of your property's operational and financial performance, giving you a clear overview of its health.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Financial Summary Dashboard Creation</h4>
                                <p className="leading-relaxed">
                                    We have expertise in delivering high-quality dashboards to help you track your financial summaries. Our dashboards can be customized to display data such as net income charts, actual expenses vs. yearly budget comparisons, and key liabilities and assets.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose nimble acuity for Real Estate Financial Dashboard Solutions?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            When you outsource real estate financial dashboard solutions to nimble acuity, you get access to a range of benefits. Here are the major reasons to choose us as your partner:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Affordable Pricing:</strong> We offer flexible and affordable pricing options that suit your business needs and budget.</li>
                            <li><strong>Data Security:</strong> As an ISO/IEC 27001:2022 ISMS certified company, we ensure all your data is kept in secure locations.</li>
                            <li><strong>Superior Quality:</strong> Our services are of the highest quality and completely error-free, as verified by our ISO certification.</li>
                            <li><strong>Skilled Developers:</strong> We have highly experienced and skilled financial dashboard developers who can handle all your requirements with ease.</li>
                            <li><strong>Single Point of Contact (SPOC):</strong> We assign a dedicated project manager to you, who will be your single point of contact for all your needs.</li>
                            <li><strong>Scalable Solutions:</strong> Our team has the bandwidth to scale up service requirements and increase the team size as you need it.</li>
                            <li><strong>24/7 Support:</strong> Our dedicated teams are available around the clock to answer your queries and provide support.</li>
                            <li><strong>Quick Turnaround Times:</strong> Operating from multiple global delivery locations, we ensure the best quality services are delivered in a quick and efficient manner.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Real Estate Financial Dashboard Solutions to nimble acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            nimble acuity is a leader in providing quality real estate financial dashboard solutions and other web analytics services to global clients. We have an experienced team that leverages the latest tools and technologies to deliver the best quality services to help your business thrive.
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

export default RealEstateDashboard;