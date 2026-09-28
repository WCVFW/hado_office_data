import React from 'react';
import { Link } from "react-router-dom";
import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

const VisualMerchandising: React.FC = () => {
    return (
        <>
            <ESmainmenu />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Visual Merchandising and Display Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Attract the attention of your customers and increase your sales with our highly affordable visual merchandising and display services.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Are you finding it difficult to attract your client's attention to your products and enhance the perception of new products in your store? Are you falling short of skilled resources who can help you strategically plan your visual merchandising needs by creating interactive displays? Then, the best option for you would be to outsource visual merchandising and display services to an experienced and skilled service provider.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is one such service provider who can be your one-stop-shop for all your visual merchandising and display needs. We leverage the latest and the best tools and technologies to deliver the best and eye-catching visual merchandising services. We have some of the most talented and skilled mechanical engineers who can help you out at every stage of the project.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Visual Merchandising and Display Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Being a leading visual merchandising and display service providing company for over two decades now, we understand each client's unique project requirements and provide them with customized services that will suit their business goals. Our team of highly qualified and experienced mechanical engineers has the required skills and expertise to provide you with top-quality services. Some of the key services we offer include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Merchandising Solutions</h4>
                                <p className="leading-relaxed">
                                    Our team at Nimble Acuity can help you style brands and captivate your customers with attractive visual presentations for all your in-store retail display needs. We can work with your in-house team to develop some of the most eye-catching floor presentations which are compliant with your brand standards across different channels.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Merchandising Partnerships</h4>
                                <p className="leading-relaxed">
                                    To build an effective store presence and boost sales, it is important to build strong retail relationships. Our team of mechanical engineers at Nimble Acuity has been establishing and sustaining these crucial partnerships for over two decades now across different channels.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Analysis and Reporting</h4>
                                <p className="leading-relaxed">
                                    We leverage the best and the latest analysis tools and technologies to provide you with the best designs and deep insight into visual merchandising. These reports will give you a better idea of how you can improve your sales and boost revenues by making in-store changes.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Our Service Expertise */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Service Expertise
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity has been providing quality visual merchandising and display services to global clients for over two decades now and has the capability to cater to any of the client's needs. Some of the key service areas we cater to include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>3D Modeling</li>
                            <li>2D Drafting</li>
                            <li>Modeling & Rendering</li>
                            <li>CNC Programming</li>
                            <li>NESTed Board Preparation</li>
                            <li>AMC</li>
                            <li>After-sales Support</li>
                        </ul>
                    </div>

                    {/* Additional Capabilities */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Additional Capabilities
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Wood Designs</h4>
                                <p className="leading-relaxed">
                                    Our team has the expertise to cater to any wood requirement for merchandise displays. We have some of the state-of-the-art CNC machines that help us to automate the processes.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Metal Designs</h4>
                                <p className="leading-relaxed">
                                    Metal components are often used to strengthen the displays and are considered the backbone of fixtures and displays. Our team can provide you with customized metal designs to create long-lasting metal displays for your store.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Acrylic Designs</h4>
                                <p className="leading-relaxed">
                                    Advanced plastics or acrylics have become an integral part of many displays across the globe. Our team has the required infrastructure and skills to manufacture plastic material displays.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Interactive Displays</h4>
                                <p className="leading-relaxed">
                                    Interactive displays play an important role in attracting a large number of people to stores. We, at Nimble Acuity, can help you design some of the most intuitive interactive displays with LEDs, 3D sign elements, videos, audio, etc.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Digital Print and Signs</h4>
                                <p className="leading-relaxed">
                                    Graphics and signs have been a powerful means to convey messages to your customers. Our team at Nimble Acuity can help you with designing attractive material for printing and display signage using the best tools and technologies.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Design & Engineering</h4>
                                <p className="leading-relaxed">
                                    Our design and engineering team can help you convert your idea or design into a professional-looking display for your store. Our services can help you attract more and more customers to your store and compel them to buy your products.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Logistics Division</h4>
                                <p className="leading-relaxed">
                                    We can take care of all your needs right from the manufacturing of displays to delivering the product to its destination, be it domestic or international.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Installation Support</h4>
                                <p className="leading-relaxed">
                                    Installation of merchandising displays can be a cumbersome task. Our team at Nimble Acuity can take care of the installation of your merchandising displays at a highly affordable price without any kind of hassles.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity for Visual Merchandising & Display Services?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Outsourcing visual merchandising and display services to Nimble Acuity can provide you with a series of benefits. Some of the key points for you to choose us include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Flexible Pricing Options:</strong> We provide our customers with highly flexible pricing options that will suit their business requirements. Our pricing is structured to help clients reduce operational costs and boost revenues.</li>
                            <li><strong>Best Infrastructure:</strong> We have access to the best tools and technologies, uninterrupted network connections, and international-standard workspaces.</li>
                            <li><strong>Error-free Services:</strong> Being an ISO certified firm, we provide our clients with the best quality services which are completely error-free.</li>
                            <li><strong>Quick Turnaround Time:</strong> Our teams at Nimble Acuity operate through several delivery centers across the globe, enabling us to deliver the best quality services within a quick turnaround time.</li>
                            <li><strong>Information Security:</strong> We are an ISO/IEC 27001:2022 ISMS certified organization which ensures that all your data is kept safe at all times.</li>
                            <li><strong>Dedicated Manager:</strong> We will assign a dedicated project manager to you who will be your single point of contact for all your needs.</li>
                            <li><strong>24/7 Support:</strong> All our team members are available at all times to answer your queries via phone or email.</li>
                            <li><strong>Talented Engineering Team:</strong> We have some of the most skilled, experienced, and talented mechanical engineers on board who take care of all your requirements with ease.</li>
                            <li><strong>Easily Scalable:</strong> Our visual merchandising services can be easily scaled up or down as per the project requirements.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Visual Merchandising and Display Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity has been a pioneer in providing quality visual merchandising and display services and a plethora of other mechanical engineering services. We leverage some of the best and latest mechanical engineering tools and technologies while delivering quality services to our clients. We have some of the most qualified and skilled mechanical engineers on board who can take care of any of your project needs.
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

export default VisualMerchandising;