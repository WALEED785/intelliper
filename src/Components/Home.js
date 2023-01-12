import React from "react";

import img1 from "../assets/images/resource/image-1.jpg";
import img6 from "../assets/images/main-slider/image-6.png";
import process1 from "../assets/images/resource/process-1.png";
import process2 from "../assets/images/resource/process-2.png";
import process3 from "../assets/images/resource/process-3.png";
import process4 from "../assets/images/resource/process-4.png";
import services1 from "../assets/images/resource/service-1.png";
import services2 from "../assets/images/resource/service-2.png";
import services3 from "../assets/images/resource/service-3.png";
import success from "../assets/images/resource/success.png";
import success1 from "../assets/images/resource/success-1.jpg";
import business1 from "../assets/images/resource/business-1.png";
import business2 from "../assets/images/resource/business-2.png";
import business3 from "../assets/images/resource/business-3.png";
import business4 from "../assets/images/resource/business-4.png";
import business5 from "../assets/images/resource/business-5.png";
import business6 from "../assets/images/resource/business-6.png";
import author1 from "../assets/images/resource/author-1.jpg";
import author2 from "../assets/images/resource/author-2.jpg";
import author3 from "../assets/images/resource/author-3.jpg";
import author4 from "../assets/images/resource/author-4.jpg";
import case20 from "../assets/images/resource/case-20.jpg";
import case21 from "../assets/images/resource/case-20.jpg";
import case22 from "../assets/images/resource/case-20.jpg";
import case1 from "../assets/images/resource/case-1.jpg";
import case2 from "../assets/images/resource/case-2.jpg";
import case3 from "../assets/images/resource/case-3.jpg";
import discuss from '../assets/images/resource/discuss.png'
import Header from "./header";
import Footer from "./Footer";
// import { Carousel } from "react-bootstrap";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";




const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
export default function Home() {
  
  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button onClick={() => onClick()} />;
  };
  
  return (
    <div>
      <div className="page-wrapper">
        <Header/>
        <section className="banner-section">
          <div className="color-layer"></div>
          <div className="auto-container">
            <div className="row clearfix">
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <h1>We provide truly prominent IT solutions.</h1>
                  <div className="text">
                    IT Services for all your Business Needs
                  </div>
                  <div className="btns-box">
                    <a href="#" style={{textDecoration: "none"}} className="theme-btn btn-style-one">
                      <span className="txt">Let's Talk</span>
                    </a>
                    {/* btn-style-one theme-btn */}
                  </div>
                </div>
              </div>

              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="image" data-tilt data-tilt-max="4">
                    <img src={img6} alt="" />
                  </div>
                </div>
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
        <section className="business-section">
          <div className="circle-layer"></div>
          <div className="circle-layer-two"></div>
          <div className="auto-container">
            <div className="sec-title centered">
              <h2>
                Here are some of solutions suiting <br /> your business needs.
              </h2>
              <div className="text">
                Choose your coach training based on the program offerings, your
                instinct, <br /> We are different from a traditional IT staffing
                agency
              </div>
            </div>
            <div className="row clearfix">
              <div className="business-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon">
                    <div className="color-circle"></div>
                    <img src={business1} alt="" />
                  </div>
                  <h3>
                    <Link to='/custome-software' style={{textDecoration: "none"}}>Custom Software Development</Link>
                  </h3>
                  <div className="text">
                    We are Australia highest rated Search Marketing, Creative IT agency on australia in 2021.
                  </div>
                  <Link to='/custome-software' className="explore">
                    Explore More
                  </Link>
                </div>
              </div>

              <div className="business-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon">
                    <div className="color-circle"></div>
                    <img src={business2} alt="" />
                  </div>
                  <h3>
                    <Link to='/web-development-software' style={{textDecoration: "none"}}>Web App Development</Link>
                  </h3>
                  <div className="text"> 
                  <br/>
                  We believe in building interactive web applications, To create experiences beyond our clients’ expectations.
                  </div>
                  <Link to='/web-development-software' className="explore">
                    Explore More
                  </Link>
                </div>
              </div>

              <div className="business-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon">
                    <div className="color-circle"></div>
                    <img src={business3} alt="" />
                  </div>
                  <h3>
                    <Link to='/mobile-app-development-software' style={{textDecoration: "none"}}>Mobile App Development</Link>
                  </h3>
                  <div className="text">
                      Leveraging latest technological tools, We build high performance apps to scale your business.
                  </div>
                  <Link to='/mobile-app-development-software' className="explore">
                    Explore More
                  </Link>
                </div>
              </div>

              <div className="business-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon">
                    <div className="color-circle"></div>
                    <img src={business4} alt="" />
                  </div>
                  <h3>
                    <Link to='' style={{textDecoration: "none"}}>UI/UX Design</Link>
                  </h3>
                  <div className="text">
                    <br/>
                    Create complex enterprise software, ensure reliable software
                    integration, modernise your legacy system.
                  </div>
                  <Link to='' className="explore">
                    Explore More
                  </Link>
                </div>
              </div>

              <div className="business-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon">
                    <div className="color-circle"></div>
                    <img src={business5} alt="" />
                  </div>
                  <h3>
                    <Link to='/embedded-software-development' style={{textDecoration: "none"}}>Embedded Software Development Services</Link>
                  </h3>
                  <div className="text">
                  Hire Experienced & Dedicated Embedded Software Developers Now
                  </div>
                  <br/>
                  <Link to='/embedded-software-development' className="explore">
                    Explore More
                  </Link>
                </div>
              </div>

              <div className="business-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon">
                    <div className="color-circle"></div>
                    <img src={business6} alt="" />
                  </div>
                  <h3>
                    <Link to='/devops-services' style={{textDecoration: "none"}}>DevOps</Link>
                  </h3>
                  <div className="text">
                    <br/>
                  DevOps solutions automate away inefficiencies and improve the quality and security of software.
                  </div>
                  <Link to='/devops-services' className="explore">
                    Explore More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="process-section">
          <div className="circle-layer"></div>
          <div className="auto-container">
            <div className="sec-title centered">
              <div className="title">Work Process</div>
              <h2>Our Working Process</h2>
            </div>
            <div className="row clearfix">
              <div className="process-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon">
                    <img src={process1} alt="" />
                  </div>
                  <h3>
                    <a href="case-detail.html">Discovery</a>
                  </h3>
                  <div className="text">
                    Consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </div>
                </div>
              </div>

              <div className="process-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon">
                    <img src={process2} alt="" />
                  </div>
                  <h3>
                    <a href="case-detail.html">Planning</a>
                  </h3>
                  <div className="text">
                    Consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </div>
                </div>
              </div>

              <div className="process-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon">
                    <img src={process3} alt="" />
                  </div>
                  <h3>
                    <a href="case-detail.html">Practise</a>
                  </h3>
                  <div className="text">
                    Consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </div>
                </div>
              </div>

              <div className="process-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon">
                    <img src={process4} alt="" />
                  </div>
                  <h3>
                    <a href="case-detail.html">Delivery</a>
                  </h3>
                  <div className="text">
                    Consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="success-section">
          <div className="bottom-color-layer"></div>
          <div className="left-white-bar"></div>
          <div className="right-white-bar"></div>
          <div className="auto-container">
            <div className="row clearfix">
              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="color-layer"></div>
                  <div className="color-layer-two"></div>
                  <div className="image">
                    <img src={success} alt="" />
                  </div>
                </div>
              </div>

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
            </div>

            <div className="success-info-tabs">
              <div className="success-tabs tabs-box">
                <ul className="tab-btns tab-buttons clearfix">
                  <li data-tab="#prod-value" className="tab-btn active-btn">
                    Build Your Dedicated Teams
                  </li>
                  <li data-tab="#prod-mission" className="tab-btn">
                    Fixed Price Project
                  </li>
                </ul>
                <div className="tabs-content">
                  <div className="tab active-tab" id="prod-value">
                    <div className="content">
                      <div className="row clearfix">
                        <div className="content-column col-lg-6 col-md-12 col-sm-12">
                          <h3>Our teams at your service</h3>
                          <div className="text">
                            <p>
                              Get your projects fast-tracked with best technical
                              and management talent. Increase quality and
                              efficiency, and retain complete control of teams.
                            </p>
                          </div>
                          <button className="btn btn-success">
                            BUILD YOUR TEAM
                          </button>
                        </div>
                        <div className="image-column col-lg-6 col-md-12 col-sm-12">
                          <div className="color-box"></div>
                          <div className="image">
                            <img src={img1} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab" id="prod-mission">
                    <div className="content">
                      <div className="row clearfix">
                        <div className="content-column col-lg-6 col-md-12 col-sm-12">
                          <h3>We design and develop your vision</h3>
                          <div className="text">
                            <p>
                              Get a comprehensive product development experience
                              from design to delivery with reduced development
                              costs.
                            </p>
                          </div>
                          <button className="btn btn-primary">
                            DEVELOP YOUR PRODUCT{" "}
                          </button>
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

        <section className="testimonial-section">
          <div className="color-layer"></div>
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

        <section className="case-study-section-two">
          <div className="auto-container">
            <div className="sec-title style-two centered">
              <div className="title">`Case studies</div>
              <h2>Digital IT Case studies</h2>
            </div>
          </div>
          <Carousel
            customRightArrow={<CustomRightArrow />}
            arrows={false} 
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px" 
          >
            <div style={{display: "flex", justifyContent: "center", height: "400px"}}><img src={case2} /></div>
            <div style={{display: "flex", justifyContent: "center", height: "400px"}}><img src={case1} /></div>
            <div style={{display: "flex", justifyContent: "center", height: "400px"}}><img src={case3} /></div>
            <div style={{display: "flex", justifyContent: "center", height: "400px"}}><img src={case1} /></div>
            <div style={{display: "flex", justifyContent: "center", height: "400px"}}><img src={case2} /></div>
            <div style={{display: "flex", justifyContent: "center", height: "400px"}}><img src={case3} /></div>
            <div style={{display: "flex", justifyContent: "center", height: "400px"}}><img src={case3} /></div>
            <div style={{display: "flex", justifyContent: "center", height: "400px"}}><img src={case2} /></div>
            <div style={{display: "flex", justifyContent: "center", height: "400px"}}><img src={case1} /></div>
            <div style={{display: "flex", justifyContent: "center"}}><img src={case3} /></div>
            <div style={{display: "flex", justifyContent: "center"}}><img src={case2} /></div>
            <div style={{display: "flex", justifyContent: "center"}}><img src={case1} /></div>
          </Carousel>
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
                  <a href="contact.html#" class="theme-btn btn-style-one">
                    <span class="txt">Let’s Discuss</span>
                  </a>
                </div>
              </div>

              <div class="image-column col-lg-4 col-md-12 col-sm-12">
                <div class="inner-column">
                  <div class="image">
                    <img src={discuss} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        <Footer />
      </div>
    </div>
  );
}
