import React from "react";
import CCmainmenu from "../CCmainmenu";

const OrderTakingServices: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Acuity - Order Taking Services
        </h1>
        <p className="max-w-4xl mx-auto text-lg leading-relaxed">
          Our order taking and inventory management services go beyond 99% order
          accuracy and reduced AHTs. We use predictive analytics to forecast
          customer behavior and future sales trends.
        </p>
      </section>

      {/* About Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <p className="text-lg leading-relaxed">
          As consumer preferences continue to shift towards digital purchases,
          Nimble Acuity helps businesses adopt standardized workflows that
          eliminate Non-Value-Added (NVA) processes and deliver consistent
          Customer Value Add (CVA) across channels. This makes our order taking
          call center services more efficient, smooth, and personalized.
        </p>
        <p className="text-lg leading-relaxed">
          Our service infrastructure is designed to meet this demand by creating
          a bridge between businesses and their customers. We provide our
          clients with the flexibility and convenience of multi-channel
          services, which accept orders via phone, email, online chat, and
          in-person. A key feature of our services is the seamless integration
          with existing systems, be it an e-commerce platform or a CRM system.
          This guarantees immediate order processing and fulfillment.
        </p>
        <p className="text-lg leading-relaxed">
          Our aim is to improve customer experience, increase revenue, and
          provide your business with a competitive edge. By outsourcing your
          order taking requirements to Nimble Acuity, you can focus on the core
          aspects of your business and leave the complexities of order
          management to us.
        </p>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">
          Client Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Leading IT Services Organization
            </h3>
            <p>
              Streamlined Order Fulfillment with our custom BPO platform,
              significantly improving efficiency and client satisfaction.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Global Network Security Leader
            </h3>
            <p>
              Partnered with Nimble Acuity to streamline support services and
              reduce costs within six months through a 24x7 operations center.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-gradient-to-r from-indigo-50 to-blue-50">
        <h2 className="text-3xl font-bold text-center mb-8">Clients Speak</h2>
        <blockquote className="max-w-4xl mx-auto text-lg italic bg-white shadow rounded-xl p-8 border-l-4 border-indigo-600">
          “We would like to appreciate your good work and the endless hours of
          service that you have dedicated to our company. We are pleased to have
          Nimble Acuity for customer support. Thank you for giving this company
          your best.”
          <footer className="mt-4 text-sm text-gray-600">
            Executive Team, A Leading Medical Coaching Institute in India
          </footer>
        </blockquote>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Improve Business Performance with Our Dynamic Order Taking Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Inbound Order Taking Services",
              points: [
                "Customer order responses",
                "Bulk order processing",
                "Upselling techniques",
                "Cross-selling strategies",
              ],
            },
            {
              title: "Phone Order Taking Services",
              points: [
                "Telephonic order taking",
                "Real-time order entry",
                "Seamless customer experiences",
                "Manage high-volume calls",
              ],
            },
            {
              title: "eCommerce Order Taking Services",
              points: [
                "E-commerce transactions",
                "Efficient payment processing",
                "Shipping method selection",
                "Order confirmation & tracking",
              ],
            },
            {
              title: "Order Management Services",
              points: [
                "Comprehensive handling",
                "Inventory management",
                "Timely tracking",
                "Coordination with logistics",
              ],
            },
            {
              title: "Chat-based Order Taking Services",
              points: [
                "Order receipt via chat",
                "Quick response times",
                "Query resolution",
                "Product inquiries",
              ],
            },
            {
              title: "Email Order Taking Services",
              points: [
                "Email order receipt",
                "Order confirmation & invoicing",
                "Customer communication",
                "Maintenance of records",
              ],
            },
            {
              title: "24/7 Order Taking Services",
              points: [
                "Round-the-clock processing",
                "Global customer support",
                "International time zones",
                "Timely completion",
              ],
            },
            {
              title: "Order Entry Services",
              points: [
                "Precise entry",
                "Attention to detail",
                "Confirmation & follow-ups",
                "Department coordination",
              ],
            },
            {
              title: "Online Order Taking Services",
              points: [
                "Internet order management",
                "Fraud detection",
                "Detailed receipts",
                "Personalized recommendations",
              ],
            },
            {
              title: "Small Business Order Taking Services",
              points: [
                "Tailored solutions",
                "Phone, email, online orders",
                "Customer support",
                "Custom delivery options",
              ],
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">
          Optimized Process Flow for Enhancing the Order Taking Experience
        </h2>
        <div className="space-y-8 max-w-5xl mx-auto">
          {[
            "Customer Engagement and Support",
            "Product/Service Selection Assistance",
            "Gathering Essential Customer Information",
            "Accurate Order Entry and Confirmation",
            "Secure and Convenient Payment Processing",
            "Order Verification and Timely Fulfillment",
          ].map((step, idx) => (
            <div
              key={idx}
              className="p-6 bg-white shadow rounded-xl border-l-4 border-indigo-600"
            >
              <h3 className="font-semibold text-xl mb-2">
                {idx + 1}. {step}
              </h3>
              <p className="text-gray-700">
                Detailed explanation of {step} and how Nimble Acuity ensures
                excellence.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          The Benefits of Choosing Nimble Acuity
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Business Efficiency",
            "Enhanced Customer Satisfaction",
            "Superior Data Management",
            "Scalable Operations",
            "Cost-Effective Solutions",
            "Enhanced Data Security",
            "Improved Order Fulfillment",
            "Multilingual Support",
          ].map((benefit, idx) => (
            <div
              key={idx}
              className="p-6 bg-white shadow rounded-xl hover:shadow-md"
            >
              <h3 className="text-xl font-semibold mb-3">{benefit}</h3>
              <p className="text-gray-700 text-sm">
                Explanation of how {benefit} helps clients.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-indigo-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Outsource Order Taking Services to Nimble Acuity
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          Accelerate your order-to-fulfillment cycle and transform every call
          into an opportunity to upsell or cross-sell with our DMAIC aligned
          practices that focus on process efficiency and customer satisfaction.
        </p>
        <button className="px-6 py-3 bg-white text-indigo-700 rounded-lg font-semibold hover:bg-gray-100">
          Connect with Our Experts
        </button>
      </section>
    </div>
  );
};

export default OrderTakingServices;
