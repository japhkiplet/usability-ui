import Card from "./Card"
import './featured.scss'


const Featured = () => {

    const data = [
        {
            id:1,
            img:"https://bitetoothpastebits.com/cdn/shop/files/CCC_PDP_Carousel_Bar_04_c25a2108-d0db-4435-ba93-f839f6d17211_900x.jpg?v=1683058050",
            img2:"https://bitetoothpastebits.com/cdn/shop/files/Deo-PDP-clean-confidence_731x.png?v=1681436367",
            title:"Toothpaste Bits",
            price:" FROM $8 / month"
        },
        {
            id:2,
            img:"https://bitetoothpastebits.com/cdn/shop/files/BB_PDP_Carousel_Mobile_Hero-Carousel-Retina-05_a57339f7-7646-4d03-aea1-5be7ceb00419_720x.webp?v=1683241225",
            img2:"https://bitetoothpastebits.com/cdn/shop/files/Deo-Carousel-05_1_900x.webp?v=1682999634",
            title:"Body Balm",
            price:"FROM $11 / month"
        },
        {
            id:3,
            img:"https://bitetoothpastebits.com/cdn/shop/files/21.05.27-Mint-Subscription-smaller_900x.webp?v=1683059433",
            img2:"https://bitetoothpastebits.com/cdn/shop/files/Deo-PDP-clean-confidence_731x.png?v=1681436367",
            title:"Cleansing Bar",
            price:"FROM $3 / month"
        },
        {
            id:4,
            img:"https://bitetoothpastebits.com/cdn/shop/files/Deo-Carousel-05_1_900x.webp?v=1682999634",
            img2:"https://bitetoothpastebits.com/cdn/shop/files/Deo-PDP-packaging_1500x.png?v=1681516616",
            title:"Deodorant",
            price:"FROM $11 / month"
        },
        {
            id:5,
            img:"https://bitetoothpastebits.com/cdn/shop/files/Deo-PDP-howto_755x.png?v=1681436361",
            img2:"https://bitetoothpastebits.com/cdn/shop/files/Deo-PDP-feature-module_1507x.png?v=1681436366",
            title:"Whitening Gel",
            price:"FROM $5 / month"
        },
    ]
  return (
    <div className="featured">
        {data.map(item =>(
            <Card item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Featured







