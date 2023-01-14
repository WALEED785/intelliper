import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="main-footer">
    <div className="auto-container">
      <div className="widgets-section">
        <div className="row clearfix">
          <div className="footer-column col-lg-3 col-md-6 col-sm-12">
            <div className="footer-widget list-widget">
              <h3 style={{ fontSize: "14px"}}>SERVICES</h3>
              <ul className="list">
                <li><Link to='/services' style={{textDecoration: "none"}}>Dedicated Teams</Link></li>
                <li><Link to='/custome-software' style={{textDecoration: "none"}}>Custom Software Development</Link></li>
                <li><Link to='/web-development-software' style={{textDecoration: "none"}}>Web App Development</Link></li>
                <li><Link to='/mobile-app-development-software' style={{textDecoration: "none"}}>Mobile App Development</Link></li>
                <li><Link to='/services' style={{textDecoration: "none"}}>UI/UX Design</Link></li>
                <li><Link to='/quality-assurance-and-testing-services' style={{textDecoration: "none"}}>QA & Testing</Link></li>
                <li><Link to='/devops-services' style={{textDecoration: "none"}}>DevOps</Link></li>
                <li><Link to='/discovery-workshop-services' style={{textDecoration: "none"}}>Discovery Workshop</Link></li>
              </ul>
            </div>
          </div>

          <div className="footer-column col-lg-3 col-md-6 col-sm-12">
            <div className="footer-widget list-widget">
              <h3 style={{ fontSize: "14px"}}>SOLUTIONS</h3>
              <ul className="list">
                <li><a>ServiceNow </a></li>
                <li><a>Salesforce</a></li>
                <li><a>BPO</a></li>
                <li><a>Mulesoft</a></li>
                <li><a>AWS</a></li>
                <li><a>Cyber Security</a></li>
                <li><a>Cloud Migration</a></li>
                <li><a>Shopify</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-column col-lg-3 col-md-6 col-sm-12">
            <div className="footer-widget list-widget">
              <h3 style={{ fontSize: "14px"}}>EMERGING TECHNOLOGIES</h3>
              <ul className="list">
                <li><a>Data Science & AI</a></li>
                <li><a>Internet Of Things</a></li>
                <li><a>AR/VR</a></li>
                <li><a>Blockchain</a></li>
                <li><a>Robotic Process Automation</a></li>
                <li><a>E-Learning</a></li>
                <li><a>Healthcare</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-column col-lg-3 col-md-6 col-sm-12">
            <div className="footer-widget logo-widget">
              <div className="logo">
                <a href="index.html">
                  <img src={logo} alt="" />
                </a>
              </div>
              <ul className="info-list">
                <li>
                  <a style={{textDecoration: "none"}}> +88 016 826 48 11</a>
                </li>
                <li>
                  <a style={{textDecoration: "none"}}> info@gmail.com</a>
                </li>
              </ul>
                <li>MORE CONTACTS</li>

          <div class="footer-column col-lg-3 col-md-6 col-sm-12">
						<div class="footer-widget address-widget">
							<ul class="social-box d-flex">
								<li><a class="fa fa-facebook-f"></a></li>
								<li><a class="fa fa-linkedin"></a></li>
								<li><a class="fa fa-slack"></a></li>
								<li><a class="fa fa-dribbble"></a></li>
							</ul>
						</div>
					</div>


            </div>
          </div>
        </div>
      </div>
<hr/>
      <div className="footer-bottom">
        <div className="row clearfix">
          <div className="copyright-column col-lg-6 col-md-12 col-sm-12">
            <div className="copyright">
            © 2023 | All rights reserved.
            </div>
          </div>
          <div className="nav-column col-lg-6 col-md-12 col-sm-12">
            <ul>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>Startups</a>
              </li>
              <li>
                <a>Refer Us</a>
              </li>
              <li>
                <a>Sitemap</a>
              </li>
              <li>
                <a>Privacy Policy</a>
              </li>
              <li>
                <a>Terms of use</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}
