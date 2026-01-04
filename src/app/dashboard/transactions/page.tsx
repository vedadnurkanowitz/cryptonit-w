"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownLeft, RefreshCcw, Search } from "lucide-react";
import styles from "../Dashboard.module.css";

const transactions = [
  {
    id: "1",
    type: "Buy",
    asset: "Bitcoin",
    amount: "+0.045 BTC",
    value: "$2,890.00",
    date: "Oct 12, 2023",
    status: "Completed",
  },
  {
    id: "2",
    type: "Sell",
    asset: "Ethereum",
    amount: "-1.24 ETH",
    value: "$4,210.00",
    date: "Oct 10, 2023",
    status: "Completed",
  },
  {
    id: "3",
    type: "Transfer",
    asset: "Solana",
    amount: "14.50 SOL",
    value: "$2,045.00",
    date: "Oct 08, 2023",
    status: "Pending",
  },
  {
    id: "4",
    type: "Buy",
    asset: "Bitcoin",
    amount: "+0.012 BTC",
    value: "$780.00",
    date: "Oct 05, 2023",
    status: "Completed",
  },
  {
    id: "5",
    type: "Buy",
    asset: "Ethereum",
    amount: "+0.50 ETH",
    value: "$1,725.00",
    date: "Oct 02, 2023",
    status: "Cancelled",
  },
  {
    id: "6",
    type: "Buy",
    asset: "Solana",
    amount: "+25.00 SOL",
    value: "$5,125.00",
    date: "Sep 28, 2023",
    status: "Completed",
  },
  {
    id: "7",
    type: "Sell",
    asset: "Bitcoin",
    amount: "-0.05 BTC",
    value: "$3,100.00",
    date: "Sep 25, 2023",
    status: "Completed",
  },
];

export default function TransactionsPage() {
  return (
    <div>
      <div className={styles.responsiveHeader}>
        <div>
          <h2 style={{ fontSize: "24px", fontWeight: "700" }}>
            Transaction History
          </h2>
          <p style={{ color: "var(--text-secondary)" }}>
            View and download your full activity log.
          </p>
        </div>
        <button
          style={{
            padding: "10px 16px",
            background: "#111",
            border: "1px solid #222",
            borderRadius: "12px",
            color: "#ccc",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          Export CSV
        </button>
      </div>

      <div className={styles.card}>
        <div className={styles.responsiveSearch}>
          <Search
            style={{
              position: "absolute",
              left: "12px",
              top: "10px",
              color: "#555",
            }}
            size={18}
          />
          <input
            type="text"
            placeholder="Search by ID, asset or date..."
            style={{
              background: "#111",
              border: "1px solid #222",
              borderRadius: "12px",
              padding: "8px 12px 8px 40px",
              color: "#fff",
              width: "100%",
              marginBottom: "24px",
            }}
          />
        </div>

        <div className={styles.transactionsTableContainer}>
          <div className={styles.transactionsHeader}>
            <span style={{ paddingLeft: "20px" }}>Type</span>
            <span>Asset</span>
            <span style={{ textAlign: "right" }}>Amount</span>
            <span style={{ textAlign: "right" }}>Value</span>
            <span>Date</span>
            <span style={{ textAlign: "center" }}>Status</span>
          </div>

          <div>
            {transactions.map((tx, i) => (
              <motion.div
                key={tx.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className={styles.transactionRow}
              >
                {/* 1. Type */}
                <div className={styles.transactionType}>
                  <div
                    className={styles.transactionIcon}
                    style={{
                      background:
                        tx.type === "Buy"
                          ? "rgba(0, 255, 157, 0.1)"
                          : tx.type === "Sell"
                          ? "rgba(255, 77, 77, 0.1)"
                          : "rgba(255, 255, 255, 0.05)",
                      color:
                        tx.type === "Buy"
                          ? "#00ff9d"
                          : tx.type === "Sell"
                          ? "#ff4d4d"
                          : "#ccc",
                    }}
                  >
                    {tx.type === "Buy" ? (
                      <ArrowDownLeft size={16} />
                    ) : tx.type === "Sell" ? (
                      <ArrowUpRight size={16} />
                    ) : (
                      <RefreshCcw size={16} />
                    )}
                  </div>
                  <span style={{ fontWeight: "500" }}>{tx.type}</span>
                </div>

                {/* 2. Asset */}
                <div style={{ fontWeight: "600" }}>{tx.asset}</div>

                {/* 3. Amount */}
                <div style={{ textAlign: "right" }}>{tx.amount}</div>

                {/* 4. Value */}
                <div
                  style={{ textAlign: "right", color: "var(--text-secondary)" }}
                >
                  {tx.value}
                </div>

                {/* 5. Date */}
                <div style={{ color: "var(--text-secondary)" }}>{tx.date}</div>

                {/* 6. Status */}
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <span
                    className={styles.transactionStatus}
                    style={{
                      background:
                        tx.status === "Completed"
                          ? "rgba(0, 255, 157, 0.1)"
                          : tx.status === "Pending"
                          ? "rgba(255, 165, 0, 0.1)"
                          : "rgba(255, 77, 77, 0.1)",
                      color:
                        tx.status === "Completed"
                          ? "#00ff9d"
                          : tx.status === "Pending"
                          ? "#ffa500"
                          : "#ff4d4d",
                    }}
                  >
                    {tx.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
