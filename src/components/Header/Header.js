import React from 'react'
import header_logo from '../../assets/header_logo.png'

const Header= () =>{
  return(
    <div className='headerBox'>
      <div className = "header">
        <img src={header_logo} width="35" height="35"></img>
        <h2>Houser</h2>
      </div>
    </div>
  )
}

export default Header;