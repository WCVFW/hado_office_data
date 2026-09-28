import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const ERPDevelopmentServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            ERP Software Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Say goodbye to constraining off-the-shelf enterprise systems with our custom ERP software development services. We'll help you single out bottlenecks and improve your operational efficiency with a centralized system.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Workflow automation and adaptable enterprise systems are crucial to sustain and thrive in the technologically advancing global marketplace. Creating a unique ERP system requires a comprehensive approach, from thorough business analysis to end-to-end software development and implementation. That's where we come in. Our industry-savvy ERP developers, IT consultants, and business analysts offer AI-enhanced ERP systems, resulting in advanced insights, seamless integration, and smooth operations.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            With us, you can select the optimal functional blocks for your custom ERP system to coordinate your business operations. We will then create scalable, business-tailored enterprise solutions using advanced tools. Whether you want a turnkey ERP system or just want to build ERP modules to streamline various processes, we have you covered. Our solutions can be customized on-demand as your business scales, and we implement powerful security features and ensure complete regulatory compliance to minimize risks.
                        </p>
                    </div>

                    {/* Solutions We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            ERP Software Development Solutions We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Serving clients across diverse industries has helped us perfect our ERP development services. This enables us to offer a broad spectrum of possibilities tailored to your unique business needs.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">ERP Implementation Services</h4>
                                <p>
                                    Our services help integrate ERP systems seamlessly into your business framework with minimal disruption to your daily operations.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">ERP Application Development</h4>
                                <p>
                                    Get custom ERP applications designed to meet your unique needs. We create applications that streamline processes, improve decision-making, and enhance productivity.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">ERP UI/UX Design</h4>
                                <p>
                                    We design intuitive, easy-to-navigate interfaces that simplify complex business processes and make information easily accessible, combining aesthetics with functionality.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">ERP Customization and Enhancement</h4>
                                <p>
                                    Our services enable you to tailor ERP systems to your specific needs. We work closely with you to implement custom features that align with your business goals.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">ERP Extension and Plugin Development</h4>
                                <p>
                                    Add additional functionalities to your existing ERP system. We develop and integrate extensions and plugins that enhance the capabilities of your ERP system.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Custom ERP Dashboards</h4>
                                <p>
                                    We design dashboards that present real-time data in an easy-to-understand format, enabling informed and strategic decision-making.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">ERP Maintenance and Support</h4>
                                <p>
                                    Ensure your ERP system continues to function optimally with our post-implementation maintenance and support, including regular system checks, updates, and troubleshooting.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">ERP Migration Services and Upgrades</h4>
                                <p>
                                    Smoothly upgrade or change your ERP system with our migration support. We handle data migration and system configuration to ensure a seamless process.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ERP Consulting Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            ERP Consulting Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            Effective ERP implementation is the key to unlocking your organization's full potential. With years of industry experience and technical expertise, we help you navigate the complexities of ERP integration, ensuring you gain the most value from your investment. Our proficiency extends beyond mere system implementation; we also focus on change management, user training, and post-implementation support to ensure a seamless transition.
                        </p>
                    </div>

                    {/* Our Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Charting the Course: Our ERP Process
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our ERP process is designed for precision and efficiency, ensuring every step is aligned with your business objectives:
                        </p>
                        <div className="space-y-4 text-gray-700">
                            <ul className="list-decimal list-inside space-y-2">
                                <li><strong>Requirement Analysis:</strong> We begin with a thorough understanding of your business needs.</li>
                                <li><strong>Technical Design:</strong> Our team creates a technical blueprint that aligns with your business objectives.</li>
                                <li><strong>Project Planning:</strong> We lay out a detailed plan, outlining timelines and resource allocation.</li>
                                <li><strong>Development:</strong> Our expert developers create a robust and scalable ERP system.</li>
                                <li><strong>Quality Assurance:</strong> We conduct rigorous testing to ensure the system meets the highest quality standards.</li>
                                <li><strong>Integration and Deployment:</strong> We seamlessly integrate and deploy the system, ensuring it functions optimally.</li>
                                <li><strong>Data Migration:</strong> We provide secure and seamless data migration to the new ERP system.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Partner with Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a leading ERP software development company. Our solutions are inspired by years of experience and a dedicated persistence toward delivering paramount service. Our professionals are experts in the latest and most advanced ERP technologies.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Comprehensive and Customized Solutions:</strong> We provide unique solutions for each client, building the software from the ground up to meet your expectations.</li>
                            <li><strong>Cost-effective Services:</strong> Our services are reasonably priced with zero hidden costs and complete transparency.</li>
                            <li><strong>Guaranteed ROI:</strong> We not only help you save money but also ensure you end up with more, with impressive return on investment rates.</li>
                            <li><strong>Powerful Reporting:</strong> Our custom reporting features help you access data-enriched reports and feedback quickly and easily.</li>
                            <li><strong>Your Project, Your Source Code:</strong> Once the project is complete, we deliver the complete application source code to you for further refinement.</li>
                            <li><strong>Multi-Application Support:</strong> Our applications are customized to smoothly integrate with your existing systems, causing zero conflicts.</li>
                            <li><strong>Enhanced Support and Maintenance:</strong> You will have access to a 24-hour hotline, and our maintenance schedules ensure you never face any problems.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource ERP Software Development Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Partnering with a company that understands your unique business requirements is essential for successful ERP implementations. Our analysts delve into your company information to draw up thorough documentation to serve as the blueprint for your custom ERP system. We then work on creating a solution specifically tailored to your organizational needs.
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

export default ERPDevelopmentServices;