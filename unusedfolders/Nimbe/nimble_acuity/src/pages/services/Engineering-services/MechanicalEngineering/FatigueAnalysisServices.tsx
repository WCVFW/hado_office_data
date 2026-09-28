import React from 'react';
   import { Link } from "react-router-dom";
   import ESmainmenu from "@/pages/services/Engineering-services/ESmainmenu";

   const FatigueAnalysisServices: React.FC = () => {
       return (
           <>
               <ESmainmenu />

               <section className="py-24 bg-white">
                   <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                       {/* Hero Section */}
                       <div className="max-w-4xl mb-12 pt-6">
                           <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
                               Fatigue Analysis Services
                           </h2>
                           <p className="text-lg text-gray-600">
                               Stay ahead of your competition and develop quality products with increased useful lifecycles.
                           </p>
                       </div>

                       {/* Introduction */}
                       <div className="max-w-5xl mb-16 space-y-4">
                           <p className="text-gray-700 leading-relaxed">
                               Are you struggling to find high-quality providers of fatigue analysis services? Are you looking to calculate the fatigue in your equipment and perform lifecycle predictions using stress, strain, and fracture mechanics methodologies directly from 3D CAD models? Nimble Acuity is a leading fatigue analysis service provider and can help you with any of your fatigue analysis requirements.
                           </p>
                           <p className="text-gray-700 leading-relaxed">
                               We have worked with clients from all over the world to accurately estimate input load sequences that best represent the end-usage for a very wide range of equipment. We have experience and expertise in predicting and modeling fatigue from measured loads, model-predicted loads, Rainflow Histograms, observed strain data, and other sources.
                           </p>
                       </div>

                       {/* Our Services */}
                       <div className="max-w-6xl mb-16">
                           <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                               Fatigue Analysis Services We Offer
                           </h3>
                           <p className="text-gray-700 leading-relaxed mb-6">
                               Nimble Acuity is a leading provider of fatigue analysis services with 26+ years of experience in handling a full range of projects for many different clients. We always work closely with our clients to understand their requirements in detail so that we can come up with customized solutions. Our services include:
                           </p>
                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
                               <div className="space-y-2">
                                   <h4 className="text-xl font-bold text-[#006A7C]">Predicting Failure</h4>
                                   <p className="leading-relaxed">
                                       We perform various tests to observe and predict whether a piece of equipment or its constituent parts will fail prematurely before the expected load cycle.
                                   </p>
                               </div>
                               <div className="space-y-2">
                                   <h4 className="text-xl font-bold text-[#006A7C]">Analysis of the Cause of Fatigue</h4>
                                   <p className="leading-relaxed">
                                       Our team of engineers will analyze the various causes of fatigue, including fractures, stress, and strain, to suggest the most appropriate method for performing the analysis.
                                   </p>
                               </div>
                               <div className="space-y-2">
                                   <h4 className="text-xl font-bold text-[#006A7C]">Finite Element Analysis (FEA) Testing</h4>
                                   <p className="leading-relaxed">
                                       We have experience and expertise in running nonlinear FEA models to enable us to directly calculate the plastic and elastic strain on the component under various load conditions. We then use advanced algorithms to predict how cracks will initiate.
                                   </p>
                               </div>
                               <div className="space-y-2">
                                   <h4 className="text-xl font-bold text-[#006A7C]">Testing of Physical Fatigue</h4>
                                   <p className="leading-relaxed">
                                       We record any evidence pointing to structural changes caused by any fluctuating stress or strain.
                                   </p>
                               </div>
                           </div>
                       </div>

                       {/* Why Choose Us */}
                       <div className="max-w-6xl mb-16">
                           <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
                               Why Outsource Fatigue Analysis Services to Nimble Acuity?
                           </h3>
                           <p className="text-gray-700 leading-relaxed mb-6">
                               We are a leading fatigue analysis service provider with extensive experience. Outsourcing to us makes sense for a whole host of reasons, including:
                           </p>
                           <ul className="list-disc list-inside space-y-2 text-gray-700">
                               <li><strong>Affordable Pricing Options:</strong> Our services are extremely affordable and reasonably priced. Furthermore, we also provide bulk discounts.</li>
                               <li><strong>High-quality Services:</strong> We are an ISO-certified organization and are committed to delivering the highest quality services and providing exceptional value.</li>
                               <li><strong>Superb Infrastructure:</strong> We have the required infrastructure, including world-class office spaces equipped with the latest computers, to enable us to provide exceptional services.</li>
                               <li><strong>Tools and Technologies:</strong> Our team uses the latest and best fatigue analysis software and algorithms to provide cutting-edge services.</li>
                               <li><strong>Structured Process:</strong> We make use of streamlined and systematic processes for the delivery of all our services.</li>
                               <li><strong>Experienced Team:</strong> Our engineering team has 26+ years of experience in providing a wide range of fatigue analysis services.</li>
                               <li><strong>Data Security:</strong> Your data will be stored securely and only be accessible by authorized personnel.</li>
                               <li><strong>Short Turnaround:</strong> Our experts will always provide their services well within the stipulated deadline.</li>
                           </ul>
                       </div>

                       {/* CTA */}
                       <div className="max-w-4xl mt-16">
                           <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
                               Outsource Fatigue Analysis Services to Nimble Acuity
                           </h3>
                           <p className="text-gray-700 mb-6">
                               Nimble Acuity is a pioneer in providing high-quality fatigue analysis services to clients from across the world. We have a team of highly experienced engineers that can address any of your fatigue analysis needs with ease. We use the latest and best tools and techniques to always provide highly accurate services.
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

   export default FatigueAnalysisServices;