import './details.scss'
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Getsinglecountry from './Getsinglecountry';



const Details = () => {
  return (
    <header className='detail-header'>
      <Link className='backto-countries' to='/'>
        <FaLongArrowAltLeft className='arrow' />
        <p>Back</p>
      </Link>
      <Getsinglecountry />
    </header>
  )
}

export default Details
