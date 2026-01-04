"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  Wallet,
  TrendingUp,
  History,
  Settings,
  LogOut,
  Bell,
  Search,
  Menu,
  X,
} from "lucide-react";
import styles from "./Dashboard.module.css";
import { motion, AnimatePresence } from "framer-motion";
import DashboardSearch from "./DashboardSearch";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false); // Close on navigation
  }, [pathname]);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/");
  };

  if (loading) return null;

  const navItems = [
    { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
    { href: "/dashboard/wallet", label: "Wallet", icon: Wallet },
    { href: "/dashboard/market", label: "Market", icon: TrendingUp },
    { href: "/dashboard/transactions", label: "Transactions", icon: History },
    { href: "/dashboard/settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className={styles.dashboard}>
      <aside className={styles.sidebar}>
        <Link href="/" className={styles.logo}>
          Cryptonit<span className="text-primary">.</span>
        </Link>

        <nav className={styles.nav}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navItem} ${
                  isActive ? styles.activeNavItem : ""
                }`}
              >
                <Icon size={20} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button onClick={handleLogout} className={styles.logoutBtn}>
          <LogOut size={20} />
          Logout
        </button>
      </aside>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className={styles.mobileBackdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.aside
              className={styles.mobileSidebar}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className={styles.mobileSidebarHeader}>
                <Link
                  href="/"
                  className={styles.logo}
                  style={{ marginBottom: 0 }}
                >
                  Cryptonit<span className="text-primary">.</span>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={styles.mobileCloseBtn}
                >
                  <X size={24} />
                </button>
              </div>

              <nav className={styles.nav} style={{ marginTop: "40px" }}>
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`${styles.navItem} ${
                        isActive ? styles.activeNavItem : ""
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Icon size={20} />
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <button onClick={handleLogout} className={styles.logoutBtn}>
                <LogOut size={20} />
                Logout
              </button>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <main className={styles.main}>
        <header className={styles.mobileHeader}>
          <Link href="/" className={styles.logo} style={{ marginBottom: 0 }}>
            Cryptonit<span className="text-primary">.</span>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className={styles.mobileMenuBtn}
          >
            <Menu size={24} />
          </button>
        </header>

        <header className={styles.header}>
          <div className={styles.welcome}>
            <h1>
              {navItems.find((item) => item.href === pathname)?.label ||
                "Dashboard"}
            </h1>
            <p>Welcome back, Alex!</p>
          </div>
          <div className={styles.headerActions}>
            <Suspense
              fallback={
                <div className={styles.searchWrapper}>
                  <Search className={styles.searchIcon} size={18} />
                  <input
                    type="text"
                    placeholder="Search assets..."
                    className={styles.searchInput}
                    disabled
                  />
                </div>
              }
            >
              <DashboardSearch />
            </Suspense>
            <button onClick={handleLogout} className={styles.signOutBtn}>
              <LogOut size={18} />
              <span className="hidden md:inline">Sign Out</span>
            </button>
            <button className={styles.bellBtn}>
              <Bell size={20} />
            </button>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}
