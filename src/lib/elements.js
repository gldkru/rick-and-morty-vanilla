export const createCard = (props) => {
  const card = document.createElement("div");
  const image = document.createElement("img");
  const cardContent = document.createElement("div");
  const cardTitle = document.createElement("div");
  const cardSubTitle = document.createElement("div");

  card.classList.add("card");
  image.classList.add("card__image");
  cardContent.classList.add("card__content");
  cardTitle.classList.add("card__title");
  cardSubTitle.classList.add("card__subtitle");

  image.alt = props.name;
  image.src = props.imageSrc;
  cardTitle.innerText = props.name;
  cardSubTitle.innerText = props.species;

  cardContent.appendChild(cardTitle);
  cardContent.appendChild(cardSubTitle);

  card.appendChild(image);
  card.appendChild(cardContent);

  return card;
};

export const createList = (data) => {
  const list = document.createElement("div");

  list.classList.add("card-list");

  for (let i = 0; i < data.length; i++) {
    const cardData = {
      name: data[i].name,
      imageSrc: data[i].image,
      species: data[i].species,
    };
    const card = createCard(cardData);

    list.appendChild(card);
  }

  return list;
};
