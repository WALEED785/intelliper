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
                <li><Link style={{textDecoration: "none"}} to='/servicenow-consulting-services'>ServiceNow </Link></li>
                <li><Link style={{textDecoration: "none"}} to='/sales-force-consulting'>Salesforce</Link></li>
                <li><Link style={{textDecoration: "none"}} to='/business-process-outsourcing-services'>BPO</Link></li>
                <li><Link style={{textDecoration: "none"}} to='/mulesoft-consulting-services'>Mulesoft</Link></li>
                <li><Link style={{textDecoration: "none"}} to="/aws-consulting-services">AWS</Link></li>
                <li><Link style={{textDecoration: "none"}} to="/cyber-security-services">Cyber Security</Link></li>
                <li><Link style={{textDecoration: "none"}} to='/cloud-migration-services'>Cloud Migration</Link></li>
                <li><Link style={{textDecoration: "none"}} to='/shopify-development-services'>Shopify</Link></li>
              </ul>
            </div>
          </div>

          <div className="footer-column col-lg-3 col-md-6 col-sm-12">
            <div className="footer-widget list-widget">
              <h3 style={{ fontSize: "14px"}}>EMERGING TECHNOLOGIES</h3>
              <ul className="list">
                <li><Link style={{textDecoration: "none"}} to='/data-science-consulting-services'>Data Science & AI</Link></li>
                <li><Link style={{textDecoration: "none"}} to='/internet-of-things-iot-services'>Internet Of Things</Link></li>
                <li><Link style={{textDecoration: "none"}} to='/augmented-reality-virtual-reality-services'>AR/VR</Link></li>
                <li><Link style={{textDecoration: "none"}} to='/blockchain-consulting-services'>Blockchain</Link></li>
                <li><Link style={{textDecoration: "none"}} to='/robotic-process-automation-services'>Robotic Process Automation</Link></li>
                <li><Link style={{textDecoration: "none"}} to='/e-learning-software-development-services'>E-Learning</Link></li>
                <li><Link style={{textDecoration: "none"}} to='/healthcare-software-development-services'>Healthcare</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-column col-lg-3 col-md-6 col-sm-12">
            <div className="footer-widget logo-widget">
              <div className="logo">
                <Link to='/'>
                  <img src={logo} alt="" />
                </Link>
              </div>
              <ul className="info-list">
                <li>
                  <a style={{textDecoration: "none"}}> +92 324 11 63 049</a>
                </li>
                <li>
                  <a style={{textDecoration: "none"}}> intelliper@gmail.com</a>
                </li>
              </ul>
                <li>MORE CONTACTS</li>

          <div class="footer-column col-lg-3 col-md-6 col-sm-12">
						<div class="footer-widget address-widget">
							<ul class="social-box d-flex">
								<li><a class="fa fa-linkedin"></a></li>
								<li><a class="fa fa-envelope"></a></li>
								<li><a class="fa fa-skype"></a></li>
								<li><a class="fa fa-whatsapp"></a></li>
							</ul>
              {/* linkedin, whatsapp, skype */}
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
            ?? 2023 | All rights reserved.
            </div>
          </div>
          <div className="nav-column col-lg-6 col-md-12 col-sm-12">
            <ul>
              <li>
                <Link to='/case-studies' style={{textDecoration: "none"}}>Testimonials</Link>
              </li>
              <li>
                <a>Startups</a>
              </li>
              <li>
                <Link to='/' style={{textDecoration: "none"}}>Refer Us</Link>
              </li>
              <li>
                <Link to='/privacy-policy' style={{textDecoration: "none"}}>Privacy Policy</Link>
              </li>
              <li>
                <Link to='/term-condition' style={{textDecoration: "none"}}>Terms of use</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}
