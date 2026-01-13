import React from 'react';

const Statement: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0a0a0a] py-32 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.3] text-gray-600">
          <span className="text-white">Matoshri Photo Studio And Live</span> has been Nanded's trusted choice since <span className="text-white">1993</span>. 
          We specialize in high-quality <span className="italic text-white hover-trigger transition-colors duration-300">visual storytelling</span> through 
          weddings, candid moments, live photography, and custom <span className="text-white hover-trigger transition-colors duration-300"> photo framing</span> services.
        </p>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            {[
                { title: "Storytelling Visuals", desc: "We focus on capturing timeless wedding memories and events through both posed portraits and candid photography." },
                { title: "Since 1993", desc: "A long-standing studio in Degloor, offering over 30 years of professional expertise in preserving your most cherished moments." },
                { title: "Client Trust", desc: "Rated 4.8/5 by over 100 customers for our superb photography quality and very cooperative staff." }
            ].map((item) => (
                <div key={item.title} className="border-t border-white/20 pt-6">
                    <h4 className="text-sm uppercase tracking-widest mb-4">{item.title}</h4>
                    <p className="text-gray-400 font-light leading-relaxed">{item.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Statement;