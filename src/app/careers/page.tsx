"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./Careers.module.css";
import {
  Code,
  Palette,
  Search,
  Zap,
  Shield,
  Globe,
  Coffee,
  Heart,
  Laptop,
  Briefcase,
  ChevronRight,
  MapPin,
  Clock,
} from "lucide-react";
import Link from "next/link";

const departments = ["All", "Engineering", "Design", "Product", "Growth"];

const positions = [
  {
    id: 1,
    title: "Senior Full Stack Engineer",
    dept: "Engineering",
    location: "Remote / San Francisco",
    type: "Full-time",
  },
  {
    id: 2,
    title: "Lead Product Designer",
    dept: "Design",
    location: "Remote / London",
    type: "Full-time",
  },
  {
    id: 3,
    title: "Smart Contract Developer (Rust)",
    dept: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: 4,
    title: "Product Marketing Manager",
    dept: "Growth",
    location: "New York",
    type: "Full-time",
  },
  {
    id: 5,
    title: "Technical Product Manager",
    dept: "Product",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: 6,
    title: "DevOps Architect",
    dept: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
];

const values = [
  {
    icon: <Zap size={32} />,
    title: "Extreme Speed",
    text: "The crypto world moves fast. We move faster. We ship high-quality code daily and iterate in real-time.",
  },
  {
    icon: <Shield size={32} />,
    title: "Deep Trust",
    text: "We deal with people's wealth. Integrity and security are not just features; they are our moral compass.",
  },
  {
    icon: <Globe size={32} />,
    title: "Global First",
    text: "Our team spans 20+ countries. We believe talent is everywhere and borders shouldn't limit it.",
  },
];

const perks = [
  {
    icon: <Laptop size={24} />,
    title: "Remote First",
    text: "Work from anywhere in the world on your own schedule.",
  },
  {
    icon: <Briefcase size={24} />,
    title: "Equity & Ownership",
    text: "Everyone is an owner with competitive stock options.",
  },
  {
    icon: <Heart size={24} />,
    title: "Wellness Stipend",
    text: "Monthly budget for gym, meditation, or any mental health app.",
  },
  {
    icon: <Coffee size={24} />,
    title: "Learning Budget",
    text: "$2,000 yearly stipend for books, courses, or conferences.",
  },
];

export default function CareersPage() {
  const [activeDept, setActiveDept] = useState("All");

  const filteredPositions = positions.filter(
    (p) => activeDept === "All" || p.dept === activeDept
  );

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <main className={styles.main}>
        <div className="container">
          {/* Hero */}
          <section className={styles.hero}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className={styles.badge}>We're Hiring</span>
              <h1 className={styles.title}>
                Build the Future of <br />
                Financial Autonomy
              </h1>
              <p className={styles.lead}>
                Cryptix is looking for pioneers, builders, and dreamers to help
                us scale the most user-centric crypto platform on the planet.
              </p>
            </motion.div>
          </section>

          {/* Values */}
          <section className={styles.valuesSection}>
            <div className={styles.sectionHeader}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2>Our Culture</h2>
                <p>
                  We're a mission-driven team working on the hardest problems in
                  fintech.
                </p>
              </motion.div>
            </div>

            <div className={styles.valuesGrid}>
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  className={styles.valueCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className={styles.iconWrapper}>{v.icon}</div>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Open Positions */}
          <section className={styles.positionsSection} id="open-roles">
            <div className={styles.positionsHeader}>
              <h2>Open Roles</h2>
              <div className={styles.filterWrapper}>
                {departments.map((d) => (
                  <button
                    key={d}
                    className={`${styles.filterBtn} ${
                      activeDept === d ? styles.activeFilter : ""
                    }`}
                    onClick={() => setActiveDept(d)}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.positionsList}>
              <AnimatePresence mode="popLayout">
                {filteredPositions.map((p) => (
                  <motion.div
                    key={p.id}
                    layout
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={`/contact?role=${encodeURIComponent(p.title)}`}
                      className={styles.positionItem}
                    >
                      <div className={styles.posInfo}>
                        <h4>{p.title}</h4>
                        <div className={styles.posMeta}>
                          <span
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "6px",
                            }}
                          >
                            <Briefcase size={14} /> {p.dept}
                          </span>
                          <span
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "6px",
                            }}
                          >
                            <MapPin size={14} /> {p.location}
                          </span>
                          <span
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "6px",
                            }}
                          >
                            <Clock size={14} /> {p.type}
                          </span>
                        </div>
                      </div>
                      <div className={styles.applyBtn}>
                        Apply Now{" "}
                        <ChevronRight
                          size={16}
                          style={{ display: "inline", marginBottom: "-3px" }}
                        />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </section>

          {/* Perks */}
          <section className={styles.perksSection}>
            <div className={styles.sectionHeader}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2>Perks & Benefits</h2>
                <p>We take care of our people so they can focus on building.</p>
              </motion.div>
            </div>

            <div className={styles.perksGrid}>
              {perks.map((perk, i) => (
                <motion.div
                  key={perk.title}
                  className={styles.perkCard}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className={styles.perkIcon}>{perk.icon}</div>
                  <h4>{perk.title}</h4>
                  <p>{perk.text}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section style={{ margin: "100px 0", textAlign: "center" }}>
            <div
              style={{
                background: "var(--primary)",
                padding: "100px 48px",
                borderRadius: "64px",
                color: "#000",
              }}
            >
              <h2
                style={{
                  fontSize: "48px",
                  fontWeight: "800",
                  marginBottom: "24px",
                  letterSpacing: "-2px",
                }}
              >
                Don't see a fit?
              </h2>
              <p
                style={{ fontSize: "20px", marginBottom: "40px", opacity: 0.8 }}
              >
                We're always looking for exceptional talent. <br />
                Drop us a line and tell us what you can bring to the table.
              </p>
              <Link
                href="/contact"
                className="btn btn-primary"
                style={{
                  background: "#000",
                  color: "#fff",
                  height: "60px",
                  padding: "0 40px",
                }}
              >
                General Application
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
