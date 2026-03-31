import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const slides = [
  { title: "Enhanced Customer Experience", desc: "Empower your customers with a seamless and personalized experience." },
  { title: "Multi-Channel Integration", desc: "Connect with your customers across various touchpoints." },
  { title: "Secure Backoffice Banking", desc: "Ensure compliance and security in all backoffice operations." },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout
      title="Open Digital"
      description="Smarter Lending. Safer Experience. Seamless Access"
    >
      {/* Banner Section */}
      <header className={styles.banner}>
        <h1>Open Digital</h1>
        <p className={styles.tagline}>Smart, secure, and customer-first wallet management system</p>
      </header>

      {/* Intro / Description */}
      <section className={styles.intro}>
        <p>
          Open Digital is a wallet management software designed to streamline loan management, 
          repayments, and backoffice operations for financial institutions.
        </p>
      </section>

      {/* Capability Cards */}
      <section className={styles.cardsSection}>
        {slides.map((slide, idx) => (
          <div className={styles.card} key={idx}>
            <h3>{slide.title}</h3>
            <p>{slide.desc}</p>
          </div>
        ))}
      </section>
    </Layout>
  );
}