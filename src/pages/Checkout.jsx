import  DeleteOutlinedIcon from '@mui/icons-material/DeleteOutline';
import './checkout.scss'
import Form from './Form';

const Checkout = () => {
    const data = [
        {
            id:1,
            img:"https://bitetoothpastebits.com/cdn/shop/files/CCC_PDP_Carousel_Bar_04_c25a2108-d0db-4435-ba93-f839f6d17211_900x.jpg?v=1683058050",
            title:"Toothpaste Bits",
            desc:"Made with clean, vegan-friendly ingredients whitening Mint toothpaste bits will keep your teeth healthy and our oceans clean. First shipment comes in our refillable glass jar",
            price:" FROM $8 / month"
        },
        {
            id:2,
            img:"https://bitetoothpastebits.com/cdn/shop/files/BB_PDP_Carousel_Mobile_Hero-Carousel-Retina-05_a57339f7-7646-4d03-aea1-5be7ceb00419_720x.webp?v=1683241225",
            title:"Body Balm",
            desc:"Made with clean, vegan-friendly ingredients whitening Mint toothpaste bits will keep your teeth healthy and our oceans clean. First shipment comes in our refillable glass jar",
            price:"FROM $11 / month"
        },
    ];
    return (
        <div className='checkout'>
            <div className='left'>
                <div className='product'>
                    <h1>Products in your cart</h1>
                    {data?.map(item=>(
                        <div className="item" key={item.id}>
                            <img src={item.img} alt="" />
                            <div className="details">
                                <h1>{item.title}</h1>
                                <p>{item.desc?.substring(0,100)}</p>
                                <div className="price">
                                    1 x {item.price}
                                </div>
                            </div>
                            <DeleteOutlinedIcon className='delete'/>
                        </div>
                    ))}
                    <div className="total">
                        <span>SUBTOTAL</span>
                        <span style={{color:'red', fontSize:'30', fontWeight: '600'}}>$40</span>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="form">
                        <Form/>
                </div>

            </div>
        </div>
      )
}

export default Checkout