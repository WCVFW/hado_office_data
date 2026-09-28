import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const CampaignAnalyticsServices: React.FC = () => {
    return (
        <>
            <SoftwareHeader />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                    {/* Hero Section */}
                    <div className="max-w-4xl mb-12 pt-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                            Campaign Analytics Services
                        </h2>
                        <p className="text-lg text-gray-600">
                            We track, measure, and optimize your website traffic and acquisition initiatives to maximize your digital marketing ROI.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-5xl mb-16 space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                            An online marketing cycle consists of four distinct stages: **Reach**, **Acquisition**, **Conversion**, and **Retention**. Campaign analytics is an integral part of this process, as a major portion of your online budget is invested in acquiring visitor traffic. At Nimble Acuity, we help you optimize your digital marketing campaigns by tracking and measuring their effectiveness, from a broad level down to the key phrase or creative level.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Web visitor traffic can come from various online and offline channels. Online channels include PPC, banners, PR/social media initiatives, emails, and affiliate programs. Offline channels consist of Television, Radio, Print, POS advertisements, Direct Mail, and OOH media. We provide a complete analysis of all these channels.
                        </p>
                    </div>

                    {/* Our Process */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            How Nimble Acuity Analyzes Your Campaigns
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The goal of any online business is to achieve a higher ROI by eliminating non-performing campaign costs and increasing conversions. We help you understand how each factor is performing to reduce traffic acquisition costs and increase the number of quality visitors to your site.
                        </p>
                        <ul className="list-disc list-inside space-y-4 text-gray-700">
                            <li>
                                **High drop-off at the first level (low CTR):** A high drop-off at this stage may indicate that your media or creative sources are underperforming. We drill down to the individual placement, ad size, creative type, and keyword level to identify the best-performing ads and help you eliminate the poorly performing ones.
                            </li>
                            <li>
                                **High drop-off at the second level (low entries to click ratio):** This can indicate that your landing page is not loading properly.
                            </li>
                            <li>
                                **High drop-off at the third level (high bounce rate):** This drop-off suggests a mismatch between your landing page and the ad creative, or that the landing page is confusing or poorly designed.
                            </li>
                            <li>
                                **High drop-off at the fourth level (low registration page visits):** This may indicate poor visitor quality from the traffic source or a suboptimal navigation structure on your website.
                            </li>
                            <li>
                                **High drop-off at the fifth level (low registrations to registration page visits):** This drop-off may indicate that your forms are too long or confusing.
                            </li>
                        </ul>
                    </div>

                    {/* What We Provide */}
                    <div className="max-w-6xl mb-16">
                        <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                            Answers Our Campaign Analytics Services Provide
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our services provide key insights to help you make data-driven decisions. We answer critical questions about your campaigns, including:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>What is the comparison of various marketing channels in terms of sending cost-effective visitors to your site?</li>
                            <li>How do online and offline media channels compare?</li>
                            <li>What is the geographical breakdown of visits, and how does it help in optimizing your media spend?</li>
                            <li>Which marketing channel sends the most engaging and high-quality audience?</li>
                            <li>How are different landing pages performing, and which combinations of landing pages, media, and creatives are underperforming or performing the best?</li>
                            <li>Which keywords, ad groups, and search engines are sending the most engaging audience with the lowest cost per conversion and the least bounce rates?</li>
                            <li>Which referral sources and press releases are bringing more quality traffic to your site?</li>
                            <li>What percentage of visitors from social sites and PR campaigns are completing a conversion?</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mt-16">
                        <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                            Outsource Campaign Analytics to Nimble Acuity
                        </h3>
                        <p className="text-gray-700 mb-6">
                            At Nimble Acuity, we are experts in analyzing campaign performance to help you make informed decisions and improve your marketing ROI. Contact us today to learn how we can help you optimize your digital campaigns.
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

export default CampaignAnalyticsServices;