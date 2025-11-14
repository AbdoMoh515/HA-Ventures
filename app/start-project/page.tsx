const StartProjectPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      
      {/* --- 1. العنوان الترحيبي --- */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-5xl font-bold">هل عندك فكرة مشروع؟</h1>
        <p className="text-lg text-gray-400 mt-4">
          إحنا هنا علشان نساعدك تبنيها خطوة بخطوة وتحوّلها لمشروع على أرض الواقع.
        </p>
      </div>

      {/* --- 2. النموذج المفصل --- */}
      <form 
        action="https://formspree.io/f/YOUR_UNIQUE_ID" // <-- استخدم نفس رابط Formspree الخاص بك
        method="POST"
        className="max-w-xl mx-auto"
      >
        {/* الاسم */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-300 mb-2">الاسم</label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            required 
            className="w-full bg-gray-900 border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-accent" 
          />
        </div>

        {/* البريد الإلكتروني */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-300 mb-2">البريد الإلكتروني</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            required 
            className="w-full bg-gray-900 border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-accent" 
          />
        </div>

        {/* اسم الفكرة */}
        <div className="mb-4">
          <label htmlFor="idea_name" className="block text-gray-300 mb-2">اسم الفكرة</label>
          <input 
            type="text" 
            name="idea_name" 
            id="idea_name" 
            required 
            className="w-full bg-gray-900 border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-accent" 
          />
        </div>

        {/* وصف الفكرة */}
        <div className="mb-6">
          <label htmlFor="description" className="block text-gray-300 mb-2">وصف الفكرة</label>
          <textarea 
            name="description" 
            id="description" 
            rows={5} 
            required 
            className="w-full bg-gray-900 border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-accent"
          ></textarea>
        </div>

        {/* المرحلة الحالية */}
        <div className="mb-4">
          <label htmlFor="stage" className="block text-gray-300 mb-2">المرحلة الحالية</label>
          <select 
            name="stage" 
            id="stage"
            required
            className="w-full bg-gray-900 border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option value="">اختر المرحلة...</option>
            <option value="فكرة">فكرة</option>
            <option value="جاري التنفيذ">جاري التنفيذ</option>
            <option value="جاهز للإطلاق">جاهز للإطلاق</option>
          </select>
        </div>

        {/* نوع الدعم المطلوب */}
        <div className="mb-6">
          <label htmlFor="support_type" className="block text-gray-300 mb-2">نوع الدعم المطلوب</label>
          <select 
            name="support_type" 
            id="support_type"
            required
            className="w-full bg-gray-900 border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option value="">اختر نوع الدعم...</option>
            <option value="فني">فني</option>
            <option value="تسويقي">تسويقي</option>
            <option value="مالي">مالي</option>
            <option value="استشاري">استشاري</option>
            <option value="إداري">إداري</option>
          </select>
        </div>

        {/* زر الإرسال */}
        <div className="text-center">
          <button 
            type="submit" 
            className="bg-orange-500 text-white font-bold py-3 px-12 rounded-lg hover:bg-orange-600 transition-colors duration-300 hover:scale-105"
          >
            إرسال الفكرة
          </button>
        </div>
      </form>

      {/* --- 3. الجملة التحفيزية --- */}
      <div className="text-center max-w-2xl mx-auto mt-16">
        <p className="text-xl text-gray-400 italic">
          "ما تستناش الظروف تبقى مثالية — ابدأ بخطوة واحدة، والباقي هنبنيه سوا."
        </p>
      </div>

    </div>
  );
};

export default StartProjectPage;