import React from "react";
import DSmainmenu from "../DSmainmenu";

const ProductDataEntry: React.FC = () => {
  const reasons = [
    {
      title: "Cost Saving",
      desc: "In India, skilled resources are available at much lower costs compared to other countries or even an in-house team of product data entry experts.",
    },
    {
      title: "Experienced Workforce",
      desc: "India has a large pool of talented and highly skilled professionals who can provide quick and accurate product data entry services.",
    },
    {
      title: "Familiarity with the E-commerce Model",
      desc: "Indian IT experts are well-versed with popular shopping carts like Magento, X-Cart, Zen Cart, Open Cart, and global giants like Amazon and eBay.",
    },
    {
      title: "High Accuracy in Data Entry",
      desc: "Experienced specialists ensure 100% accuracy in data entry, maintaining high-quality and error-free product information.",
    },
    {
      title: "Top-quality Project Support",
      desc: "Outsourcing ensures uninterrupted project support during and after the product data entry process, handling any inventory or customer support issues.",
    },
    {
      title: "Increased Focus on Core Activities",
      desc: "By letting a third-party handle data entry, businesses can focus more on core activities, improving productivity and revenue.",
    },
    {
      title: "More Flexibility",
      desc: "Outsourcing allows companies to scale resources up or down based on project requirements without hassle.",
    },
    {
      title: "Improved Data Security",
      desc: "Critical product data is kept secure, with legal safeguards like NDAs and strict compliance maintained by the service provider.",
    },
    {
      title: "Enhanced Productivity",
      desc: "Managing multiple sales channels becomes more efficient, ensuring better customer satisfaction and smooth operations.",
    },
    {
      title: "Better Data Management",
      desc: "Highly experienced resources handle products efficiently across categories and sub-categories, ensuring organized and effective data management.",
    },
  ];

  const stats = [
    { value: "40%", label: "Cost Reduction" },
    { value: "8-24 Hrs", label: "Faster Turnaround" },
    { value: "500+", label: "Satisfied Clients" },
    { value: "350+", label: "Skilled Data Management Experts" },
    { value: "99%", label: "Accuracy" },
    { value: "21", label: "Years Experience" },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 sm:p-10 space-y-12">
      {/* Header */}
      <DSmainmenu/>
      <header className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-500">
          10 Reasons to Outsource Product Data Entry to India
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto">
          E-commerce businesses face challenges keeping product information updated. Outsourcing product data entry to India ensures accuracy, efficiency, and cost-effectiveness.
        </p>
      </header>

      {/* Reasons Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Key Advantages of Outsourcing Product Data Entry
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold text-green-600 mb-2">{reason.title}</h3>
              <p className="text-gray-700">{reason.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 grid sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-bold text-green-600 mb-1">{stat.value}</h3>
            <p className="text-gray-700">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="bg-green-50 p-8 sm:p-12 rounded-xl text-center space-y-4">
        <h2 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-500">
          Partner with Nimble Auity
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Nimble Auity provides quick, accurate, and reliable product data entry services for global e-commerce clients. Our skilled specialists ensure data remains accurate, secure, and up-to-date.
        </p>
        <button className="bg-green-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-green-700 transition transform hover:-translate-y-1">
          Get in Touch Today
        </button>
      </section>
    </div>
  );
};

export default ProductDataEntry;
