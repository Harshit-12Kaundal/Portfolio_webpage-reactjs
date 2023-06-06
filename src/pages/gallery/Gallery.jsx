import React from 'react'
import HeaderImage from '../../images/header_bg_3.jpg'
import Header from '../../components/Header'
import './gallery.css'

const Gallery = () => {

  const gallerylength=15;
  const images=[];

  for(let i=1;i<=gallerylength;i++){
    images.push(require(`../../images/gallery${i}.jpg`))
  }

  return (
    <>
      <Header title='Our Gallery' image={HeaderImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores fugiat perspiciatis qui dolorem illo! Beatae dolore laboriosam autem consequuntur at!
      </Header>
      <section  className='gallery'>
        <div className='container gallery__container'>
          {
            images.map((images,index)=>{
              return<article>
                <img src={images} alt={`Gallery image ${index+1}`}/>
              </article>
            })
          }
        </div>
      </section>


    </>
  )
}

export default Gallery