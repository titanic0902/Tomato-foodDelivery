import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/asset'
import {Link} from 'react-router-dom'
import { StoreContext } from '../../context/storeContext'




const Navbar = ({setShowLogin}) => {
    const [menu ,setMenu] = useState('menu')
    const{getTotalCartAmount} = useContext(StoreContext)
  return (
    <div className ='navbar'>
       <Link to='/' > <img src={assets.logo} alt='' className='logo'/></Link>
        <ul className ='navbar-menu'>
            <Link to ='/' onClick={()=>setMenu('Home')} className={menu==="Home"?"active":""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu('menu')}  className={menu==="menu"?"active":""}>menu</a>
            <a href='#app-download' onClick={()=>setMenu('mobile-app')}  className={menu==="mobile-app"?"active":""}>mobile-app</a>
            <a href='#footer'  onClick={()=>setMenu('Contact-us')}   className={menu==="Contact-us"?"active":""}>Contact-us</a>

        </ul>
        <div className="navbar-right">
        <img src={assets.searchic} alt=''/>
            <div className="navbar-search-icon">
         <Link to='/cart' > <img src={assets.basket} alt=''/></Link>
           <div className = {getTotalCartAmount()===0?"":'dot'}></div>

            </div>
            <button onClick ={()=>setShowLogin(true)}>sign-in</button>

        </div>
     

    </div>
  )
}

export default Navbar