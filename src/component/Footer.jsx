import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h2>Give your inbox a <i>refresh.</i></h2>
          <span>10% off your first order when you sign up for <br /> our plastic-free and spam-free emails.</span>
        </div>
        <div className="item">
          <div className="form">
            <input type="text"  placeholder='Enter email address'/>
            <button>Subscribe</button>
          </div>
          <div className="social">
            <InstagramIcon />
            <LinkedInIcon />
            <TwitterIcon />
            <FacebookIcon />
          </div>
        </div>
      </div>
      <div className="center">
        <div className="item">
          <h1>SHOP</h1>
          <span>All Products</span>
          <span>Oral Care</span>
          <span>Personal Care</span>
          <span>Bundles</span>

        </div>
        <div className="item">
          <h1>ABOUT</h1>
          <span>Ingredients</span>
          <span>Sustainability</span>
          <span>About Us</span>
          <span>FAQ</span>
        </div>
        <div className="item">
          <h1>MORE</h1>
          <span>Wholesale</span>
          <span>Store Locator</span>

        </div>
        <div className="item">

        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <p>© 2023 Bite. All Rights Reserved.</p>
        </div>
        <div className="right">
          <span>hello@bitetoothpastebits.com</span>
          <span>Privacy policy</span>
          <span>Terms of service</span>
          <span>Shipping</span>
        </div>
      </div>
    </div>
  )
}

export default Footer