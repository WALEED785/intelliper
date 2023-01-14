import React from "react";
import Footer from "./Footer";
import Header from "./header";
import map from '../assets/images/icons/map.png'
import discuss from '../assets/images/resource/discuss.png'

export default function ContactUS() {
  return (
    <div class="page-wrapper">
      <Header />
      <section class="page-title-section style-five">
        <div class="left-color-layer"></div>
        <div class="right-color-layer"></div>
        <div class="auto-container">
          <div class="content-boxed">
            <div class="inner-box">
              {/* <div class="title">Contact</div> */}
              <h2>Leave us a little info</h2>
              <div class="text">
                Leave us a little info, and we’ll be in touch. exercitation
                ullamco laboris nisi ut aliquip ex ea <br /> commodo consequat.{" "}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="contact-page-section">
        <div class="auto-container">
          <div class="inner-container">
            <div class="row clearfix">
              <div class="info-block col-lg-4 col-md-12 col-sm-12">
                <div class="inner-column">
                  <ul class="list">
                    <li>
                      <span class="icon">
                        <img src={map} alt="" />
                      </span>
                      <strong>Location</strong>
                      Building 543 Bournadi bus stand Barisal 11454, Berlin,
                      Germany
                    </li>
                    <li>
                      <span class="icon"></span>
                      <strong>Email</strong>
                      <a href="mailto:supportit@email.com">
                        supportit@email.com
                      </a>
                    </li>
                    <li>
                      <span class="icon"></span>
                      <strong>Phone</strong>
                      <a href="tel:+112-334-106-610">+112 334 106 610</a>
                      <br />
                      <a href="tel:+8801-648-101-51">+8801 648 101 51</a>
                    </li>
                    <li>
                      <strong>Social</strong>
                      <a href="contact.html#" class="fa fa-facebook-f"></a>
                      <a href="contact.html#" class="fa fa-linkedin"></a>
                      <a href="contact.html#" class="fa fa-slack"></a>
                      <a href="contact.html#" class="fa fa-dribbble"></a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="form-block col-lg-8 col-md-12 col-sm-12">
                <div class="inner-column">
                  <div class="title-box">
                    <h3>Send a message</h3>
                    <div class="text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut blandit <br /> arcu in pretium.
                    </div>
                  </div>

                  <div class="contact-form">
                    <form
                      method="post"
                      action="https://themazine.com/html/Esonit/Esonit/sendemail.php"
                      id="contact-form"
                    >
                      <div class="row clearfix">
                        <div class="form-group col-lg-6 col-md-6 col-sm-12">
                          <input
                            type="text"
                            name="username"
                            placeholder="Name"
                            required
                          />
                        </div>

                        <div class="form-group col-lg-6 col-md-6 col-sm-12">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                          />
                        </div>

                        <div class="form-group col-lg-6 col-md-6 col-sm-12">
                          <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            required
                          />
                        </div>

                        <div class="form-group col-lg-6 col-md-6 col-sm-12">
                          <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            required
                          />
                        </div>

                        <div class="form-group col-lg-12 col-md-12 col-sm-12">
                          <textarea
                            name="message"
                            placeholder="message"
                          ></textarea>
                        </div>

                        <div class="form-group col-lg-12 col-md-12 col-sm-12">
                          <button
                            class="theme-btn submit-btn"
                            type="submit"
                            name="submit-form"
                          >
                            Submit Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
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
                  <a href="contact.html#" class="theme-btn btn-style-one">
                    <span class="txt">Let’s Discuss</span>
                  </a>
                </div>
              </div>

              <div class="image-column col-lg-4 col-md-12 col-sm-12">
                <div class="inner-column">
                  <div class="image">
                    <img src={discuss} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
