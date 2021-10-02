import { Link } from 'gatsby';
import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';



const Foot = styled.div`
margin-top: 2em;
padding-top: 1em;
border-top: 2px solid lightgray;
width: 80%;
margin-inline: auto;

h1{
    color: gray;
    padding-bottom: 1em;
}
h3{
      font-size: 20px;
}
input{
    border: none;
    background: aliceblue;
}
button{
    background: #5f9ea0a6;
    color: white;
    width: 90px;
    border: none;
    height: 30px;
}
.footer-end{
    text-align-last: center;
}
`



export default function Footer() {
    
    
    return (
        <Foot>
            <div>
                <h1>Have a Project?</h1>
                <h1>Let's Talk</h1>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col xs={12}md={4}>
                        <h3>COMPANY</h3>
                        <div>
                            <p>
                                <Link to='/services'>Our Services</Link><br/>
                                <Link to='/aboutus'>About Us</Link><br/>
                                <Link to='/blog'>Articles</Link><br/>
                                <Link to='/privacy'>Privacy Policy</Link><br/>
                                <Link to='/contact'>Contact Us</Link>
                            </p>
                        </div>
                        </Col>
                        <Col xs={12} md={4}>
                        <h3>COMMUNITY</h3>
                        <div>
                            <p>
                                Instagram<br/>
                                LinkedIn<br/>
                                Twitter<br/>
                                Github<br/>
                                Facebook<br/>
                                Medium
                            </p>
                        </div>
                        </Col>
                        <Col xs={12} md={4}>
                        <h3>JOIN THE MAILING LIST</h3>
                        <div>
                            <p>
                             <input type='email'
                             placeholder="Email"/><button>Submit</button>
                            </p>
                        </div>
                        
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} className='footer-end'>
                        <p>2021 All Rights Reserved | Alexis</p>
                        <p>Made with in France</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Foot>
    )
}
