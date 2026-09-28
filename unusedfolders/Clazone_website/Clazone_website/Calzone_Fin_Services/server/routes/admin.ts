import { RequestHandler } from "express";
import { db } from "../db";
import { getMemServices } from "./services";
import { getMemInquiries } from "./inquiries";
import { getMemOrders } from "./orders";

export const adminMetrics: RequestHandler = async (_req, res) => {
  if (!db.enabled || !db.pool) {
    const services = getMemServices();
    const inquiries = getMemInquiries();
    const orders = getMemOrders();
    const revenue = orders.reduce((s, o) => s + (o.amount || 0), 0);
    return res.json({
      services: services.length,
      inquiries: inquiries.length,
      orders: orders.length,
      revenue,
    });
  }
  const [[svc]]: any = await db.pool.query(
    "SELECT COUNT(*) as c FROM services",
  );
  const [[inq]]: any = await db.pool.query(
    "SELECT COUNT(*) as c FROM inquiries",
  );
  const [[ord]]: any = await db.pool.query("SELECT COUNT(*) as c FROM orders");
  const [[rev]]: any = await db.pool.query(
    "SELECT COALESCE(SUM(amount),0) as s FROM orders",
  );
  res.json({
    services: svc.c,
    inquiries: inq.c,
    orders: ord.c,
    revenue: Number(rev.s),
  });
};
