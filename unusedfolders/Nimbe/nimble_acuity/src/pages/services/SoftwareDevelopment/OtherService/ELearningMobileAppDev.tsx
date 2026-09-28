import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const ELearningMobileAppDev: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            eLearning Mobile Application Development
                        </h2>
                        <p className="text-lg text-gray-600">
                            Transform your training and learning programs for the mobile era. We develop robust e-learning applications for busy professionals on the go.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Mobiles and tablets are an essential part of our daily lives, used for everything from browsing and gaming to learning. This makes it necessary for e-learning developers to create applications for mobile platforms. Our e-learning solutions for mobile devices can help your team access knowledge and training anytime, anywhere.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            With our e-learning mobile application development modules, your staff can learn regardless of their location or schedule. Mobile learning (m-learning) is an effective way for professionals to gain knowledge and training on-the-go.
                        </p>
                    </div>

                    {/* Why Mobile e-Learning */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Nimble Acuity Recommends Mobile e-Learning
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            There are several compelling reasons to develop e-learning applications for mobile platforms:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Portability:</strong> Nothing beats the portability of a mobile device. With internet connectivity, mobile phones empower easy learning and accessibility for users. Our mobile modules allow your employees to learn while traveling or whenever they have a few moments to spare.</li>
                            <li><strong>Ease-of-Use:</strong> M-learning makes all data available at your fingertips, without the need to be at a desk. When designed simply, the content becomes even more engaging and fun.</li>
                            <li><strong>Technological Growth:</strong> The frantic pace of mobile technology has made the mobile platform an essential way to deliver services. As people become more tech-savvy, an e-learning mobile app is a natural and easy addition to their digital toolkit.</li>
                            <li><strong>Wide-Spread User Base:</strong> The high penetration of mobile phones across all demographics makes it a crucial platform for delivering services.</li>
                            <li><strong>Personalized Learning:</strong> Since mobile phones are personal gadgets, learning on a mobile device feels more exclusive. Highly customized training can be delivered dynamically based on user preferences and goals, leading to greater effectiveness.</li>
                        </ul>
                    </div>

                    {/* Applications We Build */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Mobile e-Learning Applications from Nimble Acuity
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We develop a range of applications to meet your mobile e-learning needs:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Learning Apps</h4>
                                <p className="leading-relaxed">
                                    We can develop custom e-learning applications for your mobile users, ensuring your learning system is always at their disposal.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Mobile LMS</h4>
                                <p className="leading-relaxed">
                                    We can design a robust learning management system (LMS) that delivers a great learning environment for your users. This system can be used to launch various e-learning applications.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Simulation Games</h4>
                                <p className="leading-relaxed">
                                    As games are naturally engaging, we develop highly interactive online simulation games to make learning more fun and effective.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Mobile Assessment Apps</h4>
                                <p className="leading-relaxed">
                                    You can conduct assessments and provide instant feedback on progress, making the learning experience highly interactive and engaging.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Customizing Existing Apps</h4>
                                <p className="leading-relaxed">
                                    We help you customize your existing mobile learning or open-source apps to meet your specific requirements, providing a quick and easy solution for your m-learning needs.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Your e-Learning Mobile App Development to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            With our team of mobile application development experts, we understand your diverse e-learning needs. We have the expertise to develop applications across major mobile platforms, including iPhone, Android, and Windows, to give your business a competitive edge.
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

export default ELearningMobileAppDev;