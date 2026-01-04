import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./Pricing.module.css";

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "0",
      description:
        "Everything you need to buy, sell, and track your first assets safely.",
      features: [
        "Real-time Portfolio Tracking",
        "Multi-chain Wallet Support",
        "Send & Receive Anywhere",
        "Basic Market Analysis",
        "Secure Storage",
      ],
      button: "Get Started Now",
      highlight: false,
    },
    {
      name: "Pro Trader",
      price: "19",
      description:
        "Unleash the full power of Cryptonit with advanced analytics and lower fees.",
      features: [
        "Advanced Analytics & Charts",
        "Unlimited Real-time Alerts",
        "0.1% Lower Trading Fees",
        "Priority 24/7 Support",
        "DeFi Yield Farming Tools",
        "Tax Reporting Export",
      ],
      button: "Start 14-Day Free Trial",
      highlight: true,
    },
    {
      name: "Institutional",
      price: "99",
      description:
        "Maximum security and custom features for professional large-scale operations.",
      features: [
        "Multi-sig Team Management",
        "Advanced API Access",
        "Dedicated Account Manager",
        "Institutional-Grade Security",
        "White-glove Onboarding",
        "Custom Compliance Tools",
      ],
      button: "Contact Sales",
      href: "/contact",
      highlight: false,
    },
  ];

  const getButtonHref = (buttonText: string) => {
    if (buttonText === "Contact Sales") return "/contact";
    return "/signup";
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <main className={styles.main}>
        <div className="container">
          <header className={styles.header}>
            <h1 className={styles.title}>
              Invest with Confidence, <br />
              Grow with <span className="text-primary">Cryptonit.</span>
            </h1>
            <p className={styles.subtitle}>
              From beginners to high-frequency traders, we have the perfect plan
              for every digital wealth journey.
            </p>
          </header>

          <div className={styles.grid}>
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`${styles.card} ${
                  plan.highlight ? styles.highlight : ""
                }`}
              >
                {plan.highlight && (
                  <div className={styles.badge}>Best Value</div>
                )}
                <div className={styles.cardHeader}>
                  <h3 className={styles.planName}>{plan.name}</h3>
                  <div className={styles.priceContainer}>
                    <span className={styles.currency}>$</span>
                    <span className={styles.price}>{plan.price}</span>
                    <span className={styles.period}>/mo</span>
                  </div>
                  <p className={styles.description}>{plan.description}</p>
                </div>

                <div className={styles.features}>
                  {plan.features.map((feature) => (
                    <div key={feature} className={styles.feature}>
                      <span className={styles.check}>✓</span>
                      {feature}
                    </div>
                  ))}
                </div>

                <Link
                  href={getButtonHref(plan.button)}
                  className={`${styles.button} ${
                    plan.highlight ? styles.buttonPrimary : styles.buttonOutline
                  }`}
                >
                  {plan.button}
                </Link>
              </div>
            ))}
          </div>

          <section className={styles.comparisonSection}>
            <h2 className={styles.tableTitle}>Compare Every Feature</h2>
            <div className={styles.tableWrapper}>
              <table className={styles.comparisonTable}>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Starter</th>
                    <th>Pro</th>
                    <th>Institutional</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Trading Fees</td>
                    <td>0.25%</td>
                    <td>0.15%</td>
                    <td>0.08%</td>
                  </tr>
                  <tr>
                    <td>Portfolio Assets</td>
                    <td>Unlimited</td>
                    <td>Unlimited</td>
                    <td>Unlimited</td>
                  </tr>
                  <tr>
                    <td>Alerts</td>
                    <td>3 Active</td>
                    <td>Unlimited</td>
                    <td>Unlimited</td>
                  </tr>
                  <tr>
                    <td>Custom API</td>
                    <td>Read only</td>
                    <td>Full access</td>
                    <td>Full access</td>
                  </tr>
                  <tr>
                    <td>Security</td>
                    <td>2FA</td>
                    <td>2FA + Hardware</td>
                    <td>Whitelisting + Multi-sig</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Ready to dominate the market?</h2>
            <p className={styles.ctaDesc}>
              Join over 2 million traders who trust Cryptonit for their daily
              trading and long-term investment strategy.
            </p>
            <Link href="/signup" className={styles.ctaButton}>
              Start Your Trading Journey Today
            </Link>
          </section>

          <div className={styles.faqPreview} style={{ marginTop: "80px" }}>
            <h3>Still have questions?</h3>
            <p>
              Our world-class support team is available 24/7 to help you choose
              the right path.
            </p>
            <Link href="/contact" className={styles.textLink}>
              Contact Advisor →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
