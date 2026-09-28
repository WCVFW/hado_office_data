import { ReactNode, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import HeaderNav from "./HeaderNav";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Layout({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<{ email: string; name: string } | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let mounted = true;

    // update cart count helper
    function updateCartCount() {
      try {
        const c = JSON.parse(localStorage.getItem('bizsuite_cart') || '[]');
        const el = document.getElementById('cart-count');
        if (el) el.textContent = String(Array.isArray(c) ? c.length : 0);
      } catch {
        const el = document.getElementById('cart-count');
        if (el) el.textContent = '0';
      }
    }

    // initialize
    updateCartCount();

    // listen to storage events (other tabs) and custom event
    function onStorage() { updateCartCount(); }
    function onCartUpdated() { updateCartCount(); }
    window.addEventListener('storage', onStorage);
    window.addEventListener('cart_updated', onCartUpdated as EventListener);

    // quick client-side fallback so header shows account immediately after local login
    try {
      const lsEmail = localStorage.getItem("bizsuite_user_email");
      const lsName = localStorage.getItem("bizsuite_user_name");
      if (lsEmail && mounted) {
        setUser({ email: lsEmail, name: lsName || "User" });
      }
    } catch {}

    (async () => {
      try {
        const r = await fetch('/api/auth/me', { credentials: 'include' });
        if (!mounted) return;
        if (!r.ok) {
          // keep localStorage-based user if present
          return;
        }
        const data = await r.json();
        if (!mounted) return;
        if (data && data.email) setUser(data);
      } catch (err) {
        // network or other error — don't block rendering
      }
    })();
    return () => {
      mounted = false;
      window.removeEventListener('storage', onStorage);
      window.removeEventListener('cart_updated', onCartUpdated as EventListener);
    };
  }, []);

  async function logout() {
    try {
      await fetch("/api/auth/logout", { method: "POST", credentials: 'include' });
    } catch {}
    localStorage.removeItem("bizsuite_user_email");
    localStorage.removeItem("bizsuite_user_name");
    // close menu if open
    setMenuOpen(false);
    location.reload();
  }

  // handle click outside to close dropdown
  useEffect(() => {
    function onDocClick() {
      setMenuOpen(false);
    }
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white text-black">
        <div className="container flex h-16 items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-2xl text-gray-800 hover:text-[#DB3269] transition-colors duration-300"
          >
            <span className="tracking-wide">
              <span className="text-[#DB3269]">C</span>alzone{" "}
              <span className="text-[#DB3269]">F</span>inancial{" "}
              <span className="text-[#DB3269]">S</span>ervice
            </span>
          </Link>
          <div className="hidden md:block">
            <HeaderNav />
          </div>
          <div className="md:hidden">
            <select
              className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black"
              onChange={(e) => {
                const v = e.target.value;
                if (v) window.location.href = v;
              }}
            >
              <option value="">Menu</option>
              <option value="#services">Business Setup</option>
              <option value="#services">Documentation</option>
              <option value="/admin">Admin</option>
            </select>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-black bg-white px-4 py-2 text-sm font-medium text-black shadow hover:bg-gray-50"
            >
              Get Started
            </a>
            <Link to="/cart" className="inline-flex items-center justify-center rounded-md border bg-white px-3 py-2 text-sm font-medium text-black shadow hover:bg-gray-50">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="10" cy="20" r="1" fill="currentColor" />
                <circle cx="18" cy="20" r="1" fill="currentColor" />
              </svg>
              Cart <span className="ml-2 inline-block bg-emerald-600 text-white text-xs px-2 py-0.5 rounded" id="cart-count">0</span>
            </Link>

            {user ? (
            <div className="relative" id="account-menu">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setMenuOpen((s) => !s);
                }}
                aria-expanded={menuOpen}
                aria-haspopup="menu"
                className="inline-flex items-center gap-2 rounded-md border border-black bg-white px-4 py-2 text-sm font-medium text-black shadow hover:bg-gray-50"
              >
                <span>{user.name || user.email}</span>
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 7l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div onClick={(e) => e.stopPropagation()} className={`absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50 ${menuOpen ? '' : 'hidden'}`} style={{ minWidth: 180 }}>
                <ul className="py-1 text-sm text-gray-700" role="menu">
                  <li role="none">
                    <Link role="menuitem" to="/my-requests" className="block px-3 py-2 hover:bg-gray-100">My Requests</Link>
                  </li>
                  <li role="none">
                    <Link role="menuitem" to="/checkout" className="block px-3 py-2 hover:bg-gray-100">New Payment</Link>
                  </li>
                  <li role="none">
                    <Link role="menuitem" to="/my-requests" className="block px-3 py-2 hover:bg-gray-100">Payments &amp; Services</Link>
                  </li>
                  <li role="none">
                    <button role="menuitem" onClick={logout} className="w-full text-left px-3 py-2 hover:bg-gray-100">Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="inline-flex items-center justify-center rounded-md border border-black bg-white px-4 py-2 text-sm font-medium text-black shadow hover:bg-gray-50"
            >
              Login
            </Link>
          )}
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
