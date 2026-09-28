import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const ELearningContentPorting: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            eLearning Content and Application Porting
                        </h2>
                        <p className="text-lg text-gray-600">
                            Effortlessly migrate your existing e-learning content to a new platform without losing critical information or features.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Looking to move your existing e-learning content or application to another development platform? Nimble Acuity offers end-to-end e-learning content and application porting services to help you manage this transition with ease, ensuring no loss of critical information or features.
                        </p>
                    </div>

                    {/* Benefits Section */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Benefits of e-Learning Content Porting
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">No New Content Development</h4>
                                <p className="leading-relaxed">
                                    Content porting eliminates the need to develop new e-learning content from scratch. This saves significant time, effort, and resources that would otherwise be spent on creating new materials.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Faster Implementation</h4>
                                <p className="leading-relaxed">
                                    Migrating existing content is the fastest way to get your new e-learning system up and running. It only requires migration and some essential modifications to make it ready-to-use on a new platform with additional features.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Process Section */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our 6-Step Porting Process
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We follow a systematic, step-by-step process to ensure a smooth and successful transition for your e-learning content and applications.
                        </p>
                        <ol className="list-decimal list-inside space-y-4 text-gray-700">
                            <li><strong>Migration Analysis:</strong> Our experts first analyze your existing content to understand the scope of the migration, providing a clear estimate of the time and resources needed.</li>
                            <li><strong>Create a Similar, Yet Enhanced Interface:</strong> We ensure the new user interface looks familiar to the old one while offering extra features. This makes the upgrade easy for your users.</li>
                            <li><strong>Develop Specific Modules:</strong> For content that isn't migration-friendly, we develop new or similar content that seamlessly integrates with your existing material, creating a perfect e-learning application.</li>
                            <li><strong>Migration and Conversion:</strong> We handle all aspects of the transition, from web content and software migration to specific conversions like Flash to HTML5, ensuring your system is e-learning ready.</li>
                            <li><strong>Migration Testing:</strong> We rigorously test and retest the content and applications to ensure stability, reliability, and compliance with all standards and guidelines.</li>
                            <li><strong>Future-Ready Migration:</strong> We ensure your migrated content and application are prepared for future technological changes, avoiding the need for new development down the line.</li>
                        </ol>
                    </div>

                    {/* CTA Section */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Your Content Migration to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a leader in e-learning application development and porting. Our expert team pays attention to every detail, providing you with a ready-to-use e-learning solution in less time and at a lower cost.
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

export default ELearningContentPorting;