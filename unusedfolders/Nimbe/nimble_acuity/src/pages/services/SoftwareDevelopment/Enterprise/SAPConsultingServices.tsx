import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const SAPConsultingServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            SAP Consulting Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Nimble Acuity helps businesses think ahead and tap the maximum potential of SAP applications, helping you optimize, automate, and boost productivity while decreasing costs.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Our team has the required expertise to understand different businesses and their business models, providing the required services accordingly. We serve as a one-stop solution for all your SAP-related needs. We provide a highly customized SAP service strategy at a cost-effective price and within a quick turnaround time.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a one-stop SAP consultation expert, whether it's for initial SAP implementation, ongoing enhancements, SAP testing, or regular SAP upgrades. We keep an eye on the latest SAP developments and analyze ways to provide complete SAP advantages to clients across diverse industries.
                        </p>
                    </div>

                    {/* Specialization */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Nimble Acuity's Specialization in SAP Consultancy
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our expertise spans the entire SAP lifecycle, from initial strategy to ongoing support.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Planning</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Need Assessment, Scope, and Roadmap</li>
                                    <li>Optimization Planning</li>
                                    <li>Enterprise and Integration Architecture</li>
                                    <li>Change Impact Assessment</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Development and Implementation</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>SAP Application Development and Module Customization</li>
                                    <li>Application Integration and Data Migration</li>
                                    <li>Rapid Deployment and SAP Upgrades</li>
                                    <li>Release and Change Management</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Testing</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>User Acceptance and System Integration Testing</li>
                                    <li>Performance, Capacity, and Security Testing</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Maintenance and Support</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Post go-live support (Tier 1, 2, and 3)</li>
                                    <li>Application Performance Monitoring</li>
                                    <li>Regular Upgrades and Enhancements</li>
                                    <li>Application Maintenance and Backup</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* End-to-end Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            End-to-end SAP Consulting Services
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>SAP Functional and Technical Consulting for all modules</li>
                            <li>Full Cycle Global SAP Roll-Out</li>
                            <li>SAP Application Management and Development</li>
                            <li>SAP Enhancements and Customizations</li>
                            <li>SAP Application and System Integration</li>
                            <li>SAP Upgrades and Migrations</li>
                            <li>SAP Industry Solutions</li>
                            <li>Complete SAP Support</li>
                        </ul>
                    </div>

                    {/* Proficiency in Diverse SAP Products */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            In-depth Proficiency in Diverse SAP Products
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We understand that to succeed in the global economic environment, it is essential to stress capital productivity and resource optimization. Our consultants have expertise in the following SAP modules:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
                            <ul className="list-disc list-inside space-y-1">
                                <li>SAP APO (Advanced Planning and Optimization)</li>
                                <li>SCM (Supply Chain Management)</li>
                                <li>SRM (Supplier Relationship Management)</li>
                                <li>PLM (Product Lifecycle Management)</li>
                                <li>MDM (Master Data Management)</li>
                            </ul>
                            <ul className="list-disc list-inside space-y-1">
                                <li>HCM (Human Capital Management)</li>
                                <li>CRM (Customer Relationship Management)</li>
                                <li>EP (Enterprise Portal Management)</li>
                                <li>XI (Exchange Infrastructure Management)</li>
                                <li>BW (Business Warehouse)</li>
                            </ul>
                        </div>
                    </div>

                    {/* Application Development with Consultancy */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            SAP Application Development Along with Consultancy
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our global delivery model offers a mix of onsite and offshore technical professionals who have advanced expertise in SAP and allied technologies. Benefiting from our years of SAP development and consultancy experience, we offer a complete range of SAP application development services including:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>SAP Application Development:</strong> We have vast technical and development expertise not only in SAP ERP core modules but also in SAP Business and related technologies.</li>
                            <li><strong>Module Customization:</strong> We analyze your business requirements and custom develop them to suit your SAP modules.</li>
                            <li><strong>Application Integration:</strong> We build an integration architecture to offer complete application and system integration services for your SAP implementation.</li>
                            <li><strong>Data Migration:</strong> We have worked on complex data migration solutions with multiple data sources, ensuring your data is accurately and seamlessly integrated with SAP.</li>
                        </ul>
                    </div>

                    {/* Maximizing ROI */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Helping Organizations Maximize Their ROI from SAP
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a one-stop solution for all your SAP-related needs. We have enabled hundreds of SMEs and large organizations in deploying, maintaining, enhancing, and supporting their SAP applications across different industry verticals.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our deep knowledge across all SAP platforms is complemented by our experience that spans over a decade in the IT consulting domain. This enables us to keep an eye on upcoming SAP developments, understand challenges, capture opportunities, and offer comprehensive solutions to global organizations looking for outsourcing SAP consulting services.
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Upgrade Your SAP Systems with Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            If you are looking to upgrade your SAP systems and get a highly customized SAP service strategy, contact our experts today.
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

export default SAPConsultingServices;