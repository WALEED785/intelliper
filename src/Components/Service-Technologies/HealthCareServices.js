import React from "react";
import Footer from "../Footer";
import Header from "../header";

import service10 from "../../assets/images/resource/service-10.png";
import design1 from "../../assets/images/resource/design-1.png";
import design2 from "../../assets/images/resource/design-2.png";
import { Link } from "react-router-dom";

export default function HealthCareServices() {
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
                    Healthcare
                  </p>
                  <h2>Better Health Through Technology</h2>
                  <div class="text">
                    We help our clients deliver better patient care through
                    smart & innovative software offerings.
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

        <section class="stat-section health">
          <div class="container">
            <div class="stat-title">
              <h2 class="home-heading-two">We will Help You</h2>
            </div>
            <div class="stat-wrapper">
              <div class="stat-row">
                <div class="stat-card c1">
                  <img
                    src="https://tkxel.com/wp-content/themes/tkxel/assets/images/da-patient-care--icon.svg"
                    alt="Improve patient care"
                  />
                  <h2 class="head">Improve patient care</h2>
                  <p>
                    We help you deliver solutions to enable ease of access to
                    medical information for your patients.
                  </p>
                </div>
                <div class="stat-card c2">
                  <img
                    src="https://tkxel.com/wp-content/themes/tkxel/assets/images/da-more-data--icon.svg"
                    alt="more data"
                  />
                  <h2 class="head">Get more out of your data</h2>
                  <p>
                    We set up robust analytics models to help you extract
                    information that could be life saving.
                  </p>
                </div>
              </div>
              <div class="stat-row">
                <div class="stat-card c3">
                  <img
                    src="https://tkxel.com/wp-content/themes/tkxel/assets/images/da-save-time--icon.svg"
                    alt="save-time"
                  />
                  <h2 class="head">Save time and resources</h2>
                  <p>
                    We help you automate processes so your resources can be
                    focused on more business oriented goals.
                  </p>
                </div>
                <div class="stat-card c4">
                  <img
                    src="https://tkxel.com/wp-content/themes/tkxel/assets/images/da-data-protection--icon.svg"
                    alt="data protection"
                  />
                  <h2 class="head">Ensure Data Security</h2>
                  <p>
                    We use secure technologies such as blockchain to keep your
                    and your patients’ data secure and breach free.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="robenifit-section">
          <div class="container">
            <div class="robotrules-title">
              <h2 class="home-heading-two">Technologies We Work with</h2>
            </div>
            <div class="robenifit-wrap hc-wrap">
              <div class="robenifit-card">
                <img
                  src="https://tkxel.com/wp-content/themes/tkxel/assets/images/hc-iot--icon.svg"
                  alt="IoT"
                />
                <h4>Internet of Things</h4>
              </div>
              <div class="robenifit-card">
                <img
                  src="https://tkxel.com/wp-content/themes/tkxel/assets/images/hc-ml--icon.svg"
                  alt="Machine Learning"
                />
                <h4>Machine Learning</h4>
              </div>
              <div class="robenifit-card">
                <img
                  src="https://tkxel.com/wp-content/themes/tkxel/assets/images/hc-comp-vision--icon.svg"
                  alt="Computer Vision"
                />
                <h4>Computer Vision</h4>
              </div>
              <div class="robenifit-card">
                <img
                  src="https://tkxel.com/wp-content/themes/tkxel/assets/images/hc-blockchain--icon.svg"
                  alt="Blockchain"
                />
                <h4>Blockchain</h4>
              </div>
              <div class="robenifit-card">
                <img
                  src="https://tkxel.com/wp-content/themes/tkxel/assets/images/hc-big-data--icon.svg"
                  alt="Big Data"
                />
                <h4>Big Data &amp; Analytics</h4>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
