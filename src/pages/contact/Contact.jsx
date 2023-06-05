import React from 'react'
import './contact.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import{BsMessenger} from 'react-icons/bs'
import{IoLogoWhatsapp} from 'react-icons/io'
import {MdEmail} from 'react-icons/md'


const Contact = () => {
  return (
    <>
      <Header title="Get in Touch" image={HeaderImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur fugit rerum temporibus quo impedit accusantium minus omn?
      </Header>

      <section className="contact">
        <div className='container contact__container'>
          <div className="contact__wrapper">
            <a href='mailto:zyx@gmail.com' target='_blank' rel='noopener noreferrer'><MdEmail/></a>
            <a href='http:/m.me/ernest_achiever' target='_blank' rel='noopener noreferrer'><BsMessenger/></a>
            <a href='https://wa.me/+242424242' target='_blank' rel='noopener noreferrer'><IoLogoWhatsapp/></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact