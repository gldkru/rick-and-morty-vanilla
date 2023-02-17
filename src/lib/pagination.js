const createPage = (currentPage) => {
  const element = document.createElement("li");

  element.classList.add("pagination__item");

  if (currentPage === 1) {
    element.classList.add("pagination__item_current");
  }

  element.innerText = currentPage;

  return element;
};

export const createPagesList = (number, onClick) => {
  const pagesList = document.createElement("ul");

  pagesList.classList.add("pagination");

  for (let i = 1; i <= number; i++) {
    const element = createPage(i);

    element.addEventListener("click", () => onClick(i));

    pagesList.appendChild(element);
  }

  return pagesList;
};
