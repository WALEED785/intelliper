import React from "react";
import Footer from "./Footer";
import Header from "./header";

import service10 from "../assets/images/resource/service-10.png";
import design1 from "../assets/images/resource/design-1.png";
import design2 from "../assets/images/resource/design-2.png";
import icon1 from "../assets/images/resource/brand-icon-1.png";
import icon2 from "../assets/images/resource/brand-icon-2.png";
import icon3 from "../assets/images/resource/brand-icon-3.png";
import icon4 from "../assets/images/resource/brand-icon-4.png";
import program from "../assets/images/resource/program.png";
import service1 from "../assets/images/resource/service-1.png";
import service2 from "../assets/images/resource/service-2.png";
import service3 from "../assets/images/resource/service-3.png";
import discuss from "../assets/images/resource/discuss.png";
import { Link } from "react-router-dom";

export default function CustomeSoftware() {
  return (
    <>
      <div class="page-wrapper">
        <Header />
        <section class="top-container banner-section-five">
          <div class="auto-container">
            <div class="row clearfix">
              <div class="content-column col-lg-6 col-md-12 col-sm-12">
                <div class="inner-column">
                  <p
                    style={{
                      position: "relative",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "20px",
                      paddingBottom: "5px",
                      marginBottom: "20px",
                      color: "#212529",
                      marginTop: "0",
                    }}
                  >
                    <span
                      style={{
                        content: "",
                        width: "35px",
                        height: "2px",
                        position: "absolute",
                        bottom: "-4px",
                        left: 0,
                        background: "#2569e6",
                        WebkitTransform: "translateY(-50%)",
                        transform: "translateY(-50%)",
                      }}
                    />
                    Custom Software Development
                  </p>
                  <h2>
                    Website Design & <br /> Build Experts
                  </h2>
                  <div class="text">
                    We are Australia highest rated Search Marketing, Creative IT
                    agency on australia in 2021.
                  </div>
                  <a href="#" style={{textDecoration: "none"}} class="btn-style-one theme-btn">
                    Get a Proposal
                  </a>
                </div>
              </div>
              <div class="image-column col-lg-6 col-md-12 col-sm-12">
                <div class="inner-column">
                  <div class="image">
                    <img src={service10} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="designing-section">
          <div class="auto-container">
            <div class="design-block style-one">
              <div class="row clearfix">
                <div class="image-column col-lg-6 col-md-12 col-sm-12">
                  <div class="inner-column">
                    <div class="image titlt" data-tilt data-tilt-max="4">
                      <img src={design1} alt="" />
                    </div>
                  </div>
                </div>

                <div class="content-column col-lg-6 col-md-12 col-sm-12">
                  <div class="inner-column">
                    <h3>Website Design</h3>
                    <div class="text">
                      <p>
                        Lorem Ipsum generators on the Internet tend to repeat
                        predefined chunks as necessary, making this the first
                        true generator on the Internet.{" "}
                      </p>
                      <p>
                        It uses a dictionary of over 200 Latin words, combined
                        with a handful of model sentence structures, to generate
                        there are many variations of passages{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="design-block">
              <div class="row clearfix">
                <div class="content-column col-lg-6 col-md-12 col-sm-12">
                  <div class="inner-column">
                    <h3>Website Development</h3>
                    <div class="text">
                      <p>
                        Lorem Ipsum generators on the Internet tend to repeat
                        predefined chunks as necessary, making this the first
                        true generator on the Internet.{" "}
                      </p>
                      <p>
                        It uses a dictionary of over 200 Latin words, combined
                        with a handful of model sentence structures, to generate
                        there are many variations of passages{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div class="image-column col-lg-6 col-md-12 col-sm-12">
                  <div class="inner-column">
                    <div class="image titlt" data-tilt data-tilt-max="4">
                      <img src={design2} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section-2">
          <div className="auto-container">
            <div className="sec-title">
              <h2>End to End Software Development Methodologies</h2>
            </div>
            <div className="fp-lists">
              <div className="fp-column">
                <div className="column-steps">
                  <div className="fp-step">
                    <img
                      alt="IDEATION"
                      nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/fp-step-ideation--icon.svg"
                      class=" lazyloaded"
                      nitro-lazy-empty=""
                      id="NTU5OjQy-1"
                      src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/fp-step-ideation--icon.svg"
                    />
                    <p>IDEATION</p>
                  </div>
                  <div className="fp-step">
                    <img
                      alt="STRATEGY"
                      nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/fp-strategy--icon.svg"
                      class=" lazyloaded"
                      nitro-lazy-empty=""
                      id="NTY0OjQy-1"
                      src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/fp-strategy--icon.svg"
                    />
                    <p>STRATEGY</p>
                  </div>
                  <div className="fp-step last">
                    <img
                      alt="ARCHITECTURE"
                      nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/fp-architecture--icon.svg"
                      class=" lazyloaded"
                      nitro-lazy-empty=""
                      id="NTY5OjQ2-1"
                      src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/fp-architecture--icon.svg"
                    />
                    <p>ARCHITECTURE</p>
                  </div>
                </div>
                <div className="column-list">
                  <h3>Requirements Gathering</h3>
                  <ul>
                    <li>Work Breakdown Structure</li>
                    <li>Project Plan</li>
                    <li>Project Budget</li>
                    <li>Requirements Docs</li>
                    <li>Use Cases</li>
                    <li>User Stories</li>
                  </ul>
                </div>
              </div>
              <div className="fp-column">
                <div className="column-steps">
                  <div className="fp-step">
                    <img
                      alt="DESIGN"
                      nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/fp-design--icon.svg"
                      class=" lazyloaded"
                      nitro-lazy-empty=""
                      id="NTg4OjEyNA==-1"
                      src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/fp-design--icon.svg"
                    />
                    <p>DESIGN</p>
                  </div>
                  <div className="fp-step">
                    <img
                      alt="DEVELOPMENT"
                      nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/fp-development--icon.svg"
                      class=" lazyloaded"
                      nitro-lazy-empty=""
                      id="NTkzOjQ1-1"
                      src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/fp-development--icon.svg"
                    />
                    <p>DEVELOPMENT</p>
                  </div>
                  <div className="fp-step last">
                    <img
                      alt="TESTING"
                      nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/fp-testing--icon.svg"
                      class=" lazyloaded"
                      nitro-lazy-empty=""
                      id="NTk4OjQx-1"
                      src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/fp-testing--icon.svg"
                    />
                    <p>TESTING</p>
                  </div>
                </div>
                <div className="column-list">
                  <h3>Design & Development</h3>
                  <ul>
                    <li>Low-Fi Design</li>
                    <li>Hi-FI Design</li>
                    <li>User Experience Design</li>
                    <li>Source Code</li>
                    <li>Compiled Code</li>
                    <li>Code Documentation</li>
                  </ul>
                </div>
              </div>
              <div className="fp-column">
                <div className="column-steps">
                  <div className="fp-step">
                    <img alt="RELEASE" nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/cs-release-icon.svg" class=" lazyloaded" nitro-lazy-empty="" id="NjE3OjEyNQ==-1" src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/cs-release-icon.svg"/>
                    <p>RELEASE</p>
                  </div>
                  <div className="fp-step">
                  <img alt="Support" nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/fp-support--icon.svg" class=" lazyloaded" nitro-lazy-empty="" id="NjIyOjQx-1" src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/fp-support--icon.svg"/>
                    <p>Support</p>
                  </div>
                </div>
                <div className="column-list">
                  <h3>Delivery & Support</h3>
                  <ul>
                    <li>Release Management</li>
                    <li>Change Management</li>
                    <li>User Docs and Training</li>
                    <li>Scheduled Maintenance</li>
                    <li>Adaptive Maintenance</li>
                    <li>Software Roadmap</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="services-section-2">
          <div className="auto-container">
            <div className="sec-title">
              <h2>End to End Software Development Methodologies</h2>
            </div>
            <div className="row clearfix">
              <div className="service-block col-lg-4 col-md-6 col-sm-12">
                <div
                  class="column-1"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <h3>IT Strategy and Consultancy</h3>
                  <ul>
                    <li>Work Breakdown Structure</li>
                    <li>Project Plan</li>
                    <li>Project Budget</li>
                    <li>Requirements Docs</li>
                    <li>Use Cases</li>
                    <li>User Stories</li>
                  </ul>
                </div>
              </div>

              <div className="service-block col-lg-4 col-md-6 col-sm-12">
                <div
                  class="column-1"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <h3>Design & Development</h3>
                  <ul>
                    <li>Low-Fi Design</li>
                    <li>Hi-FI Design</li>
                    <li>User Experience Design</li>
                    <li>Source Code</li>
                    <li>Compiled Code</li>
                    <li>Code Documentation</li>
                  </ul>
                </div>
              </div>

              <div className="service-block col-lg-4 col-md-6 col-sm-12">
                <div
                  class="column-1"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <h3>Delivery & Support</h3>
                  <ul>
                    <li>Release Management</li>
                    <li>Change Management</li>
                    <li>User Docs and Training</li>
                    <li>Scheduled Maintenance</li>
                    <li>Adaptive Maintenance</li>
                    <li>Software Roadmap</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="rtt-section">
          <div className="container text-btn">
            <h2 className="home-heading-two">Let's co-create the right IT solution for your business.</h2>
            <a className="custo-btn" id="stylebtn">
              Let's Talk
            </a>
          </div>
        </section>

        <section className="services-section-2">
          <div className="auto-container">
            <div className="sec-title">
              <h2>We Are Trusted by Every Business</h2>
            </div>
            <div className="row clearfix">
              <div className="service-block col-lg-4 col-md-6 col-sm-12">
                <div
                  class="column-2"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <img alt="Startups" nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/csd-images/startups--icon.svg" class=" lazyloaded" nitro-lazy-empty="" id="NjU3OjM0-1" src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/csd-images/startups--icon.svg"/>
                  <h3>Startups</h3>
                  <ul className="bullets-light">
                    <li>MVP for quick launch to market</li>
                    <li>Fixed price estimates for clear budgeting</li>
                    <li>Agile practices to accelerate project delivery</li>
                  </ul>
                </div>
              </div>
              <div className="service-block col-lg-4 col-md-6 col-sm-12">
                <div
                  class="column-2"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <img alt="SMBs" nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/csd-images/smbs--icon.svg" class=" lazyloaded" nitro-lazy-empty="" id="NjY2OjEyMA==-1" src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/csd-images/smbs--icon.svg"/>
                  <h3>SMBs</h3>
                  <ul className="bullets-light">
                    <li>Flexible engagement models</li>
                    <li>In-depth domain expertise & industry knowledg</li>
                    <li>Tried-and-tested environment optimization methods</li>
                  </ul>
                </div>
              </div>
              <div className="service-block col-lg-4 col-md-6 col-sm-12">
                <div
                  class="column-2"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <img alt="Enterprises" nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/csd-images/enterprises--icon.svg" class=" lazyloaded" nitro-lazy-empty="" id="Njc2OjM3-1" src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/csd-images/enterprises--icon.svg"/>
                  <h3>Enterprises</h3>
                  <ul className="bullets-light">
                    <li>Consultancy to chalk out a future roadmap</li>
                    <li>Compliance with industry standards and regulations</li>
                    <li>Leverage emerging technologies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="brand-section-2">
          <div className="auto-container">
            <div className="ms-service-title tech-title">
              <p>TECHNICAL EXPERTISE</p>
              <h2 className="home-heading-two">
                Tech Stacks For Effective & Up-To-Date Web Apps
              </h2>
            </div>
            <div className="tech-web-app">
              <ul className="web-apps--logo">
                <li>
                <img alt="nodejs" nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/csd-images/nodejs--icon.svg" class=" lazyloaded" nitro-lazy-empty="" id="Njk3OjM2-1" src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/csd-images/nodejs--icon.svg"/>
                </li>
                <li>
                <img alt="python" nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/csd-images/python--icon.svg" class=" lazyloaded" nitro-lazy-empty="" id="Njk5OjM2-1" src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/csd-images/python--icon.svg"/>
                </li>
                <li>
                <img alt="sql server" nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/csd-images/sql-server--icon.svg" class=" lazyloaded" nitro-lazy-empty="" id="NzAxOjQw-1" src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/csd-images/sql-server--icon.svg"/>
                </li>
                <li>
                <img alt="php" nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/csd-images/php--icon.svg" class=" lazyloaded" nitro-lazy-empty="" id="NzAyOjEyMg==-1" src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/csd-images/php--icon.svg"/>
                </li>
                <li>
                <img alt="react" nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/csd-images/react--icon.svg" class=" lazyloaded" nitro-lazy-empty="" id="NzA0OjEyNg==-1" src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/csd-images/react--icon.svg"/>
                </li>
                <li>
                <img alt="mongodb" nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/csd-images/mongodb--icon.svg" class=" lazyloaded" nitro-lazy-empty="" id="NzA3OjM3-1" src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/csd-images/mongodb--icon.svg"/>
                </li>
                <li>
                <img alt="mysql" nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/csd-images/mysql--icon.svg" class=" lazyloaded" nitro-lazy-empty="" id="NzA4OjEyNg==-1" src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/csd-images/mysql--icon.svg"/>
                </li>
                <li>
                <img alt="ruby on rails" nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/csd-images/ror--icon.svg" class=" lazyloaded" nitro-lazy-empty="" id="NzExOjQz-1" src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/csd-images/ror--icon.svg"/>
                </li>
                <li>
                <img alt="oracle" nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/csd-images/oracle--icon.svg" class=" lazyloaded" nitro-lazy-empty="" id="NzEzOjM2-1" src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/csd-images/oracle--icon.svg"/>
                </li>
                <li>
                <img alt="html5" nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/csd-images/html5--icon.svg" class=" lazyloaded" nitro-lazy-empty="" id="NzE0OjEyNg==-1" src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/csd-images/html5--icon.svg"/>
                </li>
                <li>
                <img alt="java" nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/csd-images/java--icon.svg" class=" lazyloaded" nitro-lazy-empty="" id="NzE2OjEyNA==-1" src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/csd-images/java--icon.svg"/>
                </li>
                <li>
                <img alt="angular" nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/csd-images/angular--icon.svg" class=" lazyloaded" nitro-lazy-empty="" id="NzE5OjM3-1" src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/csd-images/angular--icon.svg"/>
                </li>
                <li>
                <img alt="cassandra" nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/csd-images/cassandra--icon.svg" class=" lazyloaded" nitro-lazy-empty="" id="NzIxOjM5-1" src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/csd-images/cassandra--icon.svg"/>
                </li>
                <li>
                <img alt="Wordpress" nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/csd-images/wordpress--icon.svg" class=" lazyloaded" nitro-lazy-empty="" id="NzIzOjM5-1" src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/csd-images/wordpress--icon.svg"/>
                </li>
                <li>
                <img alt="c icon" nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/csd-images/c--icon.svg" class=" lazyloaded" nitro-lazy-empty="" id="NzI0OjEyMw==-1" src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/csd-images/c--icon.svg"/>
                </li>
              </ul>
            </div>
            <div className="btn-wrap">
                  <Link to='/contact' style={{textDecoration: "none"}} className="btn-style-one theme-btn">
                    <span className="txt">
                      <i className="flaticon-padlock"></i>Book a Call
                    </span>
                  </Link>
                </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
