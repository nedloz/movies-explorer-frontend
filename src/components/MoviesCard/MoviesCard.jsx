import { useEffect, useState } from 'react';

import './MoviesCard.css';
import MovieDurationFilter from '../../utils/Filters/durationFilter';

function MoviesCard({
  onSavedMovies,
  card,
  onMovieLikeOrDelete,
  isLiked,
}) {
  const [isCardLike, setIsCardLike] = useState(isLiked ? true : false);

  useEffect(() => {
    if (isLiked) {
      setIsCardLike(true);
    };
  }, [isLiked]);

  const handleLikeClick = (e) => {
    setIsCardLike(!isCardLike);
    onMovieLikeOrDelete(e, !isCardLike);
  };

  return (
    <div className='movies-card'>
      <img
        className='movies-card__image'
        src={!onSavedMovies ? 'https://api.nomoreparties.co' + card.image.url : card.image}
        alt='картинка карточки'
        onClick={() => window.open(card.trailerLink, "_blank")}
      />
      <div className='movies-card__description'>
        <div className='movies-card__text-container'>
          <h3 className='movies-card__name'>{card.nameRU}</h3>
          <p className='movies-card__duration'>{MovieDurationFilter(card.duration, card)}</p>
        </div>
        <input
          type='checkbox'
          className={onSavedMovies ? 'movies-card__cross' : 'movies-card__like'}
          id={onSavedMovies ? 'movies-card__cross-' + card.movieId : 'movies-card__like-' + card.id}
          onChange={handleLikeClick}
          checked={isCardLike}
        />
      </div>
    </div>
  );
};

export default MoviesCard;
