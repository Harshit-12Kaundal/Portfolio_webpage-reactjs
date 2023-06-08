import React from 'react'
import './plans.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_4.jpg'
import Card from '../../UI/Card'
import {plans} from '../../data'

const Plans = () => {
  return(
    <>
      <Header title="Membeship Plans" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quibusdam nostrum repudiandae necessitatibus error officiis molestiae odio quisquam delectus ut?
      </Header>

      <section className="plans">
        <div className="container plans__container">
          {
            plans.map(({id,name,desc,price,features})=>{
              return <Card key={id} className={'plans'}>
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price}`}</h1><h2>/mo</h2>
                <h4>Features</h4>
                {
                  features.map(({feature,available},index) =>{
                    return <p key={index} className={!available?'disabled':''}>{feature}</p>
                  })
                }
                <button className='btn lg'>Choose plan</button>
              </Card>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Plans