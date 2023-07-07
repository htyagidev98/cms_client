import React, { useState } from "react";
import {
  BsArrowRight,
  BsBoxArrowUpRight,
  BsDot,
  BsFileArrowDown,
} from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import "./roadmap.css";
import "react-multi-carousel/lib/styles.css";
import logo from "../../assets/logo-img.png";
import $ from "jquery";
import {CCarousel, CCarouselItem } from "@coreui/react";
import Header from "../../common/header/Header";
import Navbar from "../../common/navbar/Navbar";
import Footer from "../../common/footer/Footer";
// import { Accordion } from 'react-bootstrap'
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import Accordion from "react-bootstrap/Accordion";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import JoinSection from "../dropdownCommunity/JoinSection";
import Slider from "react-slick";
import RoadmapFirstSec from "./Roadmap/RoadmapFirstSec";

// Import Swiper styles
// import 'swiper/css';

const Roadmap = ({ children }) => {
  const [counter, setCounter] = useState(0);

  var settings = {
   dots: false,
   infinite: true,
   slidesToShow: 3,
   autoplay:false,
   arrow:true,
   speed: 1000,
   slidesToScroll: 1,
   centerMode: false,
   vertical: false,
   responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
   verticalSwiping: false,
   beforeChange: function(currentSlide, nextSlide) {
   
   },
   afterChange: function(currentSlide) {
     setCounter(currentSlide)
   }
 };
  // const[account,setAccount]=useState(false);
  // const[validator,setValidator]=useState(false);
  // const[basic,setBasic]=useState(false);
  // const[nomination,setNomination]=useState(false);
  // const[hardware,setHardware]=useState(false);
  // const [toggle, setToggle] = useState(null);
  // let handleToggle=(id)=>{
  //     if(toggle===id){
  //         setToggle(null);
  //         return false
  //     }
  //    setToggle(id)

  // }

  return (
    <>
      <header className="header_content">
        <Header />
        <Navbar />
      </header>
      <section>
        <div className="mini-banner">
          <div className="custom-wrapper">
            <div className="banner-list">
              {/* <h3>
                Project <span>roadmap</span>
              </h3>
              <ul>
                <li>
                  <i className="icon-governance"></i> Core chain
                </li>
                <li>
                  <i className="icon-governance"></i> Governance
                </li>
                <li>
                  <i className="icon-governance"></i> Smart contracts
                </li>
              </ul> */}

              <RoadmapFirstSec />
            </div>
          </div>
        </div>

        <div className="container">
        <div className="slider-section roadmap_slider">
          <div className="custom-wrapper overflow-hidden">
            {/* <!-- swiper1 --> */}
              {/* <Swiper
      spaceBetween={30}
      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
  > */}
            {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ... */}

            <div
              className="swiper-container swiper1"
              style={{ marginBottom: "20px" }}
            >
              <div className="swiper-wrapper">
                <div className={`swiper-slide ${counter == 0 && "selected"}`}>
                  <span className="text-content">Phase</span> 1
                </div>
                <div className={`swiper-slide ${counter == 1 && "selected"}`}>
                <span className="text-content">Phase</span> 2
                </div>
                <div className={`swiper-slide ${counter == 2 && "selected"}`}>
                <span className="text-content"> Phase</span> 3
                </div>
                <div className={`swiper-slide ${counter == 3 && "selected"}`}>
                <span className="text-content"> Phase</span> 4
                </div>
                <div className={`swiper-slide ${counter == 4 && "selected"}`}>
                <span className="text-content">Phase</span> 5
                </div>
                <div className={`swiper-slide ${counter == 5 && "selected"}`}>
                <span className="text-content"> Phase</span> 6
                </div>
                <div className={`swiper-slide ${counter == 6 && "selected"}`}>
                <span className="text-content">Phase</span> 7
                </div>
              </div>
            </div>
            {/* <!-- swiper2 --> */}

            <div className="swiper-container swiper2">
              <div className="swiper-wrapper">
              <Slider {...settings}>
                <div>
                <div className="swiper-slide">
                  <div className="slider-card-sec">
                    <div className="top-left-card-sec"></div>
                    <span className="status-bar">IN PROGRESS</span>
                    <div className="card-content">
                      <img src={logo} />

                      <div>
                        {/* className="accordion-list-section" */}
                        {/* <Accordion> */}
                        <div className="custom-accordion">
                          <Accordion>
                            <ul className="accordion-list">
                              <AccordionItem eventKey="0">
                                <li>
                                  <AccordionHeader>
                                    <span className="acordion-icon"><span class="lnr lnr-magic-wand"></span></span> Account explorer
                                  </AccordionHeader>

                                  <AccordionBody>
                                    <p>
                                      Allowing users to see advanced account
                                      statistics.
                                    </p>
                                  </AccordionBody>
                                </li>
                              </AccordionItem>

                              <AccordionItem eventKey="1">
                                <li>
                                  <AccordionHeader>
                                  <span className="acordion-icon"><span class="lnr lnr-magic-wand"></span></span> Validator elections
                                  </AccordionHeader>
                                  {/* </div> */}
                                  {/* {toggle? */}
                                  <AccordionBody>
                                    {/* <div className="answer" id="2" > */}
                                    <p>
                                      Aleph Zero validators will be reassigned
                                      for each session, based on the sum of
                                      their own stake and funds staked on them
                                      by the community.
                                    </p>
                                    {/* </div> */}
                                  </AccordionBody>
                                </li>
                              </AccordionItem>

                              <AccordionItem eventKey="2">
                                <li>
                                  <AccordionHeader>
                                  <span className="acordion-icon"><span class="lnr lnr-magic-wand"></span></span>  Basic smart contract capabilities
                                  </AccordionHeader>
                                  <AccordionBody>
                                    <p>
                                      Adding WASM-based smart contracts to Aleph
                                      Zero blockchain, together with deployment
                                      tutorials.
                                    </p>
                                  </AccordionBody>
                                </li>
                              </AccordionItem>

                              <AccordionItem eventKey="3">
                                <li>
                                  <AccordionHeader>
                                  <span className="acordion-icon"><span class="lnr lnr-magic-wand"></span></span>   Nomination pools
                                  </AccordionHeader>

                                  <AccordionBody>
                                    <p>
                                      Providing better nominator experience by
                                      allowing multiple users to jointly stake
                                      their tokens.
                                    </p>
                                  </AccordionBody>
                                </li>
                              </AccordionItem>

                              <AccordionItem eventKey="4">
                                <li>
                                  <AccordionHeader>
                                  <span className="acordion-icon"><span class="lnr lnr-magic-wand"></span></span> Hardware wallets integration
                                  </AccordionHeader>
                                  <AccordionBody>
                                    <p>
                                      Allows to store AZERO on Ledger and Parity
                                      Signer hardware wallets.
                                    </p>
                                  </AccordionBody>
                                </li>
                              </AccordionItem>
                            </ul>
                          </Accordion>
                        </div>
                      </div>
                     
                    </div>
                  </div>
                  <div className="footer-bar-sec"></div>
                </div>
                </div>
                <div>
                <div className="swiper-slide">
                  <div className="slider-card-sec">
                    <div className="top-left-card-sec"></div>
                    <span className="status-bar">IN PROGRESS</span>
                    <div className="card-content">
                      <img src={logo} />
                      <div className="custom-accordion">
                        <Accordion>
                          <ul className="accordion-list">
                            <AccordionItem eventKey="0">
                              <li>
                                <AccordionHeader>
                                  Account explorer
                                </AccordionHeader>

                                <AccordionBody>
                                  <p>
                                    Allowing users to see advanced account
                                    statistics.
                                  </p>
                                </AccordionBody>
                              </li>
                            </AccordionItem>

                            <AccordionItem eventKey="1">
                              <li>
                                <AccordionHeader>
                                  Validator elections
                                </AccordionHeader>
                                {/* </div> */}
                                {/* {toggle? */}
                                <AccordionBody>
                                  {/* <div className="answer" id="2" > */}
                                  <p>
                                    Aleph Zero validators will be reassigned for
                                    each session, based on the sum of their own
                                    stake and funds staked on them by the
                                    community.
                                  </p>
                                  {/* </div> */}
                                </AccordionBody>
                              </li>
                            </AccordionItem>

                            <AccordionItem eventKey="2">
                              <li>
                                <AccordionHeader>
                                  Basic smart contract capabilities
                                </AccordionHeader>
                                <AccordionBody>
                                  <p>
                                    Adding WASM-based smart contracts to Aleph
                                    Zero blockchain, together with deployment
                                    tutorials.
                                  </p>
                                </AccordionBody>
                              </li>
                            </AccordionItem>

                            <AccordionItem eventKey="3">
                              <li>
                                <AccordionHeader>
                                  Nomination pools
                                </AccordionHeader>

                                <AccordionBody>
                                  <p>
                                    Providing better nominator experience by
                                    allowing multiple users to jointly stake
                                    their tokens.
                                  </p>
                                </AccordionBody>
                              </li>
                            </AccordionItem>

                            <AccordionItem eventKey="4">
                              <li>
                                <AccordionHeader>
                                  Hardware wallets integration
                                </AccordionHeader>
                                <AccordionBody>
                                  <p>
                                    Allows to store AZERO on Ledger and Parity
                                    Signer hardware wallets.
                                  </p>
                                </AccordionBody>
                              </li>
                            </AccordionItem>
                          </ul>
                        </Accordion>
                      </div>
                    </div>
                  </div>
                  <div className="footer-bar-sec"></div>
                </div>
                </div>
                <div>

                <div className="swiper-slide">
                  <div className="slider-card-sec">
                    <div className="top-left-card-sec"></div>
                    <span className="status-bar">IN PROGRESS</span>
                    <div className="card-content">
                      <img src={logo} />
                      <div className="custom-accordion">
                        <Accordion>
                          <ul className="accordion-list">
                            <AccordionItem eventKey="0">
                              <li>
                                <AccordionHeader>
                                  Account explorer
                                </AccordionHeader>

                                <AccordionBody>
                                  <p>
                                    Allowing users to see advanced account
                                    statistics.
                                  </p>
                                </AccordionBody>
                              </li>
                            </AccordionItem>

                            <AccordionItem eventKey="1">
                              <li>
                                <AccordionHeader>
                                  Validator elections
                                </AccordionHeader>
                                {/* </div> */}
                                {/* {toggle? */}
                                <AccordionBody>
                                  {/* <div className="answer" id="2" > */}
                                  <p>
                                    Aleph Zero validators will be reassigned for
                                    each session, based on the sum of their own
                                    stake and funds staked on them by the
                                    community.
                                  </p>
                                  {/* </div> */}
                                </AccordionBody>
                              </li>
                            </AccordionItem>

                            <AccordionItem eventKey="2">
                              <li>
                                <AccordionHeader>
                                  Basic smart contract capabilities
                                </AccordionHeader>
                                <AccordionBody>
                                  <p>
                                    Adding WASM-based smart contracts to Aleph
                                    Zero blockchain, together with deployment
                                    tutorials.
                                  </p>
                                </AccordionBody>
                              </li>
                            </AccordionItem>

                            <AccordionItem eventKey="3">
                              <li>
                                <AccordionHeader>
                                  Nomination pools
                                </AccordionHeader>

                                <AccordionBody>
                                  <p>
                                    Providing better nominator experience by
                                    allowing multiple users to jointly stake
                                    their tokens.
                                  </p>
                                </AccordionBody>
                              </li>
                            </AccordionItem>

                            <AccordionItem eventKey="4">
                              <li>
                                <AccordionHeader>
                                  Hardware wallets integration
                                </AccordionHeader>
                                <AccordionBody>
                                  <p>
                                    Allows to store AZERO on Ledger and Parity
                                    Signer hardware wallets.
                                  </p>
                                </AccordionBody>
                              </li>
                            </AccordionItem>
                          </ul>
                        </Accordion>
                      </div>
                    </div>
                  </div>
                  <div className="footer-bar-sec"></div>
                </div>
                </div>
                <div>
                <div className="swiper-slide">
                  <div className="slider-card-sec">
                    <div className="top-left-card-sec"></div>
                    <span className="status-bar">IN PROGRESS</span>
                    <div className="card-content">
                      <img src={logo} />
                      <div className="custom-accordion">
                        <Accordion>
                          <ul className="accordion-list">
                            <AccordionItem eventKey="0">
                              <li>
                                <AccordionHeader>
                                  Account explorer
                                </AccordionHeader>

                                <AccordionBody>
                                  <p>
                                    Allowing users to see advanced account
                                    statistics.
                                  </p>
                                </AccordionBody>
                              </li>
                            </AccordionItem>

                            <AccordionItem eventKey="1">
                              <li>
                                <AccordionHeader>
                                  Validator elections
                                </AccordionHeader>
                                {/* </div> */}
                                {/* {toggle? */}
                                <AccordionBody>
                                  {/* <div className="answer" id="2" > */}
                                  <p>
                                    Aleph Zero validators will be reassigned for
                                    each session, based on the sum of their own
                                    stake and funds staked on them by the
                                    community.
                                  </p>
                                  {/* </div> */}
                                </AccordionBody>
                              </li>
                            </AccordionItem>

                            <AccordionItem eventKey="2">
                              <li>
                                <AccordionHeader>
                                  Basic smart contract capabilities
                                </AccordionHeader>
                                <AccordionBody>
                                  <p>
                                    Adding WASM-based smart contracts to Aleph
                                    Zero blockchain, together with deployment
                                    tutorials.
                                  </p>
                                </AccordionBody>
                              </li>
                            </AccordionItem>

                            <AccordionItem eventKey="3">
                              <li>
                                <AccordionHeader>
                                  Nomination pools
                                </AccordionHeader>

                                <AccordionBody>
                                  <p>
                                    Providing better nominator experience by
                                    allowing multiple users to jointly stake
                                    their tokens.
                                  </p>
                                </AccordionBody>
                              </li>
                            </AccordionItem>

                            <AccordionItem eventKey="4">
                              <li>
                                <AccordionHeader>
                                  Hardware wallets integration
                                </AccordionHeader>
                                <AccordionBody>
                                  <p>
                                    Allows to store AZERO on Ledger and Parity
                                    Signer hardware wallets.
                                  </p>
                                </AccordionBody>
                              </li>
                            </AccordionItem>
                          </ul>
                        </Accordion>
                      </div>
                    </div>
                  </div>
                  <div className="footer-bar-sec"></div>
                </div>
               
                </div>
                <div>

                <div className="swiper-slide">
                  <div className="slider-card-sec">
                    <div className="top-left-card-sec"></div>
                    <span className="status-bar">IN PROGRESS</span>
                    <div className="card-content">
                      <img src={logo} />
                      <div className="custom-accordion">
                        <Accordion>
                          <ul className="accordion-list">
                            <AccordionItem eventKey="0">
                              <li>
                                <AccordionHeader>
                                  Account explorer
                                </AccordionHeader>

                                <AccordionBody>
                                  <p>
                                    Allowing users to see advanced account
                                    statistics.
                                  </p>
                                </AccordionBody>
                              </li>
                            </AccordionItem>

                            <AccordionItem eventKey="1">
                              <li>
                                <AccordionHeader>
                                  Validator elections
                                </AccordionHeader>
                                {/* </div> */}
                                {/* {toggle? */}
                                <AccordionBody>
                                  {/* <div className="answer" id="2" > */}
                                  <p>
                                    Aleph Zero validators will be reassigned for
                                    each session, based on the sum of their own
                                    stake and funds staked on them by the
                                    community.
                                  </p>
                                  {/* </div> */}
                                </AccordionBody>
                              </li>
                            </AccordionItem>

                            <AccordionItem eventKey="2">
                              <li>
                                <AccordionHeader>
                                  Basic smart contract capabilities
                                </AccordionHeader>
                                <AccordionBody>
                                  <p>
                                    Adding WASM-based smart contracts to Aleph
                                    Zero blockchain, together with deployment
                                    tutorials.
                                  </p>
                                </AccordionBody>
                              </li>
                            </AccordionItem>

                            <AccordionItem eventKey="3">
                              <li>
                                <AccordionHeader>
                                  Nomination pools
                                </AccordionHeader>

                                <AccordionBody>
                                  <p>
                                    Providing better nominator experience by
                                    allowing multiple users to jointly stake
                                    their tokens.
                                  </p>
                                </AccordionBody>
                              </li>
                            </AccordionItem>

                            <AccordionItem eventKey="4">
                              <li>
                                <AccordionHeader>
                                  Hardware wallets integration
                                </AccordionHeader>
                                <AccordionBody>
                                  <p>
                                    Allows to store AZERO on Ledger and Parity
                                    Signer hardware wallets.
                                  </p>
                                </AccordionBody>
                              </li>
                            </AccordionItem>
                          </ul>
                        </Accordion>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footer-bar-sec"></div>
                </div>
                <div>
                <div className="swiper-slide">
                  <div className="slider-card-sec">
                    <div className="top-left-card-sec"></div>
                    <div className="card-content">
                      <img src={logo} />
                      <div className="custom-accordion">
                        <Accordion>
                          <ul className="accordion-list">
                            <AccordionItem eventKey="0">
                              <li>
                                <AccordionHeader>
                                  Account explorer
                                </AccordionHeader>

                                <AccordionBody>
                                  <p>
                                    Allowing users to see advanced account
                                    statistics.
                                  </p>
                                </AccordionBody>
                              </li>
                            </AccordionItem>

                            <AccordionItem eventKey="1">
                              <li>
                                <AccordionHeader>
                                  Validator elections
                                </AccordionHeader>
                                {/* </div> */}
                                {/* {toggle? */}
                                <AccordionBody>
                                  {/* <div className="answer" id="2" > */}
                                  <p>
                                    Aleph Zero validators will be reassigned for
                                    each session, based on the sum of their own
                                    stake and funds staked on them by the
                                    community.
                                  </p>
                                  {/* </div> */}
                                </AccordionBody>
                              </li>
                            </AccordionItem>

                            <AccordionItem eventKey="2">
                              <li>
                                <AccordionHeader>
                                  Basic smart contract capabilities
                                </AccordionHeader>
                                <AccordionBody>
                                  <p>
                                    Adding WASM-based smart contracts to Aleph
                                    Zero blockchain, together with deployment
                                    tutorials.
                                  </p>
                                </AccordionBody>
                              </li>
                            </AccordionItem>

                            <AccordionItem eventKey="3">
                              <li>
                                <AccordionHeader>
                                  Nomination pools
                                </AccordionHeader>

                                <AccordionBody>
                                  <p>
                                    Providing better nominator experience by
                                    allowing multiple users to jointly stake
                                    their tokens.
                                  </p>
                                </AccordionBody>
                              </li>
                            </AccordionItem>

                            <AccordionItem eventKey="4">
                              <li>
                                <AccordionHeader>
                                  Hardware wallets integration
                                </AccordionHeader>
                                <AccordionBody>
                                  <p>
                                    Allows to store AZERO on Ledger and Parity
                                    Signer hardware wallets.
                                  </p>
                                </AccordionBody>
                              </li>
                            </AccordionItem>
                          </ul>
                        </Accordion>
                      </div>
                    </div>
                  </div>
                  <div className="footer-bar-sec"></div>
                </div>
                </div>
                <div>

                <div className="swiper-slide">
                  <div className="slider-card-sec">
                    <div className="top-left-card-sec"></div>
                    <div className="card-content">
                      <img src={logo} />
                      <div className="custom-accordion">
                        <Accordion>
                          <ul className="accordion-list">
                            <AccordionItem eventKey="0">
                              <li>
                                <AccordionHeader>
                                  Account explorer
                                </AccordionHeader>

                                <AccordionBody>
                                  <p>
                                    Allowing users to see advanced account
                                    statistics.
                                  </p>
                                </AccordionBody>
                              </li>
                            </AccordionItem>

                            <AccordionItem eventKey="1">
                              <li>
                                <AccordionHeader>
                                  Validator elections
                                </AccordionHeader>
                                {/* </div> */}
                                {/* {toggle? */}
                                <AccordionBody>
                                  {/* <div className="answer" id="2" > */}
                                  <p>
                                    Aleph Zero validators will be reassigned for
                                    each session, based on the sum of their own
                                    stake and funds staked on them by the
                                    community.
                                  </p>
                                  {/* </div> */}
                                </AccordionBody>
                              </li>
                            </AccordionItem>

                            <AccordionItem eventKey="2">
                              <li>
                                <AccordionHeader>
                                  Basic smart contract capabilities
                                </AccordionHeader>
                                <AccordionBody>
                                  <p>
                                    Adding WASM-based smart contracts to Aleph
                                    Zero blockchain, together with deployment
                                    tutorials.
                                  </p>
                                </AccordionBody>
                              </li>
                            </AccordionItem>

                            <AccordionItem eventKey="3">
                              <li>
                                <AccordionHeader>
                                  Nomination pools
                                </AccordionHeader>

                                <AccordionBody>
                                  <p>
                                    Providing better nominator experience by
                                    allowing multiple users to jointly stake
                                    their tokens.
                                  </p>
                                </AccordionBody>
                              </li>
                            </AccordionItem>

                            <AccordionItem eventKey="4">
                              <li>
                                <AccordionHeader>
                                  Hardware wallets integration
                                </AccordionHeader>
                                <AccordionBody>
                                  <p>
                                    Allows to store AZERO on Ledger and Parity
                                    Signer hardware wallets.
                                  </p>
                                </AccordionBody>
                              </li>
                            </AccordionItem>
                          </ul>
                        </Accordion>
                      </div>
                    </div>
                  </div>
                  <div className="footer-bar-sec"></div>
                </div>
                </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* <!-- Destination-section --> */}

        {/* <!-- // --> */}
        <div className="destination-sec">
          <div className="custom-wrapper">
            <div className="destination-content d-flex align-items-center justify-space-between">
              <h4>
                Destination: <strong>Web3</strong>. Check out our economics!
              </h4>
              <div className="single-line"></div>
              <div className="btn-green">
                <span>Through here!</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer_content">
        <Footer />
      </footer>
    </>
  );
};
export default Roadmap;