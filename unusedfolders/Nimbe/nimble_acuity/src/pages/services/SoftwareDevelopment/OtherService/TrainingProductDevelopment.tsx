import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const TrainingProductDevelopment: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Training Product Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Access world-class training product development services with the latest technology and top talent from Nimble Acuity.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Outsourcing your training development services to Nimble Acuity gives you access to professional and competent e-Learning solutions. We ensure that your e-Learning training products are developed exactly as you want them. Our tools engage the learner, helping them learn faster and remember better. Depending on your requirements, we can build the entire e-Learning training product or specific modules.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            A training module or online course is highly advantageous for your organization because e-Learning products are cost-effective, easy to use, effective, reusable, and efficient. They are ideal for training new employees on company policies, teaching them how to use a new software product, or even for sales training to boost revenue. For entrepreneurs, training products offer an excellent business opportunity with low production costs and high ROI.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Nimble Acuity's Training Product Development Process
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We follow a systematic approach to ensure your training products are high-quality and effective.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Content</h4>
                                <p className="leading-relaxed">
                                    We can write the required training content from scratch or redesign your existing products while working closely with your subject matter experts.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Instructional Design</h4>
                                <p className="leading-relaxed">
                                    We design and develop a script that maximizes learning according to your objectives and is tailored for your target audience.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Development</h4>
                                <p className="leading-relaxed">
                                    Our team develops the training product, incorporating elements like audio, animation, tests, interactions, and simulations as required.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Publishing</h4>
                                <p className="leading-relaxed">
                                    We publish the final training product for delivery on a CD, over the internet, or any other media format of your choice.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Use Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Advantages of Using Our Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity uses leading e-Learning tools like Macromedia's Captivate to create effective training products. The advantages of this approach include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Interactive simulations are easily created.</li>
                            <li>Support for audio, video, and animation.</li>
                            <li>SCORM compliant for reusability.</li>
                            <li>Can be used to create quizzes and evaluations.</li>
                            <li>Integrates with Learning Management Systems (LMS).</li>
                            <li>Fast loading and streaming capabilities.</li>
                            <li>Content can be easily updated.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Your Training Product Development to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            If any of these scenarios describe your business needs, you should consider outsourcing your training product development services to Nimble Acuity. Our professional services provide high-quality training products in any format of your choice, whether it’s a CD or an online course.
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

export default TrainingProductDevelopment;