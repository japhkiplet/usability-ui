import './card.scss'
import {Link} from 'react-router-dom'

const Card = ({item}) => {
  return (
    <div>
        <Link className='link' to={'/product/'}>
            <div className="card">
                <div className="image">
                    <img src={item.img} className='mainImg'/>
                    <img src={item.img2} className='secondImg'/>
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