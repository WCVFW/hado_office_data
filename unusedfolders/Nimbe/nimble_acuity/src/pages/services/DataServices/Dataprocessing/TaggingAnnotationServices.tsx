import { motion } from 'framer-motion';
import { MapPin, Layers, Image, FileText, Globe, Search } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import DSmainmenu from '../DSmainmenu';

export default function TaggingAnnotationServices() {
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
          Tagging and Annotation Services
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          Nimble Auity offers advanced image tagging and annotation services to help businesses streamline visual content and optimize online presence.
        </p>
      </motion.div>

      {/* Services Offered */}
      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {[
          { icon: MapPin, title: 'Geo-Tagging', desc: 'Location mapping projects for sharing important geographical points.' },
          { icon: Layers, title: 'Multi-label Classification', desc: 'Identify multiple elements within a single image effectively.' },
          { icon: Image, title: 'Image Detailing', desc: 'Display multiple views and angles for better image analysis.' },
          { icon: FileText, title: 'Image Descriptor', desc: 'Filter search results based on product characteristics and transcribe inscriptions.' },
          { icon: Globe, title: 'Text Translation', desc: 'Provide image-based text translations for multiple language scenarios.' },
          { icon: Search, title: 'Image Retrieval', desc: 'Enhance image retrieval by matching queries with annotations.' }
        ].map((item, idx) => (
          <div key={idx} className="shadow-lg rounded-2xl p-6 flex flex-col items-center text-center bg-white hover:scale-105 transition-transform duration-300">
            <item.icon className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="grid md:grid-cols-5 gap-6 mt-20 text-center">
        {[
          { label: 'Cost Reduction', value: '40%' },
          { label: 'Faster Turnaround', value: '8-24 Hrs' },
          { label: 'Satisfied Clients', value: '500+' },
          { label: 'Skilled Data Experts', value: '350+' },
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
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-12">Nimble Tagging and Annotation Workflow</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: 'Defining Scope', desc: 'Define scope of work and project details.' },
            { step: 'Sample Project', desc: 'Execute sample project based on client inputs.' },
            { step: 'Effort & Pricing', desc: 'Indicate time, resources and pricing.' },
            { step: 'Project Assignment', desc: 'Set up team and resources by Project Manager.' },
            { step: 'Execute Process', desc: 'Analyze and sort all data according to service.' },
            { step: 'Quality Check', desc: 'QA team ensures accuracy and completeness of all fields.' },
            { step: 'Regular Delivery', desc: 'Upload output to client portal at scheduled intervals.' }
          ].map((item, idx) => (
            <div key={idx} className="shadow-lg rounded-2xl p-6 text-center bg-white hover:shadow-2xl transition">
              <h3 className="font-semibold text-lg text-gray-700 mb-2">{item.step}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-20 text-center flex justify-center">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">Partner with Nimble Auity</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
            Contact Nimble Auity for expert Tagging and Annotation services to optimize your web and image data efficiently.
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