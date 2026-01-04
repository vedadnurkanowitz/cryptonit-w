"use client";
import styles from "./Testimonials.module.css";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Cryptonit has completely changed how I trade assets.",
    name: "Alex Morgan",
    role: "Day Trader",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    text: "The best platform for beginners and pros alike.",
    name: "Sarah Chen",
    role: "Crypto Enthusiast",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    text: "Security is my top priority, and Cryptonit delivers.",
    name: "Mike Ross",
    role: "Investor",
    avatar: "https://i.pravatar.cc/150?img=33",
  },
  {
    text: "Low fees and fast transactions. Love it.",
    name: "Jessica Suits",
    role: "Trader",
    avatar: "https://i.pravatar.cc/150?img=44",
  },
  {
    text: "The dashboard is incredibly intuitive and fast.",
    name: "David Kim",
    role: "Analyst",
    avatar: "https://i.pravatar.cc/150?img=68",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>What our users say</h2>
      <div style={{ overflow: "hidden" }}>
        <motion.div
          className={styles.scroller}
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        >
          {[
            ...testimonials,
            ...testimonials,
            ...testimonials,
            ...testimonials,
          ].map((t, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.stars}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className={styles.text}>"{t.text}"</p>
              <div className={styles.author}>
                <img src={t.avatar} alt={t.name} className={styles.avatar} />
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
