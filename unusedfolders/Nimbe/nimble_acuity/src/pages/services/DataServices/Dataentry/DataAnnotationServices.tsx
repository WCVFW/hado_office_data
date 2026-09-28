import React from "react";
import DSmainmenu from "../DSmainmenu";

const DataAnnotationServices: React.FC = () => {
  const services = [
    {
      title: "Image Annotation Services",
      description: `Precise object tagging using bounding boxes, polygons, or keypoints to support tasks like object detection and classification.
Scalable labeling solutions for high-volume image datasets across industries such as autonomous vehicles, e-commerce, agriculture, and healthcare.
Built-in quality control workflows to maintain consistency and accuracy across varied image types and ensure your models train on clean, reliable data.`,
    },
    {
      title: "Text Annotation Services",
      description: `Entity and intent tagging, including named entity recognition, parts of speech, sentiment, and product features to support NLP and chatbot development.
Contextual labeling and document-level classification for use cases like content moderation, legal text analysis, and customer support automation.
Multilingual annotation support with attention to tokenization, grammar structures, and semantic differences across languages.`,
    },
    {
      title: "Video Annotation Services",
      description: `Detailed frame-by-frame tracking using bounding boxes, keypoints, or segmentation masks to train models in action recognition and behavior analysis.
Event tagging for identifying specific actions, gestures, or movements in surveillance, sports, or retail video footage.
Temporal segmentation services to define scene transitions, activity windows, or detect anomalies in extended video sequences.`,
    },
    {
      title: "Speech Recognition",
      description: `Accurate time-stamped transcription of audio files to support the development of high-performance speech recognition systems.
Speaker diarization and segmentation services to distinguish between multiple voices in interviews, meetings, or customer support calls.
Labeling non-speech audio elements such as coughs, background noise, or ambient sounds for healthcare, security, and voice-enabled applications.`,
    },
    {
      title: "Semantic Segmentation",
      description: `Pixel-level annotation for distinguishing objects and backgrounds with high precision in applications like medical diagnostics, self-driving technology, and satellite imagery.
Support for complex and high-resolution datasets that require fine-grained segmentation of detail and contextual accuracy.
Multi-stage quality checks to ensure annotation accuracy and reduce false positives in training data.`,
    },
    {
      title: "Bounding Box Annotation",
      description: `Clear and accurate box placement around visible objects in images for object detection use cases in retail, agriculture, logistics, and autonomous driving.
Ability to handle multiple object classes and sub-classes within the same image for complex model training needs.
Output formatting tailored to your machine learning workflow, with support for YOLO, COCO, Pascal VOC, and other dataset structures.`,
    },
  ];

  const tools = ["Labelbox", "Scale AI", "SuperAnnotate", "v7labs"];

  const testimonials = [
    {
      quote: "We were very satisfied with the quality-of-service Nimble Acuity provided. They were able to meet our requests with great professionalism and flexibility. We look forward to having your team fulfill future projects for us.",
      author: "Spokesperson, Online health lessons company in Canada",
    },
  ];

  const successStories = [
    {
      title: "Semantic Annotation on Specific Entities of 80 Images with Great Accuracy",
      description: "A leading company wanted help with semantic annotation services. Our team provided the annotation services on specific entities of 80 images with high accuracy.",
    },
    {
      title: "Annotation and Bounding Box Services for a Visual Search and Image Recognition Company",
      description: "The team at Nimble Acuity provided annotation and bounding box services to a visual search and image recognition company within the promised timeframe of 15 days.",
    },
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Nimble Data Annotation Services</h1>
        <p className="text-lg text-gray-700">
          Label and structure your data to train machine learning models with our data annotation services.
        </p>
        <p className="mt-4 text-gray-600">
          Boost your operational efficiency with our reliable, human-led data annotation services. Partner with Nimble Acuity for annotation services that keep pace with your AI ambitions.
        </p>
      </section>

      {/* Services Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8">Our Extensive Data Annotation Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="border rounded-lg p-6 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-700 whitespace-pre-line">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Tools We Use</h2>
        <ul className="flex flex-wrap gap-4">
          {tools.map((tool, idx) => (
            <li key={idx} className="bg-gray-100 px-4 py-2 rounded">{tool}</li>
          ))}
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Why Choose Our Data Annotation Services?</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Improved Algorithm Training and Validation</li>
          <li>Superior Data Labeling Accuracy</li>
          <li>Scalable Annotation Workflow</li>
          <li>Customizable Annotation Frameworks</li>
          <li>Domain-Specific Annotation Expertise</li>
          <li>Accelerated AI Model Deployment</li>
        </ul>
      </section>

      {/* Additional Services */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Additional Services You Can Benefit From</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Data Conversion Services</li>
          <li>Data Processing Services</li>
          <li>Online Catalog Management Services</li>
          <li>Optical Character Recognition (OCR) Services</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8">Testimonials</h2>
        {testimonials.map((t, idx) => (
          <blockquote key={idx} className="border-l-4 border-blue-500 pl-4 italic text-gray-700 mb-4">
            "{t.quote}" <span className="block mt-2 font-bold">{t.author}</span>
          </blockquote>
        ))}
      </section>

      {/* Success Stories */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8">Customer Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {successStories.map((story, idx) => (
            <div key={idx} className="border rounded-lg p-6 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">{story.title}</h3>
              <p className="text-gray-700">{story.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default DataAnnotationServices;
