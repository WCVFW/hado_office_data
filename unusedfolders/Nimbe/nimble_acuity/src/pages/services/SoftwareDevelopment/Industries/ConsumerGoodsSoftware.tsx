import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const ConsumerGoodsSoftware: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Software Solutions for Consumer Goods Companies
                        </h2>
                        <p className="text-lg text-gray-600">
                            Improve your product management, maintain high-quality standards, and boost consumer engagement with software developed by Nimble Acuity.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a leading provider of solutions for consumer goods companies with over 26 years of experience. Our team of full-stack developers, coders, programmers, consultants, and testers can streamline your operations and assist you with product development, labeling, and packaging. We also offer expertise in inventory management, asset management, compliance management, quality testing, workflow management, logistics, and factory design.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            We provide a comprehensive set of software solutions, including business applications, department-based software, and storage solutions. With our services, you can successfully optimize business operations, address gaps, cut product development time, improve customer relationships, generate more ROI, and lead the market with a streamlined product lifecycle workflow.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Software Solutions for Consumer Goods Companies
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Order & Inventory Management</h4>
                                <p className="leading-relaxed">
                                    Under our services, you can collate your sales and operational initiatives under one integrated solution to manage sales orders, website orders, and blanket orders. Our solutions will help you streamline the operational part of the sales process and do predictive analysis to determine product delivery schedules.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Product Lifecycle Management & Process Manufacturing</h4>
                                <p className="leading-relaxed">
                                    Nimble Acuity is an expert provider of software solutions that can reduce the cycle time of product development with its robust software. We help you significantly reduce management blocks, regulate the final product, improve delivery, control risks, and determine the exact quantity of raw materials needed.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Sales, Marketing, and Distribution</h4>
                                <p className="leading-relaxed">
                                    Our sales, marketing, and distribution software suites can help you leverage retail and wholesale insights and accurately predict consumer demands. With our automated solutions, you can transform sales operations by managing sales quotations, shipment details, back orders, and product discounts.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Materials Management & Procurement</h4>
                                <p className="leading-relaxed">
                                    Our software solutions help you synchronize demand and supply by successfully identifying the quantity of raw materials needed. This will help you save significant costs by cutting down on waste and boosting your product manufacturing process.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">CRM & Employee Engagement</h4>
                                <p className="leading-relaxed">
                                    We can develop custom solutions to improve sales prospects and minimize out-of-stocks by managing orders across all available sales channels. Our solutions also enable you to manage customer relationships through modern features like smart notification systems and cloud support.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Transportation & Logistics Management</h4>
                                <p className="leading-relaxed">
                                    We can include custom features like analytics dashboards and reporting tools in your software solution that will help you obtain real-time insights into your inventory. With our services, you can plan, monitor, and manage your organization's supply chain with minimal expenditure.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Our Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Software Development Process
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We offer end-to-end software development and follow a structured process to ensure your project's success:
                        </p>
                        <ul className="list-decimal list-inside space-y-2 text-gray-700">
                            <li><strong>Requirement Gathering:</strong> We start by gathering your exact requirements and understanding them completely.</li>
                            <li><strong>Prototype Design:</strong> Our expert team begins working on the prototype design and implements any specific functionality or custom features.</li>
                            <li><strong>Software Programming:</strong> Our programmers will host the application code and, after your approval, proceed with development.</li>
                            <li><strong>Testing:</strong> When the programming phase is complete, our experienced testers will identify and fix bugs.</li>
                            <li><strong>Deployment:</strong> Once testing is done, our developers start the deployment process in the live environment so you can begin using the software.</li>
                            <li><strong>Support & Maintenance:</strong> We provide ongoing support and maintenance services to ensure your software has unsurpassed performance.</li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Benefits of Choosing Nimble Acuity
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            With our expert solutions, we provide hassle-free software that helps you increase product reach, promote trade efficiency, save logistics costs, and build long-term customer relationships. Here are the benefits of outsourcing to us:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Cost-effective Solutions:</strong> We offer flexible pricing models based on the project scope and resource requirements, enabling you to choose what suits you best.</li>
                            <li><strong>100% Information Security:</strong> As an ISO/IEC 27001:2022 certified organization, we are equipped to safeguard your business information and ensure all employees follow ISMS guidelines.</li>
                            <li><strong>Quality Assurance:</strong> All our projects comply with ISO 9001:2015 quality management standards. Our testers ensure the product is bug-free and performs to international standards.</li>
                            <li><strong>Faster TAT:</strong> We have implemented the Six-Sigma methodology to accelerate product delivery and provide you with the software well within the deadline.</li>
                            <li><strong>Dedicated Project Manager:</strong> You will get a dedicated project manager who will be your primary point of contact for any project-related queries.</li>
                            <li><strong>Option to Scale-up:</strong> With us, you have the option to scale up whenever you experience an increase in demand. We help you manage an upsurge in workflow with our resource capabilities.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Partner with Nimble Acuity for Your Consumer Goods Software
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a leading provider of solutions for consumer goods companies with over 26 years of experience in offering expert software development services. We have a skilled team of programmers, designers, and testers who can develop innovative solutions. We follow a transparent development process and offer customized IT solutions with 24/7 support and on-time delivery.
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

export default ConsumerGoodsSoftware;