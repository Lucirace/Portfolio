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
    resume: "https://drive.google.com/file/d/1cDjb_DvywhszHBJ9T7PYT_MSiUzj_p6y/view?usp=sharing",
    twitter: "https://twitter.com/nipunAgarwal404",
    instagram: "https://www.instagram.com/nipunagarwal._/?next=%2F",
  },
  education: [
    {
      name: "Indiana University Bloomington",
      place: "USA",
      date: "Aug, 2019 - May, 2021",
      degree: "Masters in Computer Science",
      gpa: "3.7/4.0",
      description:
        "Currently pursuing my Master's in Computer Science, while specializing in the field of Artificial Intelligence and Machine Learning.",
      skills: [
        "Artificial Intelligence",
        "Software Engineering",
        "Algorithms",
        "Computer Vision",
        "Music Data Mining",
        ,
        "OS",
      ],
    },
    {
      name: "Manipal Institute of Technology",
      place: "India",
      date: "Aug, 2015 - July, 2019",
      degree: "Bachelors in Computer and Communication",
      gpa: "8.0/10.0",
      description:
        "Graduated from Manipal Institute of Technology, Manipal with a bachelors degree in Computer and Communications Engineering.",
      skills: [
        "AI",
        "Neural Netwroks",
        "Data Mining",
        "Computer Vision",
        "Pattern Recognition",
        "HCI",
        "Software Engineering",
      ],
    },
  ],
  experience: [
    {
      name: "Cyberinfrastructure for Network Science Center",
      place: "Bloomington, Indiana",
      date: "Jun, 2020 - Present",
      position: "Research Assistant; Full Stack Developer",
      description:
        "Worked as a Software Developer for the Human BioMolecular Atlas Program (funded by the NIH), building innovative visualization tools to envision large biomedical datasets.",
      skills: ["Angular", "Node.js", "Vega", "Shell", "Typescript"],
    },
    {
      name: "Skylark Drones",
      place: "Bangalore, India",
      date: "Jan, 2019 - Jun, 2021",
      position: "Full Stack Web Developer",
      description:
        "Worked as a full stack web developer, implementing various features and fixing bugs for Skylark Drones’ central management system called Operations Portal and Data Mining Server.",
      skills: ["MongoDB", "Flask", "VueJS", "NGINX"],
    },
    {
      name: "Hridayam Soft Solutions",
      place: "Mumbai, India",
      date: "May, 2018 - Jun, 2018",
      position: "Computer Vision Engineer",
      description:
        "Scripted an algorithm for extracting information (such as date, invoice number etc.) from scanned images of invoices, built a web interface for using the former mentioned machine.",
      skills: ["Python", "OpenCV", "PyTesseract", "AngularJS", "NodeJS"],
    },
    {
      name: "Elementail Labs",
      place: "Mumbai, India",
      date: "May, 2017 - July, 2017",
      position: "Full Stack Web Developer",
      description:
        "Implemented various contracts and deployed them on the upcoming blockchain technology - Ethereum, while also working as a MEAN stack web developer for Elemential Labs’ website.",
      skills: ["MongoDB", "AngularJS", "NodeJS", "ExpressJS"],
    },
    {
      name: "Viteos Capital Market Services s",
      place: "Mumbai, India",
      date: "May, 2016 - July, 2016",
      position: "Software Developer",
      description:
        "Evaluated technologies, and building proof of concept/prototype solutions for trade processing and mathematical model based evaluations, while working in the software development team.",
      skills: ["C#", "C++", "Visual Studio"],
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
      name: "Guituna",
      title: "Guituna - Mockup Design",
      pictures: [
        {
          img: require("./src/assets/designs/coursera1/1.png"),
          title: "MoodBoard",
        },
        {
          img: require("./src/assets/designs/coursera1/2.png"),
          title: "Mockups 1",
        },
        {
          img: require("./src/assets/designs/coursera1/3.png"),
          title: "Mockups 2",
        },
        {
          img: require("./src/assets/designs/coursera1/4.png"),
          title: "App Elements",
        },
      ],
      technologies: ["Canva", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - Jun, 2020",
      visit: "",
      description:
        "Guituna is a simple, lightweight and intuitive guitar tuner, that provides different modes of guitars based on your usage. You can either select a specific string to tune, or free tune your guitar based on the frequency shown on the meter. Guituna also provides a handful of different tunings to help explore various tuning paradigms. There is also an array of settings that can be configured to your liking based on the devices you're using. <br/><br/>The interface aims to highlight the use of a minimal design and providing just enough controls to make for a great tuner, while exposing various possibilities of guitarists to explore.",
    },
    {
      name: "Pantree",
      title: "Pantree - Mockup Design",
      pictures: [
        {
          img: require("./src/assets/designs/pantree/3.png"),
          title: "Moodboard",
        },
        {
          img: require("./src/assets/designs/pantree/4.png"),
          title: "Mockups 1",
        },
        {
          img: require("./src/assets/designs/pantree/5.png"),
          title: "Mockups 2",
        },
         {
          img: require("./src/assets/designs/pantree/6.png"),
          title: "Mockups 3",
        },
      ],
      technologies: ["Canva", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - July, 2020",
      visit: "",
      description:
        "Pantree is a recipiece finding and recommending application. It is often the case that you have run to your closest grocery store just to pick up one item that is missing in your kitchen. Pantree keeps a track of all your ingredients, and suggests recipes based on your meal preferences and past recipes. <br/><br/> The goal of the interface is to keep it similar to various recipe/food apps to reduce the learning required by the user, but also provide a smooth interface for users to seemlessly browse through recipes and ingredients.",
    },
    {
      name: "Bunder",
      title: "Bunder - MVP Proposal",
      pictures: [
        {
          img: require("./src/assets/designs/bunder/Logo.png"),
          title: "Moodboard",
        },
        {
          img: require("./src/assets/designs/bunder/TBIU Logo.png"),
          title: "Mockup 1",
        },
      ],
      technologies: ["Canva", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - July, 2020",
      visit: "",
      description:
        "Bunder is an intuitive web platform for micro-communities to share sensitive data with privacy within the community and allow engagement amongst them. Our aim is two-fold - Co-existing and Collaboration. The former is executed by providing a platform for communities that are geographically positioned in the same proximity (Housing societies, Dorms, Apartment Complexes) to have and share data (exact apartment addresses, phone number, apartment housing rules, individuals tested positive for COVID-19) in an exclusive platform. The latter is to give these people in the community the ability to carry out a task you are physically or remotely unable to do; with dignity and ease.",
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
