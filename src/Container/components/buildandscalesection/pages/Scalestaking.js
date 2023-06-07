import React from "react";
import {BsArrowRight,BsCameraVideo,BsFileArrowDown, BsPlay} from 'react-icons/bs'
import {BiLinkExternal} from 'react-icons/bi'
import layersImg from '../../../assets/icon-staking.svg';
import heroImg from '../../../assets/sunnyLogo.png';
import keepStaking from '../../../assets/keep-staking.svg';
import getStaking from '../../../assets/get-staking.svg';
import friendlyStaking from '../../../assets/friendly-staking.svg';
import stayStaking from '../../../assets/stay-staking.svg';
import validatorStaking from '../../../assets/validator-staking.svg';
import novaStake from '../../../assets/nova-stake.svg';
import talisman from '../../../assets/talisman.svg';

import subWallet from '../../../assets/subwallet.svg'; 
import Header from '../../../common/header/Header.js'
import Navbar from '../../../common/navbar/Navbar.js'
import './scalestaking.css'
import Footer from "../../../common/footer/Footer.js";
import JoinSection from "../../dropdownCommunity/JoinSection";
import StakingFirstSec from "./staking/StakingFirstSec";
import StakingSecondSec from "./staking/StakingSecondSec";
import StakingThirdSec from "./staking/StakingThirdSec";
import StakingFourthSec from "./staking/StakingFourthSec";
import StakingFifthSec from "./staking/StakingFifthSec";
const Scalestaking = () => {
return (
<>
<header className='header_content'>
<Header />
   < Navbar />
</header>
<div className="blue-bg-sec">
   <section className="staking_section section-padding-100">
      <div className="container">
         <div className="row align-items-center">
            <div className="col-md-6" data-aos="fade-right">
             <StakingFirstSec />
            </div>
            <div className="col-md-6 mx-auto">
               <div className="staking_image_section text-center" data-aos="fade-left">
                  <img src={heroImg} alt="hero_image_" className="img-fluid"/>
               </div>
               <div className="span_line">
               </div>
            </div>
         </div>
      </div>
   </section>
   <div className="body" data-spy="scroll" data-target="#myScrollspy" data-offset="15">
      <br/>
      <div className="container mini1200container">
         <div className="row">
            <nav className="col-sm-4" id="myScrollspy">
               <ul className="scroll_spy custom-scroll-spy"  data-aos="fade-up" style={{position:"sticky" }}>
                  {/* 
                  <div className="row">
                     */}
                     <li>
                        <a href="#section1">
                           <BsArrowRight/>
                           <span className="ms-2"> What is staking</span>
                        </a>
                     </li>
                     <li>
                        <a href="#section2">
                           <BsArrowRight/>
                           <span className="ms-2"> Being a validator</span>
                        </a>
                     </li>
                     {/* 
                  </div>
                  */}
                  <div className="row">
                     <li>
                        <a href="#section3">
                           <BsArrowRight/>
                           <span className="ms-2"> Being a nominator</span>
                        </a>
                     </li>
                     <li>
                        <a href="#section4">
                           <BsArrowRight/>
                           <span className="ms-2"> Staking details</span>
                        </a>
                     </li>
                  </div>
                  {/* 
                  <li className="dropdown">
                     <a className="dropdown-toggle" data-toggle="dropdown" href="#">Section 4 <span className="caret"></span></a>
                     <ul className="dropdown-menu">
                        <li><a href="#section41">Section 4-1</a></li>
                        <li><a href="#section42">Section 4-2</a></li>
                     </ul>
                  </li>
                  */}
               </ul>
            </nav>
            <div className="col-sm-8">
               <div id="section1" data-aos="fade-right">
                  <div className="row">
                     <div className="col-lg-3 col-md-4 col-4">
                        <div className="left-img-scrollspy">
                           <img src={layersImg} alt="LayersImg" className="img-fluid"/>
                        </div>
                     </div>
                     <div className="col-lg-9 col-md-8 col-8" data-aos="fade-up">
                        <div className="scrollspy-info">
                           <StakingSecondSec />
                           <button className="staking_first_section_button green-transparent" >
                              <span className="scroll_down_img"> </span> 
                              <BsPlay/>
                              Watch video 
                           </button>
                        </div>
                     </div>
                  </div>
                  <div className="row mt-5">
                     <StakingThirdSec  />                     
                   </div>
                 
               </div>

               <div class="b-top-line pt-2 pb-2 mt-5"></div>

               <div id="section2">

               <div className="row">
                  <div className="col-lg-2 col-md-2 col-2">
                    <div className="icon-area">
                        <img src={validatorStaking} alt="Zero secure" className="img-fluid"/>
                    </div>
                  </div>
                  <div className="col-lg-10 col-md-10 col-10"  data-aos="fade-left">
                    <StakingFourthSec />
                  </div>
              </div>

              <div className="stake-section-value mt-4">
                  <div className="row align-items-center">
                    <div className="col-lg-8 col-md-8 col-12"  data-aos="fade-up">
                      <div className="stake-list">
                        <ul>
                          <li>
                            <label>Minimum stake</label>
                            <label className="bottom-line"></label>
                            <label className="data-vale">25,000 AZERO</label>
                          </li>
                          <li>
                            <label>Hardware required</label>
                            <div className="bottom-line"></div>
                            <label className="data-vale">YES</label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="learn-btn text-end">
                          <button className="green-btn">Learn how to</button>
                        </div>
                    </div>
                  </div>
              </div>
              
               </div>
               <div id="section3">
               <div className="row">
                  <div className="col-lg-2 col-md-2 col-2">
                    <div className="icon-area">
                        <img src={validatorStaking} alt="Zero secure" className="img-fluid"/>
                    </div>
                  </div>
                  <div className="col-lg-10 col-md-10 col-10"  data-aos="fade-left">
                    <StakingFifthSec />
                  </div>
              </div>

              <div className="stake-section-value mt-4" id="section4">
                  <div className="row align-items-center">
                    <div className="col-lg-8 col-md-8 col-12"  data-aos="fade-up">
                      <div className="stake-list">
                        <ul>
                          <li>
                            <label>Minimum stake</label>
                            <label className="bottom-line"></label>
                            <label className="data-vale">25,000 AZERO</label>
                          </li>
                          <li>
                            <label>Hardware required</label>
                            <div className="bottom-line"></div>
                            <label className="data-vale">YES</label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="learn-btn text-end">
                          <button className="green-btn">Learn how to</button>
                        </div>
                    </div>
                  </div>
              </div>

                  <div className="details stake-card-section section-padding" data-aos="fade-up">
                     <h6 className="details text-center" data-aos="zoom-in" >You can also stake your AZERO via:</h6>
                     <div className="row">
                        <div className="col-md-6 hover_common">
                           {/* 
                           <NavLink to='#'>
                              */}
                              <div className="stake-card">
                                 <div className=" d-flex align-items-center">
                                    <div className="top_data">
                                      <img src={novaStake} alt="Stake-img" className="img-fluid"/>
                                    </div>
                                 

                                 <div class="poisition-btn">
                                  <button class="green-btn-efect">
                                 <span className="scroll_down_img"> </span> 
                                    <BiLinkExternal/> Go</button></div>
                                 </div>
                               
                              </div>
                              {/* 
                           </NavLink>
                           */}
                        </div>
                        <div className="col-md-6 hover_common">
                           {/* 
                           <NavLink to='#'>
                              */}
                              <div className="stake-card">
                                 <div className=" d-flex align-items-center">
                                    <div className="top_data">
                                      <img src={subWallet} alt="Stake-img" className="img-fluid"/>
                                    </div>
                                 

                                 <div class="poisition-btn">
                                  <button class="green-btn-efect">
                                 <span className="scroll_down_img"> </span> 
                                    <BiLinkExternal/> Go</button></div>
                                 </div>
                               
                              </div>
                              {/* 
                           </NavLink>
                           */}
                        </div>

                        <div className="col-md-6  hover_common">
                           {/* 
                           <NavLink to='#'>
                              */}
                              <div className="stake-card">
                                 <div className=" d-flex align-items-center">
                                    <div className="top_data">
                                      <img src={talisman} alt="Stake-img" className="img-fluid"/>
                                    </div>
                                 

                                 <div class="poisition-btn">
                                  <button class="green-btn-efect">
                                 <span className="scroll_down_img"> </span> 
                                    <BiLinkExternal/> Go</button></div>
                                 </div>
                               
                              </div>
                              {/* 
                           </NavLink>
                           */}
                        </div>
                     </div>
                  </div>

                  <div className="row align-items-center">
                    <div className="col-lg-12 col-md-12 col-12" data-aos="fade-up">
                      <div className="stake-list large-label">
                        <ul>
                          <li>
                            <label>Average staking rewards</label>
                            <label className="bottom-line"></label>
                            <label className="data-vale">11.37%</label>
                          </li>
                          <li>
                            <label>Staking ratio</label>
                            <div className="bottom-line"></div>
                            <label className="data-vale">71.52%</label>
                          </li>


                          <li className="mt-5">
                            <label><span className="green_dot me-2"></span>Validators stake</label>
                            <label className="bottom-line"></label>
                            <label className="data-vale">31,685,540</label>
                          </li>
                          <li>
                            <label> <span className="white_dot me-2"></span> Nominators stake</label>
                            <div className="bottom-line"></div>
                            <label className="data-vale">203,369,744</label>
                          </li>

                          <li>
                            <label>Total issuance</label>
                            <div className="bottom-line"></div>
                            <label className="data-vale">332,111,276</label>
                          </li>

                          <li className="mt-5">
                            <label>Total validators</label>
                            <label className="bottom-line"></label>
                            <label className="data-vale">124</label>
                          </li>
                          <li>
                            <label>Total nominators</label>
                            <div className="bottom-line"></div>
                            <label className="data-vale">15,852</label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>

<JoinSection buttonText="Start staking"  text="Are you" boldText="redy to join?"/>

<footer className="footer_content">
   <Footer> </Footer>
</footer>
{/* </div> */}
</>
);
}
export default Scalestaking