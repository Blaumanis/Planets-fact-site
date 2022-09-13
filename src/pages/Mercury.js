import Header from '../components/Header'
import Main from '../components/Main';
import Specifications from '../components/Specifications';
import {mercuryInfo, mercurySpecs} from '../planetInfos'

function Mercury() {
  return (
    <div className='p-4'>
        <Header />
        <Main info={mercuryInfo} 
              title={"MERCURY"}
              description={`Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.`}
              link={"https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology"}
              img={"/images/planet-mercury.svg"}
              sImg={"/images/geology-mercury.png"}
              fill={"#419EBB"}
        />
        <Specifications specs={mercurySpecs}/>
    </div>
  )
}

export default Mercury