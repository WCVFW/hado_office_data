import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const ELearningSoftwareDevelopment: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            eLearning Software Application Development
                        </h2>
                        <p className="text-lg text-gray-600">
                            Develop custom eLearning applications to effectively manage diverse training models and ensure your learners are on the right path to success.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            eLearning encompasses various training models like computer-based training, web-based training, simulations, and more. Managing all these effectively and ensuring learners are progressing can be a challenge. This is where Nimble Acuity's custom eLearning application development services provide a significant advantage.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            We understand that every organization has different training requirements. Our team designs custom online training models and software applications that meet your specific needs, ensuring a seamless and effective learning experience for your users.
                        </p>
                    </div>

                    {/* Our Approach */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Approach to Custom eLearning Development
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Before we begin designing a custom eLearning solution, our team of experts carefully considers two key aspects:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Understanding Users:</strong> We first gauge the learning preferences of your users. We consider their demographics, tech-savviness, and learning styles to determine whether an existing software solution will suffice or if a new custom application is required.</li>
                            <li><strong>Content-Driven Customization:</strong> Our experts analyze the eLearning content that needs to be delivered. We then recommend the best delivery options that will maximize training effectiveness, ensuring the right mode works with the right content.</li>
                        </ul>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Custom eLearning Application Development Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our services cater to a variety of training methods. We design and deliver ready-to-use and tailor-made eLearning applications, including:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <ul className="list-disc list-inside space-y-2">
                                <li>Computer-Based Training (CBT)</li>
                                <li>Web-Based Training (WBT)</li>
                                <li>Self-Paced Learning Tutorials</li>
                                <li>Instructor-Led Training (ILT)</li>
                                <li>Online Courses & Product Demos</li>
                            </ul>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Simulations</li>
                                <li>eLearning Software</li>
                                <li>Custom Application Development</li>
                                <li>Content and Application Porting</li>
                            </ul>
                        </div>
                    </div>

                    {/* Beyond Custom Solutions */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Going Beyond Standard eLearning Solutions
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            We believe that even a customized solution can sometimes leave learning gaps. At Nimble Acuity, customization isn't just about combining existing applications. If needed, we are prepared to go the extra mile and create an entirely new eLearning application from scratch to meet your unique business goals.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            To deliver these expert solutions, we employ a skilled team of professionals, including Instructional Systems Design (ISD) Specialists, Web Developers, Application Developers, Content Developers, and Testers.
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Your Custom eLearning Development to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            With our extensive experience in eLearning services, our application development team is meticulous about every detail, ensuring we create perfect solutions for all your business needs.
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

export default ELearningSoftwareDevelopment;