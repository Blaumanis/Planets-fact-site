import Header from '../components/Header'
import Main from '../components/Main';
import Specifications from '../components/Specifications';
import {marsInfo, marsSpecs} from '../planetInfos'

function Mars() {
  return (
    <div className='p-4'>
      <Header />
      <Main info={marsInfo} 
            title={"MARS"}
            description={`Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".`}
            link={"https://en.wikipedia.org/wiki/Mars#Surface_geology"}
            img={"/images/planet-mars.svg"}
            sImg={"/images/geology-mars.png"}
            fill={"#d14c32"}
      />
      <Specifications specs={marsSpecs}/>
  </div>
  )
}

export default Mars;
