import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import { Link } from 'react-router-dom'
import './navbar.scss'
import { useState } from 'react';
import Cart from './Cart';

const Navbar = () => {
    const [open , setOpen] = useState(false)
    return (
        <div className="navbar">
            <div className="wrapper">

                <div className="left">
                    <div className="item">
                        <Link className='link' to='/shop'>Shop</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/about'>About</Link>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <Link className='link' to='/sustainability'>Sustainability</Link>
                    </div>
                </div>
                <div className="center">
                    <h1>Bite</h1>
                </div>
                <div className="right">
                    <div className="icons">
                        <PersonOutlineOutlinedIcon />
                        <div className="cartIcon" onClick={()=>setOpen(!open)}>
                            <ShoppingCartIcon />
                            <span>2</span>
                        </div>
                    </div>
                </div>
            </div>
            {open && <Cart/>}
        </div>
    )
}

export default Navbar