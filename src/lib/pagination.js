const createPage = (currentPage) => {
  const element = document.createElement("li");

  element.classList.add("pagination__item");

  element.innerText = currentPage;

  return element;
};

export const createPagesList = (number) => {
  const pagesList = document.createElement("ul");

  pagesList.classList.add("pagination");

  for (let i = 1; i <= number; i++) pagesList.appendChild(createPage(i));

  return pagesList;
};
