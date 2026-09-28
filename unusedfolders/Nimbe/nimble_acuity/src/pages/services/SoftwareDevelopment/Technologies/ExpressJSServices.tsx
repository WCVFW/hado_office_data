import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const ExpressJSServices: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Express JS Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Create highly scalable and responsive web apps and pages by choosing our Express JS design and development services.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Do you want to create highly responsive and scalable web applications and pages for your company? Do you want to find a reliable and trustworthy company that utilizes a proper JavaScript framework to create high-quality applications that are comparable to desktop apps in terms of processing speed and loading times? If yes, harnessing the power of Express JS is one of the best ways to proceed and the services of Nimble Acuity can be your best bet.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a leading provider of Express JS design and development worldwide. We help individuals and businesses all over the world with our Express JS development model to create amazing experiences to match the expectations of their customers. With our Express JS services, you can develop and deploy unique, interactive interfaces that will lead to impressive and immersive user experiences.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Express JS Development Services We Provide
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our Express development services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Express.js Consultation</h4>
                                <p>We provide proper guidance from strategy creation to final implementation of proper resources to help our clients seize new opportunities and overcome difficult challenges.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Express.JS Web Apps</h4>
                                <p>We also offer a suite of Express Node JS web development solutions. Our high-performance, fast, minimalist, and flexible services will ensure that your apps are world-class.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Express.JS API Development</h4>
                                <p>With our Express JS API development, we help you utilize wide-ranging HTTP utility solutions and practices to enhance the important functionalities of applications.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Express.JS Maintenance</h4>
                                <p>We offer a proper suite of efficient maintenance services that incorporates debugging, upgrades, optimization, version enhancements, performance monitoring, troubleshooting, and many other options.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Express.JS Migration</h4>
                                <p>In case you need to shift or migrate your data and information to the framework of Express JS for seamless results, we have services to help you with that.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Express.JS Integration</h4>
                                <p>We will eliminate any redundancies and complexities in your web apps. We will deliver the best results when it comes to enhancing the performance and scalability of the entire system.</p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Outsource Express Development Services to Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Mentioned below are important reasons why outsourcing Express JS development services to Nimble Acuity is a great idea:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Affordable Pricing:</strong> We have highly customized pricing modules that suit the unique business needs of our clients. Our Express JS API development services are easily availed.</li>
                            <li><strong>Superior Quality:</strong> We provide the highest quality Express JS services. Being an ISO-certified company, we have a proper process to offer quality services.</li>
                            <li><strong>Experienced Team:</strong> Nimble Acuity has some of the most experienced and qualified Express JS developers on board that can cater to any of your needs.</li>
                            <li><strong>Data Security:</strong> We are an ISO-certified company and hence we adhere to the highest security standards.</li>
                            <li><strong>Quick Turnaround Times:</strong> We ensure that all the services are offered at a very quick speed and within a limited period of time.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Choose Nimble Acuity for Top-quality Express JS Solutions
                        </h3>
                        <p className="text-gray-700 mb-6">
                            We are one of the pioneers in offering Express JS services. We have been serving clients worldwide for more than 26+ years. With our expertise and expert resources, we have managed to create a name for ourselves as the best Express JS development company.
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

export default ExpressJSServices;