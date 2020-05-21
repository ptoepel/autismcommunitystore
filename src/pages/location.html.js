import React from "react"
import { Link,graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"



const LocationPage = ( {data} ) => (
  <Layout>

<div className="home-wallpaper-bg">
        <div className="content">
            <div className="title">
                <h1>Location</h1>
            </div>
            <div className="subtitle">
                <h2>The Denver Office</h2>
            </div>
        </div>
    </div>
    <div className="main-content-location">
        <div className="left">
            <div className="left-title">
                <div className="left-title-top">
                    <h3>Hours</h3>
                </div>
                <div className="left-title-content">
                    <ul>
                {data.allStrapiHours.edges.map(document =>(
 <li key={document.node.id}><span className="day">{document.node.Day}</span><span className="hour-open">{document.node.Opentime}</span> - <span className="hour-closed">{document.node.Closetime}</span></li>

    ))}
                </ul>
                </div>

            </div>
            <div className="left-content"></div>
                <div className="left-map"><div id="map"></div></div>
        </div>
        <div className="right">
            <div className="right-top"></div>
            <div className="right-middle">
                <div className="middle-top">
                    <h3>Address</h3>
                </div>
                <div className="middle-content">
                <div className="parking">
                {data.strapiParking.parking}
                </div>
                <div className="address">
                {data.strapiAddress.address}
                </div>
                </div>

            </div>
            <div className="right-bottom"></div>
        </div>

    </div>

  </Layout>
)

export default LocationPage




export const locationQuery = graphql`
query LocationsQuery {
    allStrapiHours {
        edges {
            node {
                Day
                Closetime
                Opentime

            }
        }
    }
    strapiParking {
        id
        parking
      }
    strapiAddress {
        id
        address
    }

}
  
`

