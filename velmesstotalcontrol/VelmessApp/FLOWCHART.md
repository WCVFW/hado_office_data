# Velmess Kitchen OS Flowchart

This document outlines the core logical flows of the Velmess Kitchen OS application, including authentication, real-time notifications, and system settings.

## 1. Authentication Flow
This diagram illustrates the login process from the frontend to the MySQL database via Electron IPC handlers.

```mermaid
graph TD
    A[User enters Credentials] --> B{Login Clicked}
    B --> C[Frontend calls window.electronAPI.login]
    C --> D[Electron Main Process receives IPC]
    D --> E[Query MySQL Database]
    E --> F{User Exists?}
    F -- No --> G[Return Error: User Not Found]
    F -- Yes --> H{Password Match?}
    H -- No --> I[Return Error: Invalid Password]
    H -- Yes --> J[Return Success + User Session]
    J --> K[Frontend saves User to localStorage]
    K --> L[Redirect to Dashboard]
```

## 2. Real-Time Notification & Alert Flow
This flow describes how the system polls for low stock alerts and requests, keeping the user informed with visual, audio, and native alerts.

```mermaid
graph TD
    A[Header Component Mounts] --> B[Start 30s Polling Loop]
    B --> C[Fetch Low Stock & Requests]
    C --> D{New items found?}
    D -- No --> E[Wait 30s]
    D -- Yes --> F[Update Local State]
    F --> G[Check notifiedItems Set]
    G --> H{Item already notified?}
    H -- Yes --> E
    H -- No --> I[Trigger Native Notification]
    I --> J[Play Audio Alert]
    J --> K[Update notifiedItems Set]
    K --> E
    E --> C
```

## 3. Stock Request & Fulfillment Flow (Admin/Shop)
Describes the interaction between a Shop requesting stock and an Admin fulfilling it.

```mermaid
graph LR
    A[Shop User] --> B[Request Stock in Inventory]
    B --> C[(MySQL: stock_requests table)]
    C --> D[Admin Header]
    D -- Notification --> E[Admin clicks Notifications]
    E --> F[Admin goes to Inventory]
    F --> G[Admin clicks Fulfill]
    G --> H[Update global_inventory]
    H --> I[Update shop_inventory]
    I --> J[Mark Request as Fulfilled]
```

## 4. Settings & Configuration Persistence
How user preferences (Theme, Sound, Alerts) are managed.

```mermaid
graph TD
    A[User opens Settings] --> B[Toggle Sound/Alerts]
    B --> C[Update React State]
    C --> D[Save to localStorage: 'notifSettings']
    D --> E[Header Reads localStorage]
    E --> F{Alert Triggered?}
    F -- Yes --> G{Is Sound ON in local?}
    G -- No --> H[Show Visual Only]
    G -- Yes --> I[Trigger Native Beep]
```

## 5. System Architecture
```mermaid
graph TD
    subgraph Frontend [React / Vite]
        A[App.jsx]
        B[Header.jsx]
        C[Settings.jsx]
        D[Dashboard Pages]
    end

    subgraph Bridge [Electron Preload]
        E[window.electronAPI]
    end

    subgraph Backend [Electron Main]
        F[main.cjs]
        G[db.cjs]
    end

    subgraph Storage [Database]
        H[(MySQL)]
    end

    A <--> E
    E <--> F
    F <--> G
    G <--> H
```
