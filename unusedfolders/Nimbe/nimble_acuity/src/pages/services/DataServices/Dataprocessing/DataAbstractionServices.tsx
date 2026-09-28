import { motion } from 'framer-motion';
import { ArrowRight, Users, CheckCircle, ShieldCheck, Clock, FileText, Layers } from 'lucide-react';
import DSmainmenu from '../DSmainmenu';

export default function DataAbstractionServices() {
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
          Data Abstraction Services
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          Nimble Auity condenses large documents into concise summaries, providing executives with quick access to critical information for better decision-making.
        </p>
      </motion.div>

      {/* Key Sections */}
      <div className="grid md:grid-cols-2 gap-10 mt-16">
        <div className="shadow-xl rounded-2xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 bg-white">
          <FileText className="w-12 h-12 text-blue-600 mb-4" />
          <h2 className="text-2xl font-bold mb-3 text-gray-800">Data Abstraction Segments</h2>
          <p className="text-gray-600">
            Nimble Auity encapsulates large data chunks into four main segments: Introduction, Key Points, Conclusion, and Discussion. We ensure concise summaries without compromising on information quality.
          </p>
        </div>
        <div className="shadow-xl rounded-2xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 bg-white">
          <Layers className="w-12 h-12 text-green-600 mb-4" />
          <h2 className="text-2xl font-bold mb-3 text-gray-800">Relevant Information for Decision-Making</h2>
          <p className="text-gray-600">
            We provide executives with quick access to essential data about customers, employees, and products to support strategic decision-making and competitive advantage.
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
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-12">Nimble's Data Abstraction Process</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: 'Identify Requirements', desc: 'Our Knowledge Management Team identifies your knowledge requirements and resources.' },
            { step: 'Document Analysis', desc: 'Documents are read thoroughly to recognize critical subject matter points.' },
            { step: 'Abstraction Manuscript', desc: 'Domain experts develop summaries using automated tools for accuracy and speed.' },
            { step: 'Human Editing', desc: 'Experts edit and ensure quality, blending objective and subjective insights.' },
            { step: 'Final Review', desc: 'Project reviewed to confirm all critical information is captured concisely.' }
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">Nimble Auity for Data Abstraction Excellence</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
            Partner with Nimble for data abstraction services. Get concise, actionable insights from your documents, increasing productivity and supporting better business decisions.
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
