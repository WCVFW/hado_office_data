import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const CRMConsultingServices: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            CRM Consulting Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Get a unified view of your customer interactions to boost your CRM strategy and make every communication count.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Customer engagement is no longer sufficient to thrive in this competitive era where "customer delight" is the new norm. Forging deeper connections through tailored customer interactions is crucial. This gets challenging when dealing with non-integrated and disorganized applications. This is where you should consider our CRM consulting services.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            With over 26 years of extensive experience, Nimble Acuity helps you combine your sales, marketing, and customer experience approaches to create CRM strategies that align with your objectives. Our experts help you connect multi-faceted data sets to create unified customer profiles, giving you a 360-degree view of interactions. Clients across healthcare, banking, retail, manufacturing, and other sectors have benefited from our services.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Professional CRM Consulting Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our services are designed to optimize your CRM system and ensure seamless interactions, personalized engagement, and improved customer satisfaction.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">CRM System Selection and Evaluation</h4>
                                <p>
                                    Our experts assess your business needs and goals to recommend the most suitable CRM solutions, ensuring you invest in a system that aligns with your business strategy and enhances efficiency.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">CRM Software Development</h4>
                                <p>
                                    We provide custom CRM software development services to cater to your unique business requirements. Our skilled consultants create custom software that streamlines your customer relationship management, promoting productivity and profitability.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">CRM Software Implementation</h4>
                                <p>
                                    Our implementation services cover all aspects of CRM roll-out, from initial setup to staff training. We ensure a seamless transition to the new system, minimizing disruption and maximizing user adoption.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">CRM Migration and Data Digitization</h4>
                                <p>
                                    We offer an efficient and secure CRM migration service. Our consultants handle the transfer of your existing customer data to your new CRM system, ensuring data integrity and preventing data loss.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">CRM Consolidation Services</h4>
                                <p>
                                    We help streamline customer relationship management by integrating all your CRM systems into a single, unified platform. This simplifies CRM management and enhances data accessibility.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">CRM Testing Services</h4>
                                <p>
                                    We offer rigorous CRM testing to ensure your system functions optimally. Our testing covers all aspects, from system functionality to the user interface, to guarantee a seamless user experience.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            What Sets Nimble Acuity Apart?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Renowned as a top-tier CRM consulting service provider, our offerings are designed to provide an array of benefits to our clientele. These include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Dedicated CRM Expert Team:</strong> We equip you with a certified CRM professional team to manage tasks, including a project manager, application developers, data analysts, and quality analysts.</li>
                            <li><strong>Proficiency in Multiple Platforms:</strong> Our consultants have deep knowledge of leading systems like Salesforce, Microsoft Dynamics, Zoho, and HubSpot, enabling them to comprehend which strategies and technical approaches yield the best results.</li>
                            <li><strong>CRM Implementation Methodology:</strong> We break down the CRM project into manageable steps and establish milestones to ensure comprehensive control over the project and a phased, steady implementation.</li>
                            <li><strong>Focus on User Experience:</strong> Our services prioritize user experience, resulting in solutions with minimal learning curves and rapid staff onboarding.</li>
                            <li><strong>Customization and Training:</strong> Our training services are delivered in various formats, including face-to-face, group training, and online classes, to ensure high user adoption rates.</li>
                            <li><strong>Dynamic Pricing:</strong> We uphold transparency in our CRM implementation costs. We do not practice hidden pricing and are open about the time invested in every project.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Your CRM Consulting to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Delegating your CRM requirements to a professional service provider like us offers invaluable benefits. Our consultants understand the importance of cultivating and captivating customers based on key insights across various channels. We provide in-cloud and on-premises solutions that ensure risk-free migration and seamless integration of your CRM applications.
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

export default CRMConsultingServices;