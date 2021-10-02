var path = require("path");

// Create Pages
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions; // Get createPage function from actions



  const query =await graphql(`
  query blogs {
    allContentfulBlog {
     
      edges {
        node{
   title
      slug
      duration
      date(formatString: "MM-DD-Y")
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
    }
  }
  
 
`)

const blogPosts = query.data.allContentfulBlog.edges;

blogPosts.map((blogPost) => {
    createPage({
      path: `/blog/${blogPost.node.slug}`,
      component: path.resolve("./src/Template/BlogDetail.js"),
      context: {
        postDetails: blogPost,
       
      },
    });
  });
};