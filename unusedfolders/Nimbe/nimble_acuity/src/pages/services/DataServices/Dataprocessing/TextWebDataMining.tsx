import { motion } from 'framer-motion';
import { ArrowRight, Database, Layers, FileText, Server, Users } from 'lucide-react';
import DSmainmenu from '../DSmainmenu';

export default function TextWebDataMining() {
  return (
    <div className="w-full px-4 md:px-12 lg:px-24 py-12 bg-gray-50">
      {/* Hero Section */}
      <DSmainmenu/>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6 leading-tight">
          Text and Web Data Mining Services
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          Nimble Auity provides efficient text and web data mining services, enabling businesses to extract valuable insights and gain a competitive edge.
        </p>
      </motion.div>

      {/* Services Section */}
      <div className="grid md:grid-cols-2 gap-10 mt-16">
        {[
          { icon: FileText, title: 'Multimedia Data Mining', desc: 'Extract data from video, audio, text, speech, image, and web to reveal hidden insights for decision-making.' },
          { icon: Server, title: 'Web Service Mining', desc: 'Retrieve structured and unstructured data from servers, page content, and link structures to enhance your services.' },
          { icon: Database, title: 'Excel & Database Mining', desc: 'Interpret numerical and database data into actionable insights for business modeling and predictive analysis.' },
          { icon: Layers, title: 'Directories, Ecommerce & Networking Sites', desc: 'Organize data extracted from directories, social media, and e-commerce platforms for comprehensive analysis.' },
          { icon: Users, title: 'Educational & Business Data Mining', desc: 'Analyze learning and business patterns to generate meaningful insights and optimize operations.' }
        ].map((item, idx) => (
          <div key={idx} className="shadow-xl rounded-2xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 bg-white">
            <item.icon className="w-12 h-12 text-indigo-600 mb-4" />
            <h2 className="text-2xl font-bold mb-3 text-gray-800">{item.title}</h2>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="grid md:grid-cols-5 gap-6 mt-20 text-center">
        {[
          { label: 'Cost Reduction', value: '40%' },
          { label: 'Faster Turnaround', value: '8-24 Hrs' },
          { label: 'Satisfied Clients', value: '500+' },
          { label: 'Skilled Experts', value: '350+' },
          { label: 'Accuracy', value: '99%' }
        ].map((item, idx) => (
          <div key={idx} className="rounded-2xl shadow-lg p-6">
            <p className="text-3xl font-extrabold text-indigo-700">{item.value}</p>
            <p className="text-gray-600 text-sm mt-1">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Process Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-12">Nimble's Text & Web Data Mining Process</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: 'Define Scope', desc: 'Outline the project scope and gather client requirements.' },
            { step: 'Sample Project', desc: 'Execute sample projects to validate methods and quality.' },
            { step: 'Effort & Pricing', desc: 'Estimate resources, time, and cost for project execution.' },
            { step: 'Project Allotment', desc: 'Assign team and resources under project management.' },
            { step: 'Execute Process', desc: 'Analyze, extract, and organize data as per project scope.' },
            { step: 'Quality Assurance', desc: 'Ensure data accuracy and relevance through QA checks.' },
            { step: 'Regular Delivery', desc: 'Deliver results on client portal in preferred formats.' }
          ].map((item, idx) => (
            <div key={idx} className="shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl transition bg-white">
              <h3 className="font-semibold text-lg text-gray-700 mb-2">{item.step}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-20 text-center flex justify-center">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">Nimble Auity for Web Data Mining</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
            Partner with Nimble to extract actionable insights from text and web data efficiently, ensuring faster decision-making and business growth.
          </p>
          <div className="flex justify-center">
            <button className="px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 bg-indigo-600 text-white hover:bg-indigo-700 transition">
              Contact Us <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
