import React, { useContext } from 'react'
import './CSS/HomeCategary.css'
import { MarketContext } from '../Context/MarketContext'
import dropdown_icon from '../Components/Assest/dropdown_icon.png'
import Item from '../Components/Item/Item'
import RareAnimals from './RareAnimals'
import RareBirds from './RareBirds'
import About from './About'




const HomeCategary = (props) => {
  const {all_product}= useContext(MarketContext);
  return (
    <div className='Home-Category'>
      <img className='HomeCategary-banner' src={props.banner} alt="" />
      {
  !(props.category === "bird" || props.category === "animal" || props.category === "about") && (
      <div className="HomeCategary-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 Product
        </p>
        <div className="HomeCategary-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      )
}

{/* Show RareAnimal section only for animal page */}
      {props.category === "animal" && (
        <div className="rare-animal-section">
          <RareAnimals />
        </div>
      )}

      {/* Show RareAnimal section only for animal page */}
      {props.category === "bird" && (
        <div className="rare-bird-section">
          <RareBirds />
        </div>
      )}
      {props.category === "about" && (
        <div className="about-section">
          <About />
        </div>
      )}



      <div className="HomeCategary-Products">
        {all_product.map((item,i)=>{
          if(props.category===item.category){
            return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="HomeCategary-loadmore">
        Explore More
      </div>
    </div>

    
  )

}


export default HomeCategary
