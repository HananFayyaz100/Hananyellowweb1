// import React, { useState } from 'react';


// const ContactSection = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     contactMethod: '',
//     phone: '',
//     message: ''
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form Submitted:', formData);
//   };

//   return (
//     <section className="min-h-screen  flex items-center justify-center p-6 font-sans">
//       {/* Background Decorative Dots (Simplified) */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-yellow-500 rounded-full opacity-30 shadow-[0_0_10px_yellow]"></div>
//         <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-yellow-500 rounded-full opacity-20"></div>
//       </div>

//       <div className="w-full max-w-2xl bg-white/10 border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl relative z-10">
//         {/* Header */}
//         <div className="text-center mb-10">
//           <h2 className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-4">
//             Get In Touch
//           </h2>
//           <p className="text-zinc-400 text-sm md:text-base">
//             Have a project in mind or just want to say hi? Feel free to reach out!
//           </p>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Name Field */}
//           <div>
//             <label className="block text-[#FFD700] text-sm font-semibold mb-2 ml-1">Name</label>
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full bg-[#1a1a1a] border border-zinc-700 text-zinc-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#FFD700] transition-colors placeholder:text-zinc-600"
//             />
//           </div>

//           {/* Email Field */}
//           <div>
//             <label className="block text-[#FFD700] text-sm font-semibold mb-2 ml-1">Email Address</label>
//             <input
//               type="email"
//               placeholder="name@example.com"
//               className="w-full bg-[#1a1a1a] border border-zinc-700 text-zinc-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#FFD700] transition-colors placeholder:text-zinc-600"
//             />
//           </div>

//           {/* Preferred Contact Method */}
//           <div>
//             <label className="block text-[#FFD700] text-sm font-semibold mb-2 ml-1">Preferred Contact Method</label>
//             <select className="w-full bg-[#1a1a1a] border border-zinc-700 text-zinc-500 rounded-xl px-4 py-3 focus:outline-none focus:border-[#FFD700] transition-colors appearance-none">
//               <option value="">-- Select an App --</option>
//               <option value="whatsapp">WhatsApp</option>
//               <option value="telegram">Telegram</option>
//               <option value="email">Email</option>
//             </select>
//           </div>

//           {/* Contact Number */}
//           <div>
//             <label className="block text-[#FFD700] text-sm font-semibold mb-2 ml-1">Contact Number</label>
//             <div className="flex gap-2">
//               <div className="bg-[#1a1a1a] border border-zinc-700 text-zinc-300 rounded-xl px-3 py-3 flex items-center text-sm min-w-[100px]">
//                 <span>PK +92 (Paki)</span>
//               </div>
//               <input
//                 type="tel"
//                 placeholder="Number"
//                 className="flex-1 bg-[#1a1a1a] border border-zinc-700 text-zinc-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#FFD700] transition-colors placeholder:text-zinc-600"
//               />
//             </div>
//           </div>

//           {/* Message Field */}
//           <div>
//             <label className="block text-[#FFD700] text-sm font-semibold mb-2 ml-1">Message</label>
//             <textarea
//               rows="4"
//               placeholder="Your Message"
//               className="w-full bg-[#1a1a1a] border border-zinc-700 text-zinc-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#FFD700] transition-colors placeholder:text-zinc-600 resize-none"
//             ></textarea>
//           </div>

//           <hr className="border-zinc-800 my-8" />

//           {/* Submit Button */}
//           <div className="flex justify-center">
//             <button
//               type="submit"
//               className="bg-[#FFD700] hover:bg-[#e6c200] text-black font-bold py-3 px-8 rounded-xl flex items-center gap-2 transition-transform active:scale-95 shadow-[0_0_20px_rgba(255,215,0,0.2)]"
//             >
              
//               Send Message
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;








import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactMethod: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '3574145e-4357-428c-983b-fcc3466ef4b3', // Your Web3Forms Access Key
          name: formData.name,
          email: formData.email,
          contactMethod: formData.contactMethod,
          phone: formData.phone,
          message: formData.message,
          subject: `New Contact Form Submission from ${formData.name}`,
        }),
      });

      const data = await res.json();
      alert(data.message || 'Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        contactMethod: '',
        phone: '',
        message: ''
      });
    } catch (err) {
      console.error(err);
      alert('Failed to send message');
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center p-6 font-sans relative">
      {/* Background Decorative Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-yellow-500 rounded-full opacity-30 shadow-[0_0_10px_yellow]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-yellow-500 rounded-full opacity-20"></div>
      </div>

      <div className="w-full max-w-2xl bg-white/10 border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-4">
            Get In Touch
          </h2>
          <p className="text-zinc-400 text-sm md:text-base">
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-[#FFD700] text-sm font-semibold mb-2 ml-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-[#1a1a1a] border border-zinc-700 text-zinc-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#FFD700] transition-colors placeholder:text-zinc-600"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-[#FFD700] text-sm font-semibold mb-2 ml-1">Email Address</label>
            <input
              type="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-[#1a1a1a] border border-zinc-700 text-zinc-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#FFD700] transition-colors placeholder:text-zinc-600"
              required
            />
          </div>

          {/* Preferred Contact Method */}
          <div>
            <label className="block text-[#FFD700] text-sm font-semibold mb-2 ml-1">Preferred Contact Method</label>
            <select
              value={formData.contactMethod}
              onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
              className="w-full bg-[#1a1a1a] border border-zinc-700 text-zinc-500 rounded-xl px-4 py-3 focus:outline-none focus:border-[#FFD700] transition-colors appearance-none"
            >
              <option value="">-- Select an App --</option>
              <option value="whatsapp">WhatsApp</option>
              <option value="telegram">Telegram</option>
              <option value="email">Email</option>
            </select>
          </div>

          {/* Contact Number */}
          <div>
            <label className="block text-[#FFD700] text-sm font-semibold mb-2 ml-1">Contact Number</label>
            <div className="flex gap-2">
              <div className="bg-[#1a1a1a] border border-zinc-700 text-zinc-300 rounded-xl px-3 py-3 flex items-center text-sm min-w-[100px]">
                <span>PK +92 (Paki)</span>
              </div>
              <input
                type="tel"
                placeholder="Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="flex-1 bg-[#1a1a1a] border border-zinc-700 text-zinc-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#FFD700] transition-colors placeholder:text-zinc-600"
              />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-[#FFD700] text-sm font-semibold mb-2 ml-1">Message</label>
            <textarea
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-[#1a1a1a] border border-zinc-700 text-zinc-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#FFD700] transition-colors placeholder:text-zinc-600 resize-none"
              required
            ></textarea>
          </div>

          <hr className="border-zinc-800 my-8" />

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#FFD700] hover:bg-[#e6c200] text-black font-bold py-3 px-8 rounded-xl flex items-center gap-2 transition-transform active:scale-95 shadow-[0_0_20px_rgba(255,215,0,0.2)]"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
