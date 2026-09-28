import { RequestHandler } from "express";
import { db } from "../db";
import type { Inquiry } from "@shared/api";
import nodemailer from "nodemailer";

let memInquiries: Inquiry[] = [];
let memNextInquiryId = 1;
export const getMemInquiries = () => memInquiries;

async function trySendEmail({
  name,
  email,
  phone,
  message,
  service_id,
}: Partial<Inquiry>) {
  const to = process.env.INQUIRIES_TO_EMAIL || "wcvfw2019@gmail.com";
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = process.env.SMTP_PORT
    ? Number(process.env.SMTP_PORT)
    : undefined;
  if (!host || !user || !pass) return; // SMTP not configured

  try {
    const transporter = nodemailer.createTransport({
      host,
      port: port ?? 587,
      secure: port === 465,
      auth: { user, pass },
    });

    const html = `
      <p>New inquiry received:</p>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone ?? "-"}</li>
        <li><strong>Service ID:</strong> ${service_id ?? "-"}</li>
        <li><strong>Message:</strong> <pre>${String(message)}</pre></li>
      </ul>
    `;

    await transporter.sendMail({
      from: user,
      to,
      subject: `New inquiry from ${name} <${email}>`,
      html,
    });
  } catch (err) {
    console.error("Failed to send inquiry email", err);
  }
}

export const createInquiry: RequestHandler = async (req, res) => {
  const { name, email, phone, message, service_id } =
    req.body as Partial<Inquiry> & { service_id?: number };
  if (!name || !email || !message)
    return res
      .status(400)
      .json({ error: "name, email, and message are required" });
  if (!db.enabled || !db.pool) {
    const inquiry: Inquiry = {
      id: memNextInquiryId++,
      name,
      email,
      phone: phone ?? null,
      message,
      service_id: service_id ?? null,
      created_at: new Date().toISOString(),
    } as Inquiry;
    memInquiries.unshift(inquiry);
    // Try to send email in background (non-blocking)
    trySendEmail(inquiry).catch(() => {});
    return res.status(201).json(inquiry);
  }
  const [result] = await db.pool.query(
    "INSERT INTO inquiries (name, email, phone, message, service_id) VALUES (?, ?, ?, ?, ?)",
    [name, email, phone ?? null, message, service_id ?? null],
  );
  // @ts-ignore
  const id = result.insertId as number;
  const [rows] = await db.pool.query(
    "SELECT id, name, email, phone, message, service_id, created_at FROM inquiries WHERE id = ?",
    [id],
  );
  // @ts-ignore
  const row = Array.isArray(rows) ? rows[0] : rows;
  // Send email (best-effort)
  trySendEmail(row as any).catch(() => {});
  res.status(201).json(row);
};

export const listInquiries: RequestHandler = async (_req, res) => {
  if (!db.enabled || !db.pool) return res.json(memInquiries);
  const [rows] = await db.pool.query(
    "SELECT id, name, email, phone, message, service_id, created_at FROM inquiries ORDER BY id DESC",
  );
  res.json(rows);
};

export const listSelfInquiries: RequestHandler = async (req, res) => {
  const email = (req.query.email as string | undefined)?.trim().toLowerCase();
  if (!email) return res.status(400).json({ error: "email is required" });
  if (!db.enabled || !db.pool) {
    const filtered = memInquiries.filter(
      (q) => q.email.toLowerCase() === email,
    );
    return res.json(filtered);
  }
  const [rows] = await db.pool.query(
    "SELECT id, name, email, phone, message, service_id, created_at FROM inquiries WHERE LOWER(email) = LOWER(?) ORDER BY id DESC",
    [email],
  );
  res.json(rows);
};

export const deleteInquiry: RequestHandler = async (req, res) => {
  const id = Number(req.params.id);
  if (!id) return res.status(400).json({ error: "invalid id" });
  if (!db.enabled || !db.pool) {
    const idx = memInquiries.findIndex((q) => q.id === id);
    if (idx === -1) return res.status(404).json({ error: "not found" });
    const removed = memInquiries.splice(idx, 1)[0];
    return res.json(removed);
  }
  await db.pool.query("DELETE FROM inquiries WHERE id = ?", [id]);
  res.json({ ok: true });
};
