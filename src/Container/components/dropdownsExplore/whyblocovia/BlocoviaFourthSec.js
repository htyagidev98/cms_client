import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaRegEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import FourthSecModal from './FourthSecModal';
import { BASE_URL } from '../../../../utility/Helper';

const BlocoviaFourthSec = () => {
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
          const res= await axios.get(`${BASE_URL}/explore/security/get`)
          setCardData(res.data.responseData);
           console.log('res third', res.data.responseData)
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
               
                <span className='me-3 text-white'><i class={curElm._id === "6476dc44cdbf0b12862a9d73" ? "fa-regular fa-flag" :curElm._id === "6476dc75cdbf0b12862a9d76" ? "fa-regular fa-lightbulb" :null}></i></span>
                <div dangerouslySetInnerHTML={{ __html: curElm.title }} className=" global-pera text-white"></div> 
                <div dangerouslySetInnerHTML={{ __html: curElm.paragraph }} className=" global-pera"></div> 
            
              
           </div>)
            }
         {
               CardModal && <FourthSecModal  show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
              }
        </div>
    )
}

export default BlocoviaFourthSec