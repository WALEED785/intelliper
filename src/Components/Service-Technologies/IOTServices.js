import React from "react";
import Footer from "../Footer";
import Header from "../header";

import service10 from "../../assets/images/resource/service-10.png";
import design1 from "../../assets/images/resource/design-1.png";
import design2 from "../../assets/images/resource/design-2.png";
import { Link } from "react-router-dom";

export default function IOTServices() {
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
                    Internet of things
                  </p>
                  <h2>Your IoT Partner From Idea, To Solution & Beyond</h2>
                  <div class="text">
                    We work with you to provide complete IoT development,
                    deployment and management.
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
          {" "}
          <div class="container ms-service">
            {" "}
            <div class="ms-service-title">
              {" "}
              <h2 class="home-heading-two">What Our IoT Experts Offer</h2>{" "}
            </div>{" "}
            <div class="serv-row">
              {" "}
              <div class="ms-serv">
                {" "}
                <div class="ms-serv-img">
                  {" "}
                  <img
                    alt="IOT Consultancy"
                    nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/ms-consulting--icon.svg"
                    class=" ls-is-cached lazyloaded"
                    nitro-lazy-empty=""
                    id="NTIxOjEzMw==-1"
                    src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/ms-consulting--icon.svg"
                  />
                </div>{" "}
                <div class="ms-serv-text">
                  {" "}
                  <h3>IOT Consultancy</h3>{" "}
                  <p>
                    Our consultants devise strategies that align with all your
                    tech needs whether you have just one part of an IoT puzzle
                    missing or require a full-scale solution.
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              <div class="ms-serv">
                {" "}
                <div class="ms-serv-img">
                  {" "}
                  <img
                    alt="App Development"
                    nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/iot-service-02.svg"
                    class=" ls-is-cached lazyloaded"
                    nitro-lazy-empty=""
                    id="NTMwOjEyOA==-1"
                    src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/iot-service-02.svg"
                  />{" "}
                </div>{" "}
                <div class="ms-serv-text">
                  {" "}
                  <h3>App Development</h3>{" "}
                  <p>
                    Customized mobile and web apps that harness the power of
                    connected devices to empower enterprises with
                    next-generation IoT products.
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              <div class="ms-serv">
                {" "}
                <div class="ms-serv-img">
                  {" "}
                  <img
                    alt="Extension into IoT"
                    nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/iot-service-03.svg"
                    class=" ls-is-cached lazyloaded"
                    nitro-lazy-empty=""
                    id="NTM5OjEzMQ==-1"
                    src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/iot-service-03.svg"
                  />{" "}
                </div>{" "}
                <div class="ms-serv-text">
                  {" "}
                  <h3>Extension into IoT</h3>{" "}
                  <p>
                    We extend existing enterprise and consumer solutions into
                    IoT, turning connected distributed devices and gadgets into
                    valuable assets.
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              <div class="ms-serv">
                {" "}
                <div class="ms-serv-img">
                  {" "}
                  <img
                    alt="System Integration"
                    nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/iot-service-04.svg"
                    class=" ls-is-cached lazyloaded"
                    nitro-lazy-empty=""
                    id="NTQ4OjEzMQ==-1"
                    src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/iot-service-04.svg"
                  />{" "}
                </div>{" "}
                <div class="ms-serv-text">
                  {" "}
                  <h3>System Integration</h3>{" "}
                  <p>
                    Our backend integrations allow apps to keep track of and
                    communicate with devices via industry-standard protocols.
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>

        <section class="custom-iot nitro-offscreen">
          {" "}
          <div class="container">
            {" "}
            <div class="ms-service-title">
              <h2 class="home-heading-two">
                We develop custom IoT solutions for clients from various
                industry verticals
              </h2>{" "}
            </div>{" "}
            <div class="iot-cards">
              {" "}
              <div class="iot-column">
                {" "}
                <div class="iot-card">
                  {" "}
                  <img
                    alt="AVIATION"
                    nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/iot-aviation.svg"
                    class=" ls-is-cached lazyloaded"
                    nitro-lazy-empty=""
                    id="NTY2OjExOQ==-1"
                    src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/iot-aviation.svg"
                  />{" "}
                  <p>AVIATION</p>{" "}
                </div>{" "}
              </div>{" "}
              <div class="iot-column">
                {" "}
                <div class="iot-card">
                  {" "}
                  <img
                    alt="AGRICULTURE"
                    nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/iot-agriculture.svg"
                    class=" lazyloaded"
                    nitro-lazy-empty=""
                    id="NTcyOjEyNQ==-1"
                    src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/iot-agriculture.svg"
                  />{" "}
                  <p>AGRICULTURE</p>{" "}
                </div>{" "}
                <div class="iot-card">
                  {" "}
                  <img
                    alt="SMART HOMES"
                    nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/iot-smart-homes.svg"
                    class=" ls-is-cached lazyloaded"
                    nitro-lazy-empty=""
                    id="NTc2OjEyNQ==-1"
                    src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/iot-smart-homes.svg"
                  />{" "}
                  <p>SMART HOMES</p>{" "}
                </div>{" "}
              </div>{" "}
              <div class="iot-column">
                {" "}
                <div class="iot-card round">
                  {" "}
                  <p>Internet Of Things</p>{" "}
                </div>{" "}
              </div>{" "}
              <div class="iot-column">
                {" "}
                <div class="iot-card">
                  {" "}
                  <img
                    alt="HEALTH CARE"
                    nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/iot-health-care.svg"
                    class=" ls-is-cached lazyloaded"
                    nitro-lazy-empty=""
                    id="NTg3OjEyNQ==-1"
                    src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/iot-health-care.svg"
                  />{" "}
                  <p>HEALTH CARE</p>
                </div>{" "}
                <div class="iot-card">
                  {" "}
                  <img
                    alt="AUTOMATIVES"
                    nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/iot-automatives.svg"
                    class=" lazyloaded"
                    nitro-lazy-empty=""
                    id="NTkxOjEyNQ==-1"
                    src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/iot-automatives.svg"
                  />{" "}
                  <p>AUTOMATIVES</p>{" "}
                </div>{" "}
              </div>{" "}
              <div class="iot-column">
                {" "}
                <div class="iot-card">
                  <img
                    alt="RETAIL"
                    nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/iot-retail.svg"
                    class=" ls-is-cached lazyloaded"
                    nitro-lazy-empty=""
                    id="NTk3OjExNQ==-1"
                    src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/iot-retail.svg"
                  />{" "}
                  <p>RETAIL</p>{" "}
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

        <section class="iot-features nitro-offscreen">
          <div class="container">
            {" "}
            <div class="ms-service-title">
              {" "}
              <h2 class="home-heading-two">Tech Stacks</h2>
            </div>{" "}
            <div class="iot-features-img">
              {" "}
              <img
                alt="spark"
                nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/da-spark--logo.svg"
                class=" lazyloaded"
                nitro-lazy-empty=""
                id="Njk1OjExMA==-1"
                src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/da-spark--logo.svg"
              />
              <img
                alt="python"
                nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/da-python--logo.svg"
                class=" lazyloaded"
                nitro-lazy-empty=""
                id="Njk2OjExMg==-1"
                src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/da-python--logo.svg"
              />{" "}
              <img
                alt="R"
                nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/da-r--logo.svg"
                class=" lazyloaded"
                nitro-lazy-empty=""
                id="Njk3OjEwMg==-1"
                src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/da-r--logo.svg"
              />
              <img
                alt="pytorch"
                nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/da-pytorch--logo.svg"
                class=" lazyloaded"
                nitro-lazy-empty=""
                id="Njk4OjExNA==-1"
                src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/da-pytorch--logo.svg"
              />{" "}
              <img
                alt="learn"
                nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/da-s-learn--logo.svg"
                class=" lazyloaded"
                nitro-lazy-empty=""
                id="Njk5OjExMg==-1"
                src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/da-s-learn--logo.svg"
              />
              <img
                alt="tableau"
                nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/da-tableau--logo.svg"
                class=" lazyloaded"
                nitro-lazy-empty=""
                id="NzAwOjExNA==-1"
                src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/da-tableau--logo.svg"
              />{" "}
              <img
                alt="qlik"
                nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/da-qlik--logo.svg"
                class=" lazyloaded"
                nitro-lazy-empty=""
                id="NzAxOjEwOA==-1"
                src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/da-qlik--logo.svg"
              />
              <img
                alt="chartio"
                nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/da-chartio--logo.svg"
                class=" lazyloaded"
                nitro-lazy-empty=""
                id="NzAyOjExNA==-1"
                src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/da-chartio--logo.svg"
              />{" "}
              <img
                alt="studio"
                nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/da-r-studio--logo.svg"
                class=" lazyloaded"
                nitro-lazy-empty=""
                id="NzAzOjExNA==-1"
                src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/da-r-studio--logo.svg"
              />{" "}
              <img
                alt="docker"
                nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/da-docker--logo.svg"
                class=" lazyloaded"
                nitro-lazy-empty=""
                id="NzA0OjExMg==-1"
                src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/da-docker--logo.svg"
              />{" "}
              <img
                alt="java"
                nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/da-java--logo.svg"
                class=" lazyloaded"
                nitro-lazy-empty=""
                id="NzA1OjEwOA==-1"
                src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/da-java--logo.svg"
              />{" "}
              <img
                alt="amazon"
                nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/da-amazon-ml--logo.svg"
                class=" lazyloaded"
                nitro-lazy-empty=""
                id="NzA2OjExNQ==-1"
                src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/da-amazon-ml--logo.svg"
              />
              <img
                alt="tensorflow"
                nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/da-tensorflow--logo.svg"
                class=" lazyloaded"
                nitro-lazy-empty=""
                id="NzA3OjEyMA==-1"
                src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/da-tensorflow--logo.svg"
              />
              <img
                alt="azure ml"
                nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/da-azure-ml--logo.svg"
                class=" lazyloaded"
                nitro-lazy-empty=""
                id="NzA4OjExNg==-1"
                src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/da-azure-ml--logo.svg"
              />
              <img
                alt="kubernetes"
                nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/da-kubernetes--logo.svg"
                class=" lazyloaded"
                nitro-lazy-empty=""
                id="NzA5OjEyMA==-1"
                src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/da-kubernetes--logo.svg"
              />
              <img
                alt="nvedia"
                nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/da-nvedia--logo.svg"
                class=" lazyloaded"
                nitro-lazy-empty=""
                id="NzEwOjExMg==-1"
                src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/da-nvedia--logo.svg"
              />{" "}
              <img
                alt="msql"
                nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/da-msql--logo.svg"
                class=" ls-is-cached lazyloaded"
                nitro-lazy-empty=""
                id="NzExOjEwOA==-1"
                src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/da-msql--logo.svg"
              />
              <img
                alt="nosql"
                nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/da-nosql--logo.svg"
                class=" lazyloaded"
                nitro-lazy-empty=""
                id="NzEyOjExMA==-1"
                src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/da-nosql--logo.svg"
              />{" "}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
