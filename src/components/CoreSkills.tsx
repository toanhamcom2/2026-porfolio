import React from 'react';
import styles from './CoreSkills.module.css';

// === HƯỚNG DẪN TÙY CHỈNH DANH SÁCH LOGO (THÊM / BỚT / ĐỔI MÀU) ===
// 1. Tên hiển thị (name): Chữ hiện dưới nút logo.
// 2. Link Logo (src): Đường dẫn tới ảnh logo thật. Ở đây tôi đã link tới hệ thống CDN phổ biến toàn cầu để kéo SVG sắc nét nhất về.
// Mẹo: Nếu bạn muốn tải ảnh của riêng mình lên, hãy lưu ảnh vào thư mục 'public' và sửa src thành "/ten-anh.png"
const LOGOS = [
  { name: "Premiere", src: "/logo/pr.png" },
  { name: "Photoshop", src: "/logo/ps.png" },
  { name: "Illustrator", src: "/logo/ai.png" },
  { name: "HTML5", src: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "CSS3", src: "/logo/css.png" },
  { name: "JavaScript", src: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "Next.js", src: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" }
];
// ==============================================================

export default function CoreSkills() {
  // Nhân 4 lần mảng logo lên để dải trượt đủ dài bao phủ toàn màn hình, 
  // giúp cho hiệu ứng lặp CSS (translateX -50%) diễn ra mượt mà không bị hụt đuôi.
  const duplicatedLogos = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <section className={styles.section} id="core-skills">
      {/* 1. Tiêu đề */}
      <h2 className={styles.headline}>Kĩ năng cốt lõi</h2>

      {/* 2. Mô tả chi tiết */}
      <p className={styles.description}>
        Kết hợp giữa nền tảng được đào tạo và nỗ lực tự học, tôi đã làm chủ các công cụ thiết kế (Premiere, Photoshop, Illustrator) cùng bộ kỹ năng Front-end (HTML, CSS, JavaScript, Next.js). Sự giao thoa này cho phép tôi độc lập triển khai và tối ưu hóa toàn diện các chiến dịch Full-stack Marketing.
      </p>

      {/* 3. Dải Logo thật chạy ngang vô hạn (Marquee) */}
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className={styles.logoItem}>

              {/* Thẻ hiển thị ảnh Logo thật từ cấu hình Mảng */}
              <img
                src={logo.src}
                alt={`${logo.name} Logo`}
                className={styles.realLogo}
              />

              {/* Tên Logo hiển thị bên dưới */}
              <span>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
