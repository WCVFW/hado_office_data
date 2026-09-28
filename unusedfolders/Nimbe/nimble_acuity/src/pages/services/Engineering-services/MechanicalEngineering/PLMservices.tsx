import React from 'react';
import { Link } from "react-router-dom";
import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

const PLMservices: React.FC = () => {
    return (
        <>
            <ESmainmenu />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            PLM Implementation and Customization Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Gain access to the best PLM implementation and customization from an experienced and highly qualified team of mechanical engineers.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Are you struggling to keep up with shifting markets, changing technologies, and stringent regulations? Do you find yourself with less time to focus on innovation and growth due to mundane tasks? If so, outsourcing your Product Lifecycle Management (PLM) implementation and customization services to Nimble Acuity is the ideal solution.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            We provide comprehensive PLM services across various industries, helping our clients shift their focus back to core business activities. With our years of expertise in data management and support services, we deliver guaranteed results across the extended PLM environment. As more product developers look to business intelligence (BI) and data analytics to maximize their PLM processes, our experts can provide you with the competitive edge you need.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Product Lifecycle Management (PLM) Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity provides consultation, implementation, and maintenance for all your PLM-related needs. We handle every step, from design methodology and project planning to change management and Bill of Materials (BOM) management. Once you outsource PLM services to us, our experts also guide you through rigorous quality testing processes to ensure compliance with global standards.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">PLM Strategy Services</h4>
                                <p className="leading-relaxed">
                                    We help you identify complexities affecting profitability and provide strategic services to ensure the highest return on investment. Our services help you build a business case and a roadmap that aligns with your organizational strategy and goals.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Product Data Management (PDM)</h4>
                                <p className="leading-relaxed">
                                    Our PDM services allow you to manage and track product releases, and centralize product development information, including BOMs, CAD files, and compliance certifications, for easy access and verification.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Bill of Materials (BOM) Management</h4>
                                <p className="leading-relaxed">
                                    The accuracy of a product’s materials is of utmost importance. Our team helps you manage the BOM of your product in real-time, keeping it updated and easily shareable across the organization.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">New Product Introduction (NPI)</h4>
                                <p className="leading-relaxed">
                                    We help you with all the required NPI processes, ensuring milestones and developments are monitored in real-time, which improves the chances of a new product's success.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">PLM Data Migration & Customization</h4>
                                <p className="leading-relaxed">
                                    We provide data cleansing services for direct MCAD and PLM integration, managing data quality and accuracy while keeping migration costs in check. We are your trusted partner for PLM customization, process mapping, and risk elimination.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* PLM Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our PLM Process
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We leverage the latest tools, such as Vault, Enovia, and PTC Creo PLM, and follow a streamlined workflow to ensure the best possible services:
                        </p>
                        <ul className="list-decimal list-inside space-y-2 text-gray-700">
                            <li><strong>Project Scoping:</strong> We document your requirements, propose a design strategy, and check for relevant standards.</li>
                            <li><strong>Design & Development:</strong> We develop designs and a strategy for optimization before gaining final design approval.</li>
                            <li><strong>Execution of Work:</strong> We proceed with implementation, monitor progress, and perform checks at every stage.</li>
                            <li><strong>Quality Assurance:</strong> We conduct rigorous testing and inspection to ensure compliance with standards and provide final certification upon delivery.</li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity for PLM Services?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a pioneer in providing quality PLM services to global clients. We follow leading global standards to design the best PLM services that enable clients to achieve their strategic business objectives. Key benefits of partnering with us include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Highly flexible and affordable pricing options.</li>
                            <li>Access to world-class infrastructure and the latest tools and technologies.</li>
                            <li>Highly accurate and error-free services, ensuring the best quality standards.</li>
                            <li>We serve as a single service provider for the entire PLM spectrum.</li>
                            <li>As an ISO/IEC 27001:2022 ISMS-certified organization, we ensure complete data security.</li>
                            <li>A single point of contact for all your queries.</li>
                            <li>Round-the-clock support from our teams via phone or email.</li>
                            <li>We offer insights into product development for a number of industries.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource PLM Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity has been a leader in providing quality PLM and other mechanical engineering services to global clients. Given today's competitive product market, it's essential to hire the best. If you are looking for a reliable company for outsourcing PLM implementation and customization services, you are in the right place.
                        </p>
                        <Link to="/contact">
                            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                                Contact Us Today
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PLMservices;