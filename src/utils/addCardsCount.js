import {
  smallWindowAddCardsCount,
  averageWindowAddCardsCount,
  fullWindowAddCardsCount,
} from "./constants"

const addCardsCount = () => {
  if (window.innerWidth < 990) return smallWindowAddCardsCount
  if (window.innerWidth < 1280) return averageWindowAddCardsCount
  if (window.innerWidth > 1280) return fullWindowAddCardsCount
  return 2
}

export default addCardsCount