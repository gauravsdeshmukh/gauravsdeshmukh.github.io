// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-conference-talks",
          title: "Conference Talks",
          description: "List of talks given at national and international meetings.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-science-communication",
          title: "Science Communication",
          description: "Read my articles published in Towards Data Science",
          section: "Navigation",
          handler: () => {
            window.location.href = "/scicomm/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "news-graduated-from-the-institute-of-chemical-technology-ict-with-a-bachelor-s-in-chemical-engineering",
          title: 'Graduated from the Institute of Chemical Technology (ICT) with a bachelor’s in chemical...',
          description: "",
          section: "News",},{id: "news-joined-purdue-university-to-pursue-a-phd-in-chemical-engineering",
          title: 'Joined Purdue University to pursue a PhD in chemical engineering.',
          description: "",
          section: "News",},{id: "news-started-work-at-enthought-inc-in-austin-tx-as-a-scientific-software-developer-intern",
          title: 'Started work at Enthought Inc. in Austin, TX as a Scientific Software Developer...',
          description: "",
          section: "News",},{id: "news-completed-internship-at-enthought-inc",
          title: 'Completed internship at Enthought Inc.',
          description: "",
          section: "News",},{id: "news-submitted-phd-thesis-titled-first-principles-and-machine-learning-based-analyses-of-stability-and-reactivity-trends-for-high-entropy-alloy-catalysts",
          title: 'Submitted PhD Thesis titled “First Principles and Machine Learning-Based Analyses of Stability and...',
          description: "",
          section: "News",},{id: "news-joined-the-broadbelt-group-at-northwestern-as-a-postdoctoral-scholar",
          title: 'Joined the Broadbelt Group at Northwestern as a postdoctoral scholar.',
          description: "",
          section: "News",},{id: "projects-building-a-graph-convolutional-network-for-molecular-property-prediction",
          title: 'Building A Graph Convolutional Network for Molecular Property Prediction',
          description: "Tutorial to make molecular graphs and develop a simple PyTorch-based GCN",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-the-kinetic-theory-of-gases-modeling-the-dynamics-of-ideal-gas-molecules",
          title: 'The Kinetic Theory of Gases: Modeling the Dynamics of Ideal Gas Molecules',
          description: "Develop a framework to simulate and visualize molecular collisions, and extract thermodynamic insights using Python",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-computational-fluid-dynamics-using-python-modeling-laminar-flow",
          title: 'Computational Fluid Dynamics using Python: Modeling Laminar Flow',
          description: "Solve the 2D Navier-Stokes equations using the finite difference method for single-phase laminar flow and verify results using the benchmark lid cavity test",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-a-simulation-framework-to-analyze-airplane-boarding-methods",
          title: 'A simulation framework to analyze airplane boarding methods',
          description: "Developing a Python program to calculate boarding times for various configurations and to visualize the boarding procedure",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-modelling-the-three-body-problem-in-classical-mechanics-using-python",
          title: 'Modelling the Three Body Problem in Classical Mechanics using Python',
          description: "An overview of the fundamentals of gravitation, the odeint solver in Scipy and 3D plotting in Matplotlib",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-a-simple-monte-carlo-simulation-to-solve-a-putnam-competition-math-problem",
          title: 'A simple Monte-Carlo simulation to solve a Putnam Competition math problem',
          description: "An overview of the Monte-Carlo method in Python",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%61%75%72%61%76%73%64%65%73%68%6D%75%6B%68@%6F%75%74%6C%6F%6F%6B.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/gauravsdeshmukh", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/gauravsdeshmukh", "_blank");
        },
      },{
        id: 'social-medium',
        title: 'Medium',
        section: 'Socials',
        handler: () => {
          window.open("https://medium.com/@ChemAndCode", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=s2LqE_EAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/ChemAndCode", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
