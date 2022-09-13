import Header from '../components/Header'
import Main from '../components/Main';
import Specifications from '../components/Specifications';
import {uranusInfo, uranusSpecs} from '../planetInfos'

function Uranus() {
  return (
    <div className='p-4'>
      <Header />
      <Main info={uranusInfo} 
            title={"URANUS"}
            description={`Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.`}
            link={"https://en.wikipedia.org/wiki/Uranus"}
            img={"/images/planet-uranus.svg"}
            sImg={"/images/geology-uranus.png"}
            fill={"#1ec142"}
      />
      <Specifications specs={uranusSpecs}/>
  </div>
  )
}

export default Uranus

