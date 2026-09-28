import React from 'react';
import { Link } from 'react-router-dom';
import SoftwareHeader from '@/pages/services/SoftwareDevelopment/SoftwareHeader';

const CRMDevelopmentServices: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            CRM Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Enhance productivity with custom CRM interfaces. Our tailored CRM development services overcome user adoption hurdles effortlessly.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            We understand that businesses often struggle with disparate data sources, integration complexities, and the need for real-time insights. By outsourcing your CRM development to us, you eliminate these hurdles. Our team crafts tailored solutions utilizing microservices architecture and AI-driven analytics, ensuring your CRM system integrates seamlessly with existing infrastructure and provides actionable insights for strategic decision-making.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            This partnership improves customer engagement, streamlined processes, and heightened data security and compliance. Nimble Acuity is a pioneer in offering the best CRM solutions globally.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Custom CRM Development Solutions
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our CRM software development services enhance customer relationship strategies, ensuring seamless integration and tailored solutions that drive efficiency and growth.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">CRM Implementation Services</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Customized deployments for business alignment</li>
                                    <li>Seamless integration into existing systems</li>
                                    <li>Best practices to ensure successful adoption</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">CRM Migration & Integration</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Advanced ETL for accurate data</li>
                                    <li>APIs enable seamless system connectivity</li>
                                    <li>Enhanced accessibility and data flow</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">CRM Software Maintenance Services</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Continuous updates keep systems current</li>
                                    <li>Proactive monitoring resolves issues early</li>
                                    <li>Aligning with evolving business needs</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">CRM Module Development</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Agile methodologies for rapid iteration</li>
                                    <li>Custom features meet specific needs</li>
                                    <li>Enhancing CRM system functionality</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">CRM Mobile Application Services</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Intuitive design for easy use</li>
                                    <li>Secure access protects customer data</li>
                                    <li>Enabling efficient on-the-go management</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">CRM Database Management Services</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Optimized structures streamline data</li>
                                    <li>Indexing ensures high performance</li>
                                    <li>Facilitating insightful data analysis</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            What Sets Our CRM Development Company Apart?
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Strategic Alignment Workshops:</strong> Conducting comprehensive sessions to align CRM functionalities with your business goals.</li>
                            <li><strong>Omnichannel Integration:</strong> We help you establish a unified framework for managing customer interactions across all platforms.</li>
                            <li><strong>Advanced Workflow Automation:</strong> Implement sophisticated automation tools to streamline business processes and reduce manual intervention.</li>
                            <li><strong>Predictive Analytics Tools:</strong> Deploy our advanced machine learning models to predict customer behavior and market trends.</li>
                            <li><strong>Custom API Development:</strong> We design and develop tailored APIs to ensure seamless connectivity with existing systems.</li>
                            <li><strong>Data Encryption Standards:</strong> Apply stringent data encryption protocols to protect sensitive information and ensure compliance.</li>
                        </ul>
                    </div>
                    
                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Get Reliable CRM Development Services
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity provides the best CRM software development services, offering versatile and affordable solutions for small, large, and medium-sized enterprises. We are a leading CRM outsourcing company worldwide.
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

export default CRMDevelopmentServices;