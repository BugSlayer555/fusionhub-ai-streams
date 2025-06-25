

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  FileText, 
  Video, 
  Users, 
  Search, 
  Bell, 
  User,
  Settings,
  Plus,
  Zap
} from "lucide-react";

interface NavigationProps {
  isCollapsed?: boolean;
  onToggle?: () => void;
}

const Navigation = ({ isCollapsed = false }: NavigationProps) => {
  const location = useLocation();
  const [notifications] = useState(3);

  const navItems = [
    { icon: Home, label: "Dashboard", path: "/dashboard" },
    { icon: FileText, label: "Posts", path: "/posts" },
    { icon: Video, label: "Live", path: "/live" },
    { icon: Users, label: "Community", path: "/community" },
    { icon: Search, label: "Discover", path: "/discover" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-card backdrop-blur-md border-r border-border h-full">
      <div className="p-4">
        {/* Logo */}
        <Link to="/dashboard" className="flex items-center space-x-2 mb-8">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Zap className="h-5 w-5 text-primary-foreground" />
          </div>
          {!isCollapsed && (
            <span className="text-xl font-bold text-primary">
              FusionHub
            </span>
          )}
        </Link>

        {/* Create Post Button */}
        <Link to="/admin">
          <Button 
            className="w-full mb-6 bg-primary hover:bg-primary/90 text-primary-foreground"
            size={isCollapsed ? "icon" : "default"}
          >
            <Plus className="h-4 w-4" />
            {!isCollapsed && <span className="ml-2">Create</span>}
          </Button>
        </Link>

        {/* Navigation Items */}
        <div className="space-y-2">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <Button
                variant={isActive(item.path) ? "secondary" : "ghost"}
                className={`w-full justify-start ${
                  isActive(item.path) 
                    ? "bg-primary/20 text-primary border-primary/50" 
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
                size={isCollapsed ? "icon" : "default"}
              >
                <item.icon className="h-4 w-4" />
                {!isCollapsed && <span className="ml-2">{item.label}</span>}
              </Button>
            </Link>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="absolute bottom-4 left-4 right-4 space-y-2">
          <Link to="/profile">
            <Button 
              variant={isActive("/profile") ? "secondary" : "ghost"}
              className={`w-full justify-start ${
                isActive("/profile") 
                  ? "bg-primary/20 text-primary border-primary/50" 
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
              size={isCollapsed ? "icon" : "default"}
            >
              <User className="h-4 w-4" />
              {!isCollapsed && <span className="ml-2">Profile</span>}
              {notifications > 0 && !isCollapsed && (
                <Badge variant="destructive" className="ml-auto text-xs">
                  {notifications}
                </Badge>
              )}
            </Button>
          </Link>
          
          <Button 
            variant="ghost" 
            className="w-full justify-start text-muted-foreground hover:text-foreground hover:bg-accent"
            size={isCollapsed ? "icon" : "default"}
            onClick={() => {/* Handle notifications */}}
          >
            <Bell className="h-4 w-4" />
            {!isCollapsed && <span className="ml-2">Notifications</span>}
            {notifications > 0 && (
              <span className="ml-auto w-2 h-2 bg-primary rounded-full"></span>
            )}
          </Button>

          <Button 
            variant="ghost" 
            className="w-full justify-start text-muted-foreground hover:text-foreground hover:bg-accent"
            size={isCollapsed ? "icon" : "default"}
          >
            <Settings className="h-4 w-4" />
            {!isCollapsed && <span className="ml-2">Settings</span>}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

