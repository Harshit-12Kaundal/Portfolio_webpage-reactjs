import Image from '../images/values.jpg'
import SectionHead from './SectionHead'
import {GiCutDiamond} from 'react-icons/gi'
import React from 'react'
import {values} from '../data'
import Card from '../UI/Card'


const Values = () => {
  return (
    <section className='values'>
        <div className="container values__container">
            <div className="values__left">
                <div className='values__image'>
                    <img src={Image} alt='values Image'/>
                </div>
            </div>
            <div className="values__right">
                <SectionHead icon={<GiCutDiamond/>} title='values'/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum fuga minus facere? Rem aliquid nobis nostrum consectetur odio placeat. Ipsa voluptatum ducimus, ratione accusantium at quas voluptatibus officiis deleniti porro.
                </p>
                <div className="values__wrapper">
                    {
                        values.map(({id,icon,title,desc})=>{
                            return(
                                <Card  key={id} className="values__value">
                                    <span>{icon}</span>
                                    <h4>{title}</h4>
                                    <small>{desc}</small>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values