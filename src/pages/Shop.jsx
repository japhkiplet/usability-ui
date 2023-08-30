import { useState } from "react"
import { useParams } from "react-router-dom"
import List from "./List"
import './shop.scss'


const Shop = () => {
  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort, setSort] = useState(null)
  return (
    <div className="shop">
      <div className="wrapper">
        <div className="top">
          <h1>All Products</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <div className="filter">
              <h2>Product Categories</h2>
              <div className="inputItem">
                <input type="checkbox" id="1" value={1} />
                <label htmlFor="1">Oral Care</label>
              </div>
              <div className="inputItem">
                <input type="checkbox" id="2" value={2} />
                <label htmlFor="2">Personal care</label>
              </div>
              <div className="inputItem">
                <input type="checkbox" id="3" value={3} />
                <label htmlFor="3">Limited Edition</label>
              </div>
              <div className="inputItem">
                <input type="checkbox" id="4" value={4} />
                <label htmlFor="4">Community Favorites</label>
              </div>
            </div>
            <div className="filter">
              <h2>Filter by price</h2>
              <div className="inputItem">
                <span>0</span>
                <input type="range" min={0} max={1000} onChange={(e)=> setMaxPrice(e.target.value)} />
                <span>{maxPrice}</span>
              </div>
            </div>
            <div className="filter">
              <h2>Sort by</h2>
              <div className="inputItem">
                <input type="radio" id="asc" name="price" onChange={e=>setSort("asc")}/>
                <label htmlFor="asc">Price (Lowest First)</label>
              </div>
              <div className="inputItem">
                <input type="radio" id="desc" name="price" onChange={e=>setSort("desc")}/>
                <label htmlFor="desc">Price (Highest First)</label>
              </div>
            </div>
          </div>
          <div className="right">
            <List/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop