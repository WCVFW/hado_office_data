import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const DigitalInteractiveServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Digital Interactive Services
            </h2>
            <p className="text-lg text-gray-600">
              We'll extend your reach and capability to interact with customers across the markets with modern digital interactive solutions.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              The enthusiasm is ebbing from the gen 1 and gen 2 digital wave because they are becoming obsolete faster than earlier thought. To stay ahead of the revolution, outsource digital interactive services to Nimble Acuity. We'll handle everything new, from content delivery platforms to customer-centricity. We're talking about savvy personalization and omnichannel engagement to boost conversion speed and efficiency.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity is a top digital interactive service provider with decades of experience in a broad range of digital and interactive marketing solutions. We have tackled challenges from a lack of traffic to unfriendly interfaces and everything in between. Our vision is to dig deeper into nascent markets, identify what users like, and reflect that on your front-end to drive engagement.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Digital Interactive Services We Offer
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">User Experience (UX) Design</h4>
                <p className="text-gray-700">As a top digital interactive services company, we build one-of-a-kind user experiences for business front ends. We incorporate design elements that subconsciously converse with visitors. From navigation to utilities, we ensure the experience stands out and fulfills your expectations.</p>
              </div>
              {/* Service Card 2 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Content Management (CMS)</h4>
                <p className="text-gray-700">Creating and managing content can be time-consuming, especially with legacy methods. We have professionals adept at various CMS platforms. If you don't already have one, we will objectively choose and build your content system from it, ensuring it's ready to scale on demand.</p>
              </div>
              {/* Service Card 3 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Digital Commerce</h4>
                <p className="text-gray-700">If you're not engaging enough customers, you might be depending on old CRM features. We will provide a total digital transformation to make last-mile engagements more meaningful and valuable to customers. Our approach assures the best outcome at a fraction of the cost.</p>
              </div>
              {/* Service Card 4 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Digital Marketing</h4>
                <p className="text-gray-700">Happy customers are not the outcome of sales talk. We'll replace bad strategies with our signature digital marketing services, which are modern and use metric data to target customers who are a great fit for your marketing persona. We'll do most of the heavy lifting and send a stream of qualified leads your way.</p>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Digital Interactive Process
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Need Analysis:</strong> We gather knowledge about the client's needs via collaboration and plan design goals accordingly.</li>
              <li><strong>Requirement Compilation:</strong> We will compile a requirements document summarizing the list of implementations and modifications for the client's consent.</li>
              <li><strong>Team Selection:</strong> A team of developers proficient in digital interactive services is selected from our talent pool.</li>
              <li><strong>Development:</strong> The digital interactive development will commence as per the plan and will be finished within the deadline.</li>
              <li><strong>Testing:</strong> The implementation will go into the testing phase where each module undergoes extensive testing using automated suites.</li>
              <li><strong>Deployment:</strong> After successful testing, deployment assistance would be provided to the client.</li>
            </ul>
          </div>
          
          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Customized Services at a Budget:</strong> Our digital interactive services are extensively customized to keep your costs low.</li>
              <li><strong>High-quality:</strong> Our solutions are ISO 9001:2015 certified for quality, focusing on providing an exclusive and client-centric experience.</li>
              <li><strong>Experienced Professionals:</strong> We have well-specialized professionals adept at the digital interactive framework with the tool knowledge to optimize time and resource management.</li>
              <li><strong>Data Security:</strong> We provide top-tier security that is compliant with ISO/IEC 27001:2022 standards, so you can trust our efforts.</li>
              <li><strong>Maintainable and Scalable:</strong> We make sure our digital interactive services are ready to scale to support unplanned volume needs.</li>
              <li><strong>Agile Development:</strong> We are always quick to adopt the latest changes and use agile development techniques to complete the project within a tight deadline.</li>
              <li><strong>Friendly Support:</strong> We provide extensive agent support to clients through their preferred channel, from the Pacific to the Far East.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-gray-700 mb-6">
              At Nimble Acuity, we don't just sell; we prescribe solutions to customers by understanding their pain points. We capture their needs and provide solutions at a blazing speed. Our tactical and analytical approach, coupled with our ability to create intuitive app features, elevates us to a level that is predominantly searched by countless organizations worldwide.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              To know more about our offerings and how we turn your ideas into successful solutions, contact us now!
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

export default DigitalInteractiveServices;