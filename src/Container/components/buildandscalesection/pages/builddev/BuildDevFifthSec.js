import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaRegEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import FifthSecBuildDevModal from './FifthSecBuildDevModal';
import { BASE_URL } from '../../../../../utility/Helper';

const BuildDevFifthSec = () => {
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
            const res = await axios.get(`${BASE_URL}/dev/powered/card/get`)
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
                cardData.map((curElm) => <a href="javascript:void(0);" className="mb-2">
                     {
                contactData.token && <span className='d-block text-end cursor text-white' onClick={() => getData(curElm)}><FaRegEdit /> </span>
            }
                <div className="Powered-by-small-card filled-card text-white" data-aos="zoom-in-up">
                  <div className="top-tutorial-sec d-flex justify-space-between">
                  <div dangerouslySetInnerHTML={{ __html: curElm.title }}></div>

                  <span className="lnr lnr-move"></span>
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: curElm.paragraph }}></div>
    
                </div>
               </a>)
            }

            {
                CardModal && <FifthSecBuildDevModal show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
            }
        </>
    )
}

export default BuildDevFifthSec



