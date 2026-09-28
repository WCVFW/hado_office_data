import { Link } from 'react-router-dom'
import { services } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-navy-950 text-slate-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <span className="grid place-items-center h-9 w-9 rounded-md bg-gradient-to-br from-gold-400 to-gold-500 text-navy-950 font-heading font-extrabold text-sm">
                V
              </span>
              <span className="font-heading font-bold text-lg text-white">Veritaz</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Property. Finance. Resolution. A Public Limited Company offering integrated property,
              loan, NPA resolution, debt collection and financial facilitation advisory across India.
            </p>
          </div>

          <div>
            <h4 className="text-white font-heading font-semibold text-sm tracking-wide uppercase mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="hover:text-gold-300 transition-colors">
                    {s.navTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-semibold text-sm tracking-wide uppercase mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="hover:text-gold-300 transition-colors">About Us</Link></li>
              <li><Link to="/for-banks-nbfcs" className="hover:text-gold-300 transition-colors">For Banks &amp; NBFCs</Link></li>
              <li><Link to="/who-we-serve" className="hover:text-gold-300 transition-colors">Who We Serve</Link></li>
              <li><Link to="/why-veritaz" className="hover:text-gold-300 transition-colors">Why Veritaz</Link></li>
              <li><Link to="/faq" className="hover:text-gold-300 transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="hover:text-gold-300 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-semibold text-sm tracking-wide uppercase mb-4">Legal</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/compliance-disclaimer" className="hover:text-gold-300 transition-colors">Compliance &amp; Disclaimer</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-gold-300 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-use" className="hover:text-gold-300 transition-colors">Terms of Use</Link></li>
              <li><Link to="/contact#grievance" className="hover:text-gold-300 transition-colors">Grievance Redressal</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-navy-700/60 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {year} Veritaz Consultancy Limited. All rights reserved.</p>
          <p className="text-center md:text-right max-w-2xl">
            Veritaz Consultancy Limited is not a bank, NBFC, ARC, law firm, registered valuer or insolvency
            professional. All services are advisory, facilitation and coordination in nature. See{' '}
            <Link to="/compliance-disclaimer" className="underline hover:text-gold-300">Compliance &amp; Disclaimer</Link>.
          </p>
        </div>
      </div>
    </footer>
  )
}
