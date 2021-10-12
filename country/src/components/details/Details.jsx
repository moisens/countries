import './details.scss'
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const Details = () => {
  return (
    <header className='detail-header'>
      <Link className='backto-countries' to='/'>
        <FaLongArrowAltLeft className='arrow' />
        <p>Back</p>
      </Link>
      <div className='detail-country'>
        <div className='flag-desciption'>
          <img src="" alt="" />
        </div>
        <div>
        <div className='country-container'>
          <div className='country-description'>
            <h2>Belgium</h2>
            <p><span className='country-title'>Native Name: </span>Belgium</p>
            <p><span className='country-title'>Population: </span>11 420 689</p>
            <p><span className='country-title'>Region: </span>Europe</p>
            <p><span className='country-title'>Sub Region: </span>Western Europe</p>
            <p><span className='country-title'>Capital: </span>Brussels</p>
          </div>
          <div className='country-description litle-space'>
            <p><span className='country-title'>Top Level Domain: </span>be</p>
            <p><span className='country-title'>Currencies: </span>Euro</p>
            <p><span className='country-title'>Languages: </span>French, Dutch, German</p>
          </div>
        </div>
        <div className='border-countries'>
        <p>
          <span className='country-title'>Border Countries: </span>
          <span className='countries-around'>France</span>
          <span className='countries-around'>Germany</span>
          <span className='countries-around'>Netherlands</span>
          
        </p>
        </div>
        </div>
      </div>
    </header>
  )
}

export default Details
