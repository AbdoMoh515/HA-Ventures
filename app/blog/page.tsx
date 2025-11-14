import BlogCard from '@/components/BlogCard';
import Link from 'next/link';
import { posts } from '@/data/posts';

const BlogPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-5xl font-bold">المقالات</h1>
        <p className="text-lg text-gray-400 mt-4">
          نصائح عملية وتجارب حقيقية لمساعدتك في رحلتك من الفكرة إلى التأثير.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {posts.map((post) => (
          <BlogCard
            key={post.slug}
            slug={post.slug}
            title={post.title}
            snippet={post.snippet}
            imageUrl={post.imageUrl}
          />
        ))}
      </div>

      <div className="text-center p-10 bg-gray-900/50 rounded-lg">
        <h3 className="text-3xl font-bold mb-10">هل عندك فكرة حابب تبدأها؟</h3>
        <Link 
          href="/start-project" 
          className="bg-orange-500 text-white font-bold py-3 px-8 rounded-lg 
                     transition-all duration-300 transform 
                     hover:bg-orange-600 hover:scale-105"
        >
          قدّمها من هنا 👇
        </Link>
      </div>
    </div>
  );
};

export default BlogPage;