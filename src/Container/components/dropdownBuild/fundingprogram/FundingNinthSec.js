import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaRegEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import { BsArrowRight, BsBoxArrowUpRight, BsFileArrowDown } from 'react-icons/bs'
import NinthSecFundingModal from './NinthSecFundingModal';

const FundingNinthSec = () => {
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
            const res = await axios.get("/build/criteria/card/get")
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
                cardData.map((curElm) => <div className='col-lg-6 col-md-6 col-12'>
                    {

                        contactData.token && <span className='d-block text-end cursor text-white' onClick={() => getData(curElm)}><FaRegEdit /> </span>
                    }

                    <div className='row'>
                        <div className='col-lg-1 col-md-1 col-12'>
                            <div className='check-icon'>
                                <span class="lnr lnr-checkmark-circle"></span>
                            </div>
                        </div>
                        <div className='col-lg-11 col-md-11 col-12'>
                            <div className='criteria-card'>
                                <div dangerouslySetInnerHTML={{ __html: curElm.title }} className="text-white"></div>
                                <div dangerouslySetInnerHTML={{ __html: curElm.paragraph }} className="mt-3 text-white"></div>

                            </div>
                        </div>
                    </div>
                </div>)
            }

            {
                CardModal && <NinthSecFundingModal show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
            }
        </>
    )
}

export default FundingNinthSec



