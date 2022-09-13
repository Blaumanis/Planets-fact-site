import {Link} from 'react-router-dom'

const planets = [
    "/mercury",
    "/venus",
    "/earth",
    "/mars",
    "/jupiter",
    "/saturn",
    "/uranus",
    "/neptune",
  ];

function MobilePlanets() {
  return (
    
    <div className='mobile-container'>
    <div className='mobile-wrapper'>
      {planets.map((planet) => (
        <Link to={planet} className="planet-name text-white font-bold text-lg tracking-widest uppercase minmd:hidden">{planet.substring(1)}
          <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8"><path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4"/></svg>
        </Link>
      ))}
    </div>
    </div>

  )
}

export default MobilePlanets
