import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Service, Inquiry } from "@shared/api";
import { toast } from "sonner";
import { formatINR } from "@/lib/currency";
import React, { useEffect, useMemo, useState } from "react";

const TOKEN_KEY = "bizsuite_admin_token";

export default function Admin() {
  const qc = useQueryClient();
  const [token, setToken] = useState<string>(
    localStorage.getItem(TOKEN_KEY) || "",
  );
  const headers = useMemo(
    () => (token ? { Authorization: `Bearer ${token}` } : {}),
    [token],
  );

  useEffect(() => {
    localStorage.setItem(TOKEN_KEY, token);
  }, [token]);

  const { data: services } = useQuery<Service[]>({
    queryKey: ["admin-services"],
    queryFn: async () => {
      const res = await fetch("/api/admin/services", { headers });
      if (!res.ok) throw new Error("Unauthorized or failed to fetch");
      return res.json();
    },
    enabled: !!token,
  });

  const { data: metrics } = useQuery<{
    services: number;
    inquiries: number;
    orders: number;
    revenue: number;
  }>({
    queryKey: ["metrics"],
    queryFn: async () => {
      const res = await fetch("/api/admin/metrics", { headers });
      if (!res.ok) throw new Error("Unauthorized or failed to fetch");
      return res.json();
    },
    enabled: !!token,
  });

  const { data: inquiries } = useQuery<Inquiry[]>({
    queryKey: ["inquiries"],
    queryFn: async () => {
      const res = await fetch("/api/admin/inquiries", { headers });
      if (!res.ok) throw new Error("Unauthorized or failed to fetch");
      return res.json();
    },
    enabled: !!token,
  });

  const deleteInquiryMutation = useMutation({
    mutationFn: async (id: number) => {
      const res = await fetch(`/api/admin/inquiries/${id}`, {
        method: "DELETE",
        headers,
      });
      if (!res.ok) throw new Error("Failed to delete inquiry");
      return res.json();
    },
    onSuccess: () => {
      toast.success("Inquiry deleted");
      qc.invalidateQueries({ queryKey: ["inquiries"] });
    },
  });

  const createMutation = useMutation({
    mutationFn: async (payload: Partial<Service>) => {
      const res = await fetch("/api/admin/services", {
        method: "POST",
        headers: { "Content-Type": "application/json", ...headers },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to create service");
      return res.json();
    },
    onSuccess: () => {
      toast.success("Service created");
      qc.invalidateQueries({ queryKey: ["admin-services"] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: number;
      data: Partial<Service>;
    }) => {
      const res = await fetch(`/api/admin/services/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", ...headers },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to update service");
      return res.json();
    },
    onSuccess: () => {
      toast.success("Service updated");
      qc.invalidateQueries({ queryKey: ["admin-services"] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const res = await fetch(`/api/admin/services/${id}`, {
        method: "DELETE",
        headers,
      });
      if (!res.ok) throw new Error("Failed to delete service");
      return res.json();
    },
    onSuccess: () => {
      toast.success("Service deleted");
      qc.invalidateQueries({ queryKey: ["admin-services"] });
    },
  });

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold">Admin Panel</h1>
      <p className="mt-2 text-muted-foreground">
        Provide the admin token to manage services and view inquiries.
      </p>

      {metrics && (
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { k: "Services", v: metrics.services },
            { k: "Inquiries", v: metrics.inquiries },
            { k: "Orders", v: metrics.orders },
            { k: "Revenue", v: formatINR(metrics.revenue) },
          ].map((m) => (
            <div key={m.k} className="rounded-lg border p-4">
              <p className="text-sm text-muted-foreground">{m.k}</p>
              <p className="text-2xl font-bold">{m.v as any}</p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 grid gap-6 md:grid-cols-[1fr_2fr]">
        <section className="rounded-lg border p-5">
          <h2 className="font-semibold mb-3">Authentication</h2>
          <input
            type="password"
            placeholder="Admin token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="w-full rounded-md border bg-background px-3 py-2"
          />
          <p className="text-xs text-muted-foreground mt-2">
            Set ADMIN_TOKEN env on the server for production. Leave empty in dev
            to bypass.
          </p>

          <h2 className="font-semibold mt-6 mb-3">Create Service</h2>
          <ServiceForm
            onSubmit={(data) => createMutation.mutate(data)}
            submitting={createMutation.isPending}
          />
        </section>

        <section className="rounded-lg border p-5">
          <h2 className="font-semibold mb-3">Services</h2>
          {!token ? (
            <p className="text-sm text-muted-foreground">
              Enter admin token to load services.
            </p>
          ) : !services ? (
            <p>Loading...</p>
          ) : services.length === 0 ? (
            <p className="text-sm text-muted-foreground">No services yet.</p>
          ) : (
            <ul className="divide-y">
              {services.map((s) => (
                <ServiceRow
                  key={s.id}
                  s={s}
                  onToggleActive={() =>
                    updateMutation.mutate({
                      id: s.id,
                      data: { active: !s.active },
                    })
                  }
                  onDelete={() => deleteMutation.mutate(s.id)}
                  onSave={(data) => updateMutation.mutate({ id: s.id, data })}
                />
              ))}
            </ul>
          )}

          <h2 className="font-semibold mt-8 mb-3">Inquiries</h2>
          {!token ? (
            <p className="text-sm text-muted-foreground">
              Enter admin token to load inquiries.
            </p>
          ) : !inquiries ? (
            <p>Loading...</p>
          ) : inquiries.length === 0 ? (
            <p className="text-sm text-muted-foreground">No inquiries yet.</p>
          ) : (
            <ul className="divide-y">
              {inquiries.map((q) => (
                <li
                  key={q.id}
                  className="py-3 flex items-start justify-between gap-4"
                >
                  <div>
                    <p className="font-medium">
                      {q.name} • {q.email} {q.phone ? `• ${q.phone}` : ""}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Service ID: {q.service_id ?? "—"} •{" "}
                      {new Date(q.created_at).toLocaleString()}
                    </p>
                    <p className="text-sm mt-1 max-w-prose">{q.message}</p>
                  </div>
                  <button
                    onClick={() => deleteInquiryMutation.mutate(q.id)}
                    className="rounded-md bg-destructive text-destructive-foreground px-3 py-1 text-sm hover:opacity-90"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}

function ServiceForm({
  onSubmit,
  submitting,
}: {
  onSubmit: (data: Partial<Service>) => void;
  submitting: boolean;
}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [active, setActive] = useState(true);

  return (
    <form
      className="space-y-3"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ name, description, price, active });
        setName("");
        setDescription("");
        setPrice(0);
        setActive(true);
      }}
    >
      <input
        className="w-full rounded-md border bg-background px-3 py-2"
        placeholder="Service name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        className="w-full rounded-md border bg-background px-3 py-2"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <div className="flex gap-3">
        <input
          type="number"
          step="0.01"
          className="w-40 rounded-md border bg-background px-3 py-2"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <label className="inline-flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={active}
            onChange={(e) => setActive(e.target.checked)}
          />{" "}
          Active
        </label>
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-50"
      >
        {submitting ? "Creating..." : "Create"}
      </button>
    </form>
  );
}

function ServiceRow({
  s,
  onToggleActive,
  onDelete,
  onSave,
}: {
  s: Service;
  onToggleActive: () => void;
  onDelete: () => void;
  onSave: (data: Partial<Service>) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(s.name);
  const [description, setDescription] = useState(s.description);
  const [price, setPrice] = useState<number>(s.price);

  if (!editing) {
    return (
      <li className="py-4 flex items-start justify-between gap-4">
        <div>
          <p className="font-medium">{s.name}</p>
          <p className="text-sm text-muted-foreground">
            {formatINR(s.price)} • {s.active ? "Active" : "Inactive"}
          </p>
          <p className="text-sm mt-1 text-muted-foreground max-w-prose">
            {s.description}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setEditing(true)}
            className="rounded-md border px-3 py-1 text-sm hover:bg-secondary"
          >
            Edit
          </button>
          <button
            onClick={onToggleActive}
            className="rounded-md border px-3 py-1 text-sm hover:bg-secondary"
          >
            {s.active ? "Disable" : "Enable"}
          </button>
          <button
            onClick={onDelete}
            className="rounded-md bg-destructive text-destructive-foreground px-3 py-1 text-sm hover:opacity-90"
          >
            Delete
          </button>
        </div>
      </li>
    );
  }

  return (
    <li className="py-4">
      <form
        className="space-y-3"
        onSubmit={(e) => {
          e.preventDefault();
          onSave({ name, description, price });
          setEditing(false);
        }}
      >
        <input
          className="w-full rounded-md border bg-background px-3 py-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          className="w-full rounded-md border bg-background px-3 py-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <div className="flex items-center gap-3">
          <input
            type="number"
            step="0.01"
            className="w-40 rounded-md border bg-background px-3 py-2"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
          <div className="ml-auto flex gap-2">
            <button
              type="button"
              onClick={() => setEditing(false)}
              className="rounded-md border px-3 py-1 text-sm hover:bg-secondary"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-primary text-primary-foreground px-3 py-1 text-sm hover:opacity-90"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </li>
  );
}
