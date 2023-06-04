import React from 'react'
import'./about.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'


const About = () => {
  return(
    <>
      <Header title="About us" image={HeaderImage}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores molestiae aspernatur qui architecto aliquid voluptatum a nam consectetur veritatis eaque!
      </Header>

      <section className='about__story'>
        <div className="container about__story-container">
          <div className='about__section-image'> 
            <img src={StoryImage} alt='Our Story Image'/>
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quis nemo ullam quod, in earum.
            </p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea ad facere nam? Cumque ullam accusamus fuga architecto porro qui!
            </p>
            
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores tempore obcaecati suscipit enim ipsa libero laudantium laborum repellat, natus nemo?
            </p>
            
          </div>
        </div>
      </section>


      <section className='about__Vision'>
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quis nemo ullam quod, in earum.
            </p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea ad facere nam? Cumque ullam accusamus fuga architecto porro qui!
            </p>
          </div>
          <div className='about__section-image'> 
            <img src={VisionImage} alt='Our Vision Image'/>
          </div>
        </div>
      </section>


      <section className='about__mission'>
        <div className="container about__mission-container">
          <div className='about__section-image'> 
            <img src={MissionImage} alt='Our mMission Image'/>
          </div>
          <div className="about__sectiom-content">
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quis nemo ullam quod, in earum.
            </p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea ad facere nam? Cumque ullam accusamus fuga architecto porro qui!
            </p>
            
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores tempore obcaecati suscipit enim ipsa libero laudantium laborum repellat, natus nemo?
            </p>
            
          </div>
        </div>
      </section>


    </>
  )
}
export default About