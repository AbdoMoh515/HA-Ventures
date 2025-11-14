const HowWeWork = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* عنوان القسم */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">إزاي نقدر نساعدك؟</h2>
          <p className="text-lg text-gray-400 mt-2">
            رحلتك من الفكرة إلى التنفيذ في 3 خطوات.
          </p>
        </div>

        {/* حاوية الخط الزمني */}
        <div className="relative max-w-2xl mx-auto">
          {/* الخط الرأسي في المنتصف */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-700 -translate-x-1/2"></div>

          {/* الخطوة 1 */}
          <div className="relative mb-8 flex justify-between items-center w-full">
            <div className="w-5/12"></div> {/* مساحة فارغة لليمين */}
            <div className="z-10 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold text-xl">
              1
            </div>
            <div className="w-5/12 bg-gray-900/50 border border-gray-700 p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">💡 تطوير فكرتك</h3>
              <p className="text-gray-400">نساعدك تحوّل الفكرة لخطة واقعية.</p>
            </div>
          </div>

          {/* الخطوة 2 */}
          <div className="relative mb-8 flex justify-between items-center w-full">
            <div className="w-5/12 bg-gray-900/50 border border-gray-700 p-4 rounded-lg text-right">
              <h3 className="text-xl font-bold mb-2">🤝 ربطك بفريق مناسب</h3>
              <p className="text-gray-400">نوصلك بالناس اللي هيساعدوك في التنفيذ.</p>
            </div>
            <div className="z-10 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold text-xl">
              2
            </div>
            <div className="w-5/12"></div> {/* مساحة فارغة لليسار */}
          </div>

          {/* الخطوة 3 */}
          <div className="relative mb-8 flex justify-between items-center w-full">
            <div className="w-5/12"></div> {/* مساحة فارغة لليمين */}
            <div className="z-10 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold text-xl">
              3
            </div>
            <div className="w-5/12 bg-gray-900/50 border border-gray-700 p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">🚀 إطلاق مشروعك</h3>
              <p className="text-gray-400">نكون معاك في مرحلة الإطلاق وخطتك للنمو.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;