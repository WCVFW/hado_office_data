import React from "react";
import DSMainMenu from "../mainmenu";

const CNNGuide: React.FC = () => {
    
 <DSMainMenu/>
  return (
    <div>
      {/* ✅ Navigation Bar */}
      <DSMainMenu />
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
       
      {/* Title */}
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          All You Need to Know About Convolutional Neural Networks
        </h1>
        <h2 className="text-xl text-gray-600">
          A Complete Guide to Convolutional Neural Networks
        </h2>
      </header>

      {/* Introduction */}
      <section className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          The human brain is constantly analyzing the world around us.
          Consciously or subconsciously, we are always making predictions about
          what we see, and then we react accordingly to them. We are capable of
          labeling every object that we see, then file it in the deep recesses
          of our mind and retrieve it when required. How do we do that? How do
          we interpret what is in front of us and react accordingly?
        </p>
        <p>
          Our eyes collaborate with our brain through an aptly titled{" "}
          <strong>"primary visual pathway"</strong> to make sense of the world
          around us. The brain processes and breaks down what the eyes see
          through a complex hierarchical structure of neurons and nerve
          connections, giving us the ability to recognize, remember, and make
          decisions. But how is this related to convolutional neural networks?
          Let’s delve deeper.
        </p>
      </section>

      {/* History */}
      <section>
        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
          A Brief History of Convolutional Neural Networks (CNNs)
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Deep convolutional neural networks are most commonly associated with
          computer vision and trace back their roots to the 1980s. Inspired by
          his research into the feline visual processing system, Kunihiko
          Fukushima proposed a neural network architecture which could recognize
          geometrical patterns in images and generalize them.
        </p>
        <p className="text-gray-700 leading-relaxed">
          By 1998, CNNs were formally introduced with <strong>LeNet-5</strong>,
          which analyzed handwritten digits. With GPU advancements, CNNs gained
          traction and are now powering handwriting recognition, autonomous
          vehicles, medical diagnostics, biometrics, object identification, and
          more.
        </p>
      </section>

      {/* CNN Process */}
      <section>
        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
          Convolutional Neural Network Explained: How is a CNN Process Developed?
        </h3>
        <ol className="list-decimal list-inside space-y-4 text-gray-700 leading-relaxed">
          <li>
            <strong>Collecting Data:</strong> Large datasets with sufficient
            variance are collected and preprocessed.
          </li>
          <li>
            <strong>Designing the CNN:</strong> CNNs rely on 3 major layers –
            Convolutional layers (with ReLU), Pooling layers (e.g. max pooling),
            and Fully Connected (Dense) layers.
          </li>
          <li>
            <strong>Algorithm Execution:</strong> Deep learning algorithms
            configure free parameters during training. GPU-intensive.
          </li>
          <li>
            <strong>Network Evaluation:</strong> Testing and cross-validation
            ensure low error rates.
          </li>
          <li>
            <strong>Deployment:</strong> Trained CNNs are integrated into
            production systems via deep learning frameworks.
          </li>
        </ol>
      </section>

      {/* Applications */}
      <section>
        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
          CNNs are the Future: Applications in Multiple Industries
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
          <li>
            <strong>Problem Solving:</strong> CNNs beat humans in games like Go,
            advancing AI research.
          </li>
          <li>
            <strong>Cancer Research:</strong> Used in diagnosis and treatment of
            prostate, breast, and lung cancers.
          </li>
          <li>
            <strong>Neuroscience:</strong> Mapping synapses and studying brain
            networks with CNN-powered insights.
          </li>
          <li>
            <strong>Marketing:</strong> Recommendation engines (Amazon, Google)
            powered by CNNs.
          </li>
          <li>
            <strong>Business Intelligence:</strong> CNNs aid in CRM, supply
            chain, and intelligent dashboards.
          </li>
        </ul>
      </section>

      {/* Conclusion */}
      <section className="space-y-4 text-gray-700 leading-relaxed">
        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
          Decipher, Transform, and Innovate
        </h3>
        <p>
          What we know about convolutional neural networks today is just the tip
          of the iceberg. AI and deep learning are advancing daily, and
          businesses need experts to innovate and apply these technologies
          effectively.
        </p>
        <p>
          Even if you have a team of data scientists, partnering with
          specialists like <strong>Nimble Acuity</strong> can help implement
          cutting-edge CNNs and unlock powerful business insights.
        </p>
      </section>
    </div>
    </div>
  );
};

export default CNNGuide;
