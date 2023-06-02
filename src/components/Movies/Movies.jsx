import { useEffect } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies({
  setOnMovies,
  setAllPagesOff,
}) {
  useEffect(() => {
    setAllPagesOff();
    setOnMovies(true);
  });

  return (
    <div>
      <SearchForm />
      <MoviesCardList />
      <Preloader />
    </div>
  )
};

export default Movies;
