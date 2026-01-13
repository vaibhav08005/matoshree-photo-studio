import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black py-10 px-6 h-full flex flex-col justify-between z-0 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="max-w-md">
           <h2 className="text-xs font-bold uppercase tracking-widest mb-6">Studio Address</h2>
           <address className="not-italic text-lg font-serif mb-6 leading-relaxed">
             Near Old Bus Stop, Near Munde Hospital,<br/>
             Degloor, Nanded, Maharashtra 431717<br/>
             <span className="text-sm opacity-60">(Alt: Old Bus Stand Rampur, Degloor Road)</span>
           </address>
           <h2 className="text-xs font-bold uppercase tracking-widest mb-2">Contact</h2>
           <p className="text-lg font-serif opacity-70 mb-2">
             <a href="tel:+918380864033" className="hover:underline">+91 83808 64033</a>
           </p>
           {/* Email not available */}
        </div>
        
        <div className="flex flex-col gap-4">
           <h2 className="text-xs font-bold uppercase tracking-widest">Connect</h2>
           <div className="flex gap-8">
            <a href="#" className="text-xs uppercase tracking-widest hover:line-through transition-all hover-trigger">Facebook (@Matoshri-photography)</a>
           </div>
        </div>
      </div>

      <div className="mt-10 md:mt-20">
        <h1 className="font-serif italic text-[10vw] md:text-[12vw] leading-none tracking-tighter text-center opacity-100 whitespace-nowrap">
          Matoshri Photo
        </h1>
        <div className="flex justify-between items-end mt-4 text-[10px] uppercase tracking-widest border-t border-black pt-4">
           <span>© 2024 Matoshri Photo Studio And Live</span>
           <span>Established 1993</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;