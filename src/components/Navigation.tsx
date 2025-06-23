
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
    { icon: User, label: "Profile", path: "/profile" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/5 backdrop-blur-md border-r border-white/10 h-full">
      <div className="p-4">
        {/* Logo */}
        <Link to="/dashboard" className="flex items-center space-x-2 mb-8">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
            <Zap className="h-5 w-5 text-white" />
          </div>
          {!isCollapsed && (
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              FusionHub
            </span>
          )}
        </Link>

        {/* Create Post Button */}
        <Link to="/admin">
          <Button 
            className="w-full mb-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
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
                    ? "bg-purple-600/20 text-purple-400 border-purple-500/50" 
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
                size={isCollapsed ? "icon" : "default"}
              >
                <item.icon className="h-4 w-4" />
                {!isCollapsed && <span className="ml-2">{item.label}</span>}
                {item.label === "Profile" && notifications > 0 && !isCollapsed && (
                  <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-1">
                    {notifications}
                  </span>
                )}
              </Button>
            </Link>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="absolute bottom-4 left-4 right-4 space-y-2">
          <Button 
            variant="ghost" 
            className="w-full justify-start text-gray-300 hover:text-white"
            size={isCollapsed ? "icon" : "default"}
          >
            <Bell className="h-4 w-4" />
            {!isCollapsed && <span className="ml-2">Notifications</span>}
            {notifications > 0 && (
              <span className="ml-auto w-2 h-2 bg-red-500 rounded-full"></span>
            )}
          </Button>
          <Button 
            variant="ghost" 
            className="w-full justify-start text-gray-300 hover:text-white"
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
