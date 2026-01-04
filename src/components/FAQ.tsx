"use client";
import { useState } from "react";
import styles from "./FAQ.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How do I get started with Cryptonit?",
    a: "Simply sign up for an account, verify your identity, and deposit funds to start trading instantly.",
  },
  {
    q: "Is my crypto secure?",
    a: "Yes, we use bank-grade security protocols including cold storage and 2FA to ensure your assets are always safe.",
  },
  {
    q: "What are the trading fees?",
    a: "We offer competitive fees starting at 0.1% per trade, with discounts for high-volume traders.",
  },
  {
    q: "Can I trade on mobile?",
    a: "Absolutely! Cryptonit is fully responsive and optimized for mobile devices so you can trade on the go.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={styles.section} id="faq">
      <h2 className={styles.title}>Frequently Asked Questions</h2>
      <div>
        {faqs.map((faq, i) => (
          <div key={i} className={styles.item}>
            <button
              className={styles.question}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              {faq.q}
              {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  className={styles.answer}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className={styles.answerContent}>{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
