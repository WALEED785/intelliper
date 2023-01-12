import React from "react";
import Footer from "../Footer";
import Header from "../header";

import service10 from "../../assets/images/resource/service-10.png";
import design1 from "../../assets/images/resource/design-1.png";
import design2 from "../../assets/images/resource/design-2.png";
import { Link } from "react-router-dom";

export default function DataScienceConsultingServices() {
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
                    Data Science & AI
                  </p>
                  <h2>
                    Drive strategic Business Decisions through Data Science
                  </h2>
                  <div class="text">
                    Strategizing and Engineering your AI Transformation
                    initiatives.
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

        <section class="service-section">
          {" "}
          <div class="container">
            <div class="offer-title">
              {" "}
              <h2 class="home-heading-two">Services We Offer</h2>
            </div>{" "}
            <div class="offer-cards">
              {" "}
              <div class="card">
                <img
                  alt="AI Model Development"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/ai-model--icon.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NTIwOjEyOQ==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/ai-model--icon.svg"
                />
                <h3>AI Model Development</h3>{" "}
                <p>
                  Development of custom AI Models using Machine Learning and
                  Deep Learning Techniques.
                </p>{" "}
              </div>{" "}
              <div class="card">
                {" "}
                <img
                  alt="Big Data Solutions"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/ai-big-data--icon.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NTI1OjEzMA==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/ai-big-data--icon.svg"
                />
                <h3>Big Data Solutions</h3>{" "}
                <p>
                  Design, development, and deployment of Big Data Solutions
                  driven by Artificial Intelligence.
                </p>{" "}
              </div>{" "}
              <div class="card">
                {" "}
                <img
                  alt="Edge AI"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/edge-ai--icon.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NTMwOjExNQ==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/edge-ai--icon.svg"
                />
                <h3>Edge AI</h3>{" "}
                <p>
                  A Cloud native, Edge first approach to maintain efficiency and
                  real-time performance.
                </p>{" "}
              </div>{" "}
              <div class="card">
                {" "}
                <img
                  alt="Lifecycle Management"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/lcm-ai--icon.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NTM1OjEyNw==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/lcm-ai--icon.svg"
                />
                <h3>Lifecycle Management for AI Systems</h3>{" "}
                <p>
                  Defining a systematic approach to operationalize AI by
                  implementing end-to-end AI Lifecycle Management.
                </p>{" "}
              </div>{" "}
              <div class="card">
                {" "}
                <img
                  alt="Integration"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/integration--icon.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NTQwOjEyMw==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/integration--icon.svg"
                />
                <h3>Integration</h3>{" "}
                <p>
                  Linking systems through integrations with AI ready platforms
                  to make better, more robust software.
                </p>{" "}
              </div>{" "}
              <div class="card">
                {" "}
                <img
                  alt="AI Transformation"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/ai-tran--icon.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NTQ1OjEyNQ==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/ai-tran--icon.svg"
                />{" "}
                <h3>AI Transformation</h3>{" "}
                <p>
                  Defining a business case, opportunities, and development
                  roadmap to guide you through your AI Transformation.
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>

        <section class="offer-section nitro-offscreen">
          {" "}
          <div class="container">
            {" "}
            <div class="offer-title">
              <h2 class="home-heading-two">Our Expertise </h2>
            </div>{" "}
            <div class="offer-cards">
              {" "}
              <div class="card">
                {" "}
                <img
                  alt="Machine Learning"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/machine-learning--icon.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NTU5OjEzMw==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/machine-learning--icon.svg"
                />{" "}
                <h3>Machine Learning</h3>{" "}
                <p>
                  Developing robust ML models to help you achieve ideal results
                  and optimized performance.
                </p>{" "}
              </div>{" "}
              <div class="card">
                {" "}
                <img
                  alt="Deep Learning"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/deep-learning--icon.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NTY0OjEyNw==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/deep-learning--icon.svg"
                />{" "}
                <h3>Deep Learning</h3>{" "}
                <p>
                  We use Deep Learning’s intrinsic Self learning properties to
                  help you achieve better results every time.
                </p>{" "}
              </div>{" "}
              <div class="card">
                {" "}
                <img
                  alt="Computer Vision"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/computer-vision--icon.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NTY5OjEzMQ==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/computer-vision--icon.svg"
                />{" "}
                <h3>Computer Vision</h3>{" "}
                <p>
                  Our Robust Computer Vision models enable your systems to
                  analyze and understand their environments.
                </p>{" "}
              </div>{" "}
              <div class="card">
                {" "}
                <img
                  alt="Natural Language Processing"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/nl-processing--icon.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NTc0OjE0MQ==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/nl-processing--icon.svg"
                />{" "}
                <h3>Natural Language Processing</h3>{" "}
                <p>
                  We provide your software with the tools to understand and
                  respond to natural languages.
                </p>{" "}
              </div>{" "}
              <div class="card">
                <img
                  alt="Optimization"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/optimization--icon.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NTc5OjEyNQ==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/optimization--icon.svg"
                />{" "}
                <h3>Optimization</h3>{" "}
                <p>
                  Our Engineers help you train your AI models by optimizing
                  parameters to help you achieve desired results.
                </p>
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

        <section class="service-section data-section nitro-offscreen lazyloaded">
          {" "}
          <div class="container">
            {" "}
            <div class="ds-process-section">
              {" "}
              <div class="process-title">
                {" "}
                <h2 class="home-heading-two heading-read">Our Process</h2>{" "}
              </div>{" "}
              <div class="process-cention">
                {" "}
                <ul>
                  {" "}
                  <li>
                    {" "}
                    <h5>Scoping</h5>{" "}
                    <p>
                      Our AI Thought Leaders help you understand your business
                      problem and once we ascertain there is a fit for Machine
                      Learning, we work in collaboration to chalk out a pathway,
                      and list down the requirements.
                    </p>{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    <h5>Migration</h5>{" "}
                    <p>
                      Our Engineers take your business cases and workflows from
                      your legacy systems and map them onto modern AI based
                      Software to give you better results.
                    </p>{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    <h5>Architecture &amp; Design</h5>{" "}
                    <p>
                      We design new AI based platforms based around your
                      business &amp; use cases to help maximize re-usability and
                      add flexibility to your core workflows.
                    </p>{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    <h5>Model Development</h5>{" "}
                    <p>
                      We run hundreds of experiments in parallel to developing a
                      machine learning model. A model is the backbone of a
                      machine learning system and can predict future trends or
                      read the text or images.
                    </p>{" "}
                  </li>{" "}
                  <li>
                    {" "}
                    <h5>Platform Implementation</h5>{" "}
                    <p>
                      We connect the model with a RESTFUL API or a front-end
                      application, developing all necessary features in an
                      intuitive interface for users to access the model.
                    </p>{" "}
                  </li>{" "}
                </ul>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
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
