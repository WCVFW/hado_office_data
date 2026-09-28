import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const CybersecurityDueDiligence: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Cybersecurity Due Diligence Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Identify and address cyber risks across your network ecosystem to keep it protected by choosing our services.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Cybersecurity solutions have become crucial for every organization. Given how hackers and attackers would take every opportunity to access data, you must take proactive measures to keep your networks and systems safe at all times. Since attackers keep finding new ways to challenge network security, cybersecurity due diligence is an ongoing process. With the help of due diligence services, you ensure that the personal data of all your loyal customers are always safe.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity has been offering complete due diligence services to clients from all around the world for years. Our team of professionals is adept at performing due diligence in information security by identifying network vulnerabilities so that your networks are protected. We provide both buyer- and seller-side diligence services, which makes us a one-stop solution for varied cybersecurity requirements.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Cybersecurity Due Diligence Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity offers comprehensive services, keeping your requirements in mind. We communicate with you to understand your company, processes, and network operations. We conduct an in-depth analysis and rigorous checks to identify vulnerabilities and help you understand how to approach them so that your networks are completely safe. With that said, the following are the services that we offer:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Buy-Side Cyber Due Diligence</h4>
                                <p>
                                    Buy-side due diligence services have become quite popular, as organizations find it necessary to have a complete picture of a target company's security scenario when making a purchase or acquiring a platform. With our buy-side due diligence, you get a detailed security examination of the target network and a comprehensive risk profile.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Sell-Side Cyber Due Diligence</h4>
                                <p>
                                    If you are trying to build your company's portfolio for a sale or carve-out, our team is here to help you get a risk profile of your company so you can explain it to buyers. We recommend this check well before the transaction happens, so you have access to all the information you might need.
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
                            Outsourcing cybersecurity due diligence services to Nimble Acuity comes with plenty of benefits. Our priority when offering services is quality. This is why we communicate with our clients to gain an in-depth understanding of their requirements and conduct a proper assessment to create risk profiles. Some of the other benefits are as follows:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Affordable Solutions:</strong> We offer comprehensive diligence services at highly affordable rates to make it possible for businesses and companies of all sizes to partner with us and access high-quality solutions.</li>
                            <li><strong>Experienced Professionals:</strong> With a team of professionals who have been offering due diligence services for years, our team brings experience to each project and plans it diligently and systematically.</li>
                            <li><strong>Quality Assurance:</strong> We are a cybersecurity due diligence company that focuses on quality, and we are ISO: 9001: 20215 certified, giving you complete assurance.</li>
                            <li><strong>Latest Technology:</strong> With access to the latest tools, technologies, and software, we leverage the best resources to offer you flawless services. We also have access to uninterrupted networks and power backup at all times.</li>
                            <li><strong>24/7 Support:</strong> We have a team of customer care and support executives that you can reach out to at any time via calls, emails, or live chat. We will get back to you with the information you need in a short frame of time.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Ready to Secure Your Networks?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity has been providing cybersecurity due diligence services to its global clientele. With a cost-effective approach, we offer solutions without compromising quality, and we maintain complete transparency, keeping you in the loop at all times. We have an in-house team of experts and access to all the resources required to plan your due diligence process in the most systematic ways. Partnering with Nimble Acuity means ensuring that your networks are completely safe and you have access to a complete risk profile about them.
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

export default CybersecurityDueDiligence;