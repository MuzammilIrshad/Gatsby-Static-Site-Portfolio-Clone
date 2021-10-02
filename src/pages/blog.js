import React from 'react'
import { graphql, Link } from "gatsby";
import styled from 'styled-components';
import { getImage } from 'gatsby-plugin-image';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Container, Row, Col } from 'react-bootstrap';
import LayOut from '../Components/LayOut';
import slugify from 'slugify';


const Article=styled.div`
     width: 60%;
    height: 100%;
    margin-inline: auto;
    background: white;
    @media(max-width:768px){
           width: 90%;
    }
    /* border-radius: 30px; */
    border-radius: 10px;
    box-shadow: 0 0.5em 1em -0.125em rgb(0 0 0 / 10%), 0 0 0 1px rgb(0 0 0 / 2%);
    .image{
        border-radius: 10px;
    }
    h3{
        padding: 0.5em;
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
const Blog = styled.div`
padding-top: 5em;
  width:80%;
  margin-inline: auto;
  @media(max-width:768px){
    width:90%;
  }
`
export default function blog({data}) {
   
   const blogData = data; 
   console.log(blogData);
    return (
        <div>
            <LayOut>
            <Blog>
                <h1>Blog</h1>
                <p>Recent Articles</p>
            <Container>
            <Row>
           {blogData && blogData.allContentfulBlog.edges.map((blog)=>{
              const image = getImage(blog.node.image)
              const slug = slugify(blog.node.slug, {lower:true});
              return(
                  <Col xs={12} style={{marginTop:"2em"}}>
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
             
            </Blog>
            </LayOut>
        </div>
    )
}
export const data = graphql`
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
