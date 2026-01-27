// import React, { useState } from "react";
// import { Link } from "react-scroll";

// const Navbar = () => {
//   const [active, setActive] = useState("Home");

//   const navLinks = ["Home", "About", "Skills", "Services", "Projects", "Design", "Contact"];

//   return (
//     <nav className="fixed top-0 w-full flex items-center justify-between px-8 py-4 bg-[#0a0a0a] text-white z-50">

//       {/* Logo */}
//       <div className="relative flex items-center cursor-pointer">
//         <div className="absolute -top-2 -left-2 w-12 h-10 border-t-2 border-l-2 border-yellow-400 rounded-tl-full rotate-[15deg]" />
//         <span className="text-2xl font-bold text-yellow-600">HF</span>
//       </div>

//       {/* Nav Links */}
//       <ul className="flex items-center space-x-8">
//         {navLinks.map((link) => {
//           const isActive = active === link;

//           return (
//             <li key={link} className="relative group">
//               <Link
//                 to={link.toLowerCase()}
//                 smooth
//                 duration={500}
//                 offset={-80}
//                 spy
//                 onSetActive={() => setActive(link)}
//                 className={`relative cursor-pointer text-sm font-medium transition-colors
//                   ${isActive ? "text-white" : "text-gray-400 group-hover:text-white"}`}
//               >
//                 {link}

//                 {/* Hover underline (inactive only) */}
//                 {!isActive && (
//                   <span
//                     className="absolute left-0 -bottom-1 h-[2px] w-full bg-white
//                       transform scale-x-0 origin-left
//                       transition-transform duration-300 ease-out
//                       group-hover:scale-x-100"
//                   />
//                 )}
//               </Link>

//               {/* Active underline */}
//               {isActive && (
//                 <div className="absolute -bottom-2 left-0 w-full h-[3px] bg-yellow-400 rounded-full" />
//               )}
//             </li>
//           );
//         })}
//       </ul>

//       {/* Right Button */}
//       <button className="bg-yellow-400 cursor-pointer hover:drop-shadow-[0_0_10px_rgba(245,230,5,0.6)] text-black px-6 py-2 rounded-full font-bold text-sm">
//         <Link to="contact" smooth duration={500}
//                  >Hire Me</Link>
//       </button>
//     </nav>
//   );
// };

// export default Navbar;





import React, { useState } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Install react-icons if you haven't

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false); // For mobile menu toggle

  const navLinks = ["Home", "About", "Skills", "Services", "Projects", "Design", "Contact"];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full flex items-center justify-between px-6 md:px-12 py-4 bg-[#0a0a0a] text-white z-50 border-b border-gray-900">
      
      {/* Logo */}
      <div className="relative flex items-center cursor-pointer">
        <div className="absolute -top-2 -left-2 w-12 h-10 border-t-2 border-l-2 border-yellow-400 rounded-tl-full rotate-[15deg]" />
        <span className="text-2xl font-bold text-yellow-600">HF</span>
      </div>

      {/* Desktop Nav Links (Hidden on Mobile) */}
      <ul className="hidden lg:flex items-center space-x-8">
        {navLinks.map((link) => {
          const isActive = active === link;
          return (
            <li key={link} className="relative group">
              <Link
                to={link.toLowerCase()}
                smooth
                duration={500}
                offset={-80}
                spy
                onSetActive={() => setActive(link)}
                className={`relative cursor-pointer text-sm font-medium transition-colors
                  ${isActive ? "text-white" : "text-gray-400 group-hover:text-white"}`}
              >
                {link}
                {!isActive && (
                  <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-white transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
                )}
              </Link>
              {isActive && (
                <div className="absolute -bottom-2 left-0 w-full h-[3px] bg-yellow-400 rounded-full" />
              )}
            </li>
          );
        })}
      </ul>

      {/* Hire Me Button (Hidden on Mobile) */}
      <button className="hidden lg:block bg-yellow-400 cursor-pointer hover:drop-shadow-[0_0_10px_rgba(245,230,5,0.6)] text-black px-6 py-2 rounded-full font-bold text-sm transition-all">
        <Link to="contact" smooth duration={500}>Hire Me</Link>
      </button>

      {/* Mobile Menu Toggle Icon */}
      <div className="lg:hidden text-3xl cursor-pointer text-yellow-400" onClick={toggleMenu}>
        {isOpen ? <HiX /> : <HiMenuAlt3 />}
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`fixed top-0 left-0 h-screen w-full bg-[#0a0a0a] transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out lg:hidden z-40`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {/* Close button inside menu */}
          <div className="absolute top-6 right-6 text-4xl text-yellow-400" onClick={toggleMenu}>
            <HiX />
          </div>

          {navLinks.map((link) => (
            <Link
              key={link}
              to={link.toLowerCase()}
              smooth
              duration={500}
              offset={-80}
              onClick={() => {
                setActive(link);
                setIsOpen(false);
              }}
              className={`text-2xl font-bold ${active === link ? "text-yellow-400" : "text-white"}`}
            >
              {link}
            </Link>
          ))}
          
          <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold text-lg" onClick={() => setIsOpen(false)}>
            <Link to="contact" smooth duration={500}>Hire Me</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;