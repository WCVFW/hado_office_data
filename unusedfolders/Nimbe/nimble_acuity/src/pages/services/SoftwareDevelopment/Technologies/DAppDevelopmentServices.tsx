import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const DAppDevelopmentServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            dApp Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Develop robust decentralized applications (dApps) from an experienced dApp development company.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            A dApp is an application that runs on a decentralized peer-to-peer network, eliminating the need for a centralized tracking and monitoring mechanism. This allows for highly coordinated and seamless operations, such as managing a large supply chain. If you're looking to build a dApp, you need to partner with a reputable dApp development service provider.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity has extensive experience designing and developing dApps for a range of industries, including supply chain, logistics, healthcare, and startups. Our deep exposure to dApp design and development has equipped us with the knowledge needed to transform your concepts into secure, functional dApps that deliver real business value.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Decentralized Application Development Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We provide a comprehensive suite of dApp development services, offering end-to-end expertise to help you build and deploy your decentralized solution. Our services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">dApp Consulting</h4>
                                <p>
                                    Our experts provide consulting to help you identify the right technical components and blockchain platform for your project. We stay updated with the latest dApp market trends to ensure your solution is current and competitive.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">User Interface (UI) Design</h4>
                                <p>
                                    We specialize in creating user-friendly interfaces for your dApps. We ensure a great user experience through proper ideation, detailed wireframe designs, and interactive prototypes for your evaluation.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Decentralized Exchange Development</h4>
                                <p>
                                    Based on your needs, we assist in building customized and highly scalable decentralized exchange platforms. We can help you connect to external exchanges through APIs and distributed shared order books.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Smart Contract Development</h4>
                                <p>
                                    We help you write, test, and deploy smart contracts on various platforms like Ethereum, Neo, and others. We'll also help you choose the right platform for your specific application.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Decentralized Storage Solutions</h4>
                                <p>
                                    If your dApp requires decentralized cloud storage to back internal transactions, we can assist you in picking the right platform to meet your needs for security and reliability.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">dApp Porting & Upgrades</h4>
                                <p>
                                    Our services are designed to assist you with porting your dApp to different operating platforms using the same codebase. We also offer upgrade services to ensure your dApps stay up-to-date with the latest market advances.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Benefits of Partnering with Nimble Acuity
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            When you partner with us for your dApp development needs, you get a range of key benefits:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Rapid Turnaround Time:</strong> Our well-defined development process and iterative approach ensure we consistently meet delivery timelines.</li>
                            <li><strong>Scalable Solutions:</strong> We offer scalable solutions that can easily be adjusted to meet evolving project requirements without affecting timelines.</li>
                            <li><strong>ISO Certified Quality:</strong> As an ISO 9001:2015 certified company, we are committed to delivering high-quality dApp solutions that adhere to international standards.</li>
                            <li><strong>Round-the-clock Support:</strong> We operate across different time zones, making ourselves available 24/7 to provide support whenever you need it.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Move to a Decentralized Future?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            As a specialized dApp development company, we are committed to helping our clients make the move towards a decentralized future. Our end-to-end expertise in dApp development, smart contracts, and decentralized exchanges allows us to provide comprehensive solutions.
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

export default DAppDevelopmentServices;