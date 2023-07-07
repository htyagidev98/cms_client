import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaRegEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import { BsArrowRight, BsBoxArrowUpRight, BsFileArrowDown } from 'react-icons/bs'
import fundingLayerOne from '../../../assets/funding-layer-one.svg';
import fundingLayerTwo from '../../../assets/funding-layer-two.svg';
import fundingLayerThree from '../../../assets/funding-layer-three.svg';

import SeventhSecFundingModal from './SeventhSecFundingModal';
import { BASE_URL } from '../../../../utility/Helper';

const FundingSeventhSec = () => {
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
            const res = await axios.get(`${BASE_URL}/build/tierCard/get`)
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

                    <div className='light-cards tiers-cards text-center'>
                        <img src={curElm._id==="648178dcf0e878ae89f1799b"? fundingLayerOne: curElm._id==="64817902f0e878ae89f1799e"? fundingLayerTwo: curElm._id==="64817930f0e878ae89f179a1"?fundingLayerThree:"" } alt='Funding-Layer' className='img-fluid my-3' />

                        <div dangerouslySetInnerHTML={{ __html: curElm.title }} className="text-white"></div>


                        <span class="line_style mb-3"></span>
                        <div dangerouslySetInnerHTML={{ __html: curElm.content }} className="text-white"></div>


                        <div dangerouslySetInnerHTML={{ __html: curElm.paragraph }} className="text-white"></div>

                        
                    </div>
                </div>)
            }
            {
                CardModal && <SeventhSecFundingModal show={CardModal} setUpdateUi={setUpdateUi} hide={closeModal} objectData={objectData} />
            }
        </>
    )
}

export default FundingSeventhSec



