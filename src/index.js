import { createList } from "./lib/elements";
import { createPagesList } from "./lib/pagination";
import { endpoints } from "./lib/const";
import "./styles.css";

const app = document.getElementById("app");

const getCharacters = async (params) => {
  const response = await fetch(
    `${endpoints.characters}?${new URLSearchParams(params)}`
  );
  const data = await response.json();

  console.log(data);

  return data;
};

const createCharactersList = async (currentPage = 1) => {
  app.innerHTML = "";

  const { info, results: characters } = await getCharacters({
    page: currentPage,
  });
  const list = createList(characters);

  const pages = createPagesList(info.pages, currentPage, (page) =>
    createCharactersList(page)
  );

  app.appendChild(list);
  app.prepend(pages);
};

createCharactersList();
