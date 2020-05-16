import React from "react"
import { Link,graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"



const BlogPage = ( {data} ) => (
  <Layout>

  <div class="home-wallpaper-bg">
        <div class="content">
        <div class="title">
            <h1>Resilience</h1>
        </div>
        <div class="subtitle">
            <h2>Under Construction</h2>
        </div>
    </div>
</div>

  <ul>
    {data.allStrapiArticle.edges.map(document =>(
      <li key={document.node.id}>
      
        <h2>
        <Link to={`/${document.node.slug}`}>
          {document.node.title}
        </Link>
        </h2>
        <Img fixed={document.node.image.childImageSharp.fixed} />
    <p>{document.node.content}</p>
      </li>
    ))}
  </ul>


  </Layout>
)

export default BlogPage

export const pageQuery = graphql`
  query Query {
    allStrapiArticle {
      edges {
        node {
          id
          title
          slug
content 
          author
          date
          image{
            childImageSharp{
              fixed(width:200, height:125){
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`
