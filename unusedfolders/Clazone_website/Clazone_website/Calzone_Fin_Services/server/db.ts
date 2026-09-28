import mysql from "mysql2/promise";

export type DB = {
  pool: mysql.Pool | null;
  enabled: boolean;
};

const getConfig = () => {
  const url = process.env.MYSQL_URL;
  if (url) return { uri: url } as const;
  const { MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } =
    process.env as Record<string, string | undefined>;
  if (MYSQL_HOST && MYSQL_USER && MYSQL_DATABASE) {
    return {
      host: MYSQL_HOST,
      port: MYSQL_PORT ? Number(MYSQL_PORT) : 3306,
      user: MYSQL_USER,
      password: MYSQL_PASSWORD ?? "",
      database: MYSQL_DATABASE,
    } as const;
  }
  return null;
};

export const db: DB = { pool: null, enabled: false };

export async function initDB() {
  const config = getConfig();
  if (!config) {
    db.pool = null;
    db.enabled = false;
    return;
  }
  if ("uri" in config) {
    db.pool = mysql.createPool({
      uri: config.uri,
      waitForConnections: true,
      connectionLimit: 10,
    });
  } else {
    db.pool = mysql.createPool({
      ...config,
      waitForConnections: true,
      connectionLimit: 10,
    });
  }
  db.enabled = true;
  await ensureSchema();
}

async function ensureSchema() {
  if (!db.pool) return;
  const conn = await db.pool.getConnection();
  try {
    await conn.query(`CREATE TABLE IF NOT EXISTS services (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      price DECIMAL(10,2) DEFAULT 0,
      active TINYINT(1) DEFAULT 1,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`);

    await conn.query(`CREATE TABLE IF NOT EXISTS inquiries (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(50) DEFAULT NULL,
      message TEXT NOT NULL,
      service_id INT DEFAULT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      INDEX(service_id),
      CONSTRAINT fk_inquiries_service FOREIGN KEY (service_id) REFERENCES services(id) ON DELETE SET NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`);

    await conn.query(`CREATE TABLE IF NOT EXISTS orders (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_email VARCHAR(255) NOT NULL,
      user_name VARCHAR(255) NOT NULL,
      phone VARCHAR(50) DEFAULT NULL,
      service_id INT DEFAULT NULL,
      amount DECIMAL(10,2) DEFAULT 0,
      status VARCHAR(50) DEFAULT 'pending',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      INDEX(service_id),
      CONSTRAINT fk_orders_service FOREIGN KEY (service_id) REFERENCES services(id) ON DELETE SET NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`);

    await conn.query(`CREATE TABLE IF NOT EXISTS payments (
      id INT AUTO_INCREMENT PRIMARY KEY,
      order_id INT NOT NULL,
      amount DECIMAL(10,2) NOT NULL,
      method VARCHAR(50) DEFAULT NULL,
      status VARCHAR(50) DEFAULT 'created',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      INDEX(order_id),
      CONSTRAINT fk_payments_order FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`);

    await conn.query(`CREATE TABLE IF NOT EXISTS user_profiles (
      email VARCHAR(255) PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      phone VARCHAR(50) DEFAULT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`);

    await conn.query(`CREATE TABLE IF NOT EXISTS certificates (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_email VARCHAR(255) NOT NULL,
      title VARCHAR(255) NOT NULL,
      issued_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      reference VARCHAR(255) DEFAULT NULL,
      file_url TEXT DEFAULT NULL,
      INDEX(user_email),
      CONSTRAINT fk_cert_user FOREIGN KEY (user_email) REFERENCES user_profiles(email) ON DELETE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`);

    await conn.query(`CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      email VARCHAR(255) NOT NULL UNIQUE,
      name VARCHAR(255) NOT NULL,
      password_hash VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`);

    // Razorpay-related columns (safe to run repeatedly on MySQL 8+)
    await conn.query(
      `ALTER TABLE orders ADD COLUMN IF NOT EXISTS razorpay_order_id VARCHAR(255) NULL`,
    );
    await conn.query(`ALTER TABLE payments
      ADD COLUMN IF NOT EXISTS gateway_order_id VARCHAR(255) NULL,
      ADD COLUMN IF NOT EXISTS gateway_payment_id VARCHAR(255) NULL`);
  } finally {
    conn.release();
  }
}
