import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">

      {/* --- 1. القصة --- */}
      <section className="text-center max-w-4xl mx-auto mb-24">
        <h1 className="text-5xl font-bold mb-4">قصتنا</h1>
        <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
        <div className="text-xl text-gray-300 leading-relaxed space-y-4">
          <p>
            بدأت الحكاية لما اتقابلنا في أولى طب، وكانت بينا دايمًا نفس الجملة:
            “ليه الأفكار العظيمة بتقف عند الكلام؟”
          </p>
          <p>
            من هنا بدأت إشراقة فجر كفكرة صغيرة في جروب طلابي، لحد ما بقت منصة حقيقية استخدمها أكتر من 1000 طالب من جامعات مختلفة.
          </p>
          <p>
            ساعدنا زملاءنا إنهم يحولوا أفكار بسيطة لمشاريع على أرض الواقع، لأننا مؤمنين إن كل مشروع صغير ممكن يسيب أثر كبير.
          </p>
          <p>
            من خلال التجربة دي، عرفنا التحديات اللي بتقابل أي حد بيحاول يبدأ — من أول التفكير لحد التنفيذ.
          </p>
          <p>
            ومن هنا قررنا نأسس HA Ventures، عشان نشارك خبرتنا ونساعد أي شخص — سواء كان طالب أو خريج أو صاحب فكرة — إنه يحوّل حلمه لواقع بخطة واضحة ودعم حقيقي.
          </p>
        </div>
      </section>

      {/* --- 2. الرؤية (خلفية تملأ العرض) --- */}
      <section className="text-center mb-24 py-16 bg-gray-900/50"> {/* تم إزالة max-w-3xl و mx-auto */}
        <h2 className="text-4xl font-bold mb-4">رؤيتنا</h2>
        <p className="text-xl text-gray-300 leading-relaxed px-6 max-w-3xl mx-auto"> {/* إضافة max-w-3xl و mx-auto للنص فقط */}
          تمكين كل شخص عنده فكرة، إنه يمتلك الأدوات والمعرفة لتحويلها لمشروع مؤثر، وجعل الطريق من "فكرة" إلى "تأثير" أقصر وأسهل لكل صاحب حلم.
        </p>
      </section>

      {/* --- 3. الفريق --- */}
      <section>
        <h2 className="text-4xl font-bold text-center mb-12">المؤسسون</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          
          {/* حاتم جمال الشافعي */}
          <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 text-center">
            <Image 
              src="/images/Hatem.jpg" // 1. تحديث امتداد الصورة لـ .jpg
              alt="حاتم جمال الشافعي"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4" // 2. إزالة grayscale
            />
            <h3 className="text-2xl font-bold">حاتم جمال الشافعي</h3>
            <p className="text-accent font-semibold mb-2">مؤسس مشارك</p>
            {/* 3. تنسيق النص ليظهر كل جزء في سطر منفصل */}
            <div className="text-gray-400 text-lg space-y-1"> 
              <p>طالب بكلية الطب البشري – الفرقة الثالثة.</p>
              <p>مؤسس إشراقة فجر، ومجتمع ADHD، ومؤسس HA STUDIO.</p>
              <p>شغوف بتحويل الأفكار إلى مشروعات حقيقية، وببناء مجتمعات رقمية تخدم التعليم والمجتمع.</p>
            </div>
          </div>

          {/* عبد الرحمن محمد عبدالقادر */}
          <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 text-center">
            <Image 
              src="/images/Abdelrahman.jpg" // 1. تحديث امتداد الصورة لـ .jpg
              alt="عبد الرحمن محمد عبدالقادر"
              width={135}
              height={150}
              className="rounded-full mx-auto mb-4" // 2. إزالة grayscale
            />
            <h3 className="text-2xl font-bold">عبد الرحمن محمد عبدالقادر</h3>
            <p className="text-accent font-semibold mb-2">مؤسس مشارك</p>
            {/* 3. تنسيق النص ليظهر كل جزء في سطر منفصل */}
            <div className="text-gray-400 text-lg space-y-1">
              <p>طالب بكلية الطب البشري – الفرقة الثالثة.</p>
              <p>المسؤول التقني لإشراقة فجر، ومؤسس HA STUDIO.</p>
              <p>مهتم بدعم الشباب لتحويل أفكارهم لمشاريع واقعية وإيجاد حلول تقنية لتوفير الوقت والجهد.</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutPage;