import React from "react"
import { Link,graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"



const AboutPage = ( {data} ) => (
  <Layout>

    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>


    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default AboutPage
