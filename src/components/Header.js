import {Link} from 'react-router-dom'
import {useState} from 'react';
import Planets from './Planets'
import MobilePlanets from './MobilePlanets';

const Header = () => { //destructuring props
  let mobileContainer = document.querySelector('.mobile-container')
  const [isShown, setIsShown] = useState(false);
  const handleClick = event => {
    setIsShown(current => !current);
    mobileContainer.classList.toggle('.body-overflow')
  };

  return (
    <header className='flex flex-row justify-around items-center pb-8 lg:flex-col lg:gap-4 md:!flex-row md:justify-between md:!gap-0 lg:pb-4'>
      <Link to="/" className="text-3xl font-antonio font-bold text-white tracking-tighter leading-9 md:!text-2xl md:z-10">THE PLANETS</Link>
      <ul className='flex gap-6'>
        <Planets />
        {isShown && <MobilePlanets />}
        <img onClick={handleClick} src='../images/icon-hamburger.svg' alt='menu-icon' className='hidden cursor-pointer md:block md:z-10'></img>
      </ul>
    </header>
  )
}

export default Header
