"use client";
import styles from "./HowItWorks.module.css";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Create Account",
    desc: "Sign up for a free account in less than 30 seconds.",
  },
  {
    num: "02",
    title: "Link Bank",
    desc: "Connect your bank account or card to deposit funds securely.",
  },
  {
    num: "03",
    title: "Start Trading",
    desc: "Buy, sell, and trade over 500 cryptocurrencies instantly.",
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how-it-works">
      <div className="container">
        <h2 className={styles.title}>How it works</h2>
        <div className={styles.steps}>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className={styles.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={styles.number}>{step.num}</div>
              <div className={styles.content}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
