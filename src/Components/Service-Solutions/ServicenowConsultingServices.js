import React from "react";
import Footer from "../Footer";
import Header from "../header";

import service10 from "../../assets/images/resource/service-10.png";
import design1 from "../../assets/images/resource/design-1.png";
import design2 from "../../assets/images/resource/design-2.png";
import { Link } from "react-router-dom";

export default function ServicenowConsultingServices() {
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
                    ServiceNow Services
                  </p>
                  <h2>
                    Driving Process efficiency through ServiceNow Services
                  </h2>
                  <div class="text">
                    Helping you bring optimization and effectiveness to your
                    workflows.
                  </div>
                  <a
                    href="#"
                    style={{ textDecoration: "none" }}
                    class="btn-style-one theme-btn"
                  >
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

        <section class="services-section">
          <div class="container">
            <div class="offer-title">
              <h2 class="home-heading-two">What We Do</h2>{" "}
            </div>
            <div class="offer-cards">
              <div class="card">
                <img
                  alt="Experience Design"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/experience-design--icon.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NTIzOjQz-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/experience-design--icon.svg"
                />
                <h3>Advisory Services</h3>
                <p>
                  Strategic planning for your ServiceNow investment based on
                  your process, people, and requirements to ensure that you get
                  the best out of the platform.
                </p>
              </div>
              <div class="card">
                <img
                  alt="UI/UX"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/advice-service--logo.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NTI5OjEyMA==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/advice-service--logo.svg"
                />
                <h3>User Interface &amp; Experience</h3>{" "}
                <p>
                  Focusing on simplicity and modern design trends, our app
                  designs are ergonomic and beautiful, delivering productive
                  experiences to the user.
                </p>
              </div>
              <div class="card">
                <img
                  alt="Implementation"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/backend-dev--icon.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NTM1OjEyNg==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/backend-dev--icon.svg"
                />
                <h3>Implementation</h3>
                <p>
                  ServiceNow’s built in versatility allows it to be configured
                  to accomplish various basic tasks without a need for extensive
                  custom development.
                </p>
              </div>
              <div class="card">
                <img
                  alt="Custom Development"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/full-stack--icon.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NTQyOjQ0-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/full-stack--icon.svg"
                />{" "}
                <h3>Custom Development</h3>{" "}
                <p>
                  Our engineers can write custom scripts and code within
                  ServiceNow if your requirements lie outside the reach of the
                  platform’s standard functionality.
                </p>{" "}
              </div>{" "}
              <div class="card">
                {" "}
                <img
                  alt="Integrations"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/integrations--logo.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NTQ4OjEyNQ==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/integrations--logo.svg"
                />
                <h3>Integrations</h3>{" "}
                <p>
                  ServiceNow’s adaptability to link with other systems makes it
                  particularly useful. We help you drive business value by
                  integrating your ServiceNow instance with your preferred
                  setup.
                </p>{" "}
              </div>{" "}
              <div class="card">
                {" "}
                <img
                  alt="support"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/support--icon.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NTU0OjExNQ==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/support--icon.svg"
                />{" "}
                <h3>Management and Administration</h3>{" "}
                <p>
                  Low on internal resources? Our engineers can act as an
                  extension to your team to maximize your return on investment.
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div class="btn-wrap">
              {" "}
              <a href="#cta-dark" class="service-btn">
                Tell Us What You Need <i class="la la-arrow-right"></i>
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </section>

        <section class="experties">
          <div class="container">
            <div class="exprt-title">
              <h2 class="home-heading-two">Our Service Now Expertise</h2>
            </div>
            <div class="exprt-row">
              <div class="exprt-column">
                <div class="card c-typ1">
                  <div class="card-title" style={{ alignItems: "right" }}>
                    <img
                      alt="Risk Compliance"
                      nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/risk-comp--logo.svg"
                      class=" lazyloaded"
                      nitro-lazy-empty=""
                      id="NTc3OjQ5-1"
                      src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/risk-comp--logo.svg"
                    />
                    <h4>Risk &amp; Compliance</h4>
                  </div>
                  <p>
                    Integrating automation, compliance activities, and risk
                    management into your daily processes enabling complete
                    transparency and prioritization of risk.
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              <div class="exprt-column">
                {" "}
                <div class="card c-typ2">
                  {" "}
                  <div class="card-title">
                    {" "}
                    <img
                      alt="NOW Platform"
                      nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/now-platform--logo.svg"
                      class=" lazyloaded"
                      nitro-lazy-empty=""
                      id="NTg5OjQ2-1"
                      src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/now-platform--logo.svg"
                    />
                    <h4>NOW Platform</h4>{" "}
                  </div>{" "}
                  <p>
                    Supercharging apps with built-in predictive intelligence,
                    and empowering teams to build custom apps to suit their
                    workflows.
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div class="exprt-row m-center">
              {" "}
              <div class="exprt-column">
                {" "}
                <div class="card c-typ1">
                  {" "}
                  <div class="card-title">
                    {" "}
                    <img
                      alt="HR Service"
                      nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/hr-services--logo.svg"
                      class=" lazyloaded"
                      nitro-lazy-empty=""
                      id="NjAzOjQ0-1"
                      src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/hr-services--logo.svg"
                    />
                    <h4>HR Service</h4>{" "}
                  </div>{" "}
                  <p>
                    Countering frustrations with intelligent services designed
                    to improve employee satisfaction and increase engagement.
                  </p>{" "}
                </div>{" "}
                <div class="card c-typ1">
                  {" "}
                  <div class="card-title">
                    {" "}
                    <img
                      alt="Customer Service"
                      nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/custom-care--logo.svg"
                      class=" lazyloaded"
                      nitro-lazy-empty=""
                      id="NjEyOjUw-1"
                      src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/custom-care--logo.svg"
                    />
                    <h4>Customer Service</h4>{" "}
                  </div>{" "}
                  <p>
                    Making customer service seamless, allowing you to gain
                    valuable feedback and to respond to it effectively and
                    quickly.
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              <div class="exprt-column">
                {" "}
                <div class="c-type-img">
                  {" "}
                  <img
                    alt="service now logo"
                    nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/service-now-c--logo.svg"
                    class=" lazyloaded"
                    nitro-lazy-empty=""
                    id="NjIyOjQ2-1"
                    src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/service-now-c--logo.svg"
                  />
                </div>{" "}
              </div>{" "}
              <div class="exprt-column">
                {" "}
                <div class="card c-typ2">
                  {" "}
                  <div class="card-title">
                    <img
                      alt="IT Operations"
                      nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/risk-comp--logo.svg"
                      class=" ls-is-cached lazyloaded"
                      nitro-lazy-empty=""
                      id="NjI5OjQ3-1"
                      src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/risk-comp--logo.svg"
                    />
                    <h4>IT Operations</h4>{" "}
                  </div>{" "}
                  <p>
                    Helping you increase visibility across infrastructure and
                    apps, minimizing risk and cost, and maintaining service
                    level health.
                  </p>
                </div>{" "}
                <div class="card c-typ2">
                  {" "}
                  <div class="card-title">
                    {" "}
                    <img
                      alt="Risk Compilations"
                      nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/risk-comp--logo.svg"
                      class=" ls-is-cached lazyloaded"
                      nitro-lazy-empty=""
                      id="NjM4OjUx-1"
                      src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/risk-comp--logo.svg"
                    />
                    <h4>IT Service</h4>{" "}
                  </div>{" "}
                  <p>
                    Designed to manage and optimize IT services, and to make
                    knowledge sharing simpler for customers and employees alike.
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div class="exprt-row">
              {" "}
              <div class="exprt-column">
                {" "}
                <div class="card c-typ1">
                  {" "}
                  <div class="card-title">
                    {" "}
                    <img
                      alt="IT Business"
                      nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/risk-comp--logo.svg"
                      class=" ls-is-cached lazyloaded"
                      nitro-lazy-empty=""
                      id="NjUxOjQ1-1"
                      src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/risk-comp--logo.svg"
                    />{" "}
                    <h4>IT Business</h4>{" "}
                  </div>{" "}
                  <p>
                    Aligning workflows with your core business needs, and
                    driving innovation, planning, and execution to achieve set
                    goals.
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              <div class="exprt-column">
                {" "}
                <div class="card c-typ2">
                  {" "}
                  <div class="card-title">
                    <img
                      alt="Software Asset"
                      nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/now-platform--logo.svg"
                      class=" ls-is-cached lazyloaded"
                      nitro-lazy-empty=""
                      id="NjYyOjQ4-1"
                      src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/now-platform--logo.svg"
                      s
                    />{" "}
                    <h4>Software Asset</h4>{" "}
                  </div>
                  <p>
                    Enabling you get the best out of your software license data,
                    reduce expenditure, and intelligently operate your business
                    services.
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>

        <section className="rtt-section">
          <div className="container text-btn">
            <h2 className="home-heading-two">Ready to Get Started?</h2>
            <a className="custo-btn" id="stylebtn">
              Let's Talk
            </a>
          </div>
        </section>

        <section class="offer-section nitro-offscreen">
          <div class="container">
            {" "}
            <div class="offer-title">
              {" "}
              <h2 class="home-heading-two">Service Now helps you</h2>{" "}
            </div>{" "}
            <div class="offer-cards">
              {" "}
              <div class="card">
                {" "}
                <img
                  alt="IT Experience"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/sn--check.svg"
                  class=" ls-is-cached lazyloaded"
                  nitro-lazy-empty=""
                  id="Njg3OjExNw==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/sn--check.svg"
                />
                <h3>Transform your IT experience</h3>{" "}
                <p>
                  Deliver omnichannel customer experiences by deploying purpose
                  built solutions to drive innovation.{" "}
                </p>{" "}
              </div>{" "}
              <div class="card">
                {" "}
                <img
                  alt="Check"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/sn--check.svg"
                  class=" ls-is-cached lazyloaded"
                  nitro-lazy-empty=""
                  id="NjkzOjEwOQ==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/sn--check.svg"
                />
                <h3>Respond faster to security risks &amp; threats</h3>{" "}
                <p>
                  Delivering security through compliance to Cybersecurity
                  standard.
                </p>{" "}
              </div>{" "}
              <div class="card">
                {" "}
                <img
                  alt="Check"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/sn--check.svg"
                  class=" ls-is-cached lazyloaded"
                  nitro-lazy-empty=""
                  id="Njk4OjEwOQ==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/sn--check.svg"
                />
                <h3>Improve Employee Experience</h3>{" "}
                <p>
                  By increasing employee engagement through specialized
                  services.
                </p>{" "}
              </div>{" "}
              <div class="card">
                {" "}
                <img
                  alt="Check"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/sn--check.svg"
                  class=" ls-is-cached lazyloaded"
                  nitro-lazy-empty=""
                  id="NzAzOjEwOQ==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/sn--check.svg"
                />
                <h3>Deliver Business Services effectively</h3>{" "}
                <p>
                  Using AIOps to drive performance and productivity through AI.
                </p>{" "}
              </div>{" "}
              <div class="card">
                {" "}
                <img
                  alt="Check"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/sn--check.svg"
                  class=" ls-is-cached lazyloaded"
                  nitro-lazy-empty=""
                  id="NzA4OjEwOQ==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/sn--check.svg"
                />
                <h3>Delight customers with end-to-end service</h3>{" "}
                <p>
                  Through the use of CSM module and making feedback a priority.
                </p>{" "}
              </div>{" "}
              <div class="card">
                {" "}
                <img
                  alt="Check"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/sn--check.svg"
                  class=" ls-is-cached lazyloaded"
                  nitro-lazy-empty=""
                  id="NzEzOjEwOQ==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/sn--check.svg"
                />{" "}
                <h3>Build seamlessly integrated Applications</h3>{" "}
                <p>
                  Empowering everyone to automate workflows and create ease.
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>


        <Footer />
      </div>
    </>
  );
}
