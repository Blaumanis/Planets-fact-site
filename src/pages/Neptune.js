import Header from '../components/Header'
import Main from '../components/Main';
import Specifications from '../components/Specifications';
import {neptuneInfo, neptuneSpecs} from '../planetInfos'

function Neptune() {
  return (
    <div className='p-4'>
      <Header />
      <Main info={neptuneInfo} 
            title={"NEPTUNE"}
            description={`Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.`}
            link={"https://en.wikipedia.org/wiki/Neptune"}
            img={"/images/planet-neptune.svg"}
            sImg={"/images/geology-neptune.png"}
            fill={"#2d68f0"}
      />
      <Specifications specs={neptuneSpecs}/>
  </div>
  )
}

export default Neptune
