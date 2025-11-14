const Services = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">How We Help</h2>
          <p className="text-lg text-gray-400 mt-2">From a simple idea to a tangible project.</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          
          {/* Service 1: Strategic Consulting */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-gray-800">
              {/* Lightbulb Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Strategic Consulting</h3>
            <p className="text-gray-400">We help you refine your idea, define your goals, and create a solid action plan.</p>
          </div>

          {/* Service 2: Technical Development */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-gray-800">
              {/* Code Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Technical Development</h3>
            <p className="text-gray-400">From landing pages to full-stack applications, we build the tools you need to succeed.</p>
          </div>
          
          {/* Service 3: Partnership & Execution */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-gray-800">
              {/* Handshake Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Partnership & Execution</h3>
            <p className="text-gray-400">We don't just advise; we work alongside you as dedicated partners in your journey.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;