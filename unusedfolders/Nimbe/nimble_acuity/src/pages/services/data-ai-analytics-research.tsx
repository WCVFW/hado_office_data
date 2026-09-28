import React, { useState } from "react";

const DataAIAnalyticsResearch = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const subtopics = [
    {
      title: "Data Engineering & Ingestion",
      description:
        "Design and build pipelines that collect, clean, and integrate data from multiple sources, ensuring reliable availability for analytics and decision-making."
    },
    {
      title: "Data Modeling & Schema Design",
      description:
        "Define efficient data models and schemas to optimize database performance, scalability, and maintainability for analytical and transactional workloads."
    },
    {
      title: "BI Dashboards & Reporting",
      description:
        "Develop interactive business intelligence dashboards that visualize KPIs, enabling stakeholders to monitor performance and take action quickly."
    },
    {
      title: "KPI Design & Data Governance",
      description:
        "Define clear KPIs and implement governance frameworks to ensure data accuracy, consistency, and compliance across the organization."
    },
    {
      title: "Data Quality & Master Data Management",
      description:
        "Implement tools and processes to maintain high data quality, manage duplicates, and establish a single source of truth for master records."
    },
    {
      title: "Statistical Analysis & A/B Testing",
      description:
        "Use statistical methods to analyze patterns, design experiments, and evaluate A/B tests for product, marketing, and business decisions."
    },
    {
      title: "Forecasting & Time-Series Modeling",
      description:
        "Build predictive models using time-series techniques to forecast demand, revenue, or operational trends with accuracy."
    },
    {
      title: "Machine Learning Model Development",
      description:
        "Design, train, and deploy machine learning models to automate predictions, classifications, and decision-making tasks."
    },
    {
      title: "Natural Language Processing (NLP)",
      description:
        "Develop NLP models for text analytics, chatbots, sentiment analysis, and other language-based applications."
    },
    {
      title: "Computer Vision Prototyping",
      description:
        "Build proof-of-concept computer vision models for image recognition, object detection, and video analytics."
    },
    {
      title: "Recommender Systems",
      description:
        "Develop recommendation engines that personalize customer experiences by analyzing behavioral and transactional data."
    },
    {
      title: "ML Ops & Model Monitoring",
      description:
        "Implement ML Ops practices to manage model deployment, versioning, monitoring, and lifecycle management at scale."
    },
    {
      title: "Data Labeling & Annotation",
      description:
        "Provide structured data labeling and annotation for supervised machine learning, ensuring high-quality training datasets."
    },
    {
      title: "Survey Design & Research Ops",
      description:
        "Design effective surveys, manage sampling, and streamline research operations to capture actionable customer and market insights."
    },
    {
      title: "Market Research & Competitive Intel",
      description:
        "Conduct research on industry trends, competitor strategies, and consumer behavior to inform business strategy."
    },
    {
      title: "Compliant Web Data Collection",
      description:
        "Gather public web data responsibly and in compliance with regulations, enabling data-driven analysis without legal risks."
    },
    {
      title: "Pricing Analytics",
      description:
        "Analyze pricing strategies, elasticity, and market data to optimize product pricing and maximize profitability."
    },
    {
      title: "Churn & Retention Analytics",
      description:
        "Identify at-risk customers using predictive analytics and recommend strategies to improve retention and reduce churn."
    },
    {
      title: "Credit Scoring & Risk Models",
      description:
        "Develop credit scoring and risk assessment models that improve decision-making in lending, insurance, and financial services."
    },
    {
      title: "Fraud Detection & Anomaly Detection",
      description:
        "Use advanced algorithms to detect fraudulent activity and anomalies in real time, reducing financial and operational risks."
    },
    {
      title: "Geospatial Analytics & Mapping",
      description:
        "Analyze location-based data to optimize logistics, site selection, and market expansion strategies."
    },
    {
      title: "Experiment Design & Causal Inference",
      description:
        "Design controlled experiments and apply causal inference methods to identify true drivers of business outcomes."
    },
    {
      title: "Data Privacy & Anonymization",
      description:
        "Implement privacy-preserving techniques such as anonymization and encryption to protect sensitive information."
    },
    {
      title: "Synthetic Data Generation",
      description:
        "Generate synthetic datasets to augment limited real data, enabling safer experimentation and model training."
    },
    {
      title: "Data Catalog & Lineage",
      description:
        "Maintain a comprehensive data catalog and track lineage to improve discoverability, governance, and compliance."
    },
    {
      title: "Report Automation & Scheduling",
      description:
        "Automate the generation and distribution of reports, ensuring timely delivery of insights to stakeholders."
    },
    {
      title: "Excel/Sheets Macro Automation",
      description:
        "Develop macros and automation scripts to streamline repetitive spreadsheet tasks, improving accuracy and efficiency."
    },
    {
      title: "Voice-of-Customer Text Mining",
      description:
        "Extract insights from customer feedback, reviews, and surveys using advanced text mining techniques."
    },
    {
      title: "Social Listening & Sentiment Analysis",
      description:
        "Monitor social media platforms to assess public sentiment, brand perception, and emerging trends."
    },
    {
      title: "AI Tool/Vendor Evaluation",
      description:
        "Evaluate AI tools and vendors to identify the best-fit solutions for specific business needs and objectives."
    }
  ];

  const toggleCard = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="px-6 py-20 flex flex-col items-center bg-gray-50">
      {/* Intro Section */}
      <div className="w-full max-w-5xl text-center mb-16">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">
          Data, AI, Analytics & Research
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Our Data, AI, Analytics & Research services enable organizations to harness
          the power of data for smarter decisions, predictive insights, and
          innovation. From engineering and visualization to advanced AI and market research,
          we help businesses stay ahead in a data-driven world.
        </p>
      </div>

      {/* Cards Section */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {subtopics.map((item, index) => (
          <div
            key={index}
            onClick={() => toggleCard(index)}
            className="relative cursor-pointer p-6 rounded-xl shadow-md bg-white border border-gray-100 transition-all duration-300 hover:shadow-lg"
          >
            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              {item.title}
            </h2>

            {/* Content */}
            <p
              className={`text-gray-600 text-sm leading-relaxed transition-all duration-300 ${
                activeIndex === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              {item.description}
            </p>

            {/* Arrow */}
            <span
              className={`absolute bottom-4 right-4 text-gray-400 text-xl transform transition-transform duration-300 ${
                activeIndex === index ? "rotate-180" : "rotate-0"
              }`}
            >
              ▼
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataAIAnalyticsResearch;
