import ProjectCard from "./ProjectCard";

const FeaturedProjects = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* تحديث العناوين للعربية */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">مشاريعنا</h2>
          <p className="text-lg text-gray-400 mt-2">مبادرات قمنا بتأسيسها ودعمها.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProjectCard 
            logoUrl="/images/eshraqet-fajr-logo.png"
            title="إشراقة فجر"
            description="منصة طلابية تطوعية غير هادفة للربح." // وصف قصير
            linkUrl="https://ishraqatfajr.online/"
          />
          <ProjectCard 
            logoUrl="/images/msuc-logo.png"
            title="MSUC"
            description="مؤسسة إخبارية لتحديث معلومات طلاب الطب." // وصف قصير
            linkUrl="https://msuc.ishraqatfajr.online/"
          />
          <ProjectCard 
            logoUrl="/images/idea-logo.png" 
            title="هل لديك فكرة؟"
            description="نحن هنا لنحول فكرتك إلى حقيقة ملموسة." // وصف قصير
            linkUrl="/start-project"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;