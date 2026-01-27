// import React from 'react'
// import hanansec from "./images/hanan_2.png"
// import { FaCheck, FaDownload } from "react-icons/fa";
// const AboutMe = () => {
//   return (
//     <div className=' flex w-[80vw] mx-auto h-auto  mt-[20px]'>
//       <div className='w-[40%]'>
//             <div className='items-center overflow-hidden w-[90%] h-[90%] my-[20px] mx-auto bg-black shadow-[0_0_20px_rgba(250,204,21,1.5)]'>
//                 <img className='w-[80%] mx-auto' src={hanansec} alt="" />
//             </div>
//       </div>
//       <div className='w-[60%] p-2'>
//         <span className='text-gray text-md text-white'>HOW I AM</span><br />
//         <span className='text-2xl font-semibold text-white'>About Me</span> <br /> <br />
//         <span className='text-md text-white tracking-tight'>Hello! I'm Mudassar Iqbal, a passionate and results-oriented Web Developer with a knack for creating dynamic and intuitive digital experiences. With a strong foundation in modern web technologies, I thrive on transforming complex problems into elegant, efficient solutions. My experience spans various domains, including developing solutions for fitness management, educational and travel platforms, and emerging blockchain technologies.</span><br /><br />
//         <span className='text-md text-white tracking-tight'>My journey in web development started with a fascination for how websites work, and it has grown into a full-fledged passion for building tools that help people and businesses achieve their goals. I'm a lifelong learner, always eager to explore new technologies and methodologies.</span><br /><br />
//         <span className='text-md text-white tracking-tight'><div className='inline-block mr-2 items-center bg-yellow-300 w-[20px] h-[20px] border-yellow-300 rounded-[50%] p-1 items-center '><FaCheck className='text-xs text-black'/></div>Versatile Across Diverse Project Domains</span><br />
//         <span className='text-md text-white tracking-tight'><div className='inline-block mr-2 items-center bg-yellow-300 w-[20px] h-[20px] border-yellow-300 rounded-[50%] p-1 items-center '><FaCheck className='text-xs text-black'/></div>Committed to Clean & Efficient Code</span><br />
//         <span className='text-md text-white tracking-tight'><div className='inline-block mr-2 items-center bg-yellow-300 w-[20px] h-[20px] border-yellow-300 rounded-[50%] p-1 items-center '><FaCheck className='text-xs text-black'/></div>Focus on User Experience & Accessibility</span><br /><br />
//         <button className='flex items-center cursor-pointer py-2 tracking-wide px-6 bg-yellow-300 text-black hover:bg-black hover:border-yellow-400  hover:text-white font-bold rounded-2xl             shadow-[0_0_20px_rgba(250,204,21,0.4)] hover:shadow-[0_0_30px_rgba(250,204,21,0.6)] 
//           transition-all duration-300'>Download CV<FaDownload className='text-sm ml-2 text-black hover:text-white'/></button>
//       </div>

//     </div>
//   )
// }

// export default AboutMe




















import React from 'react';
import hanansec from "./images/hanan_2.png";
import { FaCheck, FaDownload } from "react-icons/fa";

const AboutMe = () => {
  return (
    // Changed flex to flex-col for mobile and flex-row for desktop
    // Changed w-[80vw] to w-[90vw] on mobile for better spacing
    <div id="about" className='flex flex-col lg:flex-row w-[90vw] lg:w-[80vw] mx-auto min-h-screen items-center justify-center gap-10 py-20 mt-auto'>
      
      {/* Image Container */}
      <div className='w-full lg:w-[40%] flex justify-center'>
        <div className='overflow-hidden w-[280px] h-[350px] md:w-[350px] md:h-[450px] lg:w-[90%] lg:h-auto bg-black shadow-[0_0_20px_rgba(250,204,21,1.5)] rounded-lg'>
          <img className='w-[80%] mx-auto mt-4' src={hanansec} alt="About Me" />
        </div>
      </div>

      {/* Text Content Container */}
      <div className='w-full lg:w-[60%] p-2 text-center lg:text-left'>
        <span className='text-gray-400 text-sm md:text-md uppercase tracking-widest'>HOW I AM</span><br />
        <h2 className='text-3xl md:text-4xl font-semibold text-white mt-1'>About Me</h2> 
        
        <div className='mt-6 space-y-4'>
          <p className='text-md text-white tracking-tight leading-relaxed'>
            Hello! I'm Mudassar Iqbal, a passionate and results-oriented Web Developer with a knack for creating dynamic and intuitive digital experiences. With a strong foundation in modern web technologies, I thrive on transforming complex problems into elegant, efficient solutions.
          </p>
          <p className='text-md text-white tracking-tight leading-relaxed'>
            My journey in web development started with a fascination for how websites work, and it has grown into a full-fledged passion for building tools that help people and businesses achieve their goals.
          </p>
        </div>

        {/* List Items */}
        <div className='mt-6 space-y-3'>
          {[
            "Versatile Across Diverse Project Domains",
            "Committed to Clean & Efficient Code",
            "Focus on User Experience & Accessibility"
          ].map((text, index) => (
            <div key={index} className='flex items-center justify-center lg:justify-start gap-3 text-white text-md'>
              <div className='flex items-center justify-center bg-yellow-300 w-5 h-5 rounded-full shrink-0'>
                <FaCheck className='text-[10px] text-black'/>
              </div>
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* Download Button */}
        <div className='mt-8 flex justify-center lg:justify-start'>
          <button className='group flex items-center cursor-pointer py-3 tracking-wide px-8 bg-yellow-300 text-black hover:bg-black border-2 border-transparent hover:border-yellow-300 hover:text-white font-bold rounded-2xl shadow-[0_0_20px_rgba(250,204,21,0.4)] hover:shadow-[0_0_30px_rgba(250,204,21,0.6)] transition-all duration-300'>
            Download CV
            <FaDownload className='text-sm ml-2 text-black group-hover:text-white transition-colors duration-300'/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;