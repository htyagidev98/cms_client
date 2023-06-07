import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaRegEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import { BsArrowRight, BsBoxArrowUpRight, BsFileArrowDown } from 'react-icons/bs'
import FifthSecFundingModal from './FifthSecFundingModal';

const FundingFifthSec = () => {
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
            const res = await axios.get("/build/resourceCard/get")
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
                cardData.map((curElm) => <div className='col-lg-4 col-md-4 col-12'>
                    {
                        contactData.token && <span className='d-block text-end cursor text-white' onClick={() => getData(curElm)}><FaRegEdit /> </span>
                    }
                    <div className='epp-mini-card light-cards'>
                        <div dangerouslySetInnerHTML={{ __html: curElm.title }} className="text-white"></div>
                        <div dangerouslySetInnerHTML={{ __html: curElm.paragraph }} className="mt-3 text-white"></div>

                    </div>
                </div>)
            }


            {
                CardModal && <FifthSecFundingModal show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
            }
        </>
    )
}

export default FundingFifthSec



