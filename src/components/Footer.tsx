import React from 'react';
import styles from './Footer.module.css';

// =============================================================================
// === HƯỚNG DẪN CẬP NHẬT FOOTER ===
//
//   NAV_LINKS:     Các liên kết điều hướng nhanh
//   SOCIAL_LINKS:  Mạng xã hội (label + href)
//   TAGLINE:       Câu slogan ngắn hiện dưới tên
//
// =============================================================================
const NAV_LINKS = [
  { label: "Trang chủ",       href: "/" },
  { label: "Kinh nghiệm",     href: "/#work-experience" },
  { label: "Chứng chỉ",       href: "/#certificates" },
  { label: "Projects",        href: "/#projects" },
  { label: "Liên hệ",         href: "/#contact" },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn",   href: "#" },
  { label: "Facebook",   href: "#" },
  { label: "Instagram",  href: "#" },
  { label: "GitHub",     href: "#" },
];

const TAGLINE = "Marketing · Design · Code";
const NAME = "Mero Reno";
// =============================================================================

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* ── Hàng trên: Brand + Nav + Socials ── */}
        <div className={styles.topRow}>

          {/* Cột 1: Tên + tagline */}
          <div className={styles.brandCol}>
            <a href="/" className={styles.brandName}>{NAME}</a>
            <p className={styles.tagline}>{TAGLINE}</p>
          </div>

          {/* Cột 2: Điều hướng nhanh */}
          <nav className={styles.navCol} aria-label="Footer navigation">
            <span className={styles.colTitle}>Điều hướng</span>
            <ul className={styles.navList}>
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <a href={link.href} className={styles.navLink}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Cột 3: Liên hệ nhanh */}
          <div className={styles.contactCol}>
            <span className={styles.colTitle}>Theo dõi</span>
            <ul className={styles.navList}>
              {SOCIAL_LINKS.map(s => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer"
                    className={styles.navLink}>
                    {s.label} <span className={styles.externalArrow}>↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── Divider ── */}
        <div className={styles.divider}></div>

        {/* ── Hàng dưới: Copyright ── */}
        <div className={styles.bottomRow}>
          <p className={styles.copyright}>
            © 2026 thiết kế bởi{' '}
            <span className={styles.copyrightAccent}>Mero Reno</span>
            {' '}và{' '}
            <span className={styles.copyrightAccent}>Google Antigravity</span>
          </p>
          <p className={styles.builtWith}>
            Xây dựng bằng Next.js &amp; CSS Modules
          </p>
        </div>

      </div>
    </footer>
  );
}
