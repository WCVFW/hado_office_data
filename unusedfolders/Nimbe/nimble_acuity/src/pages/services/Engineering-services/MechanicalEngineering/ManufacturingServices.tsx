import React from 'react';
import { Link } from "react-router-dom";
import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

const ManufacturingServices: React.FC = () => {
    return (
        <>
            <ESmainmenu />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Manufacturing Support and Process Planning Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Get crucial support and efficient process planning at highly affordable prices by partnering with Nimble Acuity.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Is your company finding it difficult to efficiently manage resources during the manufacturing process, minimize costs and time to market, and boost workplace efficiency? The best step would be to outsource manufacturing support and process planning services to an experienced and skilled service provider like Nimble Acuity. We strive to help our customers through production planning, which is at the core of all manufacturing processes.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Our manufacturing services cover every aspect of the production process, from the conceptual design stage to the final manufacturing and testing stage. We leverage some of the best and latest tools and technologies to provide our clients with the best possible services in the shortest possible time.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Manufacturing Support and Process Planning Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our team uses a perfect blend of available software and experience to provide you with services and solutions that work. Our techniques can help you become a leaner and more efficient business.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            {/* Production Planning */}
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Production or Manufacturing Process Planning</h4>
                                <p className="leading-relaxed">
                                    This is a critical part of a production process, and we will guide you through every stage:
                                </p>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    <li><strong>Concept planning:</strong> Our mechanical engineers will guide you through the risk-versus-reward analysis of a new product lifecycle.</li>
                                    <li><strong>Financial planning:</strong> We will provide you with the necessary financial planning by estimating the future value of the proposed product.</li>
                                    <li><strong>Product planning:</strong> Our team will analyze market information to ensure the proposed product addresses a key market necessity.</li>
                                    <li><strong>Production planning:</strong> We will ensure you make the right choices for your facility, supplier, and labor.</li>
                                </ul>
                            </div>
                            {/* Process Planning */}
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Process Planning</h4>
                                <p className="leading-relaxed">
                                    After product planning, our team ensures your product is seen by the right clientele and your processes are managed efficiently to meet customer demands in time.
                                </p>
                            </div>
                            {/* Manufacturing Support */}
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Manufacturing Support</h4>
                                <p className="leading-relaxed">
                                    Our manufacturing support systems offer the necessary post-production support to operate the project efficiently and smooth out any unexpected hiccups.
                                </p>
                            </div>
                            {/* Cost Estimation */}
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Cost Estimation</h4>
                                <p className="leading-relaxed">
                                    Our experienced cost estimators will provide you with the information you need to successfully bid for a contract or decide on the profitability of a project, based on factors like materials, machinery, labor, and location.
                                </p>
                            </div>
                            {/* Process Innovation */}
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Process Innovation</h4>
                                <p className="leading-relaxed">
                                    Our in-house team is experienced in launching new ideas and can help you evaluate the technical and commercial merits and demerits of any innovative process you plan to implement.
                                </p>
                            </div>
                            {/* Environmental Knowledge */}
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Environmental Knowledge</h4>
                                <p className="leading-relaxed">
                                    We are well-informed about the environmental regulations governing the manufacturing process and will guide you to ensure no laws are flouted.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity for Manufacturing Support?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Outsourcing manufacturing process planning and support to Nimble Acuity provides you with a series of benefits. Some key reasons to choose us include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Affordable Pricing Packages:</strong> We offer highly affordable pricing packages tailored to your business needs and budget.</li>
                            <li><strong>Best Infrastructure:</strong> We use world-class office spaces, international-standard tools, and uninterrupted network connections.</li>
                            <li><strong>High-quality Services:</strong> As an ISO-certified firm, we ensure all services are completely error-free.</li>
                            <li><strong>Quick Turnaround Time:</strong> Our team operates from multiple locations across the globe, leveraging a time zone advantage to deliver services quickly.</li>
                            <li><strong>Single Point of Contact:</strong> We assign a dedicated project manager to handle all your requirements and resolve any issues.</li>
                            <li><strong>Data Security:</strong> As an ISO/IEC 27001:2022 ISMS-certified organization, we ensure your data is secure at all times.</li>
                            <li><strong>24/7 Availability:</strong> Our team provides round-the-clock support via phone or email to answer your queries.</li>
                            <li><strong>Experienced Engineers:</strong> Our qualified and skilled mechanical engineers and designers can handle any volume of work with ease.</li>
                            <li><strong>Easily Scalable Services:</strong> We can easily ramp up the number of resources on a project to meet your needs.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Manufacturing Support & Process Planning Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a leading provider of manufacturing support and process planning services to global clients. We leverage the latest tools and technologies to deliver quality services within a quick time. We offer our services for a new product lifecycle as well as to fine-tune an already existing production process.
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

export default ManufacturingServices;