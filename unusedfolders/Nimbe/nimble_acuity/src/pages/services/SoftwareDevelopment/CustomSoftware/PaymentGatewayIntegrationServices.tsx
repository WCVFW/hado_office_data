import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const PaymentGatewayIntegrationServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Payment Gateway Integration Services
            </h2>
            <p className="text-lg text-gray-600">
              Unlock the huge potential of your website and apps by integrating payment gateways.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Soaring internet usability along with awareness about online transactions has revolutionized the purchase patterns among consumers. Consumers now prefer transacting through online modes that have rapidly accelerated the pace of online transactions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We offer high-quality and personalized payment integration services to our clients. Our certified developers are well-versed in integrating various payment gateways with all the major payment modules and their APIs. Payment integration services offered by Nimble Acuity ensure real-time data access with instant transactions. Avail a seamless checkout experience with our easy and simple integration services. We provide easy online onboarding along with on-time account settlements.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Payment Gateway Integration Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Multi-currency Payments</h4>
                <p className="text-gray-700">We accept domestic/international payments in more than 45 currencies. We also provide easy monetary conversions during checkout.</p>
              </div>
              {/* Service Card 2 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Powerful Dashboard</h4>
                <p className="text-gray-700">Get full access to manage your payments, transfers, refunds, subscriptions, virtual accounts, invoices, and API keys. We support all the existing payment methods.</p>
              </div>
              {/* Service Card 3 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Domestic and International Cards</h4>
                <p className="text-gray-700">Accept payments from all major domestic and international credit and debit card networks. We support Visa, Mastercard, Diners, American Express, RuPay, and Maestro.</p>
              </div>
              {/* Service Card 4 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">EMI Options</h4>
                <p className="text-gray-700">We support credit/debit card EMI payments, and card-less EMI options including Flexi Pay, Insta Card, and Pay Later. We also offer No Cost EMI schemes from all the leading banks.</p>
              </div>
              {/* Service Card 5 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Net banking</h4>
                <p className="text-gray-700">We support and accept net banking payments from all the leading international and local banks.</p>
              </div>
              {/* Service Card 6 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Wallets</h4>
                <p className="text-gray-700">Allow your customers to pay via popular online wallets like Paytm, Google Pay, Amazon Pay, PayZapp, Phone Pe, MobiKwik, and many more.</p>
              </div>
              {/* Service Card 7 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Duplication Check</h4>
                <p className="text-gray-700">Duplicate payments can be a hassle for businesses of any size. Our automated de-duplication service keeps a constant check on all the transactions.</p>
              </div>
              {/* Service Card 8 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Instant Pay-out Options</h4>
                <p className="text-gray-700">We offer a single-point connection to accept all credit card bill payments. We not only offer bulk pay-out options but also scheduled pay-out options.</p>
              </div>
              {/* Service Card 9 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Pay-out link/Link Pay Option</h4>
                <p className="text-gray-700">We at Nimble Acuity, also offer a pay-out link to your customers via the registered number or email address to complete the payment.</p>
              </div>
              {/* Service Card 10 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Bank Account and Card Validation</h4>
                <p className="text-gray-700">Outsourcing payment integration services to us ensures automated and efficient payment processing with zero errors/rejections.</p>
              </div>
              {/* Service Card 11 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Multilingual Checkout Page</h4>
                <p className="text-gray-700">We provide a multilingual checkout page offered in 24+ major international languages.</p>
              </div>
              {/* Service Card 12 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Smart Dynamic Routing</h4>
                <p className="text-gray-700">Outsourcing payment integration services to us allows the access of multiple banks gateways. Our intelligent algorithms effectively identify server downtimes/overload.</p>
              </div>
              {/* Service Card 13 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Convenient Checkout Experience</h4>
                <p className="text-gray-700">We allow your customers to conveniently store their credit/debit card credentials and shipping details in a PCI-compliant environment. The said details are saved in an encrypted form for future use.</p>
              </div>
              {/* Service Card 14 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Shopping Cart Plugins</h4>
                <p className="text-gray-700">We support well-documented plugins for all major e-commerce platforms. We have developed fully integrated APIs with Buildabazaar, Drupal, Cubecart, Interspire, Magento, Moodle, and more.</p>
              </div>
              {/* Service Card 15 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Smart Analytics</h4>
                <p className="text-gray-700">Our insightful data analytics can help you analyze your performance to maximize your business potential. Our reports include hourly transactions, success ratios, and payment gateway updates.</p>
              </div>
              {/* Service Card 16 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Live Monitoring</h4>
                <p className="text-gray-700">We provide a transparent and real-time monitoring tool that constantly monitors the health of bank servers.</p>
              </div>
              {/* Service Card 17 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Fraud and Risk Identification</h4>
                <p className="text-gray-700">We provide you with velocity checks and blacklist controls to set specific criteria to limit risk exposure. You can restrict fraudsters from transacting on your site.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>ISO Certified Company:</strong> Nimble Acuity is an ISO 9001:2015 certified payment integration company.</li>
              <li><strong>High Data Privacy:</strong> We ensure that the security of your data is kept safe and secure in a PCI-ISO-compliant environment.</li>
              <li><strong>Team of Highly Qualified Developers:</strong> Our certified integration experts possess exceptional technical knowledge.</li>
              <li><strong>Robust Security:</strong> Your transactions are completely safe and secure with us. We are a PCI DSS and ISO-compliant organization.</li>
              <li><strong>Ease of Scalability:</strong> Our payment integration services are easily scalable upon demand.</li>
              <li><strong>Faster Turnarounds:</strong> We have a wide bandwidth to handle multiple projects simultaneously and never compromise on the speed of our deliverables.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Integrate a Secure Payment Gateway?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a top-class payment gateway integration service providing company. We have extensive experience in delivering a range of payment gateway integration services. This ensures your customers get easy real-time access and hassle-free transactions with higher conversion rates.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us now for a free consultation and quote.
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

export default PaymentGatewayIntegrationServices;