import './AboutProject.css'

function AboutProject() {
  return (
    <div className='about-project'>
      <div className='about-project__container'>
        <h2 className='about-project__title' >О проекте</h2>
        <div className='about-project__line' />
        <div className='about-project__info-container' >
          <div>
            <h3 className='about-project__info-title' >Дипломный проект включал 5 этапов</h3>
            <p className='about-project__info-description'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div>
            <h3 className='about-project__info-title' >На выполнение диплома ушло 5 недель</h3>
            <p className='about-project__info-description' >У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className='about-project__graph-container' >
          <div className='about-project__graph-title-1'>1 неделя</div>
          <div className='about-project__graph-title-2'>4 недели</div>
          <div className='about-project__graph-description'>Back-end</div>
          <div className='about-project__graph-description'>Front-end</div>
        </div>
      </div>
    </div>
  )
}

export default AboutProject