import React from 'react';
import coin from "./images/coin.jpg";
import educate from "./images/educate.jpg";
import gym from "./images/gym.jpg";
const projects = [
  {
    title: "ChainSecure Ledger",
    description: "A decentralized application for secure asset tracking and verification using blockchain technology.",
    image: coin, // Replace with your image
    tags: ["React", "PostgreSQL", "Node.js"],
    color: "border-yellow-500/50"
  },
  {
    title: "FitLife Gym Management",
    description: "A comprehensive platform for gym owners to manage memberships, schedules, and trainers.",
    image: educate,
    tags: ["Python", "JavaScript", "React"],
    color: "border-yellow-500/50"
  },
  {
    title: "EduVoyage Platform",
    description: "An interactive platform for discovering educational courses and booking travel packages.",
    image: gym,
    tags: ["Node.js", "React", "Vue.js"],
    color: "border-yellow-500/50"
  }
];

const MyCreations = () => {
  return (
    <div className="bg-[#0a0a0a] text-white py-16 px-6 font-sans">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-2">My Creations</h3>
        <h2 className="text-3xl md:text-4xl font-bold">Design & Templates</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`group relative bg-[#111111] rounded-2xl border-2 ${project.color} overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(234,179,8,0.2)]`}
          >
            {/* Image Container with Hover Zoom */}
            <div className="overflow-hidden h-56">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content Section */}
            <div className="p-8">
              <h4 className="text-2xl font-bold mb-3">{project.title}</h4>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-gray-300 px-4 py-1 rounded-full text-sm border border-gray-800">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Button with Pulse/Glow Effect */}
              <button className="bg-yellow-400 text-black font-bold py-3 px-10 rounded-full transition-all duration-300 hover:bg-yellow-300 hover:shadow-[0_0_20px_#eab308] active:scale-95">
                Demo
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCreations;