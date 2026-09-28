import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import DSMainMenu from "../mainmenu";

const DeepLearning: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero */}
      <DSMainMenu/>
      <section className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Nimble Deep Learning Services</h1>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          Tackle data privacy, manage computational needs, and mitigate model bias with our deep
          learning services. Contact us for efficient automation with intelligence.
        </p>
        <Button size="lg" variant="secondary">
          Contact Us
        </Button>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <p className="text-lg leading-relaxed">
          Organizations face massive challenges when it comes to deep learning primarily because it
          entails large amounts of computing power and expensive hardware like high-end GPUs and
          massive storage requirements. This is where our highly developed deep learning services
          come to pave the way for building, training, and deploying robust multilayered neural
          networks.
        </p>
        <p className="mt-6 text-lg leading-relaxed">
          We deal with intricate business issues such as predictive analytics, real-time anomaly
          detection, and natural language processing. Operational overheads are minimized and time to
          market is increased through leveraging the expertise of TensorFlow, PyTorch, and Keras.
        </p>
        <p className="mt-6 text-lg leading-relaxed">
          Regardless of your business size or sector, our scalable GPU accelerated platform
          guarantees high-performance model training with any kind of data source to put your
          organization at the AI innovation front-runner.
        </p>
      </section>

      {/* Client Success Stories */}
      <section className="bg-gray-50 py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Electronics Firm Inventory Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                A leading electronics firm needed reliable RPA solutions to streamline inventory
                management. Our team delivered cost-effective services that reduced overhead.
              </p>
              <Button variant="link" className="mt-3">
                Read Case Study
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Healthcare Chart Extraction</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We helped a healthcare service provider with chart extraction using advanced RPA
                methods, providing accuracy and cost efficiency.
              </p>
              <Button variant="link" className="mt-3">
                Read Case Study
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Comprehensive Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Comprehensive Deep Learning Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "AWS Deep Learning Service", points: ["Scalable GPU instances", "Pre-built AMIs", "SageMaker optimization", "Elastic Inference"] },
            { title: "Azure Deep Learning Services", points: ["ML Studio integration", "Scalable compute", "PyTorch compatibility", "Cognitive APIs"] },
            { title: "Deep Learning Cloud Services", points: ["IaaS for ML models", "Auto-scaling resources", "Distributed training", "Cross-platform"] },
            { title: "Image Data Classification", points: ["CNN application", "Feature extraction", "Image tagging", "Accuracy enhancement"] },
            { title: "Object Detection", points: ["Bounding box generation", "Real-time processing", "Precision optimization", "Surveillance integration"] },
            { title: "Semantic Segmentation", points: ["Pixel-wise classification", "Contextual analysis", "Medical applications", "Boundary detection"] },
            { title: "Generative Models", points: ["GAN usage", "Data augmentation", "Synthetic images", "Deepfake tech"] },
            { title: "Text Generation", points: ["Transformers & GPT", "Seq2Seq models", "Context-aware creation", "Automated writing"] },
            { title: "Time Series Forecasting", points: ["ARIMA & LSTM", "Trend analysis", "Predictive maintenance", "Financial predictions"] },
            { title: "Video Analysis", points: ["Object tracking", "Anomaly detection", "Event summarization", "Security systems"] },
            { title: "Natural Language Processing", points: ["Sentiment analysis", "Entity recognition", "Translation", "Conversational AI"] },
            { title: "Disruptive Technology", points: ["Early adoption", "Innovation disruption", "Business transformation", "Tech leverage"] },
          ].map((srv, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle>{srv.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {srv.points.map((p, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" /> {p}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Deep Learning Process We Follow</h2>
        <ol className="space-y-6">
          {["Access – Collect data from nodes and sources.", "Analyze – Explore and preprocess data.", "Develop – Build AI models and simulations.", "Deploy – Integrate into devices, apps, and enterprise systems."].map((step, idx) => (
            <li key={idx} className="flex gap-3">
              <CheckCircle className="w-6 h-6 text-indigo-600 mt-1" /> <span>{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Industries */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Industries We Serve</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Telecom", "Media & Entertainment", "Travel & Hospitality", "Aerospace", "Banking & Finance", "Sports", "Education", "Healthcare", "Fashion", "Insurance", "Retail", "Manufacturing", "Oil & Gas", "Logistics"].map((sector, idx) => (
            <Card key={idx}>
              <CardContent className="p-4">{sector}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-50 py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Additional Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Machine Learning Services", "Natural Language Processing Services", "Artificial Intelligence Services", "Robotic Process Automation Services"].map((srv, idx) => (
            <Card key={idx}>
              <CardContent className="p-4">{srv}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-indigo-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Nimble Deep Learning Services to Nimble Acuity</h2>
        <p className="max-w-3xl mx-auto mb-6">
          Opting for our deep learning services will help you overcome technical challenges and move
          towards efficient innovation. Our expertise in advanced algorithms, large datasets, and
          scalable models ensures seamless integration and business transformation.
        </p>
        <Button size="lg" variant="secondary">
          Talk to Us Today
        </Button>
      </section>
    </div>
  );
};

export default DeepLearning;
