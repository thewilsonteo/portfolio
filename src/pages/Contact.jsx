// Contact.jsx

const contacts = [
  // {
  //   "email": "thewilsonteo@gmail.com"
  // },
  {
    "github": "thewilsonteo"
  },
]

import { FileDown, Mail, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="grid lg:grid-cols-1 gap-16 items-start">
          
          {/* Left Column: Contact Form */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-center md:text-left">Let's Connect</h2>
            <p className="text-slate-400 mb-6 justify-center">
              Have a project in mind or just want to say hi? Feel free to send a message. I usually respond within 48 hours.
            </p>
            <div className="bg-slate-800 p-8 md:p-12 rounded-3xl border border-slate-700 shadow-2xl">
              {/* <h3 className="text-2xl font-bold mb-6">Quick Links</h3> */}
              
              {/* Resume Download Card */}
              {/* <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700 mb-8"> */}
                {/* <p className="text-slate-400 text-sm mb-4">Looking for my technical details?</p> */}
                
              {/* </div> */}

              {/* Direct Contact Info */}
              <div className="space-y-6">
                <div className="flex gap-4  border-slate-700">
                  <a href="mailto:thewilsonteo@gmail.com" className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <Mail size={20} />
                    </a>
                  <a href="https://github.com/thewilsonteo" className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/wilson-teo-31a747170/" className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <a 
                href="./Resume_Wilson_Teo_Wee_Sheng_2026-6.pdf" 
                download 
                className="flex items-center justify-center group bg-white text-slate-900 px-6 py-4 rounded-xl font-bold transition-all hover:bg-blue-50"
              >
                <span className="flex items-center gap-3">
                  <FileDown size={20} className="text-blue-600" />
                  Download Resume
                </span>
                {/* <span className="text-xs bg-slate-100 px-2 py-1 rounded uppercase">PDF</span> */}
              </a>
              
            </div>
            {/* <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-blue-500 outline-none transition" 
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-blue-500 outline-none transition" 
                />
              </div>
              <textarea 
                placeholder="Your Message" 
                rows="5"
                className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 focus:border-blue-500 outline-none transition"
              ></textarea>
              <button className="flex items-center justify-center gap-2 w-full md:w-fit px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold transition-all transform hover:scale-105">
                <Send size={18} />
                Send Message
              </button>
            </form> */}
          </div>
        </div>
      </div>
    </section>
  );
}