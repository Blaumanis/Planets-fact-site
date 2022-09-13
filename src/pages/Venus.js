import Header from '../components/Header'
import Main from '../components/Main';
import Specifications from '../components/Specifications';
import {venusInfo, venusSpecs} from '../planetInfos'

function Venus() {
  return (
    <div className='p-4'>
        <Header />
        <Main info={venusInfo} 
              title={"VENUS"}
              description={`Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.`}
              link={"https://en.wikipedia.org/wiki/Venus#Surface_geology"}
              img={"/images/planet-venus.svg"}
              sImg={"/images/geology-venus.png"}
              fill={"#eda249"}
        />
        <Specifications specs={venusSpecs}/>
    </div>
  )
}

export default Venus
