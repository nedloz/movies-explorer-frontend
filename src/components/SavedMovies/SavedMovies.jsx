import { useEffect, useState } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Api from '../../utils/Api/MainApi'
import cardsFilter from '../../utils/Filters/cardsFilter';
import {
  cardsNotFoundText,
  searchTextNotFoundErrorText,
  lostConnectionOnSearchErrorText,
} from '../../utils/constants';

function SavedMovies({
  setOnSavedMovies,
  setAllPagesOff,
  onSavedMovies,
}) {
  const [savedMovies, setSavedMovies] = useState([]);
  const [isMoviesListRender, setIsMoviesListRender] = useState(false);
  const [moviesCardListErrorText, setMoviesCardListErrorText] = useState('');
  const [renderCards, setRenderCards] = useState([]);
  const [isSearchButtonActive, setIsSearchButtonActive] = useState(true)

  useEffect(() => {
    setAllPagesOff();
    setOnSavedMovies(true);
  });

  useEffect(() => {
    Api.getSavedMovies()
      .then((res) => {
        if (res.length === 0) {
          setMoviesCardListErrorText(cardsNotFoundText);
          return;
        };
        setSavedMovies(res);
        setRenderCards(res);
        setIsMoviesListRender(true);
      })
      .catch(() => setMoviesCardListErrorText(lostConnectionOnSearchErrorText));
  }, []);

  const handleSearch = (text, isMoviesShortState) => {
    setMoviesCardListErrorText('');
    if (text === null || text === '') {
      setMoviesCardListErrorText(searchTextNotFoundErrorText);
      return;
    };
    setIsSearchButtonActive(false)
    Api.getSavedMovies()
      .then((res) => {
        if (res.length === 0) {
          setMoviesCardListErrorText(cardsNotFoundText);
          return;
        };
        setSavedMovies(res);
        const filteredCards = cardsFilter(res, text, isMoviesShortState);
        setRenderCards(filteredCards);
        setIsMoviesListRender(true);
        if (filteredCards.length === 0) {
          setMoviesCardListErrorText(cardsNotFoundText);
        };
      })
      .catch(() => setMoviesCardListErrorText(lostConnectionOnSearchErrorText))
      .finally(() => {
        setIsSearchButtonActive(true)
      })
  };

  const onDeleteMovie = (e) => {
    const cardId = Number(e.currentTarget.id.replace('movies-card__cross-', ''));
    const card = renderCards.find((card) => card.movieId === cardId);
    Api.deleteMovie(card._id)
      .then(() => {
        setRenderCards(renderCards.filter(item => item.movieId !== cardId));
        if (renderCards.length === 1) {
          setMoviesCardListErrorText(cardsNotFoundText);
          return;
        };
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <SearchForm
        onSearchSubmit={handleSearch}
        isOnSavedMoviesPage={true}
        isSearchButtonActive={isSearchButtonActive}
      />
      <MoviesCardList
        onSavedMovies={onSavedMovies}
        cards={renderCards}
        onMovieLikeOrDelete={onDeleteMovie}
        isMoviesListRender={isMoviesListRender}
        errorText={moviesCardListErrorText}
      />
    </div>
  );
};

export default SavedMovies;
