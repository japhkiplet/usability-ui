import { Link } from 'react-router-dom'
import Featured from '../component/Featured'
import Meaning from '../component/Meaning'
import './home.scss'

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="left">
          <h1>Anything <i>but</i>  routine.</h1>
          <p>Effective, eco-friendly daily essentials <br />made with clean ingredients.</p>
          <Link to='shop'>
           <button>Shop All</button>
          </Link>
        </div>
        <div className="right"></div>
      </div>
      <Featured/>
      <Meaning/>
    </div>
  )
}

export default Home