// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');


// @todo: Функция создания карточки
function createCard({name, link}, onDelete) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');
  cardElement.querySelector('.card__image').src =link;
  cardElement.querySelector('.card__title').textContent = name;

  deleteButton.addEventListener('click', onDelete)
  return cardElement;
}


// @todo: Функция удаления карточки
function handDeleteCard (evt) {
  evt.target.closest('.card').remove()
}


// @todo: Вывести карточки на страницу
initialCards.forEach((dataCard) => {
  placesList.append(createCard(dataCard, handDeleteCard));
})

