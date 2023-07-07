import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaRegEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import SecondCasesSecModal from './SecondCasesSecModal';
import { BsArrowRight, BsBoxArrowUpRight, BsFileArrowDown } from 'react-icons/bs'
// import smartcontract from '../../../assets/smart-contract.svg';
import smartcontract from '../../../../assets/smart-contract.svg';
import sharedrevenue from '../../../../assets/shared-revenue.svg';
import wallet from '../../../../assets/wallet.svg';
import supplychain from '../../../../assets/supply-chain.svg';
import signatory from '../../../../assets/notary-signatory.svg';
import dns from '../../../../assets/dns.svg';
import asset from '../../../../assets/asset-digitization.svg';
import gameasset from '../../../../assets/games.svg';
import transparent from '../../../../assets/public-document.svg';
import database from '../../../../assets/database.svg';
import tax from '../../../../assets/tax.svg';
import iot from '../../../../assets/iot.svg';
import { BASE_URL } from '../../../../../utility/Helper';

const UseCasesSecondSec = () => {
   const { contactData } = useSelector((state) => state.contact);
   const [CardModal, setCardModal] = useState(false);
   const [cardData, setCardData] = useState([]);
   const [objectData, setObjectData] = useState({})
   const [updateUi, setUpdateUi] = useState(false);

   const closeModal = () => {
      setCardModal(false);
   }

   const fetchHeroData = async () => {
      try {
         const res = await axios.get(`${BASE_URL}/use/cases/animated/get`)
         setCardData(res.data.responseData);
      } catch (error) {
         console.log(error)
      }

   }

   const getData = async (data) => {
      setCardModal(true)
      setObjectData(data)
   }


   useEffect(() => {
      fetchHeroData();
   }, [updateUi])

   return (
      <>
         {
            cardData.map((curElm) => <div className="col-md-4 mx-auto hover_common">
               <div className="intro-card" data-aos="zoom-in-up">
                  <div className="intro-content">
                     <div className="intro-icon">
                        {/* <img src="images/intro-four.svg"> */}
                        <img src={
                           curElm._id === "64787429bf8cdb4d245e4acc" ? smartcontract :
                              curElm._id === "64787451bf8cdb4d245e4acf" ? sharedrevenue :
                                 curElm._id === "64787480bf8cdb4d245e4ad2" ? wallet :
                                    curElm._id === "647874a3bf8cdb4d245e4ad5" ? supplychain :
                                       curElm._id === "647874c8bf8cdb4d245e4ad8" ? signatory :
                                          curElm._id === "647874e9bf8cdb4d245e4adb" ? dns :
                                             curElm._id === "647874ffbf8cdb4d245e4ade" ? asset :
                                                curElm._id === "6478751fbf8cdb4d245e4ae1" ? gameasset :
                                                   curElm._id === "6478754abf8cdb4d245e4ae4" ? database :
                                                      curElm._id === "64787573bf8cdb4d245e4ae7" ? tax :
                                                         curElm._id === "6478758fbf8cdb4d245e4aea" ? iot :
                                                            curElm._id === "647875b3bf8cdb4d245e4aed" ? transparent :
                                                               null
                        }
                           className='img-fluid' />
                     </div>
                     {
                        contactData.token && <span className='d-block text-end cursor text-white' onClick={() => getData(curElm)}><FaRegEdit /> </span>
                     }
                     <div dangerouslySetInnerHTML={{ __html: curElm.title }} className=" global-pera text-white"></div>
                     <div dangerouslySetInnerHTML={{ __html: curElm.paragraph }} className=" global-pera"></div>

                     <div className="poisition-btn">
                        <button className="green-btn-efect">
                           <span className="lnr lnr-move"></span>
                           <BsArrowRight />
                        </button>
                     </div>
                  </div>
               </div>
            </div>)
         }
         {
            CardModal && <SecondCasesSecModal show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
         }
      </>
   )
}

export default UseCasesSecondSec



