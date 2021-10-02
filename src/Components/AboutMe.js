import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const ProfileIntro = styled.div`
 
  h3{
    font-size: 25px;
    margin-top: 1em;
  }
  p{
    font-size: 23px;
  }
  button{
    width: 250px;
    height: 40px;
    border-radius: 17px;
    border: none;
    background: cadetblue;
    color: white;
    font-size: 18px;
    margin: 0 auto;
    /* margin-inline: auto; */
    display: list-item;
  }
  #profile{
        box-shadow: -50px 50px cadetblue;
    }
`

export default function AboutMe() {
    
    
    return (
       
        <ProfileIntro>
           <Container>
            <Row>
                <Col xs={12} lg={5}>
            <StaticImage src="../images/profile.png"alt="profile"layout="Constrained" id="profile"/>
            </Col>
            
            <Col xs={12} lg={7}>
            <div>
                <h3>Hi, I'm Alexis, Freelance full-stack web<br/>
                 developer based in France.As a freelancer,
                  I'm working for clients<br/> around the world.</h3>
                     <p>
                     Being a big proponent of the JAMstack I preferably work with React JS and Node JS, accompanied by a serverless architecture.
                    </p>
                    <p>Interesting ?</p>
                    <p>If you need a new custom-made website, a unique<br/>
                     web shop or have an idea of an engaging web<br/>
                      application: Please feel free to contact me and we'll talk<br/>
                       about the details!
                     </p>
            </div>
            </Col>
            </Row>
            </Container>
            <button>Read more...</button>
            
        </ProfileIntro>
        
    )
}
