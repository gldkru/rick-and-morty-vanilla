import { createList } from "./lib/elements";
import { createPagesList } from "./lib/pagination";
import { endpoints } from "./lib/const";
import "./styles.css";

const app = document.getElementById("app");

const getCharacters = async () => {
  const response = await fetch(endpoints.characters);
  const data = await response.json();

  console.log(data);

  return data;
};

const createCharactersList = async () => {
  const { info, results: characters } = await getCharacters();
  const list = createList(characters);
  const pages = createPagesList(info.pages);

  app.appendChild(list);
  app.prepend(pages);
};

createCharactersList();
