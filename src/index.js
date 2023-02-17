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

const createCharactersList = async (page = 1) => {
  app.innerHTML = "";

  const { info, results: characters } = await getCharacters({ page });
  const list = createList(characters);

  const pages = createPagesList(info.pages, page, (currentPage) =>
    createCharactersList(currentPage)
  );

  app.appendChild(list);
  app.prepend(pages);
};

createCharactersList();
