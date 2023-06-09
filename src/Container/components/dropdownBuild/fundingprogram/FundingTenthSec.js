import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import TenthSecFundingModal from './TenthSecFundingModal';

const FundingTenthSec = () => {
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
          const res= await axios.get("/build/request/get")
          setCardData(res.data.responseData);
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
        <div className='text-white'>
             {
               contactData.token && <span className='d-block text-end cursor' onClick={()=>getData(cardData)}><FaRegEdit /> </span>
             }
           
           <div dangerouslySetInnerHTML={{ __html: cardData.title }}></div>
             <div dangerouslySetInnerHTML={{ __html: cardData.paragraph }} className="mt-3"></div>
            {
            CardModal && <TenthSecFundingModal  show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
           }
        </div>
    )
}

export default FundingTenthSec;