"use client";

import React, { useState } from 'react';
import styles from './WorkExperience.module.css';

// === HƯỚNG DẪN TÙY CHỈNH LỘ TRÌNH KINH NGHIỆM ===
// Bạn có thể thêm, sửa, xoá các khối công việc tại mảng này.
// Để viết nội dung chi tiết công việc báo cáo, hãy điền vào chữ nằm trong cặp dấu ngoặc kép thuộc mảng `details`.
const EXPERIENCES = [
  {
    id: "01",
    year: "2025 - 2026",
    title: "Full-Stack Marketer",
    tags: ["#FullStackMarketing", "#FrontEnd", "#Strategy"],
    isActive: true,
    logo: "",
    details: [
      "Managed and executed full-stack marketing strategies targeting the French-speaking travel market.",
      "Developed, localized, and managed marketing content in French to drive customer engagement and tour sales.",
      "Oversaw website management and technical optimization, utilizing front-end development skills (JavaScript, React, Next.js) to enhance user experience.",
      "Led digital marketing initiatives, integrating SEO, social media management, and performance analysis."
    ]
  },
  {
    id: "02",
    year: "2024 - 2025",
    title: "SEO & Content Marketer",
    tags: ["#SEO", "#EmailMarketing", "#GraphicDesign"],
    isActive: false,
    logo: "",
    details: [
      "Marketing strategy research and analysis",
      "On-page and off-page seo implementation",
      "Website management, optimization, and error resolution",
      "Graphic design (maps, posters, standees, brochures, cards)",
      "Social media page management (Facebook, Instagram, Pinterest)",
      "Email marketing campaign planning and execution",
      "Customer profile development and management"
    ]
  },
  {
    id: "03",
    year: "2021 - 2022",
    title: "Digital Marketer",
    tags: ["#SocialMedia", "#ContentCreation"],
    isActive: false,
    logo: "",
    details: [
      "Social media management (Facebook, Instagram, web)",
      "Graphic design (posters, banners)",
      "Blog content creation",
      "Tour content management and editing."
    ]
  }
];
// ===============================================

export default function WorkExperience() {
  // Biến lưu trữ ID của khối kinh nghiệm đang mở chi tiết.
  // Mở mặc định thẻ có đánh dấu isActive = true trong danh sách
  const defaultActive = EXPERIENCES.find(exp => exp.isActive)?.id || null;
  const [expandedId, setExpandedId] = useState<string | null>(defaultActive);

  // Hàm chuyển đổi Trạng thái Đóng/Mở khi ấn vào thẻ
  const toggleExpand = (id: string) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className={styles.section} id="work-experience">
      {/* 1. Tiêu đề */}
      <h2 className={styles.headline}>Kinh nghiệm làm việc</h2>

      {/* 2. Mô tả (Subtitle) */}
      <p className={styles.description}>
        Kinh nghiệm phong phú trong ngành du lịch, sở hữu khả năng vận hành độc lập từ sáng tạo nội dung, thiết kế đồ họa đến lập trình website (React/Next.js).
      </p>

      {/* 3. Tuyến thời gian (Timeline) công việc */}
      <div className={styles.timelineContainer}>

        <div className={styles.timelineList}>
          {EXPERIENCES.map((exp) => {
            const isExpanded = expandedId === exp.id; // Kiểm tra thẻ có đang mở hay không

            return (
              <div
                key={exp.id}
                className={`${styles.timelineCard} ${isExpanded ? styles.activeCard : ''} ${isExpanded ? styles.isExpanded : ''}`}
                onClick={() => toggleExpand(exp.id)}
              >
                <div className={styles.cardContent}>

                  {/* Dòng năm làm việc & Số ID kèm Mũi tên */}
                  <div className={styles.cardHeader}>
                    <span className={styles.year}>{exp.year}</span>

                    {/* Góc phải: Số ID và Mũi tên nằm dưới ngay cạnh nhau */}
                    <div className={styles.rightCorner}>
                      <span className={styles.idNumber}>{exp.id}</span>
                      <div className={`${styles.chevronWrapper} ${isExpanded ? styles.chevronRotated : ''}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{
                            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                          }}
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Chức danh */}
                  <div className={styles.titleWrapper}>
                    <h3 className={styles.jobTitle}>{exp.title}</h3>
                  </div>

                  {/* Kĩ năng Tag */}
                  {exp.tags && exp.tags.length > 0 && (
                    <div className={styles.tagsGroup}>
                      {exp.tags.map(tag => (
                        <span key={tag} className={styles.tagItem}>{tag}</span>
                      ))}
                    </div>
                  )}

                  {/* Vùng Hiện chi tiết Ẩn/Hiện (Phía dưới cùng card) */}
                  <div className={`${styles.detailsWrapper} ${isExpanded ? styles.showDetails : ''}`}>
                    <div className={styles.detailsContent}>
                      <ul className={styles.detailsList}>
                        {exp.details.map((item, idx) => (
                          <li key={idx} className={styles.detailsListItem}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
