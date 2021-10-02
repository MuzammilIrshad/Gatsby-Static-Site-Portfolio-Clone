import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { Container, Row, Col } from 'react-bootstrap';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';


const projectQuery = graphql`
{
  allContentfulPortfolio {
    edges {
      node {
        title
        description {
          description
        }
        image {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  }
}
`
const Project = styled.div`
   margin-inline: auto;
   width:70%;
   border-top: 1px solid lightgrey;
   .h2{
    font-family: monospace;
    font-size: 38px;
    margin-bottom:1em;
   }
   h1{
    font-family: monospace;
    font-size: 45px;
   }
   p{
    font-family: inherit;
    font-size: 18px;
   }
   .image{
    box-shadow: -10px 5px darkgrey;
   }

`
export default function MyProjects() {
    
    const data = useStaticQuery(projectQuery);
    const projectsData = data.allContentfulPortfolio.edges
    console.log(projectsData);
    return (
        <Project>
            <Container>
                
            {projectsData.map((project, ind)=>{
                console.log(project);
                const image = getImage(project.node.image);
                return (
                    <Row key={ind} style={{marginTop:"4em"}}>
                      <Col xs={12} md={6}>
                      <GatsbyImage image={image} className="image"/>
                      </Col>
                      <Col xs={12} md={6}lg={5} className="detail">
                      <h1>0{ind+1}</h1>
                      <p>{project.node.description.description}</p>
                      <h2>{project.node.title}</h2>
                      </Col>
                    </Row>
                )
            })}
           
            </Container>
        </Project>
    )
}
