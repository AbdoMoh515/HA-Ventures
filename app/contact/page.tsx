const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* --- 1. قسم المعلومات --- */}
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">تواصل معنا</h1>
          <p className="text-lg text-gray-400 mt-4 mb-8">
            لو عندك فكرة أو محتاج استشارة، ابعتلنا دلوقتي. فريقنا دايمًا جاهز يسمعك.
          </p>
          
          {/* --- روابط التواصل المباشرة --- */}
          <h3 className="text-xl font-bold mb-4">أو تواصل معنا مباشرة:</h3>
          <div className="flex space-x-4">
            {/* استبدل # بالروابط الحقيقية */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-accent transition-colors">
              {/* WhatsApp Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.451 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.318 1.908 6.011l-1.157 4.224 4.299-1.141z"/></svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-accent transition-colors">
              {/* Telegram Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0C5.356.0 0 5.355 0 11.943c0 6.588 5.356 11.944 11.944 11.944 6.588 0 11.944-5.356 11.944-11.944C23.888 5.355 18.532.0 11.944 0zM17.41 8.816c-.23 1.147-.8 3.737-1.123 5.392-.26 1.305-.59 1.765-.953 1.8-.473.047-1.127-.29-2.145-.92-1.43-.88-2.226-1.42-3.69-2.31-1.606-.97-2.82-1.57-2.73-2.61.05-.62.53-1.22 1.48-1.78l7.06-4.38s.55-.35.97.1c.36.39.18.91-.06 1.1l-5.12 3.25c-.21.14-.23.42.02.58.3.18.7.4 1.15.68l.02.01c.42.26.83.52 1.22.77.42.27.79.5.89.87.16.58-.09 1.19-.24 1.38z"/></svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-accent transition-colors">
              {/* LinkedIn Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
            </a>
          </div>
        </div>

        {/* --- 2. نموذج التواصل البسيط --- */}
        <div className="bg-gray-900/50 border border-gray-700 p-8 rounded-lg">
          <form 
            action="https://formspree.io/f/YOUR_UNIQUE_ID" // <-- استخدم نفس رابط Formspree الخاص بك
            method="POST"
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

            {/* الرسالة */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-300 mb-2">الرسالة</label>
              <textarea 
                name="message" 
                id="message" 
                rows={5} 
                required 
                className="w-full bg-gray-900 border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-accent"
              ></textarea>
            </div>

            {/* زر الإرسال */}
            <div className="text-right">
              <button 
                type="submit" 
                className="bg-orange-500 text-white font-bold py-3 px-10 rounded-lg hover:bg-orange-600 transition-colors duration-300 hover:scale-105"
              >
                إرسال
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;