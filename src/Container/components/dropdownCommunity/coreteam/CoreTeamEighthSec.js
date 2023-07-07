import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaRegEdit } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import EighthSecCoreTeamModal from './EighthSecCoreTeamModal';
import { BASE_URL } from '../../../../utility/Helper';
const CoreTeamEighthSec = ({ cardData, setUpdateUi, gettingData }) => {
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
            const response = await axios.delete(`${BASE_URL}/team/cardinal/card/delete?_id=${id}`);
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
                cardData.map((curElm) => <div className="col-md-3 col-sm-6">
                    {
                        contactData.token && <span className='d-block text-end cursor text-white'> <FaRegEdit onClick={() => getData(curElm)} className='me-3' /> <RxCross2 onClick={() => trashData(curElm._id)} /> </span>
                    }
                    <div className="card-devlopmnt" onClick={()=>gettingData(curElm)}>
                        <div className="img-side zindex">
                            <img src={curElm.image_url} style={{height:"100%", width:"100%", objectFit:"cover",}} />
                        </div>
                        <div className="right-side">
                        <div dangerouslySetInnerHTML={{ __html: curElm.title }} className="mt-3 text-white"></div>
                        <div dangerouslySetInnerHTML={{ __html: curElm.paragraph }} className="mt-3 text-white"></div>                           
                        </div>
                        <div className="btn-read-bio">
                            <a
                                className="btn-bio-des2"
                                // onClick={() => setShowModal(true)}
                            >
                                Read bio
                            </a>
                        </div>
                    </div>
                </div>
                )
            }
            {
                CardModal && <EighthSecCoreTeamModal show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
            }
        </>
    )
}

export default CoreTeamEighthSec



