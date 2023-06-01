import { useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import './Register.css';
import logo from '../../images/logo.svg';
import { emailPattern } from '../../utils/constants';

const formConfig = {
  name: {
    required: ' '
  },
  email: {
    required: ' ',
    pattern: {
      value: emailPattern,
      message: ' '
    }
  },
  password: {
    required: ' '
  }
}

function Register({
  setOnRegister,
  setAllPagesOff,
}) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    setAllPagesOff();
    setOnRegister(true);
  });

  const onSubmit = () => {
    // navigate('/signin');
    console.log('submit')
  }

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
          onSubmit={handleSubmit(onSubmit)}
        >
          <label>
            <span className='register__input-name'>Имя</span>
            <input
              {...register('name', formConfig.name)}
              className='register__input'
              name='name'
              type='text'
            />
          </label>
          <label>
            <span className='register__input-name'>E-mail</span>
            <input
              {...register('email', formConfig.email)}
              className='register__input'
              name='email'
              type='text'
            />
          </label>
          <label>
            <span className='register__input-name'>Пароль</span>
            <input
              {...register('password', formConfig.password)}
              className='register__input'
              name='password'
              type='password'
            />
          </label>
          <span className={'register__error' + (errors.name || errors.email || errors.password ? ' register__error_visible' : '' )}>Что то пошло не так...</span>
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
