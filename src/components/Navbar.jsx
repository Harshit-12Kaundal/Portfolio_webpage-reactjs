import { useState } from 'react';
import {Link,NavLink} from 'react-router-dom'
import React from "react";
import Logo from '../images/logo.png'
import {links} from "../data"
import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'
import './navbar.css'


const Navbar=()=>{
    const [isNavshowing , setIsNavShowing]=useState(false);


    return(
        <nav>
            <div className="container nav__container">
                <Link to="/" className="logo" onClick={()=>setIsNavShowing(false)}>
                    <img src={Logo} alt="Nav Logo"/>
                </Link>
                <ul className={`nav__links ${isNavshowing? 'show__nav' : 'hide__nav'}`} onClick={()=>setIsNavShowing(prev=>!prev)}>
                    {
                        links.map(({name, path},index)=>{
                            return(
                                <li key={index}>
                                    <NavLink to={path} className={({isActive})=> isActive?'active-nav':''}>{name}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
                <button className='nav__toggle-btn' onClick={()=>setIsNavShowing(prev=>!prev)}>
                    {
                        isNavshowing?<MdOutlineClose/>:<GoThreeBars/>
                    }
                </button>
            </div>
        </nav>
    );
}

export default Navbar;