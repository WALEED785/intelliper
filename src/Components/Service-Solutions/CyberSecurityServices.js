import React from "react";
import Footer from "../Footer";
import Header from "../header";

import service10 from "../../assets/images/resource/service-10.png";
import design1 from "../../assets/images/resource/design-1.png";
import design2 from "../../assets/images/resource/design-2.png";
import { Link } from "react-router-dom";

export default function CyberSecurityServices() {
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
                    Cyber Security Solutions
                  </p>
                  <h2>Cyber Security Solutions to protect your business</h2>
                  <div class="text">
                    Robust security strategies to support your digital
                    infrastructure.
                  </div>
                  <a
                    href="#"
                    style={{ textDecoration: "none" }}
                    class="btn-style-one theme-btn"
                  >
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

        <section style={{ padding: "60px 0px" }}>
          <div class="container ms-service cybers1">
            <div class="ms-service-title">
              <h2 class="home-heading-two heading-read">What we offer</h2>
            </div>
            <div class="serv-row">
              <div class="ms-serv">
                <div class="ms-serv-img">
                  <img
                    alt="certificate"
                    nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/cs-certificate--icon.svg"
                    class=" lazyloaded"
                    nitro-lazy-empty=""
                    id="NTIyOjEzMA==-1"
                    src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/cs-certificate--icon.svg"
                  />
                </div>
                <div class="ms-serv-text">
                  <h3>IT Security Auditing &amp; Compliance</h3>
                  <p>
                    Detect risks, reduce losses and protect confidential data
                    with our specialized security procedures. Our range of
                    products like SSL certificates, Perimeter Network till End
                    Point security, IDS / IPS and SIEM / SOAR help avoid theft
                    of your intellectual property.
                  </p>
                </div>
              </div>
              <div class="ms-serv">
                <div class="ms-serv-img">
                  <img
                    alt="knowledge"
                    nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/cs-knowledge--icon.svg"
                    class=" lazyloaded"
                    nitro-lazy-empty=""
                    id="NTMzOjEyNg==-1"
                    src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/cs-knowledge--icon.svg"
                  />
                </div>
                <div class="ms-serv-text">
                  <h3>IT Security Trainings</h3>
                  <p>
                    Safeguard your IT infrastructure against potential data
                    breaches and cyberattacks with our IT Security courses. We
                    offer the most popular ones like CEH, CISA, CISM, CISSP that
                    build knowledge and ensure business resilience -
                    facilitating your long-term strategic plan.
                  </p>
                </div>
              </div>
              <div class="ms-serv">
                <div class="ms-serv-img">
                  <img
                    alt="examination"
                    nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/cs-examination--icon.svg"
                    class=" lazyloaded"
                    nitro-lazy-empty=""
                    id="NTQ0OjEzMA==-1"
                    src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/cs-examination--icon.svg"
                  />
                </div>
                <div class="ms-serv-text">
                  <h3>Technical Security Assessment Services</h3>
                  <p>
                    We provide a comprehensive evaluation of your current
                    security architecture, pointing out potential
                    vulnerabilities and threats, by using insights that identify
                    the weaknesses in your information lifeblood.
                  </p>
                </div>
              </div>
              <div class="ms-serv">
                <div class="ms-serv-img">
                  <img
                    alt="security"
                    nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/cs-security--icon.svg"
                    class=" lazyloaded"
                    nitro-lazy-empty=""
                    id="NTU1OjEyNA==-1"
                    src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/cs-security--icon.svg"
                  />
                </div>
                <div class="ms-serv-text">
                  <h3>IT Security Solution Deployment Services</h3>
                  <p>
                    Our consulting services make it easy to ensure compliance
                    with multiple standards and security policies. Our expert
                    security control implementation and solutions revolve around
                    PCI-DSS, GDPR, SOC and many others.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="sf-proc-section">
          <div class="container">
            <div class="sf-proc-title">
              <h2 class="home-heading-two">Our Process</h2>
            </div>
            <div class="sf-proc-wrapper">
              <div class="side-img">
                <img
                  alt="Shape"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/sf-process--shape.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NTc0OjExNw==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/sf-process--shape.svg"
                />
              </div>
              <div class="sf-cards">
                <div class="sf-card">
                  <div class="sf-card-number">1</div>
                  <div class="sf-card-text">
                    <h3>Analysis</h3>
                    <p>
                      Our IT consulting advisors undertake a comprehensive
                      assessment of your existing organizational assets,
                      products and systems; understanding their vulnerabilities.
                    </p>
                  </div>
                </div>
                <div class="sf-card">
                  <div class="sf-card-number">2</div>
                  <div class="sf-card-text">
                    <h3>Strategy</h3>
                    <p>
                      This in-depth analysis enables us to identify potential
                      threats and suggest solutions that are in sync with the
                      innovative trends and technologies in the security field.
                    </p>
                  </div>
                </div>
                <div class="sf-card">
                  <div class="sf-card-number">3</div>
                  <div class="sf-card-text">
                    <h3>Implementation</h3>
                    <p>
                      Working alongside you, our security experts ensure that
                      new processes, policies and systems get adopted so that
                      dangers are eliminated and efficiency is boosted.
                    </p>
                  </div>
                </div>
                <div class="sf-card">
                  <div class="sf-card-number">4</div>
                  <div class="sf-card-text">
                    <h3>Reporting</h3>
                    <p>
                      Our security experts provide you with on-going performance
                      reporting and suggestions for further improvement so that
                      your business always stays protected.
                    </p>
                  </div>
                </div>
              </div>
              <div class="side-img">
                <img
                  alt="Shape"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/process--shape-right.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NjExOjEyMA==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/process--shape-right.svg"
                />
              </div>
            </div>
            <div class="sf-proc-btn">
              <a href="#cta-dark" class="custo-btn" id="stylebtn">
                Get Started <i class="la la-arrow-right"></i>
              </a>
            </div>
          </div>
        </section>
        <section class="service-section cybers2">
          <div class="container">
            <div class="offer-title">
              <p>WHY intelliper solution's?</p>
              <h2 class="home-heading-two heading-read">
                Stop threats. Prove compliance. Grow your business.
              </h2>
            </div>
            <div class="offer-cards cyber-c">
              <div class="card">
                <img
                  alt="risk knowledge"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/cs-risk-knowledge--icon.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NjI4OjEzMg==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/cs-risk-knowledge--icon.svg"
                />
                <h3>Deep cyber risk knowledge</h3>
                <p>
                intelliper solution's dedicated Cyber Underwriters &amp; Risk Engineers stay
                  up to date with evolving risks to help you protect your
                  business and build cyber resilience.
                </p>
              </div>
              <div class="card">
                <img
                  alt="bug"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/cs-bug--icon.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NjM0OjExMA==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/cs-bug--icon.svg"
                />
                <h3>Unrivaled Hunting</h3>
                <p>
                  Proactive identification and addressing of threats,
                  vulnerabilities, and other security issues means that we take
                  care of threats before they even occur.
                </p>
              </div>
              <div class="card">
                <img
                  alt="compliance"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/cs-compliance--icon.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NjQwOjEyNA==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/cs-compliance--icon.svg"
                />
                <h3>Certifications and Compliance</h3>
                <p>
                  We strictly adhere to technology certifications and industry
                  compliance which is critical to maintaining a robust and
                  reliable security profile.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="rtt-section">
          <div className="container text-btn">
            <h2 className="home-heading-two">
              Let's co-create the right IT solution for your business.
            </h2>
            <a className="custo-btn" id="stylebtn">
              Let's Talk
            </a>
          </div>
        </section>

        <section>
           
          <div class="certif-wrap">
            <div class="left-certf">
               
              <div class="left-wrap">
                 
                <div class="title">
                   
                  <h2 class="home-heading-two heading-read">
                    Our personnel certifications
                  </h2> 
                </div> 
                <div class="logo-cont">
                   
                  <ul>
                     
                    <li>
                      <img
                        alt="CGEIT"
                        nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/cs-certificate-01.webp"
                        class=" lazyloaded"
                        nitro-lazy-empty=""
                        id="Njc2OjQz-1"
                        src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/cs-certificate-01.webp"
                      />
                    </li> 
                    <li>
                      <img
                        alt="CRISC"
                        nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/cs-certificate-02.webp"
                        class=" lazyloaded"
                        nitro-lazy-empty=""
                        id="Njc4OjQz-1"
                        src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/cs-certificate-02.webp"
                      />
                    </li> 
                    <li>
                      <img
                        alt="CISM"
                        nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/cs-certificate-03.webp"
                        class=" lazyloaded"
                        nitro-lazy-empty=""
                        id="NjgwOjQy-1"
                        src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/cs-certificate-03.webp"
                      />
                    </li> 
                    <li>
                      <img
                        alt="CISA"
                        nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/cs-certificate-04.webp"
                        class=" lazyloaded"
                        nitro-lazy-empty=""
                        id="NjgyOjQy-1"
                        src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/cs-certificate-04.webp"
                      />
                    </li>
                    <li>
                      <img
                        alt="CISSP"
                        nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/cs-certificate-05.webp"
                        class=" lazyloaded"
                        nitro-lazy-empty=""
                        id="Njg0OjQz-1"
                        src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/cs-certificate-05.webp"
                      />
                    </li>
                    <li>
                      <img
                        alt="OFFENSIVE"
                        nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/cs-certificate-06.webp"
                        class=" lazyloaded"
                        nitro-lazy-empty=""
                        id="Njg2OjQ3-1"
                        src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/cs-certificate-06.webp"
                      />
                    </li> 
                    <li>
                      <img
                        alt="MICROSOFT"
                        nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/cs-certificate-07.webp"
                        class=" lazyloaded"
                        nitro-lazy-empty=""
                        id="Njg4OjQ3-1"
                        src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/cs-certificate-07.webp"
                      />
                    </li>
                    <li>
                      <img
                        alt="ETHICAL HACKER"
                        nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/cs-certificate-08.webp"
                        class=" lazyloaded"
                        nitro-lazy-empty=""
                        id="NjkwOjUy-1"
                        src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/cs-certificate-08.webp"
                      />
                    </li>
                    <li>
                      <img
                        alt="CPPT GOLD"
                        nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/cs-certificate-09.webp"
                        class=" lazyloaded"
                        nitro-lazy-empty=""
                        id="NjkyOjQ3-1"
                        src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/cs-certificate-09.webp"
                      />
                    </li>
                  </ul> 
                </div> 
              </div> 
            </div> 
            <div class="right-certf">
               
              <div class="right-wrap">
                 
                <div class="title">
                   
                  <h2 class="home-heading-two heading-read">
                    Our technology partnerships
                  </h2> 
                </div> 
                <div class="logo-cont">
                   
                  <ul>
                    <li>
                      <img
                        alt="SYMANTEC"
                        nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/partnership-01.webp"
                        class=" lazyloaded"
                        nitro-lazy-empty=""
                        id="NzA1OjQ2-1"
                        src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/partnership-01.webp"
                      />
                    </li>
                    <li>
                      <img
                        alt="VeriSign"
                        nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/partnership-02.webp"
                        class=" lazyloaded"
                        nitro-lazy-empty=""
                        id="NzA3OjQ2-1"
                        src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/partnership-02.webp"
                      />
                    </li>
                    <li>
                      <img
                        alt="SHOPHOS"
                        nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/partnership-03.webp"
                        class=" lazyloaded"
                        nitro-lazy-empty=""
                        id="NzA5OjQ1-1"
                        src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/partnership-03.webp"
                      />
                    </li>
                    <li>
                      <img
                        alt="DEVICE LOCK"
                        nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/partnership-04.webp"
                        class=" lazyloaded"
                        nitro-lazy-empty=""
                        id="NzExOjQ5-1"
                        src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/partnership-04.webp"
                      />
                    </li>
                    <li>
                      <img
                        alt="TRUST WAVE"
                        nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/partnership-05.webp"
                        class=" lazyloaded"
                        nitro-lazy-empty=""
                        id="NzEzOjQ4-1"
                        src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/partnership-05.webp"
                      />
                    </li>
                    <li>
                      <img
                        alt="sslstore"
                        nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/partnership-06.webp"
                        class=" lazyloaded"
                        nitro-lazy-empty=""
                        id="NzE1OjQ2-1"
                        src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/partnership-06.webp"
                      />
                    </li> 
                  </ul> 
                </div> 
              </div> 
            </div> 
          </div> 
        </section>

        <Footer />
      </div>
    </>
  );
}
