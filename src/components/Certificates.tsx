"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Certificates.module.css';

// =============================================================================
// === HƯỚNG DẪN THÊM BẰNG CẤP & CHỨNG CHỈ ===
//
//   title:      Tên chứng chỉ
//   issuer:     Tổ chức cấp (VD: "Google", "Coursera")
//   date:       Ngày cấp (VD: "Tháng 03, 2025")
//   category:   Nhãn loại (VD: "Marketing", "Design", "Code", "Language")
//   image:      Đặt file ảnh vào /public/certificates/ rồi điền đường dẫn
//               VD: "/certificates/google-marketing.jpg"
//               Để "" — sẽ hiện khung giữ chỗ đến khi bạn thêm ảnh.
//   credential: Link chứng chỉ gốc online (để "" nếu không có)
//
// Tốc độ tự chuyển slide: sửa hằng số AUTO_PLAY_MS (đơn vị: mili-giây)
// =============================================================================
const AUTO_PLAY_MS = 4000; // 4 giây mỗi slide

const CERTIFICATES = [
  {
    id: "cert-01",
    title: "DELF B2",
    issuer: "France Education International",
    date: "Tháng 07, 2021",
    category: "Language",
    image: "/delf-b2.png",
    credential: "",
  },
  {
    id: "cert-02",
    title: "HANU Test C1 - Tiếng Anh",
    issuer: "Hanoi University",
    date: "2021",
    category: "Language",
    image: "/ta-hanu.png",
    credential: "",
  },
  {
    id: "cert-03",
    title: "HANU Test C1 - Tiếng Pháp",
    issuer: "Hanoi University",
    date: "2022",
    category: "Language",
    image: "/tp-hanu.png",
    credential: "",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  Marketing: "#ff5722",
  Design: "#9c27b0",
  Code: "#2196f3",
  Language: "#4caf50",
  Finance: "#ff9800",
  Other: "#607d8b",
};

export default function Certificates() {
  const [current, setCurrent] = useState(0);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const pausedRef = useRef(false); // dùng ref để tránh stale closure trong interval
  const total = CERTIFICATES.length;

  // Khóa cuộn trang khi mở phóng to
  useEffect(() => {
    if (zoomedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [zoomedImage]);

  // Auto-play: sử dụng ref để read giá trị paused mới nhất trong interval callback
  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) {
        setCurrent(c => (c + 1) % total);
      }
    }, AUTO_PLAY_MS);
    return () => clearInterval(id);
  }, [total]);

  const goTo = (index: number) => {
    setCurrent(index);
    // Tạm dừng 8 giây sau khi bấm thủ công rồi tiếp tục
    pausedRef.current = true;
    setTimeout(() => { pausedRef.current = false; }, 8000);
  };

  const cert = CERTIFICATES[current];
  const tagColor = CATEGORY_COLORS[cert.category] || CATEGORY_COLORS.Other;
  const num = String(current + 1).padStart(2, '0');

  return (
    <section className={styles.section} id="certificates">
      <h2 className={styles.headline}>Bằng cấp &amp; Chứng chỉ</h2>
      <p className={styles.description}>
        Hành trình học tập không ngừng — tập hợp các bằng cấp và chứng chỉ được công nhận,
        phản ánh nền tảng lý thuyết vững chắc và tinh thần tự học chủ động.
      </p>

      {/* Khối Carousel hình vuông */}
      <div
        className={styles.slideWrapper}
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
        onClick={() => cert.image && setZoomedImage(cert.image)}
        title="Bấm để phóng to"
      >
        {/* ── Hàng trên: Số thứ tự + Category tag ── */}
        <div className={styles.topRow}>
          <span className={styles.slideNum}>{num}</span>
          <span className={styles.categoryTag} style={{ backgroundColor: tagColor }}>
            {cert.category}
          </span>
        </div>

        {/* ── Ảnh chứng chỉ chiếm full chiều ngang ── */}
        <div className={styles.imagePane}>
          {cert.image ? (
            <Image
              src={cert.image}
              alt={cert.title}
              fill
              sizes="(max-width: 767px) 100vw, 560px"
              style={{ objectFit: 'cover' }}
            />
          ) : (
            <div className={styles.imagePlaceholder}>
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
              <span>Thêm ảnh chứng chỉ tại đây</span>
            </div>
          )}
        </div>

        {/* ── Thông tin bên dưới ảnh ── */}
        <div className={styles.slideInfo}>
          <h3 className={styles.certTitle}>{cert.title}</h3>
          <p className={styles.issuer}>{cert.issuer}</p>
          <p className={styles.date}>{cert.date}</p>
          {cert.credential && (
            <a href={cert.credential} target="_blank" rel="noopener noreferrer"
              className={styles.credentialLink}
              onClick={e => e.stopPropagation()}>
              Xem chứng chỉ gốc ↗
            </a>
          )}
        </div>
      </div>

      {/* ── Lightbox phóng to ảnh ── */}
      {zoomedImage && (
        <div className={styles.lightboxOverlay} onClick={() => setZoomedImage(null)}>
          <button className={styles.closeBtn} onClick={() => setZoomedImage(null)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div className={styles.lightboxContent} onClick={e => e.stopPropagation()}>
            <img src={zoomedImage} alt="Zoomed Certificate" className={styles.zoomedImg} />
          </div>
        </div>
      )}

      {/* ── Thanh dot điều hướng ── */}
      <div className={styles.dots}>
        {CERTIFICATES.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Chứng chỉ ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
