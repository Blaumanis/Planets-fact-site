import Header from '../components/Header'
import Main from '../components/Main';
import Specifications from '../components/Specifications';
import {saturnInfo, saturnSpecs} from '../planetInfos'

function Saturn() {
  return (
    <div className='p-4'>
      <Header />
      <Main info={saturnInfo} 
            title={"SATURN"}
            description={`Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.`}
            link={"https://en.wikipedia.org/wiki/Saturn"}
            img={"/images/planet-saturn.svg"}
            sImg={"/images/geology-saturn.png"}
            fill={"#cd5120"}
      />
      <Specifications specs={saturnSpecs}/>
  </div>
  )
}

export default Saturn
