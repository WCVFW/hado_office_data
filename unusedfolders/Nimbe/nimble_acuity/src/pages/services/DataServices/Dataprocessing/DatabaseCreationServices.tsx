import { motion } from 'framer-motion';
import { ArrowRight, Users, CheckCircle, ShieldCheck, Clock, Database, ClipboardList, Layers } from 'lucide-react';
import DSmainmenu from "../DSmainmenu";

export default function DatabaseCreationServices() {
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
          Database Creation Services
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          Nimble Auity helps organizations build accurate, validated, and updated databases that
          power targeted campaigns. With over 26+ years of expertise, we deliver results with speed,
          precision, and affordability.
        </p>
      </motion.div>

      {/* Services Section */}
      <div className="grid md:grid-cols-2 gap-10 mt-16">
        <div className="shadow-xl rounded-2xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 bg-white">
          <Layers className="w-12 h-12 text-blue-600 mb-4" />
          <h2 className="text-2xl font-bold mb-3 text-gray-800">Creation & Maintenance of Databases</h2>
          <p className="text-gray-600">
            Business databases, directories, email addresses, contact numbers, and customer lists.
            Data collection primarily through secondary research.
          </p>
        </div>
        <div className="shadow-xl rounded-2xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 bg-white">
          <ClipboardList className="w-12 h-12 text-green-600 mb-4" />
          <h2 className="text-2xl font-bold mb-3 text-gray-800">Verification & Updates</h2>
          <p className="text-gray-600">
            Verification through dedicated call centers, ensuring higher accuracy and regular updates.
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mt-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-10">Benefits of Choosing Nimble Auity</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[ 
            { title: 'Experienced Professionals', desc: 'Experts with 5+ years experience handling complex databases.', icon: Users },
            { title: 'Accurate Data', desc: 'Data collected and verified with strict QA checks.', icon: CheckCircle },
            { title: 'Data Confidentiality', desc: 'Secure, confidential data handling and backup.', icon: ShieldCheck },
            { title: 'Swift Turnaround', desc: 'Multiple delivery centers for faster project completion.', icon: Clock },
            { title: 'Flexible Pricing', desc: 'Per project, per hour, or full-time equivalent options.', icon: Database }
          ].map((benefit, idx) => (
            <div key={idx} className="shadow-xl rounded-2xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 bg-white">
              <benefit.icon className="w-10 h-10 text-indigo-600 mb-3" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.desc}</p>
            </div>
          ))}
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
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-12">Nimble's Database Creation Process</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: 'Send Query', desc: 'Client sends query for database creation.' },
            { step: 'Engagement', desc: 'BD team contacts and understands requirements.' },
            { step: 'Assign Project', desc: 'Project assigned to data management experts.' },
            { step: 'Data Collection', desc: 'Data collected through secondary research.' },
            { step: 'Database Creation', desc: 'Team compiles, formats, and uploads data.' },
            { step: 'Client Review', desc: 'Client reviews and provides feedback.' },
            { step: 'Feedback Implementation', desc: 'Required changes are made quickly.' },
            { step: 'Quality Check', desc: 'QA team ensures accuracy and reliability.' },
            { step: 'Final Delivery', desc: 'Database delivered in preferred format.' }
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">Nimble Auity for Database Creation Excellence</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
            Partner with Nimble for database creation and management services. Get trained professionals, higher accuracy, and cost efficiency for your business campaigns.
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