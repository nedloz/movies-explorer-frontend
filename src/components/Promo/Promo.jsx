import './Promo.css';
import image from '../../images/promo-image.png';

function Promo() {
  return (
    <div className='promo'>
      <div className='promo__container' >
        <h1 className='promo__text'>Учебный проект студента факультета Веб-разработки.</h1>
        <img className='promo__image' src={image} alt='изображение на баннере'/>
      </div>
    </div>
  )
};

export default Promo;
