"use client";
import styles from "./Hero.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Hero3D from "./Hero3D";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} />
      <div className="container">
        <motion.div
          className={styles.pill}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Sparkles size={14} />
          <span>Trusted by 10M+ traders worldwide</span>
        </motion.div>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          The premium crypto <br />
          <span className="text-gradient">trading platform</span>
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Buy and sell crypto with ease. Cryptonit is the best place to trade
          your digital assets with low fees and high security.
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className={styles.desktopActions}>
            <Link href="/signup" className="btn btn-primary">
              Get Started Now
            </Link>
            <Link href="/market" className="btn btn-secondary">
              View Market
            </Link>
          </div>

          <div className={styles.mobileActions}>
            <Link href="/" className="btn btn-secondary">
              Logout
            </Link>
            <Link href="/dashboard" className="btn btn-primary">
              Dashboard
            </Link>
          </div>
        </motion.div>

        <motion.div
          className={styles.dashboardWrapper}
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div
            style={{
              width: "100%",
              height: "500px",
              position: "relative",
            }}
          >
            <Hero3D />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
