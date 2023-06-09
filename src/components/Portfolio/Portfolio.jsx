import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <div className='portfolio__container'>
        <h2 className='portfolio__title'>Портфолио</h2>
        <ul className='portfolio__list'>
          <li className='portfolio__list-item'>
            <a className='portfolio__link' target='_blank' rel="noreferrer" href='https://nedloz.app.nomoredomains.monster/main'>
              <p className='portfolio__link-text'>Статичный сайт</p>
              <div className='portfolio__link-arrow' />
            </a>
            <div className='portfolio__line' />
          </li>
          <li className='portfolio__list-item'>
            <a className='portfolio__link' target='_blank' rel="noreferrer" href='https://nedloz.app.nomoredomains.monster/main'>
              <p className='portfolio__link-text'>Адаптивный сайт</p>
              <div className='portfolio__link-arrow' />
            </a>
            <div className='portfolio__line' />
          </li>
          <li className='portfolio__list-item'>
            <a className='portfolio__link' target='_blank' rel="noreferrer" href='https://nedloz.app.nomoredomains.monster/main'>
              <p className='portfolio__link-text'>Одностраничное приложение</p>
              <div className='portfolio__link-arrow' />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
