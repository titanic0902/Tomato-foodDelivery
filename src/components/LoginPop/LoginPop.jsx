import React, { useState } from 'react'
import './LoginPop.css'
import { assets } from '../../assets/asset'

const LoginPop = ({setShowLogin}) => {
    const [currState,setCurrState] = useState("Log in")
  return (
    <div className='login-popup'>
 <form  className="login-popup-container">
    <div className="login-popup-title">
        <h2>{currState}</h2>
        <img onClick={()=>setShowLogin(false)} src={assets.cross} alt="" />
    </div>
    <div className="login-popup-inputs">
        {currState==='Login'?<></>:<input type='text' placeholder='Your name' required/>}
        
        <input types="email" placeholder='your email' required/>
        <input types="password" placeholder='your password' required/>
    </div>
    <button>{currState==='sign-up'?"Create account":"Login"}</button>
    <div className="login-popup-condition">
        <input type="checkbox" required/>
        <p>By continuing, i agree to the terms of use and privacy policy</p>
    </div>
    {currState==="Login"
    ?<p>Create a new acount?<span onClick={()=>setCurrState("sign-up")}>Click Here</span></p>
    :<p>Create a new acount?<span onClick={()=>setCurrState("Login")}>Login Here</span></p>
    }
    


 </form>
    </div>
  )
}

export default LoginPop