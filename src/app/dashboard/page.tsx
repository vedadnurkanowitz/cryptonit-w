"use client";

import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Bitcoin,
  ChevronRight,
  CircleDollarSign,
  Coins,
} from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import styles from "./Dashboard.module.css";

const assets = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: "$64,210.00",
    change: "+1.2%",
    trend: "up",
    icon: <Bitcoin size={24} />,
    color: "#F7931A",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: "$3,450.12",
    change: "-0.5%",
    trend: "down",
    icon: <Coins size={24} />,
    color: "#627EEA",
  },
  {
    name: "Solana",
    symbol: "SOL",
    price: "$142.50",
    change: "+4.8%",
    trend: "up",
    icon: <CircleDollarSign size={24} />,
    color: "#26A17B",
  },
];

export default function DashboardPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("search")?.toLowerCase() || "";

  const filteredAssets = assets.filter(
    (asset) =>
      asset.name.toLowerCase().includes(query) ||
      asset.symbol.toLowerCase().includes(query)
  );

  return (
    <>
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Total Balance</span>
          <div className={styles.statRow}>
            <span className={styles.statValue}>$42,592.10</span>
            <span className={`${styles.trendPill} ${styles.trendUpPill}`}>
              <ArrowUpRight size={14} /> +2.4% today
            </span>
          </div>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Monthly Profit</span>
          <div className={styles.statRow}>
            <span className={styles.statValue}>$3,210.45</span>
            <span className={`${styles.trendPill} ${styles.trendUpPill}`}>
              <ArrowUpRight size={14} /> +12.5%
            </span>
          </div>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Total Assets</span>
          <div className={styles.statRow}>
            <span className={styles.statValue}>14 Assets</span>
          </div>
          <span
            className={styles.statTrend}
            style={{ color: "#888", marginTop: "4px" }}
          >
            4 major, 10 altcoins
          </span>
        </div>
      </div>

      <div className={styles.contentGrid}>
        {/* Portfolio Chart */}
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            Portfolio Performance
            <select
              style={{
                background: "none",
                border: "1px solid #222",
                color: "#888",
                fontSize: "12px",
                padding: "4px 8px",
                borderRadius: "8px",
              }}
            >
              <option>Last 7 days</option>
              <option>Last 30 days</option>
            </select>
          </div>
          <div
            style={{
              height: "300px",
              width: "100%",
              background:
                "linear-gradient(180deg, rgba(0,255,157,0.05) 0%, transparent 100%)",
              borderRadius: "12px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: "40px",
                left: "0",
                right: "0",
                height: "100px",
                display: "flex",
                alignItems: "flex-end",
                gap: "2px",
                padding: "0 20px",
              }}
            >
              {[40, 60, 45, 70, 65, 85, 90, 80, 95, 100, 85, 90, 110].map(
                (h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: i * 0.05, duration: 0.5 }}
                    style={{
                      flex: 1,
                      background: "var(--primary)",
                      opacity: 0.3 + i * 0.05,
                      borderRadius: "4px 4px 0 0",
                    }}
                  />
                )
              )}
            </div>
          </div>
        </div>

        {/* Recent Assets */}
        <div className={styles.card}>
          <div className={styles.cardTitle}>My Assets</div>
          <div className={styles.assetsList}>
            {filteredAssets.length > 0 ? (
              filteredAssets.map((asset) => (
                <div key={asset.symbol} className={styles.assetItem}>
                  <div
                    className={styles.assetIcon}
                    style={{ color: asset.color }}
                  >
                    {asset.icon}
                  </div>
                  <div className={styles.assetInfo}>
                    <span className={styles.assetName}>{asset.name}</span>
                    <span className={styles.assetSymbol}>{asset.symbol}</span>
                  </div>
                  <div className={styles.assetValues}>
                    <span className={styles.assetPrice}>{asset.price}</span>
                    <span
                      className={`${styles.assetTrend} ${
                        asset.trend === "up"
                          ? styles.assetTrendUp
                          : styles.assetTrendDown
                      }`}
                    >
                      {asset.trend === "up" ? (
                        <ArrowUpRight size={12} strokeWidth={2.5} />
                      ) : (
                        <ArrowDownRight size={12} strokeWidth={2.5} />
                      )}
                      {asset.change}
                    </span>
                  </div>
                  <ChevronRight size={16} className={styles.assetChevron} />
                </div>
              ))
            ) : (
              <div
                style={{ color: "#888", textAlign: "center", padding: "20px" }}
              >
                No assets found matching "{query}"
              </div>
            )}
          </div>
          <Link href="/dashboard/wallet" className={styles.viewAllLink}>
            View all assets
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </>
  );
}
