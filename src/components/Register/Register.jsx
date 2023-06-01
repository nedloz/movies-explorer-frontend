import { useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';

import './Register.css';
import logo from '../../images/logo.svg';

function Register({
  setOnRegister,
  setAllPagesOff,
}) {
  const navigate = useNavigate();

  useEffect(() => {
    setAllPagesOff();
    setOnRegister(true);
  });

  return (
    <div className='register'>
      <div className='register__container'>
        <img
          className='register__logo'
          src={logo}
          alt='логотип'
          onClick={() => navigate('/')}
        />
        <p className='register__title'>Добро пожаловать!</p>
        <form
          className='register__form'
          name='register'
          // noValidate
          onSubmit={(e) => {
            e.preventDefault();
            navigate('/signin');
          }}
        >
          <label>
            <span className='register__input-name'>Имя</span>
            <input
              className='register__input'
              name='name'
              type='text'
              required
            // onChange={}
            // value={}
            />
          </label>
          <label>
            <span className='register__input-name'>E-mail</span>
            <input
              className='register__input'
              name='email'
              type='email'
              required
            // type='text'
            // onChange={}
            // value={}
            />
          </label>
          <label>
            <span className='register__input-name'>Пароль</span>
            <input
              className='register__input'
              name='password'
              type='password'
              required
            // onChange={}
            // value={}
            />
          </label>
          <span className='register__error'>Что то пошло не так...</span>
          <input
            className='register__submit-button'
            type='submit'
            value='Зарегистрироваться'
          />
        </form>
        <p className='register__footer-text' >Уже зарегистрированы? <Link className='register__footer-link' to='/signin' >Войти</Link></p>
      </div>
    </div>
  )
};

export default Register;
