import React from 'react'
import {BsArrowRight,BsBoxArrowUpRight,BsDiscord,BsFileArrowDown, BsGithub} from 'react-icons/bs'
import { NavLink} from 'react-router-dom'
import './builddev.css'
// import '../../../common/header/header.css'
import Header from '../../../common/header/Header.js'
import Navbar from '../../../common/navbar/Navbar.js'
import blockovia from '../../../assets/into-aleph.svg'
import intro from '../../../assets/intro-one.svg'
import intro2 from '../../../assets/intro-two.svg'
import intro3 from '../../../assets/intro-three.svg'
import intro4 from '../../../assets/intro-four.svg'
import eco from '../../../assets/eco-circle.png'
import Footer from '../../../common/footer/Footer'
import BuildDevFirstSec from './builddev/BuildDevFirstSec'
import BuildDevSecondSec from './builddev/BuildDevSecondSec'
import BuildDevThirdSec from './builddev/BuildDevThirdSec'
import BuildDevFourthSec from './builddev/BuildDevFourthSec'
import BuildDevFifthSec from './builddev/BuildDevFifthSec'
import BuildDevSixthSec from './builddev/BuildDevSixthSec'
import BuildDevSeventhSec from './builddev/BuildDevSeventhSec'
import BuildDevEighthSec from './builddev/BuildDevEighthSec'
import BuildDevNinthSec from './builddev/BuildDevNinthSec'
import BuildDevTenthSec from './builddev/BuildDevTenthSec'
import BuildDevEleventhSec from './builddev/BuildDevEleventhSec'
import BuildDevTwelthSec from './builddev/BuildDevTwelthSec'
import BuildDevThirteenthSec from './builddev/BuildDevThirteenthSec'
import BuildDevFourteenthSec from './builddev/BuildDevFourteenthSec'
import BuildDevFifteenthSec from './builddev/BuildDevFifteenthSec'
const Builddev = () => {
  return (
   <>
   <header className='header_content'>
         <Header />
         < Navbar />
       </header>
       <div className="mini-banner">
         <div className="custom-wrapper">
            <div className="banner-list">
             <BuildDevFirstSec />
            </div>
         </div>
      </div>

      {/* <!--  --> */}

      <div className="custom-bg intro-section section-padding">
      	 <div className="custom-wrapper">
      	<div className="row">
		      		<div className="col-lg-5 col-md-6 col-12">
		      			<div className="intro-sec" data-aos="zoom-in-up">
		      			 <BuildDevSecondSec />
		      			</div>

		      			<div className="intro-img">
		      			
                        <img src={blockovia} alt="walletImg" className='img-fluid' />
		      			</div>
		      		</div>
	      		<div className="col-lg-7 col-md-6 col-12">
      				<div className="right-section-intro" data-aos="zoom-in-up">
      					<div className="row">
                          <BuildDevThirdSec />      						
      					</div>
      				</div>
	      		</div>
      	</div>
       </div>
      </div>
      {/* <!--  --> */}


      <div className="custom-bg tutorial-section section-padding">
      		<div className="custom-wrapper">
                 <BuildDevSixthSec />      			
      			<div className="tutorial-card" data-aos="zoom-in-up">
      			 	<div className="row">
  			 			<div className="col-lg-4 col-md-4 col-12">
  			 				<div className="tutorial-small-card">
  			 					{/* <h2 className="side-border mt-2">Tutorials</h2>	 */}
								<BuildDevSeventhSec />
  			 				</div>
  			 			</div>
                      <BuildDevEighthSec />  			 			
      			 	</div>
      			</div>	
      			{/* <!--  --> */}

      			<div className="tutorial-card">
      			 	<div className="row align-items-end">
  			 			<BuildDevFourthSec />

  			 			<div className="col-lg-6 col-md-6 col-12">
  			 				<BuildDevFifthSec />

  			 			  
  			 			</div>

      			 	</div>
      			</div>	

      			{/* <!-- Tools sec --> */}
      				<div className="tutorial-card">
      			 	<div className="row">
  			 			<div className="col-lg-4 col-md-4 col-12">
  			 				<div className="tutorial-small-card" data-aos="zoom-in-up">
                               <BuildDevNinthSec />
  			 				</div>
  			 			</div>
  	                <BuildDevTenthSec />		 			
      			 	</div>
      			</div>	
      			{/* <!-- //Tools section end --> */}

      			{/* <!-- Resource-sec -->/ */}
      			<div className="resource-sec pt-5 pb-5">
      				<div className="container">
                          <BuildDevEleventhSec /> 
      					<div className="row">
      						<BuildDevTwelthSec />

      					</div>
      				</div>
      			</div>
      			{/* <!-- // --> */}


      			{/* <!-- Uptodate-sec --> */}
      			<div className="stay-up-date pt-5 pb-5">
      				<div className="container">
      					<div className="row align-items-center">
      						<div className="col-lg-3 col-md-2 col-12">
      							<div className="up-to-date-heading">
                                  <BuildDevThirteenthSec /> 
      							</div>
      						</div>

      						<BuildDevFourteenthSec />

      					
      					</div>
      				</div>
      			</div>
      			{/* <!-- //Update-end --> */}

				  <div class="b-top-line pt-2 pb-2 mt-5"></div>

      			{/* <!-- Ecosystem-sec --> */}
      			<div className="ecosystem-sec pt-5 pb-5">
      				<div className="conatiner">
      					<div className="row align-items-center">
      						<div className="col-lg-6 col-md-6 col-12">
      							<div className="left-sec-content" data-aos="fade-right">
      								<BuildDevFifteenthSec />
      								<button className="btn btn-green">Learn More</button>
      							</div>
      						</div>
      						<div className="col-lg-6 col-md-6 col-12">
   								{/* <div className="right-side-img"> */}
   									{/* <img src="images/eco-circle.png" alt=""/> */}
									<div className='circle-side-img' data-aos="fade-left">
									<img src={eco} className='img-fluid' />
									</div>
   								</div>
      						</div>
      					</div>
      				</div>
      			</div>
      			{/* <!-- Secosystem-sec --> */}



      		</div>
      
            <div className="destination-sec">
     <div className="custom-wrapper">
         <div className="destination-content d-flex align-items-center justify-space-between">
             <h4>Have questions? join<strong>#sc-support channel</strong></h4>
             <div className="single-line"></div>
             <div className="btn-green">
               <span>Go to Discord <BsDiscord/></span>
             </div>
            </div>
            </div>
            </div>


       <footer className='footer_content'>
        <Footer />
       </footer>
    </>

  )
}
export default Builddev