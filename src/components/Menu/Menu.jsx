import { Link, useNavigate } from 'react-router-dom';

import './Menu.css';

function Menu({
  isMenuActive,
  setIsMenuActive,
  onMain,
  onMovies,
  onSavedMovies,
}) {
  const navigate = useNavigate();
  const onCloseButtonClick = () => {
    setIsMenuActive(false);
  };

  return (
    <div className={'menu' + (isMenuActive ? ' menu_active' : '')}>
      <div className='menu__container'>
        <button
          type='button'
          className='menu__close-button'
          onClick={onCloseButtonClick}
        />
        <div className='menu__links-container'>
          <Link
            to='/'
            onClick={onCloseButtonClick}
            className={'menu__link' + (onMain ? ' menu__link_active' : '')}
          >Главная</Link>
          <Link
            to='/movies'
            onClick={onCloseButtonClick}
            className={'menu__link' + (onMovies ? ' menu__link_active' : '')}
          >Фильмы</Link>
          <Link
            to='/saved-movies'
            onClick={onCloseButtonClick}
            className={'menu__link' + (onSavedMovies ? ' menu__link_active' : '')}
          >Сохраненные фильмы</Link>
        </div>
        <input
          className='menu__account-button'
          type='button'
          value='Аккаунт'
          onClick={() => {
            onCloseButtonClick();
            navigate('/profile');
          }}
        />
      </div>
    </div>
  )
};

export default Menu;
