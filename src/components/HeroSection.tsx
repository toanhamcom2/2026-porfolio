"use client";

import React, { useState, useEffect } from 'react';
import styles from './HeroSection.module.css';

// === CẤU HÌNH HIỆU ỨNG TYPEWRITER ===
// 1. Thêm / bớt chức danh ở mảng ROLES bên dưới:
const ROLES = [
  "Full-stack marketer",
  "Front-end developer",
  "French master holder"
];
// 2. Tốc độ hiệu ứng (tính bằng mili-giây):
const TYPING_SPEED = 100;     // Tốc độ gõ chữ (thấp = nhanh)
const ERASING_SPEED = 50;     // Tốc độ xóa chữ (thấp = nhanh)
const DELAY_BEFORE_ERASE = 2000; // Thời gian chờ sau khi đã gõ xong cụm từ
// ====================================

const IconPhone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

const IconMail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

export default function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const fullText = ROLES[currentRoleIndex];

    if (isDeleting) {
      timeout = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      }, ERASING_SPEED);
    } else {
      timeout = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }, TYPING_SPEED);
    }

    if (!isDeleting && currentText === fullText) {
      timeout = setTimeout(() => setIsDeleting(true), DELAY_BEFORE_ERASE);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <section className={styles.hero}>
      {/* ── LỚP 1: Chữ đục phía sau người (Desktop) ── */}
      <div className={`${styles.desktopGiantName} ${styles.nameLayerBack}`}>
        <div className={styles.nameSolid}>NGUYỄN</div>
        <div className={styles.nameSolid}>NGỌC MINH</div>
      </div>

      <div className={styles.intro}>
        <h2 className={styles.authorName}>Nguyễn Ngọc Minh</h2>

        <h1 className={styles.typewriter}>
          {currentText}
          <span className={styles.typewriterCursor}></span>
        </h1>

        <p className={styles.description}>
          Với đam mê <span className={styles.stylizedText}>triết học thực hành</span> và tư duy <span className={styles.stylizedText}>phát triển số</span> linh hoạt.
        </p>

        <div className={styles.buttonGroup}>
          {/* Nút Liên hệ */}
          <button className={styles.btnPrimary}>Liên hệ ngay</button>

          {/* Nút Xem dự án */}
          <button className={styles.btnSecondary}>Xem dự án</button>
        </div>

        {/* Nút Contact (Gọi & Gmail) nổi bật ở góc phải màn hình (Chỉ hiện trên điện thoại) */}
        {/* HƯỚNG DẪN: Đổi số điện thoại sau tel: và email sau mailto: để links hoạt động */}
        <div className={styles.mobileContactButtons}>
          <a href="tel:BẠN_ĐIỀN_SỐ_ĐIỆN_THOẠI_VÀO_ĐÂY" className={styles.fabButton} aria-label="Gọi điện thoại trực tiếp">
            <IconPhone />
          </a>
          <a href="mailto:BẠN_ĐIỀN_EMAIL_CỦA_MÌNH_VÀO_ĐÂY" className={styles.fabButton} aria-label="Gửi thư qua Email">
            <IconMail />
          </a>
        </div>
      </div>

      <div className={styles.portraitBox}>
        <div className={styles.imageWrapper}>
          {/* Ảnh dành riêng cho Mobile */}
          <img
            src="/mero.png"
            alt="Minh Portrait Mobile"
            className={`${styles.image} ${styles.mobileImageOnly}`}
          />
          {/* Ảnh dành riêng cho Desktop */}
          <img
            src="/standing-landing-page-2.png"
            alt="Minh Portrait Desktop"
            className={`${styles.image} ${styles.desktopImageOnly}`}
          />
        </div>
      </div>

      {/* Floating card đưa sang bên phải */}
      <div className={styles.floatingCard}>
        <div>
          <div className={styles.cardTitle}>Dự án hiện tại</div>
          <div className={styles.cardSubtitle}>Thiết kế website cá nhân v1.0</div>
        </div>
        <div className={styles.cardIcon}>
          {/* Icon terminal giống bản gốc */}
          &gt;_
        </div>
      </div>

      {/* ── LỚP 3: Chữ rỗng viền trắng (Phía trước người) ── */}
      <div className={`${styles.desktopGiantName} ${styles.nameLayerFront}`}>
        <div className={styles.nameOutline}>NGUYỄN</div>
        <div className={styles.nameOutline}>NGỌC MINH</div>
      </div>

      {/* 3 khối thông tin thống kê mới */}
      <div className={styles.statsContainer}>
        <div className={styles.statCard}>
          <span className={styles.statValue}>3+ năm</span>
          <span className={styles.statLabel}>Marketing du lịch</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statValue}>Song ngữ</span>
          <span className={styles.statLabel}>tiếng Pháp & Anh</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statValue}>100%</span>
          <span className={styles.statLabel}>Độc lập triển khai</span>
        </div>
      </div>
    </section>
  );
}
