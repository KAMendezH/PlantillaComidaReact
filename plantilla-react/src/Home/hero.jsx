import './hero.css'
function Hero( {textoHero, logo }){
    return(
        <div className='contenedor_hero'>
            {/* <div className='space-header'></div> */}
            <main className='main__hero'>
                <div className='animated-content div__animate'>
                    <h1>
                        {textoHero.slice(0, 20).toUpperCase()}
                        <br/>
                        {textoHero.slice(20, 34).toUpperCase()}
                        <span className='h1__hero'>{` ${textoHero.slice(35, 38).toUpperCase()}`}</span>
                        {textoHero.slice(38).toUpperCase()}
                    </h1>
                </div>
            </main>
            <div className='div__hero'>
                <img className="logo__hero animated-img" src={logo} alt="Pizza" />
            </div>
        </div>
    )
}

export default Hero