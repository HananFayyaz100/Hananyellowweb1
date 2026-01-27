// import React from 'react'
// import { DiGit, DiBootstrap, DiExtjs, DiHtml5, DiCss3, DiJsBadge, DiReact, DiPython, DiNodejs, DiMongodb, DiDjango } from 'react-icons/di'
// const MyArsenal = () => {
//   return (
//     <div className='text-center p-4'>
//       <span className=' text-center font-arial text-gray-400 text-lg '>MY ARSENAL</span><br />
//       <span className='text-center text-yellow-500 text-7xl font-semibold'>Technical Skills</span><br /><br />
//         <div className='w-[90vw] grid grid-cols-5 gap-4  h-auto mx-auto p-4  '>
            
//             <div className='animate-pulse-2s duration-300 transition-all duration-300 ease-in-out hover:translate-y-[-10px] cursor-pointer hover:shadow-xl rounded-md min-h-[200px] flex flex-col p-2 space-y-2 items-center border border-yellow-300'>
//                 <span><DiHtml5 className='text-yellow-300 w-14 h-14'/></span><br />
//                 <span className='font-bold  text-xl text-white'>HTML5</span><br />
//                 <div className='w-[80%] h-[10px] bg-gray-500 rounded-[50px]'>
//                     <div className='bg-yellow-300 w-[98%] h-[100%] rounded-[50px]'></div>
//                 </div>
//             </div>
//             <div className='cursor-pointer transition-all duration-300 ease-in-out hover:translate-y-[-10px] hover:shadow-xl min-h-[200px] rounded-md flex flex-col p-2 space-y-2 items-center border border-yellow-300'>
                  
//                 <span><DiCss3 className='text-yellow-300 w-14 h-14'/></span><br />
//                 <span className='font-bold  text-xl text-white'>Css3</span><br />
//                 <div className='w-[80%] h-[10px] bg-gray-500 rounded-[50px]'>
//                     <div className='bg-yellow-300 w-[88%] h-[100%] rounded-[50px]'></div>
//                 </div>
//             </div>
//             <div className='cursor-pointer transition-all duration-300 ease-in-out hover:translate-y-[-10px] hover:shadow-xl min-h-[200px] flex flex-col rounded-md p-2 space-y-2 items-center border border-yellow-300'>
//                 <span><DiJsBadge className='text-yellow-300 w-14 h-14 rounded-md'/></span><br />
//                 <span className='font-bold  text-xl text-white'>JS</span><br />
//                 <div className='w-[80%] h-[10px] bg-gray-500 rounded-[50px]'>
//                     <div className='bg-yellow-300 w-[90%] h-[100%] rounded-[50px]'></div>
//                 </div>
//             </div>
//             <div className='cursor-pointer transition-all duration-300 ease-in-out hover:translate-y-[-10px] hover:shadow-xl min-h-[200px] flex flex-col p-2 space-y-2 rounded-md items-center border border-yellow-300'>
//                 <span><DiReact className='text-yellow-300 w-14 h-14'/></span><br />
//                 <span className='font-bold  text-xl text-white'>ReactJs</span><br />
//                 <div className='w-[80%] h-[10px] bg-gray-500 rounded-[50px]'>
//                     <div className='bg-yellow-300 w-[89%] h-[100%] rounded-[50px]'></div>
//                 </div>
//             </div>
//             <div className='cursor-pointer transition-all duration-300 ease-in-out hover:translate-y-[-10px] hover:shadow-xl min-h-[200px] flex flex-col p-2 space-y-2 items-center rounded-md border border-yellow-300'>
//                 <span><DiNodejs className='text-yellow-300 w-20 h-20'/></span>
//                 <span className='font-bold  text-xl text-white'>NodeJS</span><br />
//                 <div className='w-[80%] h-[10px] bg-gray-500 rounded-[50px]'>
//                     <div className='bg-yellow-300 w-[80%] h-[100%] rounded-[50px]'></div>
//                 </div>
//             </div>
            
//             <div className='cursor-pointer transition-all duration-300 ease-in-out hover:translate-y-[-10px] hover:shadow-xl min-h-[200px] flex flex-col p-2 space-y-2 items-center rounded-md border border-yellow-300'>
//                 <span><DiPython className='text-yellow-300 w-14 h-14'/></span><br />
//                 <span className='font-bold  text-xl text-white'>Python</span><br />
//                 <div className='w-[80%] h-[10px] bg-gray-500 rounded-[50px]'>
//                     <div className='bg-yellow-300 w-[75%] h-[100%] rounded-[50px]'></div>
//                 </div>
//             </div>
//             <div className='cursor-pointer transition-all duration-300 ease-in-out hover:translate-y-[-10px] hover:shadow-xl min-h-[200px] flex flex-col p-2 space-y-2 items-center rounded-md border border-yellow-300'>
//                 <span><DiDjango className='text-yellow-300 w-20 h-20'/></span>
//                 <span className='font-bold  text-xl text-white'>DJango</span><br />
//                 <div className='w-[80%] h-[10px] bg-gray-500 rounded-[50px]'>
//                     <div className='bg-yellow-300 w-[50%] h-[100%] rounded-[50px]'></div>
//                 </div>
//             </div>
//             <div className='cursor-pointer transition-all duration-300 ease-in-out hover:translate-y-[-10px] hover:shadow-xl min-h-[200px] flex flex-col p-2 space-y-2 items-center rounded-md border border-yellow-300'>
//                 <span><DiGit className='text-yellow-300 w-20 h-20'/></span>
//                 <span className='font-bold  text-xl text-white'>Git/Github</span><br />
//                 <div className='w-[80%] h-[10px] bg-gray-500 rounded-[50px]'>
//                     <div className='bg-yellow-300 w-[80%] h-[100%] rounded-[50px]'></div>
//                 </div>
//             </div>
//             <div className='cursor-pointer transition-all duration-300 ease-in-out hover:translate-y-[-10px] hover:shadow-xl min-h-[200px] flex flex-col p-2 space-y-2 items-center rounded-md border border-yellow-300'>
//                 <span><DiBootstrap className='text-yellow-300 w-20 h-20'/></span>
//                 <span className='font-bold  text-xl text-white'>BootStrap</span><br />
//                 <div className='w-[80%] h-[10px] bg-gray-500 rounded-[50px]'>
//                     <div className='bg-yellow-300 w-[82%] h-[100%] rounded-[50px]'></div>
//                 </div>
//             </div>
//             <div className='cursor-pointer transition-all duration-300 ease-in-out hover:translate-y-[-10px] hover:shadow-xl min-h-[200px]  flex flex-col p-2  items-center rounded-md border border-yellow-300'>
//                 <span><DiExtjs className='text-yellow-300 w-20 h-20'/></span><br />
//                 <span className='font-bold  text-xl text-white'>Express JS</span><br />
//                 <div className='w-[80%] h-[10px] bg-gray-500 rounded-[50px]'>
//                     <div className='bg-yellow-300 w-[87%] h-[100%] rounded-[50px]'></div>
//                 </div>
//             </div>
        
        
//         </div>
//     </div>
//   )
// }

// export default MyArsenal



import React from 'react'
import { DiGit, DiBootstrap, DiExtjs, DiHtml5, DiCss3, DiJsBadge, DiReact, DiPython, DiNodejs, DiDjango } from 'react-icons/di'

const MyArsenal = () => {
  // Skills data array taake code clean rahe aur maintain karna asaan ho
  const skills = [
    { name: "HTML5", icon: <DiHtml5 />, level: "98%" },
    { name: "CSS3", icon: <DiCss3 />, level: "88%" },
    { name: "JS", icon: <DiJsBadge />, level: "90%" },
    { name: "ReactJs", icon: <DiReact />, level: "89%" },
    { name: "NodeJS", icon: <DiNodejs />, level: "80%" },
    { name: "Python", icon: <DiPython />, level: "75%" },
    { name: "Django", icon: <DiDjango />, level: "50%" },
    { name: "Git/Github", icon: <DiGit />, level: "80%" },
    { name: "Bootstrap", icon: <DiBootstrap />, level: "82%" },
    { name: "Express JS", icon: <DiExtjs />, level: "87%" },
  ];

  return (
    <div className='text-center p-4 min-h-screen flex flex-col justify-center'>
      <span className='font-arial text-gray-400 text-lg tracking-widest'>MY ARSENAL</span><br />
      <h2 className='text-yellow-500 text-4xl md:text-6xl lg:text-7xl font-semibold'>Technical Skills</h2>
      
      {/* Grid Settings:
          grid-cols-1: Mobile par 1 column
          sm:grid-cols-2: Tablet par 2 columns
          md:grid-cols-3: Chote laptops par 3 columns
          lg:grid-cols-5: Bari screen par 5 columns
      */}
      <div className='w-[90vw] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 h-auto mx-auto p-4 mt-10'>
        
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className='group cursor-pointer transition-all duration-300 ease-in-out hover:translate-y-[-10px] hover:shadow-[0_0_20px_rgba(250,204,21,0.3)] rounded-xl min-h-[180px] flex flex-col p-6 items-center border border-yellow-300 bg-black/20'
          >
            <div className='text-yellow-300 text-6xl mb-4 transition-transform duration-300 group-hover:scale-110'>
              {skill.icon}
            </div>
            
            <span className='font-bold text-xl text-white mb-4'>{skill.name}</span>
            
            {/* Progress Bar Container */}
            <div className='w-full h-[8px] bg-gray-700 rounded-full overflow-hidden'>
              <div 
                className='bg-yellow-300 h-full rounded-full transition-all duration-1000' 
                style={{ width: skill.level }}
              ></div>
            </div>
            <span className='text-yellow-300 text-xs mt-2 font-mono'>{skill.level}</span>
          </div>
        ))}
        
      </div>
    </div>
  )
}

export default MyArsenal