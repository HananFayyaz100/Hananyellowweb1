// import { useEffect, useState } from "react";
// import axios from "axios";

// const MyCreation = () => {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/projects2")
//       .then(res => setProjects(res.data));
//   }, []);

//   return (
//     <>
    
//     <div className=' text-center'>
//           <span className='text-gray-400 font-semibold text-lg'>My Creation</span><br />
//           <span className='text-white font-extrabold text-3xl'>Design & Template</span><br /><br />
         

    
//     <div>
//      <div className=' grid grid-cols-3 gap-4 w-[90vw] mx-auto p-4'>
//       {projects.map(p => (
//         <div key={p._id}>
//             <div className='overflow-hidden transition-all duration-300 hover:border hover:border-[1px] hover:border-yellow-300 hover:shadow-md  rounded-md  bg-black/30 backdrop-blur-md '>
//                 <img src={p.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhU8iFY27tzKLGCMWhOiSNhT71rSHz955IAA&s"}  className='min-h-[250px]  w-[100%] -m-0 rounded-md transition-all duration-300 ease-in-out hover:scale-105' alt="" /><br />
//                 <span className='text-white font-semibold text-3xl'>{p.title}</span> <br /><br />
//                 <span className='  font-bold text-md text-gray-500'>{p.description}</span><br /><br /> <br />
//                 <span className='bg-black/30 backdrop-blur-md m-2 rounded-md text-white font-bold text-sm px-4 py-2 transition-all duration-500 hover:text-black hover:bg-yellow-300'>HTML/CSS</span>
//                 <span className='bg-black/30 backdrop-blur-md m-2 rounded-md text-white font-bold text-sm px-4 py-2 transition-all duration-500 hover:text-black hover:bg-yellow-300'>Javascript</span>
//                 <span className='bg-black/30 backdrop-blur-md rounded-md m-2 text-white font-bold text-sm px-4 py-2 transition-all duration-500 hover:text-black hover:bg-yellow-300'>BootStrap</span>
//                 <br /><br />
//             </div>
//         </div>
//       ))}
//       </div>
//     </div>
//     </div>
//     </>
//   );
// };

// export default MyCreation;







import { useEffect, useState } from "react";
import axios from "axios";

const MyCreation = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/projects2")
      .then(res => setProjects(res.data))
      .catch(err => console.log("Error fetching designs:", err));
  }, []);

  return (
    <div className='text-center py-10 px-4'>
      <span className='text-gray-400 font-semibold text-lg uppercase tracking-widest'>My Creation</span><br />
      <span className='text-white font-extrabold text-3xl md:text-4xl'>Design & Template</span><br /><br />

      {/* grid-cols-1: Mobile (1 card per row)
          md:grid-cols-2: Tablet (2 cards per row)
          lg:grid-cols-3: Desktop (3 cards per row)
      */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[90vw] mx-auto p-4'>
        {projects.map(p => (
          <div key={p._id} className="flex flex-col h-full">
            <div className='flex flex-col h-full overflow-hidden transition-all duration-300 border border-transparent hover:border-yellow-300 hover:shadow-[0_0_15px_rgba(250,204,21,0.2)] rounded-xl bg-black/30 backdrop-blur-md'>
              
              {/* Image Container with consistent height */}
              <div className="w-full h-[250px] overflow-hidden">
                <img 
                  src={p.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhU8iFY27tzKLGCMWhOiSNhT71rSHz955IAA&s"} 
                  className='w-full h-full object-cover transition-all duration-500 ease-in-out hover:scale-110' 
                  alt={p.title} 
                />
              </div>

              {/* Text & Content Area */}
              <div className="p-6 flex flex-col flex-grow">
                <span className='text-white font-semibold text-2xl md:text-3xl block mb-3'>
                  {p.title}
                </span>
                
                <p className='font-medium text-sm md:text-md text-gray-500 mb-6 flex-grow leading-relaxed'>
                  {p.description}
                </p>

                {/* Tags - Flex wrap ensures they stay inside on small screens */}
                <div className='flex flex-wrap justify-center gap-2 mt-auto pt-4'>
                  {["HTML/CSS", "Javascript", "Bootstrap"].map((tag) => (
                    <span 
                      key={tag}
                      className='bg-black/40 border border-gray-700 backdrop-blur-md rounded-md text-white font-bold text-[10px] md:text-xs px-3 py-2 transition-all duration-500 hover:text-black hover:bg-yellow-300 hover:border-yellow-300'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCreation;