import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const ELearningArtDesign: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            e-Learning Art, Design and Animation
                        </h2>
                        <p className="text-lg text-gray-600">
                            Make your e-learning programs successful with interactive, engaging, and stunningly designed content that captivates and holds the attention of learners.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            e-Learning applications are most effective when they are easy-to-use, appealing, and engrossing. This is only possible with a creative e-learning design, attractive artwork, and seamlessly flowing interactive animation.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            At Nimble Acuity, these facets merge in perfect synchrony to give you the finest e-learning content that truly works. Our experts can help transform your ideas into reality, giving your e-learning solutions a unique identity that stands out.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our e-Learning Art, Design, and Animation Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We offer a complete suite of services to bring your e-learning content to life, from initial sketches to full-fledged animated experiences.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Artwork Services for e-Learning</h4>
                                <p className="leading-relaxed">
                                    Do you want your rough sketches to come to life? Our e-learning art experts can take your ideas from conception to reality. We are highly proficient in artwork creation, color gradients, and artwork manipulation, ensuring your final product is flawless and delivered in the right format.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Creative e-Learning Designs</h4>
                                <p className="leading-relaxed">
                                    Design can make or break your e-learning content. A professional and attractive design is essential for creating an engaging experience that contributes directly to the success of your solution. We provide e-learning design development services, including 2D and 3D designs, to give you a virtual reality of your project before it's finalized.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">e-Learning Animation</h4>
                                <p className="leading-relaxed">
                                    Whether it's a basic computer-based training module, creating wireframes, or highly interactive e-learning animations, we are capable of transforming your ideas into reality. Animation is the soul of most e-learning applications, as it engages users and keeps them thrilled throughout the learning process. We are proficient in all technical aspects of creating rich 2D and 3D animations for your solutions.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* How We Do It */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            How Nimble Acuity Creates Sophisticated e-Learning Content
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            We believe that the combination of creative minds and the latest technology is all it takes to create sophisticated e-learning content, art, design, and animation. Our team of highly skilled and experienced professionals, along with our state-of-the-art infrastructure, allows us to create stunning and exceptionally productive e-learning solutions.
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Your e-Learning Art, Design, and Animation to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Focus on your core business activities by outsourcing your e-learning design, animation, and development to us. Our experts will handle your specific and unique professional e-learning needs with precision and creativity.
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

export default ELearningArtDesign;