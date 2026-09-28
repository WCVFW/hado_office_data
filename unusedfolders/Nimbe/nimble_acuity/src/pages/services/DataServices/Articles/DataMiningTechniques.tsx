import React from "react";
import DSmainmenu from "../DSmainmenu";

const DataMiningTechniques: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 sm:p-10 space-y-12">
      {/* Heading */}
      <DSmainmenu/>
      <header className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
          Data Mining Techniques
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
          Sort large datasets, discover patterns, extract meaningful insights, and drive better business decisions.
        </p>
      </header>

      {/* Techniques Cards */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">7 Popular Data Mining Techniques</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Association", desc: "Establish correlations between items and discover patterns. Applications: product grouping, in-store placement, analyze imperfections." },
            { title: "Classification", desc: "Identify classes of products/customers using attributes. Applications: predict buying behavior, valuable customers, marketing targeting." },
            { title: "Clustering", desc: "Explore data to find correlations among cluster members. Applications: customer segmentation, genetic similarity, site grouping." },
            { title: "Outlier Detection", desc: "Identify unusual data that deviates from patterns. Applications: fraud detection in credit, taxes, etc." },
            { title: "Regression Analysis", desc: "Establish variable dependencies to predict outcomes. Applications: real estate impact on GDP, customer lifetime value." },
            { title: "Attribute Strength Detection", desc: "Find attribute association strengths. Applications: top-performing employees, responsive customers." },
            { title: "Feature Selection", desc: "Create new attributes from existing ones. Applications: pattern recognition, data compression, latent semantic analysis." },
          ].map((technique) => (
            <div key={technique.title} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">{technique.title}</h3>
              <p className="text-gray-700">{technique.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-indigo-50 to-pink-50 rounded-xl p-8 grid sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
        {[
          { value: "40%", label: "Cost Reduction" },
          { value: "8-24 Hrs", label: "Faster Turnaround" },
          { value: "500+", label: "Satisfied Clients" },
          { value: "350+", label: "Skilled Experts" },
          { value: "99%", label: "Accuracy" },
          { value: "21", label: "Years Experience" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-indigo-600 mb-1">{stat.value}</h3>
            <p className="text-gray-700">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* 6-Step Process */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">6-Step Data Mining Process</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { step: "01", title: "Identifying the Problem Statement", desc: "Define objectives with domain and data mining experts." },
            { step: "02", title: "Categorizing Data for Analysis", desc: "Collect and describe data, address quality issues, collaborate with experts." },
            { step: "03", title: "Model Building", desc: "Prepare data, select records/attributes/tables, and build predictive models." },
            { step: "04", title: "Data Modeling", desc: "Apply mining functions, ensuring model requirements are met." },
            { step: "05", title: "Result Evaluation", desc: "Evaluate and refine models until desired results are obtained." },
            { step: "06", title: "Final Deployment", desc: "Export results to databases or applications for implementation." },
          ].map((process) => (
            <div key={process.step} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="flex items-center mb-2">
                <span className="text-white bg-indigo-600 font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4">{process.step}</span>
                <h3 className="font-semibold text-gray-900">{process.title}</h3>
              </div>
              <p className="text-gray-700">{process.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Business Benefits */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Business Benefits of Data Mining</h2>
        <ul className="space-y-3 max-w-3xl mx-auto text-gray-700 list-disc list-inside">
          <li>Optimize retail layouts to boost customer experience and revenue.</li>
          <li>Enhance product safety, comfort, and usability for manufacturers.</li>
          <li>Build risk models and detect fraud in finance and banking.</li>
          <li>Improve marketing campaigns, client satisfaction, and product ideation.</li>
          <li>Detect fraudulent government transactions and documents.</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-50 p-8 sm:p-12 rounded-xl text-center space-y-4">
        <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
          Nimble Data Mining Services
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Nimble Auity provides data management and mining services with 26+ years of experience. Our experts deliver high-quality solutions fast using technologies like SAS, SPSS, OLAP, and Microsoft Data Mining.
        </p>
        <button className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-indigo-700 transition transform hover:-translate-y-1">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default DataMiningTechniques;
