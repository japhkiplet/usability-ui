import './card.scss'
import {Link} from 'react-router-dom'

const Card = ({item}) => {
  return (
    <div>
        <Link className='link' to={'/product/'}>
            <div className="card">
                <div className="image">
                    <img src={item.img} alt="no pic"/>
                </div>
                <h2>{item.title}</h2>
                <h3>{item.price}</h3>
             <button>Shop now</button>
            </div>
        </Link>
    </div>
  )
}

export default Card