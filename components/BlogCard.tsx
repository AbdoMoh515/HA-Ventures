import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  slug: string;
  title: string;
  snippet: string;
  imageUrl: string;
}

const BlogCard = ({ slug, title, snippet, imageUrl }: BlogCardProps) => {
  return (
    <Link href={`/blog/${slug}`} className="block bg-gray-900/50 border border-gray-700 rounded-lg overflow-hidden group transition-all duration-300 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/10">
      {/* Article Image */}
      <div className="relative w-full h-48">

  <Image
    src={imageUrl}
    alt={title}
    fill // 1. استخدام "fill" كـ prop
    className="object-cover transition-transform duration-300 group-hover:scale-105" // 2. إضافة "object-cover" هنا
  />
      </div>
      {/* Card Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{title}</h3>
        <p className="text-gray-400 mb-4">{snippet}...</p>
        <span className="text-accent font-semibold">اقرأ المزيد &rarr;</span>
      </div>
    </Link>
  );
};

export default BlogCard;