import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

interface ProtectedRouteProps {
  children: ReactNode;
  requireAdmin?: boolean;
  redirectTo?: string;
}

export default function ProtectedRoute({
  children,
  requireAdmin = false,
  redirectTo = "/auth",
}: ProtectedRouteProps) {
  const { isAuthenticated, isAdmin, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    // Redirect to auth page with the current location
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }

  if (requireAdmin && !isAdmin) {
    // Redirect to home if user doesn't have admin privileges
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
