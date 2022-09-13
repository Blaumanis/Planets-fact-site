import Header from '../components/Header'
import Main from '../components/Main';
import Specifications from '../components/Specifications';
import {jupiterInfo, jupiterSpecs} from '../planetInfos'

function Jupiter() {
  return (
    <div className='p-4'>
      <Header />
      <Main info={jupiterInfo} 
            title={"JUPITER"}
            description={`Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.`}
            link={"https://en.wikipedia.org/wiki/Jupiter#Great_Red_Spot_and_other_vortices"}
            img={"/images/planet-jupiter.svg"}
            sImg={"/images/geology-jupiter.png"}
            fill={"#d83a34"}
      />
      <Specifications specs={jupiterSpecs}/>
  </div>
  )
}

export default Jupiter
