import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import FourthSecBuildDevModal from './FourthSecBuildDevModal';
import { BASE_URL } from '../../../../../utility/Helper';

const BuildDevFourthSec = () => {
    const { contactData } = useSelector((state) => state.contact);
    const [CardModal, setCardModal] = useState(false);
    const [cardData, setCardData] = useState({});
    const [objectData, setObjectData] = useState({})
    const [updateUi, setUpdateUi] = useState(false);

    const closeModal = () => {
        setCardModal(false);
    }

    const fetchHeroData = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/dev/powered/get`)
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
          

            <div className="col-lg-6 col-md-6 col-12 text-white">
            {
                contactData.token && <span className='d-block text-end cursor' onClick={() => getData(cardData)}><FaRegEdit /> </span>
            }
                <div className="tutorial-small-card" data-aos="zoom-in-up">
                    <div dangerouslySetInnerHTML={{ __html: cardData.title }}></div>

                </div>
                <a href="javascript:void(0);">
                    <div className="Powered-by" data-aos="zoom-in-up">
                        <div className="top-tutorial-sec">
                            <div className="powered-list">
                                <div dangerouslySetInnerHTML={{ __html: cardData.paragraph }} className=" mt-3"></div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            {
                CardModal && <FourthSecBuildDevModal show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
            }
        </>
    )
}

export default BuildDevFourthSec;