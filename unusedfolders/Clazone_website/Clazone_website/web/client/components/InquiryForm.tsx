import { useState } from "react";

export default function InquiryForm({
  serviceLabel,
  serviceId,
}: {
  serviceLabel?: string;
  serviceId?: number;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(
    serviceLabel ? `Interested in ${serviceLabel}` : "",
  );
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
          const r = await fetch("/api/inquiries", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name,
              email,
              phone,
              message,
              service_id: serviceId,
            }),
          });
          if (!r.ok) throw new Error("Failed to submit");
          setDone(true);
          setName("");
          setEmail("");
          setPhone("");
          setMessage(serviceLabel ? `Interested in ${serviceLabel}` : "");
        } finally {
          setSubmitting(false);
        }
      }}
      className="flex flex-col gap-3"
    >
      <input
        className="rounded-md border px-3 py-2"
        placeholder="Full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="rounded-md border px-3 py-2"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className="rounded-md border px-3 py-2"
        placeholder="Phone (optional)"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <textarea
        className="rounded-md border px-3 py-2 h-24"
        placeholder="What do you need?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        disabled={submitting}
        className="rounded-md bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700"
      >
        {submitting ? "Submitting..." : "Get Started"}
      </button>
      {done && (
        <p className="text-sm text-green-700">
          Thanks! We’ll reach out shortly.
        </p>
      )}
    </form>
  );
}
