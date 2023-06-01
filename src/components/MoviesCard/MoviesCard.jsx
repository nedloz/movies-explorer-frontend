import './MoviesCard.css';

function MoviesCard({
  isCrossActive,
}) {
  return (
    <div className='movies-card'>
      <img className='movies-card__image' src='https://i.pinimg.com/originals/97/16/33/9716336ff10b5a85f52d5f9971ed62ec.jpg' alt='картинка карточки' />
      <div className='movies-card__description'>
        <div className='movies-card__text-container'>
          <h3 className='movies-card__name'>33 слова о дизайне</h3>
          <p className='movies-card__duration'>1ч42м</p>
        </div>
        <input type='checkbox' className={isCrossActive ? ' movies-card__cross' : 'movies-card__like'} />
      </div>
    </div>
  )
};

export default MoviesCard;
