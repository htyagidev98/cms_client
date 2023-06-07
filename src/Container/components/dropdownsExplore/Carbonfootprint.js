import React from 'react'
import { BsArrowRight, BsBoxArrowUpRight, BsDot, BsFileArrowDown, BsLink } from 'react-icons/bs'
import { BiLinkExternal } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import './carbonfootprint.css'
import Header from '../../common/header/Header'
import Navbar from '../../common/navbar/Navbar'
import Footer from '../../common/footer/Footer'
import { TbCertificate } from 'react-icons/tb'
import carbonGood from '../../assets/carbon-good.png';
import carbonCryptoClimate from '../../assets/carbon-crypto-climate.svg';
import carbonChart from '../../assets/carbon-chart.png';
import carbonsmallChart from '../../assets/carbon-small-chart.png';
import carbonsideImg from '../../assets/carbon-side-img.jpg';
import native from '../../assets/native.svg';
import { Accordion } from 'react-bootstrap'
import AccordionItem from 'react-bootstrap/esm/AccordionItem'
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader'
import AccordionBody from 'react-bootstrap/esm/AccordionBody'
import JoinSection from '../dropdownCommunity/JoinSection'
import FootprintFirstSec from './carbonfootprint/FootprintFirstSec'
import FootprintSecondSec from './carbonfootprint/FootprintSecondSec'
import FootprintThirdSec from './carbonfootprint/FootprintThirdSec'
import FootprintFourthSec from './carbonfootprint/FootprintFourthSec'
import FootprintFifthSec from './carbonfootprint/FootprintFifthSec'
import FootprintSixthSec from './carbonfootprint/FootprintSixthSec'
import FootprintSeventhSec from './carbonfootprint/FootprintSeventhSec'
import FootprintEighthSec from './carbonfootprint/FootprintEighthSec'
import FootprintNinthSec from './carbonfootprint/FootprintNinthSec'

const Carbonfootprint = () => {
   return (
      <>
         <header className='header_content'>
            <Header />
            <Navbar />
         </header>
         <div className="mini-banner">
            <div className="custom-wrapper">
               <div className="banner-list">
                  <FootprintFirstSec />
               </div>
            </div>
         </div>
         <div className="slider-section section-padding">
            <div className='container'>
               <div className="row">
                  <div className="col-md-6 col-12">
                     <div className='app_right_data' data-aos='fade-right'>
                        <FootprintSecondSec />
                     </div>
                  </div>
                  <div className='col-md-6 col-12'>
                     <div className='good-img text-center' data-aos='fade-left'>
                        <img src={carbonGood} alt='Carbon Good' className='img-fluid' />
                     </div>
                  </div>
               </div>
            </div>
         </div>


         <div className='container'>
            <div className="border-padding" data-aos='fade-up'>
               <div className="row align-items-center">
                  <div className='col-md-6 col-12'>
                     <div className='left-img-sec text-center'>
                        <img src={carbonCryptoClimate} alt='Carbon' className='img-fluid' />
                     </div>
                  </div>
                  <div className="col-md-6 col-12 hover_common">

                     <FootprintThirdSec />

                     <div className="build_scale_data_button">
                        <span >Learn more </span>
                        <span>
                           <BiLinkExternal />
                        </span>
                     </div>

                  </div>
               </div>
            </div>
         </div>


         <div className='container'>
            <div className="row">
               <div className="col-md-4">
                  <div className='app_right_data ' data-aos="fade-right">
                     <span className='common_line'> </span>

                     <FootprintFourthSec />
                  </div>
               </div>

               <div className='col-lg-8 col-md-8 col-12'>
                  <div className='carbons-cards' data-aos="zoom-in">
                     <div className='row'>
                        <FootprintFifthSec />

                     </div>
                  </div>
               </div>
            </div>


            <div className='chart-section section-padding'>
               <div className='row'>
                  <div className='col-lg-3 col-md-3 col-12'>
                     <div className='current-card border-card' data-aos="fade-right">
                        <span className='Green-dot'></span>
                        <FootprintSixthSec />
                     </div>
                  </div>

                  <div className='col-lg-9 col-md-9 col-12'>
                     <div className='chart-map' data-aos="fade-left">
                        <img src={carbonChart} alt="chart-section" className='img-fluid' />
                     </div>
                  </div>
               </div>
            </div>


            <div className='arrow-bg-section section-padding'>
               <div className='simple-text'>
                  <p>...so in the last month, we've produced as much CO2 as:</p>
               </div>
            </div>

            <div className='four-cards'>
               <div className='row align-items-center'>
                  <FootprintSeventhSec />
               </div>
            </div>
         </div>


         <div className='section-padding dark-blue-bg'>
            <div className='container'>
               <div className="row">
                  <div className="col-md-8 col-12">
                     <div className='app_right_data ' data-aos="fade-right">
                      <FootprintEighthSec />
                     </div>
                  </div>

                  <div className='col-md-4 col-12'>
                     <div className='chart-map text-end'>
                        <img src={carbonsmallChart} alt="chart-section" className='img-fluid' />
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="section-padding">
            <div className='container'>
               <div className='border-card' data-aos="fade-up">
                  <div className="row align-items-center">
                     <div className="col-md-6">
                        <div className='carbon-img'>
                           <img src={carbonsideImg} alt="carbon-img" className='img-fluid' />
                        </div>
                     </div>
                     <div className="col-md-6">
                           <div className="">
                             <FootprintNinthSec />
                              <div className="wallet_data_button mt-3 text-end mr-3" style={{ display: "inline-flex", margin: '10px', width: '100%' }}>
                                 <span>
                                    <BsBoxArrowUpRight />
                                 </span>
                                 <span className='ms-2 me-4'>Learn more </span>
                                 <span>
                                    <TbCertificate />
                                 </span>
                                 <span className='ms-2'>See certificate</span>
                              </div>
                           </div>
                     </div>
                  </div>
               </div>
               <Accordion>
                  <div className="more-option text-center py-3" >
                     <AccordionItem eventKey="0">
                        <AccordionHeader><a href="javascript:void(0);">Show Previous offset projects</a></AccordionHeader>





                        <AccordionBody>

                           <div className='border-card' data-aos="fade-up">
                              <div className="row align-items-center">
                                 <div className="col-md-6">
                                    <div className='carbon-img'>
                                       <img src={native} alt="carbon-img" className='img-fluid' />
                                    </div>
                                 </div>
                                 <div className="col-md-6  hover_common">
                                    <NavLink to='#'>
                                       <div className="wallet_data_sec">
                                          <div className="hover_effect">
                                             <div className="top_data">

                                                <div className='d-flex'>
                                                   <span className='common_line'> </span>
                                                   <h3 className='ms-2'>
                                                      <strong className='top_data_heading text-white'> Northern Kenya Rangelands </strong>
                                                      <span className='ms-2 text-white'> project</span></h3>
                                                </div>

                                             </div>
                                             <div className='mt-5' style={{ display: "flex" }}>
                                                <p className="wallet_para">
                                                   14 tones of CO2                     </p>
                                                <p className="wallet_para">

                                                   H1 of 2022                     </p>
                                             </div>
                                             <p className="wallet_para">
                                                Aleph Zero'sNative is leading an effort in soil improvement over 1.9 million hectares of savannah grassland, resulting in additional carbon storage. Besides being ambitious in addressing climate change, the project supports local communities and biodiversity conservation by helping combat drought and protecting the endemic endangered species.

                                                As a Public Benefit Corporation that has been around for over 20 years, Native is a certified B-Corp working with Reverb, Lush, Everlane, Allbirds, Northwest Permanente, PartnerRe, and others. next step in contributing to a greener world is doubling down on our cooperation with Native by supporting the Waste to Fuel program. This initiative is designed to reduce methane emissions on subsistence farms in Uganda with biodigesters. This technology allows farmers to harness clean biogas for cooking, heating and fertilizing their crops. Aleph Zero is proud to pledge 75 tonnes of carbon offsets to the program, helping to advance climate action and address our 2022 H2 energy usage.
                                             </p>
                                          </div>
                                          <div className="wallet_data_button mt-3 text-end mr-3" style={{ display: "inline-flex", margin: '10px', width: '100%' }}>
                                             <span>
                                                <BsBoxArrowUpRight />
                                             </span>
                                             <span className='ms-2 me-4'>Learn more </span>
                                             <span>
                                                <TbCertificate />
                                             </span>
                                             <span className='ms-2'>See certificate</span>
                                          </div>
                                       </div>
                                    </NavLink>
                                 </div>
                              </div>
                           </div>
                        </AccordionBody>

                     </AccordionItem>
                  </div>
               </Accordion>
            </div>
         </div>


         <JoinSection buttonText="Learn more!" text="Build with us " boldText="a greener web3 world" />



         <footer className='footer_content'>
            <Footer />
         </footer>
      </>
   )
}
export default Carbonfootprint