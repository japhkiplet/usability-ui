import { Link } from 'react-router-dom'
import './meaning.scss'

const Meaning = () => {
  return (
    <div className="meaning">
        <h1>Bite stands for <br /><i>Because It's The Earth</i></h1>
        <p>
        We make daily routines better for your body and <br /> better for our planet — because small changes can <br /> make a big impact.
        </p>
        <Link to='/about' className='link'>
          <button>About Us</button>
        </Link>


    </div>
  )
}

export default Meaning