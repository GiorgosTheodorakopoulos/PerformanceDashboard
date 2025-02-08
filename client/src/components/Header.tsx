import { Bell, Sun, Moon, User } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "@/hooks/useTheme";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="h-16 border-b border-border bg-card flex items-center px-6 justify-between">
      <div className="flex items-center gap-2">
        <h1 className="text-lg font-semibold text-primary">Eco Performance Dashboard</h1>
      </div>
      
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-[10px] rounded-full flex items-center justify-center text-white">
            3
          </span>
        </Button>

        {/* Theme Toggle */}
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          {theme === 'dark' ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>

        {/* User Profile */}
        <Button variant="ghost" className="flex items-center gap-2">
          <User className="h-5 w-5" />
          <span>Profile</span>
        </Button>
      </div>
    </header>
  );
} 