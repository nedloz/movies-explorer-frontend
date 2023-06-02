import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import './Login.css';
import logo from '../../images/logo.svg';
import { emailPattern } from '../../utils/constants';

const formConfig = {
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

function Login({
  setOnLogin,
  setAllPagesOff,
}) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    setAllPagesOff();
    setOnLogin(true);
  });

  const onSubmit = () => {
    // navigate('/movies')
    console.log('navigate movies')
  }

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
          onSubmit={handleSubmit(onSubmit)}
          autoComplete='off'
        >
          <label>
            <span className='login__input-name'>E-mail</span>
            <input
              {...register('email', formConfig.email)}
              className='login__input'
              type='text'
              name='email'
            />
          </label>
          <label>
            <span className='login__input-name'>Пароль</span>
            <input
              {...register('password', formConfig.password)}
              className='login__input'
              type='password'
              name='password'
            />
          </label>
          <span className={'login__error' + (errors.email || errors.password ? ' login__error_visible' : '')}>Что то пошло не так...</span>
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
