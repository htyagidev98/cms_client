import React from 'react'
import {BsArrowRight,BsBoxArrowUpRight,BsFileArrowDown} from 'react-icons/bs'
import { NavLink} from 'react-router-dom'
import './applicationsdriving.css'
// import '../../../common/header/header.css'
import Header from '../../../common/header/Header.js'
import Navbar from '../../../common/navbar/Navbar.js'

import sharedrevenue from '../../../assets/shared-revenue.svg';
import wallet from '../../../assets/wallet.svg';
import supplychain from '../../../assets/supply-chain.svg';
import signatory from '../../../assets/notary-signatory.svg';
import dns from '../../../assets/dns.svg';
import asset from '../../../assets/asset-digitization.svg';
import gameasset from '../../../assets/games.svg';
import transparent from '../../../assets/public-document.svg';
import database from '../../../assets/database.svg';
import tax from '../../../assets/tax.svg';
import iot from '../../../assets/iot.svg';
import Footer from '../../../common/footer/Footer'
import UseCasesFirstSec from './usecases/UseCasesFirstSec'
import UseCasesSecondSec from './usecases/UseCasesSecondSec'
const Applicationsdriving= () => {
return (
<>
<header className='header_content'>
   <Header></Header>
   <Navbar></Navbar>
</header>
<div className="mini-banner">
   <div className="custom-wrapper">
      <div className="banner-list">
        <UseCasesFirstSec />
      </div>
   </div>
</div>
<div className="slider-section use-cases-page">
   <div className="container mini1200container">
      <section className="wallet_wrapper pt-5 pb-5">
         <div className="row">
            <UseCasesSecondSec />
            
         </div>

         <div className="destination-sec">
            <div className="custom-wrapper">
               <div className="destination-content d-flex align-items-center justify-space-between">
                  <h4><strong>the projects!</strong> Discover</h4>
                  <div className="single-line"></div>
                  <div className="btn-green">
                     <span>Go to ecosystem</span>
                  </div>
               </div>
            </div>
         </div>
      
    
      </section>
   </div>
</div>
<footer className='footer_content'>
   <Footer></Footer>
</footer>
</>
)
}
export default Applicationsdriving