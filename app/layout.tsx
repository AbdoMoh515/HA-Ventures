import type { Metadata } from "next";
// 1. استيراد خط "كايرو" بدلاً من "Inter"
import { Cairo } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// 2. إعداد الخط (تحديد الأوزان واللغات المدعومة)
const cairo = Cairo({ 
  subsets: ["arabic", "latin"], // "latin" مهم لأي نصوص إنجليزية
  weight: ["400", "700"] // 400 = عادي, 700 = عريض/Bold
});

export const metadata = {
  title: "HA Ventures - من الفكرة إلى التأثير",
  description: "نساعدك على تحويل فكرتك إلى مشروع على أرض الواقع.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      {/* 3. تطبيق الخط الجديد على الموقع بالكامل */}
      <body className={`${cairo.className} bg-[#111111] text-white`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}