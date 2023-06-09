import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({
  onSavedMovies,
  onMovieLikeOrDelete,
  isMoviesListRender,
  cards,
  errorText,
  savedCards = [],
}) {

  if (errorText) {
    return (
      <section className='movies-card-list'>
        <div className='movies-card-list__error-container'>
          <h2 className='movies-card-list__error-text'>{errorText}</h2>
        </div>
      </section >
    );
  };

  if (!isMoviesListRender) {
    return;
  };

  return (
    <section className='movies-card-list'>
      <div className='movies-card-list__container'>
        {
          cards.map((card, index) => {
            const isLiked = savedCards.some((item) => card.id === item.movieId)
            return (
            <MoviesCard
              key={card.id || card.movieId}
              card={card}
              onSavedMovies={onSavedMovies}
              onMovieLikeOrDelete={onMovieLikeOrDelete}
              isLiked={isLiked}
            />
          )})
        }
      </div>
    </section>
  );
};

export default MoviesCardList;
