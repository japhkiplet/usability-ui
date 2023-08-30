import { useState } from "react"
import './product.scss'

import StarIcon from '@mui/icons-material/Star';

const Product = () => {
  const [selectedImg,setSelectedImg] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const images= [
    "https://bitetoothpastebits.com/cdn/shop/files/21.05.27-Mint-Subscription-smaller_900x.webp?v=1683059433",
    "https://bitetoothpastebits.com/cdn/shop/files/BB_PDP_Carousel_Mobile_Hero-Carousel-Retina-05_a57339f7-7646-4d03-aea1-5be7ceb00419_900x.webp?v=1683241225",
    "https://bitetoothpastebits.com/cdn/shop/files/CCC_PDP_Carousel_Bar_04_c25a2108-d0db-4435-ba93-f839f6d17211_900x.jpg?v=1683058050",
    "https://bitetoothpastebits.com/cdn/shop/files/Deo-Carousel-05_1_900x.webp?v=1682999634",
    "https://bitetoothpastebits.com/cdn/shop/files/Deo-PDP-howto_755x.png?v=1681436361",
  ];

  const handleAddToCart = () => {
    alert("Added to Cart")
  }

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="1" onClick={e=>setSelectedImg(0)}/>
          <img src={images[1]} alt="2" onClick={e=>setSelectedImg(1)}/>
          <img src={images[2]} alt="3" onClick={e=>setSelectedImg(2)}/>
          <img src={images[3]} alt="4" onClick={e=>setSelectedImg(3)}/>
          <img src={images[4]} alt="5" onClick={e=>setSelectedImg(4)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="new" />
        </div>
      </div>
      <div className="right">
        <h1>MINT</h1>
        <h3><i>Toothpaste Bits</i></h3>
        <h4>FLUORIDE-FREE Made with nHap</h4>
        <div className="rating">
          <div className="stars">
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
          </div>
          <div className="desc">
            <h3>20,605 Reviews</h3>
          </div>
        </div>
        <div className="quantity">
          <button onClick={() => setQuantity(prev=>prev===1 ? 1 : prev-1)}>-</button>
          {quantity}
          <button onClick={() => setQuantity(prev=>prev+1)}>+</button>
        </div>
        <hr />
        <p>Made with clean, vegan-friendly ingredients whitening Mint toothpaste bits will keep your teeth healthy and our oceans clean. First shipment comes in our refillable glass jar. All following shipments come in refill pouches.</p>
        <div className="moreInfor">
          <h1><b>Includes:</b></h1>
          <ul>
            <li>248 bits (four-month supply). Auto replenishes.</li>
          </ul>
        </div>
        
          <button className="add" onClick={handleAddToCart}>
            <h3>add to Cart</h3>
            <div className="second">
              <span>$32</span>
              <span className="price">$48</span>
            </div>
          </button>
        
      </div>
    </div>
  )
}

export default Product