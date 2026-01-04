"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import { LogOut, LayoutDashboard, Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    setIsMenuOpen(false); // Close menu on route change
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    router.push("/");
  };

  return (
    <>
      <motion.nav
        className={styles.nav}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container flex-between">
          <div style={{ display: "flex", alignItems: "center", gap: "48px" }}>
            <Link href="/" className={styles.logo}>
              Cryptonit<span className="text-primary">.</span>
            </Link>

            <div className={styles.links}>
              <Link
                href={isHome ? "#features" : "/#features"}
                className={styles.link}
              >
                Features
              </Link>
              <Link
                href="/market"
                className={`${styles.link} ${
                  pathname === "/market" ? styles.active : ""
                }`}
              >
                Market
              </Link>
              <Link
                href="/pricing"
                className={`${styles.link} ${
                  pathname === "/pricing" ? styles.active : ""
                }`}
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className={`${styles.link} ${
                  pathname === "/about" ? styles.active : ""
                }`}
              >
                About
              </Link>
              <Link
                href="/careers"
                className={`${styles.link} ${
                  pathname === "/careers" ? styles.active : ""
                }`}
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className={`${styles.link} ${
                  pathname === "/contact" ? styles.active : ""
                }`}
              >
                Contact
              </Link>
            </div>
          </div>

          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <div className={styles.desktopActions}>
              {isLoggedIn ? (
                <>
                  <Link
                    href="/dashboard"
                    className="btn btn-secondary"
                    style={{
                      height: "40px",
                      fontSize: "14px",
                      padding: "0 20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                    }}
                  >
                    <LayoutDashboard size={16} />
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="btn btn-primary"
                    style={{
                      height: "40px",
                      fontSize: "14px",
                      padding: "0 20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                    }}
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  href="/signup"
                  className="btn btn-primary"
                  style={{
                    height: "40px",
                    fontSize: "14px",
                    padding: "0 20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Get Started
                </Link>
              )}
            </div>

            <button
              className={styles.mobileMenuBtn}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={styles.mobileOverlay}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className={styles.mobileLinks}>
              <Link
                href={isHome ? "#features" : "/#features"}
                className={styles.mobileLink}
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/market"
                className={`${styles.mobileLink} ${
                  pathname === "/market" ? styles.active : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Market
              </Link>
              <Link
                href="/pricing"
                className={`${styles.mobileLink} ${
                  pathname === "/pricing" ? styles.active : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className={`${styles.mobileLink} ${
                  pathname === "/about" ? styles.active : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/careers"
                className={`${styles.mobileLink} ${
                  pathname === "/careers" ? styles.active : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className={`${styles.mobileLink} ${
                  pathname === "/contact" ? styles.active : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>

            <div className={styles.mobileActions}>
              {isLoggedIn ? (
                <>
                  <Link
                    href="/dashboard"
                    className="btn btn-secondary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <LayoutDashboard size={18} />
                    Dashboard
                  </Link>
                  <button onClick={handleLogout} className="btn btn-primary">
                    <LogOut size={18} />
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  href="/signup"
                  className="btn btn-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
