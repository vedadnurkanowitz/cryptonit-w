"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../signup/Signup.module.css";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/dashboard");
    }, 1200);
  };

  return (
    <div className={styles.page}>
      <div className={styles.glow} />

      <Link href="/" className={styles.backLink}>
        <ChevronLeft size={18} />
        Back to Home
      </Link>

      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.card}>
          <div className={styles.header}>
            <h1 className={styles.title}>Welcome back</h1>
            <p className={styles.subtitle}>Log in to your Cryptonit account</p>
          </div>

          <form className={styles.form} onSubmit={handleLogin}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Email address</label>
              <input
                type="email"
                placeholder="name@example.com"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <div className={styles.labelWrapper}>
                <label className={styles.label}>Password</label>
                <Link
                  href="#"
                  className={styles.loginLink}
                  style={{ fontSize: "12px" }}
                >
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className={`${styles.submitBtn} btn btn-primary`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging in..." : "Log In"}
            </button>
          </form>

          <p className={styles.footer}>
            Don't have an account?{" "}
            <Link href="/signup" className={styles.loginLink}>
              Sign up
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
