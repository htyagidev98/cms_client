import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaRegEdit } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import EleventhSecCoreTeamModal from './EleventhSecCoreTeamModal';
const CoreTeamEleventhSec = ({ cardData, setUpdateUi, gettingData }) => {
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
            const response = await axios.delete(`/team/advisors/card/delete?_id=${id}`);
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
                cardData.map((curElm) => <div className="col-lg-2 col-md-6 col-12 ">
                    {
                        contactData.token && <span className='d-block text-end cursor text-white'> <FaRegEdit onClick={() => getData(curElm)} className='me-3' /> <RxCross2 onClick={() => trashData(curElm._id)} /> </span>
                    }
                    <div className="team-card advisor-card" onClick={()=>gettingData(curElm)}>
                        <div className="img-wrapper">
                            <img
                                src={curElm.image_url}
                                className=""
                            />
                        </div>
                        <div className="team-bio-s dangerios_div">
                        <div dangerouslySetInnerHTML={{ __html: curElm.title }} className=" text-white"></div>

                         <div dangerouslySetInnerHTML={{ __html: curElm.paragraph }} className=" text-white"></div> 

                          <div dangerouslySetInnerHTML={{ __html: curElm.qualificaton }} className=" text-white"></div> 

                            <a href="#" className="btn-bio">
                                Read bio
                            </a>
                        </div>
                    </div>
                </div>)
            }
            {
                CardModal && <EleventhSecCoreTeamModal show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
            }
        </>
    )
}

export default CoreTeamEleventhSec



