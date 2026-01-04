"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./Contact.module.css";
import { Mail, MapPin, Share2 } from "lucide-react";

function ContactForm() {
  const searchParams = useSearchParams();
  const role = searchParams.get("role");
  const [subject, setSubject] = useState("General Inquiry");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (role) {
      setSubject("Job Application");
      setMessage(`I am interested in applying for the ${role} position.`);
    }
  }, [role]);

  return (
    <form className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" placeholder="John Doe" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" placeholder="john@example.com" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="subject">Subject</label>
        <select
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option value="General Inquiry">General Inquiry</option>
          <option value="Technical Support">Technical Support</option>
          <option value="Partnership">Partnership</option>
          <option value="Account Issue">Account Issue</option>
          <option value="Job Application">Job Application</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows={5}
          placeholder="How can we help?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" className={styles.submitBtn}>
        Send Message
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <main className={styles.main}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.info}>
              <h1 className={styles.title}>Get in Touch</h1>
              <p className={styles.subtitle}>
                Have questions about our platform or need technical assistance?
                Our team is here to help 24/7.
              </p>

              <div className={styles.contactList}>
                <div className={styles.contactItem}>
                  <div className={styles.icon}>
                    <Mail size={20} color="var(--primary)" />
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>support@cryptos.com</p>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.icon}>
                    <MapPin size={20} color="var(--primary)" />
                  </div>
                  <div>
                    <h4>Office</h4>
                    <p>
                      123 Crypto Plaza, <br />
                      San Francisco, CA 94103
                    </p>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.icon}>
                    <Share2 size={20} color="var(--primary)" />
                  </div>
                  <div>
                    <h4>Socials</h4>
                    <p>@cryptos_hq</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.formWrapper}>
              <Suspense fallback={<div>Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
