import React, { useEffect, useState } from 'react'
import './Popular.css'

import Item from '../Item/Item'

const Popular = () => {

  const [propularProducts, setPropularProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/populer")
    .then((response) => response.json())
    .then((data) => setPropularProducts(data));
  }, []);


  return (
    <div className='popular'>
      <h1>Populur In Wild Animal</h1>
      <hr />
      <div className="popular-item">
        {propularProducts.map((item,i)=>{
            return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular
