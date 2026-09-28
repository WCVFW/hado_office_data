# Velmess Smart Control - Complete Application Logic Flow

This document provides a detailed technical and functional map of how the **Velmess Smart Control** ecosystem operates, from the database to the user interface.

---

## 1. High-Level System Architecture
The application follows a **three-tier architecture** tailored for desktop performance and local data security.

```mermaid
graph TD
    subgraph "Client Layer (UI/UX)"
        A[React Frontend] -->|State Management| B[Local Storage]
        A -->|Icons & UI| C[Lucide React / Framer Motion]
    end

    subgraph "Bridge Layer (Security)"
        D[Electron Preload Script] -->|Exposed APIs| A
        D -->|Sandboxed Communication| E[IPC Main]
    end

    subgraph "Logic & Data Layer (Core)"
        E -->|Business Logic| F[Electron Main CJS]
        F -->|SQL Queries| G[MySQL Database]
        F -->|System Commands| H[Windows OS Shell]
    end
```

---

## 2. Core Operational Flows

### A. Authentication & Session Management
How users enter the system and how their identity is maintained.

```mermaid
sequenceDiagram
    participant User
    participant LoginView as Login Page
    participant Main as Electron Main
    participant DB as MySQL DB

    User->>LoginView: Enters Username & Password
    LoginView->>Main: IPC Invoke: 'login' (user, pass)
    Main->>DB: SELECT * FROM users WHERE username = ?
    DB-->>Main: Return Row (Hashed Password)
    Main->>Main: Compare Passwords
    alt Success
        Main-->>LoginView: Return { success: true, user }
        LoginView->>LoginView: Save 'user' to localStorage
        LoginView->>User: Redirect to Dashboard
    else Failure
        Main-->>LoginView: Return { success: false, error }
        LoginView->>User: Show Error Banner
    end
```

### B. Real-Time Notification Engine
The logic behind the automatic stock monitoring system.

```mermaid
graph TD
    Start((App Launch)) --> Initial[Header Component Mounts]
    Initial --> Poll[Run 'fetchAllNotifications']
    Poll --> IPC[IPC Invoke: get-low-stock & get-open-requests]
    IPC --> QueryDB[DB: Fetch Critical Items]
    QueryDB --> CheckNew{Is item in <br/> notifiedItems Set?}
    
    CheckNew -- No (New Alert) --> Notify[Trigger Alerts]
    Notify --> Native[Windows OS: Show Desktop Alert]
    Notify --> Shell[Shell: Trigger System Beep]
    Notify --> Sound[Browser: Triple 'Triangle' Beep]
    Notify --> UI[Update Header Bell Status]
    Notify --> UpdateSet[Add item to Set]
    
    UpdateSet --> Wait[Wait 30 Seconds]
    CheckNew -- Yes (Duplicate) --> Wait
    Wait --> Poll
```

### C. Inventory & Stock Request Lifecycle
The loop between Shop Outlet and Main Kitchen (Admin).

```mermaid
graph LR
    subgraph "Shop Outlet (User)"
        S1[View Local Inventory]
        S2[Current Stock < Min Threshold]
        S3[Request Stock from Admin]
    end

    subgraph "Database (Source of Truth)"
        DB[(MySQL tables)]
    end

    subgraph "Main Kitchen (Admin)"
        A1[Receive Notification]
        A2[Review Request List]
        A3[Click Fulfill]
    end

    S3 -->|Update| DB
    DB -->|Notify| A1
    A3 -->|Deduct| DB
    A3 -->|Add| DB
    DB -->|Sync| S1
```

---

## 3. Data Integrity & Security Rules

| Feature | Implementation Logic |
| :--- | :--- |
| **Password Security** | Passwords are stored in the database. (Future: BCrypt Hashing enabled). |
| **Role Access** | `isAdmin` checks are performed in the Frontend and Backend to prevent Shop users from seeing fulfilling stock requests. |
| **System Privacy** | Developer Console (DevTools) is disabled by default for users. |
| **Sound Logic** | Bypasses "User Gesture" requirements via `autoplayPolicy` in Electron. |

---

## 4. UI Design System
*   **Theme**: Dual Mode (Light/Dark) managed via `ThemeContext`.
*   **Colors**: 
    *   Deep Navy / Slate (Primary)
    *   Emerald / Tech Blue (Secondary)
    *   Crimson Red (Alerts)
*   **Animations**: `framer-motion` used for smooth dropdowns and modal transitions.

---

### **Summary of User Roles**
1.  **Admin**: Can create products, manage all shops, fulfill stock requests, and view global analytics.
2.  **Shop Owner**: Can view local inventory, make orders, and request stock from the Main Kitchen.
