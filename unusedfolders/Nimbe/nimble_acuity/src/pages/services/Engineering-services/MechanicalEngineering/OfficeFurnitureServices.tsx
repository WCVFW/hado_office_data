import React from 'react';
import { Link } from "react-router-dom";
import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

const OfficeFurnitureServices: React.FC = () => {
    return (
        <>
            <ESmainmenu />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Office Furniture Design Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Exclusive office furniture drawing and design services from top professionals, meeting your expectations.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Your office is where the magic happens. Nimble Acuity makes the cauldron of magic look even more impressive with its latest office furniture drawing and design services. Our team of expert designers and other experienced professionals provides best-in-class interior furniture designs for your office.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Our USP is to understand your business first, do our research, and then design a remarkable interior plan with top-class international-grade furniture. Outsource interior furniture design services and let us give you the best turnkey solution in this segment. Architects, interior designers, engineers, carpenters, and other related professionals can perfectly understand our detailed plans.
                        </p>
                    </div>

                    {/* Our Services */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Office Furniture Design Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Here is what we offer in terms of office furniture design solutions:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Workplace Furniture Design</h4>
                                <p className="leading-relaxed">
                                    Being a leading office furniture design service provider, companies from different industrial backgrounds seek workplace furniture designs from us.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Conference & Meeting Room Furniture Design</h4>
                                <p className="leading-relaxed">
                                    Our modern office furniture drawings services will ensure the development of beautiful conference or meeting room designs using the internal space accurately.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Counter and Reception Designs</h4>
                                <p className="leading-relaxed">
                                    Apart from the workspace, receptions and counters also need intuitive furniture design. We consider the traits of your brand and company features to visualize and develop appropriate designs.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Flexible Office and Workspace Solutions</h4>
                                <p className="leading-relaxed">
                                    Times change and so does the requirement of an office. Our flexible drafting services for offices and institutes will deliver the ideal setup where an office can adapt to the latest requirements without spending a fortune.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Concept Design and Development</h4>
                                <p className="leading-relaxed">
                                    We also offer a resourceful platform where you can work on your concepts with our expert professionals. From scratch, you can design and work on your office furniture ideas.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Hire Nimble Acuity for Furniture Design?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            There are many reasons to work with us, including:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Understanding the Concept of Modern Office Furniture:</strong> We make our clients understand the ergonomic and physiological benefits of modern office furniture.</li>
                            <li><strong>Space Management:</strong> We primarily focus on managing space by introducing the latest trends and practices in the office furniture industry.</li>
                            <li><strong>Wellness of Employees:</strong> Changing the internal ambiance and providing comfortable furniture will also take care of employee wellness.</li>
                            <li><strong>Faster Turnaround Time:</strong> With our furniture design services, you can enjoy a faster turnaround time and can start renovation in no time.</li>
                            <li><strong>Diverse Furniture Solutions:</strong> The experts in our team are adept at providing top-class furniture designs as per the client's choices and industry needs.</li>
                            <li><strong>Easy to Comprehend Designs:</strong> Our designs can be easily comprehended by professionals such as interior designers, architects, carpenters, etc.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Furniture Design to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Outsourcing office furniture design and drawings services to us will save you time, money, and other resources. We listen to what our clients say and intend to provide the same. Our flexible and unique furniture solutions will give you the best ideas to decorate your office. We also work with top architecture and interior design firms to give their ideas the best shape. We consider the industrial needs and latest practices to give a furniture design the right shape.
                        </p>
                        <p className="text-gray-700 mb-6">
                            Reach us with your requisitions for office furniture design services and get the best quotes.
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

export default OfficeFurnitureServices;