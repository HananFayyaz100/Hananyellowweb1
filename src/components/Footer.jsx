import React from 'react';
import { Facebook, Linkedin, Instagram, MessageCircle, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook size={18} />, href: "https://web.facebook.com/profile.php?id=61581923920092", target: "_blank" },
    { icon: <Linkedin size={18} />, href: "#" },
    { icon: <Instagram size={18} />, href: "https://www.instagram.com/hananfayyz/" },
    { icon: <MessageCircle size={18} />, href: "0371066615" },
  ];

  const quickLinks = ["Home", "About Me", "Skills", "Services", "Projects", "Design", "Contact"];

  const team = [
    {
      name: "khalil Ahmad",
      role: "Full-Stack Developer",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    {
      name: "Rehman Qurashi",
      role: "Digital Marketer",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
    }
  ];

  return (
    <footer className="bg-black/60 text-white py-16 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Sparkles (Decorative) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-1 h-1 bg-yellow-500 rounded-full opacity-40"></div>
        <div className="absolute bottom-20 right-1/3 w-1.5 h-1.5 bg-yellow-600 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 right-10 w-1 h-1 bg-yellow-400 rounded-full opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Column 1: Profile */}
        <div className="space-y-6">
          <div className="inline-block">
            <h2 className="text-2xl font-bold text-[#FFB800]">Hanan Fayyaz</h2>
            <div className="h-0.5 w-12 bg-[#FFB800] mt-1"></div>
          </div>
          <p className="text-zinc-400 leading-relaxed text-sm">
            Passionate about building innovative and user-friendly web solutions, from fitness apps to blockchain platforms. Let's collaborate to bring your ideas to life.
          </p>
          <div className="flex gap-3">
            {socialLinks.map((link, i) => (
              <a key={i} href={link.href} target='_blank' className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-[#FFB800] hover:text-black transition-all border border-zinc-800">
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-6 lg:pl-10">
          <div className="inline-block">
            <h2 className="text-2xl font-bold text-[#FFB800]">Quick Links</h2>
            <div className="h-0.5 w-12 bg-[#FFB800] mt-1"></div>
          </div>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="text-zinc-400 hover:text-[#FFB800] transition-colors text-sm">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Meet Our Team */}
        <div className="space-y-6">
          <div className="inline-block">
            <h2 className="text-2xl font-bold text-[#FFB800]">Meet Our Team</h2>
            <div className="h-0.5 w-12 bg-[#FFB800] mt-1"></div>
          </div>
          <div className="flex gap-4">
            {team.map((member, i) => (
              <div key={i} className="bg-[#0f0f0f] border border-zinc-800 rounded-2xl p-4 flex flex-col items-center text-center w-36">
                <div className="w-16 h-16 rounded-full border-2 border-[#FFB800] p-1 mb-3">
                  <img src={member.img} alt={member.name} className="w-full h-full rounded-full object-cover" />
                </div>
                <h3 className="text-[#FFB800] text-xs font-bold mb-1">{member.name}</h3>
                <p className="text-zinc-500 text-[10px] leading-tight">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Column 4: Newsletter */}
        <div className="space-y-6">
          <div className="inline-block">
            <h2 className="text-2xl font-bold text-[#FFB800]">Get In Touch</h2>
            <div className="h-0.5 w-12 bg-[#FFB800] mt-1"></div>
          </div>
          <p className="text-zinc-400 text-sm">
            Get updates, design inspiration, and tech insights directly to your inbox.
          </p>
          <div className="space-y-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-[#FFB800] transition-colors"
            />
            <button className="w-full bg-[#FFB800] hover:bg-[#e6a600] text-black font-bold py-3 rounded-full transition-all active:scale-95 shadow-lg shadow-yellow-500/10">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Floating Action & Bottom Bar */}
      <div className="flex flex-col items-center gap-10">
        <button className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3 rounded-full flex items-center gap-2 font-semibold transition-all hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]">
          <MessageCircle size={20} fill="white" />
          <a href="https://wa.me/923710666175">Chat on WhatsApp</a>
        </button>

        <div className="w-full border-t border-zinc-900 pt-8 text-center text-zinc-500 text-xs">
          <p className="flex items-center justify-center gap-1">
            © 2025 Hanan Fayyaz Studio | Designed with 
            <Heart size={14} className="text-[#FFB800] fill-[#FFB800]" /> 
            by Mudassar Iqbal | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;