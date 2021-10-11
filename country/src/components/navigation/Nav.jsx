import { FaMoon } from 'react-icons/fa';
import './nav.scss';



const Nav = () => {
  return (
    <nav className='nav-countries'>
      <div className='logo-countries'>Where in the world?</div>
      <div className='darkmode-countries'>
        <FaMoon />
        <p className='darky-text'>Darkmode</p>
      </div>
    </nav>
  )
}

export default Nav;
