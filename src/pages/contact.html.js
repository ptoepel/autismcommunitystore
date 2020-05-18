import React from "react"
import { Link,graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"



const ContactPage = ( {data} ) => (
  <Layout>





<div className="home-wallpaper-bg">
<div className="content">
    <div className="title">
        <h1>Contact</h1>
    </div>
    <div className="subtitle">
        <h2>Reach Out</h2>
    </div>
</div>
</div>
<div className="main-content-contact">
 <div className="contact-content">
     <div className="subtitle">
        <h3>
            Contact Us
        </h3>
    </div>
    <div className="contact-form-content">
<p>{data.strapiContactText.contact}</p>
    </div>
     <div className="social">
         <ul>
             <li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
             <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
             <li><a href="#"><i className="fab fa-twitter-square"></i></a></li>
             <li><a href="#"><i className="fab fa-twitter-square"></i></a></li>
         </ul>
     </div>
 </div>
<form name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true">

    <div className="textInput">
        <span>Name</span>
        <input type="text" name="name" />

    </div>
    <div className="textInput">
        <span>Email</span>
        <input type="email" name="email" />

    </div>
    <div className="textInput">
        <span>Subject</span>
        <input type="text" name="subject" />

    </div>
    <div className="textInput">
        <span>Message</span>
        <textarea name="message"></textarea>

    </div>
    <div data-netlify-recaptcha="true"></div>
    <input type="submit" />
</form>
</div>


  </Layout>
)

export default ContactPage



export const ContactQuery = graphql`
query ContactQuery {
    strapiContactText {
        id
        contact

    }
    allStrapiSocials{
        edges {
            node {
                Label
                Url
            }
        }
    }
}
  
`



