import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaRegEdit } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import SeventhSecPressKitModal from './SeventhSecPressKitModal';
import { BsDownload } from 'react-icons/bs';
import TenthSecPressKitModal from './TenthSecPressKitModal';
import { BASE_URL } from '../../../../utility/Helper';
const PressKitTenthSec = ({ cardData, setUpdateUi }) => {
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
            const response = await axios.delete(`${BASE_URL}/press/investors/card/delete?_id=${id}`);
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
                            <div className="col-sm-4">
                            {
                                    contactData.token && <span className='d-block text-end cursor text-white'> <FaRegEdit onClick={() => getData(curElm)} className='me-3' /> <RxCross2 onClick={() => trashData(curElm._id)} /> </span>
                                }
                                <div className="investor-logo">
                                    <img src={curElm.image_url} />
                                </div>
                            </div>

                        </>
                    )
                })
            }
            {
                CardModal && <TenthSecPressKitModal show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
            }
        </>
    )
}

export default PressKitTenthSec



