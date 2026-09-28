import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const AutomotiveSoftwareSolutions: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Automotive Software Solutions
                        </h2>
                        <p className="text-lg text-gray-600">
                            Turn your ideas into reality by developing automotive software to cut turnaround time, plan workspaces, reduce operating costs, and streamline order management processes.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            The automotive industry has transformed significantly, now focusing on smart features, high performance, analytics, and enhanced user experience. Nimble Acuity, a leading provider of automotive software solutions, works with top manufacturers to provide reliable IT solutions for businesses in the automobile industry.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            With over 26 years of experience, we can reduce the time it takes to launch your product and minimize your operational costs. Through our solutions, we can bring your ideas to reality, reduce vehicle turnaround time, schedule workspaces, optimize costs, and streamline order processes.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Automotive Software Solutions
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We offer a wide range of services to meet the diverse needs of the automotive sector, including:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">CRM, ERP, and E-Commerce Solutions</h4>
                                <p className="leading-relaxed">
                                    We can develop solutions to streamline communication between vehicle dealers, vendors, operators, and customers. Our programmers can create contact and lead management systems to help you organize and manage valuable customer data.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Product Life Cycle Management (PLM)</h4>
                                <p className="leading-relaxed">
                                    Our developers have hands-on experience with PLM tools and can offer tailored solutions for each department in your organization. We can create smart PLM solutions with lower development costs to accelerate departmental productivity.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Business Intelligence & Dashboard</h4>
                                <p className="leading-relaxed">
                                    We have a plethora of BI experts who can develop custom solutions to monitor and analyze your sales process. With our solutions, you can analyze sales trends, forecast sales, and generate insightful leads.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Automotive Mobility Solutions</h4>
                                <p className="leading-relaxed">
                                    We can create tailor-made vehicle owner solutions with smart features, including built-in GPS, road traffic solutions, and native or hybrid smartphone apps. Our solutions will enable you to have better control over your products.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Mobile & Website Application Development</h4>
                                <p className="leading-relaxed">
                                    Our experts can provide comprehensive mobile and website development services to create applications with features like appealing interfaces and responsive web design. We can also streamline your customer, vendor, and dealer management systems.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">IoT Solutions</h4>
                                <p className="leading-relaxed">
                                    We specialize in machine learning, AI, and IoT. We can create solutions for IoT devices and integrate them with your custom vehicle software, enabling your end-users to intuitively access notifications and updates.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Our Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Automotive Software Solutions Process
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We follow a well-defined development process to deliver automotive software solutions within the agreed-upon budget and time:
                        </p>
                        <ul className="list-decimal list-inside space-y-2 text-gray-700">
                            <li><strong>Requirement Gathering:</strong> We begin by understanding your exact requirements to inform the entire development process.</li>
                            <li><strong>Prototype Design:</strong> Our expert designers will create a prototype, implementing any custom functionality or feature if required.</li>
                            <li><strong>Software Programming & Development:</strong> Once you approve the prototype, our programmers will proceed with the development.</li>
                            <li><strong>Testing:</strong> As development nears completion, our testers will begin their process to find and fix any gaps.</li>
                            <li><strong>Deployment:</strong> When testing is complete and the software is ready, our developers will deploy the solution in the live environment.</li>
                            <li><strong>Support & Maintenance:</strong> We will also assist you with software maintenance to ensure the solution performs as expected.</li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Benefits of Choosing Nimble Acuity
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Choosing Nimble Acuity for your automotive software needs provides hassle-free solutions with adaptive, safe, and AI-enabled features. Here are just a few of the many benefits:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Cost-effective Solutions:</strong> We provide flexible pricing based on factors like the number of resources and project scope.</li>
                            <li><strong>100% Information Security:</strong> As an ISO/IEC 27001:2022 certified company, we are equipped to handle any emergency security situation and safeguard your data.</li>
                            <li><strong>Quality Assurance:</strong> All our solutions comply with ISO 9001:2015 quality management standards, ensuring a robust, secure, and high-performing end product.</li>
                            <li><strong>Expert Team:</strong> With more than 26 years of experience, our team has an expert understanding of the automotive industry.</li>
                            <li><strong>Dedicated Project Manager:</strong> We assign a dedicated project manager who will be your first point of contact for any project-related issues.</li>
                            <li><strong>Faster TAT:</strong> We have adopted the Six-Sigma methodology to accelerate delivery so you get the finished software on time.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Automotive Software Solutions to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a leading provider of automotive software solutions with 26 years of experience in developing IT solutions for global clients. Our team of experienced programmers, developers, and testers is proficient in creating innovative solutions. We have a transparent development process and offer custom solutions with 24/7 support and on-time delivery.
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

export default AutomotiveSoftwareSolutions;