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
            <li>
                <div className="card">
                    <div className="card-icon-container">
                        <i className="fas fa-user-nurse"></i>
                    </div>
                    <div className="card-content-container">
                    <div className="card-title">
                        <h3>Professional</h3>
                    </div>
                    <div className="card-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, repellendus quibusdam? Voluptate, sequi! Explicabo sequi esse animi dicta. Earum minus adipisci consectetur facilis laboriosam? Odio laudantium libero sed deserunt reprehenderit!</p>
                    </div>
                </div>
                </div>
            </li>
            <li>
                <div className="card">
                    <div className="card-icon-container">
                        <i className="fas fa-star-of-life"></i>
                    </div>
                    <div className="card-content-container">
                    <div className="card-title">
                        <h3></h3>
                    </div>
                    <div className="card-content">
                        <p></p>
                    </div>
                    </div>
                </div>
            </li>
            <li>
                <div className="card">
                    <div className="card-icon-container">
                        <i className="fas fa-notes-medical"></i>
                    </div>
                    <div className="card-content-container">
                    <div className="card-title">
                        <h3></h3>
                    </div>
                    <div className="card-content">
                        <p></p>
                    </div>
                    </div>
                </div>
            </li>
            <li>
                <div className="card">
                    <div className="card-icon-container">
                        <i className="fas fa-stethoscope"></i>
                    </div>
                    <div className="card-title">
                        <h3></h3>
                    </div>
                    <div className="card-content">
                        <p></p>
                    </div>
                </div>
            </li>
            <li>
                <div className="card">
                    <div className="card-icon-container">
                        <i className="far fa-clinic-medical"></i>
                    </div>
                    <div className="card-content-container">
                    <div className="card-title">
                        <h3></h3>
                    </div>
                    <div className="card-content">
                        <p></p>
                    </div>
                    </div>
                </div>
            </li>
            <li>
                <div className="card">
                    <div className="card-icon-container">
                        <i className="far fa-user-md"></i>
                    </div>
                    <div className="card-content-container">
                    <div className="card-title">
                        <h3></h3>
                    </div>
                    <div className="card-content">
                        <p></p>
                    </div>
                    </div>
                </div>
            </li>
            <li>
                <div className="card">
                    <div className="card-icon-container">
                        <i className="fas fa-salad"></i>
                    </div>
                    <div className="card-content-container">
                    <div className="card-title">
                        <h3></h3>
                    </div>
                    <div className="card-content">
                        <p></p>
                    </div>
                    </div>
                </div>
            </li>
        </ul>
        
    </div>
    <div className="injuries-container">
        <div className="injuries">
            <h1>CSS + HTML only Accordion Element</h1>
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
  }
  
`
