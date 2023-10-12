import { useNavigate } from 'react-router-dom'
import './success.scss'

const Success = () => {
    const navigate = useNavigate();
    return (
      <div className="success">
        <h1>payment made successfully</h1>
        <h2>welcome again</h2>
        <button className='check' onClick={() => navigate('/')}>Go To Home</button>
     </div>
    )
  
}

export default Success