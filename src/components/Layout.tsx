
import { ReactNode } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { TrendingUp, BarChart3, Eye, FileText, User, Menu, LogOut } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface LayoutProps {
  children: ReactNode;
}

const navigation = [
  { name: "Markets", href: "/markets", icon: TrendingUp },
  { name: "Portfolio", href: "/portfolio", icon: BarChart3 },
  { name: "Watchlist", href: "/watchlist", icon: Eye },
  { name: "Research", href: "/research", icon: FileText },
];

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center space-x-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">StockTrader</span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Link key={item.name} to={item.href}>
                    <Button
                      variant={isActive ? "secondary" : "ghost"}
                      size="sm"
                      className="gap-2"
                    >
                      <Icon className="h-4 w-4" />
                      {item.name}
                    </Button>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center gap-2">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="hidden md:flex">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/account">Account Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="hidden md:flex items-center gap-2">
                <Link to="/signin">
                  <Button variant="ghost" size="sm">
                    Sign in
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button size="sm">
                    Sign up
                  </Button>
                </Link>
              </div>
            )}

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4 mt-8">
                  {navigation.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.href;
                    return (
                      <Link key={item.name} to={item.href}>
                        <Button
                          variant={isActive ? "secondary" : "ghost"}
                          className="w-full justify-start gap-2"
                        >
                          <Icon className="h-4 w-4" />
                          {item.name}
                        </Button>
                      </Link>
                    );
                  })}
                  {user ? (
                    <>
                      <Link to="/account">
                        <Button variant="ghost" className="w-full justify-start gap-2">
                          <User className="h-4 w-4" />
                          Account
                        </Button>
                      </Link>
                      <Button 
                        variant="ghost" 
                        className="w-full justify-start gap-2"
                        onClick={handleSignOut}
                      >
                        <LogOut className="h-4 w-4" />
                        Sign out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link to="/signin">
                        <Button variant="ghost" className="w-full">
                          Sign in
                        </Button>
                      </Link>
                      <Link to="/signup">
                        <Button className="w-full">
                          Sign up
                        </Button>
                      </Link>
                    </>
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>
    </div>
  );
}