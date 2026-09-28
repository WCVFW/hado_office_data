import React from "react";
import HealthcareHeader from "@/pages/services/HealthcareBPO/HealthcareHeader";
import { Link } from "react-router-dom";

const HealthcareCollectionServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Healthcare Collection Services
            </h2>
            <p className="text-lg text-gray-600">
              Hire a qualified healthcare collection agent to work side-by-side
              with patients and encourage timely payment of dues — starting at just
              <strong> $1280 per FTE/month</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Are payment dues piling up? Are you seeking ways to boost collections
              and improve your practice’s cash flow? <strong>Nimble Acuity</strong>
              offers specialized healthcare debt collection services to recover
              payments efficiently and compliantly.
            </p>
            <p>
              What sets us apart is our use of advanced analytics and Business
              Intelligence tools — not outdated legacy systems. Our expert team
              crafts tailored strategies, ensuring timely collections while
              maintaining patient trust and regulatory compliance.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Healthcare Collection Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Credit Balance Service:</strong> Validate and reconcile credit balances within 60 days to ensure compliance and accuracy.</li>
              <li><strong>Third-party Liability Service:</strong> Coordinate with insurers and third parties to ensure legally owed payments are fulfilled before Medicaid.</li>
              <li><strong>Self-pay Program:</strong> Assist patients lacking insurance by calculating eligibility for discounted care.</li>
              <li><strong>Bad Debt Primary Program:</strong> Recover dues within 120 days–10 months by working with patients and offering payment plans.</li>
              <li><strong>Bad Debt Secondary Program:</strong> Recover debts post-financial stabilization through patient tracing and empathetic collection approaches.</li>
              <li><strong>Specialized Medical Collections:</strong> Emergency services, mental health, addiction clinics, hospitals, private practices, family planning, retail clinics, and more.</li>
            </ul>
          </div>

          {/* Process Flow */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Healthcare Collection Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Strategy Development:</strong> Collaborate to design effective collection plans tailored to your practice.</li>
              <li><strong>Negotiation:</strong> Reach unresponsive patients and negotiate payments.</li>
              <li><strong>Collection & Reconciliation:</strong> Collect payments, reconcile accounts, and update revenue streams.</li>
              <li><strong>Reporting:</strong> Deliver transparent reports and optimize processes continuously.</li>
            </ol>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>Physician Billing Services</li>
              <li>Medical Data Entry Services</li>
              <li>DME Billing Services</li>
              <li>Patient Demographic Entry</li>
            </ul>
          </div>

          {/* Why Choose */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Medical Collection Services?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing:</strong> Flexible, cost-effective plans tailored to your budget.</li>
              <li><strong>HIPAA Compliance:</strong> Strict data security with signed HIPAA agreements.</li>
              <li><strong>Certified & Secure:</strong> ISO/IEC 27001:2022 certified with world-class infrastructure.</li>
              <li><strong>High Quality:</strong> ISO-certified processes ensuring accuracy and compliance.</li>
              <li><strong>Fast Turnaround:</strong> Multiple delivery centers worldwide for quick results.</li>
              <li><strong>24/7 Support:</strong> Round-the-clock assistance for uninterrupted operations.</li>
              <li><strong>Dedicated Manager:</strong> Single point of contact for smooth communication.</li>
              <li><strong>Scalable Services:</strong> Easily scale resources as per business needs.</li>
              <li><strong>Qualified Staff:</strong> Skilled professionals with years of RCM and collections expertise.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>ICD-10 Implementation for a Florida Billing Firm:</strong> Provided training support and migration from ICD-9 to ICD-10. {" "}
                <Link to="/case-studies" className="text-[#006A7C] hover:underline">Read more »</Link>
              </li>
              <li>
                <strong>Accounts Receivable Services:</strong> Helped a healthcare company improve AR and cash flow. {" "}
                <Link to="/case-studies" className="text-[#006A7C] hover:underline">Read more »</Link>
              </li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-4xl mb-16">
            <blockquote className="text-gray-700 italic mb-4">
              "Hello, I wanted to reach out and express my gratitude for the hard
              work the Data and AR teams have done with EJ practice. Their
              dedication has paid off, and we now consider Nimble Acuity a part of
              our long-term strategy."
            </blockquote>
            <p className="font-semibold text-gray-600">
              – RCM Account Manager, EMR System Provider, FL, USA
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Healthcare Collection Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Managing healthcare collections requires dedicated infrastructure and
              skilled professionals. With 26+ years of expertise, Nimble Acuity
              ensures improved compliance, faster payments, and better cash flow.
              Trust us to handle your collection needs while you focus on patient
              care.
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

export default HealthcareCollectionServices;
