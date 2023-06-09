import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import SixthSecFundingModal from './SixthSecFundingModal';

const FundingSixthSec = () => {
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
            const res = await axios.get("/build/available/get")
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
               contactData.token && <span className='d-block text-end cursor' onClick={()=>getData(cardData)}><FaRegEdit /> </span>
             }
            <div className="scrollspy-info">
            <div dangerouslySetInnerHTML={{ __html: cardData.title }}></div>

            </div>
            <div className='usd-card text-center mb-5'>
            <div dangerouslySetInnerHTML={{ __html: cardData.content }} className="mt-3"></div>

            </div>
            <div dangerouslySetInnerHTML={{ __html: cardData.paragraph }} className="mt-3"></div>
            {
            CardModal && <SixthSecFundingModal  show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
           }

        </>
    )
}

export default FundingSixthSec;