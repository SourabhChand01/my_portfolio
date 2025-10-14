
const logopath={html:"https://res.cloudinary.com/dxq7wozcf/image/upload/v1760369081/html5_mdehxj.svg",
  css:"https://res.cloudinary.com/dxq7wozcf/image/upload/v1760369080/css3_hum2jx.svg",
  js:"https://res.cloudinary.com/dxq7wozcf/image/upload/v1760369081/javascript_cbimln.svg",
  react:"https://res.cloudinary.com/dxq7wozcf/image/upload/v1760369085/react_xqprtg.svg",
  tailwindcss:"https://res.cloudinary.com/dxq7wozcf/image/upload/v1760369084/tailwindcss_mfxhgu.svg",

}
export const myprojects = [
  {
    id: 1,
    title: "Cafe Landing Page",
    image:"https://res.cloudinary.com/dxq7wozcf/image/upload/v1760348594/cafepagess_migj6d.png",
    description:
      "A modern, responsive, and visually appealing landing page for a cafe, built with the latest frontend technologies.",
    subDescription: [
      "Developed as a Single Page Application (SPA) using React for seamless navigation and high performance.",
    "Implemented clean, responsive designs using Tailwind CSS for an elegant user experience across devices.",
   "Optimized for speed and accessibility to ensure smooth user interaction."
  ],
    tags: [
      { id: 1, name: "React", path: logopath.react },
      { id: 2, name: "TailwindCSS", path: logopath.tailwindcss },
      { id: 3, name: "JavaScript", path: logopath.js },
      { id: 5, name: "HTML5", path: logopath.html },
      { id: 6, name: "CSS3", path: logopath.css },
    ],
    href:"https://68ecc82778d7cee6367773bc--cafe-landing-page-sourabh.netlify.app/"
  },
  {
    id: 2,
    title: "Job Portal",
    description:
      "Developing secure, efficient, and scalable backend solutions.",
    subDescription: [
      "Created RESTful APIs with Node.js and Express to handle real-time data.",
      "Worked with PHP and MySQL to deliver robust server-side applications.",
      "Implemented authentication, authorization, and secure data handling.",
    ],
    tags: [
      { id: 1, name: "React", path: "/assets/logos/nodejs.svg" },
      { id: 2, name: "Express", path: "/assets/logos/express.svg" },
      { id: 3, name: "MongoDB", path: "/assets/logos/php.svg" },
      { id: 4, name: "Node", path: "/assets/logos/mysql.svg" },
      {id:5,name:"Auth",path:""}
    ],
  },
  {
    id: 3,
    title: "Ecom Site (in progress)",
    description:
      "Leveraging essential tools and services to streamline development workflows.",
    subDescription: [
      "Version control and collaboration with Git and GitHub.",
      "Optimized builds and development speed using Vite.js.",
      "Integrated Auth0 for authentication and user management.",
      "Deployment experience with platforms like Vercel and Netlify.",
    ],
    tags: [
      { id: 1, name: "Git", path: "/assets/logos/git.svg" },
      { id: 2, name: "GitHub", path: "/assets/logos/github.svg" },
      { id: 3, name: "Vite.js", path: "/assets/logos/vitejs.svg" },
      { id: 4, name: "Auth0", path: "/assets/logos/auth0.svg" },
      { id: 5, name: "Vercel", path: "/assets/logos/vercel.svg" },
      { id: 6, name: "Netlify", path: "/assets/logos/netlify.svg" },
    ],
  },
];
