import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const NetDevelopment: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            .NET Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Design, construct, optimize, and manage critical business apps and collaboration solutions using .NET.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Since its release in 2002, **.NET** has grown from a private software development platform to a fully-featured global ecosystem. Businesses now use .NET development services to build a wide range of applications, from web and mobile to microservices, gaming, machine learning, and IoT.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a leading **.NET development service provider** with a large team of developers, programmers, and consultants. We can create a variety of applications using technologies like MVC, C#, SharePoint, ASP.NET, and more, all tailored to your business needs.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            .NET Development Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a leading .NET development company, and our services cover the following:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Development of .NET Desktop Apps</h4>
                                <p>
                                    We offer sophisticated desktop applications using WinForms, Windows Presentation Foundation (WPF), and the Universal Windows Platform (UWP). We can also create console programs, graphical user interface applications, and Windows-specific store apps.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Development of .NET Mobile Apps</h4>
                                <p>
                                    We build dependable Windows phone apps that solve your business challenges while offering an exceptional user experience. Our Xamarin experts can also create cross-platform Android and iOS mobile apps.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Custom .NET App Development</h4>
                                <p>
                                    We employ Microsoft-approved industry standards and frameworks like MVC5. Our custom .NET development services include desktop, mobile, cloud, IoT, and other web-based applications.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Development of an eCommerce Platform</h4>
                                <p>
                                    Our eCommerce applications will help you advertise services and products. We can develop online solutions ranging from shopping carts and online auctions to integrating secure payment methods with the latest upgrades.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Microsoft Azure Development Services</h4>
                                <p>
                                    We provide Azure cloud app development services. We create and deploy dynamic cloud-based web apps, data storage applications, mobile services, and offer Azure migration and modernization services.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Migration Services</h4>
                                <p>
                                    We convert old application data to ASP.NET, VB.NET, C#, MVC, .NET, and other frameworks. This allows you to improve your database schema without having to purge or recreate the database.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Maintenance & Support</h4>
                                <p>
                                    We are experts in all types of migration and support services, including database migration, upgrades, and software module integration. We keep your website up and running and regularly provide new upgrades.
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
                            Partnering with Nimble Acuity for your .NET development services comes with several benefits:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>ISO Compliant:</strong> As a well-known custom .NET development company, we adhere to ISO standards, ensuring high quality in all our services.</li>
                            <li><strong>Secure Data Management:</strong> We are an ISO-certified company with a robust ISMS (Information Security Management System) in place to prevent any unauthorized access to your data.</li>
                            <li><strong>Scalable Solutions:</strong> We offer the best turnaround time in the industry and have the resources to scale up our services on short notice.</li>
                            <li><strong>Affordable Services:</strong> We offer customized and flexible pricing options to our clients, with no hidden channel fees or obligations required to get started.</li>
                            <li><strong>24/7 Support:</strong> We provide our clients with round-the-clock support via phone, email, and web chat.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Build with .NET?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            At Nimble Acuity, we provide a wide selection of enterprise solutions that enable businesses to grow more quickly by delivering best-in-class solutions. Choose us as your .NET Development service provider to take advantage of our high-performance services.
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

export default NetDevelopment;