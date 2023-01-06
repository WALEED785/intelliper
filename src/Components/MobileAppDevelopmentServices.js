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

export default function MobileAppDevelopmentServices() {
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
                    Mobile App Development
                  </p>
                  <h2>
                    We do not build apps We <br /> build experiences
                  </h2>
                  <div class="text">
                    Leveraging latest technological tools & industry practices,
                    we build high performance apps to scale your business.
                  </div>
                  <a href="contact.html" class="proposal-btn theme-btn">
                    Let's Talk
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

        <section className="brand-section-2">
          <div className="auto-container">
            <div className="ms-service-title tech-title">
              <p>SERVICES</p>
              <h2 className="home-heading-two">What We Do</h2>
            </div>
            <div className="offer-cards">
              <div className="card">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="39"
                  height="35"
                  viewBox="0 0 39 35"
                  fill="none"
                  webcrx=""
                >
                  <path
                    d="M8.29301 9.32062C7.58134 9.32062 6.98828 9.91367 6.98828 10.6253C6.98828 11.337 7.58134 11.9301 8.29301 11.9301C9.00467 11.9301 9.59773 11.337 9.59773 10.6253C9.59773 9.91367 9.00467 9.32062 8.29301 9.32062Z"
                    fill="url(#paint0_linear)"
                  />
                  <path
                    d="M17.8399 11.8708C17.7212 11.8708 20.3307 11.8708 20.4493 11.8708V9.26135H17.8399V11.8708V11.8708Z"
                    fill="url(#paint1_linear)"
                  />
                  <path
                    d="M29.9981 9.32062C29.2864 9.32062 28.6934 9.91367 28.6934 10.6253C28.6934 11.337 29.2864 11.9301 29.9981 11.9301C30.7098 11.9301 31.3028 11.337 31.3028 10.6253C31.3028 9.91367 30.7098 9.32062 29.9981 9.32062Z"
                    fill="url(#paint2_linear)"
                  />
                  <path
                    d="M19.1456 3.09353C8.52986 -6.69191 -7.00823 9.08341 3.48888 19.5805L18.7304 34.8221C18.8491 34.9407 18.9677 35 19.1456 35C19.3235 35 19.4421 34.9407 19.5607 34.8221L34.8023 19.5805C37.2338 17.149 38.3013 14.3616 38.3013 11.6929C38.3013 3.09353 27.3298 -4.43829 19.1456 3.09353ZM29.9985 13.0569C28.8124 13.0569 27.8635 12.2266 27.567 11.1591H21.6364V12.4638C21.6364 12.8197 21.3992 13.0569 21.0434 13.0569H20.1538L24.1866 21.1225C24.3052 21.3597 24.2459 21.6562 24.068 21.8341C23.89 22.0121 23.5935 22.0121 23.3563 21.8934L21.3992 20.648V22.7237C21.3992 23.0796 21.162 23.3168 20.8061 23.3168H17.5443C17.1885 23.3168 16.9513 23.0796 16.9513 22.7237V20.648L14.9942 21.8934C14.757 22.0121 14.4604 22.0121 14.2825 21.8341C14.1046 21.6562 14.0453 21.3597 14.1639 21.1225L18.1967 13.0569H17.3071C16.9513 13.0569 16.714 12.8197 16.714 12.4638V11.1591H10.6649C10.3683 12.2266 9.41945 13.0569 8.23334 13.0569C6.8693 13.0569 5.7425 11.9301 5.7425 10.5661C5.7425 9.20202 6.8693 8.07521 8.23334 8.07521C9.41945 8.07521 10.3683 8.90549 10.6649 9.97299H16.6547V8.66827C16.6547 8.31244 16.892 8.07521 17.2478 8.07521H21.0434C21.3992 8.07521 21.6364 8.31244 21.6364 8.66827V9.97299H27.6263C27.9228 8.90549 28.8717 8.07521 30.0578 8.07521C31.4219 8.07521 32.5487 9.20202 32.5487 10.5661C32.4894 11.9894 31.3626 13.0569 29.9985 13.0569Z"
                    fill="url(#paint3_linear)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="7.54745"
                      y1="9.32062"
                      x2="8.4328"
                      y2="11.6971"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FF002E" />
                      <stop offset="1" stop-color="#F938AC" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear"
                      x1="18.3959"
                      y1="9.26135"
                      x2="19.2803"
                      y2="11.6387"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FF002E" />
                      <stop offset="1" stop-color="#F938AC" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear"
                      x1="29.2525"
                      y1="9.32062"
                      x2="30.1379"
                      y2="11.6971"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FF002E" />
                      <stop offset="1" stop-color="#F938AC" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear"
                      x1="8.20743"
                      y1="4.0446e-07"
                      x2="19.2815"
                      y2="32.529"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FF002E" />
                      <stop offset="1" stop-color="#F938AC" />
                    </linearGradient>
                  </defs>
                </svg>
                <h3>Experience Design</h3>
                <p>
                  With our extensive expertise in UI/UX design and front-end
                  development, we build web applications with delightful user
                  experiences.
                </p>
              </div>
              <div className="card">
                <img
                  alt="mob-app-dev"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/mob-app-dev--icon.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NTI1OjEyMw==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/mob-app-dev--icon.svg"
                />
                <h3>App Development</h3>
                <p>
                  For the past decade we have been creating high performance,
                  feature-packed mobile applications that will meet all your
                  expectations.
                </p>
              </div>
              <div className="card">
                <img
                  alt="Full Stack Development"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/full-stack--icon.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NTQyOjQ4-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/full-stack--icon.svg"
                />
                <h3>Full Stack Development</h3>
                <p>
                  We provide skillful software engineering to the full spectrum
                  of technologies from simple frontend prototyping to the
                  high-performing backend.
                </p>
              </div>
              <div className="card">
                <img
                  alt="QA Testing"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/qa-testing--icon.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NTQ4OjEyMQ==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/qa-testing--icon.svg"
                />
                <h3>QA Testing</h3>
                <p>
                  A wide range of independent software QA and testing services
                  that adhere to the highest levels of security and industry
                  standards.
                </p>
              </div>
              <div className="card">
                <img
                  alt="Support"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/support--icon.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NTU0OjExNQ==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/support--icon.svg"
                />
                <h3>Support</h3>
                <p>
                  SLA based platform support with different maintenance plans to
                  avoid any downtime, manage feature enhancements & maintenance
                  of your app.
                </p>
              </div>
              <div className="card">
                <img
                  alt="Backend Development"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/backend-dev--icon.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NTM1OjQ1-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/backend-dev--icon.svg"
                />
                <h3>Backend Development</h3>
                <p>
                  We build extensible on-premise and cloud-based back-end
                  solutions for mobile, web, desktop systems that scale with
                  your growing needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section-2">
          <div className="auto-container">
            <div className="ms-service-title tech-title">
              <p>OUR PROCESS</p>
              <h2 className="home-heading-two">How We Do It</h2>
            </div>
            <div className="cm-row">
              <div className="cm-column  line">
                <span>1</span>
                <h3>Requirements Gathering</h3>
                <ul>
                  <li>Requirements Definition</li>
                  <li>Analyzing the requirements</li>
                  <li>Documenting the process</li>
                  <li>Provide initial design</li>
                </ul>
              </div>
              <div className="cm-column  line">
                <span>2</span>
                <h3>Development & Testing</h3>

                <ul>
                  <li>Frontend & backend development</li>
                  <li>Weekly Client Feedback (SCRUM)</li>
                  <li>QA Testing</li>
                  <li>Deployment</li>
                </ul>
              </div>
              <div className="cm-column">
                <span>3</span>
                <h3>Support & Maintenance</h3>
                <ul>
                  <li>SLA Based Support</li>
                  <li>L3 and Production Support Services</li>
                  <li>Operational support where needed</li>
                  <li>On-going Support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="rtt-section">
          <div className="container text-btn">
            <h2 className="home-heading-two">Ready to Get Started?</h2>
            <a className="custo-btn" id="stylebtn">
              Let's Talk
            </a>
          </div>
        </section>

        <section className="brand-section-2">
          <div className="auto-container">
            <div className="ms-service-title tech-title">
              <p>LATEST TECHNOLOGIES</p>
              <h2 className="home-heading-two">
                Constantly Pushing Our Limits To Explore Latest Technologies
              </h2>
            </div>
            <div className="offer-cards">
              <div className="card">
                <img
                  alt="geo-tracking"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/mob-geo-tracking--icon.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NjA2OjEyOQ==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/mob-geo-tracking--icon.svg"
                />
                <h3>Geo Tracking</h3>
                <p>
                  We can embed geolocation technology in your app for mobile
                  workforce management, fleet tracking to geo-fencing,
                  geo-targeting and location-aware in-app messaging.
                </p>
              </div>
              <div className="card">
                <img
                  alt="mob-ar-vr"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/mob-ar-vr--icon.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NjExOjExOQ==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/mob-ar-vr--icon.svg"
                />
                <h3>Virtual/Augmented Reality</h3>
                <p>
                  With Apple launching ARKit and Google’s ARCore hitting the
                  market, we now have two rock-solid platforms for the
                  development of augmented reality apps for mobile devices.
                </p>
              </div>
              <div className="card">
                <img
                  alt="mob-wearables"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/mob-wearables--icon.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NjE2OjEyNw==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/mob-wearables--icon.svg"
                />
                <h3>Wearables</h3>
                <p>
                  We are early adopters of new technology frameworks and offer
                  ground-breaking wearable development services for frontline,
                  innovative businesses.
                </p>
              </div>
              <div className="card">
                <img
                  alt="mob-ibeacon"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/mob-ibeacon@1x.webp"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NjIxOjEyMQ==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/mob-ibeacon@1x.webp"
                />
                <h3>iBeacon</h3>
                <p>
                  Using iBeacon and location-based technology, we offer bespoke
                  solutions for your business to enhance your audience reach.
                </p>
              </div>
              <div className="card">
                <img
                  alt="mob-iot"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/mob-iot--icon.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NjI2OjExNQ==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/mob-iot--icon.svg"
                />
                <h3>Internet of Things</h3>
                <p>
                  We can build exceptional mobile experiences for the fast-paced
                  mobile industry for years, giving top-class IOT mobile app
                  development experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="discuss-section">
          <div class="auto-container">
            <div class="inner-container">
              <div class="color-layer"></div>
              <div class="row clearfix">
                <div class="title-column col-lg-8 col-md-12 col-sm-12">
                  <div class="inner-column">
                    <h3>
                      Let's co-create the right <br /> digital IT solution for
                      your business.
                    </h3>
                  </div>
                </div>

                <div class="image-column col-lg-4 col-md-12 col-sm-12">
                  <div class="inner-column">
                    <div class="image">
                      <a href="#" class="theme-btn btn-style-one">
                        <span class="txt">Let’s Discuss</span>
                      </a>
                    </div>
                  </div>
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
