import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import FirstSecAmbassadorModal from './FirstSecAmbassadorModal';
import { ReactComponent as ArrowLeftIcon } from "../../../assets/arrow-left.svg";
import { BASE_URL } from '../../../../utility/Helper';

const AmbassadorFirstSec = () => {
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
            const res = await axios.get(`${BASE_URL}/ambassador/ambassador/program/get`)
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
        <div className='text-white'>
            {
                contactData.token && <span className='d-block text-end cursor' onClick={() => getData(cardData)}><FaRegEdit /> </span>
            }

            <div className="ambassodor__left">
            <div dangerouslySetInnerHTML={{ __html: cardData.title }}></div>

                <div className="ambassodor__text">
                    <span className="ambassodor__hr">
                        <span className="line"></span>
                    </span>
                    <div className="ambassodor__scroll">
                        <span>
                            <ArrowLeftIcon /> &nbsp; Scroll
                        </span>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: cardData.paragraph }} className=" mt-3"></div>

                </div>
            </div>

            {
                CardModal && <FirstSecAmbassadorModal show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
            }
        </div>
    )
}

export default AmbassadorFirstSec;