"use client";
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav>
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          <Image 
            src="/images/ha-logo.png" 
            alt="HA Logo"
            width={90} 
            height={100}
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          <Link href="/about" className="text-white hover:text-accent transition-colors">
            من نحن
          </Link>
          <Link href="/projects" className="text-white hover:text-accent transition-colors">
            مشاريعنا
          </Link>
          {/* --- الرابط الجديد --- */}
          <Link href="/blog" className="text-white hover:text-accent transition-colors">
            المقالات
          </Link>
          {/* --- --- */}
          <Link href="/contact" className="text-white hover:text-accent transition-colors">
            تواصل معنا
          </Link>
        </div>
      </div>
    </nav>
  );
}