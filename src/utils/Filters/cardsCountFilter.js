import { 
  smallWindowDefaultCardsCount,
  averageWindowDefaultCardsCount,
  fullWindowDefaultCardsCount,
} from "../constants"

const cardsCountFilter = (cards) => {
  if (window.innerWidth < 480) {
    return cards.slice(0, smallWindowDefaultCardsCount)
  }
  if (window.innerWidth < 768) {
    return cards.slice(0, averageWindowDefaultCardsCount)
  }
  return cards.slice(0, fullWindowDefaultCardsCount)
}

export default cardsCountFilter