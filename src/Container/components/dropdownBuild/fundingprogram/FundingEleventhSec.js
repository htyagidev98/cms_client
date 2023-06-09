import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaRegEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import { BsArrowRight, BsBoxArrowUpRight, BsFileArrowDown } from 'react-icons/bs'
import developerFunding from '../../../assets/developer-funding.svg';
import fundingEducation from '../../../assets/funding-education.svg';
import fundingDefi from '../../../assets/funding-defi.svg';
import fundingSustainability from '../../../assets/funding-sustainability.svg';
import fundingDao from '../../../assets/funding-dao.svg';
import fundingTutorial from '../../../assets/funding-tutorial.svg';
import fundingMetversa from '../../../assets/funding-metvera.svg';

import EleventhSecFundingModal from './EleventhSecFundingModal';

const FundingEleventhSec = () => {
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
            const res = await axios.get("/build/request/card/get")
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
                cardData.map((curElm) => <div className="col-md-3 col-12 hover_common">
                    {

                        contactData.token && <span className='d-block text-end cursor text-white' onClick={() => getData(curElm)}><FaRegEdit /> </span>
                    }
                    <div className="stake-card">
                        <div className=" d-flex align-items-center">
                            <div className="top_data">
                                <img src={developerFunding} alt="Stake-img" className="img-fluid" />
                            </div>
                            <div className='proposal-content'>
                            <div dangerouslySetInnerHTML={{ __html: curElm.title }} className="text-white"></div>

                            </div>
                        </div>
                    </div>
                </div>)
            }
            {
                CardModal && <EleventhSecFundingModal show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
            }
        </>
    )
}

export default FundingEleventhSec



