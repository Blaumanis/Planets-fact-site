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

function Planets() {
  return (
    <>
      {planets.map((planet) => (
        <Link to={planet} className="planet-name text-white font-medium uppercase md:hidden">{planet.substring(1)}</Link>
      ))}
    </>
  );
}

export default Planets;
