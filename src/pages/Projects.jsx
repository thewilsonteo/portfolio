// Projects.jsx
import TextFormatter from '../components/TextFormatter.jsx';
import { ExternalLink, Github } from 'lucide-react';

const web_mobile_apps = [
  { 
    title: "Chat App",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    image: "mern-chat.png",
    type: "Web", 
    desc: {
      intro: "A realtime chat app using the MERN stack."
    },
    links: {
      github: "https://github.com/thewilsonteo/mern-chat/",
      live: "https://mern-chat-2xg6.onrender.com/",
    }
  },
  { 
    title: "Note Taking Website",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    image: "mern-notes.png",
    type: "Web", 
    desc: {
      intro: "A note taking website using the MERN stack."
    },
    links: {
      github: "https://github.com/thewilsonteo/mern-notes/",
      live: "https://mern-notes-luqd.onrender.com",
    }
  },
  { 
    title: "Snake Game",
    tags: ["React", "Vite", "Tailwind"],
    image: "snake-game.png",
    type: "Web", 
    desc: {
      intro: "A simplistic Snake game with keyboard controls."
    },
    links: {
      github: "https://github.com/thewilsonteo/snake-game/",
      live: "https://thewilsonteo.github.io/snake-game/",
    }
  },
  { 
    title: "Portfolio",
    tags: ["React", "Vite", "Tailwind"],
    image: "portfolio.png",
    type: "Web", 
    desc: {
      intro: "A website to showcase my projects and websites to clients."
    },
    links: {
      github: "https://github.com/thewilsonteo/portfolio/",
      live: "https://thewilsonteo.github.io/portfolio/",
    }
  },
  { 
    title: "KRTC",
    tags: ["Angular", "Node.js", "MySQL"],
    image: "krtc-mockup.png",
    type: "Web/Mobile", 
    desc: {
      intro: "A Singapore-based tuition and education centre operating numerous branches nationwide.",
      points: [
        "**CMS Website**: Used by HQ staff to oversee centre managers, who in turn manage their tutors and students.",
        "**Tutor App**: Allows tutors to manage their class timetables and take attendance.",
        "**Parent App**: Enables parents to view class schedules and attendance records of their children.",
      ],
    },
    links: {
      live: "https://play.google.com/store/apps/details?id=io.qzt.krtc&hl=en_SG"
    },
  },
  {   
    title: "CPA Services",
    tags: ["Angular", "Node.js", "MySQL"],
    image: "cpa-mockup.png",
    type: "Web/Mobile",
    desc: {
      intro: "A Singapore-based provider specializing in accounting, tax, and corporate services for business owners.",
      points: [
        "**Customer App**: Books by CPA, a mobile bookkeeping application designed for customers to track their expenses. The app includes a feature allowing users to scan receipts using the phone camera, creating income and expenses.",
        "**CMS website**: A web portal for staff and administrators to manage and monitor customer records.",
      ],
    },
    link: "",
  }
];

const websites = [
  {
    title: "Cloud Foods SG",
    tags: ["Wordpress", "Elementor"],
    desc: "A website for a restaurant dedicated to a group of chef-crafted dining concepts.",
    image: "cloudfoods.png",
    links: {live: "https://thewilsonteo.github.io/cloudfoods/"},
  },
  {
    title: "Nan Hua Chang Seafood",
    tags: ["Wordpress", "Elementor"],
    desc: "A website for a restaurant specialising traditional charcoal-grilled seafood.",
    image: "nan-hua-chang-seafood.png",
    links: {live: "https://nanhuachang.sg/"},
  },
  {
    title: "Plum Village Restaurant",
    tags: ["Wordpress", "Elementor"],
    desc: "A bilingual website celebrating traditional Hakka cuisine, presented in both English and Chinese.",
    image: "plum-village-restaurant.png",
    links: {live: "https://thewilsonteo.github.io/plum-village-restaurant/"},
  },
  {
    title: "QooMedia",
    tags: ["Wordpress", "Elementor"],
    desc: "A website for a business consultancy firm in website design and development, search engine optimisation (SEO), and online advertising.",
    image: "qoomedia.png",
    links: {live: "https://qoo.media/"},
  },
  {
    title: "Alvion Trade",
    tags: ["Wordpress", "Elementor", "PHP"],
    desc: "A website for a company specialising airline supply industry website displaying products and solutions.",
    image: "alvion-trade.png",
    links: {live: "https://alviontrade.com/"},
  },
  {
    title: "stats.sg",
    tags: ["Wordpress", "Elementor", "PHP"],
    desc: "A website dedicated to displaying information through visually appealing infographics.",
    image: "stats-sg.png",
    links: {live: "https://thewilsonteo.github.io/stats-sg/"},
  },
  {
    title: "The Teochew Kitchenette",
    tags: ["Wordpress", "Elementor"],
    desc: "A website for a Teochew fish soup restaurant.",
    image: "the-teochew-kitchenette.png",
    links: {live: "https://teochewkitchenette.com/"},
  },
  {
    title: "SG Drinking",
    tags: ["Wordpress", "Elementor", "PHP"],
    desc: "A database of bars and nightclubs in Singapore.",
    image: "sg-drinking.png",
    links: {live: "https://sgdrinking.com/"},
  },
  {
    title: "Shrimp Prawn Seafood",
    tags: ["Wordpress", "Elementor"],
    desc: "A website for a Thai culinary concept and bar specialising in seafood vermicelli.",
    image: "shrimp-prawn-seafood.png",
    links: {live: "https://thewilsonteo.github.io/shrimp-prawn-seafood/"},
  },
  {
    title: "Kampong Kia",
    tags: ["Wordpress", "Elementor"],
    desc: "A website for authentic Kampong style dishes influenced by Peranakan and Teochew culture.",
    image: "kampong-kia.png",
    links: {live: "https://thewilsonteo.github.io/kampong-kia/"},
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center md:text-left">Projects</h2>
        <div className="grid xl:grid-cols-2 lg:grid-cols-1 gap-10">
          {web_mobile_apps.map((proj) => (
            <div key={proj.title} className="bg-white overflow-hidden rounded-lg shadow-lg">
              <div className="h-48 bg-gray-200">
                <img 
                  src={`./${proj.image}`}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div> {/* Placeholder for Image */}
              <div className="p-6">
                <span className="text-blue-600 text-sm font-semibold">{proj.type}</span>
                <h3 className="text-2xl font-bold mt-2">{proj.title}</h3>
                <p className="text-gray-600 text-justify">
                  <TextFormatter content={proj.desc} />
                </p>
                {/* Action Links */}
                {proj.links && 
                <div className="flex gap-6 pt-6 pb-4">
                  {proj.links.github && (
                  <a href={proj.links.github} className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium">
                    <Github size={20} /> Code
                  </a> )}
                  {proj.links.live && (
                    <a href={proj.links.live} className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium">
                      <ExternalLink size={20} /> Live Demo
                    </a>
                  )}
                </div>
                }
                {/* Tech Badges Section */}
                <div className="flex flex-wrap gap-2 mt-5 mb-4">
                  {proj.tags?.map((badge) => (
                    <span 
                      key={badge} 
                      className="px-3 py-1 text-xs font-semibold bg-blue-50 text-blue-600 rounded-full border border-blue-100 uppercase tracking-wide"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 mt-12">
        <h2 className="text-3xl font-bold mb-12 text-center md:text-left">Websites</h2>
        <div className="grid xl:grid-cols-3 lg:grid-cols-1 gap-10">
          {websites.map((proj) => (
            <div key={proj.title} className="bg-white overflow-hidden rounded-lg shadow-lg">
                {/* Image Container in Projects.jsx */}
                <div className="relative h-48 w-full bg-gray-50 border-b border-gray-100 overflow-hidden">
                  <img 
                    src={`./${proj.image}`} 
                    alt={proj.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-blue-600 text-sm font-semibold">{proj.type}</span>
                  <h3 className="text-2xl font-bold mt-2">{proj.title}</h3>                  
                  <p className="text-gray-600 text-justify">
                    <TextFormatter content={proj.desc} />
                  </p>
                  {/* Action Links */}
                  <div className="flex gap-6 pt-6 pb-4">
                    {proj.links.github && (
                    <a href={proj.links.github} className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium">
                      <Github size={20} /> Code
                    </a> )}
                    {proj.links.live && (
                      <a href={proj.links.live} className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium">
                        <ExternalLink size={20} /> Live Demo
                      </a>
                    )}
                  </div>

                  {/* Tech Badges Section */}
                  <div className="flex flex-wrap gap-2 mt-3 mb-4">
                    {proj.tags?.map((badge) => (
                      <span 
                        key={badge} 
                        className="px-3 py-1 text-xs font-semibold bg-blue-50 text-blue-600 rounded-full border border-blue-100 uppercase tracking-wide"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}