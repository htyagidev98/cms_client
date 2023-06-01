import React, {useState} from 'react'
import {BsArrowRight,BsBoxArrowUpRight,BsDot,BsFileArrowDown} from 'react-icons/bs'
import {BiLinkExternal} from 'react-icons/bi'
import { NavLink} from 'react-router-dom'
import './utilityeconomics.css'
import Header from '../../common/header/Header'
import Navbar from '../../common/navbar/Navbar'
import Footer from '../../common/footer/Footer'
import label from '../../assets/economics-labels-desktop.svg'
import token from '../../assets/token-utility-bg.svg'
import vidposter from '../../assets/token-utility-inflation-video-poster (2).jpeg'
import content from '../../assets/content.svg'
import coin from '../../assets/cointicker.svg'
import gate from '../../assets/gate.svg'
import huobi from '../../assets/huobi.svg'
import uphold from '../../assets/uphold.svg'
import kucoin from '../../assets/kucoin.svg'
import mexc from '../../assets/mexc.svg'
import bitrue from '../../assets/bitrue.svg'
import dev from '../../assets/azero-dev.svg'
import nova from '../../assets/nova-stake.svg'
import talisman from '../../assets/talisman.svg'
import subwallet from '../../assets/subwallet.svg'
import utility from '../../assets/utility-token-img.jpeg'


import CardVideo from '../dropdownCommunity/CardVideo'
import JoinSection from '../dropdownCommunity/JoinSection'
import UtilityFirstSec from './utilityandeconomics/UtilityFirstSec'
import UtilitySecondSec from './utilityandeconomics/UtilitySecondSec'
import UtilityThirdSec from './utilityandeconomics/UtilityThirdSec'
import UtilityFourthSec from './utilityandeconomics/UtilityFourthSec'
import UtilityFifthhSec from './utilityandeconomics/UtilityFifthSec'
import UtilitySixthSec from './utilityandeconomics/UtilitySixthSec'
import UtilitySeventhSec from './utilityandeconomics/UtilitySeventhSec'





const Utility = () => {
  const [isOpen, setOpen] = useState(false)

  return (
   <>
   
       <header className='header_content'>
        <Header/>
        <Navbar/>
       </header>


       <div className="mini-banner">
    <div className="custom-wrapper">
      <div className="banner-list">
       <UtilityFirstSec />
      </div>
    </div>
  </div>

  <div className="section-padding basic-matrics">
  <div className="custom-wrapper">
    <div className="row">
     <div className="col-md-6">
      <div className="azero-img">
       <img src={coin}/>
      </div>
     </div>
     <div className="col-md-6">
        <div className="intro-sec ">
           <UtilitySecondSec />
          </div>

          <div className="basic-matrics-text">
           <UtilityThirdSec />
          </div>
          
     </div>
    </div>  
  </div>
  </div>

  <div className="azero-utility">
   <div className="custom-wrapper">
     <div className="row">
        <div className="col-5">
            <div className="intro-sec ">
               <UtilityFourthSec />
              </div>
        </div>
     </div>

     <div className="azreo-scnd-row row pt-5">
    <div className="col-3">
    <div className="azero-list">
        <span className="number">1</span>
        <h5>Validator node staking</h5>
    </div>
    <div className="azero-list">
        <span className="number">2</span>
        <h5>Validator node staking</h5>
    </div>
    <div className="azero-list">
        <span className="number">3</span>
        <h5>Validator node staking</h5>
    </div>
    </div>
    <div className="col-3">
        <div className="azero-list">
            <span className="number">4</span>
            <h5>Validator node staking</h5>
        </div>
        <div className="azero-list">
            <span className="number">5</span>
            <h5>Validator node staking</h5>
        </div>
        <div className="azero-list">
            <span className="number">6</span>
            <h5>Validator node staking</h5>
        </div>
        </div>
     </div>

   </div>
  </div>

  <div className="market-section section-padding">
  <div className="custom-wrapper">
   <div className="row market-row">
  <div className="col-md-4">
<div className="tutorial-small-card">
  <h2 className="side-border my-0"><b>Markets</b></h2>
</div>
  </div>
  <div className="col-md-8">
   <div className="logo-right row">
     <div className="col-md-4 col-sm-6 img-icard">
    <img src={gate}/>
     </div>
     <div className="col-md-4 col-sm-6 img-icard">
      <img src={huobi}/>
       </div>
       <div className="col-md-4 col-sm-6 img-icard">
        <img src={uphold}/>
         </div>
         <div className="col-md-4 col-sm-6 img-icard">
          <img src={kucoin}/>
           </div>
           <div className="col-md-4 col-sm-6 img-icard">
            <img src={mexc}/>
             </div>
             <div className="col-md-4 col-sm-6 img-icard">
              <img src={bitrue}/>
               </div>
   </div>
  </div>
   </div>
   <div className="markets-links">
    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z">
      </path>
      <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z">
      </path>
    </svg>View on CoinGecko</a>
    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z">
      </path>
      <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z">
      </path>
    </svg>View on CoinMarketCap</a>
   </div>
   <div className="row market-row mt-5">
    <div className="col-md-4">
  <div className="tutorial-small-card">
    <h2 className="side-border my-0"><b>Wallets</b></h2>
  </div>
    </div>
    <div className="col-md-8">
     <div className="logo-right row">

           <div className="col-md-3 col-sm-6 img-icard pb-0">
            <img src={dev}/>
             </div>
             <div className="col-md-3 col-sm-6 img-icard pb-0">
              <img src={nova}/>
               </div>
               <div className="col-md-3 col-sm-6 img-icard pb-0">
                <img src={talisman}/>
                 </div>
                 <div className="col-md-3 col-sm-6 img-icard pb-0">
                <img src={subwallet}/>
                 </div>
     </div>
    </div>
     </div>
  </div>
  </div>

  <div className="alephzero-market section-padding pt-0">
    <div className="custom-wrapper">
     <div className="row aplh-zro-row">
    <div className="col-md-6">
      <img src={utility} className="img-fluid"/>
    </div>
    <div className="col-md-6">
     <div className="text-here">
      
      <div className="intro-sec">
        <UtilityFifthhSec />
      </div>
     </div>
    </div>
     </div>
     <div className="gradient-bg-shape">
     </div>
    </div>
  </div>

  <div className="alephzero-economics">
 <div className="custom-wrapper">
  <div className="row">
  <div className="intro-sec ps-md-4 col-md-5 ps-0">
   <UtilitySixthSec />
  </div>
</div>
<div className="table-row row">
 <div className="left-img-2">
  <img src={label} />
 </div>
 <div className="right-img-2">
  <img src={content}/>
 </div>
</div>
 </div>
  </div>

  <div className="inflation-mechanism">
<div className="custom-wrapper">
  <div className="row aplh-zro-row" >
    <div className="col-md-6" data-bs-toggle="modal" data-bs-target="#exampleModal">
     <div className="vdo-div">
      {/* <img src={} /> */}
      <CardVideo
         img={vidposter}
        
        onClick={()=> setOpen(true)}
                    />
      <button className="vdo-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play" viewBox="0 0 16 16">
        <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
      </svg></button>
     </div>
    </div>
    <div className="col-md-6">
      <div className="intro-sec">
        <UtilitySeventhSec />
      </div>
    </div>
     </div>
</div>
  </div>


<div className="modal fade vdo-modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">X</button>
      <div className="modal-body">
          <iframe width="100%" height="576" src="https://www.youtube.com/embed/y-FypMbm0BM" title="Aleph Zero Fundamentals: how does the inflation work?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</div>
<JoinSection buttonText="Get Blockovia"  text="Need Blockovia?" boldText="get your's here"/>

<footer className="footer_content">
  <Footer/>
</footer>

</>
  )
}
export default Utility