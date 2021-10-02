import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import LayOut from '../Components/LayOut'

const Expertise = styled.div`
width:80%;
padding-top: 5em;
margin-inline: auto;
h1{
    margin-bottom: 1em;
    border-bottom: 1px solid lightgray;
    padding: 0.7em;
}
p{
    font-family: inherit;
    font-size: 20px;
}
h6{
    padding:1em;
    background: lightgray;
    border:none;
    border-left: 2px solid blue;
}

`

export default function services() {
    return (
        <>
        <LayOut>
           <Expertise>  
            <h1>OUR EXPERTISE</h1>
            <div>
                <Container>
                    <Row>
                        <Col xs={12} lg={6} style={{marginBottom:"2em"}}>
                            <StaticImage src="../images/laptop.png"alt="laptop"layout="Constrained" />
                        </Col>
                        <Col xs={12}lg={6} style={{marginTop:"0em"}}>
                            <p>
                            I'm web developer who develop amazing websites. I specialize in stable,
                             high-performing and unique ecommerce websites and I will grow your business.
                             I also develop showcases, blogs and an engaging web application.
                            </p>
                            <h4>
                            Do you have a project idea or already a project?
                            </h4>
                            <p>
                            I can meet your needs, listen to your business goals and help you achieve them.
                            </p>
                            <p>
                            I design for you a custom designed website 
                            that meets your needs and faces the competition.
                             I help you choose the best platform for you after
                              evaluating your current and future business goals.
                            </p>
                            <p>
                            I preferably work with React JS and Next JS or Gatsby JS,
                             accompanied by a serverless architecture.
                            </p>
                            <h6>Want to discuss about your project ? Contact us</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            
            </Expertise>
            </LayOut>
        </>
    )
}
