import React from 'react';
   import { Link } from "react-router-dom";
   import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

   const CATIAServices: React.FC = () => {
       return (
           <>
               <ESmainmenu />

               <section className="py-24 bg-white">
                   <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                       {/* Hero Section */}
                       <div className="max-w-4xl mb-12 pt-6">
                           <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                               CATIA Services
                           </h2>
                           <p className="text-lg text-gray-600">
                               Develop world-class products by choosing our CATIA services by outsourcing your requirements to experts.
                           </p>
                       </div>

                       {/* Introduction */}
                       <div className="max-w-5xl mb-16 space-y-4">
                           <p className="text-gray-700 leading-relaxed">
                               Are you struggling to find ways to model a particular product that you have in mind in the context of its real-world behavior? Are you looking for a complete engineering toolset that functions seamlessly within a single working environment? If so, you can benefit significantly from our CATIA services. CATIA is a world-leading 3D Product Lifecycle Management software suite and Nimble Acuity has the experience and expertise to provide you with a comprehensive range of CATIA services.
                           </p>
                           <p className="text-gray-700 leading-relaxed">
                               Nimble Acuity, a leading CATIA service provider, supports multiple phases of product development, including conceptualizing, design, engineering, and manufacturing. We facilitate collaborative engineering using the CATIA software suite across diverse disciplines, right from mechanical engineering and system engineering to product design and development of electrical systems and fluid systems.
                           </p>
                       </div>

                       {/* Our Services */}
                       <div className="max-w-6xl mb-16">
                           <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                               CATIA Services We Offer
                           </h3>
                           <p className="text-gray-700 leading-relaxed mb-6">
                               Nimble Acuity is a leading provider of CATIA services with over 26 years of experience in handling a full range of product development projects. We work closely with you to determine your exact requirements to provide a comprehensive solution that best meets your needs. Our CATIA solutions include:
                           </p>
                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                               <div className="space-y-2">
                                   <h4 className="text-xl font-bold text-[#006A7C]">CATIA 3DEXPERIENCE Services</h4>
                                   <p className="leading-relaxed">
                                       We leverage the power of CATIA on the 3DEXPERIENCE platform to enable our clients to innovate, irrespective of their company's size. We deliver breakthrough productivity in terms of design solutions by collaborating across disciplines on this high-performing platform.
                                   </p>
                               </div>
                               <div className="space-y-2">
                                   <h4 className="text-xl font-bold text-[#006A7C]">CATIA V5-6 Services</h4>
                                   <p className="leading-relaxed">
                                       As a leading provider of CATIA services, we harness the power of CATIA V5-6 to address the needs of all manufacturing firms, right from OEMs and their supply chains to small independent manufacturers. We have applied CATIA V5-6 to a wide variety of industries.
                                   </p>
                               </div>
                               <div className="space-y-2">
                                   <h4 className="text-xl font-bold text-[#006A7C]">CATIA Composer Services</h4>
                                   <p className="leading-relaxed">
                                       We have experience and expertise in using CATIA Composer to repurpose existing 3D designs to more rapidly and accurately create top-quality project deliverables, including technical illustrations, interactive 3D experiences, and animations.
                                   </p>
                               </div>
                           </div>
                       </div>

                       {/* Why Choose Us */}
                       <div className="max-w-6xl mb-16">
                           <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                               Why Outsource CATIA Services to Nimble Acuity?
                           </h3>
                           <p className="text-gray-700 leading-relaxed mb-6">
                               We are a leading CATIA service company with extensive experience in harnessing the full power of the CATIA software suite. Outsourcing CATIA services to us also makes sense for a whole host of reasons, including:
                           </p>
                           <ul className="list-disc list-inside space-y-2 text-gray-700">
                               <li><strong>Affordable Pricing Options:</strong> Our CATIA services are extremely affordable and are designed to fit a wide variety of budgets and requirements.</li>
                               <li><strong>High-quality Services:</strong> We are ISO-certified and are committed to delivering the highest quality CATIA services.</li>
                               <li><strong>Superb Infrastructure:</strong> We operate out of world-class office spaces equipped with the latest computers and other technology infrastructure.</li>
                               <li><strong>Tools and Technologies:</strong> Our team uses the latest and best CATIA software and methodologies to provide cutting-edge services.</li>
                               <li><strong>Structured Process:</strong> Our streamlined and systematic processes allow us to consistently deliver superior CATIA services.</li>
                               <li><strong>Experienced Team:</strong> Our engineering team has over 26 years of experience in product design and development.</li>
                               <li><strong>Data Security:</strong> Your CATIA and other product data will always be stored and used securely.</li>
                               <li><strong>Short Turnaround:</strong> We will always provide our CATIA services well within the stipulated deadline.</li>
                           </ul>
                       </div>

                       {/* CTA */}
                       <div className="max-w-4xl mt-16">
                           <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                               Outsource CATIA Services to Nimble Acuity
                           </h3>
                           <p className="text-gray-700 mb-6">
                               Nimble Acuity is a leading provider of CATIA services to clients across the world. We have significant experience and expertise in using all the components and features of the CATIA software suite, which enables us to provide services along the entire value chain of a product's development, from conceptualization and design through to engineering and manufacturing.
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

   export default CATIAServices;