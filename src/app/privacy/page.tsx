import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main style={{ padding: "160px 0 100px" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <h1 style={{ fontSize: "48px", marginBottom: "32px" }}>
            Privacy Policy
          </h1>
          <div style={{ color: "#888", lineHeight: "1.8", fontSize: "16px" }}>
            <p style={{ marginBottom: "24px" }}>
              Last updated: December 17, 2025
            </p>
            <section style={{ marginBottom: "40px" }}>
              <h2 style={{ color: "#fff", marginBottom: "16px" }}>
                1. Information We Collect
              </h2>
              <p>
                We collect information you provide directly to us when you
                create an account, use our services, or communicate with us.
                This may include your name, email address, financial
                information, and any other information you choose to provide.
              </p>
            </section>
            <section style={{ marginBottom: "40px" }}>
              <h2 style={{ color: "#fff", marginBottom: "16px" }}>
                2. How We Use Information
              </h2>
              <p>
                We use the information we collect to provide, maintain, and
                improve our services, to process transactions, and to
                communicate with you about your account and our services.
              </p>
            </section>
            <section style={{ marginBottom: "40px" }}>
              <h2 style={{ color: "#fff", marginBottom: "16px" }}>
                3. Data Security
              </h2>
              <p>
                We take reasonable measures to help protect information about
                you from loss, theft, misuse and unauthorized access,
                disclosure, alteration and destruction.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
