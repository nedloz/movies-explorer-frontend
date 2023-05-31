import './Portfolio.css';

function Portfolio() {
  return (
    <div className='portfolio'>
      <div className='portfolio__container'>
        <h2 className='portfolio__title'>Портфолио</h2>
        <div>
          <a className='portfolio__link' href='https://nedloz.app.nomoredomains.monster/main'>
            <p className='portfolio__link-text'>Статичный сайт</p>
            <div className='portfolio__link-arrow'/>
          </a>
          <div className='portfolio__line'/>
          <a className='portfolio__link' href='https://nedloz.app.nomoredomains.monster/main'>
            <p className='portfolio__link-text'>Адаптивный сайт</p>
            <div className='portfolio__link-arrow'/>
          </a>
          <div className='portfolio__line' />
          <a className='portfolio__link' href='https://nedloz.app.nomoredomains.monster/main'>
            <p className='portfolio__link-text'>Одностраничное приложение</p>
            <div className='portfolio__link-arrow'/>
          </a>
        </div>
      </div>
    </div>
  )
};

export default Portfolio;
