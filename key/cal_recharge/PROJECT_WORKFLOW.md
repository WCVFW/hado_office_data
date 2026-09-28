# Calzone Recharge App - Project Workflow & Documentation

## 1. Project Overview
This project is a full-stack **MERN (MySQL, Express, React, Node.js)** application designed for mobile recharges and bill payments. It features user authentication, wallet management, payment gateway integration (Razorpay), and admin management capabilities.

**Key Features:**
- User Authentication (JWT) & KYC Verification.
- Mobile Recharge & Bill Payments.
- Wallet System with Add Money & Transaction History.
- Admin Dashboard for Order & User Management.
- Invoice Generation (PDF).
- Email Notifications.

---

## 2. User Roles & Hierarchy
The system is built around a multi-tier architecture involving internal staff and external partners.

### **A. Internal Roles**
1.  **Admin**: Superuser with complete control over the platform, finances, and user management.
2.  **Employee**: Internal staff members responsible for operational tasks (e.g., KYC verification, ticket support, transaction monitoring).

### **B. External Partners (The 3-Tier Channel)**
The distribution network consists of three levels of partners:
1.  **Master Distributor (MD)**:
    - Top-tier partner.
    - Can creating and manage Distributors.
    - Earns commission on infinite downline transactions.
2.  **Distributor (DT)**:
    - Mid-tier partner.
    - Can create and manage Retailers/Agents.
    - Earns commission on their Retailers' transactions.
3.  **Retailer (RT)**:
    - The point-of-sale partner.
    - Directly performs recharges and bill payments for end customers.
    - Earns direct commission on transactions.

### **C. Agents**
- **Field Agent**: Special users who may operate on the ground to onboard new partners or facilitate merchant acquisition.

---

## 3. Workflow: Internal Staff (Employees)
Currently, Employees function as **Internal Agents** with access to a dedicated dashboard to perform transactions and track their own performance.

### **1. Dashboard Overview**
- **Personal Stats**: View Wallet Balance, Today's Sales Count/Volume, and Commission Earned.
- **Performance Tracking**: Monthly summary of business volume.

### **2. Operational Services**
Employees can directly perform services using their wallet:
- **Recharges**: Mobile, DTH, FASTag.
- **Bill Payments**: Electricity, Water, Gas, etc.
- **Travel**: Bus Booking.
- **Banking**: AEPS (Aadhaar Enabled Payment System).

### **3. Wallet Management**
- **Add Money**: Load funds into the wallet via Payment Gateway (Razorpay).
- **Withdraw Commission**: Transfer earned commission from the commission wallet to the main wallet for usage.
- **Transaction History**: View detailed logs of all credits, debits, and service transactions.

### **4. Administrative Tasks (Future Scope)**
*In future updates, Employees may be granted restricted Admin access to:*
- Verify User KYC documents.
- Handle Support Tickets.
- Monitor Transaction Disputes.

---

## 4. Technology Stack

### Frontend (`/client`)
- **Framework**: React + TypeScript (Vite)
- **Styling**: Tailwind CSS, Bootstrap, Custom CSS
- **State/Routing**: React Router DOM
- **HTTP Client**: Axios
- **UI Components**: React Bootstrap, React Icons, Framer Motion, SweetAlert2, Toastify

### Backend (`/server`)
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MySQL (using `mysql2` with connection pooling)
- **Authentication**: JWT (JSON Web Tokens)
- **Payments**: Razorpay Integration
- **File Handling**: Multer (for KYC documents)
- **Utilities**: PDFKit (Invoicing), Nodemailer (Emails), BCrypt (Password Hashing)

---

## 3. Prerequisites
Before running the project, ensure you have the following installed:
1.  **Node.js** (v18 or higher recommended)
2.  **MySQL Server** (Running locally or remotely)
3.  **Git**

---

## 4. Installation & Setup

### Step 1: Clone the Repository
(If not already done)
```bash
git clone <repository_url>
cd cal_recharge
```

### Step 2: Database Setup
1. Open your MySQL Client (Workbench, Command Line, etc.).
2. Create a new database named `recharge_db`:
   ```sql
   CREATE DATABASE recharge_db;
   ```
3. (Optional) Run any provided SQL scripts to seed tables if available, or allow the application to handle migrations if configured.

### Step 3: Backend Setup (`/server`)
1. Navigate to the server directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure Environment Variables:
   - Create a `.env` file in the `server` root.
   - Add the following configurations (adjust values as needed):
     ```env
     PORT=5000
     DB_HOST=localhost
     DB_USER=root
     DB_PASSWORD=your_mysql_password
     DB_NAME=recharge_db
     JWT_SECRET=your_jwt_secret_key
     RAZORPAY_KEY_ID=your_razorpay_key_id
     RAZORPAY_KEY_SECRET=your_razorpay_key_secret
     EMAIL_USER=your_email@gmail.com
     EMAIL_PASS=your_email_app_password
     ```

### Step 4: Frontend Setup (`/client`)
1. Navigate to the client directory:
   ```bash
   cd ../client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

---

## 5. Running the Application

### Development Mode
You need to run both the backend and frontend servers simultaneously.

**Terminal 1: Backend**
```bash
cd server
npm run dev
```
*Server runs on: `http://localhost:5000`*

**Terminal 2: Frontend**
```bash
cd client
npm run dev
```
*Client runs on: `http://localhost:5173` (or port shown in terminal)*

### Building for Production
**Frontend:**
```bash
cd client
npm run build
```
This generates the `dist` folder ready for deployment.

---

## 6. Project Structure Overview

```
cal_recharge/
├── client/                     # Frontend Application
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── assets/             # Images, fonts
│   │   ├── components/         # Reusable UI components
│   │   ├── context/            # Global state (Auth, etc.)
│   │   ├── pages/              # Main route pages (Home, Dashboard, etc.)
│   │   ├── services/           # API call functions
│   │   ├── utils/              # Helper functions
│   │   ├── App.tsx             # Main App component
│   │   └── main.tsx            # Entry point
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.ts
│
├── server/                     # Backend Application
│   ├── src/
│   │   ├── config/             # DB, Email, Razorpay configs
│   │   ├── controllers/        # Request handlers (logic)
│   │   ├── middleware/         # Auth & Validation middleware
│   │   ├── routes/             # API interactions (Express routers)
│   │   ├── utils/              # Helper utilities
│   ├── uploads/                # Directory for uploaded KYC docs
│   ├── server.js               # Main server entry point
│   ├── .env                    # Environment variables
│   └── package.json
│
└── README.md                   # Basic Info
```

## 7. Troubleshooting

- **Database Connection Error**: Double-check your `.env` file credentials in the `server` folder. Ensure MySQL server is running.
- **Port Conflicts**: If port 5000 is taken, change it in `.env` and update the API base URL in the client code.
- **CORS Issues**: If the frontend cannot talk to the backend, ensure `cors` is enabled in `server.js` and configured for your frontend's origin.

---
**Created by**: Antigravity Assistant
**Last Updated**: January 2026
