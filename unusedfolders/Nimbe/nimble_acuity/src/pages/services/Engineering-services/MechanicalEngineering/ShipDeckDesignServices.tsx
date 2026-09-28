import React from 'react';
import { Link } from "react-router-dom";
import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

const ShipDeckDesignServices: React.FC = () => {
    return (
        <>
            <ESmainmenu />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Ship Deck Design and Drafting Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Whether you're starting from scratch or performing a complete overhaul, our experts can take your ship's deck design to the next level.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Creating or overhauling a ship deck is no small task. We know the money, time, and effort you invest in planning the decks and its importance to the overall functioning of your ship. Ship deck design is a project that must be handled with care and must be completed by qualified experts. Nimble Acuity is a ship deck design and drafting service provider with a team of experienced engineers who have delivered several ship deck design and drafting projects over the years.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            While Nimble Acuity can create ship deck designs accommodating all the facilities aligned to engineering feasibility, our team is also adequately skilled in drafting and improvising on legacy drawings. Our engineering team can also help in creating actionable technical designs that include new electrical, mechanical, plumbing, and other components.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Nimble Acuity's Ship Deck Drafting Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nimble Acuity is a reputed ship deck design and drafting services company, and our experts will carefully consider essential functions and features of your ship deck, including, but not limited to: hatches, passages, electrical systems, plumbing systems, signal and radar masts, cargo holds, ramps, anchors, and other equipment, as well as the intended use of the space and flow of on-board personnel.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Planning and Overhauling Deck Design</h4>
                                <p className="leading-relaxed">
                                    Whether you want to update the visual appeal of your ship's deck or completely overhaul the flow and function, we can help you achieve your goals. Our team will help you craft the perfect design by working with current structures and systems to create a layout that meets your needs with minimal disruption and cost.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Re-Building and Updating Existing Deck Designs</h4>
                                <p className="leading-relaxed">
                                    We can import, convert, and adjust existing blueprints and designs for revamping and retrofitting to meet your current preferences. If you have worked with someone else in the past and found their designs are lacking, we are happy to overhaul those designs to better suit your needs.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Ship Deck CAD Drafting and Deck Design</h4>
                                <p className="leading-relaxed">
                                    Are you beginning from zero? Our marine engineers will work closely with you to create a fully functional ship deck design from your concept drawings or ideas, accommodating all the infrastructure that you have planned.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Full-Service Technical Drawings</h4>
                                <p className="leading-relaxed">
                                    We know that deck design isn't just about where things are located. It's also about the many systems that keep your ship operational, such as electrical and plumbing systems, and we provide technical drawings to account for these.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Our Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Ship Deck Design and Drafting Process Flow
                        </h3>
                        <ul className="list-decimal list-inside space-y-2 text-gray-700">
                            <li><strong>Consultation:</strong> We need a clear grasp of your goals and any significant challenges you foresee for the project.</li>
                            <li><strong>First Drafts:</strong> Our team will create the first designs in a rough draft format to give you an overview of their vision for your project.</li>
                            <li><strong>2D Designs & Drafts:</strong> All technical elements are accounted for, planned, and laid out in blueprint-style formats.</li>
                            <li><strong>3D Mockups:</strong> If you are interested in seeing your project come to life before construction begins, our team will create manipulatable 3D renderings of your ship's deck.</li>
                        </ul>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Outsource Ship Deck Design Services to Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Here are a few key benefits of partnering with us:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>A Team of Skilled Professionals:</strong> Our team of experts brings years of professional experience to every job. We are proud to share a wide range of services to complement your ship deck design, from electrical engineering to HVAC systems and more.</li>
                            <li><strong>3D Ship Modeling Services:</strong> While we are happy to draft your designs two-dimensionally, we also understand the importance of visualizing the finished product. Our team will create professional 3D models of the finished product so you can assess the dimensions and functionality in a scaled environment.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Ship Deck Design and Drafting Services to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Begin the drafting process the right way from the start. Reach out to our qualified team of expert professionals to ensure your ship deck's design is functional, affordable, and meets all of your unique needs.
                        </p>
                        <p className="text-gray-700 mb-6">
                            For a quick consultation and a walkthrough of our ship deck design and drafting process, contact us.
                        </p>
                        <Link to="/contact">
                            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                                Contact Us Today
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ShipDeckDesignServices;