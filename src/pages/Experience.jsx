// Experience.jsx
import { Briefcase, GraduationCap } from 'lucide-react';
import TextFormatter from '../components/TextFormatter.jsx';

const skillCategories = [
  { title: "Programming Languages", 
    skills: [
      {name: "JavaScript",  icon: "javascript.svg"},
      {name: "TypeScript",  icon: "typescript-icon.svg"},
      {name: "Python",  icon: "python.svg"},
      {name: "PHP",     icon: "php-alt.svg"},
      {name: "HTML5",   icon: "html-5.svg"},
      {name: "CSS",     icon: "css-3.svg"},
    ],
  },
  { title: "Frontend", 
    skills: [
      {name: "Angular", icon: "angular-icon.svg"},
      {name: "React",   icon: "react.svg"},
      {name: "Bootstrap",   icon: "bootstrap.svg"},
      {name: "Ionic",   icon: "ionic-icon.svg"},
      {name: "Tailwind CSS",    icon: "tailwindcss-icon.svg"},
      {name: "Vite",    icon: "vite-icon.svg"},
    ]
  },
  { title: "Backend", 
    skills: [
      {name: "Node.js", icon: "nodejs-icon.svg"},
      {name: "Express.js", icon: "express-js-icon.svg"},
      {name: "Socket.io",   icon: "socket-io-icon.svg"},
      {name: "Stripe",   icon: "stripe-icon.svg"},
      {name: "NGINX",   icon: "nginx.svg"},
    ],
  },
  { title: "Databases", 
    skills: [
      {name: "MySQL",   icon: "mysql-icon.svg"},
      {name: "MongoDB", icon: "mongodb-icon.svg"},
      {name: "Redis", icon: "redis-icon.svg"},
    ],
  },
  { title: "Software Tools", 
    skills: [
      {name: "VS Code", icon: "visual-studio-code.svg"},
      {name: "Git",     icon: "git-icon.svg"},
      {name: "GitHub",  icon: "github-icon.svg"},
      {name: "Figma",   icon: "figma.svg"},
      {name: "Adobe Photoshop", icon: "adobe-photoshop.svg"},
      {name: "Adobe XD",        icon: "adobe-xd.svg"},
      {name: "Canva",   icon: "Canva-icon.png"},
      {name: "Sony Vegas",      icon: "sony-vegas-logo-icon.svg"},
      {name: "DaVinci Resolve", icon: "DaVinci_Resolve_17_logo.svg"},
    ],
  },
  { title: "CMS & Website Builders", 
    skills: [
      {name: "Wordpress", icon: "wordpress-icon.svg"},
      {name: "Elementor", icon: "elementor-icon.svg"},
      {name: "Divi", icon: "divi-icon.svg"},
    ],
  },
  { title: "Languages", 
    skills: [
      {name: "English"},
      {name: "中文"},
      {name: "日本語"}
    ]
   }
];

const timeline = [
  {
    role: "Full Stack Developer",
    company: "Ceesolution Pte. Ltd.",
    logo: "ceesolution-pte-ltd.jpeg",
    period: "2023 - 2024",
    desc: [
        "Delivered 2 integrated full-stack platforms across web and mobile ecosystems through deployment using MySQL, Express.js, Angular, Node.js and Ionic Framework.",
        "Collaborated with product managers and stakeholders across multiple concurrent client projects, translating business requirements into technical solutions.",
        "Designed and implemented frontend and backend architectures that supported hundreds of daily users.",
        "Reduced bug resolution time by 50% through systematic debugging and performance testing.",
        "Produced technical documentation, wireframes and prototypes for projects, improving development efficiency and stakeholder alignment.",
        "Managed deployment, maintenance and optimisation of production systems while ensuring compliance with data privacy requirements.",
    ],
  },
  {
    role: "Web Designer",
    company: "SkipQoo",
    logo: "skipqoo.jpg",
    period: "2021 - 2023",
    desc: [
      "Designed, developed and maintained 14 websites across industries including F&B and marketing, using WordPress, Elementor, HTML, CSS, JavaScript, PHP and Softaculous.",
      "Created responsive user interfaces optimised for desktop, tablet, and mobile experiences.",
      "Integrated systems such as ERP and API requests for clients, streamlining business workflows by 60%.",
      "Achieved website performance and responsive by 70%, improving user experience across client projects.",
      "Collaborated with stakeholders to deliver websites within project timelines and business requirements.",
      "Produced digital assets and website enhancements that supported clients' marketing campaigns and online presence.",
    ],
  }
];

const education = [
  {
    degree: "Bachelor of Science - BS, Digital Media",
    school: "Singapore University of Social Sciences",
    logo: "./suss.svg",
    period: "2022 - 2026",
    // desc: [
    //   "Graduated with **Honors (GPA 3.8/4.0)**.",
    //   "Specialized in **Software Engineering** and Data Structures.",
    //   "Awarded 'Best Senior Project' for a React-based healthcare app."
    // ]
  },
  {
    degree: "Japanese Language Proficiency Test (N2)",
    school: "The Japan Foundation",
    logo: "./the-japan-foundation.svg",
    period: "2022",
  },
  {
    degree: "Associate UI/UX Designer",
    school: "NTUC LearningHub",
    logo: "./ntuc-learninghub.png",
    period: "2020 - 2021",
  },
  {
    degree: "Multimedia and Information Technology",
    school: "Nanyang Polytechnic",
    logo: "./nyp.png",
    period: "2012 - 2015",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Tech Stack</h2>
        
        {/* Category Containers */}
        <div className="space-y-16 mb-24">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-xl font-semibold mb-8 text-gray-400 uppercase tracking-widest text-center">
                {category.title}
              </h3>
              
              {/* Individual Skill Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="flex flex-col items-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100 group"
                  >
                    {/* This is the React version of *ngIf */}
                    {skill.icon && (
                      <div className="mb-4 p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                        {/* Icon sits directly above title */}
                        <img src={`./${skill.icon}`} className="w-8 h-8" />
                      </div>
                    )}
                    <span className="font-medium text-gray-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Professional Timeline (Linear Version) */}
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-12 flex items-center gap-3">
            <Briefcase className="text-blue-600" /> Career Path
          </h3>
          
          {/* The Vertical Line */}
          <div className="relative border-l-2 border-gray-100 ml-4 md:ml-6 space-y-12">
            {timeline.map((job, index) => (
              <div key={index} className="relative pl-10 md:pl-16">
              {/* The Timeline Dot/Logo */}
              <div className="absolute -left-4.5 md:-left-6 top-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white border border-gray-100 shadow-sm z-10 overflow-hidden">
                {job.logo ? (
                  <img 
                    src={`./${job.logo}`} 
                    alt={job.company} 
                    className="w-full h-full object-contain p-1" 
                  />
                ) : (
                  <Briefcase size={16} className="text-blue-600" />
                )}
              </div>

                {/* The Content Card */}
                <div className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {job.role}
                      </h4>
                      <p className="text-sm font-medium text-slate-500">{job.company}</p>
                    </div>
                    <span className="inline-block px-3 py-1 text-xs font-bold text-blue-600 bg-blue-50 rounded-full w-fit">
                      {job.period}
                    </span>
                  </div>

                  {/* Using our Formatter Component */}
                  <div className="mt-4 text-justify">
                    <TextFormatter content={job.desc} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="max-w-3xl mx-auto px-4 mt-24">
          <h3 className="text-2xl font-bold mb-12 flex items-center gap-3">
            <GraduationCap className="text-blue-600" /> Education
          </h3>
          
          <div className="relative border-l-2 border-gray-100 ml-4 md:ml-6 space-y-12">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-10 md:pl-16">
                
                {/* School Logo Container */}
                <div className="absolute -left-4.5 md:-left-6 top-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white border border-gray-100 shadow-sm z-10 overflow-hidden">
                  {edu.logo ? (
                    <img 
                      src={edu.logo} 
                      alt={edu.school} 
                      className="w-full h-full object-contain p-1" 
                    />
                  ) : (
                    <GraduationCap size={16} className="text-blue-600" />
                  )}
                </div>

                {/* Content Card */}
                <div className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-sm font-medium text-slate-500">{edu.school}</p>
                    </div>
                    <span className="inline-block px-3 py-1 text-xs font-bold text-blue-600 bg-blue-50 rounded-full w-fit">
                      {edu.period}
                    </span>
                  </div>

                  <div className="mt-4">
                    <TextFormatter content={edu.desc} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}