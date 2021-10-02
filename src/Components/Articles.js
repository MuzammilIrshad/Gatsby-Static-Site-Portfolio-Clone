import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby";
import styled from 'styled-components';
import { getImage } from 'gatsby-plugin-image';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Container, Row, Col } from 'react-bootstrap';
import slugify from 'slugify';

const Article=styled.div`
     width: 100%;
    height: 100%;
    background: white;
    /* border-radius: 30px; */
    border-radius: 15px;
    .image{
        border-radius: 15px;
    }
    h3{
        padding: 1em;
    }
    button{
    margin-left: 2em;
    width: 100px;
    border-radius: 20px;
    border: none;
    background: cadetblue;
    color: azure;
    height: 30px
    }
    p{
    margin: 1em;
    padding-left: 1.5em;
    font-family: revert;
    color: #80808087;
    font-weight: bolder;
    }
`

export default function Articles() {
    const blogData = useStaticQuery(data);
       
    return (
        <Container>
            <Row>
           {blogData && blogData.allContentfulBlog.edges.map((blog)=>{
              const image = getImage(blog.node.image)
              const slug = slugify(blog.node.slug, {lower:true});
              return(
                  <Col xs={12} lg={6} style={{marginTop:"2em"}}>
                   <Article>
                     <Link to={`/blog/${blog.node.slug}`}>
                       <GatsbyImage image={image} className="image"/>
                       <h3>{blog.node.slug}</h3>
                       <button>{blog.node.title}</button>
                       <p>{blog.node.duration} min read</p>
                       </Link>
                   </Article>
                   </Col>
               )
           })}
           </Row>
           </Container>
        
    )
}
const data = graphql`
{
  allContentfulBlog {
    edges {
      node {
        slug
        title
        duration
        image {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  }
}
`
