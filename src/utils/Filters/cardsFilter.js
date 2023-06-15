import { maxShortFilmDuration } from "../constants";

const cardsFilter = (cards, text, isMovieShort) => {
  return cards.filter(function (element) {
    const regular = new RegExp(text, 'gi')
    if (regular.test(element.nameRU) || regular.test(element.nameEN)) {
      if (isMovieShort) {
        if (element.duration <= maxShortFilmDuration) {
          return element;
        }
        return;
      }
      return element;
    }
    return;
  })
}

export default cardsFilter