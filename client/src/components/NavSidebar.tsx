import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Activity,
  Heart,
  Zap,
  History, 
  Lightbulb,
  Shield, 
  Radio, 
  Bell, 
  Settings,
  BarChart3
} from "lucide-react";

const navigation = [
  {
    name: "Overview",
    items: [
      { name: "Dashboard", href: "/", icon: LayoutDashboard },
    ]
  },
  {
    name: "Operations",
    items: [
      { name: "Real-time Metrics", href: "/real-time", icon: Activity },
      { name: "System Health", href: "/system-health", icon: Heart },
      { name: "Energy Flow", href: "/energy-flow", icon: Zap },
    ]
  },
  {
    name: "Analytics",
    items: [
      { name: "Historical Data", href: "/historical", icon: History },
      { name: "Reports", href: "/reports", icon: BarChart3 },
      { name: "Recommendations", href: "/recommendations", icon: Lightbulb },
    ]
  },
  {
    name: "Security",
    items: [
      { name: "Grid Security", href: "/grid-security", icon: Shield },
      { name: "Grid Monitor", href: "/grid-monitor", icon: Radio },
      { name: "Alerts", href: "/alerts", icon: Bell },
    ]
  },
  {
    name: "System",
    items: [
      { name: "Settings", href: "/settings", icon: Settings },
    ]
  }
];

export default function NavSidebar() {
  const [location] = useLocation();

  return (
    <div className="flex h-full w-64 flex-col border-r bg-card">
      <div className="flex h-16 items-center gap-2 border-b px-6">
        <img src="/logo-full.png" alt="Logo" className="h-8" />
      </div>
      <nav className="flex-1 space-y-1 px-2 py-4">
        {navigation.map((group, groupIndex) => (
          <div key={group.name} className={cn("space-y-1", groupIndex !== 0 && "mt-6")}>
            <h3 className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              {group.name}
            </h3>
            {group.items.map((item) => (
              <Link key={item.name} href={item.href}>
                <a
                  className={cn(
                    "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    location === item.href
                      ? "bg-accent text-accent-foreground"
                      : "text-foreground"
                  )}
                >
                  <item.icon
                    className={cn(
                      "mr-3 h-4 w-4 flex-shrink-0",
                      location === item.href
                        ? "text-accent-foreground"
                        : "text-muted-foreground group-hover:text-accent-foreground"
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
        ))}
      </nav>
    </div>
  );
}
