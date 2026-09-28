import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Brain, Network, Bot, Settings, BookOpen } from "lucide-react";
import DSMainMenu from "../mainmenu";

const NlpServices: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <DSMainMenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble NLP Services
        </h1>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          Maximize insights and automate customer interactions with our NLP services using neural networks to transform text data. Contact us for AI integration.
        </p>
        <Button size="lg" variant="secondary">
          Contact Us
        </Button>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Digital Transformation for African Automotive Firm</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                UiPath RPA solution reduced emergency service dispatch time by 50% for a South African automobile company.
              </p>
              <Button variant="link" className="mt-3">Read More</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Document Processing Automation</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Global bank reduced document review time from 8 hours to less than 30 seconds with Nimble Acuity’s big data platform.
              </p>
              <Button variant="link" className="mt-3">Read More</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-6 text-center">
            <p className="italic mb-4">
              “Working with Nimble Acuity has been a great experience. They adapted to our requirements and have consistently performed well. A wonderful partner.”
            </p>
            <p className="font-semibold">Spokesperson, Executive recruitment firm in US</p>
          </CardContent>
        </Card>
      </section>

      {/* NLP Services Grid */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our NLP Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Brain, title: "Machine Learning", desc: "Predictive Modeling, Supervised & Unsupervised Learning, Reinforcement Learning, Feature Engineering" },
            { icon: Network, title: "Fraud Analytics", desc: "Anomaly Detection, Real-time Monitoring, Risk Scoring, Pattern Recognition" },
            { icon: Bot, title: "AI Services", desc: "NLP, Computer Vision, AI-driven Automation, Cognitive Computing" },
            { icon: Settings, title: "Neural Networks", desc: "Deep Learning, CNNs, RNNs, Backpropagation" },
          ].map((item, idx) => (
            <Card key={idx}>
              <CardHeader>
                <item.icon className="w-10 h-10 text-blue-600 mb-2" />
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Flow */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our NLP Process Flow</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { step: "01", title: "Speech to Text", desc: "Convert human speech into text for processing voice commands & transcription." },
            { step: "02", title: "Lexical Analysis", desc: "POS tagging & syntactic analysis using advanced ML models." },
            { step: "03", title: "Entity Extraction", desc: "NER & coreference resolution to detect & categorize key info." },
            { step: "04", title: "Emotional Tone", desc: "Sentiment analysis to assign emotional scores for insights." },
          ].map((item, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle>{item.step}. {item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Why Partner with Us</h2>
        <ul className="space-y-4">
          {[
            "Expert NLP and AI team",
            "Custom-tailored solutions",
            "Advanced analytics for insights",
            "Seamless system integration",
            "Continuous optimization & support",
          ].map((point, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Tools & Industries */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Tools & Industries We Serve</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card>
            <CardHeader><CardTitle>Key Tools</CardTitle></CardHeader>
            <CardContent>
              <p>Python, NLTK, SpaCy, TensorFlow, Gensim, IBM Watson</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Industries</CardTitle></CardHeader>
            <CardContent>
              <p>Telecom, Media, Travel, Banking, Healthcare, Insurance, Retail, Logistics, Manufacturing, Public Services</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Additional Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Business Analytics Services",
            "Business Intelligence Services",
            "Data Engineering Services",
            "Data Science Consulting Services",
            "Conversational AI Services",
            "Computer Vision Services",
          ].map((service, idx) => (
            <Card key={idx}>
              <CardContent className="p-4">{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-indigo-700 text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Natural Language Processing Services to Nimble Acuity
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          Enhance customer experiences, extract valuable insights, and boost decision-making with our NLP services. Contact us today for a consultation.
        </p>
        <Button size="lg" variant="secondary">Get Started</Button>
      </section>
    </div>
  );
};

export default NlpServices;
