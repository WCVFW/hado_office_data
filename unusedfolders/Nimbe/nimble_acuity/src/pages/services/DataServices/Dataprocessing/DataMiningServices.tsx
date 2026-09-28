import { motion } from 'framer-motion';
import { ArrowRight, Users, CheckCircle, ShieldCheck, Clock, Database, Layers, Server } from 'lucide-react';
import DSmainmenu from '../DSmainmenu';

export default function DataMiningServices() {
  return (
    <div className="w-full px-4 md:px-12 lg:px-24 py-12 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <DSmainmenu/>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6 leading-tight">
          Data Mining Services
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          Nimble Auity helps organizations extract valuable insights from large datasets to enable informed decisions, process improvement, and enhanced customer satisfaction.
        </p>
      </motion.div>

      {/* Services Section */}
      <div className="grid md:grid-cols-2 gap-10 mt-16">
        <div className="shadow-xl rounded-2xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 bg-white">
          <Database className="w-12 h-12 text-blue-600 mb-4" />
          <h2 className="text-2xl font-bold mb-3 text-gray-800">Data Mining Solutions</h2>
          <p className="text-gray-600">
            We use classification, clustering, regression, pattern recognition, and advanced techniques to extract insights from complex datasets for all industries.
          </p>
        </div>
        <div className="shadow-xl rounded-2xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 bg-white">
          <Server className="w-12 h-12 text-green-600 mb-4" />
          <h2 className="text-2xl font-bold mb-3 text-gray-800">Social Media & Other Mining</h2>
          <p className="text-gray-600">
            Our services cover social media, websites, white pages, multimedia, sensors, and more to provide precise insights for business and marketing strategies.
          </p>
        </div>
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
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-12">Nimble's Data Mining Process</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: 'Define Scope', desc: 'Outline project scope and gather client details.' },
            { step: 'Sample Project', desc: 'Execute a sample based on client inputs.' },
            { step: 'Effort & Pricing', desc: 'Estimate resources, time, and pricing.' },
            { step: 'Project Allotment', desc: 'Assign team and resources by Project Manager.' },
            { step: 'Execute Process', desc: 'Analyze and sort data as per project requirements.' },
            { step: 'Quality Assurance', desc: 'QA team ensures accuracy and relevance of data.' },
            { step: 'Regular Delivery', desc: 'Upload outputs on client portal at regular intervals.' }
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">Nimble Auity for Data Mining Excellence</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
            Partner with Nimble to gain specialized expertise, error-free deliverables, and actionable insights from your data while optimizing costs.
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