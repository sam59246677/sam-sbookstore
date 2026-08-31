import type { Product } from "../types/product";

import cleanCode from "../assets/images/clean-code.jpg";
import html from "../assets/images/html.jpg";
import javascript from "../assets/images/js.jpg";
import patterns from "../assets/images/patterns.jpg";
import python from "../assets/images/python.jpg";
import react from "../assets/images/react.jpg";
import typescript from "../assets/images/typescript.jpg";
import youDontKnowJs from "../assets/images/you-dont-know-js.jpg";

export const products: Product[] = [
  {
    id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    price: 25,
    image: cleanCode,
  },
  {
    id: 2,
    title: "HTML & CSS",
    author: "Jon Duckett",
    price: 20,
    image: html,
  },
  {
    id: 3,
    title: "JavaScript",
    author: "David Flanagan",
    price: 30,
    image: javascript,
  },
  {
    id: 4,
    title: "Design Patterns",
    author: "Erich Gamma",
    price: 35,
    image: patterns,
  },
  {
    id: 5,
    title: "Python",
    author: "Mark Lutz",
    price: 28,
    image: python,
  },
  {
    id: 6,
    title: "React",
    author: "Robin Wieruch",
    price: 32,
    image: react,
  },
  {
    id: 7,
    title: "TypeScript",
    author: "Boris Cherny",
    price: 27,
    image: typescript,
  },
  {
    id: 8,
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    price: 24,
    image: youDontKnowJs,
  },
];