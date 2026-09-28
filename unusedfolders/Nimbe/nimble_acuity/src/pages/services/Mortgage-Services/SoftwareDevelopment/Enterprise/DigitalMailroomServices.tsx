import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const DigitalMailroomServices: React.FC = () => {
    return (
        <>
            {/* Header */}
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Digital Mailroom Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            Get the best digital mailing services with comprehensive and friendly assistance. We help digitize your files and make them accessible online, ensuring efficient and secure mail management.
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            Digital mailroom and document services include scanning methods that digitize files and make them accessible online. It's challenging for businesses of all sizes to keep up with their incoming mail. Custom digital mailroom services take incoming physical mail and transform it from paper to electronic formats using document scanning, document capture, and data capture technologies.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Using up staff resources and poor mail handling strategies can result in difficulties, including sluggish customer service, non-compliance problems, and late payment penalties. By outsourcing the administration of incoming mail to a specialized digital mailroom company like Nimble Acuity, you can save a lot of time and hassle. Increasingly greater numbers of businesses are realizing that digitized mailrooms improve their efficiency and are opting for them.
                        </p>
                    </div>

                    {/* Services We Offer */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Our Digital Mailroom Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We act as your mailroom outsourcing partner and keep a close eye on your inboxes so that your mail and email can start processing as soon as they are received and reach the correct recipients as soon as possible.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Paper Mail Processing</h4>
                                <p>
                                    When your mailroom is outsourced to us, incoming mail is sent to a specific PO box that we supervise. Your mail is then sent to a secure scanning facility where it is opened, prepped, scanned, indexed, and digitally forwarded to you.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold text-[#006A7C]">Email Processing</h4>
                                <p>
                                    The process of outsourcing email management is very similar. We watch over a specific inbox to remove important files, whether embedded in emails or sent as attachments. Data is painstakingly extracted from every document, and you receive the data along with a clear digital image of each document for processing.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Why Partner with Nimble Acuity?
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Outsourcing digital mailroom services to our company will make sure that you get access to many benefits. Some of the main benefits include:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>ISO Certified Company:</strong> We ensure that the latest proven workflows are employed to deliver top-notch mailroom services.</li>
                            <li><strong>100% Data Security:</strong> As an ISO-certified firm, we adhere to all the latest best practices around safely and securely handling client data.</li>
                            <li><strong>High-Quality:</strong> We ensure that only the best workflows, technologies, and tools are employed to provide you with services that are a cut above the rest.</li>
                            <li><strong>Cost-Efficient Rates:</strong> When you outsource digitized mailroom services to us, we will provide flexible packages so you can choose exactly what you need.</li>
                        </ul>
                    </div>

                    {/* Benefits of Digital Mailroom */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Benefits of Digital Mailroom & Inbound Mail Processing
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Businesses frequently see outsourcing digital mailroom services as a way to streamline operations, boost quality, and increase productivity. But there are also other, less evident advantages:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Spend less time and money.</li>
                            <li>Digital mail seamlessly enters your company.</li>
                            <li>Get consolidated mail delivery.</li>
                            <li>Never again misplace important mail.</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Choose Our Digital Mailroom Company
                        </h3>
                        <p className="text-gray-700 mb-6">
                            The mailroom used to be viewed as a "cost of doing business," but this way of thinking can seriously harm your business nowadays. Enterprise leaders are increasingly aware of the numerous advantages of improving communications and automating mail handling procedures. As a leading mailroom company, we can provide you with a more adaptable and scalable solution to help you stay on top of all your communications.
                        </p>
                        <Link to="/contact">
                            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                                Get in touch
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DigitalMailroomServices;