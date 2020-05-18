import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout' 

const InjuryTemplate = ({ data }) => (
  <Layout>
      <div class="home-wallpaper-bg">
        <div class="content">
        <div class="title">
        <h1>{data.strapiInjuries.title}</h1>
        </div>

    </div>
</div>
<div className="main-content-location">
 

   
    <p>{data.strapiInjuries.content}</p>
  </div>
  </Layout>
)

export default InjuryTemplate

export const query = graphql`  
  query InjuryTemplate($id: String!) {
    strapiInjuries(id: { eq: $id }) {
      title
      content

        
  
      
    }
  }
`