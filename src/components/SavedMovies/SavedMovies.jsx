import { useEffect } from 'react';

import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({
  setOnSavedMovies,
  setAllPagesOff,
  onSavedMovies,
}) {
  useEffect(() => {
    setAllPagesOff();
    setOnSavedMovies(true);
  });

  return (
    <div className='saved-movies'>
      <SearchForm />
      <MoviesCardList
        onSavedMovies={onSavedMovies}
      />
    </div>
  )
};

export default SavedMovies;
