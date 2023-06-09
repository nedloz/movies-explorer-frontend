const addCardsCount = () => {
  if (window.innerWidth < 990) return 2
  if (window.innerWidth < 1280) return 3
  if (window.innerWidth > 1280) return 4
  return 2
}

export default addCardsCount