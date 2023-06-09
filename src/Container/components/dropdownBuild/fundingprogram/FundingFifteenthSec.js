import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaRegEdit } from 'react-icons/fa';
import {RxCross2} from 'react-icons/rx'
import { useSelector } from 'react-redux'
import cardImage from '../../../assets/synor-img.jpg'
import { toast } from 'react-toastify';
import FifteenthSecFundingModal from './FifteenthSecFundingModal';
const FundingFifteenthSec = ({cardData, setUpdateUi}) => {
    const { contactData } = useSelector((state) => state.contact);
    const [CardModal, setCardModal] = useState(false);
    const [objectData, setObjectData] = useState({})


    const closeModal = () => {
        setCardModal(false);
    }

    const getData = async (data) => {
        setCardModal(true)
        setObjectData(data)
    }

    const trashData= async(id)=>{
        try {
            const response = await axios.delete(`/build/supporter/card/delete?_id=${id}`);
            if(response.status===200){
                
               toast.success('Card Deleted Successfully'); 
               setUpdateUi((prev)=>!prev)

            }
          } catch (error) {
            console.error(error);
          }   
        
        }


   
    return (
        <>
            {
               cardData && cardData.length>0 ?  cardData.map((curElm)=><div className='row align-items-center'>
                      {
              contactData.token && <span className='d-block text-end cursor text-white'> <FaRegEdit onClick={() => getData(curElm)} className='me-3' /> <RxCross2 onClick={() => trashData(curElm._id)} /> </span>
          }
                <div className='col-lg-6 col-12'>
                <div className='logo-img text-center'>
                   <img src={curElm.image_url} alt='Aws-logo' className='img-fluid'/>
                </div>
             </div>
             <div className='col-lg-6 col-12'>
                <div className='logo-content-info py-5 text-center'>
                <div dangerouslySetInnerHTML={{ __html: curElm.paragraph }} className="mt-3 text-white"></div>

                </div>
             </div>
          </div>) :<div className='text-white'>No data Found </div>
            }
            {
                CardModal && <FifteenthSecFundingModal show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
            }
        </>
    )
}

export default FundingFifteenthSec



