import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const StellarDevelopment: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Stellar Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Get blockchain-ready digital wallets and banking apps developed to handle finance operations for B2B and end-users.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            As an open network platform, Stellar has played a key role in connecting financial institutions across continents for seamless integration, making transactions faster, more robust, and cost-effective. While the Stellar protocol is a key success driver, not every organization has what it takes to fully leverage the framework.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity is a mature technology implementer that can get the integration done successfully. Our primary goal is to unlock your economic potential by synchronizing payment systems under one roof, saving you time and money. Our offerings are beneficial not just for large corporations but for smaller financial firms as well.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Stellar Development Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            At Nimble Acuity, we constantly leverage the latest technology to stay ahead of development trends. Our unique approach ensures accountability and a smooth transactional experience. Our Stellar development services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Stellar Consultation</h4>
                                <p>
                                    Our Stellar development architects and consultants have years of experience to help you navigate challenges and gain traction with the latest workflows and methodologies.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">App Development with Stellar</h4>
                                <p>
                                    We build Stellar applications from the ground up by leveraging the Stellar API server, Horizon, and various software development kits. We also provide full integration support to ensure the app meshes with your existing financial features.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Smart Contracts Development</h4>
                                <p>
                                    As a top Stellar development company, we are experts at building smart contracts that are professional and all-inclusive. We use features like time bounds, multisignature, batching, and sequence to develop secure smart contracts.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Token Development with Stellar</h4>
                                <p>
                                    Our professional Stellar developers are adept at developing custom tokens on the Stellar network so that currency and distributed assets can be tracked anytime, anywhere.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Wallet Development with Stellar</h4>
                                <p>
                                    We build Stellar wallet apps that store any type of digital currency on the blockchain network. We ensure our wallets have the latest security features to cope with digital risks and protect your assets.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Smart Contracts Audit</h4>
                                <p>
                                    We audit your smart contracts to uncover potential lapses and hidden risks. This service helps you isolate and fix bugs before they can cause a problem, leveraging our deep experience in the process.
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
                            Wondering what makes us a leading Stellar development service provider? Here are some of our key differentiators:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Cost-effective Pricing:</strong> We offer both affordable bundles and custom solutions, allowing you to pick services that best fit your budget.</li>
                            <li><strong>High-quality Services:</strong> Our teams work around the clock to ensure you get consistent value, quality, and reliability in all our fintech solutions.</li>
                            <li><strong>Rapid Turnaround:</strong> Our Stellar development services are delivered quickly, without unnecessary delays.</li>
                            <li><strong>Scalable Solutions:</strong> Our solutions are designed to be easily scalable, especially if you have a tight deadline or face bottlenecks in your process.</li>
                            <li><strong>ISO Certified:</strong> We are an ISO 9001:2015 certified provider, demonstrating our commitment to quality and client satisfaction.</li>
                            <li><strong>100% Data Security:</strong> With our ISO/IEC 27001:2022 accreditation, you can be confident that your data is well-preserved.</li>
                            <li><strong>Round-the-clock Support:</strong> We have a local agent ready to register your concerns and provide quick solutions, no matter your time zone.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Build with Stellar?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity has expert development teams you can count on for advanced Stellar development. With over 26 years of experience, we empower top-tier companies and startups with full-scale Stellar solutions, from standalone wallets to smart apps, all in an affordable and scalable package.
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

export default StellarDevelopment;