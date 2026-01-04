import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main style={{ padding: "160px 0 100px" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <h1 style={{ fontSize: "48px", marginBottom: "32px" }}>
            Terms of Service
          </h1>
          <div style={{ color: "#888", lineHeight: "1.8", fontSize: "16px" }}>
            <p style={{ marginBottom: "24px" }}>
              Last updated: December 17, 2025
            </p>
            <section style={{ marginBottom: "40px" }}>
              <h2 style={{ color: "#fff", marginBottom: "16px" }}>
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using Cryptonit, you agree to be bound by these
                Terms of Service and all applicable laws and regulations. If you
                do not agree with any of these terms, you are prohibited from
                using or accessing this site.
              </p>
            </section>
            <section style={{ marginBottom: "40px" }}>
              <h2 style={{ color: "#fff", marginBottom: "16px" }}>
                2. Use License
              </h2>
              <p>
                Permission is granted to temporarily download one copy of the
                materials on Cryptonit's website for personal, non-commercial
                transitory viewing only.
              </p>
            </section>
            <section style={{ marginBottom: "40px" }}>
              <h2 style={{ color: "#fff", marginBottom: "16px" }}>
                3. Disclaimer
              </h2>
              <p>
                The materials on Cryptonit's website are provided on an 'as is'
                basis. Cryptonit makes no warranties, expressed or implied, and
                hereby disclaims and negates all other warranties including,
                without limitation, implied warranties or conditions of
                merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property or other violation of
                rights.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
