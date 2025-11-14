import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  logoUrl: string;
  title: string;
  description: string;
  linkUrl: string; // سيصبح الآن إما رابط داخلي أو خارجي
}

const ProjectCard = ({ logoUrl, title, description, linkUrl }: ProjectCardProps) => {
  const isExternal = linkUrl.startsWith('http');
  const buttonStyles = "bg-orange-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-300 mt-auto text-sm";

  // دالة لإنشاء الزر بناءً على نوع الرابط
  const renderButton = () => {
    if (isExternal) {
      return (
        <a 
          href={linkUrl}
          target="_blank" // يفتح في نافذة جديدة
          rel="noopener noreferrer"
          className={buttonStyles}
        >
          اعرف أكتر
        </a>
      );
    }
    // إذا كان الرابط داخليًا (مثل /start-project)
    return (
      <Link href={linkUrl} className={buttonStyles}>
        اعرف أكتر
      </Link>
    );
  };

  return (
    <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/10 h-80 relative">
      {logoUrl && (
        <div className="relative h-32 w-32 mb-6 rounded-full overflow-hidden">
          <Image 
            src={logoUrl} 
            alt={`${title} logo`} 
            layout="fill" 
            objectFit="cover"
          />
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4 grow">{description}</p>
      
      {renderButton()} {/* استدعاء الدالة هنا */}
    </div>
  );
};

export default ProjectCard;