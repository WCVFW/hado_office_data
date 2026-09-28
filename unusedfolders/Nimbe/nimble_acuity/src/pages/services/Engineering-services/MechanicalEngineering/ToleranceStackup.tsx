import React from 'react';
import { Link } from "react-router-dom";
import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

const ToleranceStackup: React.FC = () => {
    return (
        <>
            <ESmainmenu />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Tolerance Stackup Analysis Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Get access to effective mechanical tolerance testing and prototyping by choosing our team's tolerance stackup analysis services at prices starting at just $10 an hour.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Are you looking to measure and streamline your mechanical testing and prototyping process? Are you on the lookout for skilled and experienced tolerance stackup analysis experts who can take care of all your requirements? Then, the best step for your firm would be to outsource tolerance stackup analysis to an experienced and skilled tolerance stackup analysis service provider.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a professional tolerance stackup analysis services company that can be your one-stop-shop for all your needs. We have some of the most skilled tolerance stackup analysis specialists on board who can cater to all your requirements. We leverage the latest tools and technologies while delivering the best quality services.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Tolerance Stackup Analysis Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is one of the leading providers of tolerance stackup analysis services to global clients for over two decades now. We understand each client's unique requirements and provide them with services that are customized to their business needs. Some of the key tolerance stackup analysis services we offer include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <ul className="list-disc list-inside space-y-2 col-span-2">
                                <li>Material testing and prototyping</li>
                                <li>Process development and validation</li>
                                <li>Prototype production</li>
                                <li>Assembly tooling and fixtures</li>
                                <li>Durability, fatigue, and vibration testing</li>
                                <li>Final quality inspection</li>
                                <li>Assembly process documentation</li>
                                <li>Prototype creation and assembly</li>
                                <li>Mechanical and electrical testing</li>
                                <li>Tolerance optimization</li>
                                <li>Inspection dimension for quality control</li>
                                <li>Worst-case tolerance analysis</li>
                                <li>Sensitivity analysis of tolerances</li>
                                <li>1D, 2D, 3D Tolerance stackup analysis</li>
                                <li>Creation of G, D, and T drawings</li>
                                <li>Conversion of drawings to G, D, and T drawings</li>
                                <li>Demonstration of mechatronic and mechanical skills</li>
                                <li>Design of Experiment for optimizing test campaigns</li>
                            </ul>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity for Tolerance Stackup Analysis Services?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Outsourcing tolerance stackup analysis services to Nimble Acuity can give you access to a plethora of benefits. Some of the key reasons to choose us as your tolerance stackup analysis service providing company are:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Flexible Pricing Options:</strong> We offer highly flexible and affordable pricing packages that will go well with your budget and business requirements.</li>
                            <li><strong>Data Security:</strong> We are an ISO/IEC 27001:2022 ISMS certified firm, ensuring all the data you share with us is completely safe and secure.</li>
                            <li><strong>Superior Quality Services:</strong> Being an ISO certified company, you can rest assured that all services delivered by us will be of the best quality.</li>
                            <li><strong>Best Infrastructure:</strong> We have access to the latest tools and technologies along with world-class office spaces to provide exceptional service.</li>
                            <li><strong>Skilled Team:</strong> Our team comprises some of the most skilled and certified tolerance stackup analysis experts who can cater to all your needs within a quick time.</li>
                            <li><strong>SPOC (Single Point of Contact):</strong> When you partner with us, we will assign a dedicated manager to you who will be the single point of contact for all your needs.</li>
                            <li><strong>Easily Scalable Services:</strong> We have the required skills and resources to scale up the service requirements and team size as and when the client asks for it.</li>
                            <li><strong>24/7 Customer Support:</strong> Our teams, including customer support, marketing, and sales, are available 24/7 via phone or email to answer your queries and resolve any issues.</li>
                            <li><strong>Quick Turnaround Time:</strong> We operate through several delivery centers across the globe, allowing us to deliver the best quality services within a quick turnaround time.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Tolerance Stackup Analysis Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity has been a pioneer in providing quality tolerance stackup analysis services in India and a gamut of other mechanical engineering services to global clients. We have some of the most experienced and skilled tolerance stackup analysis specialists on board who can cater to all your needs in a hassle-free manner. We leverage the latest tools and technologies while delivering top-notch tolerance stackup analysis services.
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

export default ToleranceStackup;