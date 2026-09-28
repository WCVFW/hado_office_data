import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const ColdFusionDevelopment: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            ColdFusion Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            We use agile methods to build and deploy your digital products using the ColdFusion framework in the shortest time.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            ColdFusion is a rapid application development platform for building modern web and mobile applications and a range of enterprise solutions. It's popular for two key reasons: it performs programming tasks at a high level, making app development fast, and it's powerful enough to integrate with web applications like MS Exchange, databases, and for creating PDF forms.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity has over two decades of experience in providing **ColdFusion development services**. Over the years, we've developed several web and mobile applications on the ColdFusion platform and provided a range of associated services such as PDF solutions, CRMs, and ERPs. Our specialists have also provided extensive consultation services to guide enterprises in ColdFusion application development.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            ColdFusion Development Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            As a specialized ColdFusion development services provider, we offer a wide range of solutions, including:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Web Development with ColdFusion</h4>
                                <p>
                                    We use ColdFusion Markup Language (CFML) to offer end-to-end solutions for building a variety of web applications. Our developers have experience in using CFML to build single-page applications (SPA), content management systems (CMS), and intranets.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Website Design with ColdFusion</h4>
                                <p>
                                    A big advantage of ColdFusion is its ability to create dynamic web pages on the fly. We leverage this feature to design static and dynamic pages with intuitive UI designs, providing a seamless user experience.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Mobile App Development with ColdFusion</h4>
                                <p>
                                    ColdFusion makes it easy to build cross-platform and native mobile applications using HTML5 and CFML. Our experience extends to building apps with features such as easy access to native APIs and detection of data types from multi-devices.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Enterprise Solutions with ColdFusion</h4>
                                <p>
                                    We leverage ColdFusion Enterprise implementation to develop industry-specific software such as ERPs, CRMs, and eCommerce applications for industries like healthcare, finance, education, retail, and more.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">PDF Solutions with ColdFusion</h4>
                                <p>
                                    ColdFusion can generate PDF documents using standard HTML. We provide a range of ColdFusion PDF solutions for businesses, including conversions from HTML to PDF, customizing attachments, and digital signatures.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">ColdFusion Migration Services</h4>
                                <p>
                                    We offer a complete range of ColdFusion migration services, including rewriting old ColdFusion web apps in Ruby, HTML5, Java, PHP, and Python. We also upgrade from diverse platforms to modern ColdFusion.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">ColdFusion API Management</h4>
                                <p>
                                    We leverage the ColdFusion API Manager to make mobile and web apps more functional. We develop ColdFusion-based applications that are interoperable, scalable, and can accommodate social media plugins and Microsoft Office file types.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Server/Application Performance Optimization</h4>
                                <p>
                                    With this service, we assist you in preventing your website from crashing. Our tuning services can resolve issues such as long loading times and help stabilize your ColdFusion app.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">App Load Balancing & Cluster Setup</h4>
                                <p>
                                    To tackle issues where an application may not hold up, we assist our clients with configuring clustering options for ColdFusion applications, ensuring your service is always available.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Partner with Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            There are several benefits to partnering with us for ColdFusion development. We have the ability to carry out an agile development process and are committed to meeting client deadlines.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Guaranteed Cost Cutting:</strong> Our services are offered at highly competitive prices due to low infrastructure expenses, allowing you to save significantly on development costs.</li>
                            <li><strong>Certified ColdFusion Experts:</strong> Our team consists of expert and certified Adobe professionals with extensive exposure to developing and maintaining ColdFusion applications.</li>
                            <li><strong>Server Setup, Optimization, and Migration:</strong> We leverage years of experience to assist you with highly complex and critical tasks like optimal server setup, migration, and maintenance.</li>
                            <li><strong>Security and ColdFusion:</strong> Our experienced team understands how to develop sophisticated security measures for ColdFusion applications, protecting your project from all types of attacks.</li>
                            <li><strong>End-to-End Migration:</strong> We have extensive experience in ColdFusion migration, whether it's to or away from the platform. We manage your migration end-to-end, leveraging ColdFusion's capabilities.</li>
                            <li><strong>Standard Support 24/7:</strong> We provide 365/24/7 maintenance and support services that are SLA-driven and strictly quality-focused.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Build with ColdFusion?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity has over two decades of experience in providing enterprise and ColdFusion development services. We specialize in application development, maintenance, and support. Our experts have successfully developed and implemented various ColdFusion projects to meet a wide range of business requirements.
                        </p>
                        <Link to="/contact">
                            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                                Get a Free Quote
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ColdFusionDevelopment;