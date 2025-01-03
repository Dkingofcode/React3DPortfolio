export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Henry Samuel',
      position: 'Software Developer',
      img: 'assets/review1.png',
      review:
        'Working with David was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Matthew Afolayan',
      position: 'Frontend Developer',
      img: 'assets/review2.png',
      review:
        'David’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'Peter Onasanya',
      position: 'Project Manager',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about David. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Esther',
      position: 'Designer',
      img: 'assets/review4.png',
      review:
        'David was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'ProjectOasis - A State-of-the-art Hotel Dashboard',
      desc: 'ProjectOasis is a revolutionary Product-as-a-Service platform that transforms the way hotels are percieved. ',  //With advanced AI-powered features like text-to-multiple-voices functionality, it allows creators to generate diverse voiceovers from a single text input.
      subdesc:
        'Built as a unique Software-as-a-Service app with  React, reactQuery and styledComponents',
      href: 'https://project-oasis.vercel.app/',
      texture: '/textures/project/Oasis.mp4',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        // {
        //   id: 3,
        //   name: 'TypeScript',
        //   path: '/assets/typescript.png',
        // },
        // {
        //   id: 4,
        //   name: 'Framer Motion',
        //   path: '/assets/framer.png',
        // },
      ],
    },
    {
      title: 'Trello Board',
      desc: 'Task Management App',
      subdesc: 
      "Experience seamless task organization and collaboration with Trello Board, a feature-rich Task Management App designed to enhance productivity. Whether you're managing personal to-dos or coordinating team projects, Trello Board provides intuitive drag-and-drop functionality, customizable boards, and real-time updates to ensure every task is tracked and completed efficiently. Unlock the power of collaboration with a visually engaging interface that adapts to your workflow and empowers teams to work smarter together",
      href: 'https://vue-trello-app-eta.vercel.app/',
      texture: '/textures/project/VueTrelloBoard.mp4',
      logo: '/assets/trelloLogo.jpg',
      logoStyle: {
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'Vuejs',
          path: '/assets/Vue.js.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
         {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
     ],
   },
    {
      title: 'Fast Pizza - Pizza Ordering App',
      desc: 'An innovative Ordering platform designed to streamline essential  processes. It simplifies user registration, order scheduling, and Order record management, providing a seamless experience for both food providers and customers.',
      subdesc:
        'Fast Pizza revolutionizes the way customers and food providers interact by delivering an intuitive and efficient pizza ordering experience. Designed with a customer-first approach, the platform simplifies every step of the process, from quick user registration to hassle-free order scheduling and detailed order record management. With its user-friendly interface and seamless navigation, customers can easily explore menus, customize their orders, and schedule deliveries. For food providers, Fast Pizza ensures streamlined operations with real-time updates, order tracking, and integrated analytics. Built on top-notch quality practices, Fast Pizza guarantees a reliable, efficient, and enjoyable experience for everyone involved.',
      href: 'https://orderpizza-app-mu.vercel.app/',
      texture: '/textures/project/Vite + React and 4 more pages - Personal - Microsoft​ Edge 2024-11-21 01-06-01.mp4',
      logo: '/assets/pizzaLogo.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
    //     {
    //       id: 3,
    //       name: 'TypeScript',
    //       path: '/assets/typescript.png',
    //     },
    //     {
    //       id: 4,
    //       name: 'Framer Motion',
    //       path: '/assets/framer.png',
    //     },
       ],
     },
   // {
    //   title: 'Horizon - Online Banking Platform',
    //   desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
    //   subdesc:
    //     'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
    //   href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    //   texture: '/textures/project/project4.mp4',
    //   logo: '/assets/project-logo4.png',
    //   logoStyle: {
    //     backgroundColor: '#0E1F38',
    //     border: '0.2px solid #0E2D58',
    //     boxShadow: '0px 0px 60px 0px #2F67B64D',
    //   },
    //   spotlight: '/assets/spotlight4.png',
    //   tags: [
    //     {
    //       id: 1,
    //       name: 'React.js',
    //       path: '/assets/react.svg',
    //     },
    //     {
    //       id: 2,
    //       name: 'TailwindCSS',
    //       path: 'assets/tailwindcss.png',
    //     },
    //     {
    //       id: 3,
    //       name: 'TypeScript',
    //       path: '/assets/typescript.png',
    //     },
    //     {
    //       id: 4,
    //       name: 'Framer Motion',
    //       path: '/assets/framer.png',
    //     },
    //   ],
    // },
    {
      title: 'Imaginify - AI Photo Manipulation App',
      desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology.',
      subdesc:
        'Built with Next.js 14, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
      href: 'https://ai-saas-website-6snp.vercel.app/',
      texture: '/textures/project/AIPhotoEditor.mp4',
      logo: '/assets/project-logo5.png',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'Nextjs',
          path: '/assets/Next.js.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [7, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Showlove Technologies',
      pos: 'Fontend Developer',
      duration: '2020 - 2021',
      title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
      icon: '/assets/ShowloveTech.webp',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Konnar',
      pos: 'FullStack Developer',
      duration: '2022 - 2023',
      title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
      icon: '/assets/konnar.png',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Code Collabo',
      pos: 'Software Developer',
      duration: '2023 - 2024',
      title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
      icon: '/assets/codecollabo.jfif',
      animation: 'salute',
    },
  ];