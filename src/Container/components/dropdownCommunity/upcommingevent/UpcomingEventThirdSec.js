import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaRegEdit } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx'
import { useSelector } from 'react-redux'
import { Col, Container, Row } from "react-bootstrap";
import { ReactComponent as RightArrow } from "../../../assets/arrow-right.svg";
import { toast } from 'react-toastify';
import ThirdSecUpcomingEventModal from './ThirdSecUpcomingEventModal';
import { BASE_URL } from '../../../../utility/Helper';
const UpcomingEventThirdSec = ({ cardData, setUpdateUi, setModalShow, galleryFlag }) => {
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

    const trashData = async (id) => {
        try {
            const response = await axios.delete(`${BASE_URL}/upcoming-events/gallery/card/delete?_id=${id}`);
            if (response.status === 200) {

                toast.success('Card Deleted Successfully');
                setUpdateUi((prev) => !prev)

            }
        } catch (error) {
            console.error(error);
        }

    }



    return (
        <>

            {
               cardData && cardData.length>0 ?cardData.map((curElm, index) =>( 
                index <3  && !galleryFlag &&(
               <Col md="6" lg="4">
                    {
                        contactData.token && <span className='d-block text-end cursor text-white'> <FaRegEdit onClick={() => getData(curElm)} className='me-3' /> <RxCross2 onClick={() => trashData(curElm._id)} /> </span>
                    }
                    <div className="galleryCard" onClick={() => setModalShow(true)}>
                        <div className="galleryCard__img">
                            <img
                                src={curElm.image_url}
                                alt="gallery-1"
                                className="img-fluid"
                            />
                        </div>
                        <div className="galleryCard__caption">
                        <div dangerouslySetInnerHTML={{ __html: curElm.title }}></div>
                        <div dangerouslySetInnerHTML={{ __html: curElm.paragraph }} className="mt-3 text-white"></div>
 
                            <button className="galleryBtn">
                                Go to event Photos <RightArrow />
                            </button>
                        </div>
                    </div>
                </Col>)|| galleryFlag && (
                   <Col md="6" lg="4">
                   {
                       contactData.token && <span className='d-block text-end cursor text-white'> <FaRegEdit onClick={() => getData(curElm)} className='me-3' /> <RxCross2 onClick={() => trashData(curElm._id)} /> </span>
                   }
                   <div className="galleryCard" onClick={() => setModalShow(true)}>
                       <div className="galleryCard__img">
                           <img
                               src={curElm.image_url}
                               alt="gallery-1"
                               className="img-fluid"
                           />
                       </div>
                       <div className="galleryCard__caption">
                       <div dangerouslySetInnerHTML={{ __html: curElm.title }}></div>
                       <div dangerouslySetInnerHTML={{ __html: curElm.paragraph }} className="mt-3 text-white"></div>

                           <button className="galleryBtn">
                               Go to event Photos <RightArrow />
                           </button>
                       </div>
                   </div>
               </Col>
                ))):<div className='text-white'>No data Found </div>
            }


            {
                CardModal && <ThirdSecUpcomingEventModal show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
            }
        </>
    )
}

export default UpcomingEventThirdSec



