import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const ImageVideoAnalytics: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Image and Video Analytics Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Apply computer vision algorithms to your images and videos to derive actionable insights, improve performance, and gain valuable operational intelligence.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Image and video analytics help businesses analyze their visual data to identify factors that may hinder performance. While this technology offers significant benefits, performing it in-house can lead to inaccurate results and high overhead costs.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Outsourcing to an experienced third-party provider gives you access to skilled resources, cutting-edge tools, and the best infrastructure. Nimble Acuity is a leading analytics service provider with over two decades of experience helping clients efficiently manage their video and image files and make the most of their data.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Image and Video Analytics Services We Offer
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our highly skilled video and image analysts provide a range of accurate services, including:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Video Indexing</h4>
                                <p className="leading-relaxed">
                                    We automatically generate caption files and extract spoken keywords from your videos, making your content searchable and more accessible.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Motion Detection</h4>
                                <p className="leading-relaxed">
                                    For security feeds, we accurately detect any motion in a stationary background, filtering out false positives like changes in lighting or shadows.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Face Detection</h4>
                                <p className="leading-relaxed">
                                    We find and track human faces in a video, providing consistent IDs to each face, even when they are obstructed or leave the screen.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C] font-semibold">Emotion Detection</h4>
                                <p className="leading-relaxed">
                                    We analyze facial expressions in images to identify emotions such as happiness, sadness, and anger for deeper analysis.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Video OCR</h4>
                                <p className="leading-relaxed">
                                    This process involves extracting typeset words from specific parts of video content to balance quality and performance.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Video Summarization</h4>
                                <p className="leading-relaxed">
                                    We create concise summaries of your video files, which can be used to provide quick previews, such as when a user hovers over a thumbnail.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Video Content Moderation</h4>
                                <p className="leading-relaxed">
                                    This technique automatically detects and flags profanity, violence, racism, and other inappropriate content in videos, helping you save money and reduce errors by eliminating the need for human content moderators.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Choose Nimble Acuity for Your Analytics Needs?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            With two decades of experience in the web analytics industry, we have served global clients from various sectors. Here are some key reasons to partner with us:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Cost-Effective Rates:</strong> We provide high-quality services at competitive rates, thanks to our skilled experts and robust infrastructure.</li>
                            <li><strong>Use of Latest Tools:</strong> We use cutting-edge video and image analysis software to ensure quick, efficient, and uncompromised quality.</li>
                            <li><strong>Highly Accurate Analysis:</strong> Our analytics services provide highly accurate results that help businesses make critical decisions at the right time.</li>
                            <li><strong>Data Security:</strong> We sign strict confidentiality agreements and have robust data security policies in place to ensure all your data remains confidential.</li>
                            <li><strong>Quick Turnaround Time:</strong> We prioritize efficiency, delivering our services quickly so as not to disrupt your business schedules.</li>
                            <li><strong>Best Infrastructure:</strong> We have access to world-class infrastructure, enabling us to provide industry-leading analytics services.</li>
                            <li><strong>Transparency:</strong> We operate with complete transparency, keeping you updated on project changes every step of the way.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Image and Video Analytics to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Nimble Acuity is a leading web analytics service provider with over 26 years of experience. We use the latest tools and technologies to provide quality, cost-effective services. Outsourcing to us is a smart business decision that ensures efficient and accurate results with a short turnaround time.
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

export default ImageVideoAnalytics;