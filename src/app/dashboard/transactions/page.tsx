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
            }}
          />
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr
                style={{
                  textAlign: "left",
                  color: "var(--text-secondary)",
                  fontSize: "14px",
                  borderBottom: "1px solid #222",
                }}
              >
                <th style={{ padding: "16px 20px" }}>Type</th>
                <th style={{ padding: "16px 20px" }}>Asset</th>
                <th style={{ padding: "16px 20px" }}>Amount</th>
                <th style={{ padding: "16px 20px" }}>Value</th>
                <th style={{ padding: "16px 20px" }}>Date</th>
                <th style={{ padding: "16px 20px" }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, i) => (
                <motion.tr
                  key={tx.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,0.03)",
                    fontSize: "15px",
                  }}
                >
                  <td style={{ padding: "16px 20px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <div
                        style={{
                          padding: "6px",
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
                          borderRadius: "8px",
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
                      {tx.type}
                    </div>
                  </td>
                  <td style={{ padding: "16px 20px", fontWeight: "600" }}>
                    {tx.asset}
                  </td>
                  <td style={{ padding: "16px 20px" }}>{tx.amount}</td>
                  <td style={{ padding: "16px 20px" }}>{tx.value}</td>
                  <td
                    style={{
                      padding: "16px 20px",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {tx.date}
                  </td>
                  <td style={{ padding: "16px 20px" }}>
                    <span
                      style={{
                        padding: "4px 10px",
                        borderRadius: "100px",
                        fontSize: "12px",
                        fontWeight: "600",
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
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
