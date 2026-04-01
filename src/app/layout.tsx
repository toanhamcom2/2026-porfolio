import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin", "vietnamese"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "Minh - Portfolio Cá Nhân",
  description: "Portfolio cá nhân của Minh - Marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // File layout.tsx này cấu hình cấu trúc HTML chung và load font chữ
  // Space Grotesk sẽ được dùng cho Headlines (Tiêu đề)
  // Manrope được dùng cho Body (Nội dung chữ thông thường)
  return (
    <html lang="vi" className={`${spaceGrotesk.variable} ${manrope.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
