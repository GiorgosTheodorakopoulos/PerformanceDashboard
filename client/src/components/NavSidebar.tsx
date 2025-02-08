import { Home, History, Lightbulb } from 'lucide-react';
import { Link, useLocation } from 'wouter';

export default function NavSidebar() {
  const [location] = useLocation();
  
  const navItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: History, label: 'Historical', path: '/historical' },
    { icon: Lightbulb, label: 'Recommendations', path: '/recommendations' },
  ];

  return (
    <div className="h-screen w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      <div className="p-4 border-b border-sidebar-border">
        <h1 className="text-2xl font-bold text-sidebar-primary">Energy Monitor</h1>
      </div>
      <nav className="flex-1 p-4">
        {navItems.map(({ icon: Icon, label, path }) => (
          <Link key={path} href={path}>
            <a className={`
              flex items-center gap-3 px-4 py-2 rounded-lg mb-2
              ${location === path 
                ? 'bg-sidebar-accent text-sidebar-accent-foreground' 
                : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
              }
            `}>
              <Icon className="h-5 w-5" />
              <span>{label}</span>
            </a>
          </Link>
        ))}
      </nav>
    </div>
  );
}
