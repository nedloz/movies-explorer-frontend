const MovieDurationFilter = (duration, card) => {
  if (duration < 60) {
    return card.duration + 'м'
  }
  if (card.duration % 60 === 0) {
    return Math.floor(card.duration / 60) + 'ч'
  }
  return (Math.floor(card.duration / 60) + 'ч' + card.duration % 60 + 'м')
}

export default MovieDurationFilter