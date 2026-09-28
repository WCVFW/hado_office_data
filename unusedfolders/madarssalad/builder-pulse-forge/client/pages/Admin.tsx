import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAuth } from "@/hooks/useAuth";
import { UtensilsCrossed, ArrowLeft, Eye, EyeOff, Shield } from "lucide-react";

export default function Admin() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await login(loginData.email, loginData.password);
      // Check if user is admin (this would be handled by the useAuth hook)
      navigate("/admin-dashboard");
    } catch (err) {
      setError("Invalid admin credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container py-20">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-2">Admin Portal</h1>
            <p className="text-muted-foreground">
              Access the FreshMeals administration dashboard
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">Administrator Login</CardTitle>
              <CardDescription className="text-center">
                Please enter your admin credentials to continue
              </CardDescription>
            </CardHeader>
            <CardContent>
              {error && (
                <Alert variant="destructive" className="mb-6">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="admin-email">Admin Email</Label>
                  <Input
                    id="admin-email"
                    type="email"
                    placeholder="Enter admin email"
                    value={loginData.email}
                    onChange={(e) =>
                      setLoginData({ ...loginData, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="admin-password">Password</Label>
                  <div className="relative">
                    <Input
                      id="admin-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter admin password"
                      value={loginData.password}
                      onChange={(e) =>
                        setLoginData({ ...loginData, password: e.target.value })
                      }
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Signing In..." : "Access Dashboard"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="text-center mt-6">
            <Button variant="ghost" asChild>
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>

          <div className="mt-8 p-4 bg-primary/10 border border-primary/20 rounded-lg">
            <h3 className="font-semibold mb-2 flex items-center gap-2 text-primary">
              <Shield className="h-4 w-4" />
              🎮 Demo Mode Active
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Backend API not available. Use demo admin credentials:
            </p>
            <div className="p-3 bg-background rounded border text-sm">
              <p>
                <strong>📧 Email:</strong> admin@freshmeals.com
              </p>
              <p>
                <strong>🔑 Password:</strong> admin123
              </p>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              This will give you access to the admin dashboard with sample data
            </p>
          </div>

          <div className="mt-6 p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
            <h4 className="font-medium text-yellow-800 mb-2">
              Security Notice
            </h4>
            <p className="text-sm text-yellow-700">
              This is a secure admin portal. All access attempts are logged and
              monitored. Only authorized personnel should attempt to access this
              system.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
