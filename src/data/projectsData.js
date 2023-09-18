import shopFake from "../assets/svg/projects/shop-fake.png";
import development from "../assets/svg/projects/development.jpg";
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
    projectName: "Clínica acme",
    projectDesc:
      "Esse é o frontend do sistema de agendamento de consulta médica desenvolvido em colaboração com outro desenvolvedor. O projeto conta com pessoas voluntárias que estão buscando aperfeiçoar habilidades técnicas e comportamentais.",
    tags: ["Nextjs", "TypeScript", "ChackraUi", "Zod", "React-hook-form"],
    code: "https://github.com/paulinha-19/frontend-agendamento",
    demo: "",
    image: development,
  },
  {
    id: 4,
    projectName: "Volvo Cars",
    projectDesc: "Teste para uma vaga de desenvolvedor front end",
    tags: ["Nextjs", "TypeScript", "Tailwind"],
    code: "https://github.com/paulinha-19/god-frontend-code-test/tree/development",
    demo: "",
    image: volvo,
  }
];
