import React, {useState} from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
//import { useContentfulImage } from "../Components/useContentfulImage";
import LayOut from '../Components/LayOut';
import styled from 'styled-components';


const BlogPost = styled.div`
    width: 100%;
     padding-top: 3em;

     #title{
       padding-top: 3em;
       height: 400px;
       background: #8596c7;
     }
     #title div{
      width: 80%;
    margin-inline: auto;
    color: white;
     }
     #title button{
      border-radius: 20px;
    width: 90px;
    height: 40px
     }
     #title h3 span{
      margin-left: 0.5em;
     }
     #detail{
       width: 50%;
       margin-inline:auto ;
       font-size: 20px;
     }
     #detail p{
       margin-top: 1em;
       margin-bottom: 1em;
       text-align: justify;
     }
     @media (max-width:768px){
         #detail{
           width: 80%;
         }
     }
`



export default function BlogDetail({pageContext}) {

    //const assets = data.allContentfulAsset;
  //const [asset, setAsset] = useState()
  const richTextImages = {};
  const blogData = pageContext.postDetails.node;
   // const blogData = data.contentfulBlog;

    blogData.desc.references.map((reference)=>{
      richTextImages[reference.contentful_id] ={"image": reference.gatsbyImageData, "alt": reference.title}
    })


    const RICHTEXT_OPTIONS = {
      renderNode: {
          [BLOCKS.PARAGRAPH]: (node, children) => {
              //console.log("Children=>",children);
             // console.log("NODE=>", node)
              return <p>{children}</p>
          },
          [MARKS.BOLD]: (node, children) => {
              //console.log(children);
              return <p>{children}</p>
          },
          [BLOCKS.EMBEDDED_ASSET]: node => {
              console.log(node);
              console.log(richTextImages[node.data.target.sys.id])
               let img = richTextImages[node.data.target.sys.id];
               console.log(img);
               const image = getImage(img.image);
               return <GatsbyImage image={image}/>
          },
         
            /*          function useContentfulImage (assetUrl){
            console.log("ASSET URL", assetUrl)
         const asset = assets.edges.find(({ node }) => node.contentful_id === assetUrl)
       return asset
       }
           const asset = useContentfulImage(node.data.target.sys.id)
            console.log(asset)
        if (asset) {
          return (
            <Img
              fluid={asset.node.fluid}
              style={{ maxWidth: "500px", margin: "5% auto" }}
            />
          )
        }
        */ 
          
          [BLOCKS.UL_LIST]: (node, children) => (
            <ul>{children}</ul>
          ),
          [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
      }
  }
    return (
        <LayOut>
         <BlogPost>
          <div id="title">
            <div>
            <h1>{blogData.slug}</h1>
            <button>{blogData.title}</button>
            <h3><span>{blogData.date}</span>-<span>{blogData.duration} min read</span></h3>
          </div>
          </div>
          <div id="detail">
          {documentToReactComponents(JSON.parse(blogData.desc.raw), RICHTEXT_OPTIONS)}
          </div>
          </BlogPost>
        </LayOut>
    )
}
/*export const query = graphql`
query MyQuery($slug: String!) {
    contentfulBlog(slug: {eq: $slug}) {
      title
      slug
      duration
      date
      desc {
        raw
        references {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          contentful_id
          title
        }
      }
    }
  }
 
`*/