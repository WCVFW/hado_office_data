import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const InstructionalDesign: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Instructional Design Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Create effective and targeted training sessions, online courses, and product tutorials that deliver the intended impact.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Think about this: we can direct inanimate objects like drug capsules to reach a precise destination and have a designed impact. The same principle can be applied to corporate training to ensure its effectiveness. Instructional Design (ID) is the technology that helps you design the packaging, combine the necessary ingredients, set it in motion, and ensure it hits its target.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Corporate training is a powerful tool to improve business performance. Instructional Design increases the effectiveness of training by targeting the design, development, packaging, and delivery of a program toward a specialized audience.
                        </p>
                    </div>

                    {/* Where to Use ID */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Where can you use ID for targeted learning?
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Corporate Training</h4>
                                <p className="leading-relaxed">
                                    Use highly interactive and user-friendly tools designed to target learning, transfer knowledge, and conduct in-house training for your employees.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Online Courses</h4>
                                <p className="leading-relaxed">
                                    Through ID, you can create effective online courses that teach skills or knowledge in any domain.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Product Tutorials</h4>
                                <p className="leading-relaxed">
                                    If you need to train people on a new software or product, ID can be used to create simulations or demonstrations that ensure learning retention.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Web & Computer-Based Training (WBT/CBT)</h4>
                                <p className="leading-relaxed">
                                    WBTs and CBTs can be used for online or training courses, providing flexibility and power to your learning solutions.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Our ID Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            e-Learning Instructional Design Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            nimble acuity offers a comprehensive suite of ID services to ensure your training programs are effective and engaging. Our services include:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Training Needs Analysis</h4>
                                <p className="leading-relaxed">
                                    We identify the gap between a person's current performance and their potential to determine if training is needed and will be effective.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Instructional Analysis</h4>
                                <p className="leading-relaxed">
                                    We conduct a detailed analysis covering the target audience, performance, instructional goals, and content to align the training with its overall purpose.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Macro-Level Course Design</h4>
                                <p className="leading-relaxed">
                                    This high-level design determines the overall structure and administration of the course, including whether it will be online or offline.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Curriculum Design</h4>
                                <p className="leading-relaxed">
                                    We decide the "what" of the course, selecting topics to be covered and ensuring they are directly related to closing the performance gap.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Instructional Strategies</h4>
                                <p className="leading-relaxed">
                                    We evaluate different approaches—such as simulations, learning games, and quizzes—to see which best suits the desired learning goal.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Storyboarding</h4>
                                <p className="leading-relaxed">
                                    The storyboard is a detailed, screen-by-screen illustration of your instructional strategy, complete with visuals, audio, and text.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Our Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            The Steps in Our ID Module Development
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The development of an ID module is a two-phase process that ensures a robust and effective result.
                        </p>
                        <div className="space-y-8">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Phase 1: Analysis & Design</h4>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><strong>Analysis:</strong> We conduct a needs analysis to identify areas that need strengthening, a task analysis to understand job requirements, and an audience analysis to profile the learner.</li>
                                    <li><strong>Design:</strong> Our instructional designers create a storyboard, which shapes the look and feel of the module. We also create the media design, selecting the images, video, and audio elements to be presented to the learner.</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Phase 2: Development & Programming</h4>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><strong>Developing the Content:</strong> We write and refine the core content based on the design framework.</li>
                                    <li><strong>Creating the Graphics:</strong> We produce all visual assets to bring the storyboard to life.</li>
                                    <li><strong>Programming:</strong> We code the module, integrating all elements to create a functional and interactive e-learning solution.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Your Instructional Design Solutions to nimble acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            If you are considering outsourcing your instructional design solutions, nimble acuity is your ideal partner. We have the expertise to create engaging and effective training programs tailored to your specific needs.
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

export default InstructionalDesign;