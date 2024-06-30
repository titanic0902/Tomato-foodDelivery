import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/asset'

function AppDownload() {
  return (
    <div className='app-download' id ='app-download'>
        <p>For better Experience Download <br/>Tomato App</p>
        <div className="app-download-platform">
           <img src={assets.download} alt="" />
           <img src={assets.download2} alt="" /> 
        </div>

    </div>
  )
}

export default AppDownload