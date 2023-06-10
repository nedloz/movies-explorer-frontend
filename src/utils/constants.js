const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
const namePattern = /^[а-яА-Яa-zA-ZЁё\-\s]*$/gi


const lostConnectionOnSearchErrorText = `Во время запроса произошла ошибка.\nВозможно, проблема с соединением или сервер недоступен.\nПодождите немного и попробуйте ещё раз`
const cardsNotFoundText = 'Карточки не найдены'
const searchTextNotFoundErrorText = 'Нужно ввести ключевое слово'
const authCentralErrorText = 'Что то пошло не так...'
const doubleEmailRegisterErrorText = 'Данный email уже был зарегистрирован'
const userDataChangedText = 'Данные сохранены'
const doubleDataErrorText = 'Нельзя дублировать значения'

export {
  emailPattern,
  namePattern,
  lostConnectionOnSearchErrorText,
  cardsNotFoundText,
  searchTextNotFoundErrorText,
  authCentralErrorText,
  doubleEmailRegisterErrorText,
  userDataChangedText,
  doubleDataErrorText,
}