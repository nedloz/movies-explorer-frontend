import './Header.css';
import logo from '../../images/logo.svg';
import { Link, useNavigate } from 'react-router-dom';

function Header({
  onMain,
  onOther,
  isMenuButton,
  setMenuOpen,
  loggedIn,
}) {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    setMenuOpen(true);
  };

  if (onOther) {
    return;
  };
  
  return (
    <header className={'header' + (onMain || !loggedIn ? ' header_type_dark' : '')} >
      <div className='header__container'>
        <img
          className='header__logo'
          src={logo}
          alt='логотип'
          onClick={() => navigate('/')}
        />
        {
          !loggedIn ?
            (
              <div >
                <Link className='header__link header__link_type_registration' to='/signup' >Регистрация</Link>
                <button
                  className='header__button header__button_type_login'
                  onClick={() => navigate('/signin')}
                >Войти</button>
              </div>
            ) : !isMenuButton
              ? (
                <>
                  <div>
                    <Link
                      className={'header__link header__link_type_films' + (onMain ? ' header__link_type_white' : '')}
                      to='/movies'
                    >Фильмы</Link>
                    <Link
                      className={'header__link header__link_type_saved-films' + (onMain ? ' header__link_type_white' : '')}
                      to='/saved-movies'
                    >Сохраненные фильмы</Link>
                  </div>
                  <button
                    className='header__button header__button_type_account'
                    onClick={() => navigate('/profile')}
                  >Аккаунт</button>
                </>
              ) : (
                <button
                  className={'header__button header__button_type_menu' + (onMain ? ' header__button_type_dark-menu' : '')}
                  onClick={handleMenuClick}
                />
              )
        }
      </div>
    </header>
  );
};

export default Header;
