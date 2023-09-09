import shopFake from "../assets/svg/projects/shop-fake.png";
import gerenciarLink from "../assets/svg/projects/gerenciar-link.png";
import football from "../assets/svg/projects/api-football.png";
import volvo from "../assets/svg/projects/volvo.png";

export const projectsData = [
  {
    id: 1,
    projectName: "Carrinho de compras",
    projectDesc: "Carrinho de compras",
    tags: [
      "React",
      "JavaScript",
      "MUI",
      "Consumo de API",
      "Redux Toolkit",
      "React-toastify",
      "Vite",
    ],
    code: "https://github.com/paulinha-19/fake-shopping-cart",
    demo: "https://fake-store-on.netlify.app/",
    image: shopFake,
  },
  {
    id: 2,
    projectName: "Meu time",
    projectDesc:
      "Esse teste tecnico é uma aplicação web para visualizar informações sobre ligas e copas ao redor do mundo desenvolvido para uma vaga Front-end",
    tags: [
      "React",
      "MUI",
      "React hooks",
      "TypScript",
      "Vite",
      "Framer-Emotion",
    ],
    code: "https://github.com/paulinha-19/api-football",
    demo: "https://api-football-one.vercel.app/",
    image: football,
  },
  {
    id: 3,
    projectName: "Gerenciador de links",
    projectDesc:
      "Esse foi um teste tecnico para uma vaga de trainee com o objetivo de desenvolver um sistema web para salvar, editar, listar e deletar links de artigos",
    tags: [
      "React",
      "React-query",
      "Node",
      "Express",
      "ORM Prisma",
      "Postgree",
      "WebCrawler",
    ],
    code: "https://github.com/paulinha-19/api-link",
    demo: "",
    image: gerenciarLink,
  },
  {
    id: 4,
    projectName: "Volvo Cars",
    projectDesc: "Teste para uma vaga de desenvolvedor front end",
    tags: ["Nextjs", "TypeScript", "Tailwind"],
    code: "https://github.com/paulinha-19/god-frontend-code-test/tree/development",
    demo: "",
    image: volvo,
  },
];
