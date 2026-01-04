"use client";

import { use, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Lock, Bell, Eye, Check, ChevronRight } from "lucide-react";
import styles from "../Dashboard.module.css";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("Profile");
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const tabs = [
    { id: "Profile", icon: User, label: "Profile" },
    { id: "Security", icon: Lock, label: "Security" },
    { id: "Notifications", icon: Bell, label: "Notifications" },
    { id: "Privacy", icon: Eye, label: "Privacy" },
  ];

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1500);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Profile":
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className={styles.card}
          >
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "700",
                marginBottom: "24px",
              }}
            >
              Profile Information
            </h3>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div className={styles.stackMobile}>
                <div style={{ flex: 1 }}>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontSize: "14px",
                      color: "var(--text-secondary)",
                    }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Alex Rivera"
                    style={{
                      width: "100%",
                      background: "#111",
                      border: "1px solid #222",
                      padding: "12px",
                      borderRadius: "12px",
                      color: "#fff",
                    }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontSize: "14px",
                      color: "var(--text-secondary)",
                    }}
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    defaultValue="arivera_trader"
                    style={{
                      width: "100%",
                      background: "#111",
                      border: "1px solid #222",
                      padding: "12px",
                      borderRadius: "12px",
                      color: "#fff",
                    }}
                  />
                </div>
              </div>
              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                  }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue="alex@example.com"
                  style={{
                    width: "100%",
                    background: "#111",
                    border: "1px solid #222",
                    padding: "12px",
                    borderRadius: "12px",
                    color: "#fff",
                  }}
                />
              </div>
              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                  }}
                >
                  Bio
                </label>
                <textarea
                  rows={4}
                  defaultValue="Crypto enthusiast and long-term investor."
                  style={{
                    width: "100%",
                    background: "#111",
                    border: "1px solid #222",
                    padding: "12px",
                    borderRadius: "12px",
                    color: "#fff",
                    resize: "none",
                  }}
                />
              </div>
            </div>
          </motion.div>
        );
      case "Security":
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className={styles.card}
          >
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "700",
                marginBottom: "24px",
              }}
            >
              Security Settings
            </h3>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "12px",
                    fontWeight: "600",
                  }}
                >
                  Change Password
                </label>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <input
                    type="password"
                    placeholder="Current Password"
                    style={{
                      width: "100%",
                      background: "#111",
                      border: "1px solid #222",
                      padding: "12px",
                      borderRadius: "12px",
                      color: "#fff",
                    }}
                  />
                  <input
                    type="password"
                    placeholder="New Password"
                    style={{
                      width: "100%",
                      background: "#111",
                      border: "1px solid #222",
                      padding: "12px",
                      borderRadius: "12px",
                      color: "#fff",
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  padding: "20px",
                  background: "rgba(0,255,157,0.05)",
                  border: "1px solid rgba(0,255,157,0.1)",
                  borderRadius: "16px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <span style={{ fontWeight: "600", display: "block" }}>
                    Two-Factor Authentication
                  </span>
                  <span
                    style={{ fontSize: "13px", color: "var(--text-secondary)" }}
                  >
                    Add an extra layer of security to your account.
                  </span>
                </div>
                <div
                  style={{
                    width: "48px",
                    height: "24px",
                    background: "var(--primary)",
                    borderRadius: "20px",
                    position: "relative",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      right: "2px",
                      top: "2px",
                      width: "20px",
                      height: "20px",
                      background: "#fff",
                      borderRadius: "50%",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      case "Notifications":
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className={styles.card}
          >
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "700",
                marginBottom: "24px",
              }}
            >
              Notification Preferences
            </h3>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              {[
                {
                  label: "Price Alerts",
                  desc: "Get notified when assets reach your target price.",
                },
                {
                  label: "Security Alerts",
                  desc: "Notifications about logins and security changes.",
                },
                {
                  label: "Trading Updates",
                  desc: "Confirmations of your trades and transfers.",
                },
                {
                  label: "Newsletter",
                  desc: "Weekly market analysis and platform updates.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "12px 0",
                    borderBottom: i < 3 ? "1px solid #222" : "none",
                  }}
                >
                  <div>
                    <span style={{ fontWeight: "600", display: "block" }}>
                      {item.label}
                    </span>
                    <span
                      style={{
                        fontSize: "13px",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {item.desc}
                    </span>
                  </div>
                  <div
                    style={{
                      width: "40px",
                      height: "20px",
                      background: "#333",
                      borderRadius: "20px",
                      position: "relative",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: "2px",
                        top: "2px",
                        width: "16px",
                        height: "16px",
                        background: "#fff",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );
      default:
        return <div className={styles.card}>Coming soon...</div>;
    }
  };

  return (
    <div className={styles.responsiveGrid}>
      {/* Sidebar Navigation */}
      <div className={styles.tabsList}>
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px",
                background: isActive ? "rgba(0,255,157,0.1)" : "none",
                border: "none",
                borderRadius: "16px",
                color: isActive ? "var(--primary)" : "#888",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.2s",
                gap: "12px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <Icon size={20} />
                <span style={{ fontWeight: "600" }}>{tab.label}</span>
              </div>
              <ChevronRight
                size={16}
                style={{ opacity: 0.5, marginLeft: "4px" }}
              />
            </button>
          );
        })}
      </div>

      {/* Content Area */}
      <div style={{ position: "relative" }}>
        <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>

        <div
          style={{
            marginTop: "32px",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <AnimatePresence>
            {showSuccess && (
              <motion.span
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                style={{
                  color: "var(--primary)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                <Check size={18} /> Changes saved successfully!
              </motion.span>
            )}
          </AnimatePresence>
          <button
            onClick={handleSave}
            className="btn btn-primary"
            style={{ width: "160px" }}
            disabled={isSaving}
          >
            {isSaving ? "Saving..." : "Save Changes"}
          </button>
        </div>

        <div
          style={{
            marginTop: "64px",
            padding: "24px",
            border: "1px solid rgba(255,77,77,0.2)",
            borderRadius: "24px",
            background: "rgba(255,77,77,0.02)",
          }}
        >
          <h4 style={{ color: "#ff4d4d", marginBottom: "8px" }}>Danger Zone</h4>
          <p style={{ color: "#888", fontSize: "14px", marginBottom: "20px" }}>
            Permanently remove your account and all associated data. This action
            cannot be undone.
          </p>
          <button
            style={{
              background: "rgba(255,77,77,0.1)",
              color: "#ff4d4d",
              border: "1px solid rgba(255,77,77,0.2)",
              padding: "10px 20px",
              borderRadius: "12px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Delete My Account
          </button>
        </div>
        <div
          style={{
            marginTop: "32px",
            padding: "20px",
            borderRadius: "20px",
            border: "1px dashed #333",
            textAlign: "center",
          }}
        >
          <h4 style={{ fontSize: "14px", marginBottom: "8px" }}>
            Account Plan
          </h4>
          <span
            style={{
              display: "block",
              fontSize: "18px",
              fontWeight: "700",
              color: "var(--primary)",
              marginBottom: "4px",
            }}
          >
            Pro Trader
          </span>
          <span style={{ fontSize: "12px", color: "#555" }}>
            Renews on Oct 24, 2024
          </span>
        </div>
      </div>
    </div>
  );
}
