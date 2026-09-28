import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const CIOAdvisoryServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            CIO Advisory Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Optimize your cloud spending and maximize your ROI with our CIO advisory solutions.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            From a technology disruptor to a core digital transformation enabler, cloud technology has come a long way. Nowadays, there is a greater drive among organizations to serve their clients in a digital-native manner while ensuring their workforce is effective and independent of location. If you are one of those organizations, you should opt for our solutions to help you streamline your business processes. Outsourcing CIO Advisory services will help you understand how to use cloud platforms for the best business outcomes.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a leading service provider with comprehensive and detailed solutions for your in-house IT experts. Our CIO advisory consultants assist tech teams to streamline business operations and processes so they can focus more on core business functions. With years of experience handling requirements for various companies, we can bring a wealth of benefits to your business.
                        </p>
                    </div>

                    {/* Our Solutions */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our CIO Advisory Solutions
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a leading solution provider that can work with you to create the best possible scenarios for your business. Our services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Planning & Strategy Services</h4>
                                <p>
                                    With our CIO strategy and advisory services, you get a roadmap to implement cloud services in the best way for your business. We have specialized experts who provide actionable insights about your business.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Cloud Transformation</h4>
                                <p>
                                    Our CIO advisory and consulting services help you migrate to cloud-based platforms. We help you realize business value through a proper and effective approach. Our solutions drive product enhancements to improve your financial performance.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Cost Optimization</h4>
                                <p>
                                    We optimize the efficiency and performance of your business while ensuring maximum cost savings. Our solutions identify cost-saving pathways and deliver the best results.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why is Nimble Acuity the Preferred CIO Advisory Services Provider?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We are a CIO advisory company with a sterling global presence. With our CIO advisory and consulting services, you can manage your enterprise's performance and execute cloud transformation tactics. Outsource CIO advisory services to us to leverage the following benefits:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Cost-effective Rates:</strong> Our pricing is flexible and customizable. You can reduce costs by choosing us as your service provider.</li>
                            <li><strong>End-to-End Expertise:</strong> We provide you with end-to-end consultation services and updated information about everything, from initial strategy to managing cloud implementation progress.</li>
                            <li><strong>Trained & Certified Consultants:</strong> Our consultants are trained and certified with a strong understanding of the technical and functional capabilities of CIO consultants.</li>
                            <li><strong>ISO Certified:</strong> We are an ISO/IEC 27001 certified service provider that adheres to the highest quality standards, proving our reliability and security.</li>
                            <li><strong>Modern Technology:</strong> We have the technology and experience to enhance, improve, and augment your cloud implementation and transformation processes.</li>
                            <li><strong>World-class Infrastructure:</strong> Our solutions provide a scalable infrastructure, hardware and software options, and development capabilities to support various businesses and organizations.</li>
                            <li><strong>24/7 Customer Support:</strong> We offer a dedicated team of professionals who are always eager to help you with any problems you might have during the process.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Accelerate Your Digital Transformation?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity provides software development services and cloud solutions to global clients across industries and time zones. By outsourcing to us, you benefit from a globally qualified team with a proven track record, top-notch transition services, and an opportunity to accelerate digital transformations while improving your decision-making tactics.
                        </p>
                        <Link to="/contact">
                            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                                Get in Touch
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CIOAdvisoryServices;