// import React from 'react'
// import hananpic from "./images/hanan_1.png";
// import { Link } from 'react-scroll'
// function Main() {
//   return (
//     <div className='flex w-[90vw] justify-between m-auto  h-[85vh]'>
//         <div className='w-[50%] space-y-4' >
//             <span className='text-white font-bold-500 text-[30px] space-y-2'>Hi I'm</span><br />
//             <span className='text-[70px] text-white font-extrabold space-y-2 font-mono'>Hanan Fayyaz</span><br />
//             <span className='text-[30px] text-white font-bold' >A Creative</span><br />
//             <span className='inline-block text-[30px] text-yellow-400 font-extrabold space-y-4 drop-shadow-[0_0_10px_rgba(245,230,5,0.6)]'>Web Developer</span><br />
//             <span className='inline-block mt-[10px] text-white text-[16px] font-bold'>I design and build responsive, user-friendly websites and web <br /> applications that drive results and delight users. Let's bring <br /> your digital vision to life!</span> <br /> <br />
//             <button className='cursor-pointer py-2 tracking-wide px-6 bg-yellow-300 text-black hover:bg-black hover:border-yellow-400  hover:text-white font-bold rounded-2xl             shadow-[0_0_20px_rgba(250,204,21,0.4)] hover:shadow-[0_0_30px_rgba(250,204,21,0.6)] 
//           transition-all duration-300'><Link to="projects" smooth duration={300}>View My work</Link></button>
//             <button className='ml-4 py-2 tracking-wide px-6 bg-black border-yellow-300  text-white  hover:bg-yellow-300 hover:text-black cursor-pointer hover:border-yellow-400  font-bold rounded-2xl             shadow-[0_0_20px_rgba(250,204,21,0.4)] hover:shadow-[0_0_30px_rgba(250,204,21,0.8)] 
//           transition-all duration-300 hover:text-black'><Link to='contact' smooth duration={400}>ink Get in touch</Link></button>
//           <div className='flex width-[100%] justify-around' >
//             <div className='text-center'>
//                 <span className='text-center inline-block font-serif text-[50px] text-white font-semibold'>5+</span> <br />
//                 <span className='text-center text-[16px text-gray-400] text-white'>Years of Experience</span>
//             </div>
//             <div className='text-center'>
//                 <span className='text-center inline-block font-serif text-[50px] text-white font-semibold'>100+</span> <br />
//                 <span className='text-center text-[16px text-gray-400] text-white'>Projects Demo</span>
//             </div>
//             <div className='text-center'>
//                 <span className='text-center inline-block font-serif text-[50px] text-white font-semibold'>99%</span> <br />
//                 <span className='text-center text-[16px text-gray-400] text-white'>Client Satisfaction</span>
//             </div>

//           </div>
//         </div>
//         <div className='w-[50%]'>
//             <div className='w-[60%] h-[95%] my-[20px] mx-auto bg-black shadow-[0_0_20px_rgba(250,204,21,1.5)]'><img className='w-[100%] h-full ' src={hananpic} alt="" /></div>
//         </div>
//     </div>
//   )
// }

// export default Main

















// import React from 'react';
// import hananpic from "./images/hanan_1.png";
// import { Link } from 'react-scroll';

// function Main() {
//   return (
//     <div className='flex flex-col-reverse lg:flex-row w-[95%] lg:w-[90vw] justify-between m-auto min-h-[85vh] py-10 lg:py-0 items-center gap-10'>
      
//       {/* Text Content Section */}
//       <div className='w-full lg:w-[55%] space-y-4 text-center lg:text-left'>
//         <div>
//           <span className='text-white font-medium text-[24px] md:text-[30px]'>Hi I'm</span><br />
//           <h1 className='text-[45px] md:text-[60px] lg:text-[70px] text-white font-extrabold font-mono leading-tight'>
//             Hanan Fayyaz
//           </h1>
//           <span className='text-[24px] md:text-[30px] text-white font-bold'>A Creative </span>
//           <span className='inline-block text-[24px] md:text-[30px] text-yellow-400 font-extrabold drop-shadow-[0_0_10px_rgba(245,230,5,0.6)]'>
//             Web Developer
//           </span>
//         </div>

//         <p className='text-white text-[14px] md:text-[16px] font-bold max-w-2xl mx-auto lg:mx-0'>
//           I design and build responsive, user-friendly websites and web applications 
//           that drive results and delight users. Let's bring your digital vision to life!
//         </p>

//         {/* Buttons */}
//         <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4'>
//           <button className='cursor-pointer py-2 tracking-wide px-6 bg-yellow-300 text-black hover:bg-black hover:border-yellow-400 hover:text-white font-bold rounded-2xl shadow-[0_0_20px_rgba(250,204,21,0.4)] hover:shadow-[0_0_30px_rgba(250,204,21,0.6)] transition-all duration-300'>
//             <Link hideCursor={true} to="projects" smooth duration={300}>View My work</Link>
//           </button>
//           <button className='py-2 tracking-wide px-6 bg-black border border-yellow-300 text-white hover:bg-yellow-300 hover:text-black cursor-pointer hover:border-yellow-400 font-bold rounded-2xl shadow-[0_0_20px_rgba(250,204,21,0.4)] hover:shadow-[0_0_30px_rgba(250,204,21,0.8)] transition-all duration-300'>
//             <Link to='contact' smooth duration={400}>Get in touch</Link>
//           </button>
//         </div>

//         {/* Stats Section */}
//         <div className='flex flex-wrap justify-around lg:justify-between w-full pt-10 gap-6' >
//           <div className='text-center'>
//             <span className='font-serif text-[35px] md:text-[50px] text-white font-semibold'>5+</span> <br />
//             <span className='text-[14px] md:text-[16px] text-gray-400'>Years of Experience</span>
//           </div>
//           <div className='text-center'>
//             <span className='font-serif text-[35px] md:text-[50px] text-white font-semibold'>100+</span> <br />
//             <span className='text-[14px] md:text-[16px] text-gray-400'>Projects Demo</span>
//           </div>
//           <div className='text-center'>
//             <span className='font-serif text-[35px] md:text-[50px] text-white font-semibold'>99%</span> <br />
//             <span className='text-[14px] md:text-[16px] text-gray-400'>Client Satisfaction</span>
//           </div>
//         </div>
//       </div>

//       {/* Image Section */}
//       <div className='w-full lg:w-[45%] flex justify-center'>
//         <div className='w-[70%] md:w-[50%] lg:w-[80%] aspect-square bg-black shadow-[0_0_20px_rgba(250,204,21,1.5)] overflow-hidden rounded-lg'>
//           <img className='w-full h-full object-cover' src={hananpic} alt="Hanan Fayyaz" />
//         </div>
//       </div>

//     </div>
//   );
// }

// export default Main;











// import React from 'react'
// import hananpic from "./images/hanan_1.png";
// import { Link } from 'react-scroll'

// function Main() {
//   return (
//     // Changed h-[85vh] to min-h-screen to prevent overlapping sections
//     // Added py-20 for mobile padding so it doesn't touch the edges
//     <div className=' flex flex-col lg:flex-row w-[90vw] justify-between items-center m-auto h-auto md:min-h-screen py-20 lg:py-0 gap-10'>
      
//       {/* Left Content Area */}
//       <div className='w-full lg:w-[50%] space-y-6 text-center lg:text-left' >
//           <div>
//             <span className='text-white font-medium text-[24px] md:text-[30px]'>Hi I'm</span><br />
//             <span className='text-[40px] md:text-[60px] lg:text-[70px] text-white font-extrabold font-mono leading-tight'>Hanan Fayyaz</span><br />
//             <span className='text-[24px] md:text-[30px] text-white font-bold' >A Creative </span>
//             <span className='inline-block text-[24px] md:text-[30px] text-yellow-400 font-extrabold drop-shadow-[0_0_10px_rgba(245,230,5,0.6)]'>Web Developer</span>
//           </div>

//           <p className='text-white text-[14px] md:text-[16px] font-bold leading-relaxed max-w-xl mx-auto lg:mx-0'>
//             I design and build responsive, user-friendly websites and web 
//             applications that drive results and delight users. Let's bring 
//             your digital vision to life!
//           </p>

//           <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-4'>
//             <button className='cursor-pointer py-2 tracking-wide px-6 bg-yellow-300 text-black hover:bg-black hover:border-yellow-400 hover:text-white font-bold rounded-2xl shadow-[0_0_20px_rgba(250,204,21,0.4)] hover:shadow-[0_0_30px_rgba(250,204,21,0.6)] transition-all duration-300'>
//               <Link to="projects" smooth duration={300}>View My work</Link>
//             </button>
//             <button className='py-2 tracking-wide px-6 bg-black border border-yellow-300 text-white hover:bg-yellow-300 hover:text-black cursor-pointer hover:border-yellow-400 font-bold rounded-2xl shadow-[0_0_20px_rgba(250,204,21,0.4)] hover:shadow-[0_0_30px_rgba(250,204,21,0.8)] transition-all duration-300'>
//               <Link to='contact' smooth duration={400}>Get in touch</Link>
//             </button>
//           </div>

//           {/* Stats Section - flex-wrap ensures they stack on very small screens */}
//           <div className='flex flex-wrap justify-center lg:justify-between w-full pt-8 gap-8' >
//             <div className='text-center'>
//                 <span className='font-serif text-[40px] md:text-[50px] text-white font-semibold'>5+</span> <br />
//                 <span className='text-[14px] text-gray-400'>Years of Experience</span>
//             </div>
//             <div className='text-center'>
//                 <span className='font-serif text-[40px] md:text-[50px] text-white font-semibold'>100+</span> <br />
//                 <span className='text-[14px] text-gray-400'>Projects Demo</span>
//             </div>
//             <div className='text-center'>
//                 <span className='font-serif text-[40px] md:text-[50px] text-white font-semibold'>99%</span> <br />
//                 <span className='text-[14px] text-gray-400'>Client Satisfaction</span>
//             </div>
//           </div>
//       </div>

//       {/* Right Image Area */}
//       <div className='w-full lg:w-[45%] flex justify-center'>
//           <div className='w-[280px] h-[350px] md:w-[350px] md:h-[450px] lg:w-[80%] lg:h-[550px] bg-black shadow-[0_0_20px_rgba(250,204,21,1.5)] overflow-hidden rounded-lg'>
//             <img className='w-full h-full object-cover' src={hananpic} alt="Hanan Profile" />
//           </div>
//       </div>
//     </div>
//   )
// }

// export default Main





import React from 'react'
import hananpic from "./images/hanan_1.png";
import { Link } from 'react-scroll'
import { motion } from 'framer-motion';

function Main() {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <section id="home" className='mx-auto relative overflow-hidden'>
      <div className='flex flex-col lg:flex-row w-[90vw] justify-between items-center m-auto h-auto md:min-h-screen py-20 lg:py-0 gap-10'>
        
        {/* Left Content Area */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className='w-full lg:w-[50%] space-y-6 text-center lg:text-left'
        >
          <motion.div variants={fadeInUp}>
            <span className='text-white font-medium text-[24px] md:text-[30px]'>Hi I'm</span><br />
            <h1 className='text-[40px] md:text-[60px] lg:text-[70px] text-white font-extrabold font-mono leading-tight'>
              Hanan Fayyaz 
            </h1>
            <span className='text-[24px] md:text-[30px] text-white font-bold'>A Creative </span>
            <span className='inline-block text-[24px] md:text-[30px] text-yellow-400 font-extrabold drop-shadow-[0_0_15px_rgba(245,230,5,0.8)]'>
              Web Developer
            </span>
          </motion.div>

          <motion.p variants={fadeInUp} className='text-white text-[14px] md:text-[16px] font-bold leading-relaxed max-w-xl mx-auto lg:mx-0'>
            I design and build responsive, user-friendly websites and web 
            applications that drive results and delight users. Let's bring 
            your digital vision to life!
          </motion.p>

          <motion.div variants={fadeInUp} className='flex flex-col sm:flex-row justify-center lg:justify-start gap-4'>
            <button className='cursor-pointer py-2 tracking-wide px-6 bg-yellow-300 text-black hover:bg-black hover:border-yellow-400 hover:text-white font-bold rounded-2xl shadow-[0_0_20px_rgba(250,204,21,0.4)] hover:shadow-[0_0_30px_rgba(250,204,21,0.6)] transition-all duration-300 transform hover:scale-105'>
              <Link to="projects" smooth duration={300}>View My work</Link>
            </button>
            <button className='py-2 tracking-wide px-6 bg-transparent border-2 border-yellow-300 text-white hover:bg-yellow-300 hover:text-black cursor-pointer font-bold rounded-2xl shadow-[0_0_20px_rgba(250,204,21,0.2)] transition-all duration-300 transform hover:scale-105'>
              <Link to='contact' smooth duration={400}>Get in touch</Link>
            </button>
          </motion.div>

          {/* Stats Section with Counting Look */}
          <motion.div variants={fadeInUp} className='flex flex-wrap justify-center lg:justify-between w-full pt-8 gap-8'>
            {[
              { label: "Years of Experience", val: "5+" },
              { label: "Projects Demo", val: "100+" },
              { label: "Client Satisfaction", val: "99%" }
            ].map((stat, i) => (
              <div key={i} className='text-center group'>
                <span className='font-serif text-[40px] md:text-[50px] text-yellow-400 font-semibold group-hover:text-white transition-colors duration-300'>
                  {stat.val}
                </span> 
                <br />
                <span className='text-[14px] text-gray-400 uppercase tracking-widest'>{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image Area with Floating Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className='w-full lg:w-[45%] flex justify-center'
        >
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className='relative w-[280px] h-[350px] md:w-[350px] md:h-[450px] lg:w-[400px] lg:h-[500px] bg-black shadow-[0_0_50px_rgba(250,204,21,0.3)] overflow-hidden rounded-3xl border-2 border-yellow-300/30'
          >
            <img className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700' src={hananpic} alt="Hanan Profile" />
            
            {/* Decorative Glow behind image */}
            <div className='absolute inset-0 bg-gradient-to-t from-yellow-400/20 to-transparent pointer-events-none'></div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

export default Main;