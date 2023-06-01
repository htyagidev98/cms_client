import React from 'react'
import {BsArrowRight,BsBoxArrowUpRight,BsDot,BsFileArrowDown, BsFillLightbulbFill, BsFlag, BsLightbulb} from 'react-icons/bs'
import {BiLinkExternal} from 'react-icons/bi'
import { BsPlay } from 'react-icons/bs'
import { NavLink} from 'react-router-dom'
import './whyblockovia.css'
import Header from '../../common/header/Header'
import Navbar from '../../common/navbar/Navbar'
import Footer from '../../common/footer/Footer'
import { TbBulb } from 'react-icons/tb'
import logo from '../../assets/logo-img.png';
import whyScaliblity from '../../assets/why-scalibilty.svg';
import whySecurity from '../../assets/why-security.svg';
import whyPrivacy from '../../assets/why-privacy.svg';
import JoinSection from '../dropdownCommunity/JoinSection'
import BlocoviaFirstSec from './whyblocovia/BlocoviaFirstSec'
import BlocoviaSecondSec from './whyblocovia/BlocoviaSecondSec'
import BlocoviaThirdSec from './whyblocovia/BlocoviaThirdSec'
import BlocoviaFourthSec from './whyblocovia/BlocoviaFourthSec'
import BlocoviaFifthSec from './whyblocovia/BlocoviaFifthSec'
const Whyblockovia = () => {



return (
<>
<header className='header_content'>
   <Header></Header>
   <Navbar></Navbar>
</header>
<div className='blue-bg-sec'>
   <section className="app_wrapper container-fluid">
      <div className='whyblackovia section-padding'>
         <div className='container'>
            <div className="row"  data-aos="fade-up">
              <BlocoviaFirstSec />
            </div>
         </div>
      </div>
   </section>
   <section className='env_wrapper custom-wrapper pt-5 pb-5'>
      <div className="row align-items-center">
         <div className="col-md-3">
            <div className="logo-img text-center" data-aos="zoom-in-up">
               <img src={logo} alt='main-logo' className='img-fluid'/>
            </div>
         </div>
         <div className="col-md-9">
            <div className="env_img_content" data-aos="fade-left">
               <span className="data_content ps-5">
                  <BlocoviaSecondSec />
               </span>
            </div>
         </div>
      </div>
   </section>
   <section className="app_wrapper container-fluid section-padding">
      <div className="body scrollspydata" data-spy="scroll" data-target="#myScrollspy">
         <br/>
         <div className="container">
            <div className="row">
               <nav className="col-sm-3" id="myScrollspy">
                  <div className="scroll_spy"  style={{position:"sticky" }}>
                     {/* 
                     <div className="row"> */}
                        <a class="list-group-item list-group-item-action" href="#list-item-1"><span className='green-icon me-3'><i class="fa-solid fa-arrow-right"></i></span>Scalability</a>
                        <a class="list-group-item list-group-item-action" href="#list-item-2"><span className='green-icon me-3'><i class="fa-solid fa-arrow-right"></i></span>Security</a>
                        <a class="list-group-item list-group-item-action" href="#list-item-3"><span className='green-icon me-3'><i class="fa-solid fa-arrow-right"></i></span> Privacy</a>
                        {/* <a class="list-group-item list-group-item-action" href="#list-item-4">Item 4</a> */}
                     </div>
                     {/* 
                  </div>
                  */}
               </nav>
               <div className="col-sm-9">
                  <div  id="list-item-1">
                     <div className='mini-heading-with-icon d-flex justify-content-between align-items-center'>
                        <h5  data-aos="fade-right">
                           <span className='common_line'></span>
                           <strong className='ms-2 text-white'>Scalability </strong>
                        </h5>
                        <div className='mini-icon' data-aos="zoom-in" >
                           <img src={whyScaliblity} alt='Scalability' className='img-fluid'/>
                        </div>
                     </div>
                     <div data-aos="fade-up">
                        <BlocoviaThirdSec />                  
                     </div>
                  </div>
                  <div class="b-top-line pt-2 pb-2 mt-5"></div>

                  <div id="list-item-2">
                     <div className='mini-heading-with-icon d-flex justify-content-between align-items-center'>
                        <h5 data-aos="fade-right">
                           <span className='common_line'></span>
                           <strong className='ms-2 text-white'>Security </strong>
                        </h5>
                        <div className='mini-icon' data-aos="zoom-in">
                           <img src={whySecurity} alt='Scalability' className='img-fluid'/>
                        </div>
                     </div>

                     <div data-aos="fade-up">
                      <BlocoviaFourthSec /> 
                     </div>
                  </div>

                  <div class="b-top-line pt-2 pb-2 mt-5"></div>
                  <div id="list-item-3">
                   <div className='mini-heading-with-icon d-flex justify-content-between align-items-center'>
                        <h5 data-aos="fade-right">
                           <span className='common_line'></span>
                           <strong className='ms-2 text-white'>Privacy </strong>
                        </h5>
                        <div className='mini-icon' data-aos="zoom-in">
                           <img src={whyPrivacy} alt='Scalability' className='img-fluid'/>
                        </div>
                     </div>

                     <div data-aos="fade-up" className='mb-5'>
                    
                    <BlocoviaFifthSec />
                     
                  </div>
               </div>
               </div>
            </div>
         </div>
      </div>
      <JoinSection buttonText="Build now!" text="Build" boldText="on Blockovia" />

      <footer className="footer_content">
      <Footer />
      </footer>
   </section>
</div>
</>
)
}
export default Whyblockovia