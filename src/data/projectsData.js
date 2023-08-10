import shopFake from "../assets/svg/projects/shop-fake.png";
import gerenciarLink from "../assets/svg/projects/gerenciar-link.png";
import acme from "../assets/svg/projects/acme.png";
import football from "../assets/svg/projects/api-football.png";
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
      "Consumo de API",
      "Framer-Emotion",
    ],
    code: "https://github.com/paulinha-19/api-football",
    demo: "https://api-football-tawny.vercel.app/",
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
      "ORM Sequelize",
      "MySql",
      "WebCrawler",
    ],
    code: "https://github.com/paulinha-19/api-link",
    demo: "",
    image: gerenciarLink,
  },
  {
    id: 4,
    projectName: "Clinica Acme",
    projectDesc:
      "O objetivo é desenvolver um sistema de agendamento de consultas médicas",
    tags: ["Projeto em desenvolvimento"],
    code: "",
    demo: "",
    image: acme,
  },
];
