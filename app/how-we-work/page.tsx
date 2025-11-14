const HowWeWorkPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      
      {/* --- 1. العنوان الرئيسي --- */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-5xl font-bold">كيف نعمل</h1>
        <p className="text-lg text-gray-400 mt-4">
          رحلتنا معك بسيطة ومباشرة، من الفكرة الأولية إلى النجاح المستمر.
        </p>
      </div>

      {/* --- 2. قائمة الخطوات --- */}
      <div className="max-w-3xl mx-auto space-y-8">

        {/* الخطوة 1 */}
        <div className="flex items-start space-x-4">
          <div className="text-4xl font-bold text-accent">01.</div>
          <div>
            <h3 className="text-2xl font-bold mb-2">تشاركنا فكرتك</h3>
            <p className="text-gray-400">
              كل شيء يبدأ من هنا. تملأ نموذج "ابدأ مشروعك" وتخبرنا عن رؤيتك والتحدي الذي تحاول حله.
            </p>
          </div>
        </div>

        {/* الخطوة 2 */}
        <div className="flex items-start space-x-4">
          <div className="text-4xl font-bold text-accent">02.</div>
          <div>
            <h3 className="text-2xl font-bold mb-2">نجتمع معاك ونفهم تفاصيلها</h3>
            <p className="text-gray-400">
              نقوم بتحديد اجتماع (أونلاين أو وجهًا لوجه) لنغوص في تفاصيل الفكرة، نفهم أهدافك، ونحدد التحديات المحتملة.
            </p>
          </div>
        </div>

        {/* الخطوة 3 */}
        <div className="flex items-start space-x-4">
          <div className="text-4xl font-bold text-accent">03.</div>
          <div>
            <h3 className="text-2xl font-bold mb-2">نوصلك بالدعم المناسب</h3>
            <p className="text-gray-400">
              سواء كنت بحاجة إلى فريق تقني، أو استراتيجية تسويق، أو دعم إداري، نحن نصلك بالموارد والخبرات الصحيحة.
            </p>
          </div>
        </div>

        {/* الخطوة 4 */}
        <div className="flex items-start space-x-4">
          <div className="text-4xl font-bold text-accent">04.</div>
          <div>
            <h3 className="text-2xl font-bold mb-2">نساعدك في التخطيط والتنفيذ</h3>
            <p className="text-gray-400">
              نعمل معك لوضع خريطة طريق واضحة. نتحول من مجرد مستشارين إلى شركاء في التنفيذ لضمان أن كل شيء يسير على المسار الصحيح.
            </p>
          </div>
        </div>

        {/* الخطوة 5 */}
        <div className="flex items-start space-x-4">
          <div className="text-4xl font-bold text-accent">05.</div>
          <div>
            <h3 className="text-2xl font-bold mb-2">نتابعك بعد الإطلاق لضمان النجاح</h3>
            <p className="text-gray-400">
              الإطلاق هو البداية فقط. نبقى على تواصل دائم لتقديم الدعم والمشورة لضمان نمو مشروعك واستمراريته.
            </p>
          </div>
        </div>
      </div>

      {/* --- 3. الجملة الختامية --- */}
      <div className="text-center max-w-2xl mx-auto mt-20 p-8 bg-gray-900/50 rounded-lg">
        <p className="text-2xl text-gray-300 italic">
          “هدفنا مش نملك فكرتك، هدفنا نملك سبب نجاحها.”
        </p>
      </div>

    </div>
  );
};

export default HowWeWorkPage;