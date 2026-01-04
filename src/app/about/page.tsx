"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./About.module.css";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ShieldCheck, Eye, Zap, Globe, Users, Trophy } from "lucide-react";

export default function AboutPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <motion.main
        className={styles.main}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <motion.h1 className={styles.title} variants={itemVariants}>
              Building the Future <br />
              of Global Assets
            </motion.h1>
            <motion.p className={styles.lead} variants={itemVariants}>
              Cryptonit is on a mission to democratize finance and empower
              everyone, everywhere to participate in the next generation of
              global currency.
            </motion.p>
          </div>
        </section>

        {/* Partners Section */}
        <section className={styles.partners}>
          <div className="container">
            <motion.div className={styles.partnerGrid} variants={itemVariants}>
              <div className={styles.partnerItem}>COINBASE VENTURES</div>
              <div className={styles.partnerItem}>ANDREESSEN HOROWITZ</div>
              <div className={styles.partnerItem}>SEQUOIA</div>
              <div className={styles.partnerItem}>BINANCE LABS</div>
              <div className={styles.partnerItem}>PARADIGM</div>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className={styles.story}>
          <div className="container">
            <div className={styles.storyGrid}>
              <motion.div variants={itemVariants}>
                <h2 className={styles.storyTitle}>Our Journey to 10M Users</h2>
                <p className={styles.storyText}>
                  Founded in 2021 by a group of cryptographers and finance
                  veterans, Cryptonit was born out of a simple realization: the
                  traditional financial system is broken, slow, and
                  exclusionary.
                </p>
                <p className={styles.storyText}>
                  We started with a small team in San Francisco, working 24/7 to
                  build the world's most secure and user-friendly gateway to the
                  blockchain. Today, we are a global organization serving
                  millions of users across 150+ countries.
                </p>

                <div className={styles.timeline}>
                  <div className={styles.timelineItem}>
                    <span className={styles.year}>2021</span>
                    <div className={styles.event}>
                      <h4>The Beginning</h4>
                      <p>
                        Cryptonit was founded and raised $10M in Seed funding.
                      </p>
                    </div>
                  </div>
                  <div className={styles.timelineItem}>
                    <span className={styles.year}>2022</span>
                    <div className={styles.event}>
                      <h4>Global Expansion</h4>
                      <p>
                        Launched in 50 countries and reached 1M active users.
                      </p>
                    </div>
                  </div>
                  <div className={styles.timelineItem}>
                    <span className={styles.year}>2024</span>
                    <div className={styles.event}>
                      <h4>Modern Era</h4>
                      <p>
                        Relaunched as a full-service wealth management platform.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className={styles.missionImage}
              >
                <div className={styles.gridPattern} />

                <div className={styles.chartContainer}>
                  {[35, 45, 40, 60, 55, 75, 70, 90, 85, 100, 95, 110].map(
                    (h, i) => (
                      <motion.div
                        key={i}
                        className={styles.chartBar}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h * 0.6}%` }}
                        transition={{
                          delay: i * 0.05,
                          duration: 1,
                          ease: "circOut",
                        }}
                      />
                    )
                  )}
                </div>

                <motion.div
                  className={styles.floatingBadge}
                  style={{ top: "15%", right: "10%" }}
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className={styles.badgeIcon}>
                    <Users size={20} />
                  </div>
                  <div className={styles.badgeContent}>
                    <h5>Active Users</h5>
                    <span>14.2M</span>
                  </div>
                </motion.div>

                <motion.div
                  className={styles.floatingBadge}
                  style={{ top: "35%", left: "8%" }}
                  animate={{ y: [0, 12, 0] }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <div className={styles.badgeIcon}>
                    <Globe size={20} />
                  </div>
                  <div className={styles.badgeContent}>
                    <h5>Global Reach</h5>
                    <span>150+ Countries</span>
                  </div>
                </motion.div>

                <motion.div
                  className={styles.floatingBadge}
                  style={{ bottom: "25%", right: "15%" }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <div className={styles.badgeIcon}>
                    <Trophy size={20} />
                  </div>
                  <div className={styles.badgeContent}>
                    <h5>Awards Won</h5>
                    <span>24 Global Awards</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className={styles.mission}>
          <div className="container">
            <motion.h2 className={styles.sectionTitle} variants={itemVariants}>
              Global Impact in Numbers
            </motion.h2>
            <div className={styles.stats}>
              <motion.div className={styles.statItem} variants={itemVariants}>
                <span className={styles.statValue}>10M+</span>
                <span className={styles.statLabel}>Active Traders</span>
              </motion.div>
              <motion.div className={styles.statItem} variants={itemVariants}>
                <span className={styles.statValue}>$85B+</span>
                <span className={styles.statLabel}>Quarterly Volume</span>
              </motion.div>
              <motion.div className={styles.statItem} variants={itemVariants}>
                <span className={styles.statValue}>24/7</span>
                <span className={styles.statLabel}>Uptime Support</span>
              </motion.div>
              <motion.div className={styles.statItem} variants={itemVariants}>
                <span className={styles.statValue}>Zero</span>
                <span className={styles.statLabel}>Security Breaches</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className={styles.values}>
          <div className="container">
            <motion.h2 className={styles.centeredTitle} variants={itemVariants}>
              The Principles That Guide Us
            </motion.h2>
            <div className={styles.valuesGrid}>
              {[
                {
                  icon: <ShieldCheck size={40} className="text-primary" />,
                  title: "Security by Design",
                  text: "Security isn't a feature; it's our foundation. We employ multi-signature cold storage and bank-grade encryption.",
                },
                {
                  icon: <Globe size={40} className="text-primary" />,
                  title: "Borderless Access",
                  text: "Capital should move as fast as the internet. We're removing the walls between traditional and digital finance.",
                },
                {
                  icon: <Zap size={40} className="text-primary" />,
                  title: "Radical Innovation",
                  text: "We don't just follow the trends; we set them. We're constantly building tools that define the next decade.",
                },
              ].map((value, idx) => (
                <motion.div
                  key={idx}
                  className={styles.valueCard}
                  variants={itemVariants}
                >
                  <div className={styles.valueIcon}>{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className={styles.team}>
          <div className="container">
            <motion.h2 className={styles.centeredTitle} variants={itemVariants}>
              The Leadership Team
            </motion.h2>
            <div className={styles.teamGrid}>
              {[
                {
                  name: "Marcus Thorne",
                  role: "CEO & Founder",
                  image:
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
                },
                {
                  name: "Sarah Chen",
                  role: "CTO",
                  image:
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
                },
                {
                  name: "Elena Rodriguez",
                  role: "Head of Strategy",
                  image:
                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop",
                },
                {
                  name: "David Vance",
                  role: "Chief Security Officer",
                  image:
                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop",
                },
              ].map((member, i) => (
                <motion.div
                  key={i}
                  className={styles.teamMember}
                  variants={itemVariants}
                >
                  <div className={styles.memberAvatar}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={200}
                      height={200}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p
                    className={
                      member.role === "CEO & Founder"
                        ? styles.memberRolePrimary
                        : styles.memberRole
                    }
                  >
                    {member.role}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Section */}
        <section className={styles.joinSection}>
          <div className="container">
            <motion.div className={styles.joinCard} variants={itemVariants}>
              <h2>Be Part of the Revolution</h2>
              <p>
                We're always looking for brilliant minds to help us build the
                future of finance. Check out our open roles.
              </p>
              <Link
                href="/contact"
                className="btn btn-primary"
                style={{
                  height: "56px",
                  padding: "0 40px",
                  background: "#000",
                  color: "#fff",
                }}
              >
                Join the Team
              </Link>
            </motion.div>
          </div>
        </section>
      </motion.main>

      <Footer />
    </div>
  );
}
