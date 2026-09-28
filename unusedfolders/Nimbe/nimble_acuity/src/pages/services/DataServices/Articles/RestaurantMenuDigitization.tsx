import React from "react";
import DSmainmenu from "../DSmainmenu";

const RestaurantMenuDigitization: React.FC = () => {
  const benefits = [
    {
      title: "Visual Formatting",
      desc: "Digital menus can include high resolution photos of the food served. Printing costs made this difficult earlier, but digital menus allow attractive visuals easily.",
    },
    {
      title: "Increased Order Accuracy",
      desc: "Customers can directly select items instead of explaining over the phone, reducing errors, replacement costs, and ensuring customer satisfaction.",
    },
    {
      title: "Easier to Update",
      desc: "Menus can be updated quickly to include new deals, combos, offers, or pricing tweaks—something that was costly and delayed in print menus.",
    },
    {
      title: "Provide Additional Information",
      desc: "Digital menus can hold nutritional info, gluten-free options, diabetic-friendly markers, and more—without the space limitations of paper menus.",
    },
    {
      title: "Upsell Menu Items Automatically",
      desc: "Smart digital menus can recommend paired dishes or upsell items automatically, improving sales and customer experience.",
    },
    {
      title: "Multiple Languages",
      desc: "Digital menus can easily be translated into multiple languages, allowing restaurants to cater to a wider audience.",
    },
  ];

  const stats = [
    { value: "40%", label: "Cost Reduction" },
    { value: "8-24 Hrs", label: "Faster Turnaround" },
    { value: "500+", label: "Satisfied Clients" },
    { value: "350+", label: "Skilled Data Experts" },
    { value: "99%", label: "Accuracy" },
    { value: "21", label: "Years Experience" },
  ];

  const services = [
    "Document Scanning Services",
    "Data Extraction Services",
    "Data Mining Services",
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 sm:p-10 space-y-12">
      {/* Header */}
      <DSmainmenu/>
      <header className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
          6 Key Benefits of Restaurant Menu Digitization
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          In today’s fast-paced food industry, customers expect easy access to the
          latest menus, offers, and pricing. Switching from paper menus to digital
          menus not only increases efficiency but also enhances customer experience.
        </p>
      </header>

      {/* Benefits */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
          Benefits of Menu Digitization
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Our Related Services
        </h2>
        <ul className="flex flex-wrap justify-center gap-4 text-gray-700 font-medium">
          {services.map((srv) => (
            <li
              key={srv}
              className="bg-white shadow px-4 py-2 rounded-lg hover:shadow-md transition"
            >
              {srv}
            </li>
          ))}
        </ul>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-blue-100 to-teal-100 rounded-xl p-8 grid sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-bold text-blue-600 mb-1">
              {stat.value}
            </h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-blue-50 p-8 sm:p-12 rounded-xl text-center space-y-4">
        <h2 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
          Switch to Digital Menus for Your Restaurant
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          The food industry is growing rapidly. Having a digitized menu can give your
          restaurant the competitive edge it needs to thrive.{" "}
          <span className="font-semibold">Nimble Auity</span> offers Restaurant Menu
          Data Entry and Digitization services to boost your sales, reduce costs, and
          deliver exceptional customer experiences.
        </p>
        <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-xl shadow-md hover:bg-teal-600 transition transform hover:-translate-y-1">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default RestaurantMenuDigitization;
