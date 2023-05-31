import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';


function MoviesCardList({
  onSavedMovies
}) {
  return (
    <div className='movies-card-list'>
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
    </div>
  )
};

export default MoviesCardList;
