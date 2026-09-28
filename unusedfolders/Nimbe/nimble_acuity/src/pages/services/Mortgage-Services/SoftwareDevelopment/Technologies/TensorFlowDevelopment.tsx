import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const TensorFlowDevelopment: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            TensorFlow Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Make complex processes easy to visualize and optimize numerical analysis by choosing our team's TensorFlow development services.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Are you looking to simplify complex processes and optimize numerical analysis? Do you need skilled resources for TensorFlow development? Then, the best option is to outsource TensorFlow development services to a skilled and experienced service provider.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a leading TensorFlow development service provider that can be your one-stop-shop for all your needs. We have some of the most experienced and skilled TensorFlow development experts who can cater to all your requirements. We leverage the latest tools and technologies to deliver top-notch services.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            TensorFlow Development Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a leading provider of TensorFlow development services to global clients. We understand each client's unique requirements and provide customized solutions to suit their business needs. Here are some of the key services we offer:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Chatbot Development</h4>
                                <p>
                                    We have the required skills and expertise to provide clients with the best quality chatbot development services. We leverage the latest tools and technologies to deliver services efficiently and quickly.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Natural Language Processing</h4>
                                <p>
                                    We have the skills to leverage the power of TensorFlow's modules to address clients' complex natural language processing needs. We use the best tools and technologies to deliver top-notch services.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Outcome Predictor Development</h4>
                                <p>
                                    Our team comprises highly qualified and experienced TensorFlow development experts who can cater to all your outcome predictor requirements. We leverage the power of the latest tools and technologies to deliver top-notch services.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Image Processing Tool Development</h4>
                                <p>
                                    We leverage the latest TensorFlow tools and software to understand each client's unique requirements and provide image processing solutions. Our team of experts can cater to all your image processing tool development needs with ease.
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
                            Partnering with Nimble Acuity for your TensorFlow development needs provides a plethora of benefits. Here are some key reasons to choose us as your development partner:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Affordable Pricing:</strong> We offer flexible and cost-effective pricing plans that suit your business requirements and budget.</li>
                            <li><strong>Data Security:</strong> As an ISO/IEC 27001:2022 certified firm, you can rest assured that all data shared with us is completely secure and confidential.</li>
                            <li><strong>Experienced Team:</strong> We have some of the most experienced and skilled TensorFlow development specialists on board who can take care of all your needs with ease.</li>
                            <li><strong>Quick Turnaround Time:</strong> We operate from multiple delivery locations globally, enabling us to deliver TensorFlow development services quickly.</li>
                            <li><strong>SPOC:</strong> We will assign a dedicated manager who will be your single point of contact for all your TensorFlow development needs.</li>
                            <li><strong>Best Infrastructure:</strong> We have access to the best and latest TensorFlow development software and tools, along with world-class office spaces.</li>
                            <li><strong>Scalable Services:</strong> Our team has the capacity to scale up service requirements and ramp up the project team size as and when you demand it.</li>
                            <li><strong>24/7 Customer Support:</strong> Our support teams are available around the clock to answer your queries via call, email, or our website.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Looking for a Professional TensorFlow Partner?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity has been a pioneer in providing top-quality TensorFlow development services and a plethora of other software development services. We have skilled and experienced experts who can cater to all your requirements with ease. If you're looking for an efficient and reliable TensorFlow development service provider, your search ends here.
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

export default TensorFlowDevelopment;