import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { initDB } from "./db";
import cookieParser from "cookie-parser";
import {
  register as authRegister,
  login as authLogin,
  me as authMe,
  logout as authLogout,
} from "./routes/auth";
import {
  listServices,
  adminListServices,
  createService,
  updateService,
  deleteService,
} from "./routes/services";
import {
  createInquiry,
  listInquiries,
  deleteInquiry,
  listSelfInquiries,
} from "./routes/inquiries";
import { adminAuth } from "./middleware/adminAuth";
import { createOrder, listSelfOrders } from "./routes/orders";
import { upsertProfile, getProfile } from "./routes/users";
import { listSelfCertificates } from "./routes/certificates";
import { adminMetrics } from "./routes/admin";
import {
  createRazorpayOrder,
  getPublicKey,
  verifyPayment,
  webhook as razorpayWebhook,
} from "./routes/payments";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Initialize DB (non-blocking)
  initDB().catch((e) => console.error("DB init error", e));

  // Health and demo
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });
  app.get("/api/demo", handleDemo);

  // Public API
  app.get("/api/services", listServices);
  app.post("/api/inquiries", createInquiry);
  app.post("/api/orders", createOrder);
  app.post("/api/user/profile", upsertProfile);
  app.get("/api/user/profile", getProfile);
  app.get("/api/certificates/self", listSelfCertificates);

  // Auth
  app.post("/api/auth/register", authRegister);
  app.post("/api/auth/login", authLogin);
  app.get("/api/auth/me", authMe);
  app.post("/api/auth/logout", authLogout);

  // Admin API (protected)
  app.get("/api/admin/services", adminAuth, adminListServices);
  app.post("/api/admin/services", adminAuth, createService);
  app.patch("/api/admin/services/:id", adminAuth, updateService);
  app.delete("/api/admin/services/:id", adminAuth, deleteService);
  app.get("/api/admin/inquiries", adminAuth, listInquiries);
  app.delete("/api/admin/inquiries/:id", adminAuth, deleteInquiry);
  app.get("/api/admin/metrics", adminAuth, adminMetrics);

  // Public user self-service endpoint
  app.get("/api/inquiries/self", listSelfInquiries);
  app.get("/api/orders/self", listSelfOrders);

  // Payments
  app.get("/api/payments/key", getPublicKey);
  app.post("/api/payments/create-order", createRazorpayOrder);
  app.post("/api/payments/verify", verifyPayment);
  app.post("/api/payments/webhook", razorpayWebhook);

  return app;
}
