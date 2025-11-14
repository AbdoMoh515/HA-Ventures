import Link from 'next/link';

// أيقونة LinkedIn
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
);

const Footer = () => {
  return (
    <footer className="border-t border-gray-700 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* 1. الشعار وروابط التواصل */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">HA Ventures</h3>
            <p className="text-gray-400 text-sm">بنحوّل الأفكار لمشاريع تصنع الفرق.</p>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 hover:text-accent transition-colors">
                <LinkedInIcon />
              </a>
            </div>
          </div>

          {/* 2. روابط الموقع */}
          <div>
            <h4 className="font-bold mb-4">الموقع</h4>
            <nav className="flex flex-col space-y-2 text-gray-400">
              <Link href="/about" className="hover:text-accent">من نحن</Link>
              <Link href="/projects" className="hover:text-accent">مشاريعنا</Link>
              <Link href="/blog" className="hover:text-accent">المقالات</Link>
              <Link href="/how-we-work" className="hover:text-accent">كيف نعمل</Link>
            </nav>
          </div>

          {/* 3. روابط التواصل */}
          <div>
            <h4 className="font-bold mb-4">ابدأ معنا</h4>
            <nav className="flex flex-col space-y-2 text-gray-400">
              <Link href="/start-project" className="hover:text-accent">ابدأ مشروعك</Link>
              <Link href="/contact" className="hover:text-accent">تواصل معنا</Link>
            </nav>
          </div>

          {/* 4. الروابط القانونية */}
          <div>
            <h4 className="font-bold mb-4">قانوني</h4>
            <nav className="flex flex-col space-y-2 text-gray-400">
              <Link href="/faq" className="hover:text-accent">الأسئلة الشائعة</Link>
              <Link href="/privacy-policy" className="hover:text-accent">سياسة الخصوصية</Link>
              <Link href="/terms-and-conditions" className="hover:text-accent">الشروط والأحكام</Link>
            </nav>
          </div>

        </div>

        {/* الحقوق */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-500">
          <p>جميع الحقوق محفوظة © {new Date().getFullYear()} لـ HA Ventures</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;