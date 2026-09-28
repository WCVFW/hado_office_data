import React from "react";
import DSmainmenu from "../DSmainmenu";

const TelephoneDirectoryDataEntry: React.FC = () => {
  const stats = [
    { value: "40%", label: "Cost Reduction" },
    { value: "8-24 Hrs", label: "Faster Turnaround" },
    { value: "500+", label: "Satisfied Clients" },
    { value: "350+", label: "Skilled Data Experts" },
    { value: "99%", label: "Accuracy" },
    { value: "21", label: "Years Experience" },
  ];

  const benefits = [
    {
      title: "Increased Usability of Information",
      desc: "We digitize telephone directory data into usable formats, ensuring ready availability for smarter decision-making and better customer value.",
    },
    {
      title: "Access to Trained Personnel & Technology",
      desc: "Leverage our experienced resources and advanced tools to handle large volumes of work with quick turnaround times.",
    },
    {
      title: "Access to Professional Managers",
      desc: "Our dedicated project managers set expectations, establish clear communication, and ensure timely, high-quality results.",
    },
    {
      title: "Assurance of Great Services",
      desc: "We follow a rigorous Quality Control (QC) process with editors reviewing outputs for grammatical and contextual accuracy.",
    },
    {
      title: "Flexibility of Services",
      desc: "We handle multiple input and output formats (PDF, ASCII, MS Word, HTML, etc.) and support flexible delivery methods like email, FTP, or secure shipping.",
    },
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero */}
      <DSmainmenu/>
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Telephone Directory Data Entry Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Stay competitive by outsourcing non-core tasks like telephone
          directory data entry to Nimble Acuity. We bring expertise,
          technology, and cost savings while you focus on your core business
          functions.
        </p>
      </section>

      {/* Why Nimble */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-center">
          Why Nimble to Nimble Acuity?
        </h2>
        <p className="text-gray-700 max-w-4xl mx-auto text-center">
          Information is powerful when it is available in a readily usable
          format. With digitized contact data, your organization can improve
          decision-making, increase efficiency, and ensure easy access to vital
          information across all levels. With Nimble Acuity, you also get rigorous Quality
          Assurance checks that ensure validated and accurate data.
        </p>
      </section>

      {/* Stats Section */}
      <section className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 text-center mb-16">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white border rounded-lg p-4 shadow hover:shadow-md transition"
          >
            <h3 className="text-2xl font-bold">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Benefits of Outsourcing Telephone Directory Data Entry
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 border-l-4 border-blue-600 p-6 rounded shadow hover:bg-blue-50 transition"
            >
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partner Section */}
      <section className="text-center mb-16">
        <h2 className="text-3xl font-semibold mb-4">
          Partner with Nimble Acuity
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          At Nimble Acuity, our customers always come first. We listen to your needs,
          customize solutions to fit your requirements, and proactively respond
          to feedback. With our expertise and dedication, we ensure you get the
          best service experience.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition transform hover:scale-105">
          Contact Us to Nimble Today
        </button>
      </section>
    </div>
  );
};

export default TelephoneDirectoryDataEntry;
