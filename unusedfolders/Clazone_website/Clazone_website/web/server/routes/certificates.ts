import { RequestHandler } from "express";
import { db } from "../db";

export type Certificate = {
  id: number;
  user_email: string;
  title: string;
  issued_at: string; // ISO
  reference: string | null;
  file_url: string | null;
};

let memCertificates: Certificate[] = [];
export const getMemCertificates = () => memCertificates;
let memNextCertId = 1;

export const createCertificate: RequestHandler = async (req, res) => {
  const { user_email, title, issued_at, reference, file_url } =
    req.body as Partial<Certificate>;
  if (!user_email || !title)
    return res.status(400).json({ error: "user_email and title are required" });
  const issued = issued_at ?? new Date().toISOString();
  if (!db.enabled || !db.pool) {
    const cert: Certificate = {
      id: memNextCertId++,
      user_email,
      title,
      issued_at: issued,
      reference: reference ?? null,
      file_url: file_url ?? null,
    };
    memCertificates.unshift(cert);
    return res.status(201).json(cert);
  }
  const [result] = await db.pool.query(
    "INSERT INTO certificates (user_email, title, issued_at, reference, file_url) VALUES (?, ?, ?, ?, ?)",
    [user_email, title, issued, reference ?? null, file_url ?? null],
  );
  // @ts-ignore
  const id = result.insertId as number;
  const [rows] = await db.pool.query(
    "SELECT id, user_email, title, issued_at, reference, file_url FROM certificates WHERE id = ?",
    [id],
  );
  // @ts-ignore
  const row = Array.isArray(rows) ? rows[0] : rows;
  res.status(201).json(row);
};

export const listSelfCertificates: RequestHandler = async (req, res) => {
  const email = (req.query.email as string | undefined)?.trim();
  if (!email) return res.status(400).json({ error: "email is required" });
  if (!db.enabled || !db.pool) {
    const items = memCertificates.filter(
      (c) => c.user_email.toLowerCase() === email.toLowerCase(),
    );
    return res.json(items);
  }
  const [rows] = await db.pool.query(
    "SELECT id, user_email, title, issued_at, reference, file_url FROM certificates WHERE user_email = ? ORDER BY issued_at DESC",
    [email],
  );
  res.json(rows);
};
