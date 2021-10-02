import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import LayOut from '../Components/LayOut'




const About = styled.div`
width:70%;
padding-top: 3em;
font-family: inherit;
    font-size: 20px;
    margin-inline: auto;
h1{
    margin-bottom: 1em;
}
.image{
    height: 80%;
    margin-top: 2em;
    margin-bottom: 1em;
}
p{
    text-align: justify;
}
`

export default function aboutus() {
    
    
    return (
        <div>
           <LayOut>
           <About>
               <h1>ABOUT ME</h1>
               <p>
               I'm <b>Alexis Lepresle</b> 21 years old entrepreneur and student in France, majoring in computer technology.
               </p>
               <StaticImage src="../images/profile.png"layout="Constrained"imgClassName="image"/>
               <p>
               I have been freelancing since 2018. I love being present on Instagram. Where I share my life as a young entrepreneur and web developer. 
               I also share my projects on Github. I'm also present on Twitter and LinkedIn.
               </p>
               <h3>
               WHY BEGAN IN FREELANCE?
               </h3>
               <p>
               Ever since I was young, around twelve to thirteen years old I wanted to create my own business. At the time I wanted to create an e-commerce site. So I preferred to put the idea aside, since I was too young to do it. So I created a high-tech blog with my best friends.
                We have posted over one-hundred articles about new technologies.
               </p>
               <p>
               I then wanted to improve the blog so I started to change the templates and then I came across articles / tutorials on "How to create a website from A to Z". So that's where I started to get into web development and wrote my first lines of code. I spent a little over two years learning web development before
                releasing my first blog on the internet, that I made in HTML, CSS and PHP.
               </p>
               <p>
               A year later, I still had the idea in mind to create my personal business, but my parents advised me to wait, and that I was too young and that it would be too hard to be in school and have a business at the same time. I decided to wait, but I still created the future website for my company. I was going to start the business when I had my first project order. In September 2017 a company contacted me and that’s when my freelance adventure started.
               </p>
               <StaticImage src="../images/laptop.png"layout="Constrained"imgClassName="image"/>
           </About> 
           </LayOut>
        </div>
    )
}
