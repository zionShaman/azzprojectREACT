// eslint-disable-next-line
import React, { Component } from 'react';
import bottom from "../imgs/logo1.jpg"
import top from "../imgs/logo2.jpg"

export default function Header(){
  return(
    <header>
      <span class="logo">
       EYE
      </span>
      <div id="cf">
          <img class="bottom" src={bottom} height='85px' width='85px' alt='logo'/>
          <img class="top" src={top}  height='85px' width='85px' alt='logo' />
      </div>
    </header>   
  )
}