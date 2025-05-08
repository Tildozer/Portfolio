import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteTables = async () => {
  await prisma.projectDescription.deleteMany();
  await prisma.projects.deleteMany();
  await prisma.techStack.deleteMany();
};

const seedProjects = async () => {
  const connect4 = await prisma.projects.create({
    data: {
      name: "Connect 4",
      projectUrl: "https://radiant-tiramisu-b23987.netlify.app/",
      githubUrl: "https://github.com/Tildozer/theArcade",
      imageUrl:
        "https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/6813cab6-9e5e-4808-0e30-000e55f71900/public",
    },
  });
  const artCollector = await prisma.projects.create({
    data: {
      name: "The Art Collector",
      projectUrl: "https://dainty-scone-cd4407.netlify.app/",
      githubUrl: "https://github.com/Tildozer/UNIV_Art_Collector_React_Starter",
      imageUrl:
        "https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/c0a5c5dd-659d-426c-3da8-1296252b0b00/public",
    },
  });
  const strangersThings = await prisma.projects.create({
    data: {
      name: "Strangers Things",
      githubUrl: "https://github.com/Tildozer/strangersThngs",
      projectUrl: "https://strangersproj.netlify.app/",
      imageUrl:
        "https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/08c13389-6a99-4c0f-dc2f-8ba8679ecc00/public",
    },
  });
  const reKanstructed = await prisma.projects.create({
    data: {
      name: "Re-KANstructed",
      githubUrl: "https://github.com/Team-Kan/Lego-shopper",
      projectUrl: "https://lego-shopper-dd1u.onrender.com/",
      imageUrl:
        "https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/a399ca32-3f7e-432f-e9f7-021155a17600/public",
    },
  });
  const galaxyGenerator = await prisma.projects.create({
    data: {
      name: "Galaxy generator",
      githubUrl: "https://github.com/Tildozer/galaxyGenerator",
      projectUrl: "https://galaxy-generator-opal.vercel.app/",
      imageUrl:
        "https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/73c6b258-905a-4e31-13ae-1b7de75a0a00/public",
    },
  });
  const marbleRun = await prisma.projects.create({
    data: {
      name: "Marble Run",
      githubUrl:
        "https://github.com/Tildozer/ThreeJsJourney/tree/main/Chapter7/FinalProject",
      projectUrl: "https://marble-run-tawny.vercel.app/",
      imageUrl:
        "https://imagedelivery.net/A4ZvRQOLleqfJLUSOG_L1w/a8a7fb29-3870-4d23-aa5b-57152650ee00/public",
    },
  });

  // const [connect4, artCollector, strangersThings, reKanstructed, galaxyGenerator] = projects;

  const aboutProjects = await prisma.projectDescription.createMany({
    data: [
      // Connect 4
      {
        projectId: connect4.id,
        description:
          "This project was developed during my time at Fullstack Academy. It was my first time building out game logic",
      },
      {
        projectId: connect4.id,
        description:
          "It was created with pure javaScript and HTML, and I learned how to manipulate the DOM to create a game board and pieces",
      },
      {
        projectId: connect4.id,
        description:
          "I also learned how to use CSS to style the game board and pieces",
      },

      // The Art Collector
      {
        projectId: artCollector.id,
        description:
          "This project was my first experience with interacting with an API. I used the Harvard Art Museum API to pull in art pieces and display them on the page.",
      },
      {
        projectId: artCollector.id,
        description:
          "I learned how to use React to create a single page application that allows users to search for art pieces by keyword.",
      },

      // Strangers Things
      {
        projectId: strangersThings.id,
        description:
          "This project marked my initial experience at Fullstack Academy, serving as my introduction to working with React and JSON Web Tokens.",
      },
      {
        projectId: strangersThings.id,
        description:
          "I acquired the skills to validate a token and utilize it for user authentication.",
      },
      {
        projectId: strangersThings.id,
        description:
          "Successfully integrated react-router-DOM to facilitate navigation for visitors within a single-page application.",
      },

      //  Re-KANstructed
      {
        projectId: reKanstructed.id,
        description:
          "This project served as the capstone for my Fullstack Academy program. Collaborating with two partners, we were assigned the task of developing an E-commerce website. We chose to create a platform focused on the buyback and resale of Lego products.",
      },
      {
        projectId: reKanstructed.id,
        description:
          "During the development process, we opted to use Jest for testing our back-end routes. This approach ensured that our functions were operating correctly before proceeding to the front-end development.",
      },
      {
        projectId: reKanstructed.id,
        description:
          "We utilized Excalidraw to plan our front-end design prior to coding, ensuring alignment among team members. This approach facilitated a smooth development process, allowing us to implement additional features such as email confirmation using NodeMailer.",
      },

      // Galaxy generator
      {
        projectId: galaxyGenerator.id,
        description:
          "This was one of my first 3D rendered projects, implementing Three.js.",
      },
      {
        projectId: galaxyGenerator.id,
        description:
          "It provided valuable insights into using mathematical principles for design and demonstrated how minor adjustments can significantly impact the outcome.",
      },
      {
        projectId: galaxyGenerator.id,
        description:
          "I used a GUI for debugging and figuring out the how I wanted my galaxy to look.",
      },
      // Marble Run
      {
        projectId: marbleRun.id,
        description:
          "This was my final project for the Three.js course. integrating all the concepts and techniques I learned to develop a simple game.",
      },
      {
        projectId: marbleRun.id,
        description:
          "This project provided an excellent opportunity to incorporate physics into development. I gained experience using Rapier to implement continuous physics simulations for the marble.",
      },
    ],
  });

  console.log("---- Projects ----");
  console.log("---- Projects Descriptions ----");
  console.log(aboutProjects);
};

const seedTechStack = async () => {
  const techStack = await Promise.all([
    prisma.techStack.create({
      data: {
        name: "Javascript",
        iconName: "SiJavascript",
        color: "#f7df1e",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
    }),
    prisma.techStack.create({
      data: {
        name: "Typescript",
        iconName: "TbBrandTypescript",
        color: "#007acc",
        url: "https://www.typescriptlang.org/docs/",
      },
    }),
    prisma.techStack.create({
      data: {
        name: "CSS",
        iconName: "TbBrandCss3",
        color: "#264de4",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
    }),
    prisma.techStack.create({
      data: {
        name: "Tailwind",
        iconName: "TbBrandTailwind",
        color: "#06b6d4",
        url: "https://tailwindcss.com/docs/installation",
      },
    }),
    prisma.techStack.create({
      data: {
        name: "HTML",
        iconName: "SiHtml5",
        color: "#e34c26",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
    }),
    prisma.techStack.create({
      data: {
        name: "C++",
        iconName: "TbBrandCpp",
        color: "#FFFFFF",
        url: "https://devdocs.io/cpp/",
      },
    }),
    prisma.techStack.create({
      data: {
        name: "Flutter",
        iconName: "SiFlutter",
        color: "#027DFD",
        url: "https://docs.flutter.dev/",
      },
    }),
    prisma.techStack.create({
      data: {
        name: "Jest",
        iconName: "SiJest",
        color: "#32CD32",
        url: "https://jestjs.io/docs/getting-started",
      },
    }),
    prisma.techStack.create({
      data: {
        name: "Dart",
        iconName: "SiDart",
        color: "#0175C2",
        url: "https://dart.dev/guides",
      },
    }),
    prisma.techStack.create({
      data: {
        name: "GDScript",
        iconName: "SiGodotengine",
        color: "#478cbf",
        url: "https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/index.html",
      },
    }),
  ]);

  console.log("---- Tech Stack ----");
  console.log(techStack);
};

const seedAndSync = async () => {
  await deleteTables();
  await seedProjects();
  await seedTechStack();
};

seedAndSync();
