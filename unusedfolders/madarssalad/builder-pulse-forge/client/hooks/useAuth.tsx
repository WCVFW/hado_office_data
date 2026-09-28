import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import apiService from "@/services/apiService";

interface User {
  id: string;
  email: string;
  fullName: string;
  role: string;
  phoneNumber?: string;
  isActive?: boolean;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: {
    fullName: string;
    email: string;
    password: string;
    phoneNumber?: string;
  }) => Promise<void>;
  logout: () => void;
  loading: boolean;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing token on app load
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setToken(storedToken);
        setUser(parsedUser);
        apiService.setToken(storedToken);
      } catch (error) {
        console.error("Error parsing stored user data:", error);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    }

    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);

    try {
      // Try Spring Boot API login first
      const response = await apiService.login(email, password);

      if (response.success && response.data) {
        const { token: newToken, user: userData } = response.data;

        // Store token and user data
        setToken(newToken);
        setUser(userData);
        apiService.setToken(newToken);
        localStorage.setItem("token", newToken);
        localStorage.setItem("user", JSON.stringify(userData));

        setLoading(false);
        return;
      }

      throw new Error(response.error || "Login failed");
    } catch (error) {
      setLoading(false);

      // If Spring Boot API fails, check demo credentials for development
      const validDemoCredentials = [
        {
          id: "1",
          email: "admin@freshmeals.com",
          password: "admin123",
          role: "admin",
          fullName: "Admin User",
          isActive: true,
        },
        {
          id: "2",
          email: "user@freshmeals.com",
          password: "user123",
          role: "user",
          fullName: "Demo User",
          isActive: true,
        },
      ];

      const validCredential = validDemoCredentials.find(
        (cred) => cred.email === email && cred.password === password,
      );

      if (validCredential) {
        // Create demo token and user
        const demoToken = `demo_token_${Date.now()}_${validCredential.id}`;
        const { password: _, ...userData } = validCredential;

        setToken(demoToken);
        setUser(userData);
        apiService.setToken(demoToken);
        localStorage.setItem("token", demoToken);
        localStorage.setItem("user", JSON.stringify(userData));

        console.log("Using demo credentials - Spring Boot API not available");
        return;
      }

      // If neither API nor demo credentials work
      throw new Error(
        error instanceof Error
          ? error.message
          : "Invalid credentials. For demo: admin@freshmeals.com/admin123 or user@freshmeals.com/user123",
      );
    }
  };

  const register = async (userData: {
    fullName: string;
    email: string;
    password: string;
    phoneNumber?: string;
  }) => {
    setLoading(true);

    try {
      const response = await apiService.register(userData);

      if (response.success && response.data) {
        const { token: newToken, user: newUser } = response.data;

        setToken(newToken);
        setUser(newUser);
        apiService.setToken(newToken);
        localStorage.setItem("token", newToken);
        localStorage.setItem("user", JSON.stringify(newUser));

        setLoading(false);
        return;
      }

      throw new Error(response.error || "Registration failed");
    } catch (error) {
      setLoading(false);
      throw new Error(
        error instanceof Error
          ? error.message
          : "Registration failed. Please check if Spring Boot backend is running.",
      );
    }
  };

  const logout = async () => {
    try {
      // Try to notify Spring Boot backend about logout
      await apiService.logout();
    } catch (error) {
      // Ignore logout API errors - still proceed with local logout
      console.log("Logout API call failed, proceeding with local logout");
    }

    // Clear local state and storage
    setUser(null);
    setToken(null);
    apiService.clearToken();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const value: AuthContextType = {
    user,
    token,
    login,
    register,
    logout,
    loading,
    isAuthenticated: !!user,
    isAdmin: user?.role === "admin",
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
