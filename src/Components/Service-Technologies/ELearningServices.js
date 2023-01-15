import React from "react";
import Footer from "../Footer";
import Header from "../header";

import service10 from "../../assets/images/resource/service-10.png";
import design1 from "../../assets/images/resource/design-1.png";
import design2 from "../../assets/images/resource/design-2.png";
import { Link } from "react-router-dom";

export default function ELearningServices() {
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
                    E Learning
                  </p>
                  <h2>Helping Deliver Education Beyond Boundaries</h2>
                  <div class="text">
                  We help our clients revolutionize education through modern technologies by delivering robust and secure E-Learning platforms.
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
    <div class="container">
        <div class="robot1">
            <div class="robot-text">
                <p class="robot-subtext">WHY US?</p>
                <h2 class="home-heading-two heading-read">Delivering Impact</h2>
                <p>intelliper solution's has been developing and upgrading eLearning solutions for over a 
                    decade and has delivered tens of LMS projects to education sector, 
                    corporate sector and non profit sector.</p>
            </div>
            <div class="robot-img el">
                <img src="https://tkxel.com/wp-content/themes/tkxel/assets/images/el-us@1x.webp" alt="el-us"/>
            </div>
        </div>
    </div>
</section>



<section class="offer-section">
    <div class="container">
        <div class="offer-title">
            <h2 class="home-heading-two">We Can Help You In</h2>
        </div>
        <div class="offer-cards">
            <div class="card">
                <img src="https://tkxel.com/wp-content/themes/tkxel/assets/images/el-gamification--icon.svg" alt="gamification"/>
                <h3>Gamification of E-Learning Platform</h3>
            </div>
            <div class="card">
                <img src="https://tkxel.com/wp-content/themes/tkxel/assets/images/el-native-cp--icon.svg" alt="el-native"/>
                <h3>Native &amp; Cross-Platform Solutions</h3>
            </div>
            <div class="card">
                <img src="https://tkxel.com/wp-content/themes/tkxel/assets/images/el-redesign--icon.svg" alt="el-redesign"/>
                <h3>Re-designing of Existing Product</h3>
            </div>
            <div class="card">
                <img src="https://tkxel.com/wp-content/themes/tkxel/assets/images/el-uf--icon.svg" alt="el-uf"/>
                <h3>Immersive &amp; User Friendly Designs</h3>
            </div>
            <div class="card">
                <img src="https://tkxel.com/wp-content/themes/tkxel/assets/images/el-custom-integrate--icon.svg" alt="el-custom-integrate"/>
                <h3>Easy Customization &amp; Integration Processes</h3>
            </div>
            <div class="card">
                <img src="https://tkxel.com/wp-content/themes/tkxel/assets/images/el-elearning--icon.svg" alt="el-elearning"/>
                <h3>Transfer of E-Learning Applications to Mobile Platforms</h3>
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

        <section class="iot-features el">
    <div class="container">
        <div class="ms-service-title">
            <h2 class="home-heading-two">Tech Stacks</h2>
        </div>
        <div class="iot-features-img">
            <img src="https://tkxel.com/wp-content/themes/tkxel/assets/images/el-apple-logo.svg" alt="apple"/>
            <img src="https://tkxel.com/wp-content/themes/tkxel/assets/images/el-swift-logomark.svg" alt="logomark"/>
            <img src="https://tkxel.com/wp-content/themes/tkxel/assets/images/el-react--logo.svg" alt="react"/>
            <img src="https://tkxel.com/wp-content/themes/tkxel/assets/images/el-java-4.svg" alt="java"/>
            <img src="https://tkxel.com/wp-content/themes/tkxel/assets/images/el-html5--logo.svg" alt="html5"/>
            <img src="https://tkxel.com/wp-content/themes/tkxel/assets/images/el-android-logomark.svg" alt="android-logomark"/>
            <img src="https://tkxel.com/wp-content/themes/tkxel/assets/images/el-angular--logo.svg" alt="angular"/>
            <img src="https://tkxel.com/wp-content/themes/tkxel/assets/images/el-Frame.svg" alt="Frame"/>
            <img src="https://tkxel.com/wp-content/themes/tkxel/assets/images/el-cs--logo.svg" alt="cs"/>
            <img src="https://tkxel.com/wp-content/themes/tkxel/assets/images/el-ror--logo.svg" alt="ror"/>
        </div>
    </div>
</section>

        <Footer />
      </div>
    </>
  );
}
