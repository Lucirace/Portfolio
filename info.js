let info = {
  name: "Nipun Agarwal",
  logo_name: "Nipun",
  flat_picture: require("./src/assets/potrait.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false,
    },
  },
  description:
    "I'm a Backend-Full Stack Developer and an undergraduate student pursuing a Bachelor's in Electronics & Communication Engineering from UIET Panjab University Chandigarh.<br><br>I have a strong foundation in frameworks like Node.js, React, PostgreSQL, and TypeScript.I have also worked on several personal projects, exhibiting my knowledge in implementing authentication, database management, and cloud deployment.I also did graphic designing for my college organizations. Currently, I am learning  Prometheus, Grafana, Kubernetes, and more for a trading application as a side project.With a strong passion for technology and a commitment to continuous learning, I am excited to contribute to innovative projects and collaborate with like-minded individuals in software development. ",
  links: {
    linkedin:
      "https://www.linkedin.com/in/nipunagarwal1144?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bd9AM69hvRNCE4Q%2FkQRhlxg%3D%3D",
    github: "https://github.com/Lucirace",
    googledev: "https://g.dev/nipun_agarwal",
    resume: "https://drive.google.com/file/d/1pIScV7O8NUDsI2l74Gy2adJnSGlEQWFF/view?usp=sharing",
    twitter: "https://twitter.com/nipunAgarwal404",
    instagram: "https://www.instagram.com/nipunagarwal._/?next=%2F",
  },
 education: [
    {
      name: "University Institute of Engineering Technology Panjab University Chandigarh",
      place: "India",
      date: "Dec, 2021 - June, 2025",
      degree: "Bachelors in Electronics and Communication Engineering",
      description:
        "Undergraduate from UIET Panjab University with a bachelors degree in Electronics and Communications Engineering.",
      skills: [
        "Micro Controllers",
        "Computer Networks",
        "Signal System",
        "Digital Design",
        "C & Assembly Programming",
      ],
    },
  ],
  experience: [
    {
      name: "Mindpeers Organization",
      place: "New Delhi, India",
      date: "August, 2024 - November, 2024",
      position: "Backend Developer Intern",
      description: "Found bugs on the website, Created a JSON from .csv using the Javascript function, Wrote RESTful APIs (Express.js, Node.js) using Mongoose schema with validation functions, Improved the response time of queries of Graph APIs by making them efficient.",
      skills: ["Node.js", "MongoDB", "React.js", "Graph APIs", "Javascript"],
    },
  ],
  skills: [
    {
      title: "Languages",
      info: [
        "C++",
        "TypeScript",
        "JavaScript",
        "C",
        "SQL (Postgres)",
        "SQL",
        "HTML",
        "CSS ",
      ],
      icon: "fa fa-code",
    },
    {
      title: "Frameworks",
      info: [
        "React",
        "Node.js",
        "Express.js",
        "Next.js",
        "Hono",
        "Cloudflare Workers",
      ],
      icon: "fa fa-cubes",
    },
    {
      title: "Web Technologies",
      info: [
        "REST",
        "Docker",
        "Google Cloud Platform",
        "Recoil",
        "Redis",
        "Web Sockets",
        "Open API Spec",
        "Turborepo",
        "Tailwind CSS",
        "shadcn/ui",
        "Gemini API",
        "Hive Blockchain",
      ],
      icon: "fas fa-laptop-code",
    },
    {
      title: "Databases",
      info: ["MongoDB", "PostgreSQL", "Prisma ORM", "Drizzle ORM"],
      icon: "fa fa-database",
    },
    {
      title: "Operating systems & Tools",
      info: [
        "Git",
        "GitHub Action",
        "CI/CD pipeline",
        "Postman",
        "Vim",
        "Nginx",
        "Wrangler CLI",
        "WSL",
        "Windows",
        "AWS EC2",
      ],
      icon: "fas fa-tools",
    },
    {
      title: "Design",
      info: ["Illustrator", "Canva", "Photoshop", "Final Cut Pro"],
      icon: "fa fa-pencil-square-o",
    },
  ],
  portfolio: [
    {
      name: "Bharat Wallet",
      pictures: [
        {
          img: require("./src/assets/portfolio/msr/wallet1.png"),
        },
        {
          img: require("./src/assets/portfolio/msr/wallet2.png"),
        },
        {
          img: require("./src/assets/portfolio/msr/wallet3.png"),
        },
        {
          img: require("./src/assets/portfolio/msr/wallet4.png"),
        },
        {
          img: require("./src/assets/portfolio/msr/wallet5.png"),
        },
      ],
      technologies: [
        "Docker",
        "AWS",
        "Turborepo",
        "Node.js",
        "Typescript",
        "Next.js",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      category: "Website",
      date: "June, 2024 - Present",
      github: "https://github.com/Lucirace/BharatWallet",
      visit: "https://bharatwallet.nipunagarwal.online",
      description:
        "I developed a digital wallet with peer-to-peer money transfer capabilities, using NextAuth for session-based authentication and Recoil for state management. I built an Express bank webhook server to simulate adding funds and implemented Docker and GitHub Actions for CI/CD, deploying to an Nginx reverse proxy. The deployment was directed to a DNS with an SSL certificate. I integrated Turborepo and used an AWS EC2 instance with Docker Hub. Prisma ORM was utilized for database handling and managing session transactions. ",
    },
    {
      name: "AI - Interview",
      pictures: [
        {
          img: require("./src/assets/portfolio/noq/interview1.png"),
        },
        {
          img: require("./src/assets/portfolio/noq/interview2.png"),
        },
        {
          img: require("./src/assets/portfolio/noq/interview3.png"),
        },
        {
          img: require("./src/assets/portfolio/noq/interview4.png"),
        },
        {
          img: require("./src/assets/portfolio/noq/interview5.png"),
        },
      ],
      technologies: [
        " Next.js",
        "Google Gemini API",
        "PostgreSQL",
        "Javascript",
        "shadcn",
      ],
      category: "Website",
      date: "April, 2024",
      github: "https://github.com/Lucirace/AI-Interview",
      visit: "https://ai-interview-tawny.vercel.app/",
      description:
        "I built an application using the Gemini API to create interview questions complete with ratings, answers, and feedback. Data management was handled by Drizzle ORM, which stores user answers. The application utilized speech-to-text recognition and camera input for enhanced interaction. Clerk Auth was implemented for secure and seamless user authentication.",
    },
    {
      name: "Hivestar",
      pictures: [
        {
          img: require("./src/assets/portfolio/post/hive1.png"),
        },
        {
          img: require("./src/assets/portfolio/post/hive2.png"),
        },
        {
          img: require("./src/assets/portfolio/post/hive3.png"),
        },
        {
          img: require("./src/assets/portfolio/post/hive4.png"),
        },
        {
          img: require("./src/assets/portfolio/post/hive5.png"),
        },
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "shadcn",
        "Hive Blockchain",
        "Hive Keychain",
      ],
      category: "Website",
      github: "https://github.com/wiptrax/hivestar",
      date: "15th April, 2024",
      visit: "https://hivestar.vercel.app/",
      description:
        "My teammate and I achieved a Top 6 position and won prize money at the Vihaan007 Offline Hackathon among 1300+ participants. I developed Hivestar, a social media application on the Hive Blockchain using Hive Keychain for authentication, enabling users to view, vote, and upload posts stored on the blockchain, with media stored in Cloudinary. The project was implemented with Next.js, TypeScript, and shadcn, leveraging Hive.io, dhive, and Axios to fetch data from Hive Blog for the feed, extracting images using Regex.",
    },
    {
      name: "EdgeInk",
      pictures: [
        {
          img: require("./src/assets/portfolio/suicide/blog1.png"),
        },
        {
          img: require("./src/assets/portfolio/suicide/blog2.png"),
        },
        {
          img: require("./src/assets/portfolio/suicide/blog3.png"),
        },
      ],
      technologies: [
        "Typescript",
        "Hono",
        "Cloudflare Workers",
        "React",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      category: "Website",
      date: "March, 2024",
      github: "https://github.com/Lucirace/EdgeInk-BlogWebsite",
      visit: "https://blog-website-steel-eight.vercel.app/signup",
      description:
        "I created a serverless blog application using Cloudflare, implementing JWT for authentication, Workers with Wrangler CLI, Zod for input validation, and Prisma Accelerate for connection pooling. The application features a rich-text editor for posting and viewing blogs with estimated read time. I also constructed an NPM package, used Hono for managing RESTful APIs, and stored data using Prisma ORM.",
    },
    {
      name: "PaytmLite",
      pictures: [
        {
          img: require("./src/assets/portfolio/smit/paytmLite1.png"),
        },
        {
          img: require("./src/assets/portfolio/smit/paytmLite2.png"),
        },
        {
          img: require("./src/assets/portfolio/smit/paytmLite3.png"),
        },
     
      ],
      technologies: [
        "React",
        "Javascript",
        "Node.js",
        "MongoDB Atlas",
        "Tailwind CSS ",
      ],
      category: "Website",
      date: "Feb, 2024",
      github: "https://github.com/Lucirace/PaytmLite",
      visit: "https://paytm-lite.vercel.app/signup",
      description:
        "I enhanced a money transfer application that assigns random dummy money to user accounts and enables peer-to-peer transfers using session transactions with Mongoose. The application was built with the Express framework, incorporating the CORS library, JWT for authentication, and Zod for input validation.",
    },
    {
      name: "Portfolio",
      pictures: [
        {
          img: require("./src/assets/portfolio/clumpr/portfolio1.png"),
        },
        {
          img: require("./src/assets/portfolio/clumpr/portfolio2.png"),
        },
     
      ],
      technologies: ["Vue.js", "Javascript"],
      category: "Website",
      github: "https://github.com/Lucirace/Portfolio",
      date: "June, 2024",
      visit: "https://nipunbio.vercel.app/",
      description:
        "My portfolio website using Vue.js and TypeScript, showcasing my projects, skills, and experience. The site features a clean, responsive design with dynamic content and smooth navigation, highlighting my expertise in web development.",
    },
    /*  {
      name: "Nutricare",
      pictures: [
        {
          img: require("./src/assets/portfolio/nc/one.png"),
        },
        {
          img: require("./src/assets/portfolio/nc/two.png"),
        },
        {
          img: require("./src/assets/portfolio/nc/three.png"),
        },
        {
          img: require("./src/assets/portfolio/nc/four.png"),
        },
        {
          img: require("./src/assets/portfolio/nc/five.png"),
        },
        {
          img: require("./src/assets/portfolio/nc/six.png"),
        },
      ],
      technologies: ["Node", "Angular", "Express", "MongDB", "Medical"],
      category: "Website",
      github: "https://github.com/hrishikeshpaul/clumpr",
      date: "May, 2017 - Aug, 2017",
      visit: "https://angel.co/projects/576300-nutricare",
      description:
        "Nutricare is a basic health website for users(patients) to input nutrient intake data and researchers to analyse the data with the help of graphs and tables. A researcher can conduct studies on N different subjects (patient) for a particular problem statement. Typically, a researcher will enter food item consumed by subjects over a period of time (Ex - 24hrs, or 1 week, or 1 month etc).",
    },
    */
  ],
  portfolio_design: [
    {
      name: "Posters",
      title: "Poster Designs",
      pictures: [
        {
          img: require("./src/assets/designs/coursera1/1.png"),
          title: "Yoga Day",
        },
        {
          img: require("./src/assets/designs/coursera1/2.png"),
          title: "Festival",
        },
        {
          img: require("./src/assets/designs/coursera1/3.png"),
          title: "Festival",
        },
        {
          img: require("./src/assets/designs/coursera1/4.png"),
          title: "Magazine Cover Page",
        },
      ],
      technologies: ["Canva", "Illustrator"],
      category: "Design",
      github: "",
      date: "May, 2022",
      visit: "",
      description: "Designed engaging posters for my college's Alumni Organization and Entrepreneurship Development Cell, focusing on networking, community building, and fostering innovation. These visually compelling posters helped drive event participation and strengthen organizational presence on campus.",
    },
    {
      name: "Brochure",
      title: "Brochure Design",
      pictures: [
        {
          img: require("./src/assets/designs/pantree/3.png"),
          title: "",
        },
        {
          img: require("./src/assets/designs/pantree/4.png"),
          title: "",
        },
        {
          img: require("./src/assets/designs/pantree/5.png"),
          title: "",
        },
         {
          img: require("./src/assets/designs/pantree/6.png"),
          title: "",
        },
      ],
      technologies: ["Canva", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "August, 2022",
      visit: "",
      description: "Created an informative and visually appealing brochure for a mentorship program, highlighting key benefits, program structure, and success stories. The brochure effectively communicated the value of mentorship, attracting participants and enhancing program engagement.",
    },
    {
      name: "Logo",
      title: "Logo Designs",
      pictures: [
        {
          img: require("./src/assets/designs/bunder/Logo.png"),
          title: "Event Logo",
        },
        {
          img: require("./src/assets/designs/bunder/TBIU Logo.png"),
          title: "College Organization Logo",
        },
      ],
      technologies: ["Canva", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "October, 2022",
      visit: "",
      description: "Designed distinctive logos for a major event and an incubator organization, capturing their unique identities and values. These logos enhanced brand recognition and created a lasting visual impact, contributing to the success and professional image of both initiatives.",
    },
  ],
  recommendations: [
    {
      title:
        " Achieved a Top 6 position and prize money at the Vihaan007 Offline Hackathon among 1300+ participants in April 2024 for the Hive Blockchain Track ",
      /*  author: "Ushanas Shastri",
      position: "CTO",
      company: "Viteos Capital Market Services",
      location: "Mumbai",
    */
    },
    {
      title:
        " Earned Google Cloud Skill Boost badge for completing the Google Cloud Program",
      /*  author: "Anil Dukkipatty",
      position: "CTO",
      company: "Elemential Labs",
      location: "Mumbai",
   */
    },
    /*
    {
      title:
        "He has gained great knowledge and experience of SDE, and has learned ot develop the application keeping in mind the client's perpective and also making it creative.",
      author: "Chintan Shah",
      position: "Director",
      company: "Hridayam Soft Solution",
      location: "Mumbai",
    },
    {
      title:
        "During the course of his employment we have found him to be a self-started who was motivated, duty bound and a highly commited team player.",
      author: "Mrinal Pai",
      position: "Co-Founder & Director",
      company: "Skylark Drones",
      location: "Bangalore",
    },
    */
  ],
};

export default info;
