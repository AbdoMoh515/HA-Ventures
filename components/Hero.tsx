import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-black">
      <div className="relative z-10 text-center text-white p-4">
        
        {/* --- التغييرات هنا --- */}
        <h1 className="text-5xl md:text-7xl font-bold mb-16">
          بنحوّل الأفكار لمشاريع تصنع الفرق
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-8">
          فكرتك مش هتفضل فكرة — خُد أول خطوة دلوقتي
        </p>
        
        <Link 
          href="/start-project" 
          className="bg-orange-500 text-white font-bold py-3 px-8 rounded-lg 
                     transition-all duration-300 transform 
                     hover:bg-orange-600 hover:scale-105"
        >
          ابدأ مشروعك الآن
        </Link>
      </div>
    </section>
  );
};

export default Hero;