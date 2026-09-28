import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const MetaverseEnterpriseSolutions: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Metaverse Enterprise Solutions
                        </h2>
                        <p className="text-lg text-gray-600">
                            Build innovative metaverse solutions that deliver real business value with our expert services.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Are you trying to build and operate your business in the metaverse? Is your company facing metaverse-related challenges and needs help to efficiently develop its presence? Do you want to enhance interoperability and effectiveness in your metaverse enterprise and need professional services?
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            In that case, you should outsource metaverse enterprise solutions to a reliable and professional service provider, like us. Nimble Acuity provides innovative metaverse enterprise solutions to global clients. Our professional experts offer metaverse enterprise development services tailored to your business objectives and requirements. You can now establish your hold in the competitive realm of the metaverse by leveraging the best strategies and solutions.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Metaverse Enterprise Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We offer the best metaverse enterprise solutions using advanced tools and skilled resources, which instantly improve your metaverse enterprise journey. Some of the services we offer include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Metaverse Integration Services</h4>
                                <p>
                                    We offer efficient metaverse development services to ensure that the functionalities and features of your metaverse enterprise improve to provide a smooth user experience. This includes system integration, consultancy, and other ecosystem solutions.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Metaverse 3D Space Development</h4>
                                <p>
                                    Our scalable 3D space development and design services enable you to create new and advanced concepts that support your enterprise idea. We handle everything from 3D visualization to 3D modeling.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Metaverse Applications Development</h4>
                                <p>
                                    Our metaverse app development solutions bring immense value by revolutionizing your business. We provide tailor-made solutions for app development that will provide the best experience.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Metaverse Software Development</h4>
                                <p>
                                    We are a leading company offering innovative metaverse enterprise development solutions using the best software to ensure all functions and operations run smoothly in the metaverse.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Metaverse Consulting Services</h4>
                                <p>
                                    If you are new to the metaverse and need assistance creating your enterprise, rely on our expert and professional staff. We provide customized metaverse enterprise solutions that work for you.
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
                            Outsourcing metaverse enterprise solutions to us will help you achieve great results. Some of the key benefits of choosing us as your service provider are:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Cost-Effective Pricing:</strong> Our services are available to clients at a very affordable rate. Our reasonable pricing plans and flexible packages ensure you can save money, even on a budget.</li>
                            <li><strong>Data Security:</strong> We value the privacy and security of our client’s information. We follow stringent data security practices and do not share your company’s data with any third party without prior permission.</li>
                            <li><strong>High-quality Services:</strong> Our qualified professionals are well-trained and adhere to strict project quality guidelines, helping us build solutions that deliver great results.</li>
                            <li><strong>World-class Infrastructure:</strong> Our skilled resources, advanced tools, and innovative technologies enable us to deliver outstanding results within short turnaround times.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Get Customized Metaverse Development Services
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a reputed software services firm dedicated to delivering innovative metaverse solutions. Our development support enables you to launch a future-ready metaverse, improve its functionalities, and maintain and upgrade your services to enhance reliability. Create and operate in your new virtual space, boost your brand presence, and maximize engagement with our metaverse enterprise services.
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

export default MetaverseEnterpriseSolutions;