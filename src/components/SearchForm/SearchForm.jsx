import './SearchForm.css';
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox';

function SearchForm() {
  return (
    <div className='search-form'>
      <div className='search-form__container'>
        <div className='search-form__input-container'>
          <input
            className='search-form__input'
            type='text'
            placeholder='Фильм'
          />
          <input
            className="search-form__button"
            type="button"
            value='Поиск'
          />
        </div>
        <div className='search-form__filter-container'>
          <FilterCheckBox />
          <p className='search-form__filter-text'>Короткометражки</p>
        </div>
        <div className='search-form__line' />
      </div>
    </div>
  )
};

export default SearchForm;
