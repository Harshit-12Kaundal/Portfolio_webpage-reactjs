import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../images/main_header.png'

function MainHeader() {
  return (
    <header className='main__header'>
      <div className='conatiner main__header-container'>
        <div className='main__header-left'>
          <h4>100DaysofWorkOut</h4>
          <h1>Join The Legends of the fitness World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse earum quod aut. Dolores, explicabo officia.
          </p>
          <Link to="/plans" className='btn lg'>Get Started</Link>
        </div>
        <div className='main__header-right'>
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Main header"/>
          </div>
        </div>
      </div> 
    </header>
  )
}

export default MainHeader