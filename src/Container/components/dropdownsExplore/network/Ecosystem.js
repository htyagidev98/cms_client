import React, { useEffect, useState } from 'react'
import { BsArrowRight, BsBoxArrowUpRight, BsDot, BsFileArrowDown } from 'react-icons/bs'
import { BiLinkExternal } from 'react-icons/bi'
import './ecosystem.css'
import Header from '../../../common/header/Header'
import Navbar from '../../../common/navbar/Navbar'
import hero from '../../../assets/hero-ecosystem.png'
import JoinSection from '../../dropdownCommunity/JoinSection'
import Footer from '../../../common/footer/Footer'
import EcosystemFirstSec from './ecosystem/EcosystemFirstSec'
import { useSelector } from 'react-redux'
import AddCardSecModal from './ecosystem/addcardmodal/AddCardSecModal'
import EcoSystemThirdSec from './ecosystem/EcoSystemThirdSec'
import EcoSystemSecondSec from './ecosystem/EcoSystemSecondSec'
import axios from 'axios'




const Ecosystem = () => {
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
         const res = await axios.get("/ecosystem/imageCard/get")
         setCardData(res.data.responseData);


      } catch (error) {
         //   if(error.response.status === 404){
         //    setCardData([])
         console.log(error);

      // }
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
      <div className="mini-banner no-bg-img">
         <div className="custom-wrapper">
            <div className="row align-items-center">
               <div className="col-lg-6 col-md-6 col-12">
                  <div className="banner-content-left">
                     <EcosystemFirstSec />
                     <button className="green-btn applyBtn">Submit new</button>
                  </div>
               </div>
               <div className="col-lg-6 col-md-6 col-12">
                  <div className="banner-right-img">
                     <img src={hero} />
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="card-listing section-padding">
         <div className="custom-wrapper">

            <div className="custom-cards-sec mt-5">
               <div className="row">

                  <EcoSystemSecondSec />

               </div>

               <div className="b-card mt-3">
                  {
                     contactData.token && <div className='text-end mb-2'><button onClick={() => showModal()} className='btn btn-primary btn-sm'>Add-Card</button> </div>
                  }

                  <div className="row">
                     <EcoSystemThirdSec cardData={cardData} setUpdateUi={setUpdateUi} />

                     {
                        AddCardModal && <AddCardSecModal show={AddCardModal} setUpdateUi={setUpdateUi} hide={closeModal} />
                     }
                  </div>
               </div>
            </div>
         </div>
      </div>

      <JoinSection buttonText="Reach out" text="Want to add " boldText="your project on Blockovia?" />

      <footer className="footer_content">
         <Footer />
      </footer>
   </>
)
}
export default Ecosystem