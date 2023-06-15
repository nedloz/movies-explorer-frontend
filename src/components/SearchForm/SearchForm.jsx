import { useEffect, useState } from 'react';

import './SearchForm.css';
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox';
import useFormHook from '../../utils/hooks/useForm';

function SearchForm({
  onSearchSubmit,
  isOnSavedMoviesPage,
  isSearchButtonActive,
}) {
  const [isMovieShort, setIsMovieShort] = useState(false);
  const { values, handleChange, setValues } = useFormHook({});

  useEffect(() => {
    setValues({});
    if (isOnSavedMoviesPage) {
      setIsMovieShort(false);
    } else {
      const searchValue = localStorage.getItem('search-text');
      const isMoviesShortState = localStorage.getItem('is-movies-short-state');
      if (searchValue !== undefined) {
        setValues({
          search: searchValue,
        });
      };
      if (isMoviesShortState !== undefined) {
        isMoviesShortState === 'true' ? setIsMovieShort(true) : setIsMovieShort(false);
      };
    };
  }, [isOnSavedMoviesPage]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(values.search, isMovieShort);
  };

  const onFilterButtonClick = () => {
    setIsMovieShort(!isMovieShort);
  };

  return (
    <section className='search-form'>
      <form
        className='search-form__container'
        onSubmit={handleSearchSubmit}
        autoComplete='off'
      >
        <div className='search-form__input-container'>
          <input
            onChange={handleChange}
            value={values.search || ''}
            className='search-form__input'
            type='text'
            name='search'
            placeholder='Фильм'
            required
          />
          <button
            type='submit'
            className={'search-form__button' + (!isSearchButtonActive ? ' search-form__button_disabled' : '')}
            disabled={!isSearchButtonActive}
          >Поиск</button>
        </div>
        <div className='search-form__filter-container'>
          <FilterCheckBox onChange={onFilterButtonClick} value={isMovieShort} />
          <p className='search-form__filter-text'>Короткометражки</p>
        </div>
        <div className='search-form__line' />
      </form>
    </section>
  );
};

export default SearchForm;
