import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaRegEdit } from 'react-icons/fa'
import ApplicationCardModal from './ApplicationCardModal';
import { useSelector } from 'react-redux'

const ApplicationCard = () => {
const navigate = useNavigate();
const [CardModal, setCardModal]=useState(false);   
 const [cardData, setCardData]= useState({});
 const [objectData, setObjectData]= useState({})
 const [updateUi, setUpdateUi]= useState(false);
 const {contactData} = useSelector((state)=> state.contact);

 const closeModal=()=>{
    setCardModal(false);
}

 const fetchHeroData=async()=>{
    try {
       const res= await fetch("/application/get")
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
    <div className="col-md-6">
    <div className='app_right_data ' data-aos="fade-left">
      {
         contactData.token && <span className='d-block text-end cursor' onClick={()=>getData(cardData)}><FaRegEdit /> </span>
      }
   
     <div dangerouslySetInnerHTML={{ __html: cardData.title }}></div>

       <span className='app_line'></span>
       <div dangerouslySetInnerHTML={{ __html: cardData.paragraph }}></div>

       <button onClick={() => navigate('/staking')} className='app_left_button'>Explore the ecosystem</button>
    
    </div>

    {
            CardModal && <ApplicationCardModal  show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
           }
 </div>
)
}

export default ApplicationCard