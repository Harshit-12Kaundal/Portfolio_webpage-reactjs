import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link tp='/' className='logo'>
                    <img src={Logo} alt='Footer Logo'/>
                </Link>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error distinctio labore recusandae aut. Laudantium suscipit nulla ipsum provident dolores autem!
                </p>
                <div className="footer__socials">
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" ><FaLinkedin/></a>
                    <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" ><FaFacebookF/></a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" ><AiOutlineTwitter/></a>
                    <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" ><AiFillInstagram/></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainer">Trainer</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Insight</h4>
                <Link to="/about">Blog</Link>
                <Link to="/plans">Case Studies</Link>
                <Link to="/trainer">Events</Link>
                <Link to="/gallery">Communities</Link>
                <Link to="/contact">FAQs</Link>
            </article>
            <article>
                <h4>Get in Touch</h4>
                <Link to="/conatct">Contact us</Link>
                <Link to="/s">Support</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small>2022 HARSHIT</small>
        </div>
    </footer>
  )
}

export default Footer