import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const DigitalGameELearning: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Digital Game-Based e-Learning Solutions
                        </h2>
                        <p className="text-lg text-gray-600">
                            Make your e-learning highly engaging and effective. We create custom game-based learning (GBL) applications that seamlessly combine fun and focus for your users.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Games are synonymous with fun, and game-based learning can effectively replace traditional, monotonous learning systems. Complex processes, procedures, how-to guides, and many other training programs can be delivered through games, puzzles, and mind challenges.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            At Nimble Acuity, we have the proficiency to create custom GBL applications that are enticing, engaging, and highly productive.
                        </p>
                    </div>

                    {/* Principles of GBL */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Principles of Game-Based Learning
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            All our game applications are developed with key principles of game-based learning in mind. This ensures that every application we create is effective and goal-oriented. We combine fun and learning by following a strategic approach that includes:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Probing Technique and Repetition Method</li>
                            <li>Integrated Storyline Method</li>
                            <li>Strategic and Procedural Methods</li>
                            <li>Interactive Simulation and many more</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-6">
                            The most challenging part of GBL is balancing learning and fun. We ensure that learning objectives are always met by creating games where users are engaged and educated, not just entertained.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Game-Based e-Learning Applications from Nimble Acuity
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We offer a variety of scalable e-learning game designs to meet your training needs:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Simulation Games</h4>
                                <p className="leading-relaxed">
                                    We simulate real-world situations and procedures through a fun gaming process that helps learners understand how a product works or a service is delivered.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Procedural Games</h4>
                                <p className="leading-relaxed">
                                    These games follow a set of procedures with task-based targets, helping users understand the process for completing a specific task.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Storyline Games</h4>
                                <p className="leading-relaxed">
                                    These games are built around an underlying story that guides players through learning objectives and activities.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Multi-Player Games</h4>
                                <p className="leading-relaxed">
                                    Developed to improve coordination among users, these games focus on creating coordinated team efforts to complete assigned tasks.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Mobile Games</h4>
                                <p className="leading-relaxed">
                                    We can develop custom mobile e-learning games for any platform, including iOS, Android, and Windows, to meet the high demand for mobile-based learning.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Game-Based e-Learning Development to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Our experienced GBL application development team understands how to effectively combine fun with learning. We have the expertise to deliver the best game-based learning solutions for your training needs, including puzzles, problem-solving games, and strategic challenges.
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

export default DigitalGameELearning;