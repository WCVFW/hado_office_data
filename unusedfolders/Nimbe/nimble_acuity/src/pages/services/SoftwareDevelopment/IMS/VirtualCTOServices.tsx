import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const VirtualCTOServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Virtual CTO Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            We know every small business needs validation to know if they're on track. With our technology expertise, you can align your IT with business goals.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            To ensure that your business is on the right track, it is very important that you have the proper technical expertise and the right tools to implement it. Nimble Acuity's CTO service is ideal for businesses that require a full-time CTO but want a more flexible and cost-effective option. Our CTOs will work with you as a full-fledged technology partner, helping you meet all of your technology needs in a comprehensive manner.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            With years of experience in CTO services, Nimble Acuity is one of the best virtual CTO service providers. Our capabilities have grown manifold, and today we have solutions for businesses of all sizes to set up IT architecture, roadmaps, IT operations, vendor management, and more. We are quick learners and early adopters of savvy technology that helps streamline our clients' infrastructure and business.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Virtual CTO Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is the force behind several IT startups that began with a bang. Our services focus on incorporating technology that is now in demand across industries. Start outsourcing virtual CTO services and explore the continuum of services we offer.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">IT Architecture Selection</h4>
                                <p>
                                    If you're at a crossroads, our service will help you identify and implement new technology solutions, including niche IT architecture, to improve your business processes and productivity.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Configuring Roadmap</h4>
                                <p>
                                    Our CTO will help you develop a customized roadmap to reach your goals. We'll help you decide time-bound priorities and adopt an action plan to realize that goal.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">IT Operations</h4>
                                <p>
                                    We implement highly redundant infrastructure solutions that will enable you to run smoothly with minimal downtime. Our CTO is highly skilled in IT operations and can help you make the right IT decisions whenever warranted.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Security Assessment</h4>
                                <p>
                                    Our CTO will help you identify and implement policies that ensure your network is secure and compliant with current standards. We guide your security experts to have a fighting chance against cybercriminals.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Disaster Recovery Support</h4>
                                <p>
                                    We help you protect and back up your mission-critical data. This service can be performed in various configurations, such as local or remote backup, using approved protocols.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Vendor Management Decisions</h4>
                                <p>
                                    Our CTO will help identify and manage the various technology solutions that will meet your business needs. This will help you focus on your core activities. Our strategy focuses on cost reduction and eliminating hassles in managing vendor data.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Our Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Virtual CTO Process We Follow
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a prominent virtual CTO company offering holistic intervention to add to your existing capabilities. Our end-to-end services provide absolute control and flexibility to manage your IT operations. Our step-by-step approach includes:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">01. Need Analysis</h4>
                                <p>
                                    We discuss requirements and understand the technical feasibility of your project.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">02. Strategizing the Plan</h4>
                                <p>
                                    We develop a solution architecture and discuss the best technology choices for your business.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">03. Implementation</h4>
                                <p>
                                    We build code culture, manage IT decisions, and ensure the safety and security of your product.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">04. Quality Testing</h4>
                                <p>
                                    We develop a product vision, ensure scalability, and provide quality reviews on the entire process.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">05. Enhancement and Support</h4>
                                <p>
                                    We ensure competitive growth and provide ongoing support while reporting on the progress.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Outsource Virtual CTO Services to Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a premium virtual CTO service provider. Our professionals take responsibility for planning, organizing, and managing the development of your company's product.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Affordable Prices and Plans:</strong> Our services are available at highly affordable prices. We can meet your needs with customized services even if you have a small budget.</li>
                            <li><strong>Access to Modern Infrastructure:</strong> We have the infrastructure you need for the best outcome. Our CTOs can remotely connect to and manage our IT assets for your benefit.</li>
                            <li><strong>Capable and Efficient Team:</strong> Our CTOs are highly experienced professionals with years of experience. They are the best you can have on the job.</li>
                            <li><strong>Scalable Solutions:</strong> The services we offer are scalable. If you need extra bandwidth, we have you covered.</li>
                            <li><strong>Short Turnaround:</strong> Our global delivery model enhances the speed of delivery to ensure you have the best satisfaction in the shortest time.</li>
                            <li><strong>Complete Data Security:</strong> Our stringent security protocols and secure FTP servers ensure your digital data is managed in a secure bubble. We have your data protected around the clock.</li>
                            <li><strong>24/7 Customer Support:</strong> Get customer support that can help you by working alongside to solve your concerns. You can reach us by phone, email, and web chat.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Align Your Technology with Your Business Goals?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            If you need qualified professionals to lead your organization with the best technology, Nimble Acuity is your best bet. We have years of experience and professionals who have served several small and large companies worldwide. Our services include subsets that enable digital growth and efficient use of IT technology from consideration to implementation.
                        </p>
                        <Link to="/contact">
                            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                                Get a Free Consultation
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default VirtualCTOServices;