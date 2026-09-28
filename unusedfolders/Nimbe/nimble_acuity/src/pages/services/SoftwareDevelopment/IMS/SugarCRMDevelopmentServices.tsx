import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const SugarCRMDevelopmentServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            SugarCRM Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Get improved results from your marketing, sales, and customer support teams by availing our SugarCRM development services.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Are you looking for a flexible and custom customer relationship management (CRM) solution that effectively addresses your enterprise's needs? Are you looking for an effective CRM solution that helps you grow sales, execute marketing programs, create custom business applications, and retain customers? If so, you should seriously consider using SugarCRM, the world's largest open-source CRM software.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a leading SugarCRM development service provider and offers a complete range of SugarCRM development services. We can help you utilize SugarCRM to increase operational efficiencies, streamline CRM functions, and make your inside sales and customer support teams more productive. We can also help you fully utilize the open-source version and customize it to meet your needs.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Nimble Acuity's SugarCRM Development Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a top SugarCRM development company that provides a full range of SugarCRM development services, including:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">SugarCRM Development</h4>
                                <p>
                                    We develop and deploy SugarCRM according to your business requirements. We help you implement, install, and configure SugarCRM, and develop custom modules, plugins, themes, and extensions.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">SugarCRM Customization</h4>
                                <p>
                                    We help you customize SugarCRM to suit your particular organization's unique requirements. We build custom workflows, modules, and schedulers, and help you modify existing web applications and dashboards.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">SugarCRM Integration</h4>
                                <p>
                                    We help you seamlessly synchronize SugarCRM with your emails, third-party applications, and other disparate systems. We can also integrate it with major e-commerce platforms, CMS, and payment gateways.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">SugarCRM Migration</h4>
                                <p>
                                    With our efficient SugarCRM migration services, you can minimize downtime and achieve zero data loss. We make full use of SugarCRM's migration support via both the SOAP and REST APIs for a seamless transition.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">SugarCRM Cloud Deployment</h4>
                                <p>
                                    We help you make use of SugarCRM's multiple hosting options, including on-site, public cloud, and on-demand. We have extensive experience with major cloud platforms like Amazon Web Services and Microsoft Azure.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">SugarCRM Support and Maintenance</h4>
                                <p>
                                    Just implementing SugarCRM may not be sufficient. We provide high-quality maintenance and support services, including troubleshooting, bug-fixing, security patches, and architecture review to ensure your business runs smoothly.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">SugarCRM Upgrade</h4>
                                <p>
                                    We can help you shift from an old SugarCRM version to a newer one, or from another CRM application to SugarCRM, without losing any critical customer data.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Development Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our SugarCRM Development Process
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            As a leading SugarCRM development company, we follow a streamlined process to ensure the delivery of superior SugarCRM solutions.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">01. Requirement Gathering</h4>
                                <p>
                                    We work to understand your requirements in detail to create a tailor-made solution.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">02. Analysis and Design</h4>
                                <p>
                                    The requirements are analyzed, and an initial SugarCRM design is created and sent to you for approval.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">03. Development</h4>
                                <p>
                                    Once approved, we develop the SugarCRM solution, incorporating custom features and functionality.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">04. Testing</h4>
                                <p>
                                    The solution is thoroughly tested, and all bugs and errors are fixed.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">05. Deployment</h4>
                                <p>
                                    The SugarCRM solution is deployed in the final live environment, and our team provides ongoing support.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Benefits of Outsourcing */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Benefits of Outsourcing SugarCRM Development to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Outsourcing SugarCRM software development to us can make a lot of sense for a host of reasons, including cost savings.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Affordable Services:</strong> Our SugarCRM development services are extremely cost-effective and provide the best value for your money.</li>
                            <li><strong>100% Data Security:</strong> We are committed to protecting your data and are ISO/IEC 27001:2022 certified.</li>
                            <li><strong>Quality Systems:</strong> Our developers comply with quality management standards and use multi-level quality assurance processes.</li>
                            <li><strong>Superior Infrastructure:</strong> Our developers and testers work in world-class office spaces with access to the latest tools, technologies, and infrastructure.</li>
                            <li><strong>Expert Team:</strong> Our team of experienced developers, designers, and testers can provide exceptional-quality services.</li>
                            <li><strong>Global Delivery Centers:</strong> Our team is spread across multiple global delivery centers, allowing us to provide services from a location that is most convenient for you.</li>
                            <li><strong>24/7 Availability:</strong> Our support agents are available around the clock, and you'll have a dedicated project manager as a single point of contact.</li>
                            <li><strong>Quick Turnaround Time:</strong> We use Six-Sigma methodology to minimize waste and deliver the highest-quality service at the fastest turnaround time.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Enhance Your Customer Relationships?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a leading SugarCRM development services company and can provide you with custom and flexible SugarCRM solutions quickly and at cost-effective rates. Our solutions can help you boost the productivity of your sales and marketing teams and improve customer experience, resulting in a higher ROI.
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

export default SugarCRMDevelopmentServices;