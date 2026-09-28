import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const ELearningContentDevelopment: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            e-Learning Content Development Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Create engaging, effective, and memorable e-learning experiences with our expert content development services, tailored to your specific needs.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            e-Learning has become the standard for modern training, and its success hinges on strong, compelling, and engaging content. Whether it's a basic computer-based training module or a highly interactive learning environment, the content is of primary importance.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Nimble Acuity offers pragmatic and thought-provoking content development services for e-learning. Our approach is based on fundamental learning principles combined with cutting-edge technology and our exclusive expertise, ensuring a whole new, effective learning experience for your users.
                        </p>
                    </div>

                    {/* Core Principles */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Core Principles of Our Content Development
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our e-learning content is built upon the following core principles to ensure its success:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Usability</h4>
                                <p className="leading-relaxed">
                                    Many e-learning solutions fail due to poor usability. We develop content from the reader's perspective, making it easy to learn, concise, and visually appealing. Our team ensures the entire learning process is enticing and simple, not difficult and boring.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Engagement</h4>
                                <p className="leading-relaxed">
                                    If your e-learning solution fails to engage users within the first few seconds, you'll lose their interest. We create a "slippery slope" experience where users glide through the content, enjoying the learning process without getting bored.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Interactivity</h4>
                                <p className="leading-relaxed">
                                    While many focus on eye-catching visuals, we understand that interactivity is key to user involvement, which makes learning memorable and productive. We develop interactive content for various media, including documents, presentations, videos, demos, and quizzes.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Assessment</h4>
                                <p className="leading-relaxed">
                                    To truly gauge the impact of your e-learning content, you need easy and effective assessment procedures. We continually assess our content based on user behavior, feedback, and industry benchmarks. This ensures our content is always suitable and evolving to meet diverse learning needs.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Advantages of Partnering with Nimble Acuity
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We believe that e-learning solutions should be highly effective and user-friendly. By partnering with us, you gain the following advantages:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Best Use of Technology:</strong> We assess learning objectives and use the best technology and authoring tools to deliver superior results. We constantly update our skills on the latest applications to provide the best solutions.</li>
                            <li><strong>Expert Team of Professionals:</strong> Our team includes highly skilled instructional systems design (ISD) specialists, content developers, creative artists, and testers who collaborate to deliver best-in-class learning solutions.</li>
                            <li><strong>Continuous Improvement:</strong> Assessments help us analyze the impact of our training materials, providing pointers for continuous improvement. This ensures what we deliver is always in line with the latest trends and technologies.</li>
                            <li><strong>Staying Ahead of Trends:</strong> As a leading provider, it's our job to stay aware of the latest trends in e-learning development and design. This gives us an edge and helps us recommend custom solutions to our clients.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource e-Learning Content Development to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity offers a complete range of e-learning solutions. Our team of experts is ready to help you create impactful and effective e-learning content that drives user engagement and learning success.
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

export default ELearningContentDevelopment;