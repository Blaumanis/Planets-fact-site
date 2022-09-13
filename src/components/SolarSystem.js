import {Link} from 'react-router-dom'


function SolarSystem() {
  return (
    <main className="solar-system">
      <Link to="/neptune" className="neptune-circle"></Link>
      <Link to="/uranus" className="uranus-circle"></Link>
      <Link to="/saturn" className="saturn-circle"></Link>
      <Link to="/jupiter" className="jupiter-circle"></Link>
      <Link to="/mars" className="mars-circle"></Link>
      <Link to="/earth" className="earth-circle"></Link>
      <Link to="/venus" className="venus-circle"></Link>
      <Link to="/mercury" className="mercury-circle"></Link>
      <Link to="#" className="sun circle"></Link>
    </main>
    )     
}

export default SolarSystem
