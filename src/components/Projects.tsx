"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Projects.module.css';

// =============================================================================
// === HƯỚNG DẪN THÊM DỰ ÁN ===
//
//   title:  Tên dự án (hiển thị ở badge góc trên trái)
//   type:   Loại — chữ lớn đè dưới ảnh (VD: "Landing", "Branding", "Campaign")
//   year:   Năm thực hiện
//   slug:   Đường dẫn trang chi tiết nội bộ — mũi tên ↗ sẽ dẫn đến /projects/[slug]
//           VD: slug "du-an-langceri" → URL sẽ là /projects/du-an-langceri
//           ===> ĐỂ THÊM NỘI DUNG CHI TIẾT: mở file src/app/projects/[slug]/page.tsx
//                và tìm object DETAIL_PAGES, thêm key trùng với slug này vào đó.
//   image:  Đặt ảnh vào /public/projects/ rồi điền "/projects/ten-anh.jpg"
//           Để "" để hiện khung giữ chỗ.
//
// Sửa AUTO_PLAY_MS để thay đổi tốc độ chuyển slide (mili-giây)
// =============================================================================
const AUTO_PLAY_MS = 5000;

const PROJECTS = [
  { id: "proj-01", title: "Tên Dự Án 01", type: "Landing", year: "2025", slug: "du-an-01", image: "" },
  { id: "proj-02", title: "Tên Dự Án 02", type: "Landing", year: "2024", slug: "du-an-02", image: "" },
  // { id: "proj-03", title: "Tên Dự Án 03", type: "Campaign", year: "2024", slug: "du-an-03", image: "" },
  // { id: "proj-04", title: "Tên Dự Án 04", type: "Branding", year: "2023", slug: "du-an-04", image: "" },
];
// =============================================================================

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const pausedRef = useRef(false);
  const total = PROJECTS.length;

  // Auto-play carousel
  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) setCurrent(c => (c + 1) % total);
    }, AUTO_PLAY_MS);
    return () => clearInterval(id);
  }, [total]);

  const goTo = (index: number) => {
    setCurrent(index);
    pausedRef.current = true;
    setTimeout(() => { pausedRef.current = false; }, 8000);
  };

  const proj = PROJECTS[current];

  return (
    <section className={styles.section} id="projects">

      <div className={styles.accentLine} />

      {/* ── Header ── */}
      <div className={styles.header}>
        <div className={styles.headlineBlock}>
          <span className={styles.headlineLine1}>Các projects</span>
          <span className={styles.headlineLine2}>tôi đã làm</span>
        </div>
        <a href="#" className={styles.seeAllBtn}>Xem tất cả</a>
      </div>

      {/* ── Card Carousel ── */}
      <div
        className={styles.card}
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
      >
        {/* Ảnh full-bleed */}
        <div className={styles.imageWrapper}>
          {proj.image ? (
            <Image
              src={proj.image}
              alt={proj.title}
              fill
              sizes="(max-width: 767px) 100vw, 1000px"
              style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
            />
          ) : (
            <div className={styles.imagePlaceholder}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
              <span>Ảnh dự án</span>
            </div>
          )}

          {/* Gradient overlay */}
          <div className={styles.overlay}></div>

          {/* Badge tên + năm góc trên trái */}
          <div className={styles.topBadge}>
            <span className={styles.badgeTitle}>{proj.title}</span>
            <span className={styles.badgeYear}>{proj.year}</span>
          </div>

          {/* Nút mũi tên → trang chi tiết dự án nội bộ */}
          <Link
            href={`/projects/${proj.slug}`}
            className={styles.arrowBtn}
            onClick={e => e.stopPropagation()}
            title="Xem chi tiết dự án"
          >
            ↗
          </Link>

          {/* Chữ loại to ở góc dưới trái */}
          <span className={styles.typeLabel}>{proj.type}</span>
        </div>
      </div>

      {/* ── Dot Navigation ── */}
      <div className={styles.dots}>
        {PROJECTS.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Dự án ${i + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
