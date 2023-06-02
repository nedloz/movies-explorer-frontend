import './SearchForm.css';
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox';

function SearchForm() {
  return (
    <section className='search-form'>
      <form className='search-form__container'>
        <div className='search-form__input-container'>
          <input
            className='search-form__input'
            type='text'
            placeholder='Фильм'
            required
          />
          <button
            className="search-form__button"
          >Поиск</button>
        </div>
        <div className='search-form__filter-container'>
          <FilterCheckBox />
          <p className='search-form__filter-text'>Короткометражки</p>
        </div>
        <div className='search-form__line' />
      </form>
    </section>
  )
};

export default SearchForm;
