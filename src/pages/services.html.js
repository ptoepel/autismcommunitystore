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
  <li>
    <input type="checkbox" checked/>
    <i></i>
    <h2>Languages Used</h2>
    <p>This page was written in HTML and CSS. The CSS was compiled from SASS. I used Normalize as my CSS reset and -prefix-free to save myself some headaches. I haven't quite gotten the hang of Slim for compiling into HTML, but someday I'll use it since its syntax compliments that of SASS. Regardless, this could all be done in plain HTML and CSS.</p>
  </li>
  <li>
    <input type="checkbox" checked/>
    <i></i>
    <h2>How it Works</h2>
    <p>Using the sibling and checked selectors, we can determine the styling of sibling elements based on the checked state of the checkbox input element. One use, as demonstrated here, is an entirely CSS and HTML accordion element. Media queries are used to make the element responsive to different screen sizes.</p>
  </li>
  <li>
    <input type="checkbox" checked/>
    <i></i>
    <h2>Points of Interest</h2>
    <p>By making the open state default for when :checked isn't detected, we can make this system accessable for browsers that don't recognize :checked. The fallback is simply an open accordion. The accordion can be manipulated with Javascript (if needed) by changing the "checked" property of the input element.</p>
  </li>
</ul>
        </div>
    </div>
</div>
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
  </Layout>
)

export default ServicesPage


export const pageQuery = graphql`
  query InjuryQuery {
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
