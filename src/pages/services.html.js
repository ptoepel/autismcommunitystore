import React from "react"
import { Link,graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"



const ServicesPage = ( {data} ) => (
  <Layout>

        <div className="home-wallpaper-bg">
        <div className="content">
        <div className="title">
            <h1>Services</h1>
        </div>
        <div className="subtitle">
            <h2>What We Do</h2>
        </div>
    </div>
    <div className="services-content">
        <ul>

            {data.allStrapiServices.edges.map(document =>(



            <li key={document.node.id}>
                <div className="card">
                    <div className="card-icon-container">
                        <i className="fas fa-user-nurse"></i>
                    </div>
                    <div className="card-content-container">
                    <div className="card-title">
                        <h3>{document.node.title}</h3>
                    </div>
                    <div className="card-content">
                        <p>{document.node.content}</p>
                    </div>
                </div>
                </div>
            </li>
    ))}
        </ul>
        
    </div>
    <div className="injuries-container">
        <div className="injuries">
            <h3>Injuries</h3>
<ul>


    {data.allStrapiInjuries.edges.map(document =>(
      <li key={document.node.id}>
      <input type="checkbox" checked/>
        <h2>
        <Link to={`/${document.node.id}`}>
          {document.node.title}
        </Link>
        </h2>
       
    <p>{document.node.content}</p>
      </li>
    ))}
  
        </ul>
        </div>
    </div>
</div>

  </Layout>
)

export default ServicesPage


export const pageQuery = graphql`
query InjuriesQuery {
    allStrapiInjuries {
      edges {
        node {
          id
          title
          content

        }
      }
    }
   allStrapiServices{
        edges {
          node {
            id
            title
            content
          }
        }
      }
  }
  
`
