import './order.scss'

const Order = () => {
    return (
        <div className="order">
          <h1>Successful orders</h1>
          <table className="order-table">
            <thead>
              <tr>
                <th>User ID</th>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Shipping Address</th>
                <th>Total Amount</th>
                <th>Payment Intent</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                
                  <td>R012</td>
                  <td>12</td>
                  <td>GEL & BARSOAP</td>
                  <td>2 ITEMS</td>
                  <td>BOSTON</td>
                  <td>$40</td>
                  <td>IRFJK1290KJV</td>
                  <td style={{color:'green',fontSize:'24px'}}>Delivered</td>
                </tr>
                <tr>
                
                  <td>R013</td>
                  <td>13</td>
                  <td>GEL & BARSOAP</td>
                  <td>4 ITEMS</td>
                  <td>BOSTON</td>
                  <td>$67</td>
                  <td>IRFJK1790KJV</td>
                  <td style={{color:'red',fontSize:'24px'}}>Pending</td>
                </tr>
              
            </tbody>
          </table>
          <div className="info">
            <p>Dear esteam customer we have mailed you your order. Thankyou❤❤</p>
          </div>
        </div>
      );
}

export default Order