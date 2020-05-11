import React from "react"
import { Link,graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"



const LocationPage = ( {data} ) => (
  <Layout>

<div class="home-wallpaper-bg">
        <div class="content">
            <div class="title">
                <h1>Location</h1>
            </div>
            <div class="subtitle">
                <h2>The Denver Office</h2>
            </div>
        </div>
    </div>
    <div class="main-content-location">
        <div class="left">
            <div class="left-title">
                <div class="left-title-top">
                    <h3>Hours</h3>
                </div>
                <div class="left-title-content">
                    <ul>
                        <li><span class="day">Monday</span><span class="hour-open">9:00AM</span> - <span class="hour-closed">5:00PM</span></li>
                        <li><span class="day">Tuesday</span><span class="hour-open">9:00AM</span> - <span class="hour-closed">5:00PM</span></li>
                        <li><span class="day">Wednesday</span><span class="hour-open">9:00AM</span> - <span class="hour-closed">5:00PM</span></li>
                        <li><span class="day">Thursday</span><span class="hour-open">9:00AM</span> - <span class="hour-closed">5:00PM</span></li>
                        <li><span class="day">Friday</span><span class="hour-open">9:00AM</span> - <span class="hour-closed">5:00PM</span></li>
                        <li><span class="day">Saturday</span><span class="hour-open">12:00PM</span> - <span class="hour-closed">5:00PM</span></li>
                        <li><span class="day">Sunday</span><span class="hour-open">12:00PM</span> - <span class="hour-closed">5:00PM</span></li>
                    </ul>
                </div>

            </div>
            <div class="left-content"></div>
            <div class="left-map"><div id="map"></div></div>
        </div>
        <div class="right">
            <div class="right-top"></div>
            <div class="right-middle">
                <div class="middle-top">
                    <h3>Address</h3>
                </div>
                <div class="middle-content">
                    <p><span>Parking:</span> Can be found on the side. Please look for the blue door.</p>

                    <p><span>Walking Directions:</span> Once you are at our building please, look for suite #4. This building shares space with other successfull Denver businesses.</p>
                    <ul>
                        <li><address>855 Inca St #4</address></li>
                        <li><address>Denver Colorado</address></li>
                        <li><address>80402</address></li>
                    </ul>
                </div>

            </div>
            <div class="right-bottom"></div>
        </div>

    </div>

  </Layout>
)

export default LocationPage