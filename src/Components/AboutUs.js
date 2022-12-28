import React from "react";
import Footer from "./Footer";
import Header from "./header";

import success from '../assets/images/resource/success.png'
import success1 from '../assets/images/resource/success-1.jpg'
import team1 from '../assets/images/resource/team-1.jpg'
import team2 from '../assets/images/resource/team-2.jpg'
import team3 from '../assets/images/resource/team-3.jpg'
import team4 from '../assets/images/resource/team-4.jpg'
import author1 from '../assets/images/resource/author-1.jpg'
import author2 from '../assets/images/resource/author-2.jpg'
import author3 from '../assets/images/resource/author-3.jpg'
import author4 from '../assets/images/resource/author-4.jpg'

export default function AboutUs() {
  return (
    <>
      <div className="page-wrapper">
        <Header />
        <section className="page-title-section">
          <div className="auto-container">
            <div className="content-boxed">
              <div className="inner-box">
                <div className="title">About us</div>
                <h2>
                  We're a team of creatives who <br /> are excited about new
                  ideas
                </h2>
                <div className="text">
                  Esonit enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut <br /> aliquip ex ea commodo consequat.{" "}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="chain-section style-three">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="blocks-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="color-layer"></div>
                  <div className="blocks-outer">
                    <div className="chain-block">
                      <div className="inner-box">
                        <div className="content">
                          <div className="icon flaticon-check-4"></div>
                          <div className="title">Cloud</div>
                          <h4>
                            Cloud solutions & <br /> management
                          </h4>
                        </div>
                      </div>
                    </div>

                    <div className="chain-block">
                      <div className="inner-box">
                        <div className="content">
                          <div className="icon flaticon-check-4"></div>
                          <div className="title">Software</div>
                          <h4>
                            Software solutions & <br /> services
                          </h4>
                        </div>
                      </div>
                    </div>

                    <div className="chain-block">
                      <div className="inner-box">
                        <div className="content">
                          <div className="icon flaticon-check-4"></div>
                          <div className="title">Product</div>
                          <h4>
                            Product lifecycle <br /> services
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <h2>
                    Supply <br /> Chain Optimization
                  </h2>
                  <div className="text">
                    <p>
                      Our powerful procurement tools and dedicated consultants
                      simplify how your business buys and manages hardware and
                      software. We provide end-to-end support for your entire IT
                      lifecycle.
                    </p>
                    <p>
                      We provide end-to-end support for your entire IT
                      lifecycle.
                    </p>
                  </div>
                  <a href="leadership.html" className="theme-btn btn-style-three">
                    <span className="txt">Read More</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="success-section">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <h2>We're all about creating your success</h2>
                  <div className="text">
                    <p>
                      Most companies have core values – the beliefs or guiding
                      principles that define how they expect to conduct
                      business. Our particular core values are unique to us.
                    </p>
                    <p>
                      From Web’s earliest days, our business has been built on
                      the principles of fairness, integrity, and respect for
                      people. Or, as company founder Bob Fulton puts it, “The
                      Essence of Life is Relationships.” As a company, we
                      believe that everyone has an inherent worth,
                    </p>
                  </div>
                </div>
              </div>

              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="color-layer"></div>
                  <div className="color-layer-two"></div>
                  <div className="image">
                    <img src={success} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="success-info-tabs">
              <div className="success-tabs tabs-box">
                <ul className="tab-btns tab-buttons clearfix">
                  <li data-tab="#prod-value" className="tab-btn active-btn">
                    Our Values
                  </li>
                  <li data-tab="#prod-mission" className="tab-btn">
                    Our Mission
                  </li>
                  <li data-tab="#prod-story" className="tab-btn">
                    Our Story
                  </li>
                </ul>

                <div className="tabs-content">
                  <div className="tab active-tab" id="prod-value">
                    <div className="content">
                      <div className="row clearfix">
                        <div className="content-column col-lg-6 col-md-12 col-sm-12">
                          <h3>
                            Our particular core <br /> values are unique <br />{" "}
                            to us
                          </h3>
                          <div className="text">
                            Most companies have core values – the beliefs or
                            guiding principles that define how they expect to
                            conduct business. Our particular core values are
                            unique to us.
                          </div>
                        </div>
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                          <div className="color-box"></div>
                          <div className="image">
                            <img src={success1} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab" id="prod-mission">
                    <div className="content">
                      <div className="row clearfix">
                        <div className="content-column col-lg-6 col-md-12 col-sm-12">
                          <h3>
                            Our particular core <br /> values are unique <br />{" "}
                            to us
                          </h3>
                          <div className="text">
                            Most companies have core values – the beliefs or
                            guiding principles that define how they expect to
                            conduct business. Our particular core values are
                            unique to us.
                          </div>
                        </div>
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                          <div className="color-box"></div>
                          <div className="image">
                            <img src={success1} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab" id="prod-story">
                    <div className="content">
                      <div className="row clearfix">
                        <div className="content-column col-lg-6 col-md-12 col-sm-12">
                          <h3>
                            Our particular core <br /> values are unique <br />{" "}
                            to us
                          </h3>
                          <div className="text">
                            Most companies have core values – the beliefs or
                            guiding principles that define how they expect to
                            conduct business. Our particular core values are
                            unique to us.
                          </div>
                        </div>
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                          <div className="color-box"></div>
                          <div className="image">
                            <img src={success1} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="team-section">
          <div className="auto-container">
            <div className="sec-title centered">
              <div className="title">Our Team</div>
              <h2>
                We have skilled members <br /> to serve you
              </h2>
              <div className="text">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip <br /> ex ea commodo consequat.{" "}
              </div>
            </div>
            <div className="row clearfix">
              <div className="team-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <a href="case-detail.html">
                      <img src={team1} alt="" />
                    </a>
                  </div>
                  <div className="lower-content">
                    <h4>
                      <a href="case-detail.html">Floriour Pondit</a>
                    </h4>
                    <div className="designation">Senour User Experiencea</div>
                  </div>
                </div>
              </div>

              <div className="team-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <a href="case-detail.html">
                      <img src={team2} alt="" />
                    </a>
                  </div>
                  <div className="lower-content">
                    <h4>
                      <a href="case-detail.html">Mahfuz Riad</a>
                    </h4>
                    <div className="designation">Senour User Experiencea</div>
                  </div>
                </div>
              </div>

              <div className="team-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <a href="case-detail.html">
                      <img src={team3} alt="" />
                    </a>
                  </div>
                  <div className="lower-content">
                    <h4>
                      <a href="case-detail.html">John MacInnes</a>
                    </h4>
                    <div className="designation">Senour User Experiencea</div>
                  </div>
                </div>
              </div>

              <div className="team-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <a href="case-detail.html">
                      <img src={team4} alt="" />
                    </a>
                  </div>
                  <div className="lower-content">
                    <h4>
                      <a href="case-detail.html">Virginia Gutierrez</a>
                    </h4>
                    <div className="designation">Senour User Experiencea</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonial-section">
          <div className="auto-container">
            <div className="inner-container">
              <div className="row clearfix">
                <div className="left-column col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="inner-column">
                    <div className="testimonial-block">
                      <div
                        className="inner-box wow fadeInLeft"
                        data-wow-delay="0ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="author-image">
                          <img src={author1} alt="" />
                        </div>
                        <div className="content">
                          <h5>Mahfuz Riad</h5>
                          <div className="text">
                            Duis aute irure dolor in reprehender it in voluptate
                            velit esse cillum dolore eu
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="testimonial-block">
                      <div
                        className="inner-box wow fadeInLeft"
                        data-wow-delay="150ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="author-image">
                          <img src={author2} alt="" />
                        </div>
                        <div className="content">
                          <h5>Rashed Ka</h5>
                          <div className="text">
                            Duis aute irure dolor in reprehender it in voluptate
                            velit esse cillum dolore eu
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="title-column col-xl-4 col-lg-12 col-md-12 col-sm-12">
                  <div
                    className="inner-column wow fadeInUp"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="quote-icon flaticon-quote-2">
                      <span className="circle"></span>
                    </div>
                    <h2>
                      Our valuable success <br /> clients story
                    </h2>
                    <div className="text">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                  </div>
                </div>

                <div className="right-column col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="inner-column">
                    <div className="testimonial-block style-two">
                      <div
                        className="inner-box wow fadeInRight"
                        data-wow-delay="0ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="author-image">
                          <img src={author3} alt="" />
                        </div>
                        <div className="content">
                          <h5>Foqrul islam</h5>
                          <div className="text">
                            Duis aute irure dolor in reprehender it in voluptate
                            velit esse cillum dolore eu
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="testimonial-block style-two">
                      <div
                        className="inner-box wow fadeInRight"
                        data-wow-delay="150ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="author-image">
                          <img src={author4} alt="" />
                        </div>
                        <div className="content">
                          <h5>Tamim Anjum</h5>
                          <div className="text">
                            Duis aute irure dolor in reprehender it in voluptate
                            velit esse cillum dolore eu
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="counter-section">
          <div className="auto-container">
            <div className="fact-counter">
              <div className="row clearfix">
                <div className="column counter-column col-lg-4 col-md-4 col-sm-12">
                  <div
                    className="inner wow fadeInLeft"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="content">
                      <div className="count-outer count-box">
                        <span
                          className="count-text"
                          data-speed="3500"
                          data-stop="236"
                        >
                          0
                        </span>
                        +
                      </div>
                      <div className="counter-title">Succeeded projects</div>
                      <div className="text">
                        Sint occaecat cupidatat non proident sunt in culpa qui
                        officia
                      </div>
                    </div>
                  </div>
                </div>

                <div className="column counter-column col-lg-4 col-md-4 col-sm-12">
                  <div
                    className="inner wow fadeInLeft"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="content">
                      <div className="count-outer count-box">
                        <span
                          className="count-text"
                          data-speed="2500"
                          data-stop="3036"
                        >
                          0
                        </span>
                        +
                      </div>
                      <div className="counter-title">Working hours</div>
                      <div className="text">
                        Sint occaecat cupidatat non proident sunt in culpa qui
                        officia
                      </div>
                    </div>
                  </div>
                </div>

                <div className="column counter-column col-lg-4 col-md-4 col-sm-12">
                  <div
                    className="inner wow fadeInLeft"
                    data-wow-delay="600ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="content">
                      <div className="count-outer count-box">
                        <span
                          className="count-text"
                          data-speed="3000"
                          data-stop="46"
                        >
                          0
                        </span>
                        +
                      </div>
                      <div className="counter-title">Happy Client</div>
                      <div className="text">
                        Sint occaecat cupidatat non proident sunt in culpa qui
                        officia
                      </div>
                    </div>
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
                      Already member <a href="about.html#">Sign in</a>
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
