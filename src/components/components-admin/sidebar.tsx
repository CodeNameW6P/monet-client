"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Users,
  Star,
  Settings,
  LogOut,
} from "lucide-react";

const navigation = [
  {
    name: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Products",
    href: "/admin/products",
    icon: Package,
  },
  {
    name: "Orders",
    href: "/admin/orders",
    icon: ShoppingBag,
  },
  {
    name: "Customers",
    href: "/admin/customers",
    icon: Users,
  },
  {
    name: "Reviews",
    href: "/admin/reviews",
    icon: Star,
  },
];

const secondaryNavigation = [
  {
    name: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/sign-out`,
        {
          method: "POST",
          credentials: "include",
        },
      );

      if (!response.ok) {
        console.error("Failed to sign out.");
        return;
      }

      router.push("/sign-in");
      router.refresh();
    } catch (error) {
      console.error("Sign-out error:", error);
    }
  };

  return (
    <aside className="fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r bg-white">
      {/* Logo */}
      <div className="flex h-20 items-center border-b px-6">
        <Link
          href="/admin/dashboard"
          className="text-2xl font-bold tracking-tight"
        >
          MONET
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-8 px-4 py-6">
        <div>
          <p className="mb-3 px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Main
          </p>

          <div className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;

              const isActive =
                pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-black text-white"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>

        <div>
          <p className="mb-3 px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            System
          </p>

          <div className="space-y-1">
            {secondaryNavigation.map((item) => {
              const Icon = item.icon;

              const isActive =
                pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-black text-white"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Sign Out */}
      <div className="border-t p-4">
        <button
          type="button"
          onClick={handleSignOut}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
