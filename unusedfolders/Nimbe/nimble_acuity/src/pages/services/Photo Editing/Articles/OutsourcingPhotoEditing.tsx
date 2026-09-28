import React from "react";
import PEMainMenu from "../PEmainmenu";


const OutsourcingPhotoEditing: React.FC = () => {
  const advantages = [
    "Tap into the expertise of skilled image editors",
    "Reduce costs and increase your bottom-line",
    "Sign NDAs to ensure maximum protection of customer images",
    "Use of Adobe Photoshop CS3 & PTGui Pro for picture-perfect images",
    "Professional photo editing services across industry verticals",
    "Engage the services of full-time/part-time photo editors as per your need",
  ];

  const industries = [
    "Online Apparels Shopping",
    "Online Electronic Store",
    "Online Automobile Store",
    "Online Sports Accessories",
    "Publishing Houses",
    "Portrait Studios",
    "Real Estate Companies",
  ];

  const processSteps = [
    "Client fills in our 'Contact Us' form and our team contacts him/her",
    "Client sends us a sample image file for a FREE, no obligation trial",
    "Client uploads the images for editing on our secure FTP server or via email",
    "Our image editors edit images as per the client's needs using photo editing software",
    "The images are checked by our experts for quality and accuracy",
    "The completed images are delivered to the client in the desired file format",
    "The client views the edited images and suggests changes, if needed",
    "Our photo editors make the required alterations and send it back",
    "All original hard copy photographs are returned to the client",
    "Digital images are deleted at the end of the project",
  ];

  return (
    <div>  {/* Navigation */}
      <PEMainMenu />
    <div className="max-w-6xl mx-auto px-6 py-10">
    

      {/* Header */}
      <h1 className="text-3xl font-bold mb-4">
        Outsourcing Photo Editing Services to India
      </h1>
      <p className="text-gray-700 mb-6">
        If you run an online store, a real estate business or a portrait studio,
        then you will know the importance of good-looking images. With the
        emergence of photo image editing, comes the power to transform your
        photographs into perfect eye-candy images that will make an impact on
        your customers. There is no better destination than India, when it comes
        to outsourcing image editing.
      </p>
      <p className="text-gray-700 mb-8">
        India has got the right mix of professional photo editors who are expert
        at using digital photo editing software to bring out the right effect in
        your photographs. Apart from using the world's best talent to your
        advantage, India's unique 12 hour time zone ensures that you get your
        picture-perfect photographs on-time. However, the best reason to
        Nimble photo editing services to India is the low cost, which makes
        it an affordable option for your business.
      </p>

      {/* Advantages */}
      <h2 className="text-2xl font-semibold mb-4">Get the India Advantage!</h2>
      <ul className="list-disc list-inside space-y-2 mb-10">
        {advantages.map((adv, idx) => (
          <li key={idx} className="text-gray-700">
            {adv}
          </li>
        ))}
      </ul>

      {/* Industries */}
      <h2 className="text-2xl font-semibold mb-4">Verticals / Industries We Cater to</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {industries.map((industry, idx) => (
          <div
            key={idx}
            className="p-4 border rounded-lg bg-white shadow-sm text-gray-700"
          >
            {industry}
          </div>
        ))}
      </div>

      {/* Why Nimble */}
      <h2 className="text-2xl font-semibold mb-4">
        Why Nimble Photo Editing Services to India?
      </h2>
      <p className="text-gray-700 mb-6">
        India, being a leading digital photo editing outsourcing destination can
        put your company in touch with a large pool of talented photo editors
        who understand the importance of making quality deliverables and
        delivering on-time. With cost savings, data security, and the latest
        tools like Adobe Photoshop CS6 and PTGui Pro, outsourcing to India gives
        you unmatched flexibility and results.
      </p>

      {/* Process */}
      <h2 className="text-2xl font-semibold mb-4">
        Photo Editing Services Outsourcing Process at Nimble Acuity
      </h2>
      <ol className="list-decimal list-inside space-y-2 mb-10">
        {processSteps.map((step, idx) => (
          <li key={idx} className="text-gray-700">
            {step}
          </li>
        ))}
      </ol>

      {/* CTA */}
      <div className="bg-blue-50 p-6 rounded-lg shadow text-center">
        <h2 className="text-xl font-semibold mb-3">
          Nimble Photo Editing Services to Nimble Acuity
        </h2>
        <p className="text-gray-700 mb-4">
          Our photo editing services can make a difference in your business.
          With guaranteed 98% accuracy and 99.5% adherence to deadlines, we
          process, enhance, improve and restore over 200,000 images every month!
          Backed by ISO 9001 quality processes and a 100% same price guarantee,
          we are the partner you can trust.
        </p>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow">
          Get in Touch
        </button>
      </div>
    </div>
    </div>
  );
};

export default OutsourcingPhotoEditing;
