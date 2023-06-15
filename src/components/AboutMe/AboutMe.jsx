import './AboutMe.css';
import studentpic from '../../images/foto.jpeg';

function AboutMe() {
  return (
    <section className='about-me'>
      <div className='about-me__container'>
        <h2 className='about-me__title'>Студент</h2>
        <div className='about-me__line' />
        <div className='about-me__main'>
          <div className='about-me__student-container'>
            <h3 className='about-me__student-name'>Андрей</h3>
            <p className='about-me__student-description'>Фронтенд-разработчик, 16 лет</p>
            <p className='about-me__student-about'>Я родился и живу в Москве, перешел в 11 класс. Я люблю слушать музыку, а ещё увлекаюсь бегом. Начал кодить год назад. После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и стал независим от родителей.</p>
            <a className='about-me__link' href='https://github.com/nedloz' target='_blank' rel="noreferrer">Github</a>
          </div>
          <img className='about-me__image' src={studentpic} alt='фотография студента' />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
