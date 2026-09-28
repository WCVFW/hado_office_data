# FreshMeals - Frontend Application

A production-ready React frontend application for the FreshMeals food delivery platform, designed to integrate with a Spring Boot backend.

## Tech Stack

- **Frontend**: React 18 + React Router 6 + TypeScript + Vite + TailwindCSS 3
- **Backend**: Spring Boot (separate repository/deployment)
- **UI Components**: Radix UI + TailwindCSS 3 + Lucide React icons
- **Testing**: Vitest

## Project Structure

```
client/                   # React SPA frontend
├── pages/                # Route components (Index.tsx = home)
├── components/ui/        # Pre-built UI component library
├── components/admin/     # Admin dashboard components
├── services/             # API services for Spring Boot integration
├── hooks/                # Custom React hooks (authentication, etc.)
├── contexts/             # React context providers
├── App.tsx               # App entry point with SPA routing
���── global.css            # TailwindCSS 3 theming and global styles

shared/                   # Shared types and utilities
└── api.ts                # Shared API interfaces
```

## Key Features

### Frontend Features

- **SPA Routing**: React Router 6 with client-side routing
- **Admin Dashboard**: Complete admin panel with analytics, user management, product management
- **Authentication**: JWT-based authentication with Spring Boot backend
- **Product Catalog**: Dynamic product listing and management
- **Order Management**: Order placement, tracking, and management
- **Subscription System**: Subscription plans and management
- **Payment Integration**: Razorpay payment gateway integration
- **Responsive Design**: Mobile-first design with TailwindCSS

### Spring Boot Integration

- **RESTful API**: Full integration with Spring Boot REST endpoints
- **JWT Authentication**: Seamless authentication with Spring Security
- **Error Handling**: Graceful error handling with fallback mechanisms
- **Real-time Data**: Live data from Spring Boot backend with database
- **Admin Operations**: Complete CRUD operations through Spring Boot APIs

## Development Setup

### Prerequisites

- Node.js 18+
- Spring Boot backend running on port 8080
- Database configured in Spring Boot

### Installation

1. **Clone and install dependencies:**

```bash
git clone <repository-url>
cd freshmeals-frontend
npm install
```

2. **Configure environment:**

```bash
cp .env.example .env
# Edit .env with your Spring Boot backend URL and Razorpay keys
```

3. **Start development server:**

```bash
npm run dev
```

The frontend will start on `http://localhost:5173` and proxy API requests to your Spring Boot backend on `http://localhost:8080`.

### Environment Variables

Create a `.env` file with:

```env
# Spring Boot Backend
VITE_API_URL=http://localhost:8080

# Razorpay Payment Gateway
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

## Spring Boot Backend Requirements

Your Spring Boot backend should provide these API endpoints:

### Authentication Endpoints

- `POST /auth/login` - User login
- `POST /auth/register` - User registration
- `POST /auth/logout` - User logout
- `POST /auth/refresh` - Refresh JWT token

### User Management

- `GET /users/{id}` - Get user profile
- `PUT /users/{id}` - Update user profile
- `GET /users/{id}/orders` - Get user orders
- `GET /users/{id}/subscriptions` - Get user subscriptions

### Product Management

- `GET /products` - Get products (with pagination, search, filters)
- `GET /products/{id}` - Get single product
- `POST /admin/products` - Create product (admin)
- `PUT /admin/products/{id}` - Update product (admin)
- `DELETE /admin/products/{id}` - Delete product (admin)

### Order Management

- `POST /orders` - Create order
- `GET /orders/{id}` - Get order details
- `PUT /orders/{id}/status` - Update order status (admin)
- `GET /admin/orders` - Get all orders (admin)

### Subscription Management

- `GET /subscription-plans` - Get available plans
- `POST /subscriptions` - Create subscription
- `PUT /subscriptions/{id}` - Update subscription
- `PUT /subscriptions/{id}/cancel` - Cancel subscription

### Admin Endpoints

- `GET /admin/dashboard` - Dashboard statistics
- `GET /admin/users` - Get all users (with pagination)
- `GET /admin/analytics` - Analytics data
- `GET /admin/export/{type}` - Export data (CSV/Excel)

### Payment Endpoints

- `POST /payments/create-order` - Create Razorpay order
- `POST /payments/verify` - Verify payment
- `GET /payments/{id}` - Get payment details

## Development Commands

```bash
npm run dev        # Start development server with Spring Boot proxy
npm run build      # Production build
npm run preview    # Preview production build
npm run typecheck  # TypeScript validation
npm test          # Run Vitest tests
```

## Production Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist/spa` folder with the production build.

### Deployment Options

1. **Static Hosting** (Netlify, Vercel, etc.):

   - Deploy the `dist/spa` folder
   - Configure redirects for SPA routing
   - Set environment variables for production Spring Boot API URL

2. **Spring Boot Integration**:

   - Copy `dist/spa` contents to Spring Boot `src/main/resources/static`
   - Spring Boot will serve the frontend and handle API routes

3. **CDN Deployment**:
   - Upload to CDN with proper cache headers
   - Configure API proxy or CORS on Spring Boot backend

### Environment Variables for Production

```env
VITE_API_URL=https://your-spring-boot-api.com
VITE_RAZORPAY_KEY_ID=your_production_razorpay_key
```

## Features Overview

### User Features

- **Authentication**: Login/Register with email and password
- **Product Browsing**: Search, filter, and browse meal products
- **Shopping Cart**: Add items and place orders
- **Subscription Plans**: Choose and manage meal subscriptions
- **Order Tracking**: Track order status and history
- **Profile Management**: Update personal information and addresses
- **Payment**: Secure payments through Razorpay

### Admin Features

- **Dashboard**: Key metrics and analytics overview
- **User Management**: View, edit, and manage user accounts
- **Product Management**: CRUD operations for meal products
- **Order Management**: Process and track all orders
- **Subscription Management**: Manage all user subscriptions
- **Analytics**: Detailed business analytics and reports
- **Data Export**: Export data to CSV/Excel formats

## API Integration

The frontend uses a service layer pattern for Spring Boot integration:

- **ApiService**: Main service for HTTP requests
- **AdminService**: Admin-specific operations
- **ProductService**: Product-related operations
- **PaymentService**: Payment processing with Razorpay

All services include:

- JWT token handling
- Error handling and retry logic
- TypeScript type safety
- Fallback mechanisms for offline development

## Error Handling

The application includes comprehensive error handling:

- **API Failures**: Graceful degradation with user-friendly messages
- **Network Issues**: Automatic retry and fallback mechanisms
- **Authentication**: Token refresh and re-authentication flows
- **Validation**: Form validation with clear error messages

## Demo Mode

For development without Spring Boot backend:

- Demo authentication credentials are available
- Mock data provides realistic functionality
- All UI components work without backend dependency

Demo credentials:

- **Admin**: admin@freshmeals.com / admin123
- **User**: user@freshmeals.com / user123

## Contributing

1. Follow the existing code style and patterns
2. Add TypeScript types for all new features
3. Include error handling for all API calls
4. Test with both real Spring Boot backend and demo mode
5. Update this README for any new features or changes

## Support

For technical issues:

- Check if Spring Boot backend is running on port 8080
- Verify environment variables are set correctly
- Check browser console for detailed error messages
- Ensure CORS is configured properly on Spring Boot backend

## Architecture Notes

- **Frontend-only repository**: This contains only the React frontend
- **API-driven**: All data comes from Spring Boot REST APIs
- **JWT Authentication**: Stateless authentication with Spring Security
- **Responsive Design**: Mobile-first with TailwindCSS
- **Type Safety**: Full TypeScript coverage
- **Production Ready**: Optimized builds and error handling
