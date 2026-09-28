import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const BubbleAppDevelopment: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Bubble App Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            We provide world-class expertise in app development using Bubble.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            The world of application development has gone through a lot of changes over time thanks to the business space that we have. When it comes to application development, it isn't just like other trends. It is an important and valuable strategy that businesses these days are using to gain some plus points when compared to their competition. Bubble is one of the major sources in play for the proper development of the apps. For those who are looking to harness Bubble, Nimble Acuity is a perfect choice.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            We have advanced tools and technologies to harness the power of Bubble.io to create the perfect solutions for you and your company. With our Bubble development services, you will be able to create amazing applications that are functional and will lead to the growth and success of your company.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Bubble App Development Services That We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Consulting Services</h4>
                                <p>We will analyze the needs and requirements of your business in order to create the most amazing web applications with the help of Bubble.io.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Development Services</h4>
                                <p>We will assess the project needs in order to create an application that has amazing functionalities and will cater to the users in the best way. From designing to templates, we take care of everything when it comes to Bubble web app development and customization.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Integration Benefits</h4>
                                <p>Another of the Bubble web development services offered here would be the integration options which will integrate the app into other systems and environments to ensure proper operation.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Support & Maintenance</h4>
                                <p>We also offer 24/7 support as well as maintenance benefits to our clients for proper Bubble web app development. Constant monitoring, testing, and fixing errors are some major services that clients can get.</p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Outsource Bubble App Development Services To Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We are a leading Bubble app development service company. Some other reasons to choose us include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Affordable Rates:</strong> We provide high-quality and reliable solutions by leveraging the power of Bubble.</li>
                            <li><strong>Security of Data:</strong> Being a company that is ISO certified, Nimble Acuity guarantees the security of information and data related to any business.</li>
                            <li><strong>Expert Professionals:</strong> Our experienced team of experts in Bubble MVP App development is completely versed with different techniques and software tools that are required to make the process of app development.</li>
                            <li><strong>Great Resources:</strong> Another one of the main reasons why we should be your ultimate choice for proper Bubble Mobile App Development is that we tend to have all the resources for fulfilling all the project demands and requirements for app development.</li>
                            <li><strong>On-Time Delivery:</strong> Our professionals are experienced with Bubble.io and are equipped to handle different complications that might arise in the project and provide on-time delivery of an efficient and functional app.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Hire Nimble Acuity for Bubble App Development Now
                        </h3>
                        <p className="text-gray-700 mb-6">
                            This is your chance to select a company that provides amazing services for bubble application development. We provide highly scalable and functional apps using the Bubble.io system. So come, get in touch with us and enjoy reliable, cost-effective, and result-driven Bubble development solutions and bring efficiency to your existing business ecosystem.
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

export default BubbleAppDevelopment;