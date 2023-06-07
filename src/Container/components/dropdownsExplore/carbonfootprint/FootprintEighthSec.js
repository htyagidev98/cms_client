import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import EighthSecFootprintModal from './EighthSecFootprintModal';

const FootprintEighthSec = () => {
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
          const res= await axios.get("/carbon-negative/actions/get")
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
           <span className='app_line'></span>
             <div dangerouslySetInnerHTML={{ __html: cardData.paragraph }} className="app_para global-pera mt-3"></div>
            {
            CardModal && <EighthSecFootprintModal  show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
           }
        </div>
    )
}

export default FootprintEighthSec;