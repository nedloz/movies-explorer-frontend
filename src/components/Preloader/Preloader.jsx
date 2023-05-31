import { useState } from 'react';

import './Preloader.css';

function Preloader() {
  const [isPreloaderActive, setIsPreloaderActive] = useState(false);

  if (isPreloaderActive) {
    setTimeout(() => {setIsPreloaderActive(false)}, 3000);
    return (
      <div className="preloader_active">
        <div className="preloader__container_active">
          <span className="preloader__round"></span>
        </div>
      </div>
    )
  };

  return (
    <div className='preloader'>
      <div className='preloader__container'>
        <input type='button' className='preloader__button' value='Еще' onClick={() => setIsPreloaderActive(true)} />
      </div>
    </div>
  )
};

export default Preloader;
