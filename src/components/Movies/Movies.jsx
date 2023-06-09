import { useEffect, useState } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import * as MoviesApi from '../../utils/Api/MoviesApi';
import MainApi from '../../utils/Api/MainApi'
import cardsFilter from '../../utils/Filters/cardsFilter';
import cardsCountFilter from '../../utils/Filters/cardsCountFilter';
import addCardsCount from '../../utils/addCardsCount';
import {
  lostConnectionOnSearchErrorText,
  cardsNotFoundText,
  searchTextNotFoundErrorText,
} from '../../utils/constants';

function Movies({
  setOnMovies,
  setAllPagesOff,
}) {
  const [cards, setCards] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isPreloaderRender, setIsPreloaderRender] = useState(false);
  const [isMoviesListRender, setIsMoviesListRender] = useState(false);
  const [isPreloaderActive, setIsPreloaderActive] = useState(false);
  const [renderCards, setRenderCards] = useState([]);
  const [countCardsToAdd, setCountCardsToAdd] = useState(2);
  const [moviesCardListErrorText, setMoviesCardListErrorText] = useState('');

  useEffect(() => {
    setAllPagesOff();
    setOnMovies(true);
  });

  useEffect(() => {
    const cards = JSON.parse(localStorage.getItem('movies-cards'));
    if (cards) {
      setCards(cards);
      const renderCards = cardsCountFilter(cards);
      setRenderCards(renderCards);
      
      if (cards.length === renderCards.length) {
        setIsPreloaderRender(false);
      };
      setIsPreloaderRender(true);
      setIsMoviesListRender(true);
      MainApi.getSavedMovies()
        .then((res) => setSavedMovies(res))
        .catch((err) => console.log(err));
    };
  }, []);

  useEffect(() => {
    const count = addCardsCount();
    setCountCardsToAdd(count);
    window.addEventListener('resize', handleWindowSizeChange);
  }, []);

  const handleWindowSizeChange = () => {
    const count = addCardsCount();
    setTimeout(setCountCardsToAdd(count), 1000);
  };

  const handleMoreCardsButtonPress = () => {
    setIsPreloaderActive(true);
    if (cards.length === cards.slice(0, renderCards.length + countCardsToAdd).length) {
      setIsPreloaderRender(false);
    };
    setTimeout(() => {
      setRenderCards(cards.slice(0, renderCards.length + countCardsToAdd));
      setIsPreloaderActive(false);
    }, 1000);
  };

  const handleSearch = (text, isMoviesShortState) => {
    setIsPreloaderRender(true);
    setIsPreloaderActive(true);
    setMoviesCardListErrorText('');
    MoviesApi.getMovies()
      .then((res) => {
        if (text === null || text === '') {
          setMoviesCardListErrorText(searchTextNotFoundErrorText);
          setIsPreloaderRender(false);
          return;
        };
        const filteredCards = cardsFilter(res, text, isMoviesShortState);
        const renderCards = cardsCountFilter(filteredCards);
        setCards(filteredCards);
        setRenderCards(renderCards);
        if (filteredCards.length === 0) {
          setMoviesCardListErrorText(cardsNotFoundText);
          return;
        };
        if (filteredCards.length === renderCards.length) {
          setIsPreloaderRender(false);
        };
        localStorage.setItem('movies-cards', JSON.stringify(filteredCards));
        localStorage.setItem('search-text', text);
        localStorage.setItem('is-movies-short-state', isMoviesShortState);
      })
      .catch(() => {
        setIsPreloaderRender(false);
        setMoviesCardListErrorText(lostConnectionOnSearchErrorText);
      })
      .finally(() => {
        setIsMoviesListRender(true);
        setIsPreloaderActive(false);
      });
  };

  const handleMovieLike = (e, isCardLike) => {
    const cardId = Number(e.currentTarget.id.replace('movies-card__like-', ''));
    const card = renderCards.find((card) => card.id === cardId);
    const savedCard = {
      "country": card.country,
      "director": card.director,
      "duration": card.duration,
      "year": card.year,
      "description": card.description,
      "image": 'https://api.nomoreparties.co' + card.image.url,
      "trailerLink": card.trailerLink,
      "thumbnail": 'https://api.nomoreparties.co' + card.image.formats.thumbnail.url,
      "movieId": card.id,
      "nameRU": card.nameRU,
      "nameEN": card.nameEN,
    };
    if (isCardLike) {
      MainApi.saveMovie(savedCard)
        .catch((err) => console.log(err));
    } else {
      MainApi.getSavedMovies()
        .then((res) => {
          const card = res.find((movie) => movie.movieId === cardId);
          MainApi.deleteMovie(card._id)
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    };
  };

  return (
    <div>
      <SearchForm
        onSearchSubmit={handleSearch}
      />
      <MoviesCardList
        isMoviesListRender={isMoviesListRender}
        cards={renderCards}
        onMovieLikeOrDelete={handleMovieLike}
        errorText={moviesCardListErrorText}
        savedCards={savedMovies}
      />
      <Preloader
        isPreloaderRender={isPreloaderRender}
        isPreloaderActive={isPreloaderActive}
        onButtonPress={handleMoreCardsButtonPress}
      />
    </div>
  );
};

export default Movies;
