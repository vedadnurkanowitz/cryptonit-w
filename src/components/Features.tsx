"use client";
import styles from "./Features.module.css";
import { motion } from "framer-motion";
import {
  BarChart2,
  Shield,
  Zap,
  Wallet,
  Globe,
  Lock,
  TrendingUp,
  Users,
} from "lucide-react";

const features = [
  {
    icon: <Zap size={32} />,
    title: "Real-Time Trading",
    desc: "Experience lightning-fast execution with our advanced trading engine. Get real-time market data updates, instant order processing, and zero lag for seamless trading across all major cryptocurrencies.",
    size: "large", // spans 2 columns
  },
  {
    icon: <Shield size={32} />,
    title: "Bank-Grade Security",
    desc: "Your assets are protected by military-grade encryption, multi-signature wallets, and cold storage solutions. We implement industry-leading security protocols to ensure your funds are always safe and secure.",
    size: "large", // spans 2 columns
  },
  {
    icon: <BarChart2 size={28} />,
    title: "Advanced Charts",
    desc: "Access professional-grade charting tools with 50+ technical indicators, drawing tools, and customizable layouts for in-depth market analysis.",
    size: "small",
  },
  {
    icon: <Wallet size={28} />,
    title: "Multi-Wallet Support",
    desc: "Connect and manage multiple wallets seamlessly. Support for MetaMask, WalletConnect, Ledger, and more in one unified dashboard.",
    size: "small",
  },
  {
    icon: <Globe size={28} />,
    title: "Global Access",
    desc: "Trade from anywhere in the world, 24/7. Our platform is available in 150+ countries with support for multiple languages and currencies.",
    size: "small",
  },
  {
    icon: <Lock size={28} />,
    title: "2FA Protection",
    desc: "Enhanced account security with two-factor authentication, biometric login, and email verification to keep your account protected at all times.",
    size: "small",
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Portfolio Analytics",
    desc: "Track your performance with detailed analytics, profit/loss reports, and AI-powered insights. Get personalized recommendations to optimize your trading strategy and maximize returns.",
    size: "medium",
  },
  {
    icon: <Users size={32} />,
    title: "24/7 Support",
    desc: "Our dedicated support team is available around the clock to assist you. Get help via live chat, email, or phone whenever you need it. Your success is our priority.",
    size: "medium",
  },
];

export default function Features() {
  return (
    <section className={styles.section} id="features">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Why choose Cryptonit?</h2>
          <p className={styles.subtitle}>
            We provide the best tools and services for crypto trading.
          </p>
        </div>

        <div className={styles.bentoGrid}>
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className={`${styles.bentoCard} ${styles[feature.size]}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className={styles.icon}>{feature.icon}</div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDesc}>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
