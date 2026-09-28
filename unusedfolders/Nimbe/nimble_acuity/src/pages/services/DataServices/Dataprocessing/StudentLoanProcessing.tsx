import { motion } from 'framer-motion';
import { ArrowRight, FileText, Users, CheckCircle, Layers, Database } from 'lucide-react';
import DSmainmenu from '../DSmainmenu';

export default function StudentLoanProcessing() {
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
          Student Loan Processing Services
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          Nimble Auity helps loan providers and banks accelerate application processes, reduce manual effort, and ensure accurate data entry.
        </p>
      </motion.div>

      {/* Partnering Benefits Section */}
      <div className="grid md:grid-cols-2 gap-10 mt-16">
        {[
          'Accelerate student loan applications and eliminate delays',
          'Get loans to the best applicants quicker',
          'Access all verification documents in one view',
          'Reduce paper processing for loan forms',
          'Eliminate manual data entry time and effort'
        ].map((item, idx) => (
          <div key={idx} className="shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl transition bg-white">
            <CheckCircle className="w-10 h-10 text-indigo-600 mx-auto mb-3" />
            <p className="text-gray-700 font-medium">{item}</p>
          </div>
        ))}
      </div>

      {/* Services Section */}
      <div className="mt-20 grid md:grid-cols-3 gap-8">
        {[
          { icon: FileText, title: 'Student Loan Information', desc: 'Validate student loan applications, correct discrepancies, and ensure accuracy.' },
          { icon: Users, title: 'Student Account Creation', desc: 'Create student accounts and systematically enter all credentials in CRM portals.' },
          { icon: Layers, title: 'Document Posting', desc: 'Handle loan processing documents and liaise between students and loan providers.' }
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
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-12">Nimble Student Loan Processing Workflow</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: 'Logging On', desc: 'Access client CRM portals and download student information PDFs.' },
            { step: 'Filling Information', desc: 'Enter data accurately into CRM and ensure document completion.' },
            { step: 'Submission & Verification', desc: 'Attach and submit documents, check paystubs, letters, and award letters.' },
            { step: 'Account Creation', desc: 'Create student accounts and upload PDFs in the CRM system.' },
            { step: 'Input & Output Format', desc: 'Enter data in PDF templates and upload back to the portal.' }
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">Partner with Nimble Auity</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
            Outsource student loan processing to Nimble for accurate, reliable, and cost-effective data entry services.
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