import React from "react";
import DSmainmenu from "../DSmainmenu";

const practices = [
  {
    title: "Start from the Basics",
    content:
      "Analyze each aspect of non-digital data including paper quality, language, layout, and font. For image-rich documents, apply special OCR measures to ensure successful digitization.",
  },
  {
    title: "Define the Project Goals",
    content:
      "Clearly define the specific objectives and timelines of the OCR project. Post-processing may be required to achieve the desired accuracy.",
  },
  {
    title: "Have a Well Planned Workflow",
    content:
      "A streamlined OCR workflow ensures that the project progresses as expected. Proper planning increases chances of success.",
  },
  {
    title: "Perform Quality Check Processes",
    content:
      "Implement thorough quality checks to ensure objectives are met, deadlines are followed, and the project is on track. Choose full or sectional review based on budget.",
  },
  {
    title: "Be Flexible to Variations in Project Scale and Costs",
    content:
      "OCR project demands may change over time. Prepare to adapt to scale changes, project schedules, and pricing adjustments.",
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

const tools = [
  "ABBY FlexiCapture",
  "Adobe Acrobat Pro DC",
  "Clinical Studio",
  "Creaceed Prizmo",
  "dfnet iCapture",
  "Microsoft OneNote",
  "Nuance Power PDF",
  "OmniPage",
  "POIMAPPER",
  "Presto PageManager",
  "Viedoc",
];

const OCRDataCapture: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-600 text-white py-24 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          Best Practices of OCR Data Capture
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-8 drop-shadow-sm">
          OCR is a fast and efficient method for automated data capture. Follow these best practices to maximize accuracy and efficiency in your OCR projects.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-indigo-700 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition shadow-md"
        >
          Get Started
        </a>
      </section>

      {/* Best Practices Section */}
      <section className="px-6 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          5 Best Practices of OCR-based Data Capture
        </h2>
        <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2">
          {practices.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 border border-gray-200"
            >
              <h3 className="text-2xl font-semibold text-purple-700 mb-3">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white p-6 rounded-xl shadow-md">
              <h3 className="text-3xl md:text-4xl font-bold">{stat.value}</h3>
              <p className="mt-2 text-lg font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OCR Tools Section */}
      <section className="px-6 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">OCR-based Data Capture Tools to Consider</h2>
        <ul className="max-w-4xl mx-auto grid gap-4 md:grid-cols-2 list-disc list-inside text-gray-700">
          {tools.map((tool, idx) => (
            <li key={idx} className="p-2 bg-white rounded shadow-sm">{tool}</li>
          ))}
        </ul>
      </section>

      {/* CTA Section */}
      <section className="mt-16 bg-indigo-700 text-white rounded-xl py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Nimble Auity: Your OCR Data Capture Partner
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Nimble Auity provides accurate and quick OCR data capture services with 26+ years of expertise. We convert paper files, forms, and invoices into digitized and searchable formats efficiently and cost-effectively.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-indigo-700 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition shadow-md"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default OCRDataCapture;
