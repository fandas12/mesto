let editProfileButton = document.querySelector('.profile__edit-button'); // назначение переменной кнопки редактирования
let editProfile = document.querySelector('.popup'); // назначение переменной попап
let formElement = editProfile.querySelector('.popup__form'); // назначение переменной формы попап
let userNameElement = document.querySelector('.profile__user-name'); // назначение переменной имя пользователя
let userOccupationElement = document.querySelector('.profile__user-occupation'); // назначение переменной профессия
let userNameInput = editProfile.querySelector('.popup__input_user_name'); //назначение переменной поля ввода имя
let occupationInput = editProfile.querySelector('.popup__input_user_occupation'); //назначение переменной поля ввода профессия
let closeProfileButton = editProfile.querySelector('.popup__button-close'); // назначение переменной кнопки закрытия формы

//отображает форму на странице, в поля формы по умолчанию назначает данные указанные в профиле
function openPopup() {
  editProfile.classList.add('popup_opened');
  userNameInput.value = userNameElement.textContent;
  occupationInput.value = userOccupationElement.textContent;
}

// функция скрывает форму
function closePopup() {
  editProfile.classList.remove('popup_opened');
}


// функция задает данные профиля через форму и закрывает форму
function handleFormSubmit(evt) {
  evt.preventDefault();
  userNameElement.textContent = userNameInput.value;
  userOccupationElement.textContent = occupationInput.value;
  closePopup();
}


// при нажатии на кнопку редактировать открывается форма профиля
editProfileButton.addEventListener('click', function () {
  openPopup();
});

// закрывает форму профиля при нажатии на кнопку close
closeProfileButton.addEventListener('click', function () {
  closePopup();
});

//создает событие, данные введеные в форме, сохраняются в профиле и закрываются
formElement.addEventListener('submit', handleFormSubmit);
