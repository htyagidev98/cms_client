import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaRegEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import SecondCasesSecModal from './SecondCasesSecModal';
import {BsArrowRight,BsBoxArrowUpRight,BsFileArrowDown} from 'react-icons/bs'
// import smartcontract from '../../../assets/smart-contract.svg';
import smartcontract from '../../../../assets/smart-contract.svg';

const UseCasesSecondSec = () => {
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
          const res= await axios.get("/use/cases/animated/get")
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
        <>
             {
                cardData.map((curElm)=> <div className="col-md-4 mx-auto hover_common">
                <div className="intro-card" data-aos="zoom-in-up">
                   <div className="intro-content">
                      <div className="intro-icon">
                         {/* <img src="images/intro-four.svg"> */}
                         <img src={smartcontract} className='img-fluid' />
                      </div>
                      {
                  contactData.token && <span className='d-block text-end cursor text-white' onClick={()=>getData(curElm)}><FaRegEdit /> </span>
                }
                <div dangerouslySetInnerHTML={{ __html: curElm.title }} className=" global-pera text-white"></div>
                <div dangerouslySetInnerHTML={{ __html: curElm.paragraph }} className=" global-pera"></div>

                      <div className="poisition-btn">
                         <button className="green-btn-efect">
                            <span className="lnr lnr-move"></span> 
                            <BsArrowRight/>
                         </button>
                      </div>
                   </div>
                </div>
             </div>)
             }
            {
               CardModal && <SecondCasesSecModal  show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
              }
        </>
    )
}

export default UseCasesSecondSec



