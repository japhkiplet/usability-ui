import { Link } from 'react-router-dom'
import './profile.scss'

const Profile = () => {
  return (
    <div className='profile'>
        <div className="info">
            <h1>John Doe</h1>
            <Link className='link' to='/order'>My orders</Link>
            <h1>Settings</h1>
        </div>
    </div>
  )
}

export default Profile