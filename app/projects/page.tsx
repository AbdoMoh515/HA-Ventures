import ProjectCard from "@/components/ProjectCard";
import Link from 'next/link'; // 1. استيراد Link

const ProjectsPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold">مشاريعنا</h1>
        <p className="text-lg text-gray-400 mt-2">
          مبادرات قمنا بتأسيسها ودعمها.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"> {/* 2. إضافة هامش سفلي */}
        <ProjectCard 
          logoUrl="/images/eshraqet-fajr-logo.png"
          title="إشراقة فجر"
          description="منصة طلابية تطوعية غير هادفة للربح."
          linkUrl="https://ishraqatfajr.online/"
        />
        <ProjectCard 
          logoUrl="/images/msuc-logo.png"
          title="MSUC"
          description="مؤسسة إخبارية لتحديث معلومات طلاب الطب."
          linkUrl="https://msuc.ishraqatfajr.online/"
        />
        <ProjectCard 
          logoUrl="/images/idea-logo.png"
          title="هل لديك فكرة؟"
          description="نحن هنا لنحول فكرتك إلى حقيقة ملموسة."
          linkUrl="/start-project"
        />
      </div>

      {/* --- 3. قسم CTA الجديد --- */}
      <div className="text-center p-10 bg-gray-900/50 rounded-lg">
        <h3 className="text-3xl font-bold mb-12">عايز مشروعك يكون هنا؟</h3>
        <Link 
          href="/start-project" 
          className="bg-orange-500 text-white font-bold py-3 px-8 rounded-lg 
                     transition-all duration-300 transform 
                     hover:bg-orange-600 hover:scale-105"
        >
          شاركنا فكرتك الآن
        </Link>
      </div>

    </div>
  );
};

export default ProjectsPage;