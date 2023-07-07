import React, { useEffect, useState } from 'react'
import { BsArrowRight, BsBoxArrowUpRight, BsDot, BsFileArrowDown } from 'react-icons/bs'
import './fundingprogram.css'
import Header from '../../common/header/Header'
import Navbar from '../../common/navbar/Navbar'
import Footer from '../../common/footer/Footer'
import ecoSystem from '../../assets/ecosystem-video-cover-funding.jpeg';
import fundingAws from '../../assets/funding-aws.svg';
import FundingFirstSec from './fundingprogram/FundingFirstSec'
import FundingSecondSec from './fundingprogram/FundingSecondSec'
import FundingThirdSec from './fundingprogram/FundingThirdSec'
import FundingFourthSec from './fundingprogram/FundingFourthSec'
import FundingFifthSec from './fundingprogram/FundingFifthSec'
import FundingSixthSec from './fundingprogram/FundingSixthSec'
import FundingEightSec from './fundingprogram/FundingEightSec'
import FundingSeventhSec from './fundingprogram/FundingSeventhSec'
import FundingNinthSec from './fundingprogram/FundingNinthSec'
import FundingTenthSec from './fundingprogram/FundingTenthSec'
import FundingEleventhSec from './fundingprogram/FundingEleventhSec'
import FundingTwelthSec from './fundingprogram/FundingTwelthSec'
import FundingThirteenthSec from './fundingprogram/FundingThirteenthSec'
import FundingFourteenthSec from './fundingprogram/FundingFourteenthSec'
import AddFundingCardModal from './fundingprogram/fundingadddata/AddFundingCardModal'
import FundingFifteenthSec from './fundingprogram/FundingFifteenthSec'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { BASE_URL } from '../../../utility/Helper'
const Fundingprogram = () => {
   const { contactData } = useSelector((state) => state.contact);
   const [AddCardModal, setAddCardModal] = useState(false);
   const [updateUi, setUpdateUi] = useState(false);
   const [cardData, setCardData] = useState([]);

   const closeModal = () => {
      setAddCardModal(false);
   }

   const showModal = () => {
      setAddCardModal(true)
   }


   const fetchHeroData = async () => {
      try {
         const res = await axios.get(`${BASE_URL}/build/supporter/card/get`)
         setCardData(res.data.responseData);


      } catch (error) {
           if(error.response.status === 404){
            setCardData([])
         console.log(error);

         }
      }

   }




   useEffect(() => {
      fetchHeroData();
   }, [updateUi])




   return (
      <>
         <header className='header_content'>
            <Header />
            <Navbar />
         </header>
         <div className='blue-bg-sec'>
            <section className="staking_section section-padding-100">
               <div className="container">
                  <div className="row align-items-center">
                     <div className="col-md-6" data-aos="fade-right">
                        <div className="staking_data_section">
                           <FundingFirstSec />
                           <button className="scroll_down_img green-btn mt-2"> Apply to EFP </button>
                        </div>
                     </div>
                     <div className="col-md-6 mx-auto">
                        <div className="staking_image_section text-center" data-aos="fade-left">
                           <img src={ecoSystem} alt="hero_image_" className="img-fluid" />
                        </div>
                        <div className="span_line">
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <div className="body" data-spy="scroll" data-target="#myScrollspy" data-offset="15">
               <br />
               <div className="container mini1200container">
                  <div className="row">
                     <nav className="col-sm-4" id="myScrollspy">
                        <ul className="scroll_spy custom-scroll-spy" style={{ position: "sticky" }}>
                           {/* 
                  <div className="row">
                     */}
                           <li>
                              <a href="#section1">
                                 <BsArrowRight />
                                 <span className="ms-2">The purpose</span>
                              </a>
                           </li>
                           <li>
                              <a href="#section2">
                                 <BsArrowRight />
                                 <span className="ms-2"> Program resources</span>
                              </a>
                           </li>
                           {/* 
                  </div>
                  */}
                           <div className="row">
                              <li>
                                 <a href="#section3">
                                    <BsArrowRight />
                                    <span className="ms-2"> Available grants</span>
                                 </a>
                              </li>
                              <li>
                                 <a href="#section4">
                                    <BsArrowRight />
                                    <span className="ms-2"> Consideration criteria</span>
                                 </a>
                              </li>
                              <li>
                                 <a href="#section5">
                                    <BsArrowRight />
                                    <span className="ms-2"> Request for proposals</span>
                                 </a>
                              </li>
                              <li>
                                 <a href="#section6">
                                    <BsArrowRight />
                                    <span className="ms-2"> Evaluation process</span>
                                 </a>
                              </li>
                              <li>
                                 <a href="#section7">
                                    <BsArrowRight />
                                    <span className="ms-2"> EFP supporters</span>
                                 </a>
                              </li>
                              <button className="scroll_down_img transparent-btn mt-4">Apply to EFP</button>
                           </div>
                        </ul>
                     </nav>
                     <div className="col-sm-8">
                        <div id="section1">
                           <div className="scrollspy-info">
                              <FundingSecondSec />
                           </div>
                           <div className='funding-program-card mt-5'>
                              <h5 className='ecosystem-heading'>Ecosystem Funding Program</h5>
                              <div className='row align-items-center mx-auto justify-content-center'>
                                 <FundingThirdSec />

                              </div>
                           </div>
                        </div>
                        <div class="b-top-line pt-2 pb-2 mt-5"></div>
                        <div id="section2">
                           <div className="scrollspy-info">
                              <FundingFourthSec />
                           </div>
                           <div className='epp-cards mt-5'>
                              <div className='row'>
                                 <FundingFifthSec />
                              </div>
                           </div>
                        </div>
                        <div class="b-top-line pt-2 pb-2 mt-5"></div>
                        <div id="section3">
                           <FundingSixthSec />
                           <div className='row mt-5'>
                              <FundingSeventhSec />
                           </div>
                        </div>
                        <div class="b-top-line pt-2 pb-2 mt-5"></div>
                        <div id="section4">
                           <div className="scrollspy-info">
                              <FundingEightSec />
                           </div>
                           <div className='row mt-5'>
                              <FundingNinthSec />

                           </div>
                        </div>
                        <div class="b-top-line pt-2 pb-2 mt-5"></div>
                        <div id="section5" className='section-padding'>
                           <div className="scrollspy-info">
                              <FundingTenthSec />
                           </div>
                           <div className="small_cards_section mt-5">
                              <div className="row">
                                 <FundingEleventhSec />
                              </div>
                           </div>
                        </div>
                        <div class="b-top-line pt-2 pb-2 mt-5"></div>
                        <div id="section6" className='section-padding'>
                           <div className="scrollspy-info">
                              <FundingTwelthSec />
                           </div>

                           <div className='application-border-cards mt-5'>
                              <div className='row'>
                                 <FundingThirteenthSec />
                              </div>
                           </div>
                        </div>

                        <div class="b-top-line pt-2 pb-2 mt-5"></div>

                        <div id="section7" className='section-padding'>
                           <div className="scrollspy-info">
                              <FundingFourteenthSec />
                           </div>

                           {
                                 contactData.token && <div className='text-end mb-2'><button onClick={() => showModal()} className='btn btn-primary btn-sm'>Add-Card</button> </div>
                              }

                           <div className='logo-infocards'>
                             

                              <FundingFifteenthSec cardData={cardData} setUpdateUi={setUpdateUi} />

                              {
                                 AddCardModal && <AddFundingCardModal show={AddCardModal} setUpdateUi={setUpdateUi} hide={closeModal} />
                              }

                           </div>


                        </div>
                     </div>




                  </div>
               </div>
            </div>
         </div>

         <footer className="footer_content">
            <Footer>
            </Footer>
         </footer>
      </>
   );
}
export default Fundingprogram