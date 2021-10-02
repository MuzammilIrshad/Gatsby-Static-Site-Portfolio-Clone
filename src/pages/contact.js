import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import LayOut from '../Components/LayOut'
import image from '../images/laptop.png'

const ContactUs = styled.div`

padding-top: 2em;
#image{
      height:40%;
      height: 350px;
    width: -webkit-fill-available;
    object-fit: cover;
      
}
#detail p{
    font-size: 20px;
    margin-top: 1.5em;
    border-top: 1px solid lightgray;
    padding-top: 1em;
}
#detail{
    margin-top: 5em;
}
#detail h5{
    font-size: 15px;
    padding: 1em;
    background: #d3d3d366;
    border-left: 3px solid;
}
form{
    display: inline-grid;
    font-size: 14px;
    font-weight: 600;
}
input{
    width: 350px;
    height: 35px;
    margin-bottom: 1em;
    margin-top: 0.4em;
    border: 2px solid cadetblue;
    padding-left: 1em;
}
#select {
    display: flex;
}
#select label{
    display: block;
}
#select div{
    margin-left: 5px;
}
#select{
    padding:1em
}
select{
    width: 150px;
    height: 40px;
    font-size: medium;
    border: 2px solid cadetblue;
}
#comment{
    height: 100px;
}
button{
    margin-top: 1em;
    width: 150px;
    margin-inline: auto;
    border-radius: 20px;
    height: 35px;
    font-size: 15px;
    color: #0db3b3;
    border: 2px solid cadetblue;
}
@media (max-width:768px){
#image{
      height:100%
}
}
`

export default function contact() {
    return (    
        <>
        <LayOut>
          <ContactUs>
              <div>
              <img src={image}id="image"/>
              </div>
              <div id="detail">
              <Container>
                      <Row>
                          <Col xs={12} md={6}>
                             <h1>Let’s work together</h1>
                             <p>
                             I'm web developer Full-Stack who develop high-selling e-commerce websites.
                              I specialize in stable, high-performing and unique e-commerce websites and I will grow your business.
                             </p>
                             <h5>
                             Please fill the contact form below, or email us at <br/>
                             contact@alexislepresle.com and we will get in touch<br/> with you.
                             </h5>
                          </Col>
                          <Col xs={12}md={6}>
                              <form>
                                  <label>Name*</label>
                                  <input type="text"placeholder="Name"/>
                                  <label>Email*</label>
                                  <input type="email"placeholder="address@mail.com"/>
                                  <div id="select">
                                      <div>
                                      <label>Type of project:*</label><br/>
                                      <select>
                                          <option>Shop Creation</option>
                                          <option>Optimization</option>
                                      </select>
                                      </div>
                                      <div>
                                      <label>Budget:*</label><br/>
                                      <select>
                                          <option>500 - 1000</option>
                                          <option>Less than 500</option>
                                          <option>1000 - 1500</option>
                                      </select>
                                      </div>
                                  </div>
                                  <label>Message/Project Details:*</label>
                                  <input type="text"id="comment"/>
                                  <button>Submit</button>
                              </form>
                          </Col>
                      </Row>
              </Container>
              </div>
              </ContactUs>  
              </LayOut>
        </>
    )
}
