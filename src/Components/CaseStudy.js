import React from "react";
import Footer from "./Footer";
import Header from "./header";

import case14 from '../assets/images/resource/case-14.jpg'
import case15 from '../assets/images/resource/case-15.jpg'
import case16 from '../assets/images/resource/case-16.jpg'
import case17 from '../assets/images/resource/case-17.jpg'
import case18 from '../assets/images/resource/case-18.jpg'
import service1 from '../assets/images/resource/service-1.png'
import service2 from '../assets/images/resource/service-2.png'
import service3 from '../assets/images/resource/service-3.png'

export default function CaseStudy() {
  return (
    <>
      <div class="page-wrapper">
        <Header />

        <section class="page-title-section style-four">
          <div class="auto-container">
            <div class="content-boxed">
              <div class="inner-box">
                {/* <div class="title">Case Studies</div> */}
                <h2>
                  Here are our popular <br /> Case studies
                </h2>
                <div class="text">
                  We can quickly turn your ideas into cost-effective precision
                  parts and components <br /> that deliver for your most
                  demanding applications.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="case-studio-section-two">
          <div class="auto-container">
            <div class="sec-title centered">
              <h2>
                We have helped 200+ companies progress <br /> with tech
                solutions
              </h2>
              <div class="text">
                The support we provide starts with our experience helping you
                select the right solution.
              </div>
            </div>

            <div class="case-block-three">
              <div class="inner-box">
                <div class="row clearfix">
                  <div class="content-column col-lg-6 col-md-12 col-sm-12">
                    <div class="content">
                      <div class="title">Cloud CRM</div>
                      <h3>
                        <a href="#" style={{textDecoration: "none"}}>
                          Salesforce-Based <br /> Cloud CRM Solution
                        </a>
                      </h3>
                      <div class="categories">
                        Web design, UI design, animation
                      </div>
                      <a style={{textDecoration: "none"}} href="#" class="view-case">
                        View Case
                      </a>
                    </div>
                  </div>
                  <div class="image-column col-lg-6 col-md-12 col-sm-12">
                    <div class="image">
                      <a href="#">
                        <img src={case14} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="case-block-three">
              <div class="inner-box">
                <div class="row clearfix">
                  <div class="image-column col-lg-6 col-md-12 col-sm-12">
                    <div class="image">
                      <a href="#" >
                        <img src={case15} alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="content-column col-lg-6 col-md-12 col-sm-12">
                    <div class="content">
                      <div class="title">Paperwork </div>
                      <h3>
                        <a href="#" style={{textDecoration: "none"}}>
                          Reducing paperwork for <br /> construction companies
                        </a>
                      </h3>
                      <div class="categories">
                        Web design, UI design, animation
                      </div>
                      <a href="#" class="view-case" style={{textDecoration: "none"}}>
                        View Case
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="case-block-three">
              <div class="inner-box">
                <div class="row clearfix">
                  <div class="content-column col-lg-6 col-md-12 col-sm-12">
                    <div class="content">
                      <div class="title">Sass</div>
                      <h3>
                        <a href="#" style={{textDecoration: "none"}}>
                          Developing a SaaS platform <br /> that assists UK
                          homebuyers
                        </a>
                      </h3>
                      <div class="categories">
                        Web design, UI design, animation
                      </div>
                      <a href="#" class="view-case" style={{textDecoration: "none"}}>
                        View Case
                      </a>
                    </div>
                  </div>
                  <div class="image-column col-lg-6 col-md-12 col-sm-12">
                    <div class="image">
                      <a href="#">
                        <img src={case16} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="case-block-three">
              <div class="inner-box">
                <div class="row clearfix">
                  <div class="image-column col-lg-6 col-md-12 col-sm-12">
                    <div class="image">
                      <a href="#">
                        <img src={case17} alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="content-column col-lg-6 col-md-12 col-sm-12">
                    <div class="content">
                      <div class="title">Sass</div>
                      <h3>
                        <a href="#" style={{textDecoration: "none"}}>
                          Developing a SaaS platform <br /> that assists UK
                          homebuyers
                        </a>
                      </h3>
                      <div class="categories">
                        Web design, UI design, animation
                      </div>
                      <a href="#" class="view-case" style={{textDecoration: "none"}}>
                        View Case
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="case-block-three">
              <div class="inner-box">
                <div class="row clearfix">
                  <div class="content-column col-lg-6 col-md-12 col-sm-12">
                    <div class="content">
                      <div class="title">TableZ</div>
                      <h3>
                        <a href="#" style={{textDecoration: "none"}}>
                          Improving a restaurant booking system
                        </a>
                      </h3>
                      <div class="categories">
                        Web design, UI design, animation
                      </div>
                      <a href="#" class="view-case" style={{textDecoration: "none"}}>
                        View Case
                      </a>
                    </div>
                  </div>
                  <div class="image-column col-lg-6 col-md-12 col-sm-12">
                    <div class="image">
                      <a href="#">
                        <img src={case18} alt="" />
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
