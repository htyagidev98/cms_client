import React, { useEffect, useState } from 'react'
import './compeople.css'
import communityLab from '../../assets/community-lab.png';
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaRegEdit } from 'react-icons/fa';
import CommunityModal from './CommunityModal'
import { BASE_URL } from '../../../utility/Helper';
const Compeople = () => {
   const {contactData} = useSelector((state)=> state.contact);
  const [CardModal, setCardModal]=useState(false);   
 const [cardData, setCardData]= useState({});
 const [objectData, setObjectData]= useState({})
 const [updateUi, setUpdateUi]= useState(false);

 const closeModal=()=>{
    setCardModal(false);
}

 const fetchHeroData=async()=>{
    try {
       const res= await fetch(`${BASE_URL}/community/get`)
       const data= await res.json();
       setCardData(data.responseData);

    } catch (error) {
       console.log(error)
    }

 }

  const getData =async(data)=>{
    setCardModal(true)
   setObjectData(data)
  }


 useEffect(()=>{
   fetchHeroData();
 }, [updateUi])

  return (

   <>
   <div className="container">
   <section className="people_wrapper pt-5 pb-5 ">

      <div className="row align-items-center">

      <div className="col-md-6">
         {
              contactData.token &&  <span className='d-block text-end cursor' onClick={()=>getData(cardData)}><FaRegEdit /> </span>
         }
     
            <div className="right_data" data-aos="zoom-in">
            <div className='left-img-sec'>
            <img src={communityLab} alt= "communityLab" className='img-fluid' />
            </div>
            </div>
         </div> 
         <div className="col-md-6">
            <div className='people_right_data ' data-aos="fade-left">
            <div dangerouslySetInnerHTML={{ __html: cardData.title }}></div>


               <span className='people_line'></span>
               <div dangerouslySetInnerHTML={{ __html: cardData.paragraph }}></div>

              <NavLink to="/social-platforms">
               <button className='people_left_button'>Get involved</button>
               </NavLink>
            </div>
         </div>

      </div>

      {
            CardModal && <CommunityModal  show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
           }
   </section>
   </div>

   </>                                  
  )
 }
 export default Compeople                                   