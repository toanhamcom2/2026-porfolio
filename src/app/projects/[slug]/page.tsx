import { notFound } from 'next/navigation';
import Link from 'next/link';
import styles from './page.module.css';

// =============================================================================
// === HƯỚNG DẪN THÊM NỘI DUNG CHI TIẾT DỰ ÁN ===
//
// Mỗi key trong object DETAIL_PAGES phải TRÙNG KHỚP với trường `slug`
// được khai báo trong mảng PROJECTS ở src/components/Projects.tsx.
//
// Cấu trúc mỗi entry:
//
//   title:        Tiêu đề đầy đủ của dự án
//   type:         Loại dự án
//   year:         Năm thực hiện
//   role:         Vai trò cụ thể của bạn
//   tools:        Công cụ / tech stack (mảng chuỗi)
//   url:          Link live dự án (để "" nếu chưa public)
//   coverImage:   Ảnh bìa dự án - đặt ở /public/projects/
//   description:  Đoạn mô tả chi tiết về dự án (dùng \n để xuống dòng)
//   results:      Kết quả đạt được (mảng chuỗi, mỗi item 1 bullet point)
//   gallery:      Ảnh minh họa thêm (mảng đường dẫn) - để [] nếu chưa có
//
// =============================================================================
const DETAIL_PAGES: Record<string, {
  title: string;
  type: string;
  year: string;
  role: string;
  tools: string[];
  url: string;
  coverImage: string;
  description: string;
  results: string[];
  gallery: string[];
}> = {
  // ── Thêm nội dung tại đây — key = slug trong Projects.tsx ──
  "du-an-01": {
    title: "Tên Dự Án 01",
    type: "Landing",
    year: "2025",
    role: "Điền vai trò của bạn ở đây",
    tools: ["Next.js", "Figma"],
    url: "",
    coverImage: "", // "/projects/du-an-01-cover.jpg"
    description: "Điền mô tả chi tiết về dự án này...",
    results: [
      "Kết quả 1 đạt được",
      "Kết quả 2 đạt được",
    ],
    gallery: [], // ["/projects/du-an-01-1.jpg", "/projects/du-an-01-2.jpg"]
  },
  "du-an-02": {
    title: "Tên Dự Án 02",
    type: "Landing",
    year: "2024",
    role: "Điền vai trò của bạn ở đây",
    tools: [],
    url: "",
    coverImage: "",
    description: "Điền mô tả chi tiết về dự án này...",
    results: [],
    gallery: [],
  },
  "du-an-03": {
    title: "Tên Dự Án 03",
    type: "Campaign",
    year: "2024",
    role: "Điền vai trò của bạn ở đây",
    tools: [],
    url: "",
    coverImage: "",
    description: "Điền mô tả chi tiết về dự án này...",
    results: [],
    gallery: [],
  },
  "du-an-04": {
    title: "Tên Dự Án 04",
    type: "Branding",
    year: "2023",
    role: "Điền vai trò của bạn ở đây",
    tools: [],
    url: "",
    coverImage: "",
    description: "Điền mô tả chi tiết về dự án này...",
    results: [],
    gallery: [],
  },
};
// =============================================================================

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const proj = DETAIL_PAGES[slug];

  // Nếu slug không tồn tại → trả về 404
  if (!proj) notFound();

  return (
    <main className={styles.main}>

      {/* Nút quay lại */}
      <Link href="/#projects" className={styles.backLink}>
        ← Quay lại Projects
      </Link>

      {/* Ảnh bìa */}
      {proj.coverImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={proj.coverImage} alt={proj.title} className={styles.coverImage} />
      )}

      {/* Thông tin chính */}
      <header className={styles.header}>
        <span className={styles.typeTag}>{proj.type}</span>
        <h1 className={styles.title}>{proj.title}</h1>
        <div className={styles.meta}>
          <span>{proj.year}</span>
          <span>·</span>
          <span>{proj.role}</span>
        </div>
      </header>

      {/* Mô tả */}
      <section className={styles.descSection}>
        <p className={styles.description}>{proj.description}</p>
      </section>

      {/* Tools */}
      {proj.tools.length > 0 && (
        <section className={styles.toolsSection}>
          <h2 className={styles.sectionTitle}>Công cụ sử dụng</h2>
          <div className={styles.toolList}>
            {proj.tools.map((t) => (
              <span key={t} className={styles.toolTag}>{t}</span>
            ))}
          </div>
        </section>
      )}

      {/* Kết quả */}
      {proj.results.length > 0 && (
        <section className={styles.resultsSection}>
          <h2 className={styles.sectionTitle}>Kết quả đạt được</h2>
          <ul className={styles.resultList}>
            {proj.results.map((r, i) => (
              <li key={i} className={styles.resultItem}>{r}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Gallery ảnh */}
      {proj.gallery.length > 0 && (
        <section className={styles.gallery}>
          {proj.gallery.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={i} src={src} alt={`${proj.title} - ${i + 1}`} className={styles.galleryImg} />
          ))}
        </section>
      )}

      {/* Link live project */}
      {proj.url && (
        <a href={proj.url} target="_blank" rel="noopener noreferrer" className={styles.liveBtn}>
          Xem dự án trực tiếp ↗
        </a>
      )}

    </main>
  );
}
