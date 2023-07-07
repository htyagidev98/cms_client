import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import PressKitThirdSec from './PressKitThirdSec';
import SecondSecPressKitModal from './SecondSecPressKitModal';
import { BASE_URL } from '../../../../utility/Helper';

const PressKitSecondSec = () => {
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
          const res= await axios.get(`${BASE_URL}/press/profile/get`)
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

<div className="row">
        <div className="col-md-4 left-sticky">
            <div className="tutorial-small-card">
            <div dangerouslySetInnerHTML={{ __html: cardData.title }}></div>

              </div>
        </div>
    <div className="col-md-8 right-text">
        <div className="intro-sec ps-md-4 ps-0">
        <div dangerouslySetInnerHTML={{ __html: cardData.paragraph }} className=" mt-3"></div>

          </div>

          <div className="static-numbr-row row">
            <PressKitThirdSec />
           </div>
    </div>
    </div>
           
            {
            CardModal && <SecondSecPressKitModal show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
           }
        </div>
    )
}

export default PressKitSecondSec;