import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Settings, 
  Zap, 
  Shield, 
  Calculator, 
  Search, 
  Target, 
  Monitor, 
  ArrowRight, 
  BookOpen,
  LucideIcon 
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  BarChart3,
  TrendingUp,
  Users,
  Settings,
  Zap,
  Shield,
  Calculator,
  Search,
  Target,
  Monitor,
  ArrowRight,
  BookOpen
};

export const getIconComponent = (iconName: string): LucideIcon => {
  return iconMap[iconName] || BarChart3; // Default fallback
};