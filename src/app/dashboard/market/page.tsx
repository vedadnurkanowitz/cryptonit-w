"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, TrendingDown, Search, Filter, X } from "lucide-react";
import styles from "../Dashboard.module.css";

const coins = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: "$64,210.00",
    change: "+2.4%",
    trend: "up",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: "$3,450.12",
    change: "-0.5%",
    trend: "down",
  },
  {
    name: "Solana",
    symbol: "SOL",
    price: "$142.50",
    change: "+4.8%",
    trend: "up",
  },
  {
    name: "Cardano",
    symbol: "ADA",
    price: "$0.45",
    change: "+1.2%",
    trend: "up",
  },
  {
    name: "Polkadot",
    symbol: "DOT",
    price: "$7.20",
    change: "-2.1%",
    trend: "down",
  },
  {
    name: "Chainlink",
    symbol: "LINK",
    price: "$18.40",
    change: "+0.8%",
    trend: "up",
  },
];

export default function MarketPage() {
  const [selectedCoin, setSelectedCoin] = useState<any>(null);
  const [amount, setAmount] = useState("");

  const handleTrade = (coin: any) => {
    setSelectedCoin(coin);
    setAmount("");
  };

  const handleClose = () => {
    setSelectedCoin(null);
  };

  return (
    <div>
      <div className={styles.responsiveHeader}>
        <div>
          <h2 style={{ fontSize: "24px", fontWeight: "700" }}>
            Market Overview
          </h2>
          <p style={{ color: "var(--text-secondary)" }}>
            Track the performance of top digital assets.
          </p>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.marketControls}>
          <div className={styles.responsiveSearch}>
            <Search className={styles.searchIcon} size={18} />
            <input
              type="text"
              placeholder="Search assets..."
              className={styles.searchInput}
              style={{ width: "100%" }}
            />
          </div>
          <button className={styles.marketFilterBtn}>
            <Filter size={18} /> Filters
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <div className={styles.marketTableHeaders}>
            <span>Asset</span>
            <span>Price</span>
            <span>24h Change</span>
            <span>Action</span>
          </div>

          {coins.map((coin, i) => (
            <motion.div
              key={coin.symbol}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className={styles.marketTableRow}
            >
              <div className={styles.marketAssetInfo}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    background: "#1a1a1a",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {coin.symbol[0]}
                </div>
                <div>
                  <span style={{ fontWeight: "600", display: "block" }}>
                    {coin.name}
                  </span>
                  <span
                    style={{ color: "var(--text-secondary)", fontSize: "12px" }}
                  >
                    {coin.symbol}
                  </span>
                </div>
              </div>
              <span style={{ fontWeight: "600" }}>{coin.price}</span>
              <span
                style={{
                  color: coin.trend === "up" ? "#00ff9d" : "#ff4d4d",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                {coin.trend === "up" ? (
                  <TrendingUp size={14} />
                ) : (
                  <TrendingDown size={14} />
                )}
                {coin.change}
              </span>
              <div>
                <button
                  className="btn btn-primary"
                  onClick={() => handleTrade(coin)}
                  style={{
                    height: "32px",
                    padding: "0 16px",
                    fontSize: "13px",
                  }}
                >
                  Trade
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCoin && (
          <div className={styles.modalOverlay} onClick={handleClose}>
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.modalHeader}>
                <div className={styles.modalTitle}>
                  Trade {selectedCoin.name}
                  <span
                    style={{
                      fontSize: "13px",
                      color: "var(--text-secondary)",
                      background: "rgba(255,255,255,0.1)",
                      padding: "2px 6px",
                      borderRadius: "4px",
                    }}
                  >
                    {selectedCoin.symbol}
                  </span>
                </div>
                <button className={styles.modalCloseBtn} onClick={handleClose}>
                  <X size={20} />
                </button>
              </div>
              <div className={styles.modalBody}>
                <div className="flex-between" style={{ marginBottom: "20px" }}>
                  <span
                    style={{ color: "var(--text-secondary)", fontSize: "14px" }}
                  >
                    Current Price
                  </span>
                  <span style={{ fontWeight: "700", fontSize: "16px" }}>
                    {selectedCoin.price}
                  </span>
                </div>

                <div className={styles.tradeInputGroup}>
                  <label className={styles.tradeLabel}>Amount</label>
                  <div className={styles.tradeInputWrapper}>
                    <input
                      type="number"
                      placeholder="0.00"
                      className={styles.tradeInput}
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                    <span className={styles.usdEquiv}>
                      USD ≈ $
                      {(
                        (parseFloat(amount) || 0) *
                        parseFloat(selectedCoin.price.replace(/[^0-9.]/g, ""))
                      ).toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className={styles.modalActions}>
                  <button className={styles.btnBuy}>
                    Buy {selectedCoin.symbol}
                  </button>
                  <button className={styles.btnSell}>
                    Sell {selectedCoin.symbol}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
