import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'
import AboutMe from '../Components/AboutMe';
import * as homeStyles from '../styles/home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'gatsby';
import MyProjects from '../Components/MyProjects';
import Articles from '../Components/Articles';
import LayOut from '../Components/LayOut';

export default function Home() {
  return (
    <div>
    <LayOut>
    <section>
      
      <div className={homeStyles.container}>
           <div className={`${homeStyles.fixed_top}`}></div>
           <div className={homeStyles.columns}>
             <div className={`${homeStyles.column} ${homeStyles.text_header}`}>
               <h1>
                 Web Developer,
               </h1>
               <h1>
                 Full-Stack,
               </h1>
             </div>
             <div className={`${homeStyles.column}`}>
               <StaticImage src='../images/laptop.png'layout="constrained" className={`${homeStyles.image}`}/>
             </div>
           </div>
      </div>
      <div id={homeStyles.email}>muzammilirshad931@gmail.com</div>
    </section>
    <section id={homeStyles.section2}>
      <div>
        <h1>ABOUT ME</h1>
          <AboutMe/>
      </div>
    </section>
    <section id={homeStyles.section3}>
         <p>I'm a full-stack web developer who creates unique<br/>
          websites around each brand and help grow your business.</p>
           <Link>Services Offered</Link>
    </section>
    <section id={homeStyles.section4}>
       <div>
         <h1>MY LAST PROJECTS</h1>
         <MyProjects/>
       </div>
    </section>
    <section id={homeStyles.section5}>
      <h1>ARTICLES</h1>
      <Articles/>
    </section>
    </LayOut>
    </div>
  )
}