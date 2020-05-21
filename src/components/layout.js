/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Header from "./header"


const Layout = ({ children }) => {


  return (
    <>
     <Helmet>
     <meta charSet="utf-8" />
          <title>Resilience</title>
          <script src="https://kit.fontawesome.com/6185436977.js" crossorigin="anonymous"></script>



    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBUvrGEF4GphwIjEdFuylWB7enAAWsKlY8&callback=initMap"
    async defer></script>
        </Helmet>
      <Header  />

            <nav class="navbar">
        <ul class="navbar-nav">
            <li class="logo">
                <a href="/" class="nav-link">
                    <i class="fab fa-strava"></i>
                <span class="link-text">Resilience</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="/" class="nav-link">
                    <i class="fas fa-home"></i>
                    <span class="link-text">Home</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="./about.html" class="nav-link">
                    <i class="fas fa-user"></i>
                    <span class="link-text">About</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="./services.html" class="nav-link">
                    <i class="fas fa-notes-medical"></i>
                    <span class="link-text">Services</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="./location.html" class="nav-link">
                    <i class="fas fa-map-marker-alt"></i>
                    <span class="link-text">Location</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="./blog.html" class="nav-link">
                <i class="fas fa-blog"></i>
                    <span class="link-text">Blog</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="./contact.html" class="nav-link">
                    <i class="fal fa-envelope"></i>
                    <span class="link-text">Contact</span>
                </a>
            </li>

        </ul>
    </nav>

        <main>{children}</main>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
