import React from 'react';
   import { Link } from "react-router-dom";
   import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

   const ProposalAndBidManagement: React.FC = () => {
       return (
           <>
               <ESmainmenu />

               <section className="py-24 bg-white">
                   <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                       {/* Hero Section */}
                       <div className="max-w-4xl mb-12 pt-6">
                           <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                               Proposal Review and Bid Management Services
                           </h2>
                           <p className="text-lg text-gray-600">
                               Reduce rework, slash turnaround times, and create proposals that win with our expert proposal writing and bid management services.
                           </p>
                       </div>

                       {/* Introduction */}
                       <div className="max-w-5xl mb-16 space-y-4">
                           <p className="text-gray-700 leading-relaxed">
                               Are you doing everything in your power, yet struggling to create competitive proposals and bids that help you win? Writing impactful proposals and tenders is crucial for your organization because they represent growth opportunities and new revenue.
                           </p>
                           <p className="text-gray-700 leading-relaxed">
                               Nimble Acuity is a reputed proposal review and bid management company offering proficient tender evaluation and proposal management services. We can help you create powerful, business-oriented proposals, bids, and tenders that cut through preferential treatments and enable your organization to win the best deal possible. Our team of skilled proposal writers and editors authors professionally written bids and tenders that are competent and compliant. Let us create winning business proposals for you, while you focus on running your business.
                           </p>
                       </div>

                       {/* Our Services */}
                       <div className="max-w-6xl mb-16">
                           <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                               Proposal and Bid Management Services We Offer
                           </h3>
                           <p className="text-gray-700 leading-relaxed mb-6">
                               We have the expertise and industry experience to assist you with all your proposal review, tender evaluation, and bid management requirements. Some of the prominent bid management and tender writing services we offer include:
                           </p>
                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                               <div className="space-y-2">
                                   <h4 className="text-xl font-bold text-[#006A7C]">Proposal Writing</h4>
                                   <p className="leading-relaxed">
                                       We create tender responses and quality submissions that showcase your expertise and emphasize why your organization should win the bid. This is a key part of any winning proposal.
                                   </p>
                               </div>
                               <div className="space-y-2">
                                   <h4 className="text-xl font-bold text-[#006A7C]">Proposal Review</h4>
                                   <p className="leading-relaxed">
                                       Our experts will check your proposals for compliance and review your tender responses to provide useful suggestions that add value to your submission.
                                   </p>
                               </div>
                               <div className="space-y-2">
                                   <h4 className="text-xl font-bold text-[#006A7C]">Create Proposal and Bid Repositories</h4>
                                   <p className="leading-relaxed">
                                       We will provide you with tools and systems to manage bids and create repositories, which helps you to stay organized and have a clear picture of your differentiators, capabilities, and unique selling propositions.
                                   </p>
                               </div>
                               <div className="space-y-2">
                                   <h4 className="text-xl font-bold text-[#006A7C]">Bid Management</h4>
                                   <p className="leading-relaxed">
                                       Our writers and editors will manage your bids and tenders from start to finish. We help you create technical responses, collate bid materials, ensure governance, coordinate the overall bid, and design your tenders.
                                   </p>
                               </div>
                               <div className="space-y-2">
                                   <h4 className="text-xl font-bold text-[#006A7C]">Proposal Design and Development</h4>
                                   <p className="leading-relaxed">
                                       Proposals can be presented in various formats, which include organization-specific templates, online forms, and more. We add final winning touches to your bids by providing technical bid designs, creating bid assets, designing cover pages, and assisting with ad hoc designs.
                                   </p>
                               </div>
                           </div>
                       </div>

                       {/* Why Choose Us */}
                       <div className="max-w-6xl mb-16">
                           <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                               Why Choose Our Bid and Proposal Management Services?
                           </h3>
                           <p className="text-gray-700 leading-relaxed mb-6">
                               Our bid and proposal management process is designed to help you create highly impactful proposals that win. Some of the benefits of choosing our proposal writing services include:
                           </p>
                           <ul className="list-disc list-inside space-y-2 text-gray-700">
                               <li><strong>Competitive Rate:</strong> We offer superior proposal review and bid management services at highly competitive rates. With us, you will have the flexibility to pay only for what you use.</li>
                               <li><strong>Complete Data Security:</strong> Nimble Acuity is an ISO/IEC 27001:2022 ISMS certified outsourcing firm, which ensures that your confidential data remains safe and is handled only by authorized personnel.</li>
                               <li><strong>Global Delivery Centers:</strong> You can take strategic advantage of our multi-locational outsourcing by getting your bids, tenders, and sales proposals created and reviewed at the place that does it best.</li>
                               <li><strong>Skilled Proposal Writers and Editors:</strong> We have a team of skilled and experienced bid writers who will help you take up new work opportunities by creating engineering bids and proposals that win.</li>
                           </ul>
                       </div>

                       {/* CTA */}
                       <div className="max-w-4xl mt-16">
                           <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                               Outsource Proposal Review and Bid Management Services to Nimble Acuity
                           </h3>
                           <p className="text-gray-700 mb-6">
                               Nimble Acuity is a leading proposal management and bid writing services provider offering a wide array of mechanical engineering services. We have the bid management expertise and industry knowledge required to help engineering firms create winning proposals and tenders.
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

   export default ProposalAndBidManagement;