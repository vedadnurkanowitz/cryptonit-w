"use client";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.brand}>
            <h3>Cryptonit.</h3>
            <p>
              The premium crypto trading platform for everyone. Start your
              journey today.
            </p>
          </div>
          <div className={styles.linksWrapper}>
            <div className={styles.column}>
              <h4>Navigation</h4>
              <Link href="/market">Market</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/about">About Us</Link>
              <Link href="/careers">Careers</Link>
              <Link href="/contact">Contact</Link>
            </div>

            <div className={styles.column}>
              <h4>Socials</h4>
              <Link href="#">Twitter</Link>
              <Link href="#">Instagram</Link>
              <Link href="#">LinkedIn</Link>
            </div>
            <div className={styles.column}>
              <h4>Legal</h4>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: "60px",
            textAlign: "center",
            color: "#444",
            fontSize: "12px",
          }}
        >
          © 2024 Cryptonit. All rights reserved. Recreated by Antigravity.
        </div>
      </div>
    </footer>
  );
}
