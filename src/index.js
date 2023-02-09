import "./styles.css";

const app = document.getElementById("app");

const getCharacters = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();

  return data;
};

const createCard = (props) => {
  const card = document.createElement("div");
  const cardTitle = document.createElement("div");
  const image = document.createElement("img");

  card.classList.add("card");
  cardTitle.classList.add("card__title");
  image.classList.add("card__image");

  image.alt = props.name;
  image.src = props.imageSrc;
  cardTitle.innerText = props.name;

  card.appendChild(image);
  card.appendChild(cardTitle);

  return card;
};

const createList = (data) => {
  const list = document.createElement("div");

  list.classList.add("card-list");

  for (let i = 0; i < data.length; i++) {
    const cardData = {
      name: data[i].name,
      imageSrc: data[i].image,
    };
    const card = createCard(cardData);

    list.appendChild(card);
  }

  return list;
};

const createCharactersList = async () => {
  const data = await getCharacters();
  const characters = data.results;
  const list = createList(characters);

  app.appendChild(list);
};

createCharactersList();
