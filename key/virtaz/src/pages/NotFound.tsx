import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-mist-50">
      <div className="text-center px-5">
        <span className="font-heading font-extrabold text-7xl text-navy-100">404</span>
        <h1 className="mt-4 font-heading font-bold text-2xl text-navy-950">Page not found</h1>
        <p className="mt-2 text-slate-600">The page you're looking for doesn't exist or has moved.</p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-gold-500 to-gold-400 px-6 py-3 text-sm font-semibold text-navy-950 hover:brightness-110 transition-all"
        >
          Back to Home
        </Link>
      </div>
    </section>
  )
}
