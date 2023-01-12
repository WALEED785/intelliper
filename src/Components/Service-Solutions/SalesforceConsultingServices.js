import React from "react";
import Footer from "../Footer";
import Header from "../header";

import service10 from "../../assets/images/resource/service-10.png";
import design1 from "../../assets/images/resource/design-1.png";
import design2 from "../../assets/images/resource/design-2.png";
import { Link } from "react-router-dom";

export default function SalesforceConsultingServices() {
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
                    Salesforce Consulting Services
                  </p>
                  <h2>Delivering enterprise success through Salesforce</h2>
                  <div class="text">
                    Helping your business achieve its digital transformation
                    objectives.
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

        {/* <section className="brand-section-2">
          <div className="container tabsection">
            <div className="column-tabtitle bsp-title ">
              <p className="title-top">SERVICES</p>
              <h2
                class="home-heading-two heading-read"
                id="s1"
                style={{ display: "block" }}
              >
                Salesforce Consulting Service
              </h2>
              <h2
                class="home-heading-two heading-read"
                id="s2"
                style={{ display: "none" }}
              >
                Salesforce Customization And Configuration Services
              </h2>
              <h2
                class="home-heading-two heading-read"
                id="s3"
                style={{ display: "none" }}
              >
                Salesforce Implementation Services
              </h2>
              <h2
                class="home-heading-two heading-read"
                id="s4"
                style={{ display: "none" }}
              >
                Salesforce Custom App Development
              </h2>
              <h2
                class="home-heading-two heading-read"
                id="s5"
                style={{ display: "none" }}
              >
                Salesforce Integration Services
              </h2>
            </div>
            <div className="column-select">
              <ul>
                <li>
                  <button
                    type="button"
                    class="tablink active working"
                    onclick={"openTab(event, 'tab1');openHeading(event, 's1')"}
                  >
                    Consulting <i class="las la-angle-right"></i>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="tablink "
                    onclick="openTab(event, 'tab2');openHeading(event, 's2')"
                  >
                    Configuration / Customization{" "}
                    <i class="las la-angle-right"></i>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="tablink "
                    onclick="openTab(event, 'tab3');openHeading(event, 's3')"
                  >
                    Implementation <i class="las la-angle-right"></i>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="tablink "
                    onclick="openTab(event, 'tab4');openHeading(event, 's4')"
                  >
                    Custom App Development <i class="las la-angle-right"></i>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="tablink "
                    onclick="openTab(event, 'tab5');openHeading(event, 's5')"
                  >
                    Integration <i class="las la-angle-right"></i>
                  </button>
                </li>
              </ul>
            </div>
            <div class="column-body" id="tab1" style={{ display: "block" }}>
              <div class="bsp-items">
                <div class="item">
                  <div class="title">
                    <img
                      alt="Customer Engagement"
                      nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/consulting-1.svg"
                      class=" lazyloaded"
                      nitro-lazy-empty=""
                      id="NTQ2OjUz-1"
                      src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/consulting-1.svg"
                    />
                    <h4>Salesforce Implementation Consulting</h4>
                  </div>
                  <p>
                    Leverage our salesforce consultancy to provide companies
                    more room for scalability, customizability and developing
                    user-friendly apps.
                  </p>
                </div>
                <div class="item">
                  <div class="title">
                    <img
                      alt="Analytics Transformation"
                      nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/consulting-2.svg"
                      class=" lazyloaded"
                      nitro-lazy-empty=""
                      id="NTU0OjU4-1"
                      src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/consulting-2.svg"
                    />
                    <h4>Salesforce Managed Services</h4>
                  </div>
                  <p>
                    Maximize Salesforce's ROI by covering complete CRM virtual
                    administration – management, maintenance – with the
                    flexibility to scale up and optimize your business.
                  </p>
                </div>
                <div class="item">
                  <div class="title">
                    {" "}
                    <img
                      alt="Health Cloud"
                      nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/consulting-3.svg"
                      class=" lazyloaded"
                      nitro-lazy-empty=""
                      id="NTYyOjQ2-1"
                      src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/consulting-3.svg"
                    />
                    <h4> Salesforce Integration</h4>
                  </div>
                  <p>
                    Support enterprises and startups by delivering
                    cost-effective CRM integration services that help them
                    automate their marketing, sales, and customer services
                    operations.
                  </p>
                </div>
                <div class="item">
                  <div class="title">
                    <img
                      alt="Change Management"
                      nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/consulting-4.svg"
                      class=" lazyloaded"
                      nitro-lazy-empty=""
                      id="NTcwOjUx-1"
                      src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/consulting-4.svg"
                    />
                    <h4>Salesforce Migration consulting</h4>
                  </div>
                  <p>
                    Transfer data from existing CRM system to salesforce by
                    executing a data migration plan aligning perfectly with the
                    company's requirements and budget.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section class="section-bsp">
          <div class="container tabsection">
            <div class="column-tabtitle bsp-title ">
              <p class="title-top">SERVICES</p>
              <h2
                class="home-heading-two heading-read"
                id="s1"
                style={{ display: "block" }}
              >
                Salesforce Consulting Service
              </h2>
              <h2
                class="home-heading-two heading-read"
                id="s2"
                style={{ display: " none" }}
              >
                Salesforce Customization And Configuration Services
              </h2>
              <h2
                class="home-heading-two heading-read"
                id="s3"
                style={{ display: "none" }}
              >
                Salesforce Implementation Services
              </h2>
              <h2
                class="home-heading-two heading-read"
                id="s4"
                style={{ display: " none" }}
              >
                Salesforce Custom App Development
              </h2>
              <h2
                class="home-heading-two heading-read"
                id="s5"
                style={{ display: "none" }}
              >
                Salesforce Integration Services
              </h2>
            </div>
            <div class="column-select">
              <ul>
                <li>
                  <button
                    type="button"
                    class="tablink active working"
                    onclick="openTab(event, 'tab1');openHeading(event, 's1')"
                  >
                    Consulting <i class="las la-angle-right"></i>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="tablink "
                    onclick="openTab(event, 'tab2');openHeading(event, 's2')"
                  >
                    Configuration / Customization
                    <i class="las la-angle-right"></i>
                  </button>
                </li>{" "}
                <li>
                  <button
                    type="button"
                    class="tablink "
                    onclick="openTab(event, 'tab3');openHeading(event, 's3')"
                  >
                    Implementation <i class="las la-angle-right"></i>
                  </button>
                </li>{" "}
                <li>
                  <button
                    type="button"
                    class="tablink "
                    onclick="openTab(event, 'tab4');openHeading(event, 's4')"
                  >
                    Custom App Development <i class="las la-angle-right"></i>
                  </button>
                </li>{" "}
                <li>
                  <button
                    type="button"
                    class="tablink "
                    onclick="openTab(event, 'tab5');openHeading(event, 's5')"
                  >
                    Integration <i class="las la-angle-right"></i>
                  </button>
                </li>
              </ul>
            </div>
            <div class="column-body" id="tab1" style={{ display: "block" }}>
              {" "}
              <div class="bsp-items">
                {" "}
                <div class="item">
                  {" "}
                  <div class="title">
                    {" "}
                    <img
                      alt="Customer Engagement"
                      nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/consulting-1.svg"
                      class=" lazyloaded"
                      nitro-lazy-empty=""
                      id="NTQ2OjUz-1"
                      src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/consulting-1.svg"
                    />
                    <h4>Salesforce Implementation Consulting</h4>{" "}
                  </div>{" "}
                  <p>
                    Leverage our salesforce consultancy to provide companies
                    more room for scalability, customizability and developing
                    user-friendly apps.
                  </p>{" "}
                </div>{" "}
                <div class="item">
                  {" "}
                  <div class="title">
                    {" "}
                    <img
                      alt="Analytics Transformation"
                      nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/consulting-2.svg"
                      class=" lazyloaded"
                      nitro-lazy-empty=""
                      id="NTU0OjU4-1"
                      src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/consulting-2.svg"
                    />
                    <h4>Salesforce Managed Services</h4>{" "}
                  </div>{" "}
                  <p>
                    Maximize Salesforce's ROI by covering complete CRM virtual
                    administration – management, maintenance – with the
                    flexibility to scale up and optimize your business.
                  </p>{" "}
                </div>{" "}
                <div class="item">
                  {" "}
                  <div class="title">
                    {" "}
                    <img
                      alt="Health Cloud"
                      nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/consulting-3.svg"
                      class=" lazyloaded"
                      nitro-lazy-empty=""
                      id="NTYyOjQ2-1"
                      src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/consulting-3.svg"
                    />
                    <h4> Salesforce Integration</h4>{" "}
                  </div>{" "}
                  <p>
                    Support enterprises and startups by delivering
                    cost-effective CRM integration services that help them
                    automate their marketing, sales, and customer services
                    operations.
                  </p>{" "}
                </div>{" "}
                <div class="item">
                  {" "}
                  <div class="title">
                    {" "}
                    <img
                      alt="Change Management"
                      nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/consulting-4.svg"
                      class=" lazyloaded"
                      nitro-lazy-empty=""
                      id="NTcwOjUx-1"
                      src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/consulting-4.svg"
                    />
                    <h4>Salesforce Migration consulting</h4>{" "}
                  </div>{" "}
                  <p>
                    Transfer data from existing CRM system to salesforce by
                    executing a data migration plan aligning perfectly with the
                    company's requirements and budget.
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div class="column-body" id="tab2" style={{ display: "none" }}>
              {" "}
              <div class="bsp-items">
                {" "}
                <div class="item">
                  {" "}
                  <div class="title">
                    {" "}
                    <img
                      alt="Customer Engagement"
                      nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/config-1.svg"
                      class=" lazyloaded"
                      nitro-lazy-empty=""
                      id="NTgzOjUz-1"
                      src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/config-1.svg"
                    />
                    <h4>App Customization</h4>{" "}
                  </div>{" "}
                  <p>
                    Deliver leading salesforce customization solutions catering
                    to business needs and helping them achieve efficient
                    management and maximum ROI.
                  </p>{" "}
                </div>{" "}
                <div class="item">
                  {" "}
                  <div class="title">
                    {" "}
                    <img
                      alt="Analytics Transformation"
                      nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/config-2.svg"
                      class=" lazyloaded"
                      nitro-lazy-empty=""
                      id="NTkxOjU4-1"
                      src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/config-2.svg"
                    />
                    <h4>Custom Reports and Dashboard</h4>{" "}
                  </div>{" "}
                  <p>
                    Help to simplify data analytics and intelligent reporting to
                    make it effortless to create sales &amp; marketing reports
                    and build effective dashboards.
                  </p>{" "}
                </div>{" "}
                <div class="item">
                  {" "}
                  <div class="title">
                    {" "}
                    <img
                      alt="Health Cloud"
                      nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/config-3.svg"
                      class=" lazyloaded"
                      nitro-lazy-empty=""
                      id="NTk5OjQ2-1"
                      src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/config-3.svg"
                    />
                    <h4>Existing Solution Customization</h4>{" "}
                  </div>{" "}
                  <p>
                    Modify existing salesforce solution with custom development
                    according to required business needs and expand the current
                    CRM functionalities to increase productivity across all
                    departments.
                  </p>{" "}
                </div>{" "}
                <div class="item">
                  {" "}
                  <div class="title">
                    {" "}
                    <img
                      alt="Change Management"
                      nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/config-4.svg"
                      class=" lazyloaded"
                      nitro-lazy-empty=""
                      id="NjA3OjUx-1"
                      src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/config-4.svg"
                    />{" "}
                    <h4>Data &amp; Access Management Customization</h4>{" "}
                  </div>{" "}
                  <p>
                    Innovate unique salesforce data solutions for clients,
                    delivering them high-level data security and controlled data
                    access solutions making data flow secure and seamless.
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div class="column-body" id="tab3" style={{ display: "none" }}>
              {" "}
              <div class="bsp-items">
                {" "}
                <div class="item">
                  {" "}
                  <div class="title">
                    <img
                      alt="Marketing Transformation"
                      nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/imple-1.svg"
                      class=" lazyloaded"
                      nitro-lazy-empty=""
                      id="NjIxOjU4-1"
                      src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/imple-1.svg"
                    />
                    <h4>Marketing Transformation</h4>{" "}
                  </div>{" "}
                  <p>
                    Support all the facets of company marketing operations,
                    helping you to automate sales and marketing processes and
                    maximize ROI and efficiency.
                  </p>{" "}
                </div>{" "}
                <div class="item">
                  {" "}
                  <div class="title">
                    <img
                      alt="Service Transformation"
                      nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/imple-2.svg"
                      class=" lazyloaded"
                      nitro-lazy-empty=""
                      id="NjMwOjU2-1"
                      src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/imple-2.svg"
                    />
                    <h4>Service Cloud Implementation</h4>{" "}
                  </div>{" "}
                  <p>
                    Improve customer retention and relationships for your
                    associated businesses and organizations by implementing our
                    service cloud services.
                  </p>{" "}
                </div>{" "}
                <div class="item">
                  {" "}
                  <div class="title">
                    {" "}
                    <img
                      alt="Quote to Cash"
                      nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/imple-3.svg"
                      class=" lazyloaded"
                      nitro-lazy-empty=""
                      id="NjM5OjQ3-1"
                      src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/imple-3.svg"
                    />
                    <h4>Financial Services Cloud</h4>{" "}
                  </div>{" "}
                  <p>
                    Enable enterprises to drive stronger client relationships
                    and grow their book of businesses by implementing integrated
                    CRM cloud platforms customized in line with business needs.
                  </p>{" "}
                </div>{" "}
                <div class="item">
                  {" "}
                  <div class="title">
                    {" "}
                    <img
                      alt="Sales Transformation"
                      nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/imple-4.svg"
                      class=" lazyloaded"
                      nitro-lazy-empty=""
                      id="NjQ4OjU0-1"
                      src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/imple-4.svg"
                    />
                    <h4>Sales Cloud implementation</h4>{" "}
                  </div>{" "}
                  <p>
                    Our salesforce consultants help companies to increase their
                    sales velocity and automize the entire sales process by
                    implementing sales cloud solutions.
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div class="column-body" id="tab4" style={{ display: "none" }}>
              {" "}
              <div class="bsp-items">
                {" "}
                <div class="item">
                  {" "}
                  <div class="title">
                    {" "}
                    <img
                      alt="Unified Commerce"
                      nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/customeapp-1.svg"
                      class=" lazyloaded"
                      nitro-lazy-empty=""
                      id="NjYzOjQ2-1"
                      src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/customeapp-1.svg"
                    />
                    <h4>Salesforce Development Services</h4>{" "}
                  </div>{" "}
                  <p>
                    With an agile approach, we stay flexible at every phase of
                    salesforce development to better understand customer
                    requirements and execute them efficiently to automate their
                    CRM.
                  </p>{" "}
                </div>{" "}
                <div class="item">
                  {" "}
                  <div class="title">
                    {" "}
                    <img
                      alt="Apps"
                      nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/customeapp-2.svg"
                      class=" lazyloaded"
                      nitro-lazy-empty=""
                      id="NjcyOjM0-1"
                      src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/customeapp-2.svg"
                    />
                    <h4>Salesforce AppExchange Development</h4>{" "}
                  </div>{" "}
                  <p>
                    Optimize businesses' operations by migrating their existing
                    products to AppExchange and adding custom features to their
                    deployment with our technical support and consultation.
                  </p>{" "}
                </div>{" "}
                <div class="item">
                  {" "}
                  <div class="title">
                    {" "}
                    <img
                      alt="Force.Com Development"
                      nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/customeapp-3.svg"
                      class=" lazyloaded"
                      nitro-lazy-empty=""
                      id="NjgxOjUx-1"
                      src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/customeapp-3.svg"
                    />
                    <h4>Force.Com Development</h4>{" "}
                  </div>{" "}
                  <p>
                    Provide end-to-end Force.com development services to
                    streamline complex business processes and make the
                    operations faster - easier – better.
                  </p>{" "}
                </div>{" "}
                <div class="item">
                  {" "}
                  <div class="title">
                    {" "}
                    <img
                      alt="Integrations"
                      nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/customeapp-4.svg"
                      class=" lazyloaded"
                      nitro-lazy-empty=""
                      id="NjkwOjQ2-1"
                      src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/customeapp-4.svg"
                    />
                    <h4>Salesforce Integration and Migration</h4>{" "}
                  </div>{" "}
                  <p>
                    Help organizations avoid laborious work by streamlining the
                    data flow and synchronization across departments with
                    applications integration and data migration into salesforce.
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div class="column-body" id="tab5" style={{ display: "none" }}>
              {" "}
              <div class="bsp-items">
                {" "}
                <div class="item">
                  {" "}
                  <div class="title">
                    {" "}
                    <img
                      alt="Customer Engagement"
                      nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/integration-1.svg"
                      class=" lazyloaded"
                      nitro-lazy-empty=""
                      id="NzA0OjUz-1"
                      src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/integration-1.svg"
                    />
                    <h4>Salesforce API Integration</h4>{" "}
                  </div>{" "}
                  <p>
                    We offer salesforce APIs integration solutions by executing
                    two-way integration between salesforce and third-party apps
                    using customized web services and different APIs, including
                    - REST &amp; SOAP APIs.
                  </p>{" "}
                </div>{" "}
                <div class="item">
                  {" "}
                  <div class="title">
                    {" "}
                    <img
                      alt="Analytics Transformation"
                      nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/integration-2.svg"
                      class=" lazyloaded"
                      nitro-lazy-empty=""
                      id="NzEzOjU4-1"
                      src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/integration-2.svg"
                    />{" "}
                    <h4>Salesforce Accounting integration</h4>{" "}
                  </div>{" "}
                  <p>
                    Deliver salesforce accounting Integration solutions to
                    manage financial data for drawing forecasts, extracting
                    data-driven insights, managing invoices and buyers' profiles
                    for businesses.
                  </p>{" "}
                </div>{" "}
                <div class="item">
                  {" "}
                  <div class="title">
                    <img
                      alt="Change Management"
                      nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/integration-3.svg"
                      class=" lazyloaded"
                      nitro-lazy-empty=""
                      id="NzIyOjUx-1"
                      src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/integration-3.svg"
                    />
                    <h4>Salesforce Database Integration</h4>{" "}
                  </div>{" "}
                  <p>
                    Assist enterprises with database integration,
                    implementation, and fine-tuning marketing processes to
                    extract powerful data insights and intelligence.
                  </p>{" "}
                </div>{" "}
                <div class="item">
                  {" "}
                  <div class="title">
                    <img
                      alt="Health Cloud"
                      nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/integration-4.svg"
                      class=" lazyloaded"
                      nitro-lazy-empty=""
                      id="NzMxOjQ2-1"
                      src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce-images/integration-4.svg"
                    />
                    <h4>Salesforce Marketing automation integration</h4>{" "}
                  </div>{" "}
                  <p>
                    Integrating salesforce with an automation platform to
                    fine-tune your sales &amp; marketing operation to strategize
                    customer journey and nurture leads accurately.
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>

        <section class="section-certf nitro-offscreen">
          {" "}
          <div class="cerf-container">
            {" "}
            <div class="certf-title">
              {" "}
              <h2
                class="home-heading-two heading-read"
                style={{ display: "none" }}
              >
                Mapping Your Unique Business Processes Onto Salesforce
              </h2>{" "}
            </div>{" "}
            <div class="certf-wrapper">
              {" "}
              <div class="certf-img">
                {" "}
                <img
                  alt="experties"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/experties-cloud@1x.webp"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NzUwOjEyMw==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/experties-cloud@1x.webp"
                />{" "}
              </div>{" "}
              <div class="list-section">
                {" "}
                <p>Personnel Certifications</p>{" "}
                <ul>
                  {" "}
                  <li>Administrator</li> <li>Sales Cloud Consultant</li>{" "}
                  <li>Platform App Builder</li> <li>Field Service Lightning</li>{" "}
                  <li>Technical Architect</li>{" "}
                  <li>Platform Developer I / II</li>{" "}
                  <li>Service Cloud Consultant</li>{" "}
                  <li>Marketing Cloud Specialist</li>{" "}
                </ul>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>
        <section class="nitro-offscreen">
          <div class="container special-wrapper">
            <h2
              class="home-heading-two heading-read"
              style={{ display: "none" }}
            >
              What Makes Us Special
            </h2>{" "}
            <div class="cards-wrapper">
              <div class="special-card">
                {" "}
                <div class="card-img">
                  <img
                    alt="years-xp"
                    nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce/years-xp--icon.svg"
                    class=" lazyloaded"
                    nitro-lazy-empty=""
                    id="Nzc1OjM4-1"
                    src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce/years-xp--icon.svg"
                  />
                </div>{" "}
                <div class="card-text">
                  {" "}
                  <h3>10 Years of Experience</h3>{" "}
                  <p>
                    We’ve evolved over a period of 10 years acquiring skills and
                    expertise by designing, developing and deploying solutions
                    for the world’s leading companies.
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              <div class="special-card">
                {" "}
                <div class="card-img">
                  {" "}
                  <img
                    alt="top-talent"
                    nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce/top-talent--icon.svg"
                    class=" lazyloaded"
                    nitro-lazy-empty=""
                    id="Nzg2OjQw-1"
                    src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce/top-talent--icon.svg"
                  />
                </div>{" "}
                <div class="card-text">
                  {" "}
                  <h3>We Hire Top 2% Talent</h3>{" "}
                  <p>
                    With a workforce of 180+ engineers who are experts in the
                    latest programming languages, we have what it takes to
                    transform your business.
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              <div class="special-card">
                {" "}
                <div class="card-img">
                  {" "}
                  <img
                    alt="innovators"
                    nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce/innovators--icon.svg"
                    class=" lazyloaded"
                    nitro-lazy-empty=""
                    id="Nzk3OjQw-1"
                    src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce/innovators--icon.svg"
                  />
                </div>{" "}
                <div class="card-text">
                  {" "}
                  <h3>A Team of Innovators</h3>{" "}
                  <p>
                    We are more than just consultants. We put our clients at the
                    heart of what we do- left, right &amp; center to add real
                    value to their business.
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>

        <section class="sf-kwshare">
          <div class="container">
            <div class="title-wrapper">
              <h3>Read the knowledge we share</h3>
              <a href="#">
                View All Blogs <i class="la la-arrow-right"></i>
              </a>
            </div>
            <div class="kwshare-cards">
              <div class="card"  style={{backgroundColor: "transparent", border: "none"}}>
                <p>
                  Learn how you can maintain your business continuity and tips
                  on how to ensure that you build a successful digital
                  workplace.
                </p>{" "}
                <a href="#" id="stylebtn">
                  Learn More <i class="la la-arrow-right"></i>
                </a>{" "}
              </div>{" "}
              <div class="card">
                {" "}
                <div class="card-wrap">
                  {" "}
                  <img
                    alt="card-thumbnail"
                    nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce/sf-card-thumbnail.webp"
                    class=" lazyloaded"
                    nitro-lazy-empty=""
                    id="ODQ1OjQ0-1"
                    src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce/sf-card-thumbnail.webp"
                  />{" "}
                  <div class="text">
                    {" "}
                    <a href="https://tkxel.com/blog/top-digital-transformation-trends-for-businesses-2019">
                      Top Digital Transformation Trends For Businesses.{" "}
                      <i class="la la-arrow-right"></i>
                    </a>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div class="card">
                {" "}
                <div class="card-wrap">
                  {" "}
                  <img
                    alt="card blog 4 things"
                    nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce/sf-card-blog-4-things.webp"
                    class=" lazyloaded"
                    nitro-lazy-empty=""
                    id="ODU1OjQ4-1"
                    src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/salesforce/sf-card-blog-4-things.webp"
                  />{" "}
                  <div class="text">
                    {" "}
                    <a href="https://tkxel.com/blog/4-things-to-consider-while-selecting-your-software-outsourcing-partner-in-2020">
                      4 Things To Consider While Selecting Your Software
                      Outsourcing Partner In 2020.{" "}
                      <i class="la la-arrow-right"></i>
                    </a>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>

        <Footer />
      </div>
    </>
  );
}
