import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const SAPSupportServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            SAP Support Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Nimble Acuity can help you manage your SAP applications and business processes without glitches. Get instant help and functional SAP support at affordable rates.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Is SAP management one of the most important and challenging tasks for your company in today's fast-paced world? Is it important for you to get the best value from the new or existing SAP software? This is possible when you get the best SAP support offerings for all your existing software. It is better to get the support needed for all your SAP modules rather than paying for full-time SAP resources.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            At Nimble Acuity, we assist our clients with the best SAP enterprise support that money can buy. Having served the software industry for years now, we have gained enough experience to cater to any type of client needs. Outsourcing SAP support services to us can help you save overhead costs and get prompt services when needed.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            SAP Support Solutions that We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity's software development and support experts provide SAP support solutions and SAP maintenance services. As a top provider of SAP services, we make use of the best-in-class tools and technologies to ensure that we deliver only top-quality SAP support services. Some of the key services we offer include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">SAP Application Performance Monitoring</h4>
                                <p>
                                    As a leading SAP support company, we have a dedicated team of SAP technical experts who have the required skills and expertise to provide high-quality application performance monitoring services.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">SAP Application Maintenance and Backup</h4>
                                <p>
                                    Our team of experts can help you at every stage of the application maintenance and provide you with regular updates. We also provide a backup service for all SAP enterprise support services.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Regular SAP Updates</h4>
                                <p>
                                    We have the required skills, expertise, and resources to provide our clients with the latest SAP support services in the market. Our team is updated with the latest trends and developments.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">SAP Documentation and Reporting</h4>
                                <p>
                                    We provide our clients with regular reports and documentation of all our SAP enterprise support services. Our team has the required skills and resources to provide timely and accurate reports.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* SAP Module Expertise */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our SAP Module Expertise
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our team comprises some of the most talented and skilled SAP support executives who can cater to any of the client's needs. Our SAP enterprise support strategies are customized to address varying business requirements. Some of the key SAP modules we provide support for include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
                            <ul className="list-disc list-inside space-y-1">
                                <li>SAP HANA Administration</li>
                                <li>SAP SRM</li>
                                <li>SAP NetWeaver</li>
                                <li>SAP GRC</li>
                                <li>SAP WM</li>
                                <li>SAP Web Dynpro</li>
                                <li>SAP PM</li>
                            </ul>
                            <ul className="list-disc list-inside space-y-1">
                                <li>SAP Simple Finance</li>
                                <li>SAP GTS</li>
                                <li>SAP PI</li>
                                <li>SAP PLM</li>
                                <li>SAP FSCM</li>
                                <li>SAP IS RETAIL</li>
                                <li>SAP Business One</li>
                            </ul>
                            <ul className="list-disc list-inside space-y-1">
                                <li>SAP Workflow</li>
                                <li>SAP Basis</li>
                                <li>SAP SuccessFactors</li>
                                <li>SAP BW On HANA</li>
                                <li>SAP CRM</li>
                                <li>SAP IDM</li>
                                <li>And many more...</li>
                            </ul>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Partner with Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Outsourcing SAP support services to Nimble Acuity will enable your business to experience a plethora of benefits. Here are some reasons why you should choose us:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Affordable Services:</strong> We have cost-effective pricing packages for our clients to ensure they only pay for the services they need.</li>
                            <li><strong>Experienced Team:</strong> Our highly skilled and experienced team of SAP consultants can solve every query and escalation in a quick turnaround time.</li>
                            <li><strong>Use of Latest Tools:</strong> We utilize the latest tools and technologies which ensure that we deliver the best results and resolve your queries quickly.</li>
                            <li><strong>Secure Data Management:</strong> We prudently handle your digital data to prevent unauthorized access or accidental disclosure, ensuring complete confidentiality.</li>
                            <li><strong>High-Quality Support:</strong> We take conscious efforts to meet the quality expectations of all our clients, with a dedicated QC team to ensure accuracy.</li>
                            <li><strong>Scalable Solutions:</strong> We provide scalable SAP support that fulfills your needs no matter what.</li>
                            <li><strong>24/7 Support:</strong> We offer round-the-clock support to all our customers irrespective of their time zones.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Get Reliable SAP Support Services
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a leading provider of SAP support services, extending reliable solutions to a plethora of clients worldwide. Backed by a skilled team and efficient technology, we ensure all your project requirements are fulfilled on time and with no compromise on quality.
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

export default SAPSupportServices;