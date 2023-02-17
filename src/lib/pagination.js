const createPage = (currentPage) => {
  const element = document.createElement("li");

  element.classList.add("pagination__item");

  element.innerText = currentPage;

  return element;
};

export const createPagesList = (number, current, onClick) => {
  const pagesList = document.createElement("ul");

  pagesList.classList.add("pagination");

  for (let i = 1; i <= number; i++) {
    const element = createPage(i);

    if (i === current) {
      element.classList.add("pagination__item_current");
    }

    element.addEventListener("click", () => onClick(i));

    pagesList.appendChild(element);
  }

  return pagesList;
};
