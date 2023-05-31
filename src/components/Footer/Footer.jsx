import './Footer.css'

function Footer({
  onProfile,
  onAuthOrNotFound,
}) {

  if (onProfile || onAuthOrNotFound) {
    return;
  }

  return (
    <footer className='footer' >
      <div className='footer__container'>
        <p className='footer__title' >Учебный проект Яндекс.Практикум х BeatFilm.s</p>
        <div className='footer__line' />
        <div className='footer__text-container'>
          <p className='footer__date'>©
            {' '}
            {new Date().getFullYear()}
          </p>
          <div className='footer__links-container'>
            <a className='footer__link' href='https://practicum.yandex.ru'>Яндекс.Практикум</a>
            <a className='footer__link' href='https://github.com/nedloz'>Github</a>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer