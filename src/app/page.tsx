import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CryptoMarquee from "@/components/CryptoMarquee";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <CryptoMarquee />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQ />

      {/* CTA Section */}
      <section
        style={{
          padding: "120px 0",
          textAlign: "center",
          background: "linear-gradient(180deg, #0a0a0a 0%, #000 100%)",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              fontSize: "48px",
              fontWeight: "bold",
              marginBottom: "24px",
              letterSpacing: "-2px",
            }}
          >
            Ready to start trading?
          </h2>
          <p style={{ color: "#888", marginBottom: "40px", fontSize: "18px" }}>
            Join millions of users dealing in crypto securely.
          </p>
          <Link
            href="/signup"
            className="btn btn-primary"
            style={{
              height: "56px",
              fontSize: "18px",
              padding: "0 40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Get Started Now
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
