import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaRegEdit } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import SeventhSecPressKitModal from './SeventhSecPressKitModal';
import { BsDownload } from 'react-icons/bs';
import { BASE_URL } from '../../../../utility/Helper';
const PressKitSeventhSec = ({ cardData, setUpdateUi, gettingData }) => {
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
            const response = await axios.delete(`${BASE_URL}/press/brand/card/delete?_id=${id}`);
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
                cardData.map((curElm) => {
                    return (
                        <>
                            <div className="col-md-6">
                                {
                                    contactData.token && <span className='d-block text-end cursor text-white'> <FaRegEdit onClick={() => getData(curElm)} className='me-3' /> <RxCross2 onClick={() => trashData(curElm._id)} /> </span>
                                }
                                <div className="brand-card">
                                    <div className="img-brand">
                                        <img src={curElm.image_url} />
                                    </div>
                                    <div className="text-brand">
                                        <div dangerouslySetInnerHTML={{ __html: curElm.title }} className="mt-3 text-white"></div>
                                        <div className="color-text">
                                            <span className="white">White</span>
                                            <span className="graphite">Graphite</span>
                                            <span className="black">Black</span>
                                        </div>
                                    </div>
                                    <div className="download-files">
                                        {/* <!-- put react icon  --> */}
                                        <span className="png-file"><BsDownload /> PNG</span>
                                        <span className="svg-file"><BsDownload /> SVG</span>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
            {
                CardModal && <SeventhSecPressKitModal show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
            }
        </>
    )
}

export default PressKitSeventhSec



