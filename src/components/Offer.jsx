// import React from 'react'
// import { FaDesktop, FaServer, FaCheck, FaCode } from 'react-icons/fa'
// const Offer = () => {
//   return (
//     <div className=' text-center'>
//       <span className='text-gray-400 font-semibold text-lg'>WHAT I OFFER</span><br />
//       <span className='text-white font-extrabold text-3xl'>My Services</span><br /><br />
//       <div className=' grid grid-cols-3 gap-4 w-[90vw] mx-auto p-4 h-auto px-2'>
//         <div className='cursor-pointer transition-all duration-300 ease-in-out hover:translate-y-[-10px] hover:shadow-xl border rounded-md border-[2px] border-yellow-300 text-center items-center   p-2 bg-black/80'>
//             <span className=''><FaDesktop className='mx-auto text-xl w-16 h-16 text-yellow-300'/></span><br />
//             <span className='text-white font-semibold text-3xl'>Frontend Development</span> <br /><br />
//             <span className='text-white font-bold text-md'>Creating responsive and engaging user interfaces with modern technologies.</span><br /><br />
//             <span className='flex justify-center items-center text-white font-bold text-sm'><FaCheck className='text-yellow-300 mr-2 w-4 h-4'/>Responsive Design</span>
//             <span className='flex justify-center items-center text-white font-bold text-sm'><FaCheck className='text-yellow-300 mr-2 w-4 h-4'/>Modern UI/UX</span>
//             <span className='flex justify-center items-center text-white font-bold text-sm'><FaCheck className='text-yellow-300 mr-2 w-4 h-4'/>Cross Browser Compatipility</span>
//             <br />
//         </div>
//         <div className='cursor-pointer transition-all duration-300 ease-in-out hover:translate-y-[-10px] hover:shadow-xl border rounded-md border-[2px] border-yellow-300 text-center items-center bg-blur p-2 bg-black/80'>
//             <span className=''><FaServer className='mx-auto text-xl w-16 h-16 text-yellow-300'/></span><br />
//             <span className='text-white font-semibold text-3xl'>Backend Development</span> <br /><br />
//             <span className='text-white font-bold text-md'>Building robust and scalable server-side logic and APIs.</span><br /><br />
//             <span className='flex justify-center items-center text-white font-bold text-sm'><FaCheck className='text-yellow-300 mr-2 w-4 h-4'/>API Development</span>
//             <span className='flex justify-center items-center text-white font-bold text-sm'><FaCheck className='text-yellow-300 mr-2 w-4 h-4'/>Database Design</span>
//             <span className='flex justify-center items-center text-white font-bold text-sm'><FaCheck className='text-yellow-300 mr-2 w-4 h-4'/>Security Implementation</span>
//             <br />
//         </div>
//         <div className='cursor-pointer transition-all duration-300 ease-in-out hover:translate-y-[-10px] hover:shadow-xl border rounded-md border-[2px] border-yellow-300 text-center items-center bg-blur p-2 bg-black/80'>
//             <span className=''><FaCode className='mx-auto text-xl w-16 h-16 text-yellow-300'/></span><br />
//             <span className='text-white font-semibold text-3xl'>FullStack Development</span> <br /><br />
//             <span className='text-white font-bold text-md'>End-to-end web application development, from concept to deployment.</span><br /><br />
//             <span className='flex justify-center items-center text-white font-bold text-sm'><FaCheck className='text-yellow-300 mr-2 w-4 h-4'/>Responsive Design</span>
//             <span className='flex justify-center items-center text-white font-bold text-sm'><FaCheck className='text-yellow-300 mr-2 w-4 h-4'/>Modern UI/UX</span>
//             <span className='flex justify-center items-center text-white font-bold text-sm'><FaCheck className='text-yellow-300 mr-2 w-4 h-4'/>Cross Browser Compatipility</span>
//             <br />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Offer














import React from 'react'
import { FaDesktop, FaServer, FaCheck, FaCode } from 'react-icons/fa'

const Offer = () => {
  // Services data array for cleaner code
  const services = [
    {
      title: "Frontend Development",
      icon: <FaDesktop />,
      desc: "Creating responsive and engaging user interfaces with modern technologies.",
      points: ["Responsive Design", "Modern UI/UX", "Cross Browser Compatibility"]
    },
    {
      title: "Backend Development",
      icon: <FaServer />,
      desc: "Building robust and scalable server-side logic and APIs.",
      points: ["API Development", "Database Design", "Security Implementation"]
    },
    {
      title: "FullStack Development",
      icon: <FaCode />,
      desc: "End-to-end web application development, from concept to deployment.",
      points: ["Full System Architecture", "Seamless Integration", "Deployment & Hosting"]
    }
  ];

  return (
    <div className='text-center py-16 px-4 min-h-screen flex flex-col justify-center'>
      <span className='text-gray-400 font-semibold text-lg tracking-widest uppercase'>WHAT I OFFER</span><br />
      <h2 className='text-white font-extrabold text-4xl md:text-5xl mb-10'>My Services</h2>

      {/* Responsive Grid System */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[95vw] lg:w-[90vw] mx-auto'>
        
        {services.map((service, index) => (
          <div 
            key={index} 
            className='group cursor-pointer transition-all duration-500 ease-in-out hover:translate-y-[-12px] border-[2px] rounded-2xl border-yellow-300 p-6 md:p-8 bg-black/80 shadow-[0_0_15px_rgba(250,204,21,0.1)] hover:shadow-[0_0_30px_rgba(250,204,21,0.3)] flex flex-col items-center'
          >
            {/* Icon Container */}
            <div className='mb-6 transition-transform duration-300 group-hover:scale-110'>
              {React.cloneElement(service.icon, { className: 'mx-auto text-6xl text-yellow-300' })}
            </div>

            {/* Title */}
            <h3 className='text-white font-semibold text-2xl md:text-3xl mb-4'>
              {service.title}
            </h3>

            {/* Description */}
            <p className='text-gray-300 font-medium text-sm md:text-md mb-6 leading-relaxed'>
              {service.desc}
            </p>

            {/* Check Points */}
            <div className='space-y-3 w-full'>
              {service.points.map((point, i) => (
                <div key={i} className='flex justify-center items-center text-white font-bold text-sm'>
                  <FaCheck className='text-yellow-300 mr-2 w-4 h-4 shrink-0'/>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Offer