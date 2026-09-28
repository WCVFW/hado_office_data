import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const PHPDevelopment: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl px-6 md:px-12 lg:px-24">
                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            PHP Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Get robust static or dynamic websites and web applications developed by our experienced PHP programmers. Prices start at just $20/hour.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            If you're looking for a free and open-source language to create or upgrade a user-friendly, dynamic website or web application, **PHP** is an excellent choice. **Nimble Acuity** is a leading PHP development services provider, offering a complete range of PHP application development. We can help you create modern, database-driven websites and run scripts on all major operating systems, including Unix, Solaris, Linux, Windows, and Mac OS.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            As a pioneer in outsourcing with years of expertise, we provide technology-driven IT services with a fast turnaround time. Partnering with **Nimble Acuity** for your PHP programming needs can help your business reach new heights.
                        </p>
                    </div>

                    {/* Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our PHP Development Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            PHP is a versatile scripting language well-suited for web development. We provide a comprehensive range of PHP programming services, including:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
                            <li>Custom web application development</li>
                            <li>Maintenance of existing web databases and applications</li>
                            <li>Re-engineering and enhancement of existing web applications</li>
                            <li>Open-source implementations (Drupal, WordPress, Magento, etc.)</li>
                            <li>PHP framework migration (Laravel, Yii, CodeIgniter, etc.)</li>
                            <li>Backend development for mobile apps and API connectors</li>
                            <li>Security and maintenance for existing PHP-based apps</li>
                            <li>Custom PHP application development consulting</li>
                            <li>Customizations and code modifications</li>
                            <li>Integration with payment gateways like PayPal and credit cards</li>
                            <li>Custom osCommerce solutions and plug-in installation</li>
                            <li>RSS feed validation</li>
                        </ul>
                    </div>

                    {/* Our Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our PHP Development Process
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            As a leading PHP web development company, we follow a robust process to deliver our services:
                        </p>
                        <ol className="list-decimal list-inside space-y-4 text-gray-700">
                            <li><strong>Requirement Analysis:</strong> We begin by clearly communicating with you to understand your specific PHP programming needs in detail.</li>
                            <li><strong>Analysis and Planning:</strong> Our project manager carefully examines the requirements to create a comprehensive project plan.</li>
                            <li><strong>Design:</strong> Our PHP experts create an initial design for your approval.</li>
                            <li><strong>Development:</strong> Once the design is approved, we begin the full-scale development of your PHP application.</li>
                            <li><strong>Integration and Testing:</strong> The application is integrated and extensively tested by our expert testers to identify and resolve any errors or bugs.</li>
                            <li><strong>Deployment:</strong> After all issues are addressed, the final deployment and integration of the PHP application take place.</li>
                        </ol>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity for PHP Development?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            There are many reasons to choose us as your PHP web development service provider. Some of our key differentiators include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
                            <li><strong>Affordable Prices:</strong> We provide our services at extremely competitive rates, with tailor-made solutions to fit your budget.</li>
                            <li><strong>Open-Source Expertise:</strong> We have significant experience with open-source technologies like Joomla, WordPress, Drupal, and Magento, as well as MVC frameworks like Laravel and Yii.</li>
                            <li><strong>Advanced Application Architecture:</strong> We develop applications with PHP MVC-based frameworks, allowing our developers and designers to work concurrently to save time.</li>
                            <li><strong>Extensive Knowledge of Tools:</strong> Our developers are proficient in a wide variety of efficient and modern PHP development tools such as GitHub, SublimeText, and PhpStorm.</li>
                            <li><strong>Post-Development Support:</strong> We provide continuous product support, including enhancements, upgrades, and issue management.</li>
                            <li><strong>Application Hosting:</strong> Our dedicated administrators can host your applications on various platforms, including Linux, dedicated servers, and the cloud.</li>
                            <li><strong>Scalability:</strong> Our services are scalable, allowing you to easily adjust the number of professionals on your project to meet changing business conditions.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Develop with PHP?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            **Nimble Acuity** is a leading PHP web development service provider. We have earned our technical expertise by working on numerous projects for clients across all industries. Whatever your PHP programming requirements, we can provide you with professional, cost-effective services.
                        </p>
                        <p className="text-gray-700 mb-8 font-medium">
                            Partner with us today and give your organization a competitive advantage.
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

export default PHPDevelopment;