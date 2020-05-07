import React from "react"
import { Link,graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"



const IndexPage = ( {data} ) => (
  <Layout>

    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>

  <ul>
    {data.allStrapiArticle.edges.map(document =>(
      <li key={document.node.id}>
      
        <h2>
        <Link to={`/${document.node.id}`}>
          {document.node.title}
        </Link>
        </h2>
        <Img fixed={document.node.image.childImageSharp.fixed} />
    <p>{document.node.content}</p>
      </li>
    ))}
  </ul>

    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          title
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
