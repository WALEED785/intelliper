import React from "react";
import Footer from "../Footer";
import Header from "../header";

import service10 from "../../assets/images/resource/service-10.png";
import design1 from "../../assets/images/resource/design-1.png";
import design2 from "../../assets/images/resource/design-2.png";
import { Link } from "react-router-dom";

export default function MulesoftConsultingServices() {
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
                    Mulesoft
                  </p>
                  <h2>
                    Improve organization agility through Mulesoft Solutions
                  </h2>
                  <div class="text">
                    MuleSoft is the platform of choice for modern enterprises
                    who aim to deliver stellar digital experiences for their
                    stakeholders.
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

        <section className="ms-service" style={{ padding: "70px 0px" }}>
          {" "}
          <div class="container">
            <div class="ms-service-title">
              {" "}
              <p>SERVICES</p>{" "}
              <h2 class="home-heading-two">
                Providing End To End MuleSoft Services
              </h2>{" "}
            </div>{" "}
            <div class="serv-row">
              {" "}
              <div class="ms-serv">
                <div class="ms-serv-img">
                  {" "}
                  <img
                    alt="consulting"
                    nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/ms-consulting--icon.svg"
                    class=" lazyloaded"
                    nitro-lazy-empty=""
                    id="NTIzOjEyOA==-1"
                    src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/ms-consulting--icon.svg"
                  />
                </div>{" "}
                <div class="ms-serv-text">
                  {" "}
                  <h3>Consulting</h3>{" "}
                  <p>
                    If you're evaluating MuleSoft, our architects will assess
                    your application landscape and prepare a fully scoped and
                    budgeted solution architecture blueprint.
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              <div class="ms-serv">
                {" "}
                <div class="ms-serv-img">
                  {" "}
                  <img
                    alt="App Delivery"
                    nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/ms-computing--icon.svg"
                    class=" lazyloaded"
                    nitro-lazy-empty=""
                    id="NTMyOjEyOQ==-1"
                    src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/ms-computing--icon.svg"
                  />
                </div>{" "}
                <div class="ms-serv-text">
                  {" "}
                  <h3>App-Delivery</h3>{" "}
                  <p>
                    Our hybrid and cost-effective onsite, onshore, and offshore
                    delivery model provides robust integration and API
                    development on the Anypoint platform ensuring effective API
                    reusability, governance, and visibility.
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              <div class="ms-serv">
                {" "}
                <div class="ms-serv-img">
                  {" "}
                  <img
                    alt="Application Support"
                    nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/ms-app-support--icon.svg"
                    class=" lazyloaded"
                    nitro-lazy-empty=""
                    id="NTQxOjEzOA==-1"
                    src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/ms-app-support--icon.svg"
                  />
                </div>{" "}
                <div class="ms-serv-text">
                  {" "}
                  <h3>Application Support</h3>{" "}
                  <p>
                    We offer round-the-clock support services for monitoring
                    your integration architecture, applications, and fixing any
                    API problems before they start impacting your business.
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              <div class="ms-serv">
                {" "}
                <div class="ms-serv-img">
                  {" "}
                  <img
                    alt="Managed Services"
                    nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/ms-managed-serv--icon.svg"
                    class=" lazyloaded"
                    nitro-lazy-empty=""
                    id="NTUwOjEzNg==-1"
                    src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/ms-managed-serv--icon.svg"
                  />
                </div>{" "}
                <div class="ms-serv-text">
                  {" "}
                  <h3>Managed Services</h3>{" "}
                  <p>
                    Our tailored and scalable managed services offering can help
                    you achieve your business outcomes quicker whether you're
                    looking for helping hands in the middle of a transformation
                    overhaul or are just looking to accelerate project delivery.
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>
        <section class="mswp-section">
          <div class="container mswp-wrapper">
            {" "}
            <div class="left-wrap">
              {" "}
              <div class="left-title">
                {" "}
                <h2 class="home-heading-two heading-read">
                  How We Can Work Together
                </h2>{" "}
              </div>{" "}
              <div class="left-cards">
                {" "}
                <div class="card c1">
                  {" "}
                  <h3>Offsite</h3>{" "}
                  <p>
                    A project is carried out at Tkxel’s software development
                    center from concept to a fully functional.
                  </p>{" "}
                </div>{" "}
                <div class="card c2">
                  {" "}
                  <h3>Onsite</h3>{" "}
                  <p>
                    The project is developed on client’s site. Shortlisted
                    candidates travel for the required period.{" "}
                  </p>{" "}
                </div>{" "}
                <div class="card c3">
                  {" "}
                  <h3>Offsite + Onsite</h3>{" "}
                  <p>
                    A part of the team is located at your site to address
                    critical issues and interacts directly with an offshore
                    development team.
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div class="right-wrap">
              {" "}
              <div class="right-title">
                {" "}
                <h2 class="home-heading-two heading-read">
                  Our On-Boarding Process
                </h2>{" "}
              </div>{" "}
              <div class="right-cards">
                {" "}
                <div class="card">
                  {" "}
                  <span>1</span>
                  <img
                    alt="headphone"
                    nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/ms-headphone-alt.svg"
                    class=" lazyloaded"
                    nitro-lazy-empty=""
                    id="NTkxOjEyNA==-1"
                    src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/ms-headphone-alt.svg"
                  />
                  <div class="card-text">
                    {" "}
                    <h4>Talk to us</h4>{" "}
                    <p>Share your vision and requirements with our team.</p>{" "}
                  </div>{" "}
                </div>{" "}
                <div class="card">
                  {" "}
                  <span>2</span>{" "}
                  <img
                    alt="face-smile"
                    nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/ms-face-smile-team.svg"
                    class=" lazyloaded"
                    nitro-lazy-empty=""
                    id="NTk5OjEyNw==-1"
                    src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/ms-face-smile-team.svg"
                  />
                  <div class="card-text">
                    {" "}
                    <h4>Select the Team</h4>{" "}
                    <p>Work with our architects to select the best fit.</p>{" "}
                  </div>{" "}
                </div>{" "}
                <div class="card">
                  {" "}
                  <span>3</span>{" "}
                  <img
                    alt="time-trial"
                    nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/ms-time-trial.svg"
                    class=" lazyloaded"
                    nitro-lazy-empty=""
                    id="NjA3OjEyMg==-1"
                    src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/ms-time-trial.svg"
                  />
                  <div class="card-text">
                    {" "}
                    <h4>Start a Free Trial</h4>{" "}
                    <p>Start your risk free trial period to test your team.</p>{" "}
                  </div>{" "}
                </div>{" "}
                <div class="card">
                  {" "}
                  <span>4</span>{" "}
                  <img
                    alt="magnet-start"
                    nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/ms-magnet-start.svg"
                    class=" ls-is-cached lazyloaded"
                    nitro-lazy-empty=""
                    id="NjE1OjEyNg==-1"
                    src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/ms-magnet-start.svg"
                  />
                  <div class="card-text">
                    {" "}
                    <h4>Get Started</h4>{" "}
                    <p>Satisfied? Carry on with your Selected Team.</p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
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

        <Footer />
      </div>
    </>
  );
}
