import React from "react";
import Footer from "../Footer";
import Header from "../header";

import service10 from "../../assets/images/resource/service-10.png";
import design1 from "../../assets/images/resource/design-1.png";
import design2 from "../../assets/images/resource/design-2.png";
import { Link } from "react-router-dom";

export default function AWSConsultingServices() {
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
                    Amazon Web Services
                  </p>
                  <h2>We help you move your business to AWS cloud</h2>
                  <div class="text">
                    We provide you reliable, scalable, and inexpensive cloud
                    computing services to scale your businesses.
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

        <section>
          {" "}
          <div class="container aws-wrap">
            {" "}
            <div class="img-aws">
              <img
                alt="AWS"
                nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/aws-sec-img.svg"
                class=" lazyloaded"
                nitro-lazy-empty=""
                id="NTIwOjEwNQ==-1"
                src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/aws-sec-img.svg"
              />
            </div>{" "}
            <div class="text-aws">
              {" "}
              <p class="sub-aws">WHY US?</p>{" "}
              <h2 class="home-heading-two ">AWS At intelliper Solution</h2>{" "}
              <p class="body-text">
                Amazon Web Services is a cloud computing platform with extended
                functionalities as it introduces the concoction of Platform as a
                Service, Infrastructure as a Service and Software as a Service.
              </p>{" "}
              <p class="body-text">
              intelliper Solution specializes in building web &amp; mobile applications
                using AWS. Our certified developers build secure, scalable and
                high-performance applications. We deliver innovative solutions
                and transform complex experiences into products that customers
                love.
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </section>
        <section class="offer-section nitro-offscreen">
          {" "}
          <div class="container">
            {" "}
            <div class="offer-title">
              {" "}
              <h2 class="home-heading-two">What We Offer You</h2>{" "}
            </div>{" "}
            <div class="offer-cards">
              {" "}
              <div class="card">
                <img
                  alt="Consulting"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/aws-consulting--icon.svg"
                  class=" ls-is-cached lazyloaded"
                  nitro-lazy-empty=""
                  id="NTQzOjEyNQ==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/aws-consulting--icon.svg"
                />
                <h3>Consulting</h3>{" "}
                <p>
                  Our AWS consultants take an overall view of your business
                  landscape and provide you with a fully scoped and budgeted
                  solution architecture.
                </p>{" "}
              </div>{" "}
              <div class="card">
                <img
                  alt="Implementation"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/aws-computing--icon.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NTQ5OjEyOA==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/aws-computing--icon.svg"
                />
                <h3>Implementation</h3>{" "}
                <p>
                  We have hands-on experience in developing, implementing &amp;
                  migrating apps on leading cloud platforms to help you scale
                  your business.
                </p>{" "}
              </div>{" "}
              <div class="card">
                <img
                  alt="Integrations"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/aws-integration--icon.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NTU0OjEyOA==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/aws-integration--icon.svg"
                />
                <h3>Integrations</h3>{" "}
                <p>
                  From integrating apps with AWS hosted data sources, to
                  connecting multiple complex enterprise scale solutions, we do
                  it all.
                </p>{" "}
              </div>{" "}
              <div class="card">
                <img
                  alt="Backend Development"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/aws-backend--icon.svg"
                  class=" ls-is-cached lazyloaded"
                  nitro-lazy-empty=""
                  id="NTU5OjEzMQ==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/aws-backend--icon.svg"
                />{" "}
                <h3>Backend Development</h3>{" "}
                <p>
                  We help mobile and web app developers build and scale their
                  solutions through AWS based integrated backend.
                </p>{" "}
              </div>{" "}
              <div class="card">
                <img
                  alt="Scaling"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/aws-scaling--icon.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NTY0OjExOQ==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/aws-scaling--icon.svg"
                />{" "}
                <h3>Scaling</h3>{" "}
                <p>
                  We can help scale your backend to handle growing application
                  usage, to avoid downtime, resulting in efficient business
                  operations.
                </p>{" "}
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
