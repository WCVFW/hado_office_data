import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const SoftwareTestingServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Software Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Save Time, Cut Costs, and Simplify Your Path to Market!
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Achieve Superior Application Quality with Comprehensive Software Testing Services
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Building a robust, seamless, and secure software application goes beyond mere development – it requires in-depth, comprehensive testing. Tackling the intricate testing phases, including unit testing, integration testing, system testing, and user-acceptance testing, often presents businesses with a formidable voyage. These hurdles not only put a strain on managerial capabilities and financial resources but also profoundly influence the overall operational efficiency and productivity of enterprises.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This is where **Nimble Acuity** provides tailor-made solutions to businesses specific to their software testing needs. Our firm belief in transparency is reflected in our methodologies. During each stage of software testing, from initial understanding of your business requirement through test planning, execution, and bug tracking to retesting, we ensure that you are kept at the forefront. We provide regular comprehensive reports featuring detailed insights on the progress of each phase.
            </p>
            <p className="text-gray-700 leading-relaxed">
              In synchronizing with our software testing services, your business can expect more than reliable functionality. Witness a marked increase in productivity, owing to the superior quality application significantly reducing maintenance and troubleshooting time. Additionally, our services are competitively priced, resulting in significant cost savings in both time and resources. As part of our commitment to your success, we recognize the potential complications in software testing and tackle them head-on. Our team is proficient in deploying adaptable problem-solving strategies aligned to unique challenges, simplifying the testing process. By providing customized solutions, we effectively address your explicit software testing hurdles.
            </p>
          </div>

          {/* Call to Action Intro */}
          <div className="max-w-4xl mt-8 mb-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with **Nimble Acuity** to achieve a surge in productivity, significant cost reduction, and faster time-to-market!
            </h3>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Software Testing Solutions We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Our approach combines best-in-class technologies and tools with a deep understanding of industry best practices. Backed by an expert team with a robust track record in the field, we provide solutions tailored to meet your specific requirements and business objectives.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Load Testing */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Load Testing Services</h4>
                <p className="text-gray-700 leading-relaxed">
                  Avoid unplanned outages and poor user experiences by taking the assistance of our seasoned experts, who utilize advanced tools and methodologies to simulate thousands of users. We carefully plan and execute the process, starting with gathering requirements, designing the test, test execution, and finally, analyzing and interpreting the results.
                </p>
              </div>
              
              {/* Stress Testing */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Stress Testing Services</h4>
                <p className="text-gray-700 leading-relaxed">
                  When you entrust stress test your system to our seasoned professionals, we adopt a structured approach. Our team evaluates the system under worst-case scenarios and identifies system responses under varying stress levels, which allows us to recommend custom optimizations. The benefit: increased reliability, enhanced user engagement, and mitigated the risk of system failure.
                </p>
              </div>

              {/* Penetration Testing */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Penetration Testing Services</h4>
                <p className="text-gray-700 leading-relaxed">
                  Our penetration testing services avoid such pitfalls. We adopt a rigorous approach to simulate real-world cyber-attacks, systematically identifying, analyzing, and prioritizing your system's vulnerabilities. Outsourcing this specialty to our proficient team can significantly enhance your system security and protect your business from devastating cyber threats.
                </p>
              </div>
              
              {/* Mobile Testing */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Mobile Testing Services</h4>
                <p className="text-gray-700 leading-relaxed">
                  Leveraging our mobile testing services ensures your mobile app delivers superb usability across multiple user scenarios and avoids performance bottlenecks. Our systematic approach includes requirement analysis, test case design, environment setup, execution, and final report generation. Make your app adaptive and responsive in a diverse mobile ecosystem with our skilled mobile testing team.
                </p>
              </div>
              
              {/* Cloud Testing */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Cloud Testing Services</h4>
                <p className="text-gray-700 leading-relaxed">
                  Outsourcing your cloud testing needs to our team guarantees reliable and optimized software operations on multiple platforms. We conduct rigorous performance, security, and integration testing, employing a step-by-step approach to hand you an outstanding cloud solution.
                </p>
              </div>
              
              {/* Functional Testing */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Functional Testing Services</h4>
                <p className="text-gray-700 leading-relaxed">
                  Partner with us to wield an advantage with our comprehensive methodology. This includes specifying the function the software is expected to perform, creating input data based on the function's specifications, determining the output based on the function's specifications, and executing the test case. With our expert team, rest assured with software that meets business needs and enhances end-user satisfaction.
                </p>
              </div>

              {/* Add other services here, following the same pattern */}
              {/* e.g., Managed Testing, API Testing, DevOps Testing, Game Testing */}
            </div>
          </div>
          
          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When it comes to software testing service providers, we stand out as your best option. Our unique advantages make us the ideal choice for your testing needs.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Experienced Testers:</strong> Our team comprises highly talented and certified testing experts who excel in meeting your specific needs.</li>
              <li><strong>Superior Quality Services:</strong> We are an ISO-certified organization, ensuring that all our outsourced software testing services are of superior quality.</li>
              <li><strong>Data Security:</strong> As an ISO/IEC 27001:2013 ISMS-certified software testing company, we go the extra mile to ensure your data is always kept in secure, well-protected environments.</li>
              <li><strong>Quick Turnaround Time:</strong> Our global presence, with delivery centers spanning multiple time zones, enables us to provide clients with high-quality services within an impressive turnaround time.</li>
              <li><strong>Affordable Pricing Options:</strong> We offer flexible pricing options tailored to your unique needs, providing cost-effective solutions that align perfectly with your budget.</li>
            </ul>
          </div>

          {/* Process Section */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Process We Follow for Our Software Testing Services
            </h3>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row items-start md:space-x-8">
                <span className="text-4xl font-bold text-[#006A7C] mb-2 md:mb-0">01.</span>
                <div>
                  <h4 className="text-xl font-semibold text-[#006A7C] mb-1">Defining Test Scope</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Our software testing journey begins by clearly defining the scope and structure of the tests. We meticulously outline what will be tested and how it will be evaluated.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start md:space-x-8">
                <span className="text-4xl font-bold text-[#006A7C] mb-2 md:mb-0">02.</span>
                <div>
                  <h4 className="text-xl font-semibold text-[#006A7C] mb-1">Test Planning</h4>
                  <p className="text-gray-700 leading-relaxed">
                    We then chart a test plan as the roadmap for our testing endeavors. This plan is rooted in your software's objectives and defines our testing strategies.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start md:space-x-8">
                <span className="text-4xl font-bold text-[#006A7C] mb-2 md:mb-0">03.</span>
                <div>
                  <h4 className="text-xl font-semibold text-[#006A7C] mb-1">Test Model Design</h4>
                  <p className="text-gray-700 leading-relaxed">
                    To ensure thorough coverage, we design test models derived from use cases. These models simulate real-world scenarios, providing a structured approach to testing.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start md:space-x-8">
                <span className="text-4xl font-bold text-[#006A7C] mb-2 md:mb-0">04.</span>
                <div>
                  <h4 className="text-xl font-semibold text-[#006A7C] mb-1">Test Implementation</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Our expert team executes the tests per the predefined test cases. This phase is dedicated to uncovering and addressing any issues in your software.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start md:space-x-8">
                <span className="text-4xl font-bold text-[#006A7C] mb-2 md:mb-0">05.</span>
                <div>
                  <h4 className="text-xl font-semibold text-[#006A7C] mb-1">Test Reporting</h4>
                  <p className="text-gray-700 leading-relaxed">
                    We compile comprehensive test reports that encapsulate our findings and results. These reports offer complete transparency into the testing process and highlight any detected discrepancies.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start md:space-x-8">
                <span className="text-4xl font-bold text-[#006A7C] mb-2 md:mb-0">06.</span>
                <div>
                  <h4 className="text-xl font-semibold text-[#006A7C] mb-1">Customer Feedback and Debugging</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Your feedback is invaluable. We engage in a collaborative process of post-testing, where your insights are welcomed.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 mb-6">
              Shape your software's future with us and advance toward a bug-free product that your users will appreciate! By considering a partnership with us, you're embarking on a symbiotic relationship to elevate your software product's quality, freeing your resources to focus on core business strategies.
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

export default SoftwareTestingServices;