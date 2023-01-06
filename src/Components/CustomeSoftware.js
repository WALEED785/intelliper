import React from "react";
import Footer from "./Footer";
import Header from "./header";

import service10 from "../assets/images/resource/service-10.png";
import design1 from "../assets/images/resource/design-1.png";
import design2 from "../assets/images/resource/design-2.png";
import icon1 from "../assets/images/resource/brand-icon-1.png";
import icon2 from "../assets/images/resource/brand-icon-2.png";
import icon3 from "../assets/images/resource/brand-icon-3.png";
import icon4 from "../assets/images/resource/brand-icon-4.png";
import program from "../assets/images/resource/program.png";
import service1 from "../assets/images/resource/service-1.png";
import service2 from "../assets/images/resource/service-2.png";
import service3 from "../assets/images/resource/service-3.png";
import discuss from "../assets/images/resource/discuss.png";

export default function CustomeSoftware() {
  return (
    <>
      <div class="page-wrapper">
        <Header />
        <section class="banner-section-five">
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
                    Custom Software Development
                  </p>
                  <h2>
                    Website Design & <br /> Build Experts
                  </h2>
                  <div class="text">
                    We are Australia highest rated Search Marketing, Creative IT
                    agency on australia in 2021.
                  </div>
                  <a href="contact.html" class="proposal-btn theme-btn">
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
        <section class="designing-section">
          <div class="auto-container">
            <div class="design-block style-one">
              <div class="row clearfix">
                <div class="image-column col-lg-6 col-md-12 col-sm-12">
                  <div class="inner-column">
                    <div class="image titlt" data-tilt data-tilt-max="4">
                      <img src={design1} alt="" />
                    </div>
                  </div>
                </div>

                <div class="content-column col-lg-6 col-md-12 col-sm-12">
                  <div class="inner-column">
                    <h3>Website Design</h3>
                    <div class="text">
                      <p>
                        Lorem Ipsum generators on the Internet tend to repeat
                        predefined chunks as necessary, making this the first
                        true generator on the Internet.{" "}
                      </p>
                      <p>
                        It uses a dictionary of over 200 Latin words, combined
                        with a handful of model sentence structures, to generate
                        there are many variations of passages{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="design-block">
              <div class="row clearfix">
                <div class="content-column col-lg-6 col-md-12 col-sm-12">
                  <div class="inner-column">
                    <h3>Website Development</h3>
                    <div class="text">
                      <p>
                        Lorem Ipsum generators on the Internet tend to repeat
                        predefined chunks as necessary, making this the first
                        true generator on the Internet.{" "}
                      </p>
                      <p>
                        It uses a dictionary of over 200 Latin words, combined
                        with a handful of model sentence structures, to generate
                        there are many variations of passages{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div class="image-column col-lg-6 col-md-12 col-sm-12">
                  <div class="inner-column">
                    <div class="image titlt" data-tilt data-tilt-max="4">
                      <img src={design2} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section-2">
          <div className="auto-container">
            <div className="sec-title">
              <h2>End to End Software Development Methodologies</h2>
            </div>
            <div className="row clearfix">
              <div className="service-block col-lg-4 col-md-6 col-sm-12">
                <div
                  class="column-1"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <h3>IT Strategy and Consultancy</h3>
                  <ul>
                    <li>Work Breakdown Structure</li>
                    <li>Project Plan</li>
                    <li>Project Budget</li>
                    <li>Requirements Docs</li>
                    <li>Use Cases</li>
                    <li>User Stories</li>
                  </ul>
                </div>
              </div>

              <div className="service-block col-lg-4 col-md-6 col-sm-12">
                <div
                  class="column-1"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <h3>Design & Development</h3>
                  <ul>
                    <li>Low-Fi Design</li>
                    <li>Hi-FI Design</li>
                    <li>User Experience Design</li>
                    <li>Source Code</li>
                    <li>Compiled Code</li>
                    <li>Code Documentation</li>
                  </ul>
                </div>
              </div>

              <div className="service-block col-lg-4 col-md-6 col-sm-12">
                <div
                  class="column-1"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <h3>Delivery & Support</h3>
                  <ul>
                    <li>Release Management</li>
                    <li>Change Management</li>
                    <li>User Docs and Training</li>
                    <li>Scheduled Maintenance</li>
                    <li>Adaptive Maintenance</li>
                    <li>Software Roadmap</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rtt-section">
          <div className="container text-btn">
            <h2 className="home-heading-two">Ready to Get Started?</h2>
            <a className="custo-btn" id="stylebtn">
              Let's Talk
            </a>
          </div>
        </section>

        <section className="services-section-2">
          <div className="auto-container">
            <div className="sec-title">
              <h2>We Are Trusted by Every Business</h2>
            </div>
            <div className="row clearfix">
              <div className="service-block col-lg-4 col-md-6 col-sm-12">
                <div
                  class="column-2"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="35"
                    viewBox="0 0 36 35"
                    fill="none"
                  >
                    <path
                      d="M23 2L33.5 1C35.1 4.2 34.1667 9.66667 33.5 12L30.5 16.5L27 20.5L28 22L28.5 24.5L24.5 31L22 33L18.5 29.5L15 30.5L11.5 28V29.5C8.3 33.9 3.16667 34 1 33.5C1.4 25.5 5.16667 23.1667 7 23L4.5 19L5.5 16L2 12L11.5 6.5L14.5 8L23 2Z"
                      fill="url(#paint0_linear)"
                    />
                    <path
                      d="M34.8254 1.76656C34.7303 0.926673 34.0772 0.273527 33.2371 0.178299C30.7177 -0.107137 22.1199 -0.660929 17.2645 4.19455L14.4457 7.01335L14.1124 6.68005C12.7377 5.30535 10.583 5.11514 8.98892 6.22767L1.84459 11.2134C1.45229 11.4873 1.20308 11.9177 1.16099 12.3943C1.11899 12.8709 1.2889 13.3382 1.62715 13.6765L4.70473 16.7542L3.95636 17.5025C3.40091 18.0578 3.3014 18.9122 3.71441 19.58C4.16175 20.3034 4.89907 21.4784 5.69679 22.6787C4.77677 22.9214 3.92508 23.4026 3.24182 24.086C1.66676 25.6611 0.547374 30.6916 0.0199063 33.5519C-0.0524638 33.9493 0.0750295 34.357 0.361044 34.642C0.593172 34.8734 0.905511 35 1.22651 35C1.30053 35 1.37513 34.9932 1.44923 34.9795C4.30674 34.4539 9.33617 33.3366 10.9143 31.7584C11.5964 31.0763 12.0772 30.2261 12.3206 29.3074C13.5208 30.1038 14.6978 30.8407 15.4209 31.2869C15.6959 31.4567 16.0024 31.5396 16.3067 31.5395C16.7408 31.5395 17.1702 31.3709 17.4962 31.045L17.5537 30.9876C17.7397 30.8018 17.9737 30.5679 18.2461 30.2957L21.3233 33.373C21.6278 33.6773 22.0367 33.8455 22.4628 33.8455C22.5103 33.8455 22.5579 33.8434 22.6057 33.8392C23.0823 33.797 23.5127 33.548 23.7866 33.1555L28.7723 26.0115C29.8847 24.4174 29.6946 22.2624 28.3201 20.8878L27.99 20.5577C29.2565 19.292 30.2835 18.2653 30.8093 17.7395C35.6646 12.8838 35.1106 4.28606 34.8254 1.76656ZM33.0363 1.94951C33.0455 1.9505 33.0532 1.95809 33.0542 1.96725C33.2382 3.59017 33.5493 7.9464 32.249 11.8865L23.1172 2.75474C27.0573 1.45439 31.4135 1.76557 33.0363 1.94951ZM3.03065 12.5594L10.009 7.68943C10.8936 7.07202 12.0893 7.17764 12.852 7.94046L13.1853 8.27384L5.96514 15.494L3.03065 12.5594ZM9.65387 30.4982C8.84451 31.3076 5.85333 32.299 1.92571 33.0743C2.70263 29.146 3.6946 26.1542 4.50214 25.3466C5.11865 24.73 5.93898 24.3581 6.80132 24.292C7.45232 25.2097 8.07485 26.0176 8.54736 26.4896C9.01277 26.9546 9.80595 27.5654 10.7083 28.2051C10.6407 29.0648 10.2687 29.8832 9.65387 30.4982ZM27.3105 24.9911L22.4404 31.9692L19.5067 29.0354C21.4923 27.0508 24.3409 24.2041 26.7289 21.8172L27.0593 22.1476C27.8222 22.9107 27.9278 24.1065 27.3105 24.9911ZM26.7294 19.297L26.7262 19.2938L16.9853 29.0347L16.9857 29.0351C16.7135 29.3072 16.4795 29.541 16.2937 29.7267L16.2911 29.7293C14.9877 28.9238 11.0021 26.4221 9.80711 25.2284C8.60454 24.0271 6.0829 20.0189 5.27131 18.7086L9.49609 14.4837L15.7061 8.27367L18.5248 5.45487C19.3473 4.63256 20.3024 3.98759 21.3251 3.48306L31.5207 13.6787C31.0162 14.7014 30.3712 15.6565 29.5489 16.4788C29.023 17.0045 27.9958 18.0313 26.7294 19.297Z"
                      fill="url(#paint1_linear)"
                    />
                    <path
                      d="M17.6124 11.4401C15.9625 13.0899 15.9625 15.7742 17.6124 17.4241C18.4372 18.249 19.5207 18.6615 20.6044 18.6615C21.6879 18.6615 22.7714 18.249 23.5962 17.4241C25.246 15.7743 25.246 13.0899 23.5962 11.4401C21.9464 9.7903 19.2621 9.7903 17.6124 11.4401ZM22.3358 16.1638C21.3811 17.1185 19.8275 17.1185 18.8725 16.1638C17.9179 15.209 17.9179 13.6554 18.8725 12.7005C19.3501 12.2232 19.9771 11.9844 20.6041 11.9844C21.2313 11.9844 21.8583 12.2232 22.3356 12.7005C23.2906 13.6553 23.2906 15.2089 22.3358 16.1638Z"
                      fill="url(#paint2_linear)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="23.3238"
                        y1="-14.2807"
                        x2="23.3238"
                        y2="45.0956"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#C7DAFD" />
                        <stop offset="1" stop-color="#E9F1FF" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear"
                        x1="0"
                        y1="0"
                        x2="26.2457"
                        y2="38.8388"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#2569E6" />
                        <stop offset="1" stop-color="#3649EF" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear"
                        x1="16.375"
                        y1="10.2028"
                        x2="22.7182"
                        y2="19.5885"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#2569E6" />
                        <stop offset="1" stop-color="#3649EF" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M17.6124 11.4401C15.9625 13.0899 15.9625 15.7742 17.6124 17.4241C18.4372 18.249 19.5207 18.6615 20.6044 18.6615C21.6879 18.6615 22.7714 18.249 23.5962 17.4241C25.246 15.7743 25.246 13.0899 23.5962 11.4401C21.9464 9.7903 19.2621 9.7903 17.6124 11.4401ZM22.3358 16.1638C21.3811 17.1185 19.8275 17.1185 18.8725 16.1638C17.9179 15.209 17.9179 13.6554 18.8725 12.7005C19.3501 12.2232 19.9771 11.9844 20.6041 11.9844C21.2313 11.9844 21.8583 12.2232 22.3356 12.7005C23.2906 13.6553 23.2906 15.2089 22.3358 16.1638Z"
                      fill="url(#paint2_linear)"
                    />
                  </svg>
                  <h3>Startups</h3>
                  <ul className="bullets-light">
                    <li>MVP for quick launch to market</li>
                    <li>Fixed price estimates for clear budgeting</li>
                    <li>Agile practices to accelerate project delivery</li>
                  </ul>
                </div>
              </div>
              <div className="service-block col-lg-4 col-md-6 col-sm-12">
                <div
                  class="column-2"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="35"
                    viewBox="0 0 36 35"
                    fill="none"
                  >
                    <path
                      d="M23 2L33.5 1C35.1 4.2 34.1667 9.66667 33.5 12L30.5 16.5L27 20.5L28 22L28.5 24.5L24.5 31L22 33L18.5 29.5L15 30.5L11.5 28V29.5C8.3 33.9 3.16667 34 1 33.5C1.4 25.5 5.16667 23.1667 7 23L4.5 19L5.5 16L2 12L11.5 6.5L14.5 8L23 2Z"
                      fill="url(#paint0_linear)"
                    />
                    <path
                      d="M34.8254 1.76656C34.7303 0.926673 34.0772 0.273527 33.2371 0.178299C30.7177 -0.107137 22.1199 -0.660929 17.2645 4.19455L14.4457 7.01335L14.1124 6.68005C12.7377 5.30535 10.583 5.11514 8.98892 6.22767L1.84459 11.2134C1.45229 11.4873 1.20308 11.9177 1.16099 12.3943C1.11899 12.8709 1.2889 13.3382 1.62715 13.6765L4.70473 16.7542L3.95636 17.5025C3.40091 18.0578 3.3014 18.9122 3.71441 19.58C4.16175 20.3034 4.89907 21.4784 5.69679 22.6787C4.77677 22.9214 3.92508 23.4026 3.24182 24.086C1.66676 25.6611 0.547374 30.6916 0.0199063 33.5519C-0.0524638 33.9493 0.0750295 34.357 0.361044 34.642C0.593172 34.8734 0.905511 35 1.22651 35C1.30053 35 1.37513 34.9932 1.44923 34.9795C4.30674 34.4539 9.33617 33.3366 10.9143 31.7584C11.5964 31.0763 12.0772 30.2261 12.3206 29.3074C13.5208 30.1038 14.6978 30.8407 15.4209 31.2869C15.6959 31.4567 16.0024 31.5396 16.3067 31.5395C16.7408 31.5395 17.1702 31.3709 17.4962 31.045L17.5537 30.9876C17.7397 30.8018 17.9737 30.5679 18.2461 30.2957L21.3233 33.373C21.6278 33.6773 22.0367 33.8455 22.4628 33.8455C22.5103 33.8455 22.5579 33.8434 22.6057 33.8392C23.0823 33.797 23.5127 33.548 23.7866 33.1555L28.7723 26.0115C29.8847 24.4174 29.6946 22.2624 28.3201 20.8878L27.99 20.5577C29.2565 19.292 30.2835 18.2653 30.8093 17.7395C35.6646 12.8838 35.1106 4.28606 34.8254 1.76656ZM33.0363 1.94951C33.0455 1.9505 33.0532 1.95809 33.0542 1.96725C33.2382 3.59017 33.5493 7.9464 32.249 11.8865L23.1172 2.75474C27.0573 1.45439 31.4135 1.76557 33.0363 1.94951ZM3.03065 12.5594L10.009 7.68943C10.8936 7.07202 12.0893 7.17764 12.852 7.94046L13.1853 8.27384L5.96514 15.494L3.03065 12.5594ZM9.65387 30.4982C8.84451 31.3076 5.85333 32.299 1.92571 33.0743C2.70263 29.146 3.6946 26.1542 4.50214 25.3466C5.11865 24.73 5.93898 24.3581 6.80132 24.292C7.45232 25.2097 8.07485 26.0176 8.54736 26.4896C9.01277 26.9546 9.80595 27.5654 10.7083 28.2051C10.6407 29.0648 10.2687 29.8832 9.65387 30.4982ZM27.3105 24.9911L22.4404 31.9692L19.5067 29.0354C21.4923 27.0508 24.3409 24.2041 26.7289 21.8172L27.0593 22.1476C27.8222 22.9107 27.9278 24.1065 27.3105 24.9911ZM26.7294 19.297L26.7262 19.2938L16.9853 29.0347L16.9857 29.0351C16.7135 29.3072 16.4795 29.541 16.2937 29.7267L16.2911 29.7293C14.9877 28.9238 11.0021 26.4221 9.80711 25.2284C8.60454 24.0271 6.0829 20.0189 5.27131 18.7086L9.49609 14.4837L15.7061 8.27367L18.5248 5.45487C19.3473 4.63256 20.3024 3.98759 21.3251 3.48306L31.5207 13.6787C31.0162 14.7014 30.3712 15.6565 29.5489 16.4788C29.023 17.0045 27.9958 18.0313 26.7294 19.297Z"
                      fill="url(#paint1_linear)"
                    />
                    <path
                      d="M17.6124 11.4401C15.9625 13.0899 15.9625 15.7742 17.6124 17.4241C18.4372 18.249 19.5207 18.6615 20.6044 18.6615C21.6879 18.6615 22.7714 18.249 23.5962 17.4241C25.246 15.7743 25.246 13.0899 23.5962 11.4401C21.9464 9.7903 19.2621 9.7903 17.6124 11.4401ZM22.3358 16.1638C21.3811 17.1185 19.8275 17.1185 18.8725 16.1638C17.9179 15.209 17.9179 13.6554 18.8725 12.7005C19.3501 12.2232 19.9771 11.9844 20.6041 11.9844C21.2313 11.9844 21.8583 12.2232 22.3356 12.7005C23.2906 13.6553 23.2906 15.2089 22.3358 16.1638Z"
                      fill="url(#paint2_linear)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="23.3238"
                        y1="-14.2807"
                        x2="23.3238"
                        y2="45.0956"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#C7DAFD" />
                        <stop offset="1" stop-color="#E9F1FF" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear"
                        x1="0"
                        y1="0"
                        x2="26.2457"
                        y2="38.8388"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#2569E6" />
                        <stop offset="1" stop-color="#3649EF" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear"
                        x1="16.375"
                        y1="10.2028"
                        x2="22.7182"
                        y2="19.5885"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#2569E6" />
                        <stop offset="1" stop-color="#3649EF" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M17.6124 11.4401C15.9625 13.0899 15.9625 15.7742 17.6124 17.4241C18.4372 18.249 19.5207 18.6615 20.6044 18.6615C21.6879 18.6615 22.7714 18.249 23.5962 17.4241C25.246 15.7743 25.246 13.0899 23.5962 11.4401C21.9464 9.7903 19.2621 9.7903 17.6124 11.4401ZM22.3358 16.1638C21.3811 17.1185 19.8275 17.1185 18.8725 16.1638C17.9179 15.209 17.9179 13.6554 18.8725 12.7005C19.3501 12.2232 19.9771 11.9844 20.6041 11.9844C21.2313 11.9844 21.8583 12.2232 22.3356 12.7005C23.2906 13.6553 23.2906 15.2089 22.3358 16.1638Z"
                      fill="url(#paint2_linear)"
                    />
                  </svg>
                  <h3>SMBs</h3>
                  <ul className="bullets-light">
                    <li>Flexible engagement models</li>
                    <li>In-depth domain expertise & industry knowledg</li>
                    <li>Tried-and-tested environment optimization methods</li>
                  </ul>
                </div>
              </div>
              <div className="service-block col-lg-4 col-md-6 col-sm-12">
                <div
                  class="column-2"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="35"
                    viewBox="0 0 36 35"
                    fill="none"
                  >
                    <path
                      d="M23 2L33.5 1C35.1 4.2 34.1667 9.66667 33.5 12L30.5 16.5L27 20.5L28 22L28.5 24.5L24.5 31L22 33L18.5 29.5L15 30.5L11.5 28V29.5C8.3 33.9 3.16667 34 1 33.5C1.4 25.5 5.16667 23.1667 7 23L4.5 19L5.5 16L2 12L11.5 6.5L14.5 8L23 2Z"
                      fill="url(#paint0_linear)"
                    />
                    <path
                      d="M34.8254 1.76656C34.7303 0.926673 34.0772 0.273527 33.2371 0.178299C30.7177 -0.107137 22.1199 -0.660929 17.2645 4.19455L14.4457 7.01335L14.1124 6.68005C12.7377 5.30535 10.583 5.11514 8.98892 6.22767L1.84459 11.2134C1.45229 11.4873 1.20308 11.9177 1.16099 12.3943C1.11899 12.8709 1.2889 13.3382 1.62715 13.6765L4.70473 16.7542L3.95636 17.5025C3.40091 18.0578 3.3014 18.9122 3.71441 19.58C4.16175 20.3034 4.89907 21.4784 5.69679 22.6787C4.77677 22.9214 3.92508 23.4026 3.24182 24.086C1.66676 25.6611 0.547374 30.6916 0.0199063 33.5519C-0.0524638 33.9493 0.0750295 34.357 0.361044 34.642C0.593172 34.8734 0.905511 35 1.22651 35C1.30053 35 1.37513 34.9932 1.44923 34.9795C4.30674 34.4539 9.33617 33.3366 10.9143 31.7584C11.5964 31.0763 12.0772 30.2261 12.3206 29.3074C13.5208 30.1038 14.6978 30.8407 15.4209 31.2869C15.6959 31.4567 16.0024 31.5396 16.3067 31.5395C16.7408 31.5395 17.1702 31.3709 17.4962 31.045L17.5537 30.9876C17.7397 30.8018 17.9737 30.5679 18.2461 30.2957L21.3233 33.373C21.6278 33.6773 22.0367 33.8455 22.4628 33.8455C22.5103 33.8455 22.5579 33.8434 22.6057 33.8392C23.0823 33.797 23.5127 33.548 23.7866 33.1555L28.7723 26.0115C29.8847 24.4174 29.6946 22.2624 28.3201 20.8878L27.99 20.5577C29.2565 19.292 30.2835 18.2653 30.8093 17.7395C35.6646 12.8838 35.1106 4.28606 34.8254 1.76656ZM33.0363 1.94951C33.0455 1.9505 33.0532 1.95809 33.0542 1.96725C33.2382 3.59017 33.5493 7.9464 32.249 11.8865L23.1172 2.75474C27.0573 1.45439 31.4135 1.76557 33.0363 1.94951ZM3.03065 12.5594L10.009 7.68943C10.8936 7.07202 12.0893 7.17764 12.852 7.94046L13.1853 8.27384L5.96514 15.494L3.03065 12.5594ZM9.65387 30.4982C8.84451 31.3076 5.85333 32.299 1.92571 33.0743C2.70263 29.146 3.6946 26.1542 4.50214 25.3466C5.11865 24.73 5.93898 24.3581 6.80132 24.292C7.45232 25.2097 8.07485 26.0176 8.54736 26.4896C9.01277 26.9546 9.80595 27.5654 10.7083 28.2051C10.6407 29.0648 10.2687 29.8832 9.65387 30.4982ZM27.3105 24.9911L22.4404 31.9692L19.5067 29.0354C21.4923 27.0508 24.3409 24.2041 26.7289 21.8172L27.0593 22.1476C27.8222 22.9107 27.9278 24.1065 27.3105 24.9911ZM26.7294 19.297L26.7262 19.2938L16.9853 29.0347L16.9857 29.0351C16.7135 29.3072 16.4795 29.541 16.2937 29.7267L16.2911 29.7293C14.9877 28.9238 11.0021 26.4221 9.80711 25.2284C8.60454 24.0271 6.0829 20.0189 5.27131 18.7086L9.49609 14.4837L15.7061 8.27367L18.5248 5.45487C19.3473 4.63256 20.3024 3.98759 21.3251 3.48306L31.5207 13.6787C31.0162 14.7014 30.3712 15.6565 29.5489 16.4788C29.023 17.0045 27.9958 18.0313 26.7294 19.297Z"
                      fill="url(#paint1_linear)"
                    />
                    <path
                      d="M17.6124 11.4401C15.9625 13.0899 15.9625 15.7742 17.6124 17.4241C18.4372 18.249 19.5207 18.6615 20.6044 18.6615C21.6879 18.6615 22.7714 18.249 23.5962 17.4241C25.246 15.7743 25.246 13.0899 23.5962 11.4401C21.9464 9.7903 19.2621 9.7903 17.6124 11.4401ZM22.3358 16.1638C21.3811 17.1185 19.8275 17.1185 18.8725 16.1638C17.9179 15.209 17.9179 13.6554 18.8725 12.7005C19.3501 12.2232 19.9771 11.9844 20.6041 11.9844C21.2313 11.9844 21.8583 12.2232 22.3356 12.7005C23.2906 13.6553 23.2906 15.2089 22.3358 16.1638Z"
                      fill="url(#paint2_linear)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="23.3238"
                        y1="-14.2807"
                        x2="23.3238"
                        y2="45.0956"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#C7DAFD" />
                        <stop offset="1" stop-color="#E9F1FF" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear"
                        x1="0"
                        y1="0"
                        x2="26.2457"
                        y2="38.8388"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#2569E6" />
                        <stop offset="1" stop-color="#3649EF" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear"
                        x1="16.375"
                        y1="10.2028"
                        x2="22.7182"
                        y2="19.5885"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#2569E6" />
                        <stop offset="1" stop-color="#3649EF" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M17.6124 11.4401C15.9625 13.0899 15.9625 15.7742 17.6124 17.4241C18.4372 18.249 19.5207 18.6615 20.6044 18.6615C21.6879 18.6615 22.7714 18.249 23.5962 17.4241C25.246 15.7743 25.246 13.0899 23.5962 11.4401C21.9464 9.7903 19.2621 9.7903 17.6124 11.4401ZM22.3358 16.1638C21.3811 17.1185 19.8275 17.1185 18.8725 16.1638C17.9179 15.209 17.9179 13.6554 18.8725 12.7005C19.3501 12.2232 19.9771 11.9844 20.6041 11.9844C21.2313 11.9844 21.8583 12.2232 22.3356 12.7005C23.2906 13.6553 23.2906 15.2089 22.3358 16.1638Z"
                      fill="url(#paint2_linear)"
                    />
                  </svg>
                  <h3>Enterprises</h3>
                  <ul className="bullets-light">
                    <li>Consultancy to chalk out a future roadmap</li>
                    <li>Compliance with industry standards and regulations</li>
                    <li>Leverage emerging technologies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
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
                  </div>
                </div>

                <div class="image-column col-lg-4 col-md-12 col-sm-12">
                  <div class="inner-column">
                    <div class="image">
                      <a href="#" class="theme-btn btn-style-one">
                        <span class="txt">Let’s Discuss</span>
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
