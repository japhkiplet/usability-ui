import Card from '../component/Card'
import './list.scss'


const List = () => {

    const data = [
        {
            id:1,
            img:"https://images.pexels.com/photos/1615748/pexels-photo-1615748.jpeg?auto=compress&cs=tinysrgb&w=600",
            title:"Toothpaste Bits",
            price:" FROM $8 / month"
        },
        {
            id:2,
            img:"https://rukminim2.flixcart.com/image/450/500/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=90&crop=false",
            title:"Body Balm",
            price:"FROM $11 / month"
        },
        {
            id:3,
            img:"https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Cleansing Bar",
            price:"FROM $3 / month"
        },
        {
            id:4,
            img:"https://images.pexels.com/photos/2759783/pexels-photo-2759783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Deodorant",
            price:"FROM $11 / month"
        },
        {
            id:5,
            img:"https://images.pexels.com/photos/267242/pexels-photo-267242.jpeg?auto=compress&cs=tinysrgb&w=600",
            title:"Whitening Gel",
            price:"FROM $5 / month"
        },
    ]

  return (
    <div className="list">
        {data?.map(item=>(
            <Card item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default List