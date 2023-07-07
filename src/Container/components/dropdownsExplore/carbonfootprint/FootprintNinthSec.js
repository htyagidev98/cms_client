import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import NinthSecFootprintModal from './NinthSecFootprintModal';
import { BASE_URL } from '../../../../utility/Helper';

const FootprintNinthSec = () => {
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
          const res= await axios.get(`${BASE_URL}/carbon-negative/agriculture/get`)
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
            <span className='common_line'> </span>
           <div dangerouslySetInnerHTML={{ __html: cardData.title }}></div>
             <div dangerouslySetInnerHTML={{ __html: cardData.paragraph }} className="app_para global-pera mt-3"></div>
            {
            CardModal && <NinthSecFootprintModal  show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
           }
        </div>
    )
}

export default FootprintNinthSec;