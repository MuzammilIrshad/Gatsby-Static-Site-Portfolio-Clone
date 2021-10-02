import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import {AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'gatsby'

const Nav = styled.nav`
      height: 45px;
    z-index: 30;
    width: 100%;
    position: fixed;
    border-bottom: 2px solid black;
    background: white;
  .main-links{
    display: flex;
    font-family: sans-serif;
    font-size: larger;
    margin-right: 4em;
    margin-left: 4em;
  }
   span{
       margin-top: 0.4em;
   }
  #contact{
    margin-inline-start: auto;
  }
#logo{
margin-left: auto;
margin-top: 0.4em;
}

`

export default function Navbar() {
   
   
    return (
        <div style={{marginBottom:'-0.47em'}}>
            <Nav>
                <div className="main-links">
                <span><AiOutlineMenu style={{fontSize: '17px'}}/><Link to='/'> Home</Link></span>
                <div id="logo">
                <StaticImage src="../images/logo.png"layout="fixed"width={30}height={25} alt="logo"/>
                </div>
                <span id="contact"><Link to='/contact'>Contact Us</Link></span>
                </div>
            </Nav>
        </div>
    )
}
