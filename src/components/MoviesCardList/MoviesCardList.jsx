import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';


function MoviesCardList({
  onSavedMovies
}) {
  return (
    <section className='movies-card-list'>
      <div className='movies-card-list__container'>
        <MoviesCard 
          isCrossActive={onSavedMovies}
        />
        <MoviesCard 
          isCrossActive={onSavedMovies}
        />
        <MoviesCard 
          isCrossActive={onSavedMovies}
        />
        <MoviesCard 
          isCrossActive={onSavedMovies}
        />
        <MoviesCard 
          isCrossActive={onSavedMovies}
        />
      </div>
    </section>
  )
};

export default MoviesCardList;
