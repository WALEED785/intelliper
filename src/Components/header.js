import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { Col, Container, Dropdown, NavDropdown, Row } from "react-bootstrap";

export default function Header() {
  return (
    <div>
      <header className="main-header">
        <div className="header-upper">
          <div className="auto-container clearfix">
            <div className="pull-left logo-box">
              <div className="logo">
                <a href="#">
                  <img src={logo} alt="Site Logo" title="" />
                </a>
              </div>
            </div>

            <div className="nav-outer clearfix">
              <div className="mobile-nav-toggler">
                <span className="icon flaticon-menu"></span>
              </div>
              <nav className="main-menu navbar-expand-md">
                <div className="navbar-header">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>

                <div
                  className="navbar-collapse collapse clearfix"
                  id="navbarSupportedContent"
                >
                  <ul className="navigation clearfix">
                    <li className="current">
                      <a>
                        <Link to="/">Home</Link>
                      </a>
                    </li>
                    <li className="dropdown">
                      <a>Company</a>
                      <ul>
                        <li>
                          <a><Link to="/about">About Us</Link></a>
                        </li>
                        <li>
                          <a><Link to="/careers">Careers</Link></a>
                        </li>
                        <li>
                          <a><Link to="/choose-us">Why Choose Us</Link></a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a>Services</a>
                      <ul>
                        <li>
                          <a><Link to="/services">Custom Software Development</Link></a>
                        </li>
                        <li>
                          <a><Link to="/services-detail">Web App Development</Link></a>
                        </li>
                        <li>
                          <a><Link to="/services-detail">Mobile App Development</Link></a>
                        </li>
                        <li>
                          <a><Link to="/services-detail">UI/UX Design</Link></a>
                        </li>
                        <li>
                          <a><Link to="/services-detail">QA & Testing</Link></a>
                        </li>
                        <li>
                          <a><Link to="/services-detail">Embedded Software Development Services</Link></a>
                        </li>
                        <li>
                          <a><Link to="/services-detail">DevOps</Link></a>
                        </li>
                        <li>
                          <a><Link to="/services-detail">Discovery Workshop</Link></a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="index.html#">Solutions</a>
                      <ul>
                        <li>
                          <a>Salesforce</a>
                        </li>
                        <li>
                          <a>ServiceNow</a>
                        </li>
                        <li>
                          <a>MuleSoft</a>
                        </li>
                        <li>
                          <a>AWS</a>
                        </li>
                        <li>
                          <a>Cyber Security</a>
                        </li>
                        <li>
                          <a>BPO</a>
                        </li>
                        <li>
                          <a>Cloud Migration</a>
                        </li>
                        <li>
                          <a>Shopify</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a>Emerging Technologies</a>
                      <ul>
                        <li>
                          <a>Data Science & AI</a>
                        </li>
                        <li>
                          <a>Blockchain</a>
                        </li>
                        <li>
                          <a>Internet of Things</a>
                        </li>
                        <li>
                          <a>AR/VR</a>
                        </li>
                        <li>
                          <a>Robotic Process Automation</a>
                        </li>
                        <li>
                          <a>E-learning</a>
                        </li>
                        <li>
                          <a>Healthcare</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a><Link to='/case-studies'>Case Studies</Link></a>
                    </li>
                    <li>
                      <a href="#">
                        <Link to="/contact">Contact</Link>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="outer-box clearfix">
                <div className="btn-box">
                  <a href="contact.html" className="btn-style-one theme-btn">
                    <span className="txt">
                      <i className="flaticon-padlock"></i>Book a Call
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky-header">
          <div className="auto-container clearfix">
            <div className="logo pull-left">
              <a href="index.html" title="">
                <img src={logo} alt="" title="" />
              </a>
            </div>
            <div className="pull-right">
              <nav className="main-menu"></nav>
              <div className="outer-box clearfix">
                <div className="btn-box">
                  <a href="contact.html" className="btn-style-one theme-btn">
                    <span className="txt">
                      <i className="flaticon-padlock"></i>Book a Call
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-menu">
          <div className="menu-backdrop"></div>
          <div className="close-btn">
            <span className="icon flaticon-multiply"></span>
          </div>

          <nav className="menu-box">
            <div className="nav-logo">
              <a href="index.html">
                <img src={logo} alt="" title="" />
              </a>
            </div>
            <div className="menu-outer"></div>
          </nav>
        </div>
      </header>
    </div>
  );
}
