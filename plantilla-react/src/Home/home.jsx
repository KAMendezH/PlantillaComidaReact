import './home.css'
import Hero from './hero.jsx'
import SeccionPaquetes from './paquetes.jsx'
function Home( {logo, paquetes, textoHero } ){
    return(
        <div className='contenedor_home'>
            <Hero textoHero={textoHero} logo={logo}/>
            <SeccionPaquetes  paquetesInfo={paquetes} />
        </div>
    )
}
export default Home