import Header from '../components/Header'
import Main from '../components/Main';
import Specifications from '../components/Specifications';
import {earthInfo, earthSpecs} from '../planetInfos'

function Earth() {
  return (
    <div className='p-4'>
      <Header />
      <Main info={earthInfo} 
            title={"EARTH"}
            description={`Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.`}
            link={"https://en.wikipedia.org/wiki/Earth#Surface"}
            img={"/images/planet-earth.svg"}
            sImg={"/images/geology-earth.png"}
            fill={"#6d2ed5"}
      />
      <Specifications specs={earthSpecs}/>
  </div>
  )
}

export default Earth
