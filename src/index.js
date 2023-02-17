import { createList } from "./lib/elements";
import "./styles.css";

const app = document.getElementById("app");

const getCharacters = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();

  return data;
};

const createCharactersList = async () => {
  const data = await getCharacters();
  const characters = data.results;
  const list = createList(characters);

  app.appendChild(list);
};

createCharactersList();
