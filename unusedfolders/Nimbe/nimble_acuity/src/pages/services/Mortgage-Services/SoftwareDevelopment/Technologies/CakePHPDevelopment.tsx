import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const CakePHPDevelopment: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            CakePHP Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Get access to scalable, fully-functional, flexible, and smart CakePHP solutions.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Are you looking to create web applications using the CakePHP framework to enhance your business’s online presence? Do you need a reliable and experienced partner to create robust CakePHP applications for various industry verticals? If so, you've come to the right place.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a leading CakePHP web development company that can provide you with the perfect solution to enhance your online presence and revenue. Whether you are a small business or a large enterprise, we can provide custom-built CakePHP solutions that exactly meet your needs and requirements.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            CakePHP Development Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a leading provider of high-quality and affordable CakePHP development services. Our services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Customization and Integration</h4>
                                <p>
                                    We can create a custom backend for your mobile applications using the CakePHP framework. We have significant experience and expertise in modifying the look, feel, and functionality of webpages to meet our clients' desires.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Plugin Development</h4>
                                <p>
                                    We can design and develop effective and efficient CakePHP plugins that help you extend the functionality of your web applications or websites. Our developers are highly experienced in delivering plugins to meet a wide variety of requirements.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Framework Development</h4>
                                <p>
                                    We create highly responsive and dynamic websites using clean coding techniques, elegant designs, and robust features. We incorporate customized fields and templates, enhanced user management, and the latest best practices to create exceptional websites and web apps.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Migration Services</h4>
                                <p>
                                    If you need to migrate older CakePHP versions to the latest one, we can help. We also have experience in migrating your CakePHP website to other frameworks like CodeIgniter, Laravel, and Django, among others.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Custom Web Application Development</h4>
                                <p>
                                    Our team has a detailed understanding of the MVC architecture and exceptional programming skills. This helps us deliver highly robust and feature-rich applications, including CMS's, e-commerce websites, and business websites.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Shopping Cart Development</h4>
                                <p>
                                    We work closely with you to determine your exact requirements and provide advanced shopping cart functionality to your e-commerce site, enabling an easy checkout process.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">High-level Security</h4>
                                <p>
                                    We use multiple processes and techniques to ensure your CakePHP applications are highly secure. We incorporate security mechanisms like CSRF protection, XSS prevention, and input validation to protect your applications.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Maintenance and Support</h4>
                                <p>
                                    We provide comprehensive maintenance and support services to ensure your CakePHP web app always runs smoothly with no downtime.
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
                            We are a leading CakePHP development service provider that can offer you the custom and unique services you need. Outsourcing to us provides a host of benefits, including:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Affordable Pricing:</strong> Our CakePHP development services are priced very reasonably, providing you with the highest return on investment.</li>
                            <li><strong>Structured Process:</strong> We use a streamlined and structured process to deliver all our CakePHP development services.</li>
                            <li><strong>Experienced Team:</strong> Our team has over 26 years of experience in providing a wide range of software development services to clients worldwide.</li>
                            <li><strong>High-quality Services:</strong> We are an ISO-certified enterprise and use multi-level quality checks and other QA processes to provide our services.</li>
                            <li><strong>Superb Infrastructure:</strong> All our developers work in modern offices and use powerful computers, enabling them to provide the highest quality services.</li>
                            <li><strong>Data Security:</strong> Your data is of primary importance to us, and we comply with all the latest international data security and privacy laws.</li>
                            <li><strong>Short Turnaround:</strong> We take deadlines seriously, so you will always receive our services on time.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready for High-Quality CakePHP Solutions?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a leading company providing cutting-edge CakePHP development services to clients worldwide. Our team is highly proficient in using the CakePHP framework to create and deliver customized websites and web apps. When you choose our services, you get access to a highly experienced team that has over 26 years of experience in a wide range of software and web app development. If you are looking for fully-functional CakePHP development services, get in touch with us today!
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

export default CakePHPDevelopment;