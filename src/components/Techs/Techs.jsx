import './Techs.css';

function Techs() {
  return (
    <section className='techs'>
      <div className='techs__container'>
        <h2 className='techs__title'>Технологии</h2>
        <div className='techs__line' />
        <div className='techs__main'>
          <h3 className='techs__main-title'>7 технологий</h3>
          <p className='techs__main-description'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <div className='techs__main-blocks-container'>
            <p className='techs__main-block'>HTML</p>
            <p className='techs__main-block'>CSS</p>
            <p className='techs__main-block'>JS</p>
            <p className='techs__main-block'>React</p>
            <p className='techs__main-block'>Git</p>
            <p className='techs__main-block'>Express.js</p>
            <p className='techs__main-block'>mongoDB</p>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Techs;
