import React from 'react'
import logo from "../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="main-footer">
    <div className="color-layer"></div>
    <div className="auto-container">
      <div className="widgets-section">
        <div className="row clearfix">

          <div className="footer-column col-lg-3 col-md-6 col-sm-12">
            <div className="footer-widget address-widget">
              <h4>SERVICES</h4>
              <ul className="address-list">
                <li>Dedicated Teams</li>
                <li>Custom Software Development</li>
                <li>Web App Development</li>
                <li>Mobile App Development</li>
                <li>UI/UX Design</li>
                <li>QA & Testing</li>
                <li>DevOps</li>
                <li>Discovery Workshop</li>
              </ul>
              {/* <!-- <ul className="social-box">
                          <li><a href="index.html#" className="fa fa-facebook-f"></a></li>
                          <li><a href="index.html#" className="fa fa-linkedin"></a></li>
                          <li><a href="index.html#" className="fa fa-slack"></a></li>
                          <li><a href="index.html#" className="fa fa-dribbble"></a></li>
                      </ul> --> */}
            </div>
          </div>

          <div className="footer-column col-lg-3 col-md-6 col-sm-12">
            <div className="footer-widget list-widget">
              <h4>SOLUTIONS</h4>
              <ul className="list">
                <li>
                  <a href="index.html#">ServiceNow </a>
                </li>
                <li>
                  <a href="index.html#">Salesforce</a>
                </li>
                <li>
                  <a href="index.html#">BPO</a>
                </li>
                <li>
                  <a href="index.html#">Mulesoft</a>
                </li>
                <li>
                  <a href="index.html#">AWS</a>
                </li>
                <li>
                  <a href="index.html#">Cyber Security</a>
                </li>
                <li>
                  <a href="index.html#">Cloud Migration</a>
                </li>
                <li>
                  <a href="index.html#">Shopify</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-column col-lg-3 col-md-6 col-sm-12">
            <div className="footer-widget list-widget">
              <h4>EMERGING TECHNOLOGIES</h4>
              <ul className="list">
                <li>
                  <a href="index.html#">Data Science & AI</a>
                </li>
                <li>
                  <a href="index.html#">Internet Of Things</a>
                </li>
                <li>
                  <a href="index.html#">AR/VR</a>
                </li>
                <li>
                  <a href="index.html#">Blockchain</a>
                </li>
                <li>
                  <a href="index.html#">Robotic Process Automation</a>
                </li>
                <li>
                  <a href="index.html#">E-Learning</a>
                </li>
                <li>
                  <a href="index.html#">Healthcare</a>
                </li>
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
                  <a href="tel:+88-016-826-48-11"> +88 016 826 48 11</a>
                </li>
                <li>
                  <a href="mailto:info@gmail.com"> info@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="row clearfix">
          <div className="copyright-column col-lg-6 col-md-12 col-sm-12">
            <div className="copyright">
              Copyright 2021, All Right Reserved
            </div>
          </div>
          <div className="nav-column col-lg-6 col-md-12 col-sm-12">
            <ul>
              <li>
                <a href="index.html#">Privacy Policy</a>
              </li>
              <li>
                <a href="index.html#">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}
