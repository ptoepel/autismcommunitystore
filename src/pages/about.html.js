import React from "react"
import { Link,graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"



const AboutPage = ( {data} ) => (
  <Layout>
        <div className="home-wallpaper-bg">
        <div className="content">
        <div className="title">
            <h1>About</h1>
        </div>
        <div className="subtitle">
            <h2>Resilience</h2>
        </div>
    </div>
    <div className="main-content">
        <div className="about-img-container">
            <div className="about-img"></div>
        </div>
        <div className="right-about-container">
            <div className="righttop-container">
                <div className="about-me-content">
                    <div className="name-container">
                        <h3>BRADEN O'DELL</h3>
                    </div>
                </div>
            </div>
            <div className="rightbottom-container">
                <div className="about-me">
                    <div className="subtitle"><h3>About Me</h3></div>
                    <div className="about-me-content">
                      <p>{data.strapiAboutBio.bio}</p>
                    </div>
                </div>
                <div className="creds-container">
                    <div className="subtitle"><h3>Credentials</h3></div>
                    <div className="creds">
                        <ul>
                            <li><a href="">The Joint</a></li>
                            <li><a href="">School</a></li>
                            <li><a href="">Workshop</a></li>
                            <li><a href="">Front Line</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


  </Layout>
)

export default AboutPage


export const aboutQuery = graphql`
  query AboutQuery {
    strapiAboutBio{
      id
      bio
    }
    strapiCredentials{
      id
      Label
      Link
    }

  }
`
