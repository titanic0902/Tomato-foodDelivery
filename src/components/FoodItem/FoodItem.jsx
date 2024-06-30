import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/asset'
import { StoreContext } from '../../context/storeContext'

const FoodItem = ({id,name,price,description,image}) => {

  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);
  return (
    <div className='food-item'>
        <div className="food-img-container">
            <img className='food-item-image' src={image} alt=""/>
            {!cartItems[id]
            ?<img className = 'add' onClick={()=>addToCart(id)} src={assets.addicon} alt=""/>
            :<div className ='food-item-counter'>
              <img onClick={()=>removeFromCart(id)} src={assets.removeicon} alt=""/>
              <p>{cartItems[id]}</p>
              <img onClick={()=>addToCart(id)} src={assets.greenicon} alt=""/>

              </div>      
               }



        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating} alt=""/>
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>




    </div>
  )
}

export default FoodItem