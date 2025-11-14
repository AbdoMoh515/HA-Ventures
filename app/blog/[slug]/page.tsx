import { posts } from '@/data/posts';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

// هذا هو النمط الذي يعمل (باستخدام await)
interface SinglePostPageProps {
  params: Promise<{ slug: string }>; 
}

async function getPostData(slug: string) {
  const post = posts.find((p) => p.slug === slug);
  return post;
}

const SinglePostPage = async ({ params }: SinglePostPageProps) => {
  
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) {
    notFound();
  }

  return (
    // حاوية الصفحة الرئيسية
    <div>
      {/* 1. حاوية المقال (بعرض محدد) */}
      <article className="container mx-auto max-w-3xl px-4 py-16">
        
        {/* 2. تم تعديل العنوان: إضافة "leading-relaxed" */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter leading-relaxed">
          {post.title}
        </h1>
        
        {/* قسم الصورة (كما هو) */}
        <div className="relative w-full h-auto rounded-lg overflow-hidden my-8">
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={1200}
            height={630}
            className="w-full h-auto"
          />
        </div>

        {/* محتوى المقال (كما هو) */}
        <div 
          className="text-lg text-gray-300 leading-relaxed space-y-4"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      
      </article> {/* 3. إغلاق حاوية المقال هنا */}

      {/* 4. قسم CTA (الآن خارج الحاوية، بعرض كامل) */}
      <section className="bg-gray-900/50 py-16 mt-16">
        <div className="container mx-auto px-4 text-center max-w-3xl"> 
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
      </section>
    </div>
  );
};

export default SinglePostPage;