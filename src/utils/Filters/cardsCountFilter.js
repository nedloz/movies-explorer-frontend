const cardsCountFilter = (cards) => {
  if (window.innerWidth < 480) {
    return cards.slice(0, 5)
  }
  if (window.innerWidth < 768) {
    return cards.slice(0, 8)
  }
  return cards.slice(0, 12)
}

export default cardsCountFilter