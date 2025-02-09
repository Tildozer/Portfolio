import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
import { Projects } from "@prisma/client";

const deleteTables = async () => {
  await prisma.projectDescription.deleteMany();
  await prisma.projects.deleteMany();
  await prisma.techStack.deleteMany();
};

const seedProjects = async () => {
  const projects: Projects[] = await Promise.all([
    prisma.projects.create({
      data: {
        name: "Strangers Things",
        githubUrl: "https://github.com/Tildozer/strangersThngs",
        projectUrl: "https://strangersproj.netlify.app/",
      },
    }),
    prisma.projects.create({
      data: {
        name: "Re-KANstructed",
        githubUrl: "https://github.com/Team-Kan/Lego-shopper",
        projectUrl: "https://rekanstructed.onrender.com/",
      },
    }),
    prisma.projects.create({
      data: {
        name: "Galaxy generator",
        githubUrl: "https://github.com/Tildozer/galaxyGenerator",
        projectUrl: "https://galaxy-generator-opal.vercel.app/",
      },
    }),
  ]);
  const [strangersThings, reKanstructed, galaxyGenerator] = projects;

  const aboutProjects = await prisma.projectDescription.createMany({
    data: [
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
    ],
  });

  console.log("---- Projects ----");
  console.log(projects);
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
