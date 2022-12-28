import React from "react";
import Footer from "./Footer";
import Header from "./header";
import career from '../assets/images/resource/career.png'
import service1 from '../assets/images/resource/service-1.png'
import service2 from '../assets/images/resource/service-2.png'
import service3 from '../assets/images/resource/service-3.png'

function Careers() {
  return (
    <>
      <div className="page-wrapper">
        <Header />
        <section className="careers-title-section">
          <div className="auto-container">
            <div className="upper-box">
              <div className="inner-box">
                <div className="title">Careers</div>
                <h1>
                  Do you want to work with us? <br /> Then send your cv
                </h1>
              </div>
            </div>
            <div className="lower-box">
              <div className="row clearfix">
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h2>
                      Come on to work with us! Find your place in our
                      magnificent team.
                    </h2>
                    <div className="text">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                  </div>
                </div>
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image">
                      <img src={career} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="careers-section">
          <div className="auto-container">
            <div className="career-block">
              <div className="inner-box">
                <div className="content">
                  <div className="title">Full time</div>
                  <h4>
                    <a href="case-detail.html">Business Development Manager</a>
                  </h4>
                  <div className="text">
                    This position is about growth and we are looking for an
                    outstanding employee who will be interested in establishing
                    long-term relationships with potential clients all over the
                    world.
                  </div>
                  <div className="btn-box">
                    <a href="case-detail.html" className="theme-btn apply-btn">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="career-block">
              <div className="inner-box">
                <div className="content">
                  <div className="title">Full time</div>
                  <h4>
                    <a href="case-detail.html">Middle Project Manager</a>
                  </h4>
                  <div className="text">
                    This position is about growth and we are looking for an
                    outstanding employee who will be interested in establishing
                    long-term relationships with potential clients all over the
                    world.
                  </div>
                  <div className="btn-box">
                    <a href="case-detail.html" className="theme-btn apply-btn">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="career-block">
              <div className="inner-box">
                <div className="content">
                  <div className="title">Full time</div>
                  <h4>
                    <a href="case-detail.html">IT Desktop Support</a>
                  </h4>
                  <div className="text">
                    This position is about growth and we are looking for an
                    outstanding employee who will be interested in establishing
                    long-term relationships with potential clients all over the
                    world.
                  </div>
                  <div className="btn-box">
                    <a href="case-detail.html" className="theme-btn apply-btn">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="career-block">
              <div className="inner-box">
                <div className="content">
                  <div className="title">Full time</div>
                  <h4>
                    <a href="case-detail.html">IT Operations Specialist</a>
                  </h4>
                  <div className="text">
                    This position is about growth and we are looking for an
                    outstanding employee who will be interested in establishing
                    long-term relationships with potential clients all over the
                    world.
                  </div>
                  <div className="btn-box">
                    <a href="case-detail.html" className="theme-btn apply-btn">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="services-section style-two">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="service-block col-lg-4 col-md-6 col-sm-12">
                <div
                  className="inner-box wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <h3>
                    <a href="case-detail.html">IT Strategy and Consultancy</a>
                  </h3>
                  <div className="icon">
                    <img src={service1} alt="" />
                  </div>
                  <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt{" "}
                  </div>
                </div>
              </div>

              <div className="service-block col-lg-4 col-md-6 col-sm-12">
                <div
                  className="inner-box wow fadeInUp"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <h3>
                    <a href="case-detail.html">
                      World className <br /> Support
                    </a>
                  </h3>
                  <div className="icon">
                    <img src={service2} alt="" />
                  </div>
                  <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt{" "}
                  </div>
                </div>
              </div>

              <div className="service-block col-lg-4 col-md-6 col-sm-12">
                <div
                  className="inner-box wow fadeInRight"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <h3>
                    <a href="case-detail.html">
                      IT Management Data <br /> Services
                    </a>
                  </h3>
                  <div className="icon">
                    <img src={service3} alt="" />
                  </div>
                  <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="newsletter-section">
          <div className="auto-container">
            <div className="inner-container">
              <div className="row clearfix">
                <div className="form-column col-lg-7 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="title-box">
                      <h2>Signup to our newsletter</h2>
                      <div className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed <br /> do eiusmod tempor incididunt{" "}
                      </div>
                    </div>
                    <div className="newsletter-form">
                      <form method="post" action="contact.html">
                        <div className="form-group">
                          <span className="icon fa fa-envelope-o"></span>
                          <input
                            type="email"
                            name="email"
                            value=""
                            placeholder="Enter your eamil address"
                            required
                          />
                          <button
                            type="submit"
                            className="flaticon-next-2 submit-btn"
                          ></button>
                        </div>
                      </form>
                    </div>
                    <div className="member">
                      Already member <a href="careers.html#">Sign in</a>
                    </div>
                  </div>
                </div>

                <div className="image-column col-lg-5 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image">
                      <img
                        src="https://themazine.com/html/Esonit/Esonit/images/resource/newsletter.png"
                        alt=""
                      />
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

export default Careers;
