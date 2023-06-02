import { useState } from 'react';

import './Preloader.css';

function Preloader() {
  const [isPreloaderActive, setIsPreloaderActive] = useState(false);

  if (isPreloaderActive) {
    setTimeout(() => {setIsPreloaderActive(false)}, 3000);
    return (
      <section className="preloader preloader_type_active">
        <div className="preloader__container preloader__container_type_active">
          <span className="preloader__round"></span>
        </div>
      </section>
    )
  };

  return (
    <section className='preloader preloader_type_unactive'>
      <div className='preloader__container preloader__container_type_unactive'>
        <input type='button' className='preloader__button' value='Еще' onClick={() => setIsPreloaderActive(true)} />
      </div>
    </section>
  )
};

export default Preloader;
