import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaRegEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import ThirdSecUtilityModal from './ThirdSecUtilityModal';

const UtilityThirdSec = () => {
    const {contactData} = useSelector((state)=> state.contact);
    const [CardModal, setCardModal]=useState(false);   
    const [cardData, setCardData]= useState([]);
    const [objectData, setObjectData]= useState({})
    const [updateUi, setUpdateUi]= useState(false);
   
    const closeModal=()=>{
       setCardModal(false);
   }
   
    const fetchHeroData=async()=>{
       try {
          const res= await axios.get("/utility/count/get")
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
        <div className=''>
            {
                cardData?.map((curElm)=><div>

                {
                  contactData.token && <span className='d-block text-end cursor text-white' onClick={()=>getData(curElm)}><FaRegEdit /> </span>
                }
               
                <span dangerouslySetInnerHTML={{ __html: curElm.title }} className=" global-pera text-white"></span> 
                <span dangerouslySetInnerHTML={{ __html: curElm.content }} className=" global-pera"></span> 
            
              
           </div>)
            }
            {
               CardModal && <ThirdSecUtilityModal  show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
              }
        </div>
    )
}

export default UtilityThirdSec