import './details.scss'
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Getsinglecountry from './Getsinglecountry';
import { ErrorBoundary } from 'react-error-boundary';




const ErrorBoundaryFallBack = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button 
      style={{
        backgroundColor: "red",
        color: "white",
        padding: "15px 38px",
        fontSize: "20px",
        margin: "20px",
        border: "none",
      }}
        title='Try again'
        onClick={resetErrorBoundary} 
      ></button>
    </div>
  )
}



const Details = () => {
  return (
    <header className='detail-header'>
      <Link className='backto-countries' to='/'>
        <FaLongArrowAltLeft className='arrow' />
        <p>Back</p>
      </Link>
      <ErrorBoundary FallbackComponent={ErrorBoundaryFallBack}>
        <Getsinglecountry />
      </ErrorBoundary>
      
    </header>
  )
}

export default Details
