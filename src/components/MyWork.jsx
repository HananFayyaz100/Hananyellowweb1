// import React from 'react'
// import { FaDesktop, FaServer, FaCheck, FaCode } from 'react-icons/fa'
// import first from '../pics/web_1.jpg'
// import second from '../pics/web_2.jpg'
// import third from '../pics/web_3.jpg'
// const MyWork = () => {
//   return (
//     <div className=' text-center'>
//       <span className='text-gray-400 font-semibold text-lg'>My Work</span><br />
//       <span className='text-white font-extrabold text-3xl'>Featured Projects</span><br /><br />
//       <div className=' grid grid-cols-3 gap-4 w-[90vw] mx-auto p-4'>
//         <div className=' overflow-hidden transition-all duration-300 hover:border hover:border-[1px] hover:border-yellow-300 hover:shadow-md  rounded-md h-auto  bg-black/40  backdrop-blur-md '>
//             <img src={first} className='min-h-[250px] w-full -m-0 rounded-md transition-all duration-300 ease-in-out hover:scale-105' alt="" /><br />
//             <span className='text-white font-semibold text-3xl'>Education Website</span> <br /><br />
//             <span className='  font-bold text-md text-gray-500'>I recently built an education platform demo. Please check the features and functionality.</span><br /><br /> <br />
//             <span className='bg-black/30 backdrop-blur-md m-2 rounded-md text-white font-bold text-sm px-4 py-2 transition-all duration-500 hover:text-black hover:bg-yellow-300'>HTML/CSS</span>
//             <span className='bg-black/30 backdrop-blur-md m-2 rounded-md text-white font-bold text-sm px-4 py-2 transition-all duration-500 hover:text-black hover:bg-yellow-300'>Javascript</span>
//             <span className='bg-black/30 backdrop-blur-md rounded-md m-2 text-white font-bold text-sm px-4 py-2 transition-all duration-500 hover:text-black hover:bg-yellow-300'>BootStrap</span>
//             <br /><br />
//         </div>
//         <div className='overflow-hidden transition-all duration-300 hover:border hover:border-[1px] hover:border-yellow-300 hover:shadow-md  rounded-md  bg-black/30 backdrop-blur-md '>
//             <img src={second} className='min-h-[250px] w-full -m-0 rounded-md transition-all duration-300 ease-in-out hover:scale-105' alt="" /><br />
//             <span className='text-white font-semibold text-3xl'>Education Website</span> <br /><br />
//             <span className='  font-bold text-md text-gray-500'>I recently built an education platform demo. Please check the features and functionality.</span><br /><br /> <br />
//             <span className='bg-black/30 backdrop-blur-md m-2 rounded-md text-white font-bold text-sm px-4 py-2 transition-all duration-500 hover:text-black hover:bg-yellow-300'>HTML/CSS</span>
//             <span className='bg-black/30 backdrop-blur-md m-2 rounded-md text-white font-bold text-sm px-4 py-2 transition-all duration-500 hover:text-black hover:bg-yellow-300'>Javascript</span>
//             <span className='bg-black/30 backdrop-blur-md rounded-md m-2 text-white font-bold text-sm px-4 py-2 transition-all duration-500 hover:text-black hover:bg-yellow-300'>BootStrap</span>
//             <br />
//         </div>
//         <div className='overflow-hidden transition-all duration-300 hover:border hover:border-[1px] hover:border-yellow-300 hover:shadow-md  rounded-md  bg-black/30 backdrop-blur-md '>
//             <img src={third} className='min-h-[250px]  w-full -m-0 rounded-md transition-all duration-300 ease-in-out hover:scale-105' alt="" /><br />
//             <span className='text-white font-semibold text-3xl'>Education Website</span> <br /><br />
//             <span className='  font-bold text-md text-gray-500'>I recently built an education platform demo. Please check the features and functionality.</span><br /><br /> <br />
//             <span className='bg-black/30 backdrop-blur-md m-2 rounded-md text-white font-bold text-sm px-4 py-2 transition-all duration-500 hover:text-black hover:bg-yellow-300'>HTML/CSS</span>
//             <span className='bg-black/30 backdrop-blur-md m-2 rounded-md text-white font-bold text-sm px-4 py-2 transition-all duration-500 hover:text-black hover:bg-yellow-300'>Javascript</span>
//             <span className='bg-black/30 backdrop-blur-md rounded-md m-2 text-white font-bold text-sm px-4 py-2 transition-all duration-500 hover:text-black hover:bg-yellow-300'>BootStrap</span>
//             <br />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default MyWork




import React from 'react'
import first from '../pics/web_1.jpg'
import second from '../pics/web_2.jpg'
import third from '../pics/web_3.jpg'

const MyWork = () => {
  // Data array to keep the code DRY and easier to maintain
  const projects = [
    {
      img: first,
      title: "Education Website",
      desc: "I recently built an education platform demo. Please check the features and functionality.",
      tags: ["HTML/CSS", "Javascript", "Bootstrap"]
    },
    {
      img: second,
      title: "Portfolio Project",
      desc: "I recently built an education platform demo. Please check the features and functionality.",
      tags: ["React JS", "Tailwind", "Firebase"]
    },
    {
      img: third,
      title: "E-Commerce App",
      desc: "I recently built an education platform demo. Please check the features and functionality.",
      tags: ["Node JS", "MongoDB", "Express"]
    }
  ];

  return (
    <div className='text-center py-10'>
      <span className='text-gray-400 font-semibold text-lg uppercase tracking-widest'>My Work</span><br />
      <span className='text-white font-extrabold text-3xl md:text-4xl'>Featured Projects</span><br /><br />

      {/* Responsive Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[90vw] mx-auto p-4'>
        {projects.map((project, index) => (
          <div 
            key={index} 
            className='overflow-hidden transition-all duration-300 border border-transparent hover:border-yellow-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.2)] rounded-xl h-auto bg-black/40 backdrop-blur-md flex flex-col'
          >
            {/* Image Container */}
            <div className='overflow-hidden h-[250px]'>
              <img 
                src={project.img} 
                className='h-full w-full object-cover transition-all duration-500 ease-in-out hover:scale-110' 
                alt={project.title} 
              />
            </div>

            {/* Content Container */}
            <div className='p-6 flex flex-col flex-grow'>
              <span className='text-white font-semibold text-2xl mb-3'>{project.title}</span>
              
              <p className='font-medium text-sm md:text-md text-gray-400 mb-6 leading-relaxed'>
                {project.desc}
              </p>

              {/* Tags Container: Uses flex-wrap to handle multiple tags on mobile */}
              <div className='flex flex-wrap justify-center gap-2 mt-auto'>
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className='bg-black/50 border border-gray-700 backdrop-blur-md rounded-md text-white font-bold text-xs px-3 py-2 transition-all duration-500 hover:text-black hover:bg-yellow-300 hover:border-yellow-300 cursor-default'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyWork