import React from "react";
import Footer from "../Footer";
import Header from "../header";

import service10 from "../../assets/images/resource/service-10.png";
import design1 from "../../assets/images/resource/design-1.png";
import design2 from "../../assets/images/resource/design-2.png";
import { Link } from "react-router-dom";

export default function BlockchainConsultingServices() {
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
                    Blockchain
                  </p>
                  <h2>Delivering Robust Software Systems With Blockchain.</h2>
                  <div class="text">
                    Helping you boost performance, productivity, and security.
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
            {" "}
            <div class="offer-title">
              {" "}
              <h2 class="home-heading-two">Why Blockchain?</h2>{" "}
            </div>{" "}
            <div class="offer-cards">
              <div class="card">
                {" "}
                <img
                  alt="Save Time"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/bch-save-time--icon.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NTIwOjEyMw==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/bch-save-time--icon.svg"
                />{" "}
                <h3>Save Time and Operational Costs</h3>
                <p>
                  Blockchain tech allows for allows for verification without
                  having to be dependent on redundant processes and third
                  parties.
                </p>{" "}
              </div>{" "}
              <div class="card">
                {" "}
                <img
                  alt="Eliminate the Middle Man"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/bch-estimate--icon.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NTI1OjEzNw==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/bch-estimate--icon.svg"
                />
                <h3>Eliminate the Middle Man</h3>{" "}
                <p>
                  Blockchain helps you take control of your transactions and
                  saves you the hassle of employing a middle man.
                </p>{" "}
              </div>{" "}
              <div class="card">
                {" "}
                <img
                  alt="Data Secure"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/bch-secure-data--icon.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NTMwOjEyNw==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/bch-secure-data--icon.svg"
                />{" "}
                <h3>Make your Data Secure</h3>{" "}
                <p>
                  The tech removes the risk of duplicate entry or fraud as
                  multiple consensus protocols need to be fulfilled to validate
                  an entry.
                </p>
              </div>{" "}
              <div class="card">
                {" "}
                <img
                  alt="Transparency"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/bch-transparency--icon.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NTM1OjEyOQ==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/bch-transparency--icon.svg"
                />{" "}
                <h3>Ensure high Level of Transparency</h3>{" "}
                <p>
                  Transactions are recorded across every participating node in
                  the Blockchain, which helps ensure transparency to each
                  participant.
                </p>{" "}
              </div>{" "}
              <div class="card">
                {" "}
                <img
                  alt="Take control Info"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/bch-take-control--icon.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NTQwOjEzNA==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/bch-take-control--icon.svg"
                />{" "}
                <h3>Take control of your Information</h3>{" "}
                <p>
                  Consent of all ledger participants is needed to add records to
                  the chain, which means every stakeholder gets a say in major
                  decisions.
                </p>{" "}
              </div>{" "}
              <div class="card">
                {" "}
                <img
                  alt="Completeness"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/bch-completness--icon.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NTQ1OjEyOA==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/bch-completness--icon.svg"
                />{" "}
                <h3>Ensure Completeness of Data</h3>{" "}
                <p>
                  Blockchain's append only property makes data alteration or
                  deletion impossible, helping you maintain its accuracy at all
                  times.
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
              {" "}
              <h2 class="home-heading-two">Services We Offer</h2>{" "}
            </div>{" "}
            <div class="offer-cards">
              {" "}
              <div class="card">
                {" "}
                <img
                  alt="Public and Private Blockchains"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/bch-pnpblockchain--icon.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NTU5OjE0OA==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/bch-pnpblockchain--icon.svg"
                />
                <h3>Public and Private Blockchains</h3>{" "}
                <p>
                  With Public and Private Blockchain options, you get to control
                  who has access to specific information.
                </p>{" "}
              </div>{" "}
              <div class="card">
                {" "}
                <img
                  alt="Wallets and Exchanges"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/bch-wallet--icon.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NTY0OjEzMg==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/bch-wallet--icon.svg"
                />{" "}
                <h3>Wallets and Exchanges</h3>
                <p>
                  We help you build safe Cryptocurrency wallets and exchanges to
                  conduct trade seamlessly without hurdles.
                </p>{" "}
              </div>{" "}
              <div class="card">
                {" "}
                <img
                  alt="Distributed Applications"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/bch-distributed--icon.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NTY5OjE0MA==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/bch-distributed--icon.svg"
                />{" "}
                <h3>Distributed Applications</h3>{" "}
                <p>
                  Our Decentralized Applications development service helps keep
                  records tamper-proof and free of intrusions.
                </p>{" "}
              </div>{" "}
              <div class="card">
                <img
                  alt="Testing &amp; Migration"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/bch-migration--icon.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NTc0OjEzMw==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/bch-migration--icon.svg"
                />{" "}
                <h3>Testing &amp; Migration</h3>{" "}
                <p>
                  We help you migrate your existing business into Blockchain and
                  define a testing and migration roadmap.
                </p>{" "}
              </div>{" "}
              <div class="card">
                {" "}
                <img
                  alt="Smart Contracts"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/bch-contracts--icon.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NTc5OjEyOQ==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/bch-contracts--icon.svg"
                />{" "}
                <h3>Smart Contracts</h3>{" "}
                <p>
                  We use Blockchain platforms like Etherium to deliver highly
                  secure, and competitive Smart Contracts.
                </p>{" "}
              </div>{" "}
              <div class="card">
                {" "}
                <img
                  alt="Blockchain Consultancy"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/bch-blockchain-consult--icon.svg"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NTg0OjE0NQ==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/bch-blockchain-consult--icon.svg"
                />{" "}
                <h3>Blockchain Consultancy</h3>{" "}
                <p>
                  By analyzing your business infrastructure, we identify threats
                  Blockchain can counter and opportunities it can address.
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

        <section class="bch-works nitro-offscreen">
          <div class="container">
            {" "}
            <div class="offer-title bchworks">
              {" "}
              <h2 class="home-heading-two heading-read">
                How blockchain works?
              </h2>{" "}
            </div>{" "}
            <div class="bch-works-wrap">
              {" "}
              <div class="works-text">
                {" "}
                <div>
                  <span>1</span>
                  <li>Transaction Request is Made</li>
                </div>{" "}
                <div>
                  <span>2</span>
                  <li>A Block representing the Transaction is created</li>
                </div>{" "}
                <div>
                  <span>3</span>
                  <li>The Block is sent to every Node on the Network.</li>
                </div>{" "}
                <div>
                  <span>4</span>
                  <li>The Block is added to the existing Blockchain.</li>
                </div>{" "}
                <div>
                  <span>5</span>
                  <li>Transaction is validated by every Node.</li>
                </div>{" "}
                <div>
                  <span>6</span>
                  <li>Transaction is Completed.</li>
                </div>{" "}
              </div>{" "}
              <div class="works-img">
                {" "}
                <img
                  alt="Blockchain Works"
                  nitro-lazy-src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/blockchain-works--img.webp"
                  class=" lazyloaded"
                  nitro-lazy-empty=""
                  id="NjEzOjEzMw==-1"
                  src="https://cdn-ddddj.nitrocdn.com/NSvsNMzbKkQslXvZnhobiTmmCkBXBUPd/assets/static/optimized/rev-9e570d1/wp-content/themes/tkxel/assets/images/blockchain-works--img.webp"
                />{" "}
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
