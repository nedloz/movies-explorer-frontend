import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import './Login.css';
import logo from '../../images/logo.png';

function Login({
  setOnLogin,
  setAllPagesOff,
}) {
  const navigate = useNavigate();
  useEffect(() => {
    setAllPagesOff();
    setOnLogin(true);
  });

  return (
    <div className='login'>
      <div className='login__container'>
        <img
          src={logo}
          className='login__logo'
          alt='логотип'
          onClick={() => navigate('/')}
        />
        <p className='login__title'>Рады видеть!</p>
        <form
          className='login__form'
          name='login'
          // noValidate
          onSubmit={(e) => {
            e.preventDefault()
            navigate('/movies')
          }}
        >
          <label>
            <p className='login__input-name'>E-mail</p>
            <input
              className='login__input'
              type='email'
              name='password'
              required
            // type='text'
            // onChange={}
            // value={}
            />
          </label>
          <label>
            <p className='login__input-name'>Пароль</p>
            <input
              className='login__input'
              type='password'
              name='password'
              required
            // onChange={}
            // value={}
            />
          </label>
          <span className='login__error'>Что то пошло не так...</span>
          <input
            type='submit'
            value='Войти'
            className='login__submit-button'
          />
        </form>
        <p className='login__footer-text' >Ещё не зарегистрированы? <Link className='login__footer-link' to='/signup' >Регистрация</Link></p>
      </div>
    </div>
  )
};

export default Login;
