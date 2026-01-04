"use client";
import styles from "./CryptoMarquee.module.css";
import { motion } from "framer-motion";

const coins = [
  { name: "Bitcoin", symbol: "BTC", price: "$45,234.12", change: "+2.4%" },
  { name: "Ethereum", symbol: "ETH", price: "$2,341.55", change: "+1.8%" },
  { name: "Solana", symbol: "SOL", price: "$98.45", change: "+5.6%" },
  { name: "Cardano", symbol: "ADA", price: "$0.55", change: "-0.4%" },
  { name: "Polkadot", symbol: "DOT", price: "$7.88", change: "+1.2%" },
  { name: "Ripple", symbol: "XRP", price: "$0.62", change: "+0.8%" },
  { name: "Dogecoin", symbol: "DOGE", price: "$0.08", change: "-1.2%" },
];

export default function CryptoMarquee() {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.track}
        animate={{ x: "-50%" }}
        transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
      >
        {[...coins, ...coins, ...coins, ...coins].map((coin, i) => (
          <div key={i} className={styles.item}>
            <span className={styles.symbol}>{coin.symbol}</span>
            <span className={styles.name}>{coin.name}</span>
            <span className={styles.price}>{coin.price}</span>
            <span
              className={
                coin.change.startsWith("+") ? styles.positive : styles.negative
              }
            >
              {coin.change}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
