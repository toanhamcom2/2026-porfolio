"use client";

import React, { useState } from 'react';
import styles from './Contact.module.css';

// =============================================================================
// === HƯỚNG DẪN CẬP NHẬT THÔNG TIN LIÊN HỆ ===
//
//   EMAIL:    Điền địa chỉ email của bạn
//   PHONE:    Số điện thoại (để "" nếu không muốn hiện)
//   SOCIALS:  Thêm/xoá các mạng xã hội theo danh sách bên dưới
//
// =============================================================================
const CONTACT_INFO = {
  email: "your@email.com",
  phone: "+84 xxx xxx xxx",
};

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "#",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
  },
];
// =============================================================================

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Mailto fallback — thay bằng API thực nếu muốn gửi server-side
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact từ ${form.name}`);
    const body = encodeURIComponent(`Tên: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className={styles.section} id="contact">

      <div className={styles.accentLine} />

      {/* ── Tiêu đề 1 dòng ── */}
      <div className={styles.headlineBlock}>
        <span className={styles.headlineLine1}>Liên hệ</span>
        <span className={styles.headlineLine2}>tôi</span>
      </div>

      {/* ── Layout chính: Trái = info, Phải = form ── */}
      <div className={styles.layout}>

        {/* CỘT TRÁI – Thông tin liên hệ */}
        <div className={styles.infoCol}>

          {/* Câu tagline */}
          <p className={styles.tagline}>
            Sẵn sàng hợp tác cho dự án tiếp theo của bạn —
            hãy để lại lời nhắn và tôi sẽ phản hồi sớm nhất có thể.
          </p>

          {/* Email */}
          <a href={`mailto:${CONTACT_INFO.email}`} className={styles.contactItem}>
            <span className={styles.contactIcon}>
              {/* Mail icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </span>
            <span>{CONTACT_INFO.email}</span>
          </a>

          {/* Điện thoại */}
          {CONTACT_INFO.phone && (
            <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className={styles.contactItem}>
              <span className={styles.contactIcon}>
                {/* Phone icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </span>
              <span>{CONTACT_INFO.phone}</span>
            </a>
          )}

          {/* Divider */}
          <div className={styles.divider}></div>

          {/* Social links — desktop: text list / mobile: icon tròn hàng ngang */}
          <div className={styles.socialGroup}>
            {SOCIALS.map(s => (
              <a key={s.label} href={s.href} target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                title={s.label}
              >
                {/* Icon hiện trên mobile */}
                <span className={styles.socialIconCircle}>{s.icon}</span>
                {/* Text + mũi tên hiện trên desktop */}
                <span className={styles.socialLabelText}>{s.label}</span>
                <span className={styles.socialArrow}>↗</span>
              </a>
            ))}
          </div>
        </div>

        {/* CỘT PHẢI – Form */}
        <form className={styles.form} onSubmit={handleSubmit} noValidate>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="contact-name">Tên của bạn</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="name"
              placeholder="Nguyễn Văn A"
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
              placeholder="example@email.com"
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="contact-message">Lời nhắn</label>
            <textarea
              id="contact-message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Xin chào, tôi muốn hợp tác về..."
              className={`${styles.input} ${styles.textarea}`}
            />
          </div>

          <button type="submit" className={styles.submitBtn}>
            {sent ? '✓ Đã mở email!' : 'Gửi lời nhắn →'}
          </button>

        </form>
      </div>

    </section>
  );
}
