import { useEffect, useState } from "react";
import SEO from "@/components/SEO";

function AuthForm({ mode }: { mode: "register" | "login" }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const isRegister = mode === "register";

  useEffect(() => {
    setEmail(localStorage.getItem("bizsuite_user_email") || "");
    setName(localStorage.getItem("bizsuite_user_name") || "");
  }, []);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
          const url = isRegister ? "/api/auth/register" : "/api/auth/login";
          const body: any = { email, password };
          if (isRegister) body.name = name || "User";
          const r = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          });
          if (!r.ok) {
            const err = await r.json().catch(() => ({}));
            throw new Error(err?.error || "Authentication failed");
          }
          const data = await r.json();
          localStorage.setItem("bizsuite_user_email", data.email);
          localStorage.setItem("bizsuite_user_name", data.name || "");
          // ensure profile exists on server (best-effort)
          try {
            await fetch("/api/user/profile", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email: data.email, name: data.name || name }),
            });
          } catch {}
          const sp = new URLSearchParams(window.location.search);
          const redirect = sp.get("redirect") || "/my-requests";
          window.location.href = redirect;
        } catch (err) {
          // show minimal feedback
          // keep UX simple: alert on error
          // eslint-disable-next-line no-alert
          alert((err as any)?.message || "Authentication failed");
        } finally {
          setLoading(false);
        }
      }}
      className="space-y-3"
    >
      {isRegister && (
        <input
          className="w-full rounded-md border px-3 py-2"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      )}
      <input
        className="w-full rounded-md border px-3 py-2"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className="w-full rounded-md border px-3 py-2"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button
        className="w-full rounded-md bg-emerald-600 text-white px-4 py-2 hover:bg-emerald-700"
        type="submit"
      >
        {loading ? "Please wait..." : isRegister ? "Create Account" : "Login"}
      </button>
    </form>
  );
}

export default function UserLogin() {
  // simple page that only displays sign up / sign in
  return (
    <div>
      <SEO title="Sign in / Sign up | BizSuite" description="Sign in or create an account to manage requests and payments." />
      <header className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white py-16">
        <div className="container">
          <h1 className="text-4xl font-bold">Sign in or Create an Account</h1>
          <p className="mt-2 text-white/80">Access your orders, payment history and saved details.</p>
        </div>
      </header>

      <div className="container py-10 grid md:grid-cols-2 gap-8">
        <div className="rounded-xl border bg-white p-6">
          <h2 className="font-semibold text-lg mb-3">New here? Create an account</h2>
          <AuthForm mode="register" />
        </div>

        <div className="rounded-xl border bg-white p-6">
          <h2 className="font-semibold text-lg mb-3">Already have an account? Login</h2>
          <AuthForm mode="login" />
        </div>
      </div>
    </div>
  );
}
