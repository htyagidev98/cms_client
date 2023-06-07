import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaRegEdit } from 'react-icons/fa';
import {RxCross2} from 'react-icons/rx'
import { useSelector } from 'react-redux'
import ThirdSecEcosystemModal from './ThirdSecEcosystemModal';
import cardImage from '../../../../assets/synor-img.jpg'
import { toast } from 'react-toastify';
const EcoSystemThirdSec = ({cardData, setUpdateUi}) => {
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
            const response = await axios.delete(`ecosystem/imageCard/delete?_id=${id}`);
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
              cardData && cardData.length>0 ? cardData.map((curElm) => <div className="col-lg-3 col-md-3 col-12">
                       {
                        contactData.token && <span className='d-block text-end cursor text-white'> <FaRegEdit onClick={() => getData(curElm)} className='me-3' /> <RxCross2 onClick={() => trashData(curElm._id)} /> </span>
                    }
                    <div className="small-cards">
                        <div className=" d-flex align-items-center">
                            <div className="side-thumb">
                                <img src={curElm.image_url} />
                            </div>
                            <div className="side-content ms-3 text-white">
                            <div dangerouslySetInnerHTML={{ __html: curElm.title }}></div>

                            </div>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: curElm.paragraph }} className="mt-3 text-white"></div>

                        <div className="custom-badges little-badges ms-0">
                            <ul>
                                <li>Defi</li>
                                <li>Dex </li>
                                <li>DAO</li>
                            </ul>
                        </div>
                        <div className="learn-more-btn">
                            <button className="transparent-btn small-card-btn">Learn More <span className="lnr lnr-arrow-right"></span></button>
                        </div>
                    </div>
                </div>) :<div className='text-white'>No data Found </div>
            }



            {
                CardModal && <ThirdSecEcosystemModal show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
            }
        </>
    )
}

export default EcoSystemThirdSec



