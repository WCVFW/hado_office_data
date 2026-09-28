import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, ArrowLeft, Search, FileText } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-12 h-12 text-blue-600" />
          </div>
          <CardTitle className="text-6xl font-bold text-slate-900 mb-2">
            404
          </CardTitle>
          <h2 className="text-2xl font-semibold text-slate-700 mb-2">
            Page Not Found
          </h2>
          <p className="text-slate-600">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-slate-50 p-4 rounded-lg">
            <p className="text-sm text-slate-600">
              <span className="font-medium">Requested URL:</span>{" "}
              {location.pathname}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Button asChild className="h-12">
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Go to Homepage
              </Link>
            </Button>
            <Button
              variant="outline"
              onClick={() => window.history.back()}
              className="h-12"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>

          <div className="border-t pt-6">
            <h3 className="font-semibold text-slate-900 mb-3">Popular Pages</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <Link
                to="/bill-payment"
                className="flex items-center p-3 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
              >
                <FileText className="w-4 h-4 mr-3 text-blue-600" />
                <span className="text-sm">Bill Payment</span>
              </Link>
              <Link
                to="/transaction-status"
                className="flex items-center p-3 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
              >
                <Search className="w-4 h-4 mr-3 text-blue-600" />
                <span className="text-sm">Transaction Status</span>
              </Link>
              <Link
                to="/bill-validation"
                className="flex items-center p-3 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
              >
                <FileText className="w-4 h-4 mr-3 text-blue-600" />
                <span className="text-sm">Bill Validation</span>
              </Link>
              <Link
                to="/api-docs"
                className="flex items-center p-3 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
              >
                <FileText className="w-4 h-4 mr-3 text-blue-600" />
                <span className="text-sm">API Documentation</span>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
