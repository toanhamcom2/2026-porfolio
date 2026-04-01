"use client";

import React, { useState, useEffect } from 'react';
import styles from './SectionBar.module.css';

// =============================================================================
// === CẤU HÌNH CÁC MỤC TRÊN THANH BAR ===
//
//   label:  Tên hiển thị trên thanh
//   href:   id của section tương ứng (phải trùng với id="" trong HTML)
//
// =============================================================================
const SECTIONS = [
  { label: "Kinh nghiệm",  href: "work-experience" },
  { label: "Chứng chỉ",    href: "certificates" },
  { label: "Kỹ năng",      href: "core-skills" },
  { label: "Projects",     href: "projects" },
  { label: "Liên hệ",      href: "contact" },
];
// =============================================================================

export default function SectionBar() {
  const [active, setActive] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Chỉ hiện thanh bar khi đã scroll qua Hero (~500px)
      setVisible(window.scrollY > 500);

      // Xác định section đang ở viewport
      let current = "";
      for (const sec of SECTIONS) {
        const el = document.getElementById(sec.href);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Section nào có top <= 40% viewport → đang active
          if (rect.top <= window.innerHeight * 0.4) {
            current = sec.href;
          }
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Chạy lần đầu
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.getElementById(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`${styles.bar} ${visible ? styles.barVisible : ''}`}
      aria-label="Section navigation"
    >
      <div className={styles.inner}>
        {SECTIONS.map(sec => (
          <button
            key={sec.href}
            className={`${styles.item} ${active === sec.href ? styles.itemActive : ''}`}
            onClick={() => scrollTo(sec.href)}
          >
            {sec.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
