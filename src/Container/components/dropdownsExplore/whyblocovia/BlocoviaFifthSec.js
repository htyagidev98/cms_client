import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaRegEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import FifthSecModal from './FifthSecModal';

const BlocoviaFifthSec = () => {
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
          const res= await axios.get("/explore/privacy/get")
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
               
                <span className='me-3 text-white'><i class={curElm._id === "6476f6dc8040362809e5bbf1" ? "fa-regular fa-flag" :curElm._id === "6476f6f78040362809e5bbf4" ? "fa-regular fa-lightbulb" :null}></i></span>
                <div dangerouslySetInnerHTML={{ __html: curElm.title }} className=" global-pera text-white"></div> 
                <div dangerouslySetInnerHTML={{ __html: curElm.paragraph }} className=" global-pera"></div> 
            
              
           </div>)
            }
         {
               CardModal && <FifthSecModal  show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
              }
        </div>
    )
}

export default BlocoviaFifthSec