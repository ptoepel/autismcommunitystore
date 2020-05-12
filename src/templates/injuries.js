import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout' 

const InjuryTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiInjuries.title}</h1>

   
    <p>{data.strapiInjuries.content}</p>
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