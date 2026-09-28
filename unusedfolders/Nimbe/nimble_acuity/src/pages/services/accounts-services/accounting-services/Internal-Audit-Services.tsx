import React from "react";
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const InternalAuditServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-bold text-[#006A7C] mb-6">
            Internal Audit Services
          </h1>
          <p className="text-gray-700 mb-6">
            Undertake internal risk assessments and set up an internal audit function by choosing
            our superior quality audit services.
          </p>
          <p className="text-gray-700 mb-6">
            Are you looking to examine and assess your internal risks and set up an internal audit
            function for your business? Are you on the lookout for skilled resources who can take
            care of all your internal audit requirements? Then, the best option for you would be to
            outsource <strong>internal audit services</strong> to an experienced internal audit
            service provider.
          </p>
          <p className="text-gray-700 mb-8">
            Nimble Acuity is an internal audit service company that can cater to all your
            requirements with ease. We have some of the most experienced and skilled internal
            auditors who can address all your needs. We leverage the latest tools and technologies
            while delivering top-notch services to clients.
          </p>

          {/* Services Offered */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Internal Audit Services We Offer
            </h2>
            <p className="text-gray-700 mb-4">
              We understand each client’s unique business requirements and provide them with
              customized internal auditing services. Some of our key offerings include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Internal Audit Function Setup:</strong> Expert setup using advanced tools
                and best practices to establish a reliable audit function.
              </li>
              <li>
                <strong>Strategic Performance Reviews:</strong> Comprehensive review of business
                performance leveraging the latest auditing software for accurate insights.
              </li>
              <li>
                <strong>Efficiency Improvement Reviews:</strong> Skilled auditors deliver
                error-free efficiency reviews to enhance business processes.
              </li>
              <li>
                <strong>Policy Manual Creation:</strong> Development of customized policy and
                procedure manuals aligned with your organization’s requirements.
              </li>
            </ul>
          </div>

          {/* Other Services */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You May Benefit From
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Real Estate Accounting</li>
              <li>Virtual Accountant Services</li>
              <li>Forensic Audit Services</li>
              <li>Invoice Processing Services</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div>
            <h2 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Internal Auditing Services?
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Affordable Pricing Options:</strong> Flexible and cost-effective solutions
                tailored to your budget and requirements.
              </li>

              <li>
                <strong>Superior Quality Services:</strong> ISO-certified delivery of accurate,
                error-free, and high-quality internal audit services.
              </li>
              <li>
                <strong>Talented Auditors:</strong> A team of highly skilled and experienced
                auditors catering to diverse business needs.
              </li>
              <li>
                <strong>State-of-the-Art Infrastructure:</strong> Access to the latest auditing
                tools, software, and international-standard facilities.
              </li>
              <li>
                <strong>Easily Scalable Services:</strong> Ability to scale service requirements
                and team size as per project demands.
              </li>
              <li>
                <strong>Short Turnaround Time:</strong> Global delivery centers ensure timely
                service completion across time zones.
              </li>
              <li>
                <strong>Dedicated Manager:</strong> A single point of contact to oversee your
                project and ensure seamless communication.
              </li>
              <li>
                <strong>Round-the-Clock Support:</strong> 24/7 availability of project management,
                support, and customer service teams.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InternalAuditServices;
