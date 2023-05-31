import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './NotFoundRoute.css';

function NotFoundRoute({ setOnNotFoundRoute, setAllPagesOff }) {
  useEffect(() => {
    setAllPagesOff();
    setOnNotFoundRoute(true);
  });

  return (
    <div className='not-found-route'>
      <p className='not-found-route__number'>404</p>
      <p className='not-found-route__text'>Страница не найдена</p>
      <Link to='/' className='not-found-route__link'>Назад</Link>
    </div>
  )
};

export default NotFoundRoute;
