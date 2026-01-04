"use client";

import { motion } from "framer-motion";
import { Plus, ArrowUpRight, ArrowDownLeft, Shield } from "lucide-react";
import styles from "../Dashboard.module.css";

export default function WalletPage() {
  const accounts = [
    {
      name: "Crypto Wallet",
      balance: "$32,450.00",
      sub: "12 Assets",
      type: "crypto",
    },
    {
      name: "USD Fiat Wallet",
      balance: "$10,142.10",
      sub: "Visa Savings",
      type: "fiat",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.responsiveHeader}>
        <div>
          <h2 style={{ fontSize: "24px", fontWeight: "700" }}>Your Wallets</h2>
          <p style={{ color: "var(--text-secondary)" }}>
            Manage your funds and assets securely.
          </p>
        </div>
        <button className="btn btn-primary" style={{ gap: "8px" }}>
          <Plus size={20} /> Add New Wallet
        </button>
      </div>

      <div className={styles.statsGrid}>
        {accounts.map((acc, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={styles.statCard}
            style={{
              border:
                acc.type === "crypto"
                  ? "1px solid var(--primary)"
                  : "1px solid var(--border)",
            }}
          >
            <span className={styles.statLabel}>{acc.name}</span>
            <span className={styles.statValue}>{acc.balance}</span>
            <span
              className={styles.statTrend}
              style={{ color: "var(--text-secondary)" }}
            >
              {acc.sub}
            </span>
          </motion.div>
        ))}
      </div>

      <div className={styles.card} style={{ marginTop: "40px" }}>
        <div className={styles.cardTitle}>Quick Actions</div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "16px",
          }}
        >
          <button
            style={{
              padding: "20px",
              background: "#111",
              border: "1px solid #222",
              borderRadius: "16px",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                padding: "12px",
                background: "rgba(0, 255, 157, 0.1)",
                borderRadius: "12px",
                color: "var(--primary)",
              }}
            >
              <ArrowUpRight size={24} />
            </div>
            <span>Send Crypto</span>
          </button>
          <button
            style={{
              padding: "20px",
              background: "#111",
              border: "1px solid #222",
              borderRadius: "16px",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                padding: "12px",
                background: "rgba(0, 255, 157, 0.1)",
                borderRadius: "12px",
                color: "var(--primary)",
              }}
            >
              <ArrowDownLeft size={24} />
            </div>
            <span>Receive Assets</span>
          </button>
          <button
            style={{
              padding: "20px",
              background: "#111",
              border: "1px solid #222",
              borderRadius: "16px",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                padding: "12px",
                background: "rgba(0, 255, 157, 0.1)",
                borderRadius: "12px",
                color: "var(--primary)",
              }}
            >
              <Shield size={24} />
            </div>
            <span>Buy & Stake</span>
          </button>
        </div>
      </div>
    </div>
  );
}
